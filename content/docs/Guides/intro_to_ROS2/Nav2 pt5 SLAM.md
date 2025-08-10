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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=b0250044568885e3bcc7412a1bdcfb0ce0eb551a1ed671673a5ffb8f983f92f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=e4d63d18e639d87d884013f3891cdee44fc02acacad9c0865f4bb28008b07856&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=12220a68dc4049ceaea256cae25409769662beedadc963cb111894cd635f4155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=f2b1a8bea837456c3b79d3a559cec2e9a6663f552493ad529a8b44211eb02e46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=d1b96eefabb001647f6b3b1791768469bf0fa25225df7c69186889f99fe37f98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=75c2d23c709b85fcfbe52144ce0e2535388590a6e5f8fbe430f6c36510bbe58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=61101ef584be1402432dacfeb027e25de4cb51aa6b12522c2d8f2968180c93d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=042230f534ac7312d6df712adf05666fdbbd2c9d475ee67b6ce8974c3118959c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=8c4b9917132f8b406717d4a761a14d47de28719afb1ddbe51fc63c4fb0122ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=d7791ff2941cced2cfad1f4ae5246bf3aea1c5db4a98df8d6c9a67bfab8fa18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=d1647ae9468c73155b8c293b8a1ee782dc92be52f49befecaeb4351ae6ed1815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=db963267a5b86983c8970723ebec312ffa10b0ec6f2d656880e7bbc0fedbce87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=81b0130bc3d096b4c6d6b29bb0a0eeb2fac050488899cd73679be014a9adb024&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP2XCR5M%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2FODYUW%2BXmCI4UzmAGAGxALnK%2BjQ9F99UDfo3lpP3EAiBjp0upe%2F2W%2BISK8Dx7cWPqbGwYIQz0Ur0fpml4z%2BIUcSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMb%2BjU7lHC4y1qum1WKtwDgaHwVIkENpghXhHJPsOpiE71snfTIWStV%2BC46rYfTSCcmxdTDa4o6qnajnUs32%2BKLGS6XymPcB6dLYvqGyivgyfkwBpBwvDvSA8I1azU6Je2qoP05ZrkeHh4RF6MJ7%2B0W6OihLjq15SXWqXmgzofhQ6NQF0fqcfKb3fxSQkA4FKTKr9dz6p60q5ryXmPBI5FBpfaV7WpYHr%2BYsdMIDh3JazgAAJ74HVKlkNnvEXDztLGq0Akl5hkNQaDwC9psphFkc%2B8lajutukfOOyFEcBihiXYxgUUy1Bevtkmtpt4gjyZNi60ngsNSi7viW7MKgWP5uAxK0R2%2BowQwBZEsM3OgjjHbIj%2BrM3uURJm%2BJe4eebncs1eLrslbAZ8JCgJSBv8T4GnI47oarHKasVxAGG2ZnFqPp9e4xcrg6oFSdBHsK9f8lDZ5IGyUHYuCO8iN%2BwMjxd%2F87NSYP124CA4eDBD7oPDFvVe19lMeCKYXcFFLfzK5mzk4nun3ibK%2Bf1XgQdLA6nA6rMpjHPWSZeU4BTZmMRfixSd58nZmv3rCXi%2FqIB1jGrSnzIUs2NzffAXDC%2BGtJVLh5fINCLBCR%2F9p1XCOGZdByxIyN7b%2BZu3BT53V7OVyUgt1Ey63cMiClkwkb%2FixAY6pgGxNZJjDWJl7vl%2FON75Cp4hJYBZR9wycvSiQUMBaSSGdmURi8hjYWrb6FrKw2SyUl3ywQi0uu4vA9ogopB48eqiwWg%2Blm0SL7yUyzasg0PWj3Ti0NNBnCDvosgzAlAEINcCho0wmtrP6rAUNLVAldy%2FElsflc1W2Vq2FMmoqUN5hC2kGxnH9qLjLzl5Oes8KjZ3v9XFV1ESOxyX%2BPMvPhDhQ3tLf3dO&X-Amz-Signature=05c73d1dd65ca60f3300e37557d536705c70afe3c25ac00941b5cafc17eb67f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
