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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQHESGB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCMg2fJlqrXi%2BWccMcldqz%2FKBW%2BrXMxkmKIyQ2RO17k2wIgHzb5P%2BJvmPWjhPJ9vjDX5%2Fm8%2B5iHtCCxPdJ6%2BzxAr1cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ3cqNs3AGNNzF56SrcA1LHbpQ950KWQ4bA1fH4M8tJhI9lWHi1zPY3%2BiJEPx0i8cf%2BSbvS6TIqa62vcbv%2FHXI7JGKr8W%2FSWRQaxUqg6rhmRHHOAMjbqIu92cfBxXmmlQgBugasOcnYuo3lNVZXxjiGntGBMJH0u%2By6dsm4YJaJMoOfUCpLunbaJrplNAa%2F15mtO37K%2FnxNBnCXDVLlzPX0vqTh9DDeOso%2FMBV9o3ZWePU%2FaUy9MU6mC8zF%2Fk4%2FutqWifuV2IJbhAE7CFHn6HGym0Ko16TiHuPxSyYmBWc0zEU89Fcqx6XL%2FblydHV4RrQQOEc5dE%2Fjv%2B4%2BAiYYQBOwLwt5b6zTm061Awj22QUS1Frx0Ie7v5s%2FiKkRuFNWSTbOs8YIR4crhgLSuIzLz9cvr6j4talVnEETjZ992dfN%2Fp%2BT%2BBadQdJ%2F8gka%2B%2FQnBDBHbndb0uyvEtye1YNEyyBIKF5YP9C48WmgllaXbYV7tAg45nV4mVE3u%2BWZTaq5hPJ8sW%2Fp%2BiSnyR9bLHELeBUHH3OTnB83jkGHcpMhlU4g9mIJoZODghAVB0bB92Yde68zxrU95YfiRAe92EjMxPYT9eoijN01mz%2FgMfH%2Ft3ug9qMgFbzm%2BnuGDc0bbJQOG%2BoczdRwFv4pZfV0MO7umsQGOqUB6Cf2blAPdSHkDWLvJ87T6U7Xa2K5ZhjmG2neQsys23sqyCNPR8RGIb%2BCpxBPR2OPnnrI9isTagzhl%2BnsmS%2BgZp9VzhL4kK9xN8tymzWx263EzqSR70%2F0rQm3OINCOaPI6yQYbzvvfPxomQI7Z5ayzMbS%2FmFLD7fadIxbwZFce39DENeGTmqQLu4qStFNPP95oBuYmLWQ6zey75PoaiIGxmJuxzcU&X-Amz-Signature=d7c6b35c9cee503d03ef35c87265aa09228374b00cc3420a1c552d52acea86b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQHESGB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCMg2fJlqrXi%2BWccMcldqz%2FKBW%2BrXMxkmKIyQ2RO17k2wIgHzb5P%2BJvmPWjhPJ9vjDX5%2Fm8%2B5iHtCCxPdJ6%2BzxAr1cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ3cqNs3AGNNzF56SrcA1LHbpQ950KWQ4bA1fH4M8tJhI9lWHi1zPY3%2BiJEPx0i8cf%2BSbvS6TIqa62vcbv%2FHXI7JGKr8W%2FSWRQaxUqg6rhmRHHOAMjbqIu92cfBxXmmlQgBugasOcnYuo3lNVZXxjiGntGBMJH0u%2By6dsm4YJaJMoOfUCpLunbaJrplNAa%2F15mtO37K%2FnxNBnCXDVLlzPX0vqTh9DDeOso%2FMBV9o3ZWePU%2FaUy9MU6mC8zF%2Fk4%2FutqWifuV2IJbhAE7CFHn6HGym0Ko16TiHuPxSyYmBWc0zEU89Fcqx6XL%2FblydHV4RrQQOEc5dE%2Fjv%2B4%2BAiYYQBOwLwt5b6zTm061Awj22QUS1Frx0Ie7v5s%2FiKkRuFNWSTbOs8YIR4crhgLSuIzLz9cvr6j4talVnEETjZ992dfN%2Fp%2BT%2BBadQdJ%2F8gka%2B%2FQnBDBHbndb0uyvEtye1YNEyyBIKF5YP9C48WmgllaXbYV7tAg45nV4mVE3u%2BWZTaq5hPJ8sW%2Fp%2BiSnyR9bLHELeBUHH3OTnB83jkGHcpMhlU4g9mIJoZODghAVB0bB92Yde68zxrU95YfiRAe92EjMxPYT9eoijN01mz%2FgMfH%2Ft3ug9qMgFbzm%2BnuGDc0bbJQOG%2BoczdRwFv4pZfV0MO7umsQGOqUB6Cf2blAPdSHkDWLvJ87T6U7Xa2K5ZhjmG2neQsys23sqyCNPR8RGIb%2BCpxBPR2OPnnrI9isTagzhl%2BnsmS%2BgZp9VzhL4kK9xN8tymzWx263EzqSR70%2F0rQm3OINCOaPI6yQYbzvvfPxomQI7Z5ayzMbS%2FmFLD7fadIxbwZFce39DENeGTmqQLu4qStFNPP95oBuYmLWQ6zey75PoaiIGxmJuxzcU&X-Amz-Signature=76affe5fdf30f6743dc52c34634df18cd64bedda757e6311310cda9d9c8e59c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQHESGB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCMg2fJlqrXi%2BWccMcldqz%2FKBW%2BrXMxkmKIyQ2RO17k2wIgHzb5P%2BJvmPWjhPJ9vjDX5%2Fm8%2B5iHtCCxPdJ6%2BzxAr1cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ3cqNs3AGNNzF56SrcA1LHbpQ950KWQ4bA1fH4M8tJhI9lWHi1zPY3%2BiJEPx0i8cf%2BSbvS6TIqa62vcbv%2FHXI7JGKr8W%2FSWRQaxUqg6rhmRHHOAMjbqIu92cfBxXmmlQgBugasOcnYuo3lNVZXxjiGntGBMJH0u%2By6dsm4YJaJMoOfUCpLunbaJrplNAa%2F15mtO37K%2FnxNBnCXDVLlzPX0vqTh9DDeOso%2FMBV9o3ZWePU%2FaUy9MU6mC8zF%2Fk4%2FutqWifuV2IJbhAE7CFHn6HGym0Ko16TiHuPxSyYmBWc0zEU89Fcqx6XL%2FblydHV4RrQQOEc5dE%2Fjv%2B4%2BAiYYQBOwLwt5b6zTm061Awj22QUS1Frx0Ie7v5s%2FiKkRuFNWSTbOs8YIR4crhgLSuIzLz9cvr6j4talVnEETjZ992dfN%2Fp%2BT%2BBadQdJ%2F8gka%2B%2FQnBDBHbndb0uyvEtye1YNEyyBIKF5YP9C48WmgllaXbYV7tAg45nV4mVE3u%2BWZTaq5hPJ8sW%2Fp%2BiSnyR9bLHELeBUHH3OTnB83jkGHcpMhlU4g9mIJoZODghAVB0bB92Yde68zxrU95YfiRAe92EjMxPYT9eoijN01mz%2FgMfH%2Ft3ug9qMgFbzm%2BnuGDc0bbJQOG%2BoczdRwFv4pZfV0MO7umsQGOqUB6Cf2blAPdSHkDWLvJ87T6U7Xa2K5ZhjmG2neQsys23sqyCNPR8RGIb%2BCpxBPR2OPnnrI9isTagzhl%2BnsmS%2BgZp9VzhL4kK9xN8tymzWx263EzqSR70%2F0rQm3OINCOaPI6yQYbzvvfPxomQI7Z5ayzMbS%2FmFLD7fadIxbwZFce39DENeGTmqQLu4qStFNPP95oBuYmLWQ6zey75PoaiIGxmJuxzcU&X-Amz-Signature=5b0acbff1ad0bbe745af7545fa9994c2d0f211bf4dece04cfd76e27e08fb490d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQHESGB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCMg2fJlqrXi%2BWccMcldqz%2FKBW%2BrXMxkmKIyQ2RO17k2wIgHzb5P%2BJvmPWjhPJ9vjDX5%2Fm8%2B5iHtCCxPdJ6%2BzxAr1cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ3cqNs3AGNNzF56SrcA1LHbpQ950KWQ4bA1fH4M8tJhI9lWHi1zPY3%2BiJEPx0i8cf%2BSbvS6TIqa62vcbv%2FHXI7JGKr8W%2FSWRQaxUqg6rhmRHHOAMjbqIu92cfBxXmmlQgBugasOcnYuo3lNVZXxjiGntGBMJH0u%2By6dsm4YJaJMoOfUCpLunbaJrplNAa%2F15mtO37K%2FnxNBnCXDVLlzPX0vqTh9DDeOso%2FMBV9o3ZWePU%2FaUy9MU6mC8zF%2Fk4%2FutqWifuV2IJbhAE7CFHn6HGym0Ko16TiHuPxSyYmBWc0zEU89Fcqx6XL%2FblydHV4RrQQOEc5dE%2Fjv%2B4%2BAiYYQBOwLwt5b6zTm061Awj22QUS1Frx0Ie7v5s%2FiKkRuFNWSTbOs8YIR4crhgLSuIzLz9cvr6j4talVnEETjZ992dfN%2Fp%2BT%2BBadQdJ%2F8gka%2B%2FQnBDBHbndb0uyvEtye1YNEyyBIKF5YP9C48WmgllaXbYV7tAg45nV4mVE3u%2BWZTaq5hPJ8sW%2Fp%2BiSnyR9bLHELeBUHH3OTnB83jkGHcpMhlU4g9mIJoZODghAVB0bB92Yde68zxrU95YfiRAe92EjMxPYT9eoijN01mz%2FgMfH%2Ft3ug9qMgFbzm%2BnuGDc0bbJQOG%2BoczdRwFv4pZfV0MO7umsQGOqUB6Cf2blAPdSHkDWLvJ87T6U7Xa2K5ZhjmG2neQsys23sqyCNPR8RGIb%2BCpxBPR2OPnnrI9isTagzhl%2BnsmS%2BgZp9VzhL4kK9xN8tymzWx263EzqSR70%2F0rQm3OINCOaPI6yQYbzvvfPxomQI7Z5ayzMbS%2FmFLD7fadIxbwZFce39DENeGTmqQLu4qStFNPP95oBuYmLWQ6zey75PoaiIGxmJuxzcU&X-Amz-Signature=1f8d44f673f88081e2ca55e2bcf9d9d3035afa996fcdc897c6acef85a01cb10c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQHESGB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCMg2fJlqrXi%2BWccMcldqz%2FKBW%2BrXMxkmKIyQ2RO17k2wIgHzb5P%2BJvmPWjhPJ9vjDX5%2Fm8%2B5iHtCCxPdJ6%2BzxAr1cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ3cqNs3AGNNzF56SrcA1LHbpQ950KWQ4bA1fH4M8tJhI9lWHi1zPY3%2BiJEPx0i8cf%2BSbvS6TIqa62vcbv%2FHXI7JGKr8W%2FSWRQaxUqg6rhmRHHOAMjbqIu92cfBxXmmlQgBugasOcnYuo3lNVZXxjiGntGBMJH0u%2By6dsm4YJaJMoOfUCpLunbaJrplNAa%2F15mtO37K%2FnxNBnCXDVLlzPX0vqTh9DDeOso%2FMBV9o3ZWePU%2FaUy9MU6mC8zF%2Fk4%2FutqWifuV2IJbhAE7CFHn6HGym0Ko16TiHuPxSyYmBWc0zEU89Fcqx6XL%2FblydHV4RrQQOEc5dE%2Fjv%2B4%2BAiYYQBOwLwt5b6zTm061Awj22QUS1Frx0Ie7v5s%2FiKkRuFNWSTbOs8YIR4crhgLSuIzLz9cvr6j4talVnEETjZ992dfN%2Fp%2BT%2BBadQdJ%2F8gka%2B%2FQnBDBHbndb0uyvEtye1YNEyyBIKF5YP9C48WmgllaXbYV7tAg45nV4mVE3u%2BWZTaq5hPJ8sW%2Fp%2BiSnyR9bLHELeBUHH3OTnB83jkGHcpMhlU4g9mIJoZODghAVB0bB92Yde68zxrU95YfiRAe92EjMxPYT9eoijN01mz%2FgMfH%2Ft3ug9qMgFbzm%2BnuGDc0bbJQOG%2BoczdRwFv4pZfV0MO7umsQGOqUB6Cf2blAPdSHkDWLvJ87T6U7Xa2K5ZhjmG2neQsys23sqyCNPR8RGIb%2BCpxBPR2OPnnrI9isTagzhl%2BnsmS%2BgZp9VzhL4kK9xN8tymzWx263EzqSR70%2F0rQm3OINCOaPI6yQYbzvvfPxomQI7Z5ayzMbS%2FmFLD7fadIxbwZFce39DENeGTmqQLu4qStFNPP95oBuYmLWQ6zey75PoaiIGxmJuxzcU&X-Amz-Signature=27ef20dafd311abb88340222fb78b3f225664b1a55bf21ee7e1648552e09bc89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJQHESGB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQCMg2fJlqrXi%2BWccMcldqz%2FKBW%2BrXMxkmKIyQ2RO17k2wIgHzb5P%2BJvmPWjhPJ9vjDX5%2Fm8%2B5iHtCCxPdJ6%2BzxAr1cqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZ3cqNs3AGNNzF56SrcA1LHbpQ950KWQ4bA1fH4M8tJhI9lWHi1zPY3%2BiJEPx0i8cf%2BSbvS6TIqa62vcbv%2FHXI7JGKr8W%2FSWRQaxUqg6rhmRHHOAMjbqIu92cfBxXmmlQgBugasOcnYuo3lNVZXxjiGntGBMJH0u%2By6dsm4YJaJMoOfUCpLunbaJrplNAa%2F15mtO37K%2FnxNBnCXDVLlzPX0vqTh9DDeOso%2FMBV9o3ZWePU%2FaUy9MU6mC8zF%2Fk4%2FutqWifuV2IJbhAE7CFHn6HGym0Ko16TiHuPxSyYmBWc0zEU89Fcqx6XL%2FblydHV4RrQQOEc5dE%2Fjv%2B4%2BAiYYQBOwLwt5b6zTm061Awj22QUS1Frx0Ie7v5s%2FiKkRuFNWSTbOs8YIR4crhgLSuIzLz9cvr6j4talVnEETjZ992dfN%2Fp%2BT%2BBadQdJ%2F8gka%2B%2FQnBDBHbndb0uyvEtye1YNEyyBIKF5YP9C48WmgllaXbYV7tAg45nV4mVE3u%2BWZTaq5hPJ8sW%2Fp%2BiSnyR9bLHELeBUHH3OTnB83jkGHcpMhlU4g9mIJoZODghAVB0bB92Yde68zxrU95YfiRAe92EjMxPYT9eoijN01mz%2FgMfH%2Ft3ug9qMgFbzm%2BnuGDc0bbJQOG%2BoczdRwFv4pZfV0MO7umsQGOqUB6Cf2blAPdSHkDWLvJ87T6U7Xa2K5ZhjmG2neQsys23sqyCNPR8RGIb%2BCpxBPR2OPnnrI9isTagzhl%2BnsmS%2BgZp9VzhL4kK9xN8tymzWx263EzqSR70%2F0rQm3OINCOaPI6yQYbzvvfPxomQI7Z5ayzMbS%2FmFLD7fadIxbwZFce39DENeGTmqQLu4qStFNPP95oBuYmLWQ6zey75PoaiIGxmJuxzcU&X-Amz-Signature=7c11c387c1bf4870cc6490a6f2fea01dcbaca1a5a420c7ed622c14a98305c9ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
