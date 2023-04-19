This tutorial uses the file "aug_skel_16880_16827_step_6.blend" as an example. In general, the name of a file follows convention "aug\_skel\_{id1}\_{id2}\_step\_{x}.blend". Note: please use **Blender 2.93.5**.

1. Open "aug_skel_16880_16827_step_6.blend"
2. File -> Save As, please following the naming **convention "{id1}\_{id2}\_{descp}.blend"**, where {descp} can be a short one or two word description of what sequence you hope to animate. For example, {descp} would be "run" if animating a run cycle. In this case, the saved file would be called "16880_16827_run.blend".
3. Delete the intial Cube in "Scene Collections".
4. Create an **Action Editor** in "Dope Sheet".
   1. Make a new panel above the "Timeline" panel and select "Dope Sheet"
      ![4a](/resources/CharacterMixer/workflow_images/4a.png)
   2. Click on "Dope Sheet" in the header of the panel and select "Action Editor"
      ![4b](/resources/CharacterMixer/workflow_images/4b.png)
   3. Click on the armature (highlight in orange) and add a new "Action"
      ![4c](/resources/CharacterMixer/workflow_images/4c.png) 
   4. This is what it looks like after doing these steps
      ![4d](/resources/CharacterMixer/workflow_images/4d.png) 
5. With the armature highlighted, change from "Object Mode" to "Pose Mode"
6. On the right side, expand the panel with "Item", "Tool", and "View". Under "Tool", tick "Auto IK"
   ![6](/resources/CharacterMixer/workflow_images/6.png) 
7. Pose a sequence
   1. I personally find it easier to work on a single plane at a time. Once you are on that plane, you can drag a bone and pose the armature.
      ![7a](/resources/CharacterMixer/workflow_images/7a.png) 
   2. After getting the armature to a desired pose, set a keyframe by: while your mouse is in the viewport panel, hit the letter "a" on your keyboard to select all, then hit the letter "i" and select **"Location & Rotation"**
      ![7b](/resources/CharacterMixer/workflow_images/7b.png) 
   4. This will add the current location and rotation of bones to a keyframe in the Action Editor.
      ![7c](/resources/CharacterMixer/workflow_images/7c.png)  
8. After posing a sequence, change the "End" frame in the "Timeline" panel accordingly.
   ![8](/resources/CharacterMixer/workflow_images/8.png) 
9. You don't need to worry about translating the armature (for example, you might want to have the character bob up and down while running). The code to produce the final animation sequence with character geometry currently ignore translational movements.
10. Save the blend file regularly and send it over! I might request some changes.

Thank you so much for helping! Please don't hesitate to reach out with questions any time.




