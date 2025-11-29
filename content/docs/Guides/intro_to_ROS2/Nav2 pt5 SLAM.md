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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=2070d4e66bd67b6b2174a294ba03cfa75e16eb9a8b8795ff79e54e496ed5281b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=5761911ac13181d378a15481fc08b0031bf1714a783730a08a7c65d263525cc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=2d7164c3619502513329e4596b92fee61d972882e8240f673f937c2db41ebf6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=4901c7592481e5ed194c09cbe993eb30445453581a249b73d4cfb43bb54b2b3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=2e3c54fc80ad2fb9b89d5de7894ad6c59ca35b77afc8dfa8ccff8cc65e08e2e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=ab1b1b5d8acf119c7b1e64672aa08ca6c909bd9f100e8bcb3f9672b23db97ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=30cbd3d0aa8ae0632437bdb6ee9e6310ced7d6f28807eafa7761693000cb0098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=0c17ac4faed4720dcb64e69d317c5b136e7ffac5531bb665d2fbca84ddeca960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=1ca4d74800e1fac9cb3b0eb2ebe8e3c8f5eb9fbb9e866dfe04647992bbb21aa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=112457f0796d511f7bf4ce9c251a9f77bb05953481f64b11849d0e6c9bf83f21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=71c86b54fec51c33f6afaefa857d82d63545b756f9472e8f70c3513a477f4e31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=01a63b4e5374597e913c9463f9cb3be6881ec5bdefb6a988a289c4438834e5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=d76adc5590f782c423731ee8be2db56145f2f8404050b1986b7a4792c3e10672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAWCGBE4%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGBMPZ4aemVPj2Fkjv34XhRBr2Ik6PDPEeuiVccGbleFAiEA4eDSl%2Fd958SIYdvwuzZpdK8s0GBh224YHoTYevgwggUqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKikm5EXvMXk7TjcmyrcA8k0%2F8s9PZhJCih1TuPugjNNKSaxD6SC9Ij65Vw0GpKJvLlwu6BTpaKn5%2FMtqeqI46E2jE0iInLv10HPFGFs%2BcKuVvQ8ywT%2FNV1KZgnaG9%2Bn7tVClZ4fkAZaKrTogW%2FNHL2ciCZKgnybnnm846%2FwTJPB38ibK%2BoSKBysipb834ImdTaNizxBhNh5wTmpNfAPtRJE9v69LDRnl%2BXN07BvriBlyzLOTTYwI%2Bia4rc4UCOj%2B1IXosLYcjRHtAsde%2FwsH%2BS1iIOAOp20K%2BiBCBTEsBo341JEz0ZaPql%2FcWayWKh2iChuJqXKc75DJYTfKauUFHsD5AGkOSc1R0DMaoMsYzgJS5JmA1zdlvNDFvUmi5qEmcC6DGjktuxC0NMtm0Oyzfe2xqtRGW%2BafYuBpBF5l5NJhJHlu3lGlrGEIIkhEr2efXQ0%2FpCHgggU21FsWMc899Te4PUN%2FxoO2m%2FRAqBPi5YFCCnDRtCiQjAL8p1UhD2gDIHmgqranhLUpyvHAVBhwi1nY6AWTh6zVw8AEpUGirfXSTpXDcOrQjNxyepWhW82eJY1fbdy5PEi%2F4dwCjvXLF5eavLB7XBCrcBd%2F1Hx%2BJHnQrnaJowPKHYY8NsBKPvG%2By5kONKg2LQ%2Fi3A3MLP8p8kGOqUBee%2BEc4%2BF2vNQuHp6aHs%2FozzN0lvr7n9FD7xal07qdnz4bresAStNz1Es%2BdXNzepqqgyAaQ0Zp5Yp1fHZJo6CJbnWmff5ZS0Bw4CZUQjDZwS5SI%2BOkfK2dS8XcgV4TjM2m6yLLL94FO0O5RBoFXfcO1fc6Sa7mHwCfAd%2FYfyc4nUvzv497btWigaZ4S3tDNXY3lSr5Qj8PJXp2%2B26oZOJqhJ5RGHR&X-Amz-Signature=37e8ef3e188d5f67739cd70ae80caac53d5cebeb968f815e999e09eed87ea120&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
