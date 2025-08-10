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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=e9ceca4d7aa34a02c07afbcaf479691a567b5816de67183dee3d596854e311ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=954cd59dd7f4e698fd826d18cc6fab0f4ea7ffd4e0ec40ba15549378cd722bb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=91c3a47ccef91104a6117b879cfa1d8a2bff9cf647e71a5b859c5230bae9039c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=2e2935ea1aaf3a78d6382103b07f47b5e05fb654e53889f977d4378f08fe7ce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=611d52a18b7fbeb48141cb29fbda077c199ac59608b9745b8657430a657d9f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=8bd2f44316df5a78125ea81a9bc6dd6c26276fe0bb0162cc45564a5b50156fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=24da2d14247b8a9c61cc3cb714a4721cf5c6bb308778ef76ef0d31fca2955824&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=82c82d0cc531ea82945ab40ef4e38d10207d2c0e9fdd247b2e080347cd0a433b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=82a0e77b9c70ede8f46719ad5ad1e2a067730e2447d382c68c471a0e01eb6afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=7c7d7d5ccefc103f464baaa80076b0d22e9dacddb58a00c61f21ffa409570f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=492fab2444b650377bb920e1f774f54b464ae8a6e9eec99be94ba1b960086e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=09a4aa4f59c0477ddc2de12a5f4fc05e78fc617509b6c0f0c7370ffba2e7ee78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SECXQ7I7%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxvvhYxfmPIKwpm8BmJvs9eNbl0pFbxHGMlQaTdiBeIAiAWxKS0ntIsPGP7EwEJviFaKMpqFIzydjL9cNFOC%2FHD9yqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyPI9PIMMYlM%2BvQ%2FQKtwDcLy6RNyNYKHQSq7HUboElr56Tajy4btMvk%2BUJ5A%2FefsLTgmAYw10s2MxuPvvEFJSh9cgYlBFcFtaiLXGZ%2FgfZoG%2FGyVWNGl5Z3xZ5FzowW5crzfTPW9JGn3wXkhFjDUJKtw1YAayhrA66PiJMTyUH4Fv3anvHhDBGaS8nNuD%2FEcSE7Kh3JWuOTAVWT9GRQQ8D0sABdym40fUz6Kaz5CuKAHeckvZ5Zs3yExCTHrbFxx0C1lGU0vvTxDQaOp13I2Xa7k4EW%2BdpF%2FcJefLwk32Lu6kzp5yqNQgyZ3AfVaGrF4J9f4F3kzzf%2BLQ84jHVoeczJI7OfzGj5tPSy1A8goI1nnKCOATSc%2BkZt%2F30DX%2B1WGYRNttVSSq7y7TQcq2b1R1PzQCH68FpZHXzBlHM7QsPqlqx4U5i9M8kMcrcV%2BHdXmvB5uko5s6LJ3H0v0dczllrExfNFCoj1BDIN6J1963YYWq5l%2F0mmxbhzRtc%2FuAr1kyIfRr%2BlEiLCTafSe8gMUlAAe2d3Jon3UjB0ci2PTyIJgIGNI%2BZXPNOJOy%2BCbhsisfQTsvsTg%2FzE%2B9JTETOwG2IAxr7wEKp2uz8d%2BdjPP3H5Le6IX6gPx4kxSPrVVynlegOrP1tEuW8%2B9xmVcwhZbjxAY6pgGhgi9edbKeuU%2FaREVkYHkzFy%2F6WDWoNiuIrHKu9XXu8oEY1UmGgorCtHc3Pm%2FVncuVIW6h7%2FQWI4GqTtKIpNepWiEKdXeOSvW%2FfZKNX1rGpSajZuJjUCiNKVQNjeBFYO%2F9G2EC6WSgjlW6K4%2Bap5k%2F2Wt3BOqpsnRu7IvjbFw%2FM4ORZqSwMlO60lHNbdVEjefDl1pO6u6WaZqt65eZOPMiZuYVGVHk&X-Amz-Signature=3045893c1ef3d39a9d7afc0f751a742bb06fcc7395c5c40d59d3d05d9e72b6c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
