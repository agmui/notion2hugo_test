---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-08-03T21:37:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 154
toc: false
icon: ""
---

[Articulated Robotics guide](https://youtu.be/eJZXRncGaGM?si=p88bRTyt1R9TyuiY)

---

<details>
      <summary>What is Lidar?</summary>
      Lidar (light detection and ranging) is using lases to determine how far objects are.
  </details>

TODO:

[link to add other sensors (realsense)](https://docs.nav2.org/setup_guides/sensors/setup_sensors_gz.html)

Often in robotics Odometry is updates very quickly but is prone to drift.

On the other hand Lidar is effectively _“ground truth”_ because it can see the world around it however updates very slowly.

By using these two sensors together we can cover each others weaknesses.

In between the long update periods of Lidar we can use Odometry to get an accurate measurement of where we are. Then when the Lidar measurement eventually comes we correct the Odometry’s drift.

Just for this guide we will be sticking to a 2D Lidar but these instructions can be adapted to any kind of Lidar.

Nav2 expects Lidar data to be published on the `/scan` topic with type `sensor_msgs/LaserScan`

## Simulating Lidar in Gazebo

We must first add a Lidar link into our `urdf` to know where it is on the robot.

Also we have to add a Gazebo plugin to tell Gazebo simulate the Lidar

past this at the bottom of the file before the `</robot>` tag

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```xml

  <link name="lidar_link">
    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <xacro:cylinder_inertia m="0.125" r="0.0508" h="0.055"/>
  </link>

  <joint name="lidar_joint" type="fixed">
    <parent link="base_link"/>
    <child link="lidar_link"/>
    <origin xyz="0 0 0.12" rpy="0 0 0"/>
  </joint>



  <!-- 2D Lidar New Gazebo Sensor Plugin  -->
  <gazebo reference="lidar_link">
    <sensor name="lidar" type="gpu_lidar">
      <always_on>true</always_on>
      <visualize>true</visualize>
      <update_rate>5</update_rate>
      <topic>scan</topic>
      <gz_frame_id>lidar_link</gz_frame_id>
      <lidar>
        <scan>
          <horizontal>
            <samples>360</samples>
            <resolution>1.000000</resolution>
            <min_angle>0.000000</min_angle>
            <max_angle>6.280000</max_angle>
          </horizontal>
        </scan>
        <range>
          <min>0.120000</min>
          <max>12.0</max>
          <resolution>0.015000</resolution>
        </range>
        <noise>
          <type>gaussian</type>
          <mean>0.0</mean>
          <stddev>0.02</stddev>
        </noise>
      </lidar>
    </sensor>
  </gazebo>
```

</div>
<div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3QXDHT%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2Fh7vpFMamp4sTtC0EfxqTWh2tahRsUqWePnQorxI8AiAIjWQ2iUGbcrzi2wBqaq00dmNLBcSeAEsA8jAZupq0WCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIML46dE7CpF7Olilr9KtwDf4P%2B4ybrEXiqD3e2AKHoeDeHApDpb2UG6tia1BH0x5mq9KntN5OjcNEFR4PIsJaXJyKBoPRiIRWam69to0ue3Moj0kmm5lGq9wy8WCR1RPQNbiKBquP68dcrrPBX1mUwOLp2KbB3sCexX8uqeuI2JvCkkngt6msdkToIRqdRoq3OczjD2XRwdyg3aMww8z6Jek9gU%2FyXrRE395YxiBNONwplCPx2mFijAAO%2FyNffDFILUjkT04kyyLSxsqfd4tF0HWUwIbTPdmJflOnKouSuLn%2F3O%2BK404EEiyuR52zdRyRiCXxD9GNbEPNIjdQsAeYQbsYMrhR6shnRTp22WnkCZTJNGd30g2FAXGQk5axFAEfdniWcr2EJnjTlZAim73Fqj8LfD7nZo9c7NFl22T%2FSiRkYg7TjhcOGF2g1nX9BH6tcHfhGe8IfH3QNEktMC%2FlngEU1uIxzIIBiZ5ZEAXDICJdWG4f29226Chj3h6gBdm1x5Vn1yZGVnMPFcX4bLqtjZXEyxczKrzpa88VSgvDx7FQ8yQpQew6PrOpaXLoYVP%2BsLWLGAI0hlwmrpG4RmUUrP9fFgV0Pf4ag4%2FD73r0trybCpjXeN3hCaX%2BVerrQqAqyvLXsGstZjMpY2oow7oT3xAY6pgEFyhG6ZoMfQozWosxPhdjrSUH1gYiqeziYIEhXCeMKcrrdN%2BV7xgo647uFNfQ%2BEhkTsN3wjZA%2BK3F8oGqInX4%2FVsQNHZmcBySIEcRutgm2TLjASBP7g4fZvKn7E9p2U3H95OnPCIN428Q62%2F1bGJSnc164KvLF%2FWDV0fwm5zCWliaeB3UNkULKKo1KqBnJFb%2BeixUsZ89cNf3u7NOKye1dNB9v5xtm&X-Amz-Signature=38d6a36322737afeb1c7439fecda05bc1fc751655b55a3024d3120a0f4dd5b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
</div>

### Adding `/scan` topic in `bridge_config.yaml`

We have to bridge over the `/scan` topic from Gazebo

```yaml
- ros_topic_name: "/scan"
	gz_topic_name: "/scan"
	ros_type_name: "sensor_msgs/msg/LaserScan"
	gz_type_name: "gz.msgs.LaserScan"
	direction: GZ_TO_ROS
```

**Run:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

### Lidar Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=4c9751af4e43dd4512dce0629d627ab2a627aa3e1032663628ff6820d3cefeda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=e8fb63bbe3303960ca49affe4c8ffa84a7e318cf94e283a98f2794ec456ef248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=06f04132c95c6c8c8d1ddcf9a7027323c26b5a9ae2a545d6c2cf3128e6974045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=65a0060665e7c42c3578494664f8b18c34cb0ead4c8871a4da0213cb670b8a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=e91a031e4f22be54bdf684e47bc886009e495e75e6eb7de2fcf0981911d186ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=1015c05472ad69ef853e9251752d1935ed975753eded47a8e3282c4dcf59fef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=19ebb6a298690c75c2cc95ab1cd194bf084930e6df51f8555a9e8d91be38e101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=88dd84de09bb7a527376bc888395e92a293ca87494a77ffd6454ef922844f4fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

{{< /table >}}

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python

    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
    ])
```

<details>
      <summary>Finding Lidar USB port:</summary>
      ```bash
ls /dev/ttyUSB*
```
  </details>

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

To launch the Lidar node use this command below.

 

{{% alert context="warning" %}}

# NOTE: YOUR RPLIDAR MODEL MIGHT BE DIFFERENT

I am using the a2m8 model so I run the launch file below.

However, your model may be different so please look at this guide to find which launch file to run.

[https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz](https://github.com/Slamtec/rplidar_ros/tree/ros2#run-rplidar-node-and-view-in-the-rviz)

{{% /alert %}}

```bash
ros2 launch rplidar_ros view_rplidar_a2m8_launch.py scan_mode:=Boost serial_port:=/dev/ttyUSB0
```

```xml
ros2 launch mbot_pkg display.launch.py
```

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=b90188e61230f744816794238f2cb7c9dd55fff151654f3205e721ed605e3bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UBWKMPS%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T121814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4sDhWn65l4xil8ApXuBzEDdu5sjVAFzMSouMzPtg3%2BwIhANHYC%2F8TVGKH5RBN2%2FJnUo5ktIJ5RCa3XuF%2BB77VMlNPKv8DCEQQABoMNjM3NDIzMTgzODA1Igzml1Ti7PQDvlCZzKEq3AP9x3g7QU5brviWhBBNCcxhtoyCUYjAc8OX7B0OXoZTX%2Bj9q3Ija7fnyescQevwr63JpajJnBjDJjWfEEyZvRRaPh7wmERUHXLzSmv8Rzq6mg%2FJF9p5w5J4w%2Bt6tBPb7slwFybHYBl563ERBOsbKCPhpao4AbJPcduWR9wSBCXeVjKV9b08%2B0Xes9UG%2F97NNwqn0toTUr3h3WlQUTZeRDzRNuN8bFP9C2Kk%2F4HPXarwAwBGNwqP%2FC57ElgOBofZ3vEfCbLt3hVd9zW4ZI3xHag9UAI34NI4c80D%2F%2Bkb6KiGmtzZrJt12tha9Ti5rH%2BJkcoyVRj4jUpA5KP0PH%2BJVJRA%2FzA6TFTdLxU%2FBRnscnVG72DeK9dspVKdyFUvT0KgPIaOxT919MOjuWPD5Xnm78lKf4d%2BkqzXrfy7TbhhhJeH5Nk9ktMa%2FHUrDrVE6keiCDfiAZj7PtcldkCGLyb0xaxorN5evsZAO0fYgbooQEIC3TEAmG3us0i%2FQGI5VYA8vX8K8wQgqH46SIs%2Fu9P45KVxQW%2Fe0%2BhWshyGFkR5DnLI5Ny%2BXH3S9oWDSBV8NR9xkAKLbYV%2FNTQXEBCeZ0Ze3DEYsDMOdXXyTDpypKfKu39OtvnUsxgvguS4d0Zl0zDEhPfEBjqkAULtwORZMRTSE9ZfpoZhpGMpvFXLPiM6ABWEzocuXhWbSZIvLc61GaZ9M23z9gu1RizHb%2BzDWbb%2B2oFVZ4ngsBHxJgS9IwwaqhQEdDbMV2544blcFcqdVLcPFTGfB%2FELJJ07uV%2Fpzv0OeV4euIVQY%2F9%2FQ2Hu1jqx7hbo%2FY6Uw12B0m2mR%2BDLTYwd0SP%2F9HdCRc7eeJl%2Bha4qo74TdYiUE7ugfwA1&X-Amz-Signature=65a0060665e7c42c3578494664f8b18c34cb0ead4c8871a4da0213cb670b8a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python

 def generate_launch_description():
		 ...
		 
     lidar_node = Node(
        package='rplidar_ros',
        executable='rplidar_node',
        name='rplidar_node',
        parameters=[{'channel_type': 'serial',
                     'serial_port': '/dev/ttyUSB0', #recomended to do /dev/serial/by-path/...
                     'serial_baudrate': 115200,
                     'frame_id': 'lidar_link',
                     'scan_mode': 'Boost'}],
        output='screen')

 
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
    ])
```

**Result:**

```xml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```
