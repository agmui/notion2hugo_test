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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e2490cfc-1737-47b8-ab93-ee1b7fcaa853/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UIGWIVO%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDCp5CO1eZYcKR%2FhuZiel6h7OjCxvz3OVSFwH9DzWsdDgIhAMBPhyFgL34OgLcebECclgJioMQaqn39tDBH4cyNTT7oKv8DCDsQABoMNjM3NDIzMTgzODA1IgyTpMPBpLNxVsaFZqgq3AMTfwpObBwk7IWdTJQPwYbH3UT%2FmD6nEkXZ3WKcb6w%2B%2B2BuztiPwmuuWPANIruMlZp67WXkcfS28KcnXRf0b3hkIib02%2FSd5%2BQwSA2SxUV%2BpkkjKaGShDYgONKPlXJHl%2B0JzX%2BpqeBmjeAx4QHd8VBgmCzsCF9ZVq1H1WupOsaMqd0soU2gUro31BWzmkMhMIKlPP%2BupCI9SyzOXxrogm5PeQuzOC3bEdbXp9nYyvRknQSAIM%2Fv1RQCaELACbnGCkxHJrlptVPlWxwmnemIlqNT69L%2B4jcBtgZ3sy%2BDdmLdwgLMGxUfRehGCLRwTD2YPUEn1Pdv7cyxRomep99mt5jcwUzfKEE%2BzaIDMkmCnE0ZGviQlcqFHT3b3r9gcKuzqTdyrJXL4wL06KJBhBMwU%2F2%2FkPEj9ty8qxAQRvXaLaP6fq4zlMtjkY6itQlae1Q7%2FqNnXfOltzNNV8Z0byIEyVa4PgLgrs0rliEV8dYpqKjQ0jCf1I0hkQK%2Bz2pWn7rlpeP%2FiXF0EtaqwYuB%2FO2DMAW17GODb8gqCwaoABH8ZpDuvu2safd7KBfvsMRz6q5mgvoWoQJiMrpwSOzdPRv2qIbSUkiP4lgWpY7rF3SoeUwxc8BfUw%2BlSa1E3wylYzCvi%2FXEBjqkAVTyj6C%2Bm8CA%2Fvi%2BmPjRSTCaDPunTenVtrtiqwpC8QwqHMOJucjPdQ0LHrgvzg1Jm%2BVlZoCnG1uXDHeQ7SdjH983XyHmfoQrXzOaU%2BftGj3Nj3AtpvXK1dph72gdPOkWcBV5laCmmXMYyPuyM0%2B01vKtE%2BaEjUhSoBF7VC%2BFcWxvBerCYesZ7qwH1USx%2FidHCSjR9FK%2BZInHyqXWScbCuircOiTp&X-Amz-Signature=7c738e6647aecc67a4437e9677d1526fd0bbab22438f2cf8b8d6ef1d1bc1680f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=6048e5d35b3eed941c89e451f546bf8f5d9b9ce4b93235c98a61a2b2b8cb3ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=854aecff6f7c45f2a98f87bb463572ee082cc1b8b89ed352051b7a92e6cfce39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=bbe9f57d9b1ce96e20fff5d91e2c75a74cf1017b16c9dd7e01f77422bf9fb85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=e18764a771a2aed6965f6e6b2a6477c7af4b6349b3e0b42f67ebc2c4c3827a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=6d42072e3ad6c8c43ad0bdc734fdc67947bac09de704d82de4ba110a59dc5dff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=55b6a3ee965b24ad6b41c27704b857f4932fc87056cf84090855f71b6c94a762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=e27a4eeba52982d0f06c0b46f9209b0dc2073231336564b2a7d8155835355cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

[https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package](https://github.com/Slamtec/rplidar_ros/tree/ros2#compile--install-rplidar_ros-package)

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=514019a8c24488c1bc6df156e290d17379d6ac76f13265aa61eccf4aba30e4e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=8e695c6869333e3e206f16d2090be17afd5de71dfeb2b9eb375395f509a71bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to add the `/scan` topic to rviz if you did save from above

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMGFNZ77%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T024347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFdnWlmqKtbSnqwW6liysH8EdHrocVbX%2BIdVV%2BxNSkcWAiBlBQYnWqneD1U72PZg%2FRgOF0pIV3AXZtrflDreyEZYVSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMSHTsRsFYmH8dqQyRKtwDeWCNhZc4Cn4NZiWPHO4BdgsaSTMZCeLtyG49m58gWUYwu0963W8VhnWZ0N4Ir1hXygy8mzm54mCqU8KkghQEew77zbxdppY9B6uyfgdxirg%2Ffh9Cu9H4jey72a4aKXtr4ILejFNrKL0eAq%2FYE3Gk3M5mVYvGh5%2B6FQ2nIXeNjHU3XieP7GgcXzjLdPCdBSIFAsOmGSzm1VLsPAorXfLMY0UmUb9Epk9FjOQ%2FcRJWVhfphcIKcaGDmRzwfWj4BaW1wiVK6gJlrkyAjOsUSwN6s2X3vbu5x0q%2BxSDfAiUd3%2BWQt32vSw3J%2BYjV3AW5LcQwoiOexqiLSSlAksFvBiptAoQHWotZdi0bbOF59Zig6zkqrB3rRotN3pVM58tpCza2mnT5%2FOeVhy7xuHDBJbqMP8G9Ng6mTzqeP4CCvlWsTH%2FAyc2lriJsFRZinCMP%2B4C7Uzxv%2BCKnjDLqv%2B3WmyERn4%2BfIh7v%2Bvf6bJFr7IpqQD8s%2F6tDBJfeVDY2JGYhNel3Uu850NPvlRvmTieakmi17hsPtwxbM%2Fr2y7cc1V46rhH%2BpejigwsTiBPscDPbFKZHvXKWziFP4x9ZFWHtk27EQgV6g9fY9RS8d8Gbe8CnKosjZKOzMCD0WmD7mlMwnYv1xAY6pgHEJf6mDRX4%2B9InqztzCWSqySXxwQrUoOdJRHYkj8wAg4HMmSNdsUYNjT%2FsS3VNckqHyudJOAXnk4gbGFK82CMohpXy8cOLCKQi8m4JT2w%2BQx%2Ft5pOHrhwxSL3RaOZCb0Hajqosge%2BcF34Jd3eKDreav6CnN8cxqMdFGmHBUAtjwaUsBjDmyk8e0sSzccpqAtrzW500Bpxp1csPp7AljYMOL8%2FHoSSB&X-Amz-Signature=611b3806656e3b629af57cf449b26895af7fbe7927e51721e6caaff7a7739a1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
