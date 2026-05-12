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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=ad8fb33c07068f2527e795938ee828dca0fcb28c6819ff3aaca09c1983409bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=687ddb22ee847ec48eca6279ff7c25058551f1a06d8965f14b8e08f91715fa10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=4da5e10350f24b855316863996779f1df0efdb834824887ad3f227295bbeaf93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=a9c50bf9ee346cd913018abb18c99bb556c1a05e8c6dc1cb507a7f39aff6292c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=33b906e24d0e61ab5bfd1f5814dcac170a36e55d750effc3bf02305106449ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=2c3a421e40ee63ffdd2c8c1d627fa31d1bf9103a844d1fcb4a12f09678bc630d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=622ad14555699d52b39bf75a28976f143a00bfe4235807621f58e7781f55ddc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=51b8f93d240099bcfd2a30a4a0f0ff97a85711be8980f13cf583784de4928efa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=b51ebfb543527050a210ecbfeb9f8d0953389be6187dd8aca24ab1914b243d79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=d500c04dd03902c3342e1c8cf5b3cc30d97ec38e92ca9e1fc156c42862b45160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=6ffa474beedd92e729291f31bcb813c2c0961d9e506fd3c38d0e4e8e6b34cee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=3eede7bacfd44e097a86c6ec23c1d9125b95b59f8808d586b62d111c82f60ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NM3EFM4%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQC0yoqFFvNck3tl%2BC04%2FZJxMq7mRBWGVqf5qXj3%2FJdmNQIge4CE%2BowiNht%2Fu2u8ohf1AQpMEqxk88tDXKqXe%2F3Mr7Yq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLG%2F2VcAMnk5cPzEzSrcA2YzesdI%2FW9%2FaGpsPzbAue8S8lCH5Ymyn9wc03igXAJWCqR0Lfyk2s75CtKAYth4KF%2B6L0iOZdeIudb%2FzYnX0wAa7lkhleJPo9kCdDslDqEY6p8iE%2Bke%2BvmtqQPSyDQNkRAwdDogvPcQzZ2rshfcNzqhpsrk3NpqdBSuYYE%2FnXIrOy%2BvfQeC2DLyQoAi96V20ZhNKh8rbw7L4kYSphWwbaMby1ZMU2clt%2BKWJwMIdWHOgAuhamcBjy%2FtCPBYojroyLQFZsgcfKRS%2FPnXdMPjYwOvZlWPLjAQaD1EIkvOwdN%2BLF5VLpi6CkbQO2Jc87ko9uq%2BMQUu%2BzFVJ9JOldHTPj5etyeVRscfsSdbsQOItpkHb73hcQ3arw76WtCJLHalaPBHEqCAIqT0oAlNyAJGaUo8Ygcpo%2FFu2WYBSGPJzcnD%2FOODhuVmXic0przn4DNdinouMLGFTruDzaC6kjwss27zi1ph8H%2Bc0INIsnssKlntKJEZTqkQJlin9G2PVfNS1M2DCT%2FBahTwCzkjwa4Qo7QnESHM4mRyqL%2BEk6dRywVlftaDwIqIpixTYZXBkhsuAV6YzBIaw4nYKjpEkei2X6%2Fk6Wm%2Fq3bBeSkf2rKgdZI8FhZfW9WzDm3aLhjpMNWkitAGOqUBWg24y1Q0NOkYXoWgljRilBOHH24MmFXIj9GWJJs24jqsJv9rS8ERH3BnVry3hUpmSu84U%2FAzOPZcIURPmTw%2FAUuHuDyiasGCwIVbEuky7cHtwjsQvKCdVKpFzU4WMffHhCgEe3woZY9AFM0u4L9IZ9nq%2FKHLueaQ0rRX79bse6nvOXo6tciSLUGUVK0ZTr0TPcek354thr4w9rQlZ6kDVd%2F7fSrd&X-Amz-Signature=6021064f28f93493b71cfa538ee8f7f84a202de0ec42b00230b9c658acda9857&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
