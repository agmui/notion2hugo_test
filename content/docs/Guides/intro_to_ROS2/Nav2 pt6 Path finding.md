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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=f8abd44d74fdc8fccf5126c5a6e2e059825731bc61ccacc95421126a07226fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=1450c5f0a65695cd2f27e8f9b699a6ad23b5e5fc268bf635895c4f578020fa07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=e7576c400a917100f7756395ce4581ed1617658974bd10b66b65f5a403d87480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=e411f034ccb67f4bc919bd246b107c8df422100a2317fc105d333fc331b6f292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=1159e8bd5d652bda98e16bcd90d9acd5ade86546ba454bc87eafd7f0aafe7db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=2d61343fcf752ac5c2ebe65cbbd9a037d34a70106e15a3a250ca29565a005626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=8f55e8034092c0900f33b6f501562e51b36532bf3e920a2067741a282c773994&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=73f41f493c8cf1304e7d5082b175e2370e8b021a765753bed002b55bb3f6e112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=9f970c4de40d4feaf4aaf85b61d96bdd0dedb1a6d4f503ede781cd2a6093f36a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=77c09580c73f6d0f815830944108e9f8a76b9feb60ebe3e6bf1e1095b5424d6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=f6a9e8a4a1456701d9a6b92da6bcde59aa4f443da67789aa0373401a484896f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=7ab427e330e9aa0daff77c49073f6f5c9a8d34be0ce2b8f4ce1f03e8a6f72c78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GU622FL%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxzdAzZY%2FUXzk7H%2F4%2BF0rHFQ8oB1QFCXhptAGVI%2FgIJQIhAJtqoWhSZwZprZrXxv3ZT%2ByQ%2FSHlOMJ1n3siBy%2BC7RYIKogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwofTDrB3Y7dYta2SYq3AOo0VAbt3dsEJncmgKrwZ7aLvx63pEODhcq%2Bp0N%2FRO0i5w72C6iZAMdc4VTCLuPcHaNz26yFv8ipcsk24pGoJDPXRuxSCfKSvPSe7hoQXmQNixR9XbZ5wOBfwS1CFdRBZDt6JzT5kbB%2FrXWI7vub1Evo7INgr1dYs3jvvS%2FcA%2FK4CaLnW8FotlegJR7DHtr8NQc2RsERTVXVNwJGxU1iQwNkfL89CESJpLjeIKO7roAGF%2B5CP83WlZUXvyv0Bjs48Mmsa0nInKIRxYQ9Ew5PRUWAbUjNtR%2FbXYSvN9w8zGtAhMNnXY9PuiQlPOVF92PmMUDQMMXzKi5Se4vanwYLoIxP3YBRjcx2pW8RZFruyNvAWVqlnW8d%2BUySiC1KyOrhYlDA%2BETd5S1tiZw%2FGf%2B0fJAkUJS82zAnDRjucSDilJh%2FlyktcETz52pT4oJ8HfGgcXUhZeRsYL0kjSWRF6VASp6SyiCp20dL4VER99BoPtqrbyuY5Sz9FGIJjTS%2BGUr7nrDEJB0Rft4EzcmE53%2Bd6xDOCqplP9blR6TfCOgQtJ4Vlt7VdKMRrb7wz7%2BB5%2Bhs8bMvZmB1v0sPbFC6ZY5Px61ppvhOT5Wh4Mgd%2F%2BttcCcBOm5cxm37bvsu9HlJDC0%2BZXFBjqkAZ4rOiXUGvpt5lAv2c9sG%2BqgYk0f2B4tUsAQNkN%2F8u6ofGlOm3aGOZqPUofACM4r%2BLvWDI368ct565WoPkyH14pQL10kjWDJK31FCMcsC9vCzoyQb0YJ529aIM1kiUmWJ7fhAgvMY5qnprmeO%2B198XrcYUpB27iURv%2FcI0t7RgpiFfdvCeGfRWOsOD0PamfWTHuMEzf1PaDER%2BV0%2F60Ql9wvcxXk&X-Amz-Signature=008683deb7de73cb712487347c72eda762f9bbc623c1dbe143b73d349c8e9c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
