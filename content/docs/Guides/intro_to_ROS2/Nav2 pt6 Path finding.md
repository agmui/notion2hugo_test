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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=e944c01eea611a9427e33f8da1daa13f10a6ab002dd7d24f8cce96286cf7f8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=00dfd465ecfa3f4423be97abf89709732e0c746adc9ec586cb4f1645122bfc09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=e092efc292d0f476dd61c401f6a33a94254411c3e63640e1fc28fb511e1e6081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=a4123a7a6f913dffd79f3a9bd5eff2a682985a554e9900bd472dfdfb20eb7b38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=d6a57fbf81bd0fcac4bac4e42d41ce18a9662acd6a6cd9969f16f90d7a3a8505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=28b43bb29794928782f85c7267f2087af659ac5a9853a79bf3383452ee31ead0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=bda6507fc0ee30081b178e98e18902e04028c9e4a8e8ed92ebe5c5b76b3707f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=a5148f2622b3270b87f0579fb4de1447b1848200b8f91b502fcbe55d224138df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=4729bad1179095bd0e63b6c15d7cd4aac350ddf08352c264e4c31722dd9b93a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=669d997ea4c1707e43215978521e8d7c3533c17ffe8bf633c63c5110c17fff73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=998ce85ea74c417aa290efd58d706361c4b6740e875d71d471b5f850b45d7498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=bf461fd280e2044a744d126f4ec5ebe72a0a7bd7f433f63f7ce1396d0aa4134b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJCHFQVL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T004926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsaOdbKopBINKNwp1X96wmPn%2BQ2WmPB%2BAJUAzlODrPJwIhAOh5snh3ETw4YJv5WPV6qEzm4CPaj7%2FGN61MJdugmbhzKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBTnPyThMj%2B4XmZhkq3AOTMOGl2WMvxW1NS2jNhW4wv7nMRJodn6rw5Nyj82xJcutWYaIqMaHwWQHfev4GAbXFztDt%2FQl6E0OL59a9mHDawqEmJDbvpeIc073XHncFhFUiu%2B9YmiS04Qu1FzeJWOY722fVLc46YG5DjBMFktn1CTzjMJpEeYcv53OmRlf1vJVRu8I7OTIStl568uDvyuvSK1v5iI5zUAQnQf0EagETxtUCx%2BgDPw2I4%2BmH4iYSsJ6%2BvzqalUU782l4mOeYeMEO9SPe9z%2BymAOrOObwzK0MDmHL1n2%2F0Rg1lIj0oCHoC%2FVjzwGig93AukInVGvPiTaNZ5zCnwLT2P6HVTtdviM91mNm3QPK63PkEKTuoUzihvGZI8uI1NTolW1KjSdeOl%2BzCCut7Vy0cXvD01%2FFTj3M77gSZb%2F9T%2BoWIvP%2BHwX%2FBC7sIlJrSJuFfBhlQb6dmwVtQVj8Ic09Gg4y1SMI8axx2%2Fp3YteNAfgC6%2FohfcGBdZg3dUVw2BAt38x1SXkAnU97aiBCmqxXsBVqBeoCilV36SNYGZPmhdyC8qIhmy5GZOlRatPmh%2BGJsjWblJ8S9UQxMCzVzPfIg%2BTnGtKATHbDzbNsVKcoK0dnxpZXc4gfKk2%2BupJlh8fDAGFJgjCM3uTEBjqkAX2XKa69DY1iDZIPg8ZMYFPov%2BtgTn8LN1TYaOAirne1zjOhZIGqilfUpo5%2FFdYOromBBucjdMm67iVZTyAX5Z0XQWxMEggVvKxoGGvq1hk28uTHvE014%2BJ5uCyHc6eZw3YkQkrdmrn5N6taNrcj56A0ixOlKsPbfo2%2FmNnmxHuc%2FzO5h1PuCCkS87m6fG908faSKLAnkumaRWLxVHYaifoMkZHn&X-Amz-Signature=7dd9c13f510918c3280e15fb943172baf7ee20318aa80e5709126185ddb35bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
