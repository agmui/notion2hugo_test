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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=a40c147b21a26da0c53787c27338a8c22943c51c56cb0cbe7f97ec5afec85956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=e222ef4ce331938067396906802b3ef7fd65a90037e9e13194322d6ce74ddb19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=07e90b450ee94fdbd1ca5334a07156ffebf7c28038cd35675a03df899c568268&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=4032f93013436219e040ee80a0949c36cb3c8e1e666f27242f94e978d0523d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=496389fd43c712eedfc183cfd5b2c565c47e01410b38181d2ac27d8eb66ee888&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=992ce8f62a3ced0a01390ff5c69bf1d0bc6c7e5e4d13dc42812b299c549a3a8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=898a4f7f90a00c7515995f8c58d995a66d62b4e825386bb9b027306f178d9aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=c86d02d7b35171104cc23102228236ae9712acb1285fede184afdb1a2368c655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=d5ab697e239ac44aff1c23616ee20ffde5dd709a3d04a24aa8fe408c2fea9c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=e345d5b8ba48c550a5632651522cdc39f25017355adf5b9cd0357778075f25c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=dcb29909004349afeb07637f21482c5c9e358d8c952c4274d32013390348d416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=a657dcba3431c94974481d1817eca15e930c8aa807d06c6bc5b2696bea6e71cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WRWMB6W%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDNjOCr9zPfFAMg0Cb0ZlxvTolT%2Fxd4%2B4kZJvdl%2B7C06AiEA%2FD0qt5Ecn5%2B3h3P285SVIDLrTlBkOJM1Mbhfc7cJ8UUq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDCUoQSY2d1Ky1lZQKSrcA7U8A7xHH6StccNvpkhN1war9UBNDA4lBLkXK7rSl%2BENzPPNpbYPy%2BPah2niYJJdNFJAi6bR2MYwebCm57H3dLEJbBwX6AeyZM7c1xW6EpSLxCj5T%2Bmd6ct8Whtgb8ZSAPG0dns8DlQ%2FWca8rZBrSElvtusy2XOheq%2FwNMG55EozTDwN%2FhwvL5nXz9dH1bMRQ7H91H0gyKndKvJ7j%2BOF6uJJx4nZs%2Fp1hOEC%2BDPk%2BTyrPh8heoTOiplJkU6GvtJ2rmeRxxRe4jEMNtUV3raWaz6bvVG3lldui4cNT4Yho8M9IzkV1dJoJq8NF6M1g9liHei%2BLmyueVAawqB67wiEkQujLt1ibP2hPzUJpfGs%2FP7dePgwKrP4HUUI4TcwBWpfMpDpluRrEBiIr5HpMrlQjxSROeyDTokkg67fhOXElb1ujrXNtWpUJTbfq%2BLbghP3mwqjq%2FFT98YyXaEutA%2F2lc29GDezuCYOc6MuzDzvnHStNpUFubpZK1sDTqSkNlewGhRd6IXKPMZTaNDB%2FYwTlfAkK18L%2BSsq6xXlxettQ9pba5s%2Bb%2BD30QK1kvlp7D2kvNqw5gf8QWsl6a0vXrA%2F%2FsI6%2FQoZaVDLDq%2BY4RPJNjC%2B3CodpKCPNSI71ahBMO%2BtidQGOqUB4PsrvWxqf5%2F7x57uS%2BMA5RJe5tO0FUSUaIfvcPnR3ooAyEBNqo3ZNgiO%2BPRrgDQ6JdE0h18JFeBegpMTrb7Fq0cmXZB70R%2FtwcEJPCaRT4T5m0H0930FV7D9oQ9KbPh7xK9ps1id3I57ZrVd2jPVkBgngQpabcdoOmp5nSK%2Fkng%2BABbc%2F%2BSUWhRIkx3nW3XrEJGNOeXuw63OeTW3Q96vw%2BtaCCyF&X-Amz-Signature=f14d003537d0247491661007c01e0cc8a2c78a0a92cb3aed065ca2042c6d61fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
