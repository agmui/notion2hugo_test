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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=0b26230dbaa757462224e85f12f1ff6fbda0fdbaa7b544f3b52e5d0580d7170b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=a9a9d6c99c5e9d76f02a987c7dd15c61dbd0d43a026d8cc655151d49e7e2f60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=5c107aadaed1a60448525d55f5feaafd322a12d75f51996e166a5a2523cab2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=3b6f8c2f9a4b59a4bd85ea180cc3952ba745477d8ea878be103f08c453fc553c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=62dcdc3c0129dac8c5cddc189a0aecc835cf48e24d4f1f218da98ca123ad5f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=8b34a517ce3ef6073600d29510e06be4552a36b6dabe23a157b9d598f6f98bdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=846970de9232640f9e1a45f7f3fbdf24092ed0e46d41b2d500f528cf37e9292d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=3935126791ca255fa6f28c034f7a5929021cf218d6315de7fcdd37f118b7e7c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=85af624f65b310d4c96ba5f6ce0aa09fb719ec8ca14c8639d56607500d56e38b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=d5676fa39947a2f0df9982583e25ba273e47d641d9c2cd42b47c6f88bebd8ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=374cc5a8c66d27125f0c1769251df93cdb544bf7afe6113b5f11774d37365d74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=4b941537a0de5e368da301dea65d8ce8132c779a500daedfe912e5793e80dbbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=087583c96d37c50a456c79074edb04b68a37c75ea3cdf491777eb9f789b90c68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPNO5SLR%2F20260102%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260102T014715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQC49bJXSFNFfdUQpEVHyabBjlUlgSwYl91ClzqAGw1b9QIhAMSK8rduCG7tCqQHarEx7to8KfrORXy0GhuKVyXt1%2FSKKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx9bIiOGc4ci0uY1lkq3AM6dSdM5J1B1cXuuic4tvPT2uvyQYoz79kVd5F%2FmLDdDaB6%2BJcJOfsis5zbxC0pXyJW%2BOcUrY2fKvod1CAOT%2F7NZxE4DHCDwwhOFaNT2eOrIdfQgv%2FGmOHi%2BMELS8Wa2E80RYH%2FL4RIiJEImDIQdgoAEae9B7sbDwZhQmRA0NLZlxg4e8FdcthgFH0ajW7gd%2F0ezUTSzzCqNqfeoMIID2jAlftv1SSPuytGNW6ItyM1g%2FsFgIkUzvk7IYm69d0YWpXZgigblv7OGsPbOEpbucBjHIffO32TTGxYeAV%2FKd%2BxrayXXjoK7yyPfX2KRoB4JAjXghxMLeFMN52fnoz6AllulmlPBhR6L9Lq7mb1Ddav85FqhEu618m0BQU3JPWRMhx%2BC9pf%2B4JNi3DAI3HUL34zL2QUjPl5BOrJsOIbCUCkxH80Ro5yw%2FvCiJx53QoedLo5FGn0Xibxm%2FiUWE0LXbRkm6h9OfdeKbKH8T03cAD7gs8junTz%2BY%2FbJ0IMtJdTxGB8KYhOL2lZaLLm%2FbGK%2BIAaNrvf1n51PTpvfy5SpZjK4iz57P7REl6%2BkDhMxnkhkd%2Fks1Kjnj6RAAr16B5unknU4jhLl5vK1Ba8BWwtbUHVJE4pWA%2FiRjUo4SD%2BsjCdr9vKBjqkAXafGZ92FsvWhDXOucgi9%2BdoHRPhf8Qp8B7T2w%2BNJY5zkTnE59lPn%2FhAHeoGs8MiXX%2BhcaVmRaCypjHkrsoB4zNG3CjZU1lI7hXKYYgl9lWsrUBUlgUAqt78QYmyVMuAG%2BZUMGpE8oLL0aUUt8wZ6d%2BZ4EPWAwNGbus8E6dv6J7VKlqjCDotfIp6DmFCE8%2FNTwQih%2BbBkssnrV3gMtcH4J6EwcKV&X-Amz-Signature=4aebd963df021f782bb1a501e07ca13c4d27311d55e066b2cf2f9a1ce1797a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
