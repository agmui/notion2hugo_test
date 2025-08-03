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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=0061a396fac8386d3e63147c6406c31b3e4b50845788c4dae493eced8c541a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=deec705937a07e3902e68881d5b43f50212be14761b6747a2f33b9f29d9f6a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=7311321d576755d4b365ea805cdd28840f0cd018089ec8912835fc525d0ae222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=ffca815b2521346e32ff3dc58d165b56d3b63118efc36ab50184814799f9d00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=aa3d697789d5e7c29baaa091e4c2860049e51a66f8439eaed50780a5f6c80051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=183c8a791e5f465ec97d934657b16dfd0ac50da8f9ebb85010fcc53085eb5e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=a13229f89a01ee7b8a816ea72506a26cf77e7b4ecefaee5adea56e5282f2c179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=0317cbd27fed3fabbf700d765d6b9fec1d97b3c1d28e4a2556919ea61cd31376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=22b490f228881c222eb85bd4fbb343302c04eeb0b24d942d800652a308e75237&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=bf95c0c42531c311968af348511fa513a760231e68434a49a1579ada9fcdab2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=cfa19cfb2945d647a737a7caad1ae60a7d751fbbbab5e66b334073aa95e40c3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=4b1a830315bdc4a40da903c0d55cd0f6ac93dffd6e1e9559a04702c802f80889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=3e76f9c1aaab8a970439ee226b226be9ddd420d6cde866a534d203d11f650dac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWPQNJ6N%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T230933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFIiv%2BwZWROuin%2Fbvx%2FkVrlGwRUohwoM3Cd%2F734yOUmeAiBdpC59y9ywVTL7CpZYmJf0z4hbRcqc91JUpEps6Ydn7ir%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMdsRo8V5iba%2FPtkGKKtwDBPOKzdsyArxqEJanfN9%2BYTkIh%2Fv7mQg40bfw1lHcitv%2Bp%2BLoMj%2F64PufccoYHKNse8pieBCSx%2B7ArVS1IwBQoSrtRGyTZlDEftWy02vWiJnVGDfKjm0EbB89E5TaZh0E%2BMXdjgZhStU%2FwRQCfYu3qcKr8FNg%2BLtLsmogYDdgpCzrSS0jfT%2BxnPK032b4EhFpPIvyu7f%2F2CwXMgaAT8ssq6%2FleFc%2FCae6s363fKnM7TJ91IysAZQotmwWPRcHpL%2FtCn68h3ykxMBEPf8mdqhoLOqNjAUm2QE%2FfsNvV9rLotH%2FkQIOr4vKS0lRAQpIO6bM8LWvVHITQj753xGqfLYvcJlrvpMF%2FOBLwosudnBImx7evCDdaFW8r6aWzRwBL896%2B9a5XrZkoKd656QJ1q2qGKr4wj3WwzrbGdL0YEmh9FiZHNg5qbCmnXCTgsA%2BqFbIGwI1AFk%2BHwvSx75V3rD0WA7tcOi9m0HZuLJp5W5rnbAPyZ6%2BtpfYO%2FhbI4InhaT0d4pvBABDp5kg2ykgtGiJy2pTc1tI5MYWDN7%2FNEU1iBrd%2BA4Suyn2hV%2F7LoBkMaBKCpIIsZfPnDu%2F3dadhP8WomqwX0U6MpydM0Nzs4Ais2wjPzMl%2BqqbgRrIa9cw%2Ftm%2BxAY6pgH9h0ks3vST3r78Oxro5OC3pMJY90Fcwlczbu6TFe40tu%2F9tgG%2FGFiHwXFmui6%2Fi8VZc%2FZrbouKLRjcBln1gmoSnVPHFy0DEb%2BZgd9zePMxm5ozA%2FDgArARy5%2FbcSRdjtuxUlzIV7R0nNBZjLAq5U%2BQPwaJUs1BkTMkQjkuKODD8koWwoZdNjfGsGSyuMCaBuv%2Bp%2F8EOj3R%2B7AxLvl7sfOBiqt3vZdj&X-Amz-Signature=7cd500d9c97cca898f05399a47ec792968d2a27a86ebf3ea63841f8a17ab0408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
