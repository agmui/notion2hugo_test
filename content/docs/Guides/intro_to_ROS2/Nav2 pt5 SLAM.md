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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=f1ce0ca7276868f1d604050786f8924467ceaac9ade2992c83eba04ecbe0a3c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=322b3767b61fd3e3203822ba96b4cf6093a66e1b63fb2f345e9a98225a06624f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=3b2da7b4705411c773796c87c477df3b35216b798b86bdaca488f114697bd9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=a70a698041c64ca32ff2dfdaf580a7a557cea5ef46cd68a98071493a88a482ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=4bda1a8427d472aae7fd378c975c2c561de3163133ce2db4974d4d5383043272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=2a434a75708291e02515c1ba36f2ba5fc84918105a95de0d36124e66880d4480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=2ed72c679f79bf4b8392e5f26c780a7e2fbc5c4694d23955860c4bb254c42ea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=a1e0e091eab3edec5dcefd4e983070eff9fa01d3f7eb2bda1dd3c89af957abc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=7534c348b9d51c64acf74d6041bc3814d55b4d2dc4cba5ed8b06e473093310d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=d8d316767ffbdcc1273424aaba56cc7914e5b0fbaa1dd099d46bf9386a8dff62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=914d27f1c89193cac8690a75b1a2de3ed1a8f2396ceacb45b0a68011483dda54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=2579d796f7838ac9b11405e558a2a17ec5fbcc03d243a1acfe5a8821fb140ab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=c4c250b5fba6adbb64a1832b8676506fb75676db4ba79bc57261842d5579e33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7NLOVXU%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T101139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCM4KW623QJvort1Ai1UIj3l6ZOevJLCSp8P2%2BURKNfjwIgDEgRYree9E2awe%2Bg1XlQUnfhFnJlsGkoH7n0KiES4rgq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbiZkvsQIc%2Brfaq8yrcA7fYPjV0m0V8iGE8LTWA9VJxHiQcSxGncQow6FrAsI1sUqtGY1Q4mX1di7T1KJA1UM5HZbYFDuqohBoOoC0qixpkLmJGDgjZlEBSbStx2vQrGpIIKSOzfS2XW1VSmqST7q8Fpl6D%2Fa1oFoEHEbBKswUx14yVSid4HNoaqpXfu8I2mNKFI9iQxvfXXVqVrX%2BHMp1a3pOQM%2Bzt4Fn8iWRTQxDyjXHwZBtu7J87xJ8xxrgtDpn0PRiVjYLtALfpGfRdpGotaJV0jYN35FH5PIV2AmSLdFnr%2BHb8Hs8ANtL0kt%2Bew%2BAglqQ%2BBlW3ZwS4XNw9yP7lDFSIizlUJ7SI0Bt%2FirUpsS4JpikmkCLjCLXkexg%2FVP3vnEp%2F7T0R%2FEpXOBh0LZl0%2BazkuheNGlrQLe8a7V69fx7BxcLGAgcUR4M9%2Bed98tqkor03u99QrEWXD%2BbCm5RJF0zN6QW0m%2B9Jpbhg%2FBjz6vXRkk3toUAJ2VIGeTh18Et6SF2UkdwweK3K2XaJw2rgoIMtqQooz03GGneDqNs7I3yqcoFQwRpPPHqMd1qNFhjKFOPPkcBoTMoL%2BR4LtJLVmTLP0HTyQyvOcc413nUFjQZrkAOOTWQptnNu48JvxcHOehqoU3JBUmv%2FMPrOzMQGOqUBmI2MQol4TzDno3f0RevTdo3ujS3Qw92xLenBx91i46enn2vSOYTAih2ZACRPnG%2FXEvNIKI4Y8lmBWaCfSCMj6JPmw353PUGCOk%2FNw2PB%2FytInSHc2Dvy%2BjAEsv6ibgdIZGT2Vsj8N21M0BcL8k6hpwh8EfH%2BY3i3XDXJDvRjUAtS%2B7WRCIA0YKzTtPEt4WrxchnhYPLG3us%2F6A6BLYNIE5PS%2B1hk&X-Amz-Signature=e266a8a478b46e8731bac6c6d54ed78a819664a5e39c8795c72587230d7ce03f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
