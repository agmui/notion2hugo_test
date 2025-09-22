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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=bcbb78bc14c3f6ae0f5a23aeaaf1fc037105fcd8ab857a4452c4d3c8a2801bf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=3bbae844e5d766e04f8bb67833c8c2f90c95a57933c8dd47ba4658847db2f850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=bad893598a3af0c0a3ef8f8a8fd310c9de3b3392d5c644dba4bab79036164f62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=0f69b418b782f9f29ef497b9ab39cada42d53d9a5d62a958756fdef123be5526&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=1351e8da701ac4f0770927ccd34dd760c92b71a421409e229bb7dd5918405128&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=f036c86e4b93eaf3fa6b470dde2fcedaab190131c84f8dd03216d25d74d504b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=3e347958d48dc6e098ccee2b37df7f699699a58d1c1bc12cf842e42e3391b7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=d8922c4f3585b0d08966d172deb80dd8b9b104d2b4e9825e3acd85ac0c5a725e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=fc7dd96fbc2a39309d5dec395be225774e0b22b4943311abcc7db13c2d09b8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=ba46ddb21bf7d90d6f6e8b713ec2a26b578240489142c054db92ce427ae37be6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=7c2517be4d820a638f48531c02913333bee33ebd645a9c5b773d7fbe9245a3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=3a4dac0378c3fe0dc5c053d0f9626e7c8462baa06b140ecfa85f11a661b140a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=fe35ad60d279a8b51e5cb1b7059e5d02421ebaa84f44f9226a61c20701766c16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674D7FGPK%2F20250922%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250922T013844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8k3F4ZoBDurPKjOfCSLs80FUxmab88%2Bfi36NP9AckagIgNR1eg9h13DrioRZhtLXvhDHAL6s9hgHqaiUkesb%2FmZ0q%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDKDXIWNRm4ioviZIPCrcAyssz4bYv9KO5XLvyAe%2FDFvULmJMRLfOuM4jYxLVmOdNRRKGQwDwW%2FDGkUdzschOii4KTrBccZ2w1pm8QEOAO7HRcg%2BRGKmD%2FIkqNxg1u7Io2e%2Flhl64s4cOzdA8wC8muAWQSi6cnHLIvZSQEavuGf24VROOZnwslsu5deeQb32hIbYl5oYJ%2Bhd2CX21wL9x5PlV%2BvGJFK61rdhyvqVYfS0%2FtWhU6cD1SNDL%2BlIyKr0qherfirrdV3IprKnyHEJRYD1cO2JiQ4gmPQ8jRJ6MQZco1JiP3io8FjI7vuKfM0wf%2BcC0xBKSXKXUzDMUUbfoGYFyOYzqjX7Xk8%2BRNvoaEbwFNZ%2FektyCKVzHD6EoKs7eykxmMs34Ltee8LAHDiJMzTe%2Fe9iaCmsvZrP%2FTWjnI363vLhGef01a2sggjoy8RKhi9v6kBqZScmeZabB6gJM1mQY3%2BlQHtIg6h1VjtCbu%2BPZ71er4NUvAGugXwm4vyflTqthDjEf7%2BIeSNMO0BQ9upmKSeQXy3w8n8NkTaMR68VXaAwXpzeHOegeO26MamwIEDZWM%2B1v%2F7%2BSxZkK%2B3NJ%2FA8aHwX%2B5PtZMCvM9L44x1Y2CgVDh006A2CDkK4Sce0YWGBqD%2Bt8lhvydIkmMPjFwsYGOqUB8tVByfNQRbgHbehULzEJ8u7%2F6IcYFTRhrhErX4bPMsLrKiz8W1wiZfeKVCGercJabzGpPldP8gMNRSK0VZHZ%2BScg3PKq%2F6HACH84PR3oDr1agNKv%2FbVOnMWkfAwRVlaIeTsazH6nMJ7FmeMOkReNHNT0LBTTbWlS1Zb8j%2FiWDMOCmOoIeWyiTbX5Bl9Iws4dsxDF%2FCBm0hxwAvRWGMudWN3t9j93&X-Amz-Signature=4343f648ca422c61a50ec33c439b426d7c003bb6e5c7dea4ac377f8097866d8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
