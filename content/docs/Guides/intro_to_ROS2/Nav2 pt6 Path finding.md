---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=e0a2131de6669129683898b2e9d1282a7419473c5b5fc7427b6072f33c169eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=b5786023d28503d22081f36463aefb9d075a5bff8c67f61cdfd89300e42ac692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=18a066d2bd45f8f94b32892a51b64e088542bd62d213dc0035f1c2107b1ce10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=e6c9ba1caf7f0f5cb0b0e37363f22a20c3ef737a6c04dac5f50598566ad75de5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=4a8aa21812c0db7d01c62517e08b2461edef211a40d1c49a343712d82cb1fdb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=043639ddbb5ddde81649087e14b5fb2da9aa90eb052a874f1a7dde3cea1ef78b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=b0ab92174113f4f0d58df2da112a332ccaeb8ba5e047994d8831de62ff83e9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=cf4710f52427abd4d3028682d665f7cd86698f3677bfd19fcde090c6b5bf8f78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=a7bc3926eb833f3fc74e3416286c356ba79ec0b615a299f5f212f8964d8ceedb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=a9d1a7948ca4091fc55d1fd721f30ca4316989713b82128262dee42d8cbccf6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=d1df22008619885486e557018404cbaf510fc7690f7af630be35b420d590bfd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=bc5a2559100c2d68351d34b65066e03e7e49f8b3854a16fa35101236ed78813e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7XXNPQD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T051046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCICTt1LLeJu8ymwKSV8pEDHKj1%2FDAKEn902I3J%2BDEwEJ4AiEA4F80V4zepTsRT%2B19qlgV5okswiFNWYusBERpqRZeA7oqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfoJTGdmKQS5YWoqyrcA3Ua%2FShwCqtDIWSQ4GDZVdMJtIWvMxUKcFmlaIoX47BVldnaUxNW5pI3z%2B7F6mvE1sie9b8gdeZtFQYratdSucQXjZTTT6tPDa18k9wVrfJ6l96K9A1exFogB2Q72rLAOaEwFjIBxJrQHlrQ2ykENY30DpEN%2Bg6W4YkVId3X%2FopXqJeEWrASPPyToaEy1cFmo%2FTAP6HrscTIm5WOlPLEW6cCdki%2BmvQGBCkdolCxvFuSjIlkOYrtqb2CxBaWlBuS10WcIGZrHIvB6BUfAbm1%2FjXRZvO9xCGC3Skwf11FqZ93gkZsiG57ofrmMKxY4rApEcW9P%2FijRypt3u0CUPcG7F0ZbO9Zhvw9YHcepAGigcIHYGjHx%2FDwEoz0%2Bbk461238DuPRAHRoCFVfmk%2Fjh0ERXCrpvUORk%2F2BHaUVLdPyoyECQChBFFRJMbob6WCsy%2B%2BKAWfeqYdEfJ%2BiJ1h4bTR5RpS7OeLyBickgdHGtInUsJMOwJTw%2FOFAMg7PtWUJnYTaRDD6M9M3ZzgLjXUAWl5U%2BlOjdY%2BiyQJKxYTkkRHYIBzpm8XBpSEtkjU3z%2FAjZT%2FWue9Cy%2FH3VUWvILMGQq26r%2BE02YNgGDWFzLiloeXIlcX3PjE9pBn8WeHaDu1MMag28QGOqUB96qJz%2Flmt8EmQXFjXKp4R3JAQJVFazU1kI1gbU6RSg9NhhTQuSYuOwpjNqiUWpZY7%2Byqn2q46WQk9FU34WSD6C8hfj6nKlLig5wksm4D6vwehwvmHExGm0UJBRp28cZmfU2gg484ZAvv%2F8%2FQATeHux2ckUFfy2Ivt2rgFNkQH6Pl8oInXXxqnlt7g%2BTfws5ct8gpso0WhD%2BXggy43l0XRodttLU%2F&X-Amz-Signature=c183d0cc687b684a26f742c02677104b5c5a3a4ac6b5458cb9641f87af026392&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

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
