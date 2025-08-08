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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=c8a772a01ff8f4f4af54b05da8e084c62485733f077d2874aaf1be56d54eb97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=19efe7e46ac8d19ccb50c1e4096d149b9ca7ead45bea48d5c198a05cc67ede0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=7f425e556f8cff4174eba525fb4443c3b1f4db9044a4e27c01c98ca994ee4716&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=0b2a873bfc55dbc25658661ec7076e2b44cbcecc73237d08d363d97df44c07c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=9115572a603c5ae5155dad3eb0aad8225276f1c059d6e024afcd5e0112d4a6d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=196e2863c7f509d9582783b8d7ca4bfe3d124feb68109222c77ab209461eff7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=44faef0f80674cf82f91e4e4471b6dcbf1824dab9025b5d8080ef9756157f661&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=70d8a1368401ae2d44a233f0a65675c42acbf6aab91d3ac81e0279c4e31baa2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=8592c7ff8179a80c18314cd82695694d520c76dc14f32630c24bdfc842a76f74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=ea12e74f9dc60c43442477191a3f67395ea28a7ef889f6a8e8a5895fb93c8022&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=a1d95976bf71c1d8e30a597e5304c965a32281b62b5854ea6bb100a614e7a6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=74250692a2ff160448c689cd45a5f77fb19869a21e88ee757cc416af361cd2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J6WVJV5%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T201056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIGDo3GVHkpQV35qD14TH7aifteEK%2BNYuUid9g4tAnfY%2FAiEAzCYUROysU%2B4a0FbYZoOz7OEBv96Rz4gsUQhUw5AoltsqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGeWdm24WdxmbquqPircA0fofYmC5BGUVXv7bDXjAuYRqcZtb4lz6ug5BILXptF%2Bb13hoUqMZ0rWIM9QZf7Is75fLnW6coHP6hkh%2FQKmWCFehgMrhJ8B%2BHA7Z6z%2BUXN%2FOaA9qnEnqiLGK9sy7c2tMGxUcNg5uRqewNMi%2BNaZ%2Bhb3OpuxGBHab5IYIXimOmNGywiecQUQ7GkcAAoVhUxhVndSAmlE1NElegO92zkBzz%2FkiTGsZzypao0SEslXLiyb4cARO4NaCwlkcFpZBWAcDfWDglLWS1Nc5Z%2BKUxMDojlHM8AqIY%2Bk4u6Qnodk8EIfebe%2Fwr1SNBibuVwRiZEFloMvcV0PCJnCkEELI2egdAoHvUf6dQzCONMWolmUw9cu9N1z1ryaJezOMSIXuD8%2BmXPft8LSgtmccgiANrFTi7VmsvhTCiBS6jJs7VRpYiC6KMiAJO9Mj%2BxfxpHjExeGSXnxKRC2aiBt6nbfbaqO8P31O743t0y0hZQU%2F9G%2Bkvs40oz9tEjm5fe5GKGnTM8W8kLsehIW4ksTb4%2B92X1RhA1apRfomnhSu0B%2BlMqKNTisNnARJU3uj6wiZBC6%2BpiLXipj2gbwjLT1U1SN61YXvenliEoiRTo8oJR5PgrKWCaAfwxw2F9vP1IjIGRvMNaS2cQGOqUBGSJ8baCCk5%2B9m06UWIc0%2FrVZWdPe8pHHbrKAisMN%2FVUzJ9eouvNjq5AlB5T1izdrduHyv2ZnrpP931%2BgBczMZrtOk%2F9pF0ODLI9uH6%2FbnSI0P4Y5jY%2B8Hm9fGPwQxKCwkWHypx9ZSO2koANFZuNZT%2FyDZmyRNJ5yfTsNfN%2BRwe1Mwl4nMOhK5i0G4UJDLK%2Fs2TbbsOOZKBNUjIwNcfvlTvge0arv&X-Amz-Signature=ed21ba79af3ea462f818b96896e62c162980dfc4d2bef5117092615b4197bd0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
