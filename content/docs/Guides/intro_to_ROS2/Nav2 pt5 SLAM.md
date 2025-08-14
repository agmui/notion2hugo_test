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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=e993211a900b86d7e45af9966bb5c51910f81ccf0c9af25ffcb390ab736e5fbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=eed771bfc760ad87f49aa306d16e60bfae2473c87addfe28390661174323baa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=d07e43ccbb9f71015dc7ffbce05994857461da14b90b3e8e8368d8800b271fb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=2d64502aef888b5dc40d8fa5b711a837139cb9862002b89869bcb6ec82ffb80c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=e5f862eb5ae1d749f7a46d0e23bb5a8a8274bf4d04ced77e6a18356a3a33a6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=bf14c34d169e6d60d9e50e7f14cc36483769954563c653bac4072afca3937075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=e2234eaf7e1a50b8b1e06c5faa73389675e4990216000c558eb5af69e8e46226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=b34024f62f060e8a03f3d818a7505c62f434d6a015465c3d1d299c814ec1ccca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=385ff6071427ebb1adf6c6399d572b139627275cec6b331c5650c6c8b1acb783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=2eaac638ef5f362384d84fa4131d7a5c2e01c7c5fc89dfd1d7d8b8918896afc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=8c0bfac1d77863d61d95c703a08b80fe91fa823d32467c7f5708d84f5ea272d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=77cfa5b659730e7e2c4cec07603b8d67d208d6d57627325cc2cfbc91baa85227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=2c0fd59f0941d7fa8cdb8ee76338ec6f0f5679b5fd19636975ab28e433cfe80b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAPJCZMJ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGbCe9ri0M3uAo%2F5X%2Bseu7lppwPDtzsmdQPOFONCtonwIhAJ9uT8%2Fa7JdO5ch9N2xSTl4w5h1rhnJAb1oa64cZyBNyKv8DCEAQABoMNjM3NDIzMTgzODA1IgyALUtADwFDwJquffcq3ANWaTHQ5TbqyTArMrPoIJTdvJSvat0nR0VQT7vLmMERUGUC4ZaVCBHMP1IgE%2BpVHs10ECqL5D0fZjUi%2BZP%2BvxURbaYrCw2u%2FeG5s3%2B1TljCA5uGyuRsDDChGOSmca3qzzE%2FxG6ztaah7McA8xMHJNlg52zdL1VFRcAgMyjJ%2FTwU24%2Fpn7TXkaUhvwjlQ7g64igLH%2FjQjwxh0s6EOy57yeLOvePoRw5RmObiZDVDJJLfECvQgx%2FAxhJk4izLWT%2F5hFVc2BgSqF0KERGjq6RO3hmPT%2FNvAbuxslCjHCO%2FBrtJaZSUn3TI4%2FUhXj2A5ny606M2Js0RdTjKU%2Btf4dJtm%2BYSozbCeCONReMIIAGHZTIU8I7MEg%2BOB%2FHlzUdtzklp7qkPxgChoIZIbtORLUZ4MNo5oM1iiwA%2FkH%2BsyhvO%2BSZd8K0FOAajklRGorg%2B4OE30FTNYzPfm19xWyQHQqUysShFcd9pE7u7ddASIBIq%2Fd6n%2BA6ZVwb0EwcJcwHqSKnOjI9z2ErHsAEW%2FAQOfXn77WnDHBwHy3TuYf1WSpkIVCRs%2F93WBK8fpdEqdoeBzmaQ5OlKFAXTWf1L6eSHMqUkNLZp%2FSWJmk4Tjtn2nnhnu9FVpdCipM6n5Ni2CnahDTDcifbEBjqkAQxI803aIsyyNvtNyBDDyv1VbaJuj2M1muv15WwciugMyxw6d0qDKdQ78NITzWAIu7TqcA4FLnjqHymA%2B1bawWZd18Bx3IKKNZcsb%2B4mO%2Fyah9tUqVxI3rZon6yhTwOnyX7TsPwXEVSPQBtd0yy%2Fx7pcItJRMXkxqVZ86lEYZBH3B9M0KCwwpQWIWTqschkzDldnfFF%2BHTNEbJf7bUvxRD%2B8UGIx&X-Amz-Signature=669856605dfb12131a54787101fb19b21a3e80a956b28e81a4d760b75c8f15bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
