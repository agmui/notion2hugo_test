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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=c1b1db1204336b8c2945fbfc6d0e2713176f0322cb69bdeb84418cc159e15b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=fbda769f5fb7bbc2d80191fc9f92e74b4d9de81633f1e1454960f5433557d5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=86d84e5f3038ca3faaf15e474f1d23edef6d42c639dd83ce53a833b8cdd3db4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=cafe62e3b9c21b9f7cd52e3b9453b6d4a6b459c17fa391c43d3481121c21b54c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=e08ac636780412aff9754bc61775266607a3b8a0414292bd7a319502e3d0c5ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=c47e378b8633949f83704d5f8fdff3aa5ccb071da6b3f7767e389ea54ade8275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=5e0c3d55c4cc8cd09e57bfeb19a77ca104c1e8ed4bfc098d6a1425a3d495f406&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=14f2565e96bf856ba008c85e4efc631089ee5c060dcaf8d0a343b2f80e9eb27f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=341543306b415bca56863bed1f20d563e0b91ff0c3771338a11eeb2e1a970c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=3e7d1918b36d2372ccac26164120616a9b8a9a94951bb12ad3ed9b9060927af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=bd56efcfddb3caa4eeb2df98857159f90251932dd8713b6f40bea97056a1e1ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=49cf6c878c7311143c5c31b224f39ffc01a9425bc89754f01b71f343c5491742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG2BIUYS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T061651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIFHtpkaNbBDvU4UrghGQvNorU6VDLAdFvPGq193FKrGUAiEAsLIl9pghjJTvCGqhET1FsaoL0XbBwW6QY6iFceoY51IqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJKFw1Wh1X7edTCzCrcAzLioMstYHgW1A4L4Hy9ORl4Hw8m%2BU8LAaj5%2Fl5I2jxsPfXqD2ts0%2F2bhe%2B1vBO4qJT8gfsKFPfRl6kphjuvfiqgoG4pxySje%2BE6F4YDRTu8XwJicnyVCAVDxAo1UJL30mJI4dgAbSa4yVYilPI5%2Bij63KYklYYR5dSoNaE0VYbSinW%2FfhmSrHe2TPGba09weL%2BW191RSUiuO1gX2U387L3C1T0g8zhRMoJ7v62yNhPuOfy1MTJOOAqvCPPBwImdBD4x3%2BiHQgEI9XsNFQxh5t8T5CD8cJJVyU8F6xVwLbNe4P86LmfviohxssUu2gQP07GMuq4Jtpn%2F6LPc4et35BE0MAArdI%2Bzlej%2B7lC%2B8kHepz3EsiU12qJNrGqG7De%2FTgFH%2BwnDe%2Byo1Al0jvdPJSoEkVNqvkNHKtZEGXwyhiriSyjg%2FjNNoEfFG5GfVOdPYsJBMociWjHYWNiiwIytBDepOzABZpXzY9gByJ9IJUhahK17eXDobyUpAvDINCQkxmpDPR7e9yqRhTD8r1rWt8EU%2B8MOwSwn3Y8SBGqpF%2BvL9mcnhQfJm8Ze0T0om5%2FAegTVSua4eQFdA0yPlJVGYyV2Y1WwwTLIETclrWFIc8AbiC1JRlqSTQdsymI%2BMJjt0MQGOqUBfHHKDovMg0vIvxgDKZMa4LDSEabU9Qxbfsyg5DUPWJia3%2F00VCYG9hJid856brMtwrkPP1ZPZwEDCfk9TAcd8Ad5CAVVZILh7Aejnim47UHlyBNldhVE8Gv4URoZ04CO59qRPW6Oj6DF69ZB7ZaP4OVCwBALa9zxBnw1OvFLDcvRHmanp2T9wWjlBZwXsvSaDMhFbxotn5upRRl%2BectPF6Drdsl5&X-Amz-Signature=c9dc531d4412dbea5e9af4f0aec3c983da4140687a0d157ffd5114d25a6af8c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
