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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=2dbf7572eaf85ba5f7b20e6c8f74ccf8e35643e4eba7d9fc7fb68e318df8d840&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=7d8e5aa7b37f396afe760b40ac95d4a1f6668018bbee2f87857492bdb2638d37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=356c0a9c5f60682bf9ee5aa7024a4443fb66e84600d5d8e2cf8e328a7cb4b5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=efcc4de12259d15464ca4595e245b7c05fcf866997d6256ce371c72dfe9deeea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=9c17071cb0e616a9ee617e90ccb06e50246d9ade3728486f1b00ea8b7be1f7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=196478fffbcd2a9029e6decfa3a5ac9c00c2c8b9be420dc642532fffc06c470e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=e414b6d7d1456dd648d9b35d8502efbbae346aaf241ea1f7f675f4fd9f599731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=46c9edd66dd0e4e8826448cfe1093a0cc393fee452188431e819c49646f709d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=cd2ee4dc832e7bf7f5b4d9629e76c0239757fcd4ea300fe142f1e16337756e39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=bafbaecd43f8f336a74266ad4af267153a43deb54c9d18bae059b3d662a82946&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=0c21238cd3bbf82a2437a0b1cd5af482c6893b7329d4115f7a0ab298a60606d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=10659b7ff116ef8f58d43275087d765eea8dc61b4868e61bfe8d2ca590339e02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=56d39c7b4855df4cb5af97715349cf717f7250bb806bbbf2797e97f888165131&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVUVM2JU%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T005150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPUPAKGewt371hxhypSFLX4Lnth8H5DExViPNnQazhyAiAES4U6ETRxk%2BqCHs0GHA9onYAfBHNulebBfI6LYLkzwiqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSnOc4YeRHQMDKXfAKtwDCztFOEjB2ZHuKh8tmGyCbpfOEcRqJfTyaIVuTnDdusUNyUtSleh0nfmj2teYqpB1pOgAgiyVUYGHkR4en2t1LVIlrs9ZTjlBusL3e53i5%2B4tAmUVG%2B2IXfu6rMsZuMo7kaUbS6w8eBw7i2R7enBhwo%2B15hT%2B1hRZZILAx7Ij54ERgmUA6hd%2FMQOZMPJWIfzWInsFEKrGss36eGnVPwAlWihtGuRs3qib2Qjnmk6BFK7aUQpzQBHPZ8X2BmfBpk8Pf24PM6soyc7e3CYvrzWHY44uX3M9gfzbN2ki3QR%2Fm%2FW3a0CJGkp40qMcwz45xtWe0LWhoH%2F6qGQOxLXnFS3kHmnJZe2zc%2Fi85LY35FK16TRmgxUNntNNShXoaywl9D4fJg32l2QRzdeSaPM6y4uVq2lYriPRzLpEDPhqNDrFLbHygJ1%2BPPNmfZ0S68C5Pm7p4GEpB6WizAv%2BEYVJgwO7dHglXDq64nm4dx2bNJdXdHp4PN5QJUMjOQa5IuKyQeZrAxHLRwt91zP%2FVfl8Ee0G3ekoTTihyMba0UOa2ZrmiNFdna3h80jiojJBWRvcHTKnHGw94aF5Fff%2BEnNBuL%2BkCU02rCGfbPCOxZ38YbZAo4CcS0xWSauGqrcJ6dYwhrPfxAY6pgHL8SoRxTuRQtSqcm6kFWFiGTwiCNs9p63vHRbx8rm7v%2FW6bsDMlTK%2BD1kv7R34%2BcErKpp3b73tVy5ZQVDhmkxsQBy8Rkf1xdTCLlekJqUwH9VlrB56pj4u%2FKBT%2BVlqRKfFjJC%2FDJz5sQZx2Z6MdUzNpxiT%2F33DbuXEniSzkJvfQ12%2F%2BffN6XKSg7k%2Buo%2Fwyb18d1fwCfAsTZRetXoS6pqupNhe%2BZej&X-Amz-Signature=2c9d9c26510394cdcd7244bd9e788ba1dfc7ebca09baed57a79e3d863d751ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
