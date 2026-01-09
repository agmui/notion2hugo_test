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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=808a4ffe61d8591f33d64e6aa6ef52bc1a22df0ed8764bdd308f0f243fd415ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=043344b1ec7802ed07d1aa9bf910b61ce046470f07ca193a2c6d78252a82b493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=14d87c67b636a57384cc4ea7974068731f246c6d78db03e3627352aaf1df7963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=869a577682e5f584f91954974793a74945f02cc9c64df8e72f01d0352807ad50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=0e8e0f89c2cd06754d7e6b78c361ace12d9541a663e4acc5e2c9d5edd6093565&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=cd9505eb52648906f5a5a6926575566b49977a87d956f8b9ee84c851531b93f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=450f4657fd8a05626a591524ece6fd7ec85b7709770c65aeb1ff466cc0a75857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=c532d2b02d91f504a339ca185ec2ef5968ffa29c58f59f369729ddc6cec6242b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=360f88634b60ba5afdbab4b1272ad747b9840880463b14ad6bc32c255be3d467&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=517eec5e80b59b80897c27bc8bdbce775a089cf44475acf1ecafcc4bb2584adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=726f32afc2ad59280db74a8360dd006e6f4966c7a30cd36d7a821f53d2ffaa7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=9fb71e32f7055cd834bc6d1081a03f4195ea9829fb566229ccdc80fc5ec79143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=09b8a3a0948a270d0f7e758bb8f89d14dd7aba15ac9201b4ee9a10cfb4d77e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V377P7FI%2F20260109%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260109T014819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEaLtZwhWoOsmwHU2kVtHZnEqUtMjRX5GfwnY5u3MC08AiEAziRpHP0d%2BLpL%2BsRBbs1KQp9%2Fg6UYpLgd8ZCQc85%2BAaMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCX2z8%2BHvtbfSzI%2FGyrcA8g%2B055o5nPF6wtXCBegm06Mevv4p%2FWN%2B5UoLYC3mUk90t9stmnDBDsE1GUnUNg4AONfYo%2F5KFOE7qnR2h%2F3xx8ZwtqU4726oo9vaG%2Fyt%2B5B4jGwxEGNtj1PZ44IO8tO0tYvCLTq7KMCjROsOW8H1qr%2FWM2y8osOOQ8r2mwdrlYFuf8faRktTY3OexikXNeSSXJOLCqoCqSLhvCN9HIm0sqwy2LSBEN698uSI7Ofz9Imbf0wSqJhQnCfC9II9Y2%2B0D3xFqRUARsWjw2OcvjirUPDtK%2BhZrhNVHNDEtitGBGjg1%2FQcEAfHzy5640cLNIpLXcnIeMywoSH3PnsfANWYDxJwEE112Yaw3bB%2FOs%2BQIdXvnNOhVo8Rj3e%2FiUqEhye%2FaiWsw5%2BtnSqWYxv7zcvBcV9GCJukihv%2FD3WY8gfwh%2B31y3nSnV7yfHMYwWFtxChvr6%2F64ffChRqMOlujyFLwYmxH8bs2fMb5zPPb68n3k6h8FfrKBnnAJO%2FtmpiKMZJteAqrhgxoF9kRKnMANAU4bQMg9UjeStG03DsUphUZEwrMJOgQ9DAe6nE9igXPd7NNzdAijkt%2BzlP3l%2B%2B7MjjWt5O%2FO9CmbO6lDgZXGEUaoZaJjjbu8Jx6gVBQbFIMNWjgcsGOqUBuhJcEMXdfjUtBYYVKhdiprsUHjAELELAZovAnuXF4a1RdoWh5Z5VgqFW4etHKBRyRWzxpiQ9ptT37e%2B2mMSkvupnbquKsbgbOPtckS258d%2FIJTO49lnS5U55%2BGbB2BEdyrbNG6%2B6NAYPMIPiEiIvym5hqk6oSKcLbb806WcrOp8e1iGedCGsTPJArKwb4GozENcepmTtqykCtcPSjyj8MFdUdBOp&X-Amz-Signature=edd721ffeb89a4a7def418e62c6f006091156a0fa97afadfb15bdf66d064eb15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
