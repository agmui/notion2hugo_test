---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5YUAGR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGlwQgVVkwoyi6VeSbK9cNBi8M89Aqu%2BwZqidfBfRd0mAiAWAB3s91UOGDMyfLd4VLnpGwusz%2BSgp%2F%2FiqREH5IeTJCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMyizI%2BtAybN6clf%2FjKtwDFoRWF4ITfjDm3FMdd2BM2PEdPzhVhXPnTUVU%2FS7LVef2NqC%2Bj5teW4Bi8TuQz1ezXxNTzwDijKEtdXLaOKoXG2qoIkJWWYo%2BtlKCa3%2FlitXG6BEFl3%2FakWnOdiBr%2FTI286Lolimmhk6Hg3ea6734EF0ozZW%2FgKO0%2BjgeG1o3MD7o3ycNUidbbEPc8eWMUnBS9aJdywGnQcBbBbgdY9F6Y4ja3yFCsdheCI%2BKg1vNVoVFEUfLGLRHWpngbbg5qwoU9I%2BrjAKP2wNc9pEwp9wYk9n3OzJ4lA3kf%2BRVgTVpFy9V8nn56gipWIltCAxGUAp3wt0QsvIf6Ml%2BdqLQm060mXqmSu0XiCwXlFNI7V5uadzuw4osSBLSlS3DQJPw9YMwPbloQ4o2bK4FYCEoaK4OZRiDki92gUHiq25qHfH3sxscfADFCVfe%2FH1ttYnWqW6aItlwJPMFHWDSrBVpqEqD4hgpnnPwzsxUWbVyu%2FwipgHAxys6HzNdXA9m9dd0a6KoQOgcWvuh7LviAbOUigJdF53dZ7Jf3zxVzWte6P4sBPB%2BmqPEEnwDJ2pCegMmET4GDIJViQX7E5JkBgumIv419tdZ4e33zIs%2Fqa8Pso4ZX8WjRCi%2FjujEtBAjDA4wlPmYxAY6pgHNpYNcUXctVId%2BoOC40Znm3L47weoHRPpqWkt%2FX22Dqp0vTXFhwBr1B3mGrlSYSm0aitJnfiUc8JsSEl36KWT47oI%2BFKpLHbaxZaKmqniTlaYgvjejDFUVr6cJ45d4ERnK0oVfkuPHN1ZcBgeqkNOskX1PgT88UAJjpAOQCEpQ%2BC6N3G15MdclE41HJiParQEXb483JYqu7aETgEy4ZUK69V4zqsdx&X-Amz-Signature=b4724e1fb0d8cae035bfddad67377b2a5dc5e72d615e9d07ae955c32898c59e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5YUAGR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGlwQgVVkwoyi6VeSbK9cNBi8M89Aqu%2BwZqidfBfRd0mAiAWAB3s91UOGDMyfLd4VLnpGwusz%2BSgp%2F%2FiqREH5IeTJCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMyizI%2BtAybN6clf%2FjKtwDFoRWF4ITfjDm3FMdd2BM2PEdPzhVhXPnTUVU%2FS7LVef2NqC%2Bj5teW4Bi8TuQz1ezXxNTzwDijKEtdXLaOKoXG2qoIkJWWYo%2BtlKCa3%2FlitXG6BEFl3%2FakWnOdiBr%2FTI286Lolimmhk6Hg3ea6734EF0ozZW%2FgKO0%2BjgeG1o3MD7o3ycNUidbbEPc8eWMUnBS9aJdywGnQcBbBbgdY9F6Y4ja3yFCsdheCI%2BKg1vNVoVFEUfLGLRHWpngbbg5qwoU9I%2BrjAKP2wNc9pEwp9wYk9n3OzJ4lA3kf%2BRVgTVpFy9V8nn56gipWIltCAxGUAp3wt0QsvIf6Ml%2BdqLQm060mXqmSu0XiCwXlFNI7V5uadzuw4osSBLSlS3DQJPw9YMwPbloQ4o2bK4FYCEoaK4OZRiDki92gUHiq25qHfH3sxscfADFCVfe%2FH1ttYnWqW6aItlwJPMFHWDSrBVpqEqD4hgpnnPwzsxUWbVyu%2FwipgHAxys6HzNdXA9m9dd0a6KoQOgcWvuh7LviAbOUigJdF53dZ7Jf3zxVzWte6P4sBPB%2BmqPEEnwDJ2pCegMmET4GDIJViQX7E5JkBgumIv419tdZ4e33zIs%2Fqa8Pso4ZX8WjRCi%2FjujEtBAjDA4wlPmYxAY6pgHNpYNcUXctVId%2BoOC40Znm3L47weoHRPpqWkt%2FX22Dqp0vTXFhwBr1B3mGrlSYSm0aitJnfiUc8JsSEl36KWT47oI%2BFKpLHbaxZaKmqniTlaYgvjejDFUVr6cJ45d4ERnK0oVfkuPHN1ZcBgeqkNOskX1PgT88UAJjpAOQCEpQ%2BC6N3G15MdclE41HJiParQEXb483JYqu7aETgEy4ZUK69V4zqsdx&X-Amz-Signature=5ffb2578088eed8bacfb6b5fc1c5ec650dff715f0448b79e687792a0cf6e7e7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5YUAGR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGlwQgVVkwoyi6VeSbK9cNBi8M89Aqu%2BwZqidfBfRd0mAiAWAB3s91UOGDMyfLd4VLnpGwusz%2BSgp%2F%2FiqREH5IeTJCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMyizI%2BtAybN6clf%2FjKtwDFoRWF4ITfjDm3FMdd2BM2PEdPzhVhXPnTUVU%2FS7LVef2NqC%2Bj5teW4Bi8TuQz1ezXxNTzwDijKEtdXLaOKoXG2qoIkJWWYo%2BtlKCa3%2FlitXG6BEFl3%2FakWnOdiBr%2FTI286Lolimmhk6Hg3ea6734EF0ozZW%2FgKO0%2BjgeG1o3MD7o3ycNUidbbEPc8eWMUnBS9aJdywGnQcBbBbgdY9F6Y4ja3yFCsdheCI%2BKg1vNVoVFEUfLGLRHWpngbbg5qwoU9I%2BrjAKP2wNc9pEwp9wYk9n3OzJ4lA3kf%2BRVgTVpFy9V8nn56gipWIltCAxGUAp3wt0QsvIf6Ml%2BdqLQm060mXqmSu0XiCwXlFNI7V5uadzuw4osSBLSlS3DQJPw9YMwPbloQ4o2bK4FYCEoaK4OZRiDki92gUHiq25qHfH3sxscfADFCVfe%2FH1ttYnWqW6aItlwJPMFHWDSrBVpqEqD4hgpnnPwzsxUWbVyu%2FwipgHAxys6HzNdXA9m9dd0a6KoQOgcWvuh7LviAbOUigJdF53dZ7Jf3zxVzWte6P4sBPB%2BmqPEEnwDJ2pCegMmET4GDIJViQX7E5JkBgumIv419tdZ4e33zIs%2Fqa8Pso4ZX8WjRCi%2FjujEtBAjDA4wlPmYxAY6pgHNpYNcUXctVId%2BoOC40Znm3L47weoHRPpqWkt%2FX22Dqp0vTXFhwBr1B3mGrlSYSm0aitJnfiUc8JsSEl36KWT47oI%2BFKpLHbaxZaKmqniTlaYgvjejDFUVr6cJ45d4ERnK0oVfkuPHN1ZcBgeqkNOskX1PgT88UAJjpAOQCEpQ%2BC6N3G15MdclE41HJiParQEXb483JYqu7aETgEy4ZUK69V4zqsdx&X-Amz-Signature=d37d450d4a48168566d47092325ffafcfca1b7369972fefcd05e0b30f7fef122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5YUAGR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGlwQgVVkwoyi6VeSbK9cNBi8M89Aqu%2BwZqidfBfRd0mAiAWAB3s91UOGDMyfLd4VLnpGwusz%2BSgp%2F%2FiqREH5IeTJCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMyizI%2BtAybN6clf%2FjKtwDFoRWF4ITfjDm3FMdd2BM2PEdPzhVhXPnTUVU%2FS7LVef2NqC%2Bj5teW4Bi8TuQz1ezXxNTzwDijKEtdXLaOKoXG2qoIkJWWYo%2BtlKCa3%2FlitXG6BEFl3%2FakWnOdiBr%2FTI286Lolimmhk6Hg3ea6734EF0ozZW%2FgKO0%2BjgeG1o3MD7o3ycNUidbbEPc8eWMUnBS9aJdywGnQcBbBbgdY9F6Y4ja3yFCsdheCI%2BKg1vNVoVFEUfLGLRHWpngbbg5qwoU9I%2BrjAKP2wNc9pEwp9wYk9n3OzJ4lA3kf%2BRVgTVpFy9V8nn56gipWIltCAxGUAp3wt0QsvIf6Ml%2BdqLQm060mXqmSu0XiCwXlFNI7V5uadzuw4osSBLSlS3DQJPw9YMwPbloQ4o2bK4FYCEoaK4OZRiDki92gUHiq25qHfH3sxscfADFCVfe%2FH1ttYnWqW6aItlwJPMFHWDSrBVpqEqD4hgpnnPwzsxUWbVyu%2FwipgHAxys6HzNdXA9m9dd0a6KoQOgcWvuh7LviAbOUigJdF53dZ7Jf3zxVzWte6P4sBPB%2BmqPEEnwDJ2pCegMmET4GDIJViQX7E5JkBgumIv419tdZ4e33zIs%2Fqa8Pso4ZX8WjRCi%2FjujEtBAjDA4wlPmYxAY6pgHNpYNcUXctVId%2BoOC40Znm3L47weoHRPpqWkt%2FX22Dqp0vTXFhwBr1B3mGrlSYSm0aitJnfiUc8JsSEl36KWT47oI%2BFKpLHbaxZaKmqniTlaYgvjejDFUVr6cJ45d4ERnK0oVfkuPHN1ZcBgeqkNOskX1PgT88UAJjpAOQCEpQ%2BC6N3G15MdclE41HJiParQEXb483JYqu7aETgEy4ZUK69V4zqsdx&X-Amz-Signature=6468930029e6c97c7829bccadd47b5623bd299c4d021bb5be8ae29d4a4c7d245&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5YUAGR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGlwQgVVkwoyi6VeSbK9cNBi8M89Aqu%2BwZqidfBfRd0mAiAWAB3s91UOGDMyfLd4VLnpGwusz%2BSgp%2F%2FiqREH5IeTJCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMyizI%2BtAybN6clf%2FjKtwDFoRWF4ITfjDm3FMdd2BM2PEdPzhVhXPnTUVU%2FS7LVef2NqC%2Bj5teW4Bi8TuQz1ezXxNTzwDijKEtdXLaOKoXG2qoIkJWWYo%2BtlKCa3%2FlitXG6BEFl3%2FakWnOdiBr%2FTI286Lolimmhk6Hg3ea6734EF0ozZW%2FgKO0%2BjgeG1o3MD7o3ycNUidbbEPc8eWMUnBS9aJdywGnQcBbBbgdY9F6Y4ja3yFCsdheCI%2BKg1vNVoVFEUfLGLRHWpngbbg5qwoU9I%2BrjAKP2wNc9pEwp9wYk9n3OzJ4lA3kf%2BRVgTVpFy9V8nn56gipWIltCAxGUAp3wt0QsvIf6Ml%2BdqLQm060mXqmSu0XiCwXlFNI7V5uadzuw4osSBLSlS3DQJPw9YMwPbloQ4o2bK4FYCEoaK4OZRiDki92gUHiq25qHfH3sxscfADFCVfe%2FH1ttYnWqW6aItlwJPMFHWDSrBVpqEqD4hgpnnPwzsxUWbVyu%2FwipgHAxys6HzNdXA9m9dd0a6KoQOgcWvuh7LviAbOUigJdF53dZ7Jf3zxVzWte6P4sBPB%2BmqPEEnwDJ2pCegMmET4GDIJViQX7E5JkBgumIv419tdZ4e33zIs%2Fqa8Pso4ZX8WjRCi%2FjujEtBAjDA4wlPmYxAY6pgHNpYNcUXctVId%2BoOC40Znm3L47weoHRPpqWkt%2FX22Dqp0vTXFhwBr1B3mGrlSYSm0aitJnfiUc8JsSEl36KWT47oI%2BFKpLHbaxZaKmqniTlaYgvjejDFUVr6cJ45d4ERnK0oVfkuPHN1ZcBgeqkNOskX1PgT88UAJjpAOQCEpQ%2BC6N3G15MdclE41HJiParQEXb483JYqu7aETgEy4ZUK69V4zqsdx&X-Amz-Signature=91214e9fed7051594f130a5aa0397fcc305e8db670d7d9e5438a1e3707a9c02f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZD5YUAGR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGlwQgVVkwoyi6VeSbK9cNBi8M89Aqu%2BwZqidfBfRd0mAiAWAB3s91UOGDMyfLd4VLnpGwusz%2BSgp%2F%2FiqREH5IeTJCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMyizI%2BtAybN6clf%2FjKtwDFoRWF4ITfjDm3FMdd2BM2PEdPzhVhXPnTUVU%2FS7LVef2NqC%2Bj5teW4Bi8TuQz1ezXxNTzwDijKEtdXLaOKoXG2qoIkJWWYo%2BtlKCa3%2FlitXG6BEFl3%2FakWnOdiBr%2FTI286Lolimmhk6Hg3ea6734EF0ozZW%2FgKO0%2BjgeG1o3MD7o3ycNUidbbEPc8eWMUnBS9aJdywGnQcBbBbgdY9F6Y4ja3yFCsdheCI%2BKg1vNVoVFEUfLGLRHWpngbbg5qwoU9I%2BrjAKP2wNc9pEwp9wYk9n3OzJ4lA3kf%2BRVgTVpFy9V8nn56gipWIltCAxGUAp3wt0QsvIf6Ml%2BdqLQm060mXqmSu0XiCwXlFNI7V5uadzuw4osSBLSlS3DQJPw9YMwPbloQ4o2bK4FYCEoaK4OZRiDki92gUHiq25qHfH3sxscfADFCVfe%2FH1ttYnWqW6aItlwJPMFHWDSrBVpqEqD4hgpnnPwzsxUWbVyu%2FwipgHAxys6HzNdXA9m9dd0a6KoQOgcWvuh7LviAbOUigJdF53dZ7Jf3zxVzWte6P4sBPB%2BmqPEEnwDJ2pCegMmET4GDIJViQX7E5JkBgumIv419tdZ4e33zIs%2Fqa8Pso4ZX8WjRCi%2FjujEtBAjDA4wlPmYxAY6pgHNpYNcUXctVId%2BoOC40Znm3L47weoHRPpqWkt%2FX22Dqp0vTXFhwBr1B3mGrlSYSm0aitJnfiUc8JsSEl36KWT47oI%2BFKpLHbaxZaKmqniTlaYgvjejDFUVr6cJ45d4ERnK0oVfkuPHN1ZcBgeqkNOskX1PgT88UAJjpAOQCEpQ%2BC6N3G15MdclE41HJiParQEXb483JYqu7aETgEy4ZUK69V4zqsdx&X-Amz-Signature=2f3d5d20a38f9c4795839ad65afaf495e3aa8bd89a617dfa8df54dc68d9c4561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

## updating launch file

```python
  
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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
