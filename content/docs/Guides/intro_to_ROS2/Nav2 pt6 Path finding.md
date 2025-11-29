---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=150648938612e07ce195fc3d9c93ab781fdc9f28fc56468b67d2373749224fc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}


#### Outputs:

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=3a3684bf3a09668c5f5bd8b6681198c95f4b555904d265145b4d1072c609916e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=3ae0e589cd2f8cf6de5be41b1ac34d601e8099af829fea5979b70406d1ecb192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=e5fa9600789b6155be5edeb790891df8b349c81ab5b2643dc67b17d9f0ac64dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=6874f9dff93813847fc60a87e87124500de2a83cee17f0787aa1e9b44720327e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=a52835557586960842735d8a74fb7f9f75c769e42cce00edeb5db0f7e10a3fad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=142f5e24fef2f0e1644f47cec45f78dcd3e4c2a8e30066e3f6bd03b8629178ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=2b3a456eee54a9685adb9696d40cb930a8c0c0fb8872f5b1f6b23c19c043ef0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=711a0958f2feb2e830240f0e0d1bec8620625c687151ea1329479c25151d3703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=3cd691f83db6bc9009171ae934d96f5728e9b1ecf7c774245117a05b52429c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=4d7abc75253a690d50adc0ac7706c2b330ed91be86597e4716f6f4327c677ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=c06cfe141c47b79fffaacb02b33625fea23d3cb1acf5c8feb99f1a6e0b66d981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSLGXNVP%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe80bA3GWgojTyhBitVUsT2wD2o63yspM40bbS%2B2wLHAiEAhEdpregDF4IA%2F7Z1DQw48%2B2Wbc68%2F4qs0%2FFcb0VACY8qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB8ToGMhmUrTPzvkPyrcA%2B9L6YJGVLyRElby6b%2FYBHaZlt1zm%2BNQWVJA81SFWUSKORlK7PVbL0Ubxc3WyVpsBzLaobpC9PuXcSyr6Zzw6yBLaE6rhRPe8Ec%2Fk0dVrtt3Z8%2FtddWwKUdaxi%2Br3SnLJzE7%2FARynFZpL9OTbU1AUPkDnJBBxeQEM2BJpS5BG3Xt1i4edPcwH3MjAsNnvxBJIRxys2NJD74SXTxyQ87WSCkjaBx6K8O8B%2FRtMjb5bWoQnvZvbM9A25l%2BAK97WX7v2AyfOKcWagfKmRZBF4JldBCJ2nh2mqvnrtJeegUEnbRObV73XB2oPIKTYNpu3rS9mwaHa9%2BdEIoj2kCWpZcvsOKNLe8zf0CxGQk14R3Sr3zZ7zL6QHSJe6CKdxJkd2G%2BJkoUH5ptmSS7%2BFSU%2FjPzMLkSY6w1sOwfSR1EMlhnW3NOa6fTxYjr1N%2Fg5qidY8el2PA52pul2gmsA8F161Ue8rC7gHF0Y4fgkFTU2etoSlarTuAjXahZra%2Fl6grqTsrwHWDp3CqDm5e09s9F7RmKDhv1XXA09YNNPyGAjT0ajgg8ytZdPMmCc67nDOAosaZX5iDSs18lWkLHZl9eOh0QDHmvtvoAUpP02nIypJmvufVcc2Mo48vAvYni8DcXMKnzp8kGOqUBDJVzTArpfEPgpJgTgej2VGD0pD5ET7xqumste4PNYMQ6s5zyfKx%2BXqPYQojYD6x%2Btj8X6S1J62wONGau5lccUdwqVXGMc4Lk5UrMpNPJzLR3bcdN3DhyJjDQY5BRADEQeZpfdPKJMfbBJjZmTtn4VAjnmlYJP76FNKfs45LnvltxnyoH%2BeOqV3XVjIhxSVGxKrDH9JY01D8xebSFTHXs6iMu1sEh&X-Amz-Signature=6937b547f9e08b8cc99922b6631e565ad234756111a9009c6be49bd54e8d7ae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

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
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
