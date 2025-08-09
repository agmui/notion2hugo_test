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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=58c07f9ce4b28214a629082be3867dd4714726e74fc8677de0d99f34e0e4a132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=7cbeea8dacf7ffd0b4264d82540ed25e31a7c04fbb6b6cae0e164880cc2e062d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=258a06d6eb1064446a73119f555cb55780f667359a5d8559f919cb3e624bded7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=bd899042f3cbb41ce22f5d8dae27af81d34e13e2d2aabd36896a3d8e2e67888a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=3bf957933c39957ee0b8f35ac4c5737c42d3d57780b81546ae29b345df8a6391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=90c6429cc6274aeece3d5048a723f8c21add86670416149e8d3011e509c7529c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=d348ecd37106c9cbeb6db4f2eb424685bbb4375acaf659ac1888d67b29122180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=24e529eec7c818b21573e28c18239e2009be90b32728a75002f9e612c78fe301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=1776e170cd8b0a63dc04d76a1fef03643baa825862536ac18dd48ea459a151ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=0bede0e58100a1ec381000b52806498baeb91535ccaa6769f6a782e5289366d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=5990d3a9267d12342d8440b60cab793874e7c4bd1c17b5b3c2918416ce8490ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=d4ec359ac6e504f65313b411d01bf8c6317ca598ff92d2efa4e2d71a5188d5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=23f2a91188d8a0eee7277de15e9596d31d5d3b1b3be4bba2fc1bcaecc1b24b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDK2XDB%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCICe5oZAvNZkr1YzSRwk5C8SEbNZuDtB7e1LIphBk0tGIAiB%2Bw7Uc9XkL32Vsv58plwucRBGVMrKmgqfhwi3ouAOUOyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtdrjh27G%2F16XC1ytKtwDjZ88UObtreBI4vWk1%2BZzP%2FSsmRuiebJ9oHZ8Bf%2BBrUliUOfNLMTBP21pYE%2FQ%2FsDw3mEc8zhqOSek1qZbDnUKNpkqIK71L4LlhNG4S8HLZYc9hV4SHX80yUyOD5ge1ha3t5Og1NxNJ5siH%2FWab6MWNWHdesQtz7O6Fn0qewtLPRvVP9c%2FQneCvT9W8XatoiyHm59NFRYxM8y%2FEjr08PQZnrJmr%2FcCoVxsb4U6Jcw33QSVTCipLJpJF8JxfT17mQGKlTHgWBvpeMtQJZY5rW7vj2Ko4F0MP7NancLPnhsG%2Bs522o2WppKMPMS0ehBuuDsgiDo%2BT4vYavv5dQsYGFi2YhGvLVUI%2FQK%2F5oefv0k08NeeaM968QaY1Eh6MCSj%2B8iWPDYcdO6eSCKToHAHK961%2BbN%2FL%2BR3sj8HwIa0BleIpee67UwN5825%2B9odVR761wtJxvlz0Ds6Vyk9U30C2nbW69gKxc1iWwOVzsmuS74cHDZLqcgBJA8dQXTOR%2F%2F2xcLsN5Fy6vuTkVk5QLRMM%2FNTHqD35%2FEN3wuxj9t%2BM4f%2Bkd8wILw3qAi8cr2MIpFq%2B9yC6Ho9cI62VYX%2FmguxfmgPbN1b3Ep9MAnN4O4hUvUx%2F8Y2%2FbS1xg2Bcq%2B2dMgwvcTbxAY6pgHLZ5iieFbn20YX8eJUoMOpfGDY9K2IOi8aIY4LdArz45Pv14%2F0hS0HDpt7ZHPBBOcoXCdIO7eVqJEVdDDq79iMCZ%2Fo%2B4Prxv7WT7jGyebTJ9t5bwYwHJJ8V3lHsCRcYZaQ2oVYy1xBVMGIEu2Q3s6xCLx0lW5gZtGwO%2BluIjkNYeErE53WRC74FLd9gPAA5oLDoR%2FSoxqHIaHiqibn%2F%2BSNOfS%2Fl1iF&X-Amz-Signature=dd4697642421eeae723ed8884f44eb52ff2b2fbd6e4c2498d0e01280dc76c011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
