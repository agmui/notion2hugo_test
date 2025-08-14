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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=606c0af9b0854584c974922cd812cb785f17bde4f0f02df93b8fb3748678f8ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=0c6a0ca04205d544ce8d4711e1efd808763ea44da10b91b55fd6581d771a4c38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=bf1ca00303470d83ec842bd3c7c7683e3e29b140695590cce54b2ebef1f06ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=d69514b3462369627a75e46d11fb55e7e190b798a2b2e1164d78b9f2ae59c74b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=d04fb3b2b94973863e09a407db222a1dfe64b7871cf2cd21d3b431b2dc5a2390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=8659360e00d35762a0a342a31a66dd290e164b499dc710df197026b0b4d623bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=2c6f66e6af7d761c9f38076e557ed47795c6f9ca558746cc4df51f4c686fb42f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=6f6f0741a1f4a39e89ed0ad3a8b33c920701e3e55910a1e1c8e00723f1e2185a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=51ddfcf12b4c3843a2dd08ff61d4f98fbba8dc1d5b2274a7b6c1fdcc17db0473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=9734f9e1e40e46201d0205b4bf708ab508a431c4f487ab8231dd25cf9ac846f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=8af4cb0fee78190724567bc45096b30fa18e8d14fdb985887b3edd70f0e03425&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=1cb6c47ed4e03a5025ff1599ba76d28b2ff2f60d1ce5fe8328c60888bb26e5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=04840a67656ad08088af47c942ca9f664c01c714624930f1902b3ad8fed1eed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3YM2RHR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T091322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRPZwHUZgdn510UuZ4eV2ha2SRD5Y0D11OJUIcpG1%2FgIhAMlcH0xXJDXByPun5uzztO%2Be8fHBX5A7UN0V697GKQ8cKv8DCEEQABoMNjM3NDIzMTgzODA1Igz4YutQUnX88hsDndUq3APU4H6cyzNoLuSkniPcPIyZGHwSy7kab6ZdoZkXfUnf0YUnE0u%2Bo73HLhjrpcaIqUgIyapMacalwiP5pdoX3IuOTtaSST1ZzyKMdS1xbCNlAxE%2B0yB82V6r2jPLFFKFgedFtRvDhxFg8jdlni8WXEqcCw4jsCtyS58WgiPoOGIBTFiC7WbfuXpHjibxhUdW7K4mnGgDw1D1rhrNsdYRIM7fHcimxJtLpF%2FsXToCHb%2FHKBnbsRC5KrArMNQdx50DEb5nAuFJRM9OoO9accFWpZqAjkNL1Qm4P5MpmqX7wRyJ%2FXfCcx9imdEG92G%2BUPKrK7jececdkB9dugjuhdARtLDIyJxlvhvhiA6qXnF6%2FgqxiJAnDTye2NTx3CnbPtBA%2B%2BoPO0M9EHH7A4vPoYFtgVBmu9IaQAgoYrGwj7NEOipz9dlGMXmA%2FrruXdZpXPmhrVMsiOHKPvQ2xg7e9Lvep%2BPP4OYWvRT4jv6CSaIpr2yn9T0VHQvHs2n8HnV8K6xm7Y27Jruo%2BHjN6ZiLLqk2SV7ALFBPqNd8%2Bm%2BfcNh7pghEE3ahUCFwDOudFt1zZOjpR8ci1PArtFkzDRGJ4WDymikNmoYSXkTBmjSEf9Pe2ibQ4KFjmz25if5BS3W%2FZDC5r%2FbEBjqkARbTupECHyZyxXAFFE9q0MmKa3x5iTnjxK3OZvBYd%2FgKjXgZ6y07PbWPnwHkuCIO9BvQDPRRmaXuDfj8HFeyDNHsGK761DzZKtS4u8Zd5pJ2ckcJ%2FxkkpCGKi77D%2Fv8vFB4lkCvAFT%2FGx4ozEHfUZ6bhl1haMmZ2Cod2C6Cb3WLfcc6IM9273aO8DS1Wx9ECSZ9oYuXMiSPFsnpKNqcJJte1pZw%2B&X-Amz-Signature=5a15d3d87926418c2bb63eeafbba726507fb268569828077936eb1f528e8aa46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
