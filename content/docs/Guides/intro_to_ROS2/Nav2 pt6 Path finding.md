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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=66b23319db95742bbe966fa08038b73901eb39cd697b1541242a3c2b29d66f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=ddf031041387eb9d98e4f0d23db17c8711e5c7677c46fb9896ddc91e60d99a20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=49e29ecde4510463c553634d80cbca9274bd93b9ef74b6956f3ce360050bec23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=c1700eb7820d54ce680d2ffc3b1e3ffa548d29680d727fff152ecc75eb941ba1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=52a5398021b539a4631e3d837ef23675f3ba9bcc595818fa28e684c2fa698764&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=d981e7a5767e53c7c2447fe48bbbf142ea7161db4861b7136e1fd62696eac070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=b1b0b4b9225ddc6e38fe16578b56e6eadeebfb6e0d8d3f2c48e90191f5952142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=fa58780f0c7362d7929f917c88eed20596d4f0ffd568173abe76cfe6916ad02b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=6be340e19fe39a229be101e641a480378193608364929ab1594b054d887b509a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=9228aa1cb30d4f1ca185dc43350b91eb99093ff2e65c78520e9e49b29bfef36d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=aab500a9437a92f2d75c1d2b4b2459201ae26a5ad6b8290e124a282a1ff11e3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=1347128df836bc0c58a7f08c4e5ff0580e8aca6838eaf4a91706cdbcf68871f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SODGD2YR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T033956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJIMEYCIQC%2BPpg0eNKbefSu7tm7KXrt77NQat3RBYXv5Md1fA868QIhAL%2BdiEKdvrzBuwqm8QTyYYAVtU%2BBNMjt4fO1AV%2BcZIHPKv8DCGwQABoMNjM3NDIzMTgzODA1Igxibrt0UpZmllgRA6gq3AOcXxNKW%2BUn2oYONOE97eMzvfX%2Bl7bDHsioSXVioW3zM%2BkxYZUUCgDfscpJrqHXJ1t3FycF1XtlsrCBADyJSbSnvJS7aP%2BJk1sesY7Igxat9mBRaH96jz5BY8vEhgOgkoz%2B2ZmkKPPO6cevjt0gCJs0l0SqcsZvnKW3Bn%2FsE02POXoH1k%2B9uskOVpqJZRKS2F9hBwMBfgi86jVgNu%2FlnauvS8En0naCiuVN04j7sdLETgBViTKYqr4M0zFSK72lZR5nhx6jWxXJcNuEE6GAwjCNwqURldIy6nIjk4jsg0azVYjBTzHNQQHlMiyuWstL%2Fui1IjhKCOO0L0i0wpiwWnTjrx4NGSw6aRvXgvYtiOwqedBcjf7eV2a9qwbRI5trZYRxoU3MdW9UZVojMmcHYNcg%2BkOvWIdIlahPP73WZX93Ft0PUefIfda96EaiUWQouLA0%2B6RQGb3Wl8he9toi%2FLX7AYkHNCeKIIezU3t%2FG3H7RM8i56cdG8TRJpWYpDbMRsuO%2BSP%2FlyuUanX6k%2FidvMn%2Bjg%2BbpS7NkCpYb8uSVCIZqGuL309l6%2BD4TYO2hSZJhcLPJ6vhyDiz2fd3SPgKMbZKM%2Fr%2FkNJd5RDvaDBlV5ISZj3Zkw0lmvS1xi25OTD94%2F%2FEBjqkAZ2dsKivV1z0JN1PEJJjaCSjBxp6ytvlSMUje6JzhMUe0gH%2Fs48yBcUwAmQJijJJqvb9RhCs9UeE35C3WiICduhSmmZhhn8hSiT45A%2Bw4F7L10BJye2vXLOKyLNMg1N1a96Gp%2BGB39IAc4vEk5WK%2FFMki54XbCXV3XlVVmXS%2B%2BH%2BCyAMR9xIm2rsTNoyUitmj5pD8awJo8XuWBgVCjhctMSiMSce&X-Amz-Signature=4a823fff8aa854bcd2b33808a3e0c4aed7b299481d7fa553c057e85a579002db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
