---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-07-30T06:25:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=9715f73b47c2b2742de6cfbe41cfa3102c7fca26295a9760a031ef5f7876aed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=411b85d5beefded9f187464050bcddfb931a2168b5fe00e9ed9589dcf3763b77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=3af534d1c62a34f469ed7db47ad9f0e1a833600ea6e63b36e84bea6f0b90f0a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=781e3b8ae6e24688b67c1898b9f09c4975cb0a3addb910b6bc1ad9b65dc32708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=3cd2abc061e75de730bd0d5b2eb368f63b93570ba8b3f08abb614cbd2052b02d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=038b1730425e8a49f81244efaaee5e862a1eb36cb36ff7dd937a530932e608ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=e7ab6bd527eccf7ddd405de3de421c21127224fa057f830fa6b82917bb72f935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=e693aabed858c39c52547a049c11787f23ada1373021eb81149642813679d828&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=eb77a7bc6211d3bb5bb19396027f16b186313f5a2739e8d130a9667ec9461a82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=9dd5ff28e93ca481db6195cf65c63c488408c371ce1539bfe5702172cd626ae0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=2be4f66c017fa23f27c559c72bf9a063fae035b7ae4e4aee46a8868af37b6d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=5c217f1353d508b776eae1deaafff82269afc566ef890c9db288a4492237179b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLI5OQIR%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T051858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDO76OK%2BVGcZyBakX8DYQuOXjAmIW%2BumNCHJtQIbkCuPAiAKiHTOPkZgUKJqnmCIx0FiO9mw4n78Gw%2FoNIck3D5a6SqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpAfS8ZP%2F6JLvZmp7KtwDipjhXORc64b3eiEG%2BseXQ%2BYsn7scTE%2BwEOR%2F%2FOnjocw%2FHK%2BkfH%2F%2BK9vwYtc4TcWQrBg5iFCuddWIra7LMXJEGSYCPHfQGxD7O1hH0RmNrxGP1X2n%2B4Qle4fcnd%2BszqskUtBj9rIPzPVp6ZI9ReQ40z4FxjX3FsMtC3pkeP8f20LsyCxUxsF4Syjk%2F6yNOwJiO%2B2otQfZAWDH410LdmbPnk%2FNmBzGYJ1n7E0QXU817l2Ym3%2BFZqovSpx7htMkOLJbEkNr4cD9vE6omNlXJyauc9%2BLBLAakPu0K3uqPHxNearXdMgkfAsrEjr1DGYLJBmcO%2BeU2urbB%2B8JdYSNUnr3pQclcmGpbT1LGyiVX1D%2F70lk9%2BK8NO3LUVXSnRXY6uBMaB9J%2BOhgUwXCNzYB8dCTqjOpWNNqtsob4FFW2JFX0F%2FJKLMbw1tL807sXsaI57KIw2KLP7ldnD3kDlMdIRo6VBTKpZDJMgc7e%2FMfKZPImNHINvzqS81XWX9mH%2BPoJfM1%2FMZRnCUZ%2FGHmLE0JiqtwjIos2Aj1Uvfr4Fo7%2Bx4ZRhR11P7%2FelYm7ossFoLKaF9Xyy%2FN9wXL0XyMfxh%2BDaWB5DmtbFLTF6ycqkPBLyVV4ZR7PaHyQJ%2FlZ9HAdCAwqPWrxAY6pgHAP4FUXy%2BDP%2Bk9hzESBjvbgsUJN12nwtwt%2FaQj%2F4dyxVZ08NXWHrXaaKn0nKSFPoAE%2BqFJei9VFwH39Nr6fQmwQPljnCqrFlzViZUc9TAwjOkNy74RW7fasw2HcT38oW%2FrBxgcqjyiOTsEhDgYA%2FBT4sD56gJEYRvvweTd%2FWLiejuahfMjWqZofQHiOz%2BS7Kq7hrFSH8%2F2r124cBKJi0lAnj9AbjuS&X-Amz-Signature=d64982b6bcc4c4aef206d2529ae1258dbcb473eb5e0b63861b3ada978c011eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Nav2 settings

TODO: change footprint?
