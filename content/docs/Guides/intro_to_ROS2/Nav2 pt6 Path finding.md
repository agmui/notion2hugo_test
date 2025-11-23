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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=f83251668f89a6bd9a4faa0548bbd80161da03f8420ba6ab81addd7e5a802803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=e910987dd62ae46d5817384bf8176ca8ef3ab722cdbaf326030e99af3ab7a471&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=4da02d168fef7ab20991498d95e0966b920acff3556c7a575819a8e60a9a0507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=19cb7ee02494d8d1f8456d4ddf3ffa26fe790fa543d91fa5f46bf58307038e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=bfcaecd67629ea1ed1d66cfa380d7d0e06dc541e8e9238d4bca97acb8e965a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=8806b1486e7fe1b2747692a12fe4ba4b2872b863fcd134abac0f6df84a1a3e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=2ab60a2cfa507365f0d110c25a33449219cba175e41e67630f05307343f7c37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=f56120367ac29f2b7abb537c7da001bdeb90567ac32bc48d57652c7f1fe5f14f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=09deaf76ec101bd8a514af962fd1e1cb11ccb7e13206fbff95513800ab11f2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=71773e54d5880f38149b0f0d208402098c063cff9d6d52c1e804758d6c390198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=27920db11957f084f1c86ebd7372e80ca22c81c214329d50f748fa9bebc4fa07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=eda33abd6bb8f44569dda2a0655b9bcd9399b273903a2c074628b40f5b4b0042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M3WWGAH%2F20251123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251123T015014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHEq%2F81qW%2BEPE%2B0RPzC3UMkAJa%2BQjl4m9H8JKgMMLNh%2FAiEAmhC98580q3A3yj%2FH%2BDKOqdMcYaeUur0UC7nuqhlI5BIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDCf%2B%2B8HICw%2FHsO7gkyrcAyRRIAvF2zKP3T0AG%2BbFmOHBjqX0r%2F06O4GyJv5CEtcN3shLDvMdKhH2sebGVQ7NEjurmzsH7RYF87lPqY8%2FDo%2B6lXAn0voS5QiQ910qCWoc8qZlDI01nSjFS0PjRMYGzhr8C%2Fe4JXYw7FN2HthVXVJEhW%2FcKa6ui8xW6QC61puWwVfc2IGhFCLWoUMbqQTBqBLnC9gwyIDklDsd2i9QzTtAjkPQLLwX9uC0ikblxThc6EbPgoNn5J4i2OuGViOGVU7BALKezzrKzreGcJqi7ncIZByiyGBNyNNlmSIiDMzMft7UF%2F8daBJXn00NzO%2BQI2Mq6ykrifIkBY3VZBhp8pOiVcZHyYF%2BdBHKNHtVhQjGKVgmWWsh8T8L5i6yFvIjACgBCld5LmhokFFXFywLsv2xqa7QBjMyg1PEcrK1fAWGrpcXat1QLcmAEKYsER2WmhLwnALMhNom0WS5Sm%2BmF%2FL%2FQT2EQNRmbohygl%2Fe2pjEqtskvRGKP6FmCe68fVdTisE8VjKMAVq3mRjzUcDSPBpWKQ%2FPeIjY1Zj%2B3kti28AQ7esmVEPkFbWs35u%2BRg60OHc4rBviMovzU5i4hfeC%2FfbpNoF0hpoNYT2Os0NVRoc9%2Fn%2BWyjrj31C6eqVeMOewickGOqUBMy2%2ByGG42k9XqdviGBKBnOdSfdJlgosMbUWH2ypgiokPLtHzbwlGkT60%2BS%2BP%2Fod34b0hfs1UgxotcB4qXWQnvHIbzkkOB%2BV9wunKfCHovhHK6O40kXEcU1eLv7A2c6bfUJKWYXIc1RWnsl7rajhRKKq3U%2BfqQ%2FMzNgY%2BkRwLzRAGJf4bDJ8E9%2Bg7bM0K7l382H6R4Oub05HT0p%2FKHShhPgqfQGiG&X-Amz-Signature=7402fa0f19dbabe7959e6140fee5c8ad5885229b1a27bb87759cfeec83221017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
