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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/54219791-6fb8-4bd6-97da-9b87b190e6e7/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=831a64cc60b05eb3557917689037f69b19c24ec5310051b66b8f59e74fcc893e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/75944c50-a103-45d0-b2b0-c2a7ed449dae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=c3a89bbcd7501c99d3bbd29654572428acd364e4bded972a8032121083e2e951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b8ded56d-9e8a-44fe-9eb6-fb2a1e47eec9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=5846f43acd09ecf283b368cf140209aadf54dcbf562fa281dc5e30de52ce4789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/aa0c7f7f-7558-4f85-a74b-61ab5dd9061c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=56335aa53431d409f5760de30abec1355d82eb062c21ab116931c780547a6d78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/915597cd-5ef9-416b-a981-7645923a2e7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=c8ead5298996b354f20373d5742eac1a831e5f53cac1076857cb61d63a917ffa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/14f8d65f-06cf-4d57-a7a5-dfbe159a354a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=8866e487f2f621305923496bded43c47cc25cef3d9653ec24cd36aba63fe3232&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**rqt_graph output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fc087300-bb68-4fc6-b8ae-b17d7f452a9b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=d26c29c02e48dadb53a466b861e5cd661f01ea3fd539a4612083a42d8217282d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical Lidar setup

For the physical Lidar this guide will use the [RPLIDAR](https://www.slamtec.com/en/lidar/a1)

If you have a different Lidar model refer to its documentation to set it up in ROS 

## Install

```python
TODO:
```

### New Node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f50b3be4-3754-4a1c-8089-f4e58313e891/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=9c27f8935a4a046c67b6fa706b84b83cffeda3cf3c28a856cb7116098d1ad334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b2d38e22-6214-4ab8-89fa-ab36fc286ccf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=698513765d465a178f801ceb53ef781db1d2267d06625d9c086618f811c23ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/289f42a6-2469-4d3c-a62c-8caf2da96fa1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WO75EPGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T121813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkMUzs8c6VUG6w5PS%2FEoZfteF9U2O1IHJxj7iTBFp5DgIhALuWnV%2FhVGmAKAeJd8kFTMqdWa451X17yztOt5FHZjtUKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxHK7W2NFrdjEooc7Mq3ANLnGd9LQcjlQGOL39%2FZJN10SfFUzA%2F9Ntz%2F4u1rHxxYQK7XPcOEJ%2FQ9a7D%2F7CUZepngM2TiV9t%2B6aG4AYMlhDGQHl1ZHkPq2YFNVbMp%2B3t4JM%2BdjXRnYmcyX%2F3LKSqO72%2FGHJjE9Htks%2BJZBg6Jis8k4c14Jrc2PMRnc0zVBxRDkl%2FAcgdiD4THigqvvQju8PEeDTfyBol70RoTFjRjqAb%2F%2F6u%2FxvpemKbN0YPMCbXoK9PUJyUEFdNMj8ffE%2BLyv7X9B6qTO0SOsB3Ty5%2Fzw7HWxZwrqhT6%2B%2BzjCSrtds5naihE2sx0cu0I%2BVDT5JouUM7ff0wGro64ZJq4rXhihgVuDGW6%2BSJqqWwpt2Zjb8VXiHkAmiTiPyxMooCzPZVJj%2B8xJ%2FIoyNNmzYeCCKzvbAqsgqDC%2F3w6GIgVkVClDlwXJs0bN%2Fre9Qo0S09JrXuwz9NeSu75Y1GklAsKkwS9NRPHFpWrZIb1p4gZAjzrDvkj%2F3R2Gj%2BmhlXNfY6LXSHu1GX65Tw8iMfNXiMx%2BbYbEZ9%2FWPjc4TAhYLraEPRu55joimzu8g4fRBmaYa3amR9l7EvVeWIbEUtxxW1pf75D5b5x4iVapswqo7Ov6T%2FV0T5A9oHeysk6urxvQXvPTCB8KfEBjqkAUMDDhMdqLp347tuzpBGSNhQ4VXq6Kt5QlvKbgISXW72GZER7NPp%2BGASllYVHngwcM5pYBhe4NL4Lssqy84AshhzrOLCZUPKsNdK%2F5wMnqSXAz%2BUT0uxfY2OUSfI1zcWarn3hHYFLJ%2BdhF93J3%2Fvitsgf6Po8VskQsOrPiAo1iwfAEG5d7b0BYZqmPc%2FKc4K%2F9zmYfWRkjwxQZM9nBAb%2Bm0PiK89&X-Amz-Signature=89742e5cec15f4f808276bb21d62fb4f558acc402513edcde0db0fe1f4c2fb46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
