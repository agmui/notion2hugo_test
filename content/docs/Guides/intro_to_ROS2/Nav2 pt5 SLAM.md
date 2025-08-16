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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=7856fa7aa09fd90a33826ed1435b3dfa772be17fa33514f09d5529653ceeab5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=59504af40cc543846fef3a99a6c7abce387ccbc3d6ba0adde57158e435bcd025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=79a8a910f014716768133da52ef23337cc41233d125cea9816a2fa7d7fef3be1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=145743f7043d9a8bf86a73745f3ecfe23920c6316bc4eeb6f2f73a18d009279e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=f47ec60314d7702cd481e0b6672bd15ecf73a8b7179b6755c830b9ac771b2b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=4ce32e2961c78bef97f123985976a6f5242675721c735852955cedb8fbdb8ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=8900bf6c2e1707043f3b202837918e629a75e0083de2852e8d4e1e9190172568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=4c3107b7b587063905ca78adc08e0710808766566fbf71cbcf097807eba497ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=3df5eaf24f192255a9a28fad89e9b3b8a1a99a7ed532b1dbda5e4ef9fc14ed5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=05ef3e0abf4459fc8b8d4270bcc8f53aed06ba03428a993fe154174ddb5c5bc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=6ef0f58fbf8711d20b2e9237871197f9ed4c0e965bfa6177332c430e13aed7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=b24e1fc6c43ba68244107210abe2ed9e43cf9e45bb785c1ad606d6ff33d5c151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=09ba5b234617872aa927baea95e1cf5032a7f6fbd514d24f0faf225a1e99bfb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBKDXB32%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T174931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIGeBIVkmR7%2F6dbN23tScrJgScMkHgp1S93QYqiRlDXHZAiEAm3Bzb8Hem6xPzUX0hmdjqPUfXo1dJf9%2Fl2%2B4aZtLAIIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDAmL5EDw59Ptk7C5uyrcAxnwPBqvauNM%2FavA9Facr2S6ixs019u6zlVE8cye%2Fv%2BTzbJg14eXfv2yOrQChE6EwfvzrqDXJS6X4uaqds4xY%2BiI3TOiBtDrUL9bUreKmslMAtCsDz2vkbYcu2kncjQRgN6sR5fwOcOKctsAlzMsGZrFEWE06dD%2BPFFtr%2Fy64wtadgXZMNr8fy3Mm3wsW3QkzG94qkx1BOYjxjEVzyfbFjnZEUQCsAIEc5HNnv48t4AmDq264Bz8SOvQHqH0mLVeCWycnmpz3ObxqmQcLbF31Tt3e1e7uB6cUQieudvGi8YHbKHDmQ6Q9rOQ%2F0MvDnoobH8RIj%2FOikDFT4CBcxL8B6jKkuwZArChdOJfcMNjnR7rphX1VjuaWYnE1auCf6Z51C3fGvFshl3Zg%2Fwr%2F0cAtq6a1%2FzJv%2FX1zrKE7GkSyto3hxi5eKSRtOVDBEOToaCpRUl3xM9V5LEmUDjjWDvWMv5%2FR1lDq1c3ASinLtzr7IYqOYGyEEeSif7kzW2eRzgPADmytOyFGJiRXbRrMvs4WZp8yApJFtgd4zgaK7cAq91miNw1eaB8lO%2BnevzAQXz6aOTtz1hq3k1kmn9qwII%2BTSaaBL9gEqut4SWRLFvt4kh4TG31VIeQMD4LsefTMLeWgsUGOqUB2A4Un0v%2BtyfQf%2FrycULfGbdcce4sWE7zgH4HKTJQZYm%2BoqVgDCgPtnQ6opy5NduIhv13f2xRY1eMFknVbVCVQ8LCeapYnHvaubC60ZRqbrvODBtlbPlT1A7scbx%2FJU32Es3Gxxb%2FFcwEPRAAh5l8q%2F3nBx5dc80szXWDsuTgPDrcMRshbVUrr%2FS69z79xFu1kaP0GpNgX03JUndgwHkPzAFa0R0z&X-Amz-Signature=c59d79aa27dbf0ba35167daed9560f7799dca7730771f34df446674128f7389b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
