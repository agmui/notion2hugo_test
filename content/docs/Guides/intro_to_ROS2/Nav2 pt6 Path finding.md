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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=d23f0da70c7380e85bb0bf3fe6f3f465536d426eaecd95aa2b812ee2076624c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=adec1abdc79244aaa94115da7fe172ab3493dbc1d25baef80f4a3cd85b7fe60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=8774a45312ec29ec15e23a5cb8ce45ac5a4f5922f7669a7c9cd96c82f725da0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=2b2a3a8cc4cee064e5296ff93ac99062ec98adcbf6ff83dae02c400e09fa98cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=d0618a42f614cdf1d1d478439888e53953ad9f3da2dfe02e719bafccdc42725c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=81593bf86168a4e5f03706f1433bfe1f3fc7f845e79be46188c7b79acd6b31af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=5d5fcffe8b205d339ab3a595586133c8e2edbcf580f439832e52c665b9aea818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=1eac30f058b3df8f9994c5a5f73d3d7856d23b1bd3c628812e8bcf84ebb5c460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=f3bb4c3cdd57510397f7027331e6aff62be534847a275aa8728470a3dba96c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=ac8695b750b48a76216a45929ef40af1531e3c5f1e0d5010a6261ae259891c30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=9f23cd46cc7da9fac467397d9a706e74bd3f995854369880b5a484b46c0ce2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=279654cb71ad0fe0a3d37862d9f888a0b6d03461f46710c8c9f1c123e0bedc50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJ5AYFE%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T230943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq6ath60xs5wodQZvHOjI1DWRUklDd5QYL0xZCXByoPAiAYRtTM%2BQKQYywMoJXPjfoQNCam8dCQLPyCEWtmTbRJFir%2FAwgeEAAaDDYzNzQyMzE4MzgwNSIMN553Ps92Rew9BpLyKtwDPDEX1ebLx3cRATRi7lIpxO1xftBImREAqzArZZDAR6WMIH4OVpkWBXNm9g9dvJc4YicxqZA6vq6NSz%2B0SWC2br3JNnhhRdrQhHJzzICjgMb00jVRbHmfHIcdZBObOjwRT96Pzidptil4EIofbjjT2Hxhy8JW03f5ymyuMzTeBidjgu917pj2MYQAQ8VRBg3P9%2BgxsR37M9Ji1o4Y88Sb59afzMxcVcCHeEz2lc4KEEf4DLrO%2FVNPQzaVXpuZjqhGRAOT6DfaDCMMp4EUSQjFsZBs1hha%2B1Qif6jjexd9Dd6OI0FXqSm9inS4sboypF%2FU00qlN1uYYxMz7%2FChnPTjJERjqwS1vuc1oNSc%2BtrzgPlLZ2X2J%2Bl%2BBgtJgxz6ETLtljBGNz6NcbQf9sOG9Rfi6ZCvia5g4Sq9zwg0MGUnefeDJda1LfgFlRrOv6daM4Y1iy6ttNUKfiBTDU17QwSeTGB2BcJwxkC%2FmUTPVPzBflVCgG6gFOX22DYh6%2F8QgnGI41ijlAUEGKTeh2I1oGEiIFL6zIB2P%2BNb%2FbtbRnyVq5UoD9A4jTa%2BQSwD1HKdJ%2Bf38xWsVpQOHQVxUuFTClcKQHiMYqVnAvOpK7ylLtKMHzA36Kc7SbxJK1HiO8IwnIC6xAY6pgHBCWoPKsQ7%2BfyzPx%2Fr1hiID8bf7xX3CT2r4C1x9XnPL%2FLXkv9Cg2V6KBqTmDf1VfTN5lkVhFInviccgcw2PKWFVbBMQYVs0gcjnVqGba5bzZsu%2BV%2B6viIlAaJ7gToD0lnVHWz%2BQ2dzkn3atDY3gh6i%2Bgw4q%2BOScYK38ItUdBid1DvoF0V0wfTC6cNnMhFhrvKey7D54coFX063GwVnWUcME82y0fQW&X-Amz-Signature=7110a4f4861eb65d796dc0a4f71fc104bd5a80e7d7cda1642f16f5a98458d5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
