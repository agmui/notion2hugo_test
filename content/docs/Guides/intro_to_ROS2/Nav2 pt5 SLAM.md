---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T16:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T16:11:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

<details>
      <summary>What is slam?</summary>
      TODO:
  </details>

ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=75531cd8160af8ac21bd80dea0130d195d159cfa4432f18af82bfb078a0ec950&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=f746a2b016cffdeff1c138f8e0ec69257774a81c0a5cd48ef1f4fd404b85db3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=37a761bb0d8f239431ebca78fc69d2ff010ffc5138f66592d4eb80490a202969&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

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
        
        lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=7df0d846f33f625fd50a5ba48f6bf9d4b855187375a9249444a08213d2dbfb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=4de56171ec5bbd7e2399a028ff6a89b2e6f9f929f7d697040bdda7b70e03a5ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=b8d4f46bff0ac85e75fc55766e617a1470ec7ca7330fcd259d78bd5e3aaf0ce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=7af1f45a6dde85a80d1a3d85d238ec44ed279d7ebbd607db26210a6e31738e3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=ba379c28cb3b250bcddb56a0408cbd7afe3b5c2f69702e2820ce1ca900cca017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=02dc2b806074ffa6c2ec6542e36908937c3a3ad3bdab970c70ec4080c98ce845&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
        }.items()
    )
    
    
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=071296008f39358931eb12b318fd14a47bf15426ca465cba682055d71633f61a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=eeb50f1f3e958c3c58f92410723cfa50389e3ba69e3e85fc698bcbe2390f1769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=df59ec6be0d23cffa7db69bed2b868a9a20a29a8b9f6463ceb3f6ecc8fb67945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=e1583dc7b2c1b7d7e1f27524e532966a56421902fb304e264814b85b084b8675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2CXIAGI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T171356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOVH7JZP0mojRgIQ%2F9ro2aUQ86Fnqogru9upKRC7dEOwIhALe1m9qY9a8d6K4k9WaYerhCWoi4pzbICuEL0ejK8JV1KogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrRIIwFK2AT3hR5dAq3AN6xqt98UgaPbnki05pmmTl2mFTUl5j%2BWHa%2BYPKLLMtyPcJ64jJN4BPCWznLg9vUFFEnDf2lMacWva3pObk03eBESVHy7McrdVY3upKG1z0VC9kkRAFtkCM4hLZhhVfl1cY9yrbqgRH2XZgLTl1QvKSfx7daCqUH8m%2BWIBzvXn1TgSbxTSATid6Zkd9B1tt9ZtxlMm7WvIu1eRe6v28Ewpf2qJdphdNWkKy8hE2NQZS%2FJ34rRQd2tLfIlaDpbl2YcOYa8IL1zkx1KxiFDhX8LB%2FQax8%2BHlviABGSiYatzJKGldDch9YkcMjcnlii3YGpiN%2FhWJcEcdem%2Ffx6Uecddxs%2Fg65dM5HOmWwxDEPVcKPkqV7qeBGlVEQ5L0gIfVLlYcvl9N1soRGZYzgRr57AYeq6%2FmP900dMWhj9CM3OTmgMLUbvaX91DadWN7z8DMYVsRDmG%2BWTt6DbTF0C55G6NXNlv6YgeVUY9iXnFkMCup4tDU%2FpgLOjq5NP5EL2i%2Bl%2BIMmuf5%2F6TqTxvv1pVYCeF%2BHvpic%2FWsQPrIZXcTkLXKOOXaSsTbzGJ%2FiHly%2FqY1OMa%2Fw%2FxMcJEQhtN2894%2BM5TeMs0gryJjoQYDv1LV4EmT6%2BRrHI0cU%2B7OIp6rWTzCk%2FqPEBjqkAU%2FeGq5CKTntx82RAQPTFms6Iedv8x9YFsERbUvIoNupbCBloz9fHrL3dPVwlVaP%2F1fM4ZW%2Fycz9DxYIQe5rj7240CFC%2BYi5GNnBr%2FxkcNHWQwhiscBG91cBCjq%2FZslhFzD%2BrORuR0l%2B52tK228qmfYCfDUP1bHEluCm1v4IHKlC6VL2xqd2UDr36k2Pd8m1%2F%2FNmcOofZCp2YAL78EIKGKbkCAR7&X-Amz-Signature=3b3f88df995808692bd12d106842a405fe765bb7409e5aac43c47e23b61c6310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
