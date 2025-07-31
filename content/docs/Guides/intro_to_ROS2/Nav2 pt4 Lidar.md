---
sys:
  pageId: "231da3bc-6297-8099-9cef-caf54a005fbf"
  createdTime: "2025-07-15T19:35:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt4 Lidar.md"
title: "Nav2 pt4 Lidar"
date: "2025-07-30T06:25:00.000Z"
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

```xml

  <link name="lidar_link">
    <inertial>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <mass value="0.125"/>
      <inertia ixx="0.001" ixy="0" ixz="0" iyy="0.001" iyz="0" izz="0.001" />
    </inertial>

    <collision>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </collision>

    <visual>
      <origin xyz="0 0 0" rpy="0 0 0"/>
      <geometry>
        <cylinder radius="0.0508" length="0.055"/>
      </geometry>
    </visual>

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=f14eb008c99447340eb205ea8aad0e3c8395a64cbd06f2693c1fb621a32e596e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=0029e5e1b1b2689d3f6997056c8b2c956485c416191d3546905bf0ddc817d0fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=0ce12f7c03d2cd1ecbf842c6a73fe01dd4b45ac30016a8e95cd8e2f8afe9e66b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=6b4dc59b4821316027b2c6c29a417a7ca14ae50980257a1422c1be978f24ec27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=a2183fcfd1aa4bc37587a05712e369e92b5dd0e4b3bcfbbb39d8b68610346c2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=7ef938de94ae88ba1da49ee5be84dba9f8057bcffe5a8b93fa7a7def991c8201&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=15861d0fbdb96e386127ac4d14b3fedd281c85a94495d7c501cf43017ee9fc7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=9692b5412e8d1f6bfd43e0e3c327b71a87dd363e1efd7a5e3bf98a7b023288ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

TODO: get official docs link

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=177569651f2f48ec242748c8505267366a7d02cc3b34278abe9e44af44ea0eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO: rviz img

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

TODO: add rviz section

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SC6JM3DB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T004701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMCwQaiE6ZJedWVuCsZe1w9mB2too5CyFp7TYf18Ud0AiEAx6ce5lGKGsTyGOStUT461c%2FBrOltpla8NIhk1d5bMgwqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM8HYaNzeZ%2BwFUz92ircAyjFEqXHLH%2Fq5lFw7vLf%2FPTg4tM3IZK4Hg7tM27tSwHDskGwt1U0%2FNhH4yBY%2BtpyNdp4ouN15opumh9ZNjqSiw3IEdL%2Bns3I4bWNL97CB4s7cxOfrwITPKf9jT9K2b07lfsLJtT%2Blye52rw24CGqxfnKHfjMjzM3zax47HTGFiSNoLbVXn7XoqkuOccgcucsoLIZtcsmw1kqUo%2Bj6sFdZCa%2FB4VO4RrwMooV7VNV5fqeozeaoqgy7eZh17Tv1RrUVcaEbFVZZrAm07%2Bsx7M3AifdOU6WLKWRAONCuHoqPfOe%2B601tlBpIPfDcPTGKVwH2jRq4T18ghf1MRBQCHDDtQbwgO2NctQYqiT7qGs6SQrawjRy1cLGolufV%2B4mm%2BAeEBPT6F61aWqKLroJxJ%2FEbKJdzuuULcbYSblFcVKFPZZ9Mx5CqG8QxjH32VjvfWlezi15SIwRu8bBWlYO%2FrMxS6D4Nnxlln5OfXni0DcLFRYBPbapaCKGSjoiGTCylG6rWoryi82yKkgPrMNInujHrDxd7soojul1HWa8ySOe%2FNVWtyGNLTz0P%2F2q6PTvadfwAWU8iUwmsWnwg1xXJXzs5jJCx3RlzI7j9P%2FRFXFMlTOq%2F5MswKgLX9E0nywoMMynqsQGOqUB7bIdxHDMQviB73YA90cUj60icke5rp%2BHSAnTE%2BD%2BJ4ICVdgqPBgUIKNTmjBxFDPxmldch8vhfnd%2BhzRD2VzjD7DQ1sq2h2WtbJAzQt0yIDk%2BxjmzJ2hQCFvWxkHHynYGMXZU948TZdupsOAOGvVnUaxRHurm6aJh5ftwSIrjwJI7P7e1zw4eGjlfnVETWUJY0k7DGKeEQ2vEK%2FFa8%2FYT4QCS3c6G&X-Amz-Signature=1b5b34e9109e762d345b097f35c93a88a7d27423b239a2210732b282135724a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
