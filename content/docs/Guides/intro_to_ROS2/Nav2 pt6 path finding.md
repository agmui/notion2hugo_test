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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5S67DN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCqSwi5MdOF5FcBDzf98iFNA5jJ%2Bxgdk59EcNJHJ1ax9AIgZVTbuQ6HHbUoiuQ1vb74yaK5fEhpANsmcq%2F8ajnjItkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iRQDknMvI96Wa6CrcA6aN9bM5w3VQOvHLcax2v9a5YY%2F%2B0CTjTKWkOmy2ZNvCitpQatB8pQth3IeYyjk3LytgKlf%2FRq41PNQlLzkEWWDEoMvgN78h0xkolnBCtiwzgAlDsLvwrQLi2onF0k86ICAdilRsJUGvFEHYUwRZjXjYtyCgq6BAGsK%2FpTpULUTeir6fqxNqckxiaYSP39%2BrM3vv7h47a5vs4nQk%2FNdjmZHvX8nmDQFW%2BqqkcJu5j47n3C6ftc9cp14lz5jtkPrJjQN5w82BXr4Ty606qWR0MUK8COW%2F4rRj0FQPI5zgSurocx0ayFShCFW729RrTFRY28Ux6M2WAOAbh6PPeTKeUd7u84WYj3J0ZfEIPB%2Fhsdy%2B7pmfkTPey4mZwWbJijgyQnpqk8www%2BvLVn8twglA5pqbeHFRG%2BhA53np4%2BBzVPHSO9OiAZuBcMpFRR0WQjT3to4xCXLUj2Jcb8DQmMyZP30bHjQ8yDGcc52GFakhTUDD7O4Jf2rwOexWAuvhuqXmU%2FrDkNPkJsPyf4DYIVz7aIG0%2BjxbcCwhji37r4RWLELaDiSxB8XHHBuhwtz2ue7pQ0QUeILgyR96ZsM8h%2BuL6ghkiQLrwGuEKg2llV16mdYokqJkGYtM6%2FKZoRk%2BMJK0ocQGOqUBeWKw5lUM54N4DaxKAigKszyFbqDxdnxbUhJP6IqkLVVvSpSQaWj%2FjKB0HqAhzpw9%2FB2DvJvczzjSLTbNch%2FnrxtgRacknlx6HiMSXty7PP8TPIEUcPG11oa9mAu3SwQVQqZstivMfLyiZavE%2BUWJx%2F4GpOyKVIHm1fTF9fYd%2FJtJlkOEfBxxf%2FC89R8TE4f5in6IJNAzNT%2BUWsuolSUcPTiMH2JS&X-Amz-Signature=27a15667fa2da5c9c2bb700800d921183f2239d84c3275baa542eb078c94b5cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5S67DN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCqSwi5MdOF5FcBDzf98iFNA5jJ%2Bxgdk59EcNJHJ1ax9AIgZVTbuQ6HHbUoiuQ1vb74yaK5fEhpANsmcq%2F8ajnjItkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iRQDknMvI96Wa6CrcA6aN9bM5w3VQOvHLcax2v9a5YY%2F%2B0CTjTKWkOmy2ZNvCitpQatB8pQth3IeYyjk3LytgKlf%2FRq41PNQlLzkEWWDEoMvgN78h0xkolnBCtiwzgAlDsLvwrQLi2onF0k86ICAdilRsJUGvFEHYUwRZjXjYtyCgq6BAGsK%2FpTpULUTeir6fqxNqckxiaYSP39%2BrM3vv7h47a5vs4nQk%2FNdjmZHvX8nmDQFW%2BqqkcJu5j47n3C6ftc9cp14lz5jtkPrJjQN5w82BXr4Ty606qWR0MUK8COW%2F4rRj0FQPI5zgSurocx0ayFShCFW729RrTFRY28Ux6M2WAOAbh6PPeTKeUd7u84WYj3J0ZfEIPB%2Fhsdy%2B7pmfkTPey4mZwWbJijgyQnpqk8www%2BvLVn8twglA5pqbeHFRG%2BhA53np4%2BBzVPHSO9OiAZuBcMpFRR0WQjT3to4xCXLUj2Jcb8DQmMyZP30bHjQ8yDGcc52GFakhTUDD7O4Jf2rwOexWAuvhuqXmU%2FrDkNPkJsPyf4DYIVz7aIG0%2BjxbcCwhji37r4RWLELaDiSxB8XHHBuhwtz2ue7pQ0QUeILgyR96ZsM8h%2BuL6ghkiQLrwGuEKg2llV16mdYokqJkGYtM6%2FKZoRk%2BMJK0ocQGOqUBeWKw5lUM54N4DaxKAigKszyFbqDxdnxbUhJP6IqkLVVvSpSQaWj%2FjKB0HqAhzpw9%2FB2DvJvczzjSLTbNch%2FnrxtgRacknlx6HiMSXty7PP8TPIEUcPG11oa9mAu3SwQVQqZstivMfLyiZavE%2BUWJx%2F4GpOyKVIHm1fTF9fYd%2FJtJlkOEfBxxf%2FC89R8TE4f5in6IJNAzNT%2BUWsuolSUcPTiMH2JS&X-Amz-Signature=ef61cbe88249cba796e0d9f5cfcf5e471dc463888f80229b0c4f8893af10b6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5S67DN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCqSwi5MdOF5FcBDzf98iFNA5jJ%2Bxgdk59EcNJHJ1ax9AIgZVTbuQ6HHbUoiuQ1vb74yaK5fEhpANsmcq%2F8ajnjItkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iRQDknMvI96Wa6CrcA6aN9bM5w3VQOvHLcax2v9a5YY%2F%2B0CTjTKWkOmy2ZNvCitpQatB8pQth3IeYyjk3LytgKlf%2FRq41PNQlLzkEWWDEoMvgN78h0xkolnBCtiwzgAlDsLvwrQLi2onF0k86ICAdilRsJUGvFEHYUwRZjXjYtyCgq6BAGsK%2FpTpULUTeir6fqxNqckxiaYSP39%2BrM3vv7h47a5vs4nQk%2FNdjmZHvX8nmDQFW%2BqqkcJu5j47n3C6ftc9cp14lz5jtkPrJjQN5w82BXr4Ty606qWR0MUK8COW%2F4rRj0FQPI5zgSurocx0ayFShCFW729RrTFRY28Ux6M2WAOAbh6PPeTKeUd7u84WYj3J0ZfEIPB%2Fhsdy%2B7pmfkTPey4mZwWbJijgyQnpqk8www%2BvLVn8twglA5pqbeHFRG%2BhA53np4%2BBzVPHSO9OiAZuBcMpFRR0WQjT3to4xCXLUj2Jcb8DQmMyZP30bHjQ8yDGcc52GFakhTUDD7O4Jf2rwOexWAuvhuqXmU%2FrDkNPkJsPyf4DYIVz7aIG0%2BjxbcCwhji37r4RWLELaDiSxB8XHHBuhwtz2ue7pQ0QUeILgyR96ZsM8h%2BuL6ghkiQLrwGuEKg2llV16mdYokqJkGYtM6%2FKZoRk%2BMJK0ocQGOqUBeWKw5lUM54N4DaxKAigKszyFbqDxdnxbUhJP6IqkLVVvSpSQaWj%2FjKB0HqAhzpw9%2FB2DvJvczzjSLTbNch%2FnrxtgRacknlx6HiMSXty7PP8TPIEUcPG11oa9mAu3SwQVQqZstivMfLyiZavE%2BUWJx%2F4GpOyKVIHm1fTF9fYd%2FJtJlkOEfBxxf%2FC89R8TE4f5in6IJNAzNT%2BUWsuolSUcPTiMH2JS&X-Amz-Signature=baf62de8f8ccc27d0b46f4338abc50418dbf2f352a936a64c9888a3828d8cdbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5S67DN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCqSwi5MdOF5FcBDzf98iFNA5jJ%2Bxgdk59EcNJHJ1ax9AIgZVTbuQ6HHbUoiuQ1vb74yaK5fEhpANsmcq%2F8ajnjItkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iRQDknMvI96Wa6CrcA6aN9bM5w3VQOvHLcax2v9a5YY%2F%2B0CTjTKWkOmy2ZNvCitpQatB8pQth3IeYyjk3LytgKlf%2FRq41PNQlLzkEWWDEoMvgN78h0xkolnBCtiwzgAlDsLvwrQLi2onF0k86ICAdilRsJUGvFEHYUwRZjXjYtyCgq6BAGsK%2FpTpULUTeir6fqxNqckxiaYSP39%2BrM3vv7h47a5vs4nQk%2FNdjmZHvX8nmDQFW%2BqqkcJu5j47n3C6ftc9cp14lz5jtkPrJjQN5w82BXr4Ty606qWR0MUK8COW%2F4rRj0FQPI5zgSurocx0ayFShCFW729RrTFRY28Ux6M2WAOAbh6PPeTKeUd7u84WYj3J0ZfEIPB%2Fhsdy%2B7pmfkTPey4mZwWbJijgyQnpqk8www%2BvLVn8twglA5pqbeHFRG%2BhA53np4%2BBzVPHSO9OiAZuBcMpFRR0WQjT3to4xCXLUj2Jcb8DQmMyZP30bHjQ8yDGcc52GFakhTUDD7O4Jf2rwOexWAuvhuqXmU%2FrDkNPkJsPyf4DYIVz7aIG0%2BjxbcCwhji37r4RWLELaDiSxB8XHHBuhwtz2ue7pQ0QUeILgyR96ZsM8h%2BuL6ghkiQLrwGuEKg2llV16mdYokqJkGYtM6%2FKZoRk%2BMJK0ocQGOqUBeWKw5lUM54N4DaxKAigKszyFbqDxdnxbUhJP6IqkLVVvSpSQaWj%2FjKB0HqAhzpw9%2FB2DvJvczzjSLTbNch%2FnrxtgRacknlx6HiMSXty7PP8TPIEUcPG11oa9mAu3SwQVQqZstivMfLyiZavE%2BUWJx%2F4GpOyKVIHm1fTF9fYd%2FJtJlkOEfBxxf%2FC89R8TE4f5in6IJNAzNT%2BUWsuolSUcPTiMH2JS&X-Amz-Signature=4921402420e02d89d3e38f5047a024100dec70ace67d0ee2cdd9572d514a41af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5S67DN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCqSwi5MdOF5FcBDzf98iFNA5jJ%2Bxgdk59EcNJHJ1ax9AIgZVTbuQ6HHbUoiuQ1vb74yaK5fEhpANsmcq%2F8ajnjItkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iRQDknMvI96Wa6CrcA6aN9bM5w3VQOvHLcax2v9a5YY%2F%2B0CTjTKWkOmy2ZNvCitpQatB8pQth3IeYyjk3LytgKlf%2FRq41PNQlLzkEWWDEoMvgN78h0xkolnBCtiwzgAlDsLvwrQLi2onF0k86ICAdilRsJUGvFEHYUwRZjXjYtyCgq6BAGsK%2FpTpULUTeir6fqxNqckxiaYSP39%2BrM3vv7h47a5vs4nQk%2FNdjmZHvX8nmDQFW%2BqqkcJu5j47n3C6ftc9cp14lz5jtkPrJjQN5w82BXr4Ty606qWR0MUK8COW%2F4rRj0FQPI5zgSurocx0ayFShCFW729RrTFRY28Ux6M2WAOAbh6PPeTKeUd7u84WYj3J0ZfEIPB%2Fhsdy%2B7pmfkTPey4mZwWbJijgyQnpqk8www%2BvLVn8twglA5pqbeHFRG%2BhA53np4%2BBzVPHSO9OiAZuBcMpFRR0WQjT3to4xCXLUj2Jcb8DQmMyZP30bHjQ8yDGcc52GFakhTUDD7O4Jf2rwOexWAuvhuqXmU%2FrDkNPkJsPyf4DYIVz7aIG0%2BjxbcCwhji37r4RWLELaDiSxB8XHHBuhwtz2ue7pQ0QUeILgyR96ZsM8h%2BuL6ghkiQLrwGuEKg2llV16mdYokqJkGYtM6%2FKZoRk%2BMJK0ocQGOqUBeWKw5lUM54N4DaxKAigKszyFbqDxdnxbUhJP6IqkLVVvSpSQaWj%2FjKB0HqAhzpw9%2FB2DvJvczzjSLTbNch%2FnrxtgRacknlx6HiMSXty7PP8TPIEUcPG11oa9mAu3SwQVQqZstivMfLyiZavE%2BUWJx%2F4GpOyKVIHm1fTF9fYd%2FJtJlkOEfBxxf%2FC89R8TE4f5in6IJNAzNT%2BUWsuolSUcPTiMH2JS&X-Amz-Signature=33e9540e02cf8d77f1903bbdfb569239eb272e96aa16e5215e1583b7236bcf12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZE5S67DN%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T071526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCqSwi5MdOF5FcBDzf98iFNA5jJ%2Bxgdk59EcNJHJ1ax9AIgZVTbuQ6HHbUoiuQ1vb74yaK5fEhpANsmcq%2F8ajnjItkqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM6iRQDknMvI96Wa6CrcA6aN9bM5w3VQOvHLcax2v9a5YY%2F%2B0CTjTKWkOmy2ZNvCitpQatB8pQth3IeYyjk3LytgKlf%2FRq41PNQlLzkEWWDEoMvgN78h0xkolnBCtiwzgAlDsLvwrQLi2onF0k86ICAdilRsJUGvFEHYUwRZjXjYtyCgq6BAGsK%2FpTpULUTeir6fqxNqckxiaYSP39%2BrM3vv7h47a5vs4nQk%2FNdjmZHvX8nmDQFW%2BqqkcJu5j47n3C6ftc9cp14lz5jtkPrJjQN5w82BXr4Ty606qWR0MUK8COW%2F4rRj0FQPI5zgSurocx0ayFShCFW729RrTFRY28Ux6M2WAOAbh6PPeTKeUd7u84WYj3J0ZfEIPB%2Fhsdy%2B7pmfkTPey4mZwWbJijgyQnpqk8www%2BvLVn8twglA5pqbeHFRG%2BhA53np4%2BBzVPHSO9OiAZuBcMpFRR0WQjT3to4xCXLUj2Jcb8DQmMyZP30bHjQ8yDGcc52GFakhTUDD7O4Jf2rwOexWAuvhuqXmU%2FrDkNPkJsPyf4DYIVz7aIG0%2BjxbcCwhji37r4RWLELaDiSxB8XHHBuhwtz2ue7pQ0QUeILgyR96ZsM8h%2BuL6ghkiQLrwGuEKg2llV16mdYokqJkGYtM6%2FKZoRk%2BMJK0ocQGOqUBeWKw5lUM54N4DaxKAigKszyFbqDxdnxbUhJP6IqkLVVvSpSQaWj%2FjKB0HqAhzpw9%2FB2DvJvczzjSLTbNch%2FnrxtgRacknlx6HiMSXty7PP8TPIEUcPG11oa9mAu3SwQVQqZstivMfLyiZavE%2BUWJx%2F4GpOyKVIHm1fTF9fYd%2FJtJlkOEfBxxf%2FC89R8TE4f5in6IJNAzNT%2BUWsuolSUcPTiMH2JS&X-Amz-Signature=23612dd5b80b8731097d663792e3cc78fb740bb42c381e543fa9c9f3836f32d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
