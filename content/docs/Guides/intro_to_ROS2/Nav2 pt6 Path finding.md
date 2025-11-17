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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=55066a492bfa8c49256fa5da7f839247cc3c91357d012c3e19a5551f806282a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=52d8976a9c7231f1a102bade4198e2fb0d0c5b10b22738ac486217299790167d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=6ee096336a3fa0ba3d828247da0dcca5bc210d6e775100e583a404e6053e8b5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=730e19685d661e78823c98c3ea298b8c061f94779700dad4d35ddf19b3453ecd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=146d6aa5cc9d9e34d207662b8262ea69c2fd133f0e593d7725c2b80c958a1657&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=53ff560920c1775c65a088f8e499bdb23dde505b757d26cf880265a9d6f83747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=ab36a14ce69e825d9087e355476a3285558e0914314597585cf41184ae39491a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=18492ad05ccc7d84238035828a209bac2e43679680e4292daed89c32d61b73ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=ab4f66c5b75bc4fd9b9d6ee72f5d7e2d9085ec6833674d90c7465b2b92e2b6b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=846c4670dfcef0372dd3c2eb374d81d78f6b53a532a16939c5dafdf5142c5f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=9bd9305099da32eae5d6547ff67f17276009d35bf932c977e19bdce8d050c1f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=b896a21476f1992e96f37c0bb640a98d632bc8fccc1094fbb399867533cd337e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SRQ3AAP%2F20251117%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251117T014018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDNyHomG9xwew6j3TdvG6fQFN5JiAwMLc8g1pvfgFliUQIgRs%2FZCNAjEu48jLKojp579TLOYGQUdbDbvxbD%2BeECD2AqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAL5PwRpwkb3V5L%2BCircA7cujcSzSa8iEN%2FzzVoMtjK1vxv54tBDxuenp2SUpgsg0atu75VMpkHSMwR9fS3f%2ByMWWXbHYOd4qRNxf2ssrjTGSTOcCTh6BMycJuQSFPQMz62jPWMzi5z%2F3TJ4DPsvjTbspNj8tMKwHAZp5o0JhxaVRXl%2Flirhfkgmx0cTJ%2FDNTyn6fJFnJCLbRnRqw9cgklSa5qIKD9VvlQ5Q7RqZagm3oqUhqZV5ThFAIR%2F2edwZDrVIcwg8VI9Vv0g%2BeGZsbUUMYjUt%2BYFkXiYI09Jj5%2FLqv2d0lgu4W2ib3elN0Otm0Cbapp3WwYe8T23zOaiOd9KkudpU1%2BgS2F5nL%2FB0k0bWi6YKzZTEA7v4spR9gjj8jDXlevvExm%2BGGkjAeCD5lLf31ZldQBLz0jNtpZpq9aPOr8QTKL6roxzrm8L5%2Bchbo%2BMm5LnivmeCKhQJR0IAM5u2ShwYBSQu8v9%2BstpzWPnnGamOvHfmtbtjcu%2BL9h9rvXPHGoe%2BH3Ld7Pe8zIqFqScPqnua5Ns2KqW23EE04leuCy6wGYwUS%2B9H%2FllIn73OJbH5jWprGoQONK6ANtZCkejW22a4O3BiVTA68ZNnj8N9aibhAAY1%2FYOrBiuMsOMA5nyAEEsMA9mKf5MYMPzf6cgGOqUBhcha4WS8T0ehHL0Hr4dtPffbPJPOR719aGiuMmpsnD4%2Bxmf0jeieyPn0LyTUvLas4Qv4DeO34nqUUZ%2FmXUyaZe2yPFoW3mvYkLQT3YxD9wTBit7pAX7bMwGhRVpgHXK19T7O3PLBZ0TlRSZ2skyG7H2AVQtQsjSmHcE84HZ4Uy36ypm0KY%2FIA8X2WWr5CD7ndSS2t94rb658eeujaVIdmbeewglA&X-Amz-Signature=2af94b5d5dbf14b216c2a5609786fe59d2eb7be85949479b8e0a5ccfbe5d74b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
