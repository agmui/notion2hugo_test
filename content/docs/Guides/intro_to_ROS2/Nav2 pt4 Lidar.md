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
  <summary>{{< markdownify >}}What is Lidar?{{< /markdownify >}}</summary>
  
Lidar (light detection and ranging) is using lases to determine how far objects are.

TODO

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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSADHPZF%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0Y1BWO%2B%2BQuJxblywZ2auVS1adjJhwZJ1yIMpD%2FuHMeAiAKnbXKoJkdkJxcbHEpXToONaKn4y5hSiHOJhW3jFeMdCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrZSdIXiIkbSepJZMKtwDW8tL8%2FR5hIw4GC%2Ft0jHq344%2BUjRgtfRFBTv3QlV1Gm0PleBv%2F2bWSxOoAb12FAfuLySUny1jL1o%2BSLXRnCaCZ4ZlkY1Y8CP24B16mK%2FV5uvqY7Qo2ckok06LtagoBcqvtxk6e9JEvo9F5TVIr7DlJxvupLjkckVIrX1eDwgnbYkDJ%2BsV7eKU9PTLDOkp7iTF3lRpoEUBdqAzk1unlT8lwm1hKth19Ryj4%2FsQfRt3QrSSxShfGplZSt6Ai%2FaOEq6QC5O4Wqvgp4%2FMlgXItXcM8%2F1y1ikvgoUt2raLYUhXGUPLD2nmQemb3xbfGqbHbZPwOJDq1tBxAOzi9pFLpXKfkoh6xiPpBzd9LM83JAX%2FQFTDDHzHq9nFdWF49hwZ8lpeHMXHlpZaUbOeAuSQuZ8PnjLe8jQDnHxVl3mOYjE6a%2Bl00Yv3iNh18GMV2yie%2FKVJbc2vfwKU9EfKtDztHD28Nj0AXroXN8X5rI1cDDAfLoIkovybVT5jPSPBH%2Ba%2FZhFrctKdZqaxl1yDSQ%2FOTmqAVB7%2BGbCclalDjgBTccCwfAAmVz3mK%2B7IdWT9GYlrVyUQPMj2x00MlAtId1l2HcwSFW72sJCieY3hijVTKhUspTQfal4dSTQKr0HKL38wy%2FCvyAY6pgGxy%2FyZcvgAG4rwZ%2F6Fl%2FzB%2BedBct8mcdy4ZRKSQEpLHKdYbtFlDuxJtdgrg5XYrN3G6a3qXHOjVbVdflJDQWvkQPfjyO9WUmqOyegGeWzBqMryqAIYGnsLtK9vkiDfcHweIcLy66BZaC6j0tR7Yp9zNFSE8R9RCKl2d4zDvgK5Fix7aKY0neMNrBNyjfAcAf8mDMEDzndkrSHE6ZHMhbl4N5G3Rtop&X-Amz-Signature=9897e9b11983306e0dcce3427d29479600dfc1b1ba5fd9ed486621aecfdb75c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=60bcaa8cbc1eab2247c00721af6f19361e9acb2fe2b558dc049492f486898698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=4474e04bcb1054cd1f32d871b9f83ffce4d450bd3583bd0d30ac24c0f6b3df13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=176968b8d772615739eaf46cbfb11050095ce57c789ca36a90734f733a5fae1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=e4d556de976bb78b8fff2847eabd258341607e955ba2759cadebc169b64ed357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=2a74dc148ef766c05565ad1a8807ad748e2e6a9c1255e26681f4ec0c41cd6bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=d49f9690b8fcbf8f19ef918d72d1f6c2719ccb27493e2a1a75ac6ce5ff21d1c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=1cc92818b88024d784fa267676fd85d991ca2aac71de99bc3a23ce61f5b035f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=f34b2df979fe4d7ab1f365dbd562ee43767dda6955a5a27f00f1f18fa0c8cfce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Params:

| **Name**          | **Type**             |
| ----------------- | -------------------- |
| `serial_port`     | string               |
| `serial_baudrate` | int (model specific) |
| `frame_id`        | string               |
| `scan_mode`       | string               |

#### description:

publishes the `/scan` topic for RPLIDAR products

[official docs link](https://github.com/Slamtec/rplidar_ros/tree/ros2#slamtec-lidar-ros2-package)

{{% /alert %}}

Remember to disable gazebo nodes for physical setup

```python "5-5","10-13"

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
  <summary>{{< markdownify >}}Finding Lidar USB port:{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=086e92122297013c8300480c6f26fef8e82037e3f1327d008440490d249d2aec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECVGYVB%2F20251106%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251106T013835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDucknumrMQNo5rC2vf1mrxsr8F2KilJe0s2hzfaSAfPQIgFs7huS%2BCmGs8Nsfhjo68GmyLg%2FPl4rDeKbPe85BJum8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD%2B8Y0snpUnE3ot%2FPyrcA7twOUvGZLciWTkbgJD%2F1MqESt9B2fQBjtSWvv1LIf%2BuJh0ai%2FRQg5gLLdD0Fr%2FVNzdDmSM0eTTqotE%2BRu3HE58h8tobaPfykHRNyKXD3KSNyownaMMGONXfx8PDI6fdpLsLw8vJNMnMl8S2hRoepYU%2B7htsBLynjwyG956RkAZHmc458W%2BqzJ4GXxuqUhuNLEY%2BG3EBighs4qxJ9pibe9I0InhNpmZizmcNCQjNyK4jO3JB%2B%2BFHH042yRtfRsgAro0AfKUeTUWctP6ZUKBFJ7dIwuhGPqvytQ1lAaZhHl9T3adDQvJDEOQBgXdSLKvKlJx%2F85t%2FW4uTVCRp8bdU7INRt1Pv4e22%2Bo%2F1s98rzRQEPTFPi13zl3W2gKmK3oylXAkXsYnoUBx5BP02fUfi%2B5lcXl7%2BprYCT8I7K%2BWbz6CHQPIYaQUJfLWWzLJPGsXKyNNI%2B9pcmg%2FEbJTfBb6TMjBbO%2BZwZ%2Fp%2FgcPkSdFnzkvdpUUF6%2FiEdcb1hVCFBJ1IXEFOGSNfutHUDMw2mHPS3rO6TfS9M%2F61Zefxu2w1hcHTzNvgaUMAsQoZwBlcI8%2BReXQPW3%2Fgv1BGdGEZA0fpT4NBNJEcp0eykLBPY1ylXBnLaDXpa2q2E8DHPkwtMPXxr8gGOqUBj2wGQcJy%2B3IHO%2B40N4EcdMOxzXQAcAPtqwlkujRw9xlcqV7sm0hFHTDn3UB2nn%2B4Mg5XI2xiBwdmQuEhu4VC3zo38%2FFO2M4ypVm4QbDwgvpxt1d1vIEZ1W8M5LRHCz2zIa3I3fPdcCAluIG2jG09%2FTI1NFZ%2FBtLllQ8O6n4JQulirHX0JQ7FRv48HDTc0cb9yuUKR3Z4S4ZEH8TFO00VgXHyrLvz&X-Amz-Signature=e4d556de976bb78b8fff2847eabd258341607e955ba2759cadebc169b64ed357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Adding RPLidar to launch

idk tell them to look at the launch file to see which exact prams to put in

```python "5-14","30-30"

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
