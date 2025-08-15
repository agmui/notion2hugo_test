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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHC5C6CD%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQChNZPI4pxyMwumq5xMEzs5IU2bNQrMELI9TeMuLR4KQQIhAOflzEWwU%2Bf%2FfI4nfXqx8XYY19Vw0NrUjnLYD5NtuJ%2B%2BKv8DCF8QABoMNjM3NDIzMTgzODA1IgwwOl1l28UGog%2BFurwq3APXpAxMTGsJEDT%2BL6elySL99OuV7uGFv3EaZmTdLssr%2BqDLIo1YOl3M8zdfo2DqQZhYGZRT33JzXMlB%2FeqXRl1b5ffRr%2B7j0QxmQpEmVbigz2YTnZbZkubQOVi8v8X9lFqkn70aXeF3RBeVJkLBZoJHoNNdozZobxVLQM9Xr2Ywn4ei3CfcTB0L7JeiKaqIDu6Lo6gK0Hlwlx2wtCMZIVKbdNdGa4MqVMf%2BAE6zX6EZo5ag5DkuqiflmI4QjZf%2Bag64SR43BgDDImyd28h02n7T7MlTlVzPpol9HtBz2XkKTVGDU848Kd%2B%2B0%2BT0FsU%2B8FmfycaAcupOS7eLolqhfzKDMlEzRP4U0Qj80cSEjMOXLqxXaHR%2F%2FFxiJoukaJIBwv%2FcBG%2FqvtCLtfxS%2FKJ%2FER3bgDJNaNOOCZSrsBO%2FPq94rXAxx0c1BvakgwNWsGtsjeVnY3tXVnYO2nNPIHgEpMbe1NlGq1EXCeQ1h%2FTJ5e0q8hj1o0bwhYcsy3TzZYgc99YDLM4iM85h83iaJeSmyGm553ZiaW1vhzq%2Fp4rNoERhspigRDbQO%2B%2FgRUrjyqS%2BB%2FT5rkcFpCQhRIlQF9Aose85A9fqdKJEHb5a%2BWu%2FDxNzvwlDIWMLC1ZGea5hWzD7%2FvzEBjqkAaNnUdqG13kzS32INeylPSHsV%2FBIQsiRDrK9N5PXvQOY%2FErNjNfjszlva0LoDA%2BP74hr9SpDS40y8McRkPNQKpLjqPoEiQtO5wpYNLy%2BfJd0SJzWNHWf2YJBBxYi7L5Zm4%2BQawTIF0W79hDA7gNfvFbZs5e1vnoK5CRiwi4eJQEZNVybjoyJ6WP6RXIpKldjJTH4%2Bm%2FUbrEBhhB3V0sg5zaI8KUD&X-Amz-Signature=0f286d732f86be943f88ae82e3d40b17cc0bacc41cabe3c8d548f9ec4696df2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=8b493ebf53e04d4b575c02db656e4d332bb89b4d647e8939d3f6e1693fa5a721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=fd25217a544cbaec9e4968a4ccee95346c2f9d33401fbae9f1fb3b87f0f25161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=19293e81d83654069a5b278b16238465c83b367d3f53dce2fdc4ac31a310854d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=4250b94bc011e437030611a0fe87d6a0fc697930676866880b1ee8b071fc2f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=177a20ad5eb1aa4508ff776f48cfb9de710f3c50ecc7e198a31dbd08f511e0e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=b7b0f4e601e5bc487e665c175b2c1a955505681b506fc38a15086cb532818956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=07faedb7ace6c8e9dc7abc72f4a7c97ed03892c19ff25cce884d03d9b2fd1e2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=653b796ea55d4e48fe6386c0e11c45adb243e6c60f9e8415faddeccf8a07ba49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=1a60282a9fa09f38808d14601a7bcc1bdc68d963e7d4a054815a2786f250c7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CA6VMWV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQCFl1RGeDuDGCY0FBues2JE3hRqL3%2FgPW0d5pMz0PtDVAIhAKDi0BywSfgCTS0J7gjWGOGL2vls9QTmqyR8uJAhaUKqKv8DCF0QABoMNjM3NDIzMTgzODA1IgxktnEBmXqk7A7ayxgq3AOgNWiuedKiVFX0YiknAIfGbOG3Uitnll5Ubd2REMOcT%2BBb04pv%2BMxSKdyWTWWk%2FLXMr5vj23r1b3u6qvkhkMB6Qk6yQ4JdVnZwA%2FBZlYNhy0r7gVoScm6mTRT4Hi0aDLkLf6c5AChjwORARg1N3XvcIDVSxQuUiMddqTiwit8Pho5A1QV6IigSkGEOjyZZp9Metb7nkIZ0Uo%2BgIEYB1C7vMu82OI5qiAwVYl5stRrH9f5br0UlNRD%2B8vyWyy2eYf6UngRfBuirzDuEI6JszYxeLWhvLbV%2BB3wadNQxvMguEGqyIWDEgcQXgDKOBR0Oya8C33pTdox1yyc4agaA71gwhONmyp7%2FGM8unVOldJ2k52iDvhxmw9Kx76JdxUFKaFV9LiVprJJKA5S3q7svkaemBGY4g9TM%2BCoQV0KTF1Hwj35sOWO44ThE4T1iqHUr93GB7KU369Etoqrtrfwg3oqBZxpQCzv8Yu0bICLj%2FbkugeO1vHfoiHhNs%2Brh%2F76ScSeOZ%2B5d5Upm74Yct7zVygfFMKXJt8jLg6Q5%2Fkn4J7u%2FOtUQ%2BDFy2HAnn1VZSHdOTHZRYtQpiVz7v6yfWouNihm%2FPzKvTKnx4y5yfnLIgIOhMnnqZ0L1GMW%2BhkkD%2FzDLt%2FzEBjqkAdnZqUmvl5i%2F%2FiJC0ByYmrg18Pp7xFRqzAYW3WAOds4YF%2Fpl6%2BCdQCi%2BLEiUpyqGOOHVv3UcHEqDlgsl8MrybSk5CqzoLhywt6JDLmRD0sHHagRdBbje5blm66b3UnBs25qc%2BbFqsgLgAm%2F3xkh8OrzVZoSiB2oJzqGM426VMzdKue%2FZdc5qwnr5UCTpnkjrVkoWzJkHnDsrwg3ak7yIU2uyEoA4&X-Amz-Signature=4250b94bc011e437030611a0fe87d6a0fc697930676866880b1ee8b071fc2f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
