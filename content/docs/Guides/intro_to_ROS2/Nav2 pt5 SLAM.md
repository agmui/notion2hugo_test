---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=58168e22e0f9771d8eacea06a2ec25628392f870da37b7ede56c8e1518fedf80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=3f58007b13560849cc780e8f52009efdc0d54b9b3afcfb7bbbab2107e12a0cf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=d415f7fe604780ad75e45eb8735e3f44af3653c355ec187044e4b17eebc2ee37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=b74c3d1049245792b322a68c6309a128ff15007901f78e70a93cb7b1a2fd1155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=a4c716822c2fc418df788084b04800be569ec06b1d46f1760d5c33d35aa0ae92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=ff17516d4b4dae184971eab8d39774393d709c8ea275a300cc2412ddca72cfb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=8f6a9ba27591e1e317faabc23a8e5f78927d78bcfa62e103c31580b5380012eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=c9a2c0ed1285678b1a63804be9c80da5431e79256be47677486bf38947144ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=36afe50e197d27d4da89f7767254e3721f632d9ef2031091b76d16d58a0e7a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=3bf42dce88a5e1c1d6bb622f4e9d3760b8b02155101d5e801af100ca1ce0583b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=74d55252902e8866d86ab73c9ff2d68e526f19f4cd4e36a700b97b8754c38905&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=54fbdcb448c05c577acf43ad24d01abcc0bc0fd328dd4b02d666ca01b05df0ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=d5539175b9ed379536d47376dc39de09987f4e55decfd9e4f8b4e7bf0d5406db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626A53ZT6%2F20250907%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250907T013635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIBpM1YuU%2BkY6MuFC1%2B1UPlSdjaQwr6WNf%2BDAIcad00TuAiBsXZzgxQO1nw8vW6JgU%2BDiSIObSwA2A1CS8FCwN%2BJ1liqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKe91AUYvBE6ysSTJKtwDqjCAt%2FHxm0FcaOTsM76FOz5BKkLlv5ip8laPUQX9F%2FooQJkOgrGDKPKJcCu29fbYnzQO6QTBgBmGer22zWWdfvG%2BZ%2Fpfstpao8Ic5augQJZNxbMsF4HkXFyjVzVDbhKUUNIirRK%2B5JzOWlyDESwlOOX9J264gswRwYfg1qDfLDfWrzY8of4jxZgg3naq9u1hv7qE1mfEE5LL7GpvYUM67c%2FRRWWMgxlcqjaC4O9Qe3DNxiJRg2MImAz2fQqRCxIyfnI6izxhDdLwubRYC%2Bw4cZhZERaqW5J4hSmJEIjBNFqqhAGTsNE4D3MvMADAn51hf27f1p0pqOSgU2A3eRFXAt2rf8ICm8ulOwvu8%2FuvFof1dUzK4sOLe%2FcI%2FrP%2FIyzGTlNeZBzOrhAP51yKRfWD4aXXW5ttOpB3BB1NrjiKdu%2FO03UKf3RSxwk7AidpfQmfSCoUHrQ5kXk6qC6eNxrXbD4youMhCUdOtYYIF2gVWtf1%2Fk4p4RD6IsNkNy7zqluN%2B26LuFtkqZ99TlfqJSZT%2BxUUHxSuBImi2rFQWd59xK17d4HcE%2BFqDp4fXZvKrgEA9N1iWMYOjpHXCX1CaEuuTXDii80PMpcZUQHoko%2F4mxsmldrDbKZEfsRoRu0w2cPyxQY6pgF2ydXUnYFs3VGB6g3oM5UFf3EiZ9Gi6NCKF1NxRHWlnaRqrkXIDSYnnLSeBui2AbwH94NY8AR%2Be6bwAEORseo7u9IBvM1MW6ZTX%2FUS9GwQoF2Di7i1ZQjQLV4WnwLTQsQ%2BZwrynjsOVZ1qmLj%2FO64Q9niwbri1e05El8qWvdtH34QHygGvHwPl64nAp5vVwptICrxP5lRM2VBhZReyieo5HuXF0mUc&X-Amz-Signature=b7ba89e27e1a85e833402ebd839d5c47aaca00938dc8e08268ee63cba69b82fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
