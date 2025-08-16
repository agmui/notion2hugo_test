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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=35aee7dbcd6c2f399e7e69c22a42488dc6d70070410689f29ba1e1204e168368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=2c276684eabc9bfab0ffc2ce2916fe03419dbdfd56a9935a97192d2579183edb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=ba4b69fd21239ea3b27481c4ac9ca3aec506e5ff4df3eda7baefdeb1a5eb6400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=e52544b496910422724c01bd4341f85e9bf10b2a18e69909c14ab977082f093e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=b4e039a4315ef2a35a701ddb3e2a127fcb5f2ff78c4905c1c3869f7f62a51c6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=37f94a114ee7f92c1d22d09fa87d584c98434ec5822e4b2c5eca145e186edd23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=61dbd88ce9c52eeb01992d1b9afb6c39ff870ed3e21557056d2e1f539d9a5917&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=a58e4077c1772056075ff57e1105f3201da45b2ef72cf3e8d1ffc1a1a550177e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=5b41a3dae0dbbaefd09ab438e3a2385d16d2d91e48ad981020213bb8068f74aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=7809607eb0515e7cf5c163bea3eaaa5ebcf6b72e1aeb6f23599d81f2fd00b02c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=dd1c8cc87b503f470b3b8d10104917d84dfdaca302b1fd285cbbb804dbcf58f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=5eaf90867887078af7add068f69a1e9119dd7a9e8265dc4fd291b6800980cde8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=137d2874181f62fb9a7633032d0df5083e45604fe39ddc0b431184c84c6cb5c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZE36UYF%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDXF1Z5qUjnQXlsS6e%2FKkkXSzxpFnddwGQfr3UUclc92QIgEkkEqB1Lwz%2FgFXdWRtWQPeiioHUt5BFPTcg6ttIkVEwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMQQR5DIFzci4e4UJSrcAwX3pyg6mGEDNL6ofXW5P%2FM9xDQhBT9G8GjQ3d8ryGiUCrl%2FRbXoWXJxkALWqPcSIeL09mPmHyXg9TRPeQVOJJIZxMohYcFusqFxFhchgjmkwtIpdGYfQUWUsQT3K91a4Z0rwD4cYS%2FHcGTuVRreWIQ9o4cAq0L82%2FiZ2dAzCks93hti%2FEM43SLZUXk5G%2BmyhnWfiwnd5xOhTgjDHW1zgah3neH2sSGSmDrdK%2B95dNug9YBJItF47V1DOMTBpUaH%2FFGO3VbsVY2JlYLvc01GTJOO18O1jda8Kj8ACI7FHfe7yBpy4k48vfzUIXd7D6oOQ92coYSRGwXuBtooRZKwrJs38y9q%2FFWo2%2BKLjILtrlwTLFDMtQXCDIxKcsjlWV2uchFt7YOHF2uaG5FB1NI4gjVrQ5GGBopIyx%2B4d66uX%2FaQucbIRF8f%2BpHdLVz1Xu0rPSU3IvHeyj33Z2EXx%2B0H7hpp7O%2FTVVkCw7nnKShMWLq8FGl1ZOVa5%2FTz2%2FeR7EI2oTV1OBEeDATqi%2FK65m%2BKi22ThhYgL7BVDn0eRlPolHA9Y50znjFeNRvhD7rtUOWAQBblEJJ%2BdHt1EBV7hmdl%2FO%2BvFMcol9mw23lSYgEXvSqo1VtS3x5u9dB1%2B7V6MKaWgsUGOqUBQUMw6alzsD5fZanmRfYuJ%2BwWcJogcwREtQlHxD7KY45Kb6V37i6Ofpo6mASkwMLJ9eXyEqFieror0tuU13duVTOPoctNXLJ1YYr0wQBS%2BsV0TLhpIv6K4JUnD9iVQnx4b%2BC4EbMF2%2F6QSR574BEEi4iF0ajN8aoZehuf4XKjL%2BYZQ%2FsznGJOULjDqi8zQacmlK%2B2HPaawUIjrwlGDqSqjlCoEzG%2B&X-Amz-Signature=62e280aecf6d28e2daecae408cd77ac55679160913e2f0ba369c20db5beda328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
