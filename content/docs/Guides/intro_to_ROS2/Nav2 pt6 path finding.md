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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEU2SKL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjSKByezFvGIpww99zo3jHuM%2Bsb7EhfRMlJoMZdYhlgAiEArFhILy5%2B1w6iM9coZDNfAfyI8oDkzfwq9Vzzn6XB53Uq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC7vDuIAL8mfE0jhByrcA60S3Fvcp9xaC1SIh3cYmuk74iUnNKTpF%2FWVrUswcTH2UkmDc8s0w2lXWD4YjYU6JyNMx6dDVHzRV0Gk8AJnEvUTBVkC7tPl1Rg%2Fn37QxIHxjFuyEtNsqgbCUiCPXdWn7d6AB4mQwRCeaaME4kW73lhFX6YESssPvOz%2FQP7msfDQTCZFjip0A1ZCpU4cnsrdmOzoyHJy3cxlcR5nyqh8QkzQJxTt%2BQye%2FH2%2BrC6WHpeqZ3VRu%2BpvEgrXJFSLaO%2FUxOEkeQgsiDbDjC5FLVgdgOXOWaiWzKtAft%2BmjUCP3pHcc57jhSDLG%2Ba7H4t4qne7GAnBLOtQ5QGCJxcYQBspzXYf3p4d72LdLrk2WydFHOTrN9gGCEKcqmNdTQhFatspSUdgENgye6YB8sjs%2BmrU6TnSJ55y219m%2BH2IMAMecvnVdvfeY7qVVLB0pWJ3WefmUZTwEMlrZL0HQxjdV02Z6uv%2BieKA5GZIAnDP9p2YzDFdS8fuUfZYDcWGZr0t2NoPj%2F6RifRYDz%2Fhi8h0t%2FgKlI%2FdSa7lQPrmpE0MRnIC01BlthsX8NzK2j3%2F%2FA%2B58Ll887DQOzoawzOhgaqHNslhimzfNmsWJFeaf1GDWK7gwGPSq4Wb9Scfb%2Fid%2F20LMNHClcQGOqUB4abyNVUf%2Bw%2Fmxo5SBeWmVDORWVf1d0G0iKg%2FaQep%2FH6P6q33C32fYf35hGWC72jNXFnZxNq9%2FZdblnzMtAj3DDCAlvtAjD74KboqZUmEkbkqZf9iIZ%2Fs88yvxp3%2FQtzD%2BbCpj5S8yKpD4pqlhcqH1YFsPn%2BtRVqHzGElq9PLDaqKfdEC728pcGiFKNIHMQXH3vgWhjM4Rsj9BwGsmIU5jZBQ34bS&X-Amz-Signature=84e6ac554b479acd4840ff1ccece33b271ea74eb7754484d7720b71a576e95f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEU2SKL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjSKByezFvGIpww99zo3jHuM%2Bsb7EhfRMlJoMZdYhlgAiEArFhILy5%2B1w6iM9coZDNfAfyI8oDkzfwq9Vzzn6XB53Uq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC7vDuIAL8mfE0jhByrcA60S3Fvcp9xaC1SIh3cYmuk74iUnNKTpF%2FWVrUswcTH2UkmDc8s0w2lXWD4YjYU6JyNMx6dDVHzRV0Gk8AJnEvUTBVkC7tPl1Rg%2Fn37QxIHxjFuyEtNsqgbCUiCPXdWn7d6AB4mQwRCeaaME4kW73lhFX6YESssPvOz%2FQP7msfDQTCZFjip0A1ZCpU4cnsrdmOzoyHJy3cxlcR5nyqh8QkzQJxTt%2BQye%2FH2%2BrC6WHpeqZ3VRu%2BpvEgrXJFSLaO%2FUxOEkeQgsiDbDjC5FLVgdgOXOWaiWzKtAft%2BmjUCP3pHcc57jhSDLG%2Ba7H4t4qne7GAnBLOtQ5QGCJxcYQBspzXYf3p4d72LdLrk2WydFHOTrN9gGCEKcqmNdTQhFatspSUdgENgye6YB8sjs%2BmrU6TnSJ55y219m%2BH2IMAMecvnVdvfeY7qVVLB0pWJ3WefmUZTwEMlrZL0HQxjdV02Z6uv%2BieKA5GZIAnDP9p2YzDFdS8fuUfZYDcWGZr0t2NoPj%2F6RifRYDz%2Fhi8h0t%2FgKlI%2FdSa7lQPrmpE0MRnIC01BlthsX8NzK2j3%2F%2FA%2B58Ll887DQOzoawzOhgaqHNslhimzfNmsWJFeaf1GDWK7gwGPSq4Wb9Scfb%2Fid%2F20LMNHClcQGOqUB4abyNVUf%2Bw%2Fmxo5SBeWmVDORWVf1d0G0iKg%2FaQep%2FH6P6q33C32fYf35hGWC72jNXFnZxNq9%2FZdblnzMtAj3DDCAlvtAjD74KboqZUmEkbkqZf9iIZ%2Fs88yvxp3%2FQtzD%2BbCpj5S8yKpD4pqlhcqH1YFsPn%2BtRVqHzGElq9PLDaqKfdEC728pcGiFKNIHMQXH3vgWhjM4Rsj9BwGsmIU5jZBQ34bS&X-Amz-Signature=d2c2e529fa1197183e7a0a6108620c0839b0a39c833bb992def1f61054b760d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEU2SKL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjSKByezFvGIpww99zo3jHuM%2Bsb7EhfRMlJoMZdYhlgAiEArFhILy5%2B1w6iM9coZDNfAfyI8oDkzfwq9Vzzn6XB53Uq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC7vDuIAL8mfE0jhByrcA60S3Fvcp9xaC1SIh3cYmuk74iUnNKTpF%2FWVrUswcTH2UkmDc8s0w2lXWD4YjYU6JyNMx6dDVHzRV0Gk8AJnEvUTBVkC7tPl1Rg%2Fn37QxIHxjFuyEtNsqgbCUiCPXdWn7d6AB4mQwRCeaaME4kW73lhFX6YESssPvOz%2FQP7msfDQTCZFjip0A1ZCpU4cnsrdmOzoyHJy3cxlcR5nyqh8QkzQJxTt%2BQye%2FH2%2BrC6WHpeqZ3VRu%2BpvEgrXJFSLaO%2FUxOEkeQgsiDbDjC5FLVgdgOXOWaiWzKtAft%2BmjUCP3pHcc57jhSDLG%2Ba7H4t4qne7GAnBLOtQ5QGCJxcYQBspzXYf3p4d72LdLrk2WydFHOTrN9gGCEKcqmNdTQhFatspSUdgENgye6YB8sjs%2BmrU6TnSJ55y219m%2BH2IMAMecvnVdvfeY7qVVLB0pWJ3WefmUZTwEMlrZL0HQxjdV02Z6uv%2BieKA5GZIAnDP9p2YzDFdS8fuUfZYDcWGZr0t2NoPj%2F6RifRYDz%2Fhi8h0t%2FgKlI%2FdSa7lQPrmpE0MRnIC01BlthsX8NzK2j3%2F%2FA%2B58Ll887DQOzoawzOhgaqHNslhimzfNmsWJFeaf1GDWK7gwGPSq4Wb9Scfb%2Fid%2F20LMNHClcQGOqUB4abyNVUf%2Bw%2Fmxo5SBeWmVDORWVf1d0G0iKg%2FaQep%2FH6P6q33C32fYf35hGWC72jNXFnZxNq9%2FZdblnzMtAj3DDCAlvtAjD74KboqZUmEkbkqZf9iIZ%2Fs88yvxp3%2FQtzD%2BbCpj5S8yKpD4pqlhcqH1YFsPn%2BtRVqHzGElq9PLDaqKfdEC728pcGiFKNIHMQXH3vgWhjM4Rsj9BwGsmIU5jZBQ34bS&X-Amz-Signature=fe463f6cd4cd5d73fff9deddfa788267fc037b3c505805f15ed861445877d71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEU2SKL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjSKByezFvGIpww99zo3jHuM%2Bsb7EhfRMlJoMZdYhlgAiEArFhILy5%2B1w6iM9coZDNfAfyI8oDkzfwq9Vzzn6XB53Uq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC7vDuIAL8mfE0jhByrcA60S3Fvcp9xaC1SIh3cYmuk74iUnNKTpF%2FWVrUswcTH2UkmDc8s0w2lXWD4YjYU6JyNMx6dDVHzRV0Gk8AJnEvUTBVkC7tPl1Rg%2Fn37QxIHxjFuyEtNsqgbCUiCPXdWn7d6AB4mQwRCeaaME4kW73lhFX6YESssPvOz%2FQP7msfDQTCZFjip0A1ZCpU4cnsrdmOzoyHJy3cxlcR5nyqh8QkzQJxTt%2BQye%2FH2%2BrC6WHpeqZ3VRu%2BpvEgrXJFSLaO%2FUxOEkeQgsiDbDjC5FLVgdgOXOWaiWzKtAft%2BmjUCP3pHcc57jhSDLG%2Ba7H4t4qne7GAnBLOtQ5QGCJxcYQBspzXYf3p4d72LdLrk2WydFHOTrN9gGCEKcqmNdTQhFatspSUdgENgye6YB8sjs%2BmrU6TnSJ55y219m%2BH2IMAMecvnVdvfeY7qVVLB0pWJ3WefmUZTwEMlrZL0HQxjdV02Z6uv%2BieKA5GZIAnDP9p2YzDFdS8fuUfZYDcWGZr0t2NoPj%2F6RifRYDz%2Fhi8h0t%2FgKlI%2FdSa7lQPrmpE0MRnIC01BlthsX8NzK2j3%2F%2FA%2B58Ll887DQOzoawzOhgaqHNslhimzfNmsWJFeaf1GDWK7gwGPSq4Wb9Scfb%2Fid%2F20LMNHClcQGOqUB4abyNVUf%2Bw%2Fmxo5SBeWmVDORWVf1d0G0iKg%2FaQep%2FH6P6q33C32fYf35hGWC72jNXFnZxNq9%2FZdblnzMtAj3DDCAlvtAjD74KboqZUmEkbkqZf9iIZ%2Fs88yvxp3%2FQtzD%2BbCpj5S8yKpD4pqlhcqH1YFsPn%2BtRVqHzGElq9PLDaqKfdEC728pcGiFKNIHMQXH3vgWhjM4Rsj9BwGsmIU5jZBQ34bS&X-Amz-Signature=44a8acdd48739df49065c62f38881c2492ef7f9cb92fbacba57a663c08cdf55b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEU2SKL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjSKByezFvGIpww99zo3jHuM%2Bsb7EhfRMlJoMZdYhlgAiEArFhILy5%2B1w6iM9coZDNfAfyI8oDkzfwq9Vzzn6XB53Uq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC7vDuIAL8mfE0jhByrcA60S3Fvcp9xaC1SIh3cYmuk74iUnNKTpF%2FWVrUswcTH2UkmDc8s0w2lXWD4YjYU6JyNMx6dDVHzRV0Gk8AJnEvUTBVkC7tPl1Rg%2Fn37QxIHxjFuyEtNsqgbCUiCPXdWn7d6AB4mQwRCeaaME4kW73lhFX6YESssPvOz%2FQP7msfDQTCZFjip0A1ZCpU4cnsrdmOzoyHJy3cxlcR5nyqh8QkzQJxTt%2BQye%2FH2%2BrC6WHpeqZ3VRu%2BpvEgrXJFSLaO%2FUxOEkeQgsiDbDjC5FLVgdgOXOWaiWzKtAft%2BmjUCP3pHcc57jhSDLG%2Ba7H4t4qne7GAnBLOtQ5QGCJxcYQBspzXYf3p4d72LdLrk2WydFHOTrN9gGCEKcqmNdTQhFatspSUdgENgye6YB8sjs%2BmrU6TnSJ55y219m%2BH2IMAMecvnVdvfeY7qVVLB0pWJ3WefmUZTwEMlrZL0HQxjdV02Z6uv%2BieKA5GZIAnDP9p2YzDFdS8fuUfZYDcWGZr0t2NoPj%2F6RifRYDz%2Fhi8h0t%2FgKlI%2FdSa7lQPrmpE0MRnIC01BlthsX8NzK2j3%2F%2FA%2B58Ll887DQOzoawzOhgaqHNslhimzfNmsWJFeaf1GDWK7gwGPSq4Wb9Scfb%2Fid%2F20LMNHClcQGOqUB4abyNVUf%2Bw%2Fmxo5SBeWmVDORWVf1d0G0iKg%2FaQep%2FH6P6q33C32fYf35hGWC72jNXFnZxNq9%2FZdblnzMtAj3DDCAlvtAjD74KboqZUmEkbkqZf9iIZ%2Fs88yvxp3%2FQtzD%2BbCpj5S8yKpD4pqlhcqH1YFsPn%2BtRVqHzGElq9PLDaqKfdEC728pcGiFKNIHMQXH3vgWhjM4Rsj9BwGsmIU5jZBQ34bS&X-Amz-Signature=be61c85ce62bc6e8152e0e8841e5959d0b9cdda3b384ca2d098d17e25e4e5b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STEU2SKL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIHjSKByezFvGIpww99zo3jHuM%2Bsb7EhfRMlJoMZdYhlgAiEArFhILy5%2B1w6iM9coZDNfAfyI8oDkzfwq9Vzzn6XB53Uq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDC7vDuIAL8mfE0jhByrcA60S3Fvcp9xaC1SIh3cYmuk74iUnNKTpF%2FWVrUswcTH2UkmDc8s0w2lXWD4YjYU6JyNMx6dDVHzRV0Gk8AJnEvUTBVkC7tPl1Rg%2Fn37QxIHxjFuyEtNsqgbCUiCPXdWn7d6AB4mQwRCeaaME4kW73lhFX6YESssPvOz%2FQP7msfDQTCZFjip0A1ZCpU4cnsrdmOzoyHJy3cxlcR5nyqh8QkzQJxTt%2BQye%2FH2%2BrC6WHpeqZ3VRu%2BpvEgrXJFSLaO%2FUxOEkeQgsiDbDjC5FLVgdgOXOWaiWzKtAft%2BmjUCP3pHcc57jhSDLG%2Ba7H4t4qne7GAnBLOtQ5QGCJxcYQBspzXYf3p4d72LdLrk2WydFHOTrN9gGCEKcqmNdTQhFatspSUdgENgye6YB8sjs%2BmrU6TnSJ55y219m%2BH2IMAMecvnVdvfeY7qVVLB0pWJ3WefmUZTwEMlrZL0HQxjdV02Z6uv%2BieKA5GZIAnDP9p2YzDFdS8fuUfZYDcWGZr0t2NoPj%2F6RifRYDz%2Fhi8h0t%2FgKlI%2FdSa7lQPrmpE0MRnIC01BlthsX8NzK2j3%2F%2FA%2B58Ll887DQOzoawzOhgaqHNslhimzfNmsWJFeaf1GDWK7gwGPSq4Wb9Scfb%2Fid%2F20LMNHClcQGOqUB4abyNVUf%2Bw%2Fmxo5SBeWmVDORWVf1d0G0iKg%2FaQep%2FH6P6q33C32fYf35hGWC72jNXFnZxNq9%2FZdblnzMtAj3DDCAlvtAjD74KboqZUmEkbkqZf9iIZ%2Fs88yvxp3%2FQtzD%2BbCpj5S8yKpD4pqlhcqH1YFsPn%2BtRVqHzGElq9PLDaqKfdEC728pcGiFKNIHMQXH3vgWhjM4Rsj9BwGsmIU5jZBQ34bS&X-Amz-Signature=8bb6b279506cf185ab8e6bff4557c2d745b2f6e83f0bb1b2c413bfe4de1be214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
