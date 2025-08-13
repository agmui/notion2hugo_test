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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=618a6f44e8d406a87daa522304829173180f6ddffbe6302f688b31edd1c59ee4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=ea1a78c37f545eb41f802fefcafa9e09914b150b61e903118cd003fe167894e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=861acb2ff1d3cfd60695e1d7b2736dfae24b198ba68e707847146c138d0d4c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=d4c1514e961f194665c900d545f0e1e9d85ceb6b0992ecf6d8c5a012c6700123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=c92aa90b8b5b7f4a03bff094de97116ba08565a8e3385dd5d3491b3bc967c3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=d90552893c39aea3eeca2ff7ce67401cca302dfcc2908c51821377c9a3ad36f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=8c238ea448a3fa63c08cdacf420ec30106ddbbdc96722357cc80bc750fef4c9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=404e260096f358376c6d338ad29850b6fd9bb1aa96bef0b772008343c7c983f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=07c52e172da8018226b6948f3a2df7e699a72c958f674c88cade1e9ffcadb3d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=a35be3dde16034848a3e7bd958f65e3c2110328aedea57be320b6640a90fa9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=d92e8887af1aa5e3a3038a9fa106a7a617117d0e3343990cf95601100ca7310e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=47d8a5736371e149fdefaaf86b78ecee42b13d95206c3d1e9a57999c75134e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=3820dac3a5c82a98a62c7c215434c9e0ec02201189616ddc73ed0c4d71d9b8a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUVZ4VSI%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICpCHEf4K4o6jZqRtVSLEbS89VuvMEEh8oQJbq7MhAbmAiAgrbLvR67YtTIOinbZ%2BUGcBVomw5HN4Twz%2Fdw2KS3Rwyr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMiCmOQFwA7KRJ8THJKtwD6NIcK45Ws0VVbXZRWNzgbRj0grgaPoT5rm5zYVD06HDLLwQGjT0X0z%2FEwBJNAZTBbFDRa6OWthExvHjyCMWfgQo%2Bax2zXIwd9CORpbv%2BEdvcu%2BrhpGuQmpqlCvT8n%2Bb1%2FGK81Ok8MFNfmUz2eHRivs%2F%2FKUZHgVFQCh0r%2FMzLB1dSr7eRklAJtzRZu%2FK%2FrDHfpiR1wRRGZvbV8OHTQBreYMOWVkAOUrXIjf9l0b9vZt1RlbyPday0RXmkARtpA7TTTmk22%2FIoUxmYW1wyNZZw%2FlArR0FpKKPBaDLLHz06o3kIGUU0lOJ0PuFHjltAC0oHTauGs1Jq2cjCVrahTtj1BJ%2FEq9LLfQdBv%2FDoBnLOGarQO78E8XH85YxVyrIZRNi73zm%2FuRFs2b5jYlfC9s8vAkMnuE74S2JMnYdgZ%2BzaUB%2Bcs46LSnlTpc5My2I99hqO2gKAPlnFN4Alq9W%2BNa7QSm8lnAP5CQZBYtknBYNdmiE6G%2FMYaEKHSubWQgncgN37ONiodBPhdPzF7QoMzvJAlmvoZGY6nyl17%2Bv%2FPLosDVs6pOb%2FF0Lk1H8B16Zmx6QkfvIK0jdUFWQx2pa16uHDC67kEOAaipSkzW2P%2Be15bHSIDsABgUPZE%2Fx3l7kwpNHwxAY6pgF39ZNFkbz%2BF8RqgUml5yIKYda7E0jzqUKu3WpMCO%2Bd0Y8XsVAWxKgkmvhAV5XBPVHGZfbQfSFxa08tHfnl51jdfWvDLBGYD%2FSAIc71BUEJp6ll9iqZVj%2BE158oTJ40PXHE%2BdqdWs%2Fak59CTkutpCE7fKOrgcGWmvaGsaVI8lp415m032854pWYWnRkl1gDFGepfPAIaDMugNxLnUvq6e5jRW5t6hEm&X-Amz-Signature=16aea5e72bebdde9aa8a337be5e79cff8191cbf05eb4bd5357a31543dca4b461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
