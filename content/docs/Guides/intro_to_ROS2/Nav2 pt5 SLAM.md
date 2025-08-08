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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=1921133ee62782183a17acfeb8fb0a731776310fb8e2748a98c2c0df1842a1d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=3cf05f6ea6f5252078a98ad9b7e5b5f343fd80a53b70d0ad4c9b665c3f8b954d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=e8e597c657cd97c17a20b5ab9e5fc0101f7323359654feda3ce8107a750e41be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=d5f5fd1b43447e588695991e03f5c1b03bf26e58c802a38023e61a4217d42cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=ecdd46ffe9e859e6b20ba4a0051438a6d2171d4abff0d21a2c6caab86311718c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=1d8b5d420cda388b906b4205079bc7520e16a3feeaa18803fe9e91b160ea398d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=5afa5faf502532de29e7f1af2f398c4829d1ef82cfb0b585a2f382585cd2d384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=19c85fd5e462404ef8cd4d20f0d8fb2b39e3fcc72f491c2fa3fd2c75d6659e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=22d8be37b5979729ead82d7123b1cd77151b501710c105951479c681f7fad9ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=a5d19900dfc34f12dda18e9b3bf4ebdff6d64d74d3c514c679e14d608608d589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=b0e27c028f5e838ce64a43bbe95f32e45d54f9c39d7baac13f0c2f90ccdf20d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=b471a3c1e23be19945851c2efee25f4581d1b79bddadb2024917b26d85d81fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=4f162fd64e05273298c97a6d0c7ddb55135bad32770032ab7f7cbbb53b2cc6f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QACPVA6B%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T035944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIFquCQry%2B%2FCa4qBC85XIwMXQvQu3FHsTaUhKMJfYZoQ%2FAiEAlwnPpOWHfQrBwCe%2BM5WgTd%2BQXaJ4ja%2FBYH7S4p2AV%2BwqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIkWFVFGnSXrfYFAyrcA1AT5x9WVpsPm3jXh44cyDn83vBAdCVAet6TczS6ILActAJDWkNXQTCV3zSYEUURd4vZhCYUJXYWgFtgQHWhm1BMAaVoFDrXzoP1giTphEnBzQMU5VSmlNhqdYG2oMkVHQtOYRtR6nbYYCVRiWNOeP7mhGcc1GYb88Tx3kenL6HbxiDjemUS1bxyL%2Fr3VHIVkGDC2g1qjMG3NwY8%2BO1J6tr6TU3iCDcZd5ryAFYmuJXYYGq0CgqesqCqzfyypdrsiaZe4YOoKrGO7CUIIfaCS8hqXwK1Jf1ZvekA7lQIWwS9IoRzCbU%2Fa2hJKYhdyRQEKO5131BuCQ6hQthwlXIh5cj1d9WT685665%2FA%2FKLKmqsL038Sub0AAAxBbYAejVfvsM62GsPr6G0sD%2BJTM9peotEcFo0hUuHRRxLhIc8B8x2w%2FnwYsDl18U9meJvcjiTDsFNZ9xbGu4s%2BqsYGrioxCD2jdmMNX0uGciJo9KmISt%2B71IZeOUAgxtoBSMRh2aTqIiLg1QKi2lwC8MyBZE57i%2Fxx9Z9T2WkyuuXePSo4xFFkFhR2FpcUjq9NTdNrKsrtsg04BUtbKs5kWv3wsO0AaQ7qgNMISFSPQedZS8NlhT8SSScM8BsQruuAnR8RMLvT1cQGOqUBrEE8pZb86Iq0Muu3xxlddAHvKPoecLJ0X8Bqu0HFFLIwu5EhvdbmIC%2FltdQxwaNc26FlFGQzuwR1Rca5OPCEr0jOsHWmi%2F3n0QoHlHSq3XZ%2BF%2BioK3BF%2FSGpxfNrak49I3DZaYopMn2FSVNF1iIQYc%2F1pUQyYwvLOlISoMnBkCVYN0NVRhAad4OBCJUFzy3VJ4GYQm6VdkccR9y82OzLDE6dLIw9&X-Amz-Signature=5076b709f94a70675238703d3510c604713484154ec69afcd699f4bf0af0fcc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
