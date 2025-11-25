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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=54acf2199ab7810fb9deff2a7d15ceb41235d574192547ec72d1822c7926acf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=1080d0e4d6a12d7d688d3c93dd17adee0ca012d46eefdd865df206e476997884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=612644154941dd532ecc952af32538b852abad251a2dfabce83ebf11e6a16870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=f13c6d6b5433e0de1337de2f9266f9bf447e7670bd1ac20dbd586724d9a80103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=ce607a61b45559938eac5c32f56b0dd3b482221c1434033553b10c733390813b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=c329b2a93f68b722fe4c3392cbd0319258ebf966a98743f26bcfdec43bdcc8c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=c1f9bfb68a2a860bbd5519f847ff1ce8e652b39ff3d215cc9804f91a5f517417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=c7f96d2934f3112d18a9c36b3fd69d558a77ad30fe8765874cecb780378ee762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=124291d7c8e2a780ed56404e3621837f887b7df9d5ec7a7162f67efeef1c3775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=f0416cf58fb4357a04e6c53ce3b883f3e2b29aa0564a0aa4fdb6c431c3776aeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=601c61439b4a20a0ded12e3ea09a0dcb1749b25d0e31e7bec65294b43f69d77e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=46c97c87970a03f6de206f0b302399f727c00904203602fd4f029e2d06dda700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=b3fe7f9b5702103c7d9772fc101ba7919b5168bf79dbcb2395a7df27e5a7c772&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZ7QZLKJ%2F20251125%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251125T013945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdkka4ZatFNtz40nTsntjAQLGHbkKi1lumZAJZnayTwAiEA7E1ulg3mEB0qIlhnecsArOKf9g8q4feKkMQfBZ9A1mIq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPWWwcUt%2Be7o63KdAircA4un6W17rVe%2FGrJqTeWgMCmQWhLWtMyY7BHD8%2BhKruyt1A5mV8L3vAm1PTTtH8fBV7mRfPjCpCnmDBNGGEOaIm3HvBToEMbGyxF2HvvASFB0l%2BWBqBYoLNK%2FhyoUvTHsIpL%2BmQwpvxmTxFTkLEVi%2FOmQ8hxCiBMoTsxstcUVKqGxg1VpRWVGohqpgtpm3gZgoGNL%2BAZD5l1VPHvbPdtRncYFXeUbDOD%2FKqP%2FZQkgwpihZ9LtKguH64WN6tdXZktSwpLxm1IIoMd7Ewrjeone8%2BkMDg8rYViqgBKYMdXqPCaJWAfe%2FVIcbhMLDb6QVYUzXscl3IqB9xiQNkXy9KAVGEjKti0xH6CN8GvNLd9ztZ%2Bl6ySy2HvhgJ9t%2FueQUghduVPTW1LDjUj%2BiKZUxtCdb%2B836X%2BQLZQnC1vuML7JSbLJzDYiWeYcnND7OZd5rApmKNc08Nz0YQbpytmImDOGCpH29osZAY7xxPSimXxPLxqP5JjdK07qI0fsdkaXz6Ya1ev8mI%2FXgk%2FP4hicggER8VDkRS3m3%2BBO9ZxXCt%2BCnrncCvuil9g%2B3iJZXeHP0%2FQe7QZARXeJKW9bLgrPBTpRVl7jj1rLia74EXWzKFwDGxk2czkKuPfhko%2B9A8ftMPjKk8kGOqUByBz%2BLQp9nU0YQnjD3QGUncq2I%2F%2B8H7xVwCjdLMyCaFFy3YIPtSThy4BQw7xEc0I%2FTCSWymiyjppJ93d4Jg1Lj63AhYZ4kzDsveelS35eiUGurfrUIqoMsCVlLbYtSjV6vSR12cDInbX%2FCPt8RoFCjynUiJxA5sKSf%2F4apnW58LKCp0c33ER7e4uO4FTzr5xnxrisnR%2Fp5g3DDmLVZ0MZF3KInPGp&X-Amz-Signature=da06607693d032384e946c5386b4e174d0b938523a25b68149691fa9cef0c7e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
