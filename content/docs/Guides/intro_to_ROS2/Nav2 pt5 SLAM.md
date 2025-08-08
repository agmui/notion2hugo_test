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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=a4210fe7d840a67f2726badb0bfc1824f5637d5645a15fe5beae828cb13de214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=9e68b66dbd4b6b46ea3dabc4513e0756978b28dc5a35dbacf8fd319545f936c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=67fb3046615f6ff9b914721308c594ed08ba1dc539af25e4a773f31450449ac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=a17f08e8e0b585d1619474c6cdcb385ad4043897d64f4ba6f70a8ae4f1c45374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=79ef9db95ed5ce3d2f5dae1d3cd8dc12b285dabd740eaedb88db8cce5d925dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=5a32927de4623910208cf73ef545357650e44344f31aca129cdf4014f55b423b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=358c9bafb75d7b0845907284d6de2a4bcbdcf0efde168e44c8b17e2a138b5315&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=4f2a014dffb18ab670c9bf58fbaf4c8dc6749d7234cc05e91a5c8e9bcaa2ba7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=88741cb5b884ab2dddb3554bfac0345d2c445fab7305c49b111036f21abe47dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=df2429efc5da78345e09b207a8f86643c6937a3810bc42a6372dbd54530823d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=b4d4fd99a30530eac378b6cd028d4acdad7a0b125d283962f62e130b2308cf04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=2ec87cced69bcbb67dc37ea825c54eb6b73be9d18e1cab9236c7ec71a1c33835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=af6a8e9aed62c16988b3fcd5ad7791796d5df1253df3f80a3d770439c834f2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DALMZSH%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T025606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIGIr4bzD6JTvw04xKR0wXxmyJoFsnHArfynCf5L8SkicAiEA6j2vIsGoPkAKsNdsgjWlF55WbpCNagsH2hTLi%2BTvukQqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDatqg9Z3v4ux6ubqCrcA2LjUXAq3%2FqVDwYOEuo%2B5sPN6GUi%2B%2FbseDDg7c0KvllIlIMbCSQD1RCkaB159vQCgp44YpwUVNYyF629NjXkHoeUF405bb%2F3EP0e36ebpe%2FqIuFwSALN6VDaccx2lO3Rwc2SiTXongZxe20TfSyo%2FXiAMgkeDz44IHSgzxfYBRxbQbYEiJlS%2Fz8iQGCRyMZDT2vPFOewWSbRqQ9D5%2FXRAuoob4JzUX%2BdHue14%2BMYYmQl8KTRVoiqCcD8QBF7oc0GtvO%2BUtfkeNJGGjo%2BWsFCQb7vTn42C2HwNcA2hyh8cQQ6gyc7JQng7ON9eayRmGQ%2BBzPvLAm8bGniu5wgvvyCSwFwsuxW9s45P8TArEvdFUCg9JitRuEJ9rtCN6IdjxgKP13DOlNvAZHomEUNmqe0qeFBnYeQYDJgU29b3eOjSDBpCUl9wrFAz2Hs9javScYDUnVt6X2giw2%2FhTwlcCk99q1TFodnZ78aWZBqTQ9basnEzxXFwbmiCKXKCZwNZJFsT5fzp2NPFAk%2FBOavR1ErhyGk70VRpPS7BxU7Gf6H%2BKNhBid2yUG7o2dmqRWzFdY7LKg0VNH5ujU4PFwdRBJv2Yn63Cdh0wBlPYo9LnwAWQ7xKivEk2smMRqwTWOuMLqt1cQGOqUBJ0PDTtCWhtfWTxWB%2BAp%2BMqzbFuFCLVQ9Axs%2B423q2fYK%2Bt50jr5J%2BhzY02GQCdncCDitd2D95nYZp0YULzgKDFcqoh7qn1tN92ZUBjVwnNdEXLNhM3RUb6rJkbtgZj4%2F%2B5%2FXOdSiQNcgu6QdQHIKVl8ONFr9vuC6SBP5zjMJ2g2akFI%2BaRN7n4CrCikfgNUZ1Szwe1nmOeVdUGI1ggzj5AJDEShR&X-Amz-Signature=bb0b0fc9f9fbace23e55f916922327cad2bed462531651c8e5bd1916275b0f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
