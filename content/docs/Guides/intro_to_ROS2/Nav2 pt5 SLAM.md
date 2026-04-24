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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=9aa49d97c6eb3340d72c34a0a5f838307b4c6679697864fc271546c67c3310ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=91ec658adf71e00f16d02b90de03b3210c2a5674a64ab61cbf493dd33a8d459e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=7a70dbb57baf146a54e3dbb37959b378b8b76f54830d83ba7a3c690451ad3a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=603def2094fa0dad3f5f0f010a43d620d5229a77fdaa7daacd28ee92cd5e1b9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=2888197954f1b38a6a381ef3696a9af1ed5941ef7ab78ea26f3b216d348c498f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=6ee5c85c27e3e4e82db8606ba9617e55b899a62ec0d43fd853f1698cb520f6ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=adeb3a5578196ee48533ad331f7344693e34a4da9b8e76fb2e835f1fb755cf41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=353276673293f6809bc161104bbd30d38028fa5966cd291240034807a5118e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=5c99de9eaaf01dc8b23438b8e497569f6323ae2e4d596d426571b5dda3466073&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=ad12f8f7dcf08398548d68f34c43fd67bdd3cf012473d9c9b49e425356572212&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=35207051f9791479c3116fbde89e83515c54c2f4c005dc6d78cd301c21677cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=0c8ee74b333ffd1ae4d6787664050da439e77af774885dfd1139dd882ee7e179&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=b2e5bcb520c0a223078a0b307080e77d6f89d33d1467e61b5c86f228316ea153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJB7LXY%2F20260424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260424T024145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfr2Ytb3hYES8SmTe51duVJapbYG0pUaXIAwPiM9p7PAiEAxXLnff6zsfQxfpgT1%2FGAR5HbrYIHTdsguiX8ZWWdpGEq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDIGcTKjMDG6Vb1EQpSrcAzMId%2FjV2uTJZhL8bDZ43uK9NV7mqjXxm%2FXFNFh5z8YbRxzduCZ8tHnCe%2BxEJuKhL1u9iJB%2FsqIvy99GXiypo7olv%2FRsba7XvxiX26peEOOU3cSMH8JDSe3pklagG%2FWu6R0rSMdtu3Kv9sDIZaa8t%2BNMJ7AWcH%2BrfA%2FOAO28qUkNq%2FOiSQa1afWjj6pa1%2Fw1ULVOZ%2BtjczSgC%2BE1bhs9MgZZCplQqTKbaKqyA44NlR5wLIV4TQgiA%2FrG01MryYNydZ8Z0PgSF%2F6MUr2IVWIx0DhYvbtzDpuTdaFePJcP5isEWQvcY33MNsodq1Ep6vr3nVa8igxY8barCTsIdoHa6knii%2BNzHV1sMBx9Quepr7FH%2FyGnORbMuYJaffes7JOWsM8TlcHZAmwBX%2BCfN6x9d4pnpwW81%2BYgdbJFRQldkfRCQLi5iRwxSpnS7ekTxkQIkDbI6QaJyFUramPFk3JJ8Ue8uZJXLA57ZIZreMVlnLxo0wTVTd%2Bxj48xctSR25Z9fTkxYVRY4ZntAZ%2Blh%2BlxLdRZ28TtF6y%2BNlcrDVFDjxPNye%2F3yDvKAQzLK5bhaKRXGdP8DcDjs24GMLLdBk%2B3MrLVs34%2FjJU2%2FX9nUEIS%2FoohA3qWGW%2B9vKMXLGbJMMaRqs8GOqUBQcz9kueqsn1K3codx1zayMgq1e%2B7%2FjwCVP6mKL1I4jzIbhEJz%2BxwQ2IkRt7JbeTWXrilr4dgBnUaon6yzs1E0ISf1TbpqbOzCiVe6kgHvZWt%2F6TfxlezQZXiPw4Hh6KWn%2Bqc8jZrtyyCw8IL5AKK6%2B8AFIi6vnzhTKd%2F45kP8IA4mxpa5NSVOmKM%2BYHwZKJ8MDNyov4H7ZKBvkT7xJtbvvSUSKty&X-Amz-Signature=d0f995eb7fe4cbed7b9cdf9d90df2e5cd6801e5843af07c30a782582db120fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
