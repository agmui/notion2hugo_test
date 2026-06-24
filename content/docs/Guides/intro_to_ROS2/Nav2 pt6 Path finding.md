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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=e2e8f504f6e5b1c2c705bd96faaf7ca6f17bdb2f13754d585bcb0a5be7e91219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=3546c79d691a4048a5219acab6b6f71f06fde120ac4f2d9564249e9d95c3b26c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=fce8186a495f127fd0b55a4d036b22f60426171c52c4e17e2ccf89034ce8d118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=2779dd2ae9e4de88b237792261fc223b1eb0ed34442514452fcec144b94dc3c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=2b0d5a6dcbbe5b1ffe6a5fff5a418625e49124fd4752d6feece96d0696a759b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=693345806e82458a9b993f06c6bca7856f0d08d5b5d14da9a384b2035b013031&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=7dfc5014aef2aa7057b38854e9ca2578fdd76b051d77ee8b9de8849e70cbb1e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=e9956748efd95507e5fe15eab2ad74b6d4ba137752dc3b1d2eccc7811740950c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=2cfc96ef4016b2d1bcae5bd9092418db80b123d446f6c943933ef78201130aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=c6b245de0b58b33c79ec0e28283b9f5ba3c39ceeb0cdf9c1eff400df4c7bb5fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=d568ef3b390e32b409ee437d707a6f43014b0889de99bcec371cc75d0f42136b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=f0c03d9a93c654e45768154fa6883d6cb38e0febd07f2c3809cfebe692ef1cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFOJN2Q6%2F20260624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260624T033658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCxSM4PoH7RScpczLmWkc7ke2I1lJY6sWkRuH7GR2CGuQIgNLnBT0BHCu8ZjOsD3g0FQ8%2F1zdAiHvxv3bB6elUP8pgq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDG2wK2hSLhNHa18ftSrcA9DGoSPiZZ3bap8zNltSfMCl9W%2FaIF0VURzm3Cf0BxoWAgnit4ItL1Db8kYNDUl%2FGzMsNfbo6CYDmNDSedAd9Gt7NNgxSCro4IjBNyfQ%2F0RrUl3mcH3ccc08JDpEuvL2c8uYIDbmOUlxjSSLeweDMSF%2FUaPZAJ%2BwY%2BTZcVKh%2B7fuDv5mmTQZDFZMx9lz5hvz5M2Og0T2JB8YpkVAsB1zFpOnOWAb4zHEDRj%2BB2qif8NUX3GdAWOremdqX%2B1afaXlCOyAr%2FoWUSBXqw%2FGhMP6kR9HNa2TAfhfNznl%2FJ1h0hJ33Z7thi5iPNLzwuKs0QaF7HwTizpCrAIq4MyWISvwIj9YcQr4JXESuq%2BLsizP0ft%2FMPQnUP4M67saHzoX9VsgXMkG0m%2BSsc8cb49WORUi2KNJyFfvKktZ2z8B3bG5WUtriJxuw78MnbERBkj7lcz8dQJL6qwKyz29lRnnCEPfGICRt8yJFqB0JilTZpPhv45vjqsEdGVJ3xbNSknzjE5IO%2BI4zSdp79dJQDsxxGb8feIMnV5FY5QfXJ4nMz1hdqOTVG7revaF8XXnaDteob4JY0hxfOlyPsoALz054uWoXGRc7Y%2F1tlck5nAwrtSIF6qm17oK%2Fl3WijYTrDu%2BMJ3x7NEGOqUB9TKvcDiWnIKsZzDrOZqOhGdW3S%2BSvICrYRC1zXoyHtumvqHIt08FRhk4tBKqbgJnPGf4ZR4fq1lJsVPXF1nrcX%2By71cSR%2B6ZpZxhCJFiDEEr%2FYYb1rcOpadbRFTxcHGl84pRn3PQHZra0MZaYMqtK4h5YD7SPNcL7qaGVjOCIEG3WIyziIMm7HUATNfA9uYd%2Fg95xIFKVtNtYg4LpbpxpmmywuJs&X-Amz-Signature=383bd8c2eafefbf8d398576bb8959d8ff8b628f7821680d3deba855ac2820134&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
