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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=4ed7353f34479f6e3bed087425eabddbe4bcd42e439b9000df95e94b41460e73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=f3aa77d67e0bcb3e1545db301c42777d3ef1a6da2cc6e81658675e3ab902722b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=e58e3db8101f17269fbf2d12796bd3b728bb7a822f6fe3b4c887ef9bacdb84ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=163bc0ccc4892fbaf785c8478ff76cecd38c08ff65c95270787db0d2aa3c19e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=3ea30d585e3dd193f5e203e7042a7a0f195531d1e608a8d8aec98af0f983afd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=4e5d24e63afedebd25faf483aa1339a3c19b7f7af9e579747d007bee9365dc46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=b4b6f2d2d273607f76ff1618c28208996921ea9bd73a537b28f541b32228ba09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=255520c8a3f538d823cedfffe53a01954a7eda5ad5c3b8e7cb7f45fdeaab4ce7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=cfb0c9c24e781d3f01b3597533db8661d6e9f138647294013ac0515e1ab65a00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=043dfb0efbd1e7af02176e098b4916b414dc80666265706d11106cfb1e109af6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=94010739f5bb82dbc386a76f00492fff4eedef74d9b6cbb71d58102524292dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=975665994c468da94d8b2fa4910342e32e20dcaff1ad6b4ec48e2b2ebd6e80a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6XIYIC%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwNipgci8SZ%2F8B96lhPiWtHh2eq2c4lmT8mGYFYh1QbQIgIdyj0heof3f4%2FtdQYCqTqX6RNNVOQgAL0Sjtw8QYwssq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDCo1ZGXjCmXjG%2BABPCrcA39T9V6Vk9THnikvvwZG%2BU5NbBGmY9buwIn57iTeQ5YroAbdqXdFPv5KiRG5sx%2BWhp6mdxl71o5FRhL7YSHguWvs1Sh93ALryz%2Freeb2dQc2vtSJUhjIxjCASx8NFk05N9bNulsWkSsBDSbAV9%2F5WcRQqL%2FixxQWjbQx5Akw1cnwJgt9i60vS6HnrXeCQKNQiGHY37MuFLzb7xXUGCwXUlu7NVuqWlqWhg3G%2BbBdUc0ILthwm2dRH0c1J7HijOyxi8y5BsPr0sdSdsowmOlpa5%2FipH20U2wBC4rG1RoyuOo3EnzS4thtbH7f6ApW55%2B%2FkwY%2BRAwn7HibyOD%2FJuzruRo7%2FeD2RtbWkVuuMcXH6M20KhUpaK2TY16lqhQodtsoDsvK9nIx7Q5rZVq64ln%2Fp3Ltzdnnogh3jDaQKbYfXul8sV8TSXO%2BkeW%2Fp6xZ5yIJEosCEz1zzJv%2FDYfws8iq05I%2B6uXjsHy30tcMKkua0d9VGVkpmQKkanfxiR%2B5FFCGEtLc%2FpfSrihCy2sB35LHAGNUwVL0Q%2BUZsp%2Bw1U59A1EUqorCEBzkixyvJotJ9DAIRWurYqO2KvJiOEJ843dYfIhkit5HQJ%2FIR6%2B7OZBQXSkBX7jeL14l6EKzM61jMI%2FZvsQGOqUBask8DdQqHGX%2Fl8qlMeyc2WBb5FpIBgk40OC7l6Oo8QtACx8Fcw98MJKikjGAm1ZeM1U8hnLC2CuvWg2ce1AvBYveZaA85BfIswMN9gHvfzBLdPgVHv%2FL72DCJ%2FWh92goM7I%2BZ1ixfmWs%2FC1H1CgQY%2Fzotlpy8Q5%2FHULAozlizuU%2FqHx6X64hMgRxiqqPj8dM49UjXss9he18ZFvG6T7ILViKBmR7&X-Amz-Signature=3e23a8835dd8f61f7bd8a9515f82ce68bbf471d4fce5bb2c121779c678738721&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
