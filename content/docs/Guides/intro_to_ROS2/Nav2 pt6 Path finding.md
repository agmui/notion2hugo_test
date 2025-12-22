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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=72a6ed9ea3a83c0ca70b4d7e6249fb79012e7fdcc71358957e4ea81f586e7296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=bd8d186ebbcb30831d23b7df34a29588ba3ef7d8b78b80c4e0595c038ae185be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=711aadf7bab51468bfa4c97aa57f970a4420974883b4f3c00872baf348734f72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=42cd94fdb197de87016b177d1b5ce235b820d6edd38e6c6ecf16cabb13bd408c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=9b8a7edd4bb139592f0c7ad4ee242d20adf475202322ad390aff8622a83081e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=1598a8b2d980a7fdab095d0f28d4744ad8772d495946e7c97b7128ac60d470e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=c6f56005e035953d3266abd878e9b09d7377d6a7d553fd7e7b9591705c8f5fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=4cd97a943e8b7c4c36ae29fa8193470bf4b38407eb57a2c314b977821e92de40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=7ec6353aa1ed94bdb50b59e9dfcc0aae7c273c1df0bb84e1af1f1f5bf8269b6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=7de37de5c892bf8ff9fc1574b7b9b686363f0f9cbe9562ebe27487969108cb12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=25ce6561e6a68f3fea9944745a617e27f231f3376c9e95b8f258d3dcb81ce51b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=ae148d5babaaf214cf86023ac1d175b43d45544aea07eb87134fc0875a62ef70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDDNE3YM%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDC63AArt8LqNcxyB9%2FmhE7tAjrrXYkUfe2MQsjXvyaUQIgEZ9rSI0Ptbvty%2BW0a2wV0hXXk2IiBTPioRUiIW3WCIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBJqv83SIoyglXZpaCrcA5bOb5ME%2BHVGnAixP5bHzEuT%2BX1PAaOmRvriWYt3MVonvFkPfWvG8cGt89aNHBFhwGXnxVj%2FAnqD3vmKT3dKWrvVOacNpsoK5XmOCJTgVeBJRKsCTqeEgE85Yz%2F1E0VvJQsDgq1WaVC1e%2BOJd4DGM4syDydRcGJ4eq0CHcQTlpolLm1BGVhWTm9OTXIWtAijX8YvJwwWIOvpxnlyvxvSy7rHry0CS09Mrd%2Bmc7CHH6bihH3TSSvodDVp%2BlcLtAp7Jy%2BD8GZC3rjjoy3rXm5IY34okqmnPmZBJeIJq3NqrdvQMNoQsaZ%2F0chNG%2B8HTW%2F7YVR1NdV8iT8xv66sGiml%2BSkpYuOKc%2Bu%2BsahLOA4XaKc17zbY30K0E2Wa0HizfRbaREtXABJwzF1OxvERw7P0Oep2MtSCfimacYAbuOS7581Tf88gJo%2BpwGu%2BBIlIcSF8t3l7Tp%2B8k4GWZVWCkRgAVV7pTxApDSdMmNNe82Z%2FmEsmmftYgv0cemFZm8vUJMn6uWXsw0EvrFwERzxz41is3NvYPTf1%2BNX1dNbxUofzssqBAPU35EHstB1dqw7UvwB8TRvfREqdOl9LM6AWmH0iFg9oZjt%2FACJe%2ByoIAnE3E9x9%2FZ2IIlxe0p0zk6urMN75ocoGOqUB4oZdQo4icPfxA%2BoNkN1jhaPqVkfaycVU0%2B2A%2B4l%2B0xsjK%2Bgbj92S9gR034WxXTX0%2BPfnGyIRoE5yTNvTJ0fFV%2FlquP8NA4TBGZh2R3e9y65u47hFjDEdlW%2FLMk9SNwsgIUNFg8TrFT0i6eRQ%2BanBUZ6zdTVFANHZsfSS5421sEBzI%2FlSf6iBKyBR2sJbLnMOab1s%2Brlqfr0q62xlmYAeE5n0bHU%2F&X-Amz-Signature=17756febaff410eff6b2a4083de2806c25f141d2c9acee85abc5a682d5226623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
