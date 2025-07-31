---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=8ba3b67bbc4fb62e9efadcc2021e1230d157243232279bc48c765e5f817c0d57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=41be5076d2e40e9880c3e456cf774d31e6438fd0a12b1420622ff80bc3cd0dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=5591c891d286f35139ee4a4881e62936762cc2e6b87da3a10fa4c485d47f8d6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=ab76a5bac8a2fe0eb528814c2d536a98f7bf255c0722667a471a6844838ec086&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=72f4552c1015eb25d358e41444ab29afecc132b8d765306336b00a5afe3c9493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=55dda9186d926e317f25597cf6db319033f7c7c9da7b8edbbd16a89135c8fead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=78cc27e8a8df07f4286089c4c2ac55c8dd6d906ca5ab4342aaa7eadd6aae1e26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=1fc907cb6c2b3550f30e8d4a134721860d1e526c397eef40efc6db43d17990de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=50d7ef5f78b62f60d9bbf1f6104fb2449c27cd4c9b484d107db3e3d15a8e86ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=96a022930a361b2706ff8e93b04d237da36f501e56d94fa4e86947a66707e825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=27ec32f54776abb6d6943ea5e8013f20e49c295dd232f0b135b2c855af3ee8b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=344cc7738e2ec2cc5a029c2f28ff5d81f3d904bfa6060aa40493e9467cf7772b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=32390b317db440ebc15a52bfc8c7e47038ac1c9f02fa3afb55af7fab5ebba9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRT6YRMU%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS4dl3O6okELzngzQrXIoUAXLAWCHdxjobM%2BtOKHBCqwIhANoMv4%2BLzoqBdmPFM8MIzR5CFxHX1hhleVgWfUVwrulBKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwAVkjpc8nLPF5aFUkq3AOSNzLlOeWCvRTczrlEQJHRPuxRF%2FV1ijKNgnW24SPzYym2%2Fvv5ImiB43MNy38%2FIq5ac%2BpjyUqhcZ%2FRT3AkWF3KHav4T7Op772UTKcsr8QF%2FygyUaMW11BoNMDtJ5Yr19IN90zbFPo8%2BXGoph4W3gJSjgQ0DlZWLsPAtRDpFS58OqwmU8LLfI4E83n3hwEZ9z9Y6phtCbumhVWBJMXDFBjpg1B%2FlS5D6TcGR7uVthtRqKBmG10%2FEts8BaOzk%2Bzc5gOBEfieu3FcdF0PEfn9qV9im5DKojFTpxWIFuxVAkLGBVeaS%2Fc82jwo%2BJE%2FuLnTcFU5BxlSRzuZLlpHvQ2jC5hR92LMgfz%2FExwbIKcRfkk%2FcLsG3hutT1ai0MfcWurEdBBJZjPxk9ew29MUpAyxGyEqo2puWv66bie8FzriikxpOV8SrVENJ0smkq%2FOTrUo%2BmwjqVlBQtSt6RwoTxeB97Rjaqmy2YWjE4as6Hvd2mqWMyRi%2BQnRjFFGxdYgPPCJ1nLAb0pMnVDlSmZGMNdjwGskZw3ERqXnoOpGfGA%2FyBMno8bQr7iGFeShLuTALvRqJFPJdU7aqihzF7cKBwEDU9AeSEhe9nQnWSZD4RHqMc1YWoIJqAFPxWUiOihuuzC3uK7EBjqkAUrqB4I1zR%2BieySPe%2Fa6f0vAqni0bQa2OMHqvx%2BTfHPCYGinxPFNqC7085xTfmkYbACGUG%2BWvIYqQ889JA%2BaBjx8NuBqlNfk5TqDfEZxLAKeeGOKlxIVfhZYOIpt6qUDrBdOzHBBO06qDpfI3VigOD5zbAhv%2B3ZoPoAUWW4Pvcje8BCN2J80cpjy41kDOr5vVzh8p5jbePwP14tYCvCAy33KJIPg&X-Amz-Signature=c158cafe7c842e14e9b1deda9551dcc8dacfe16617c8e46aa424ae18078b595a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
