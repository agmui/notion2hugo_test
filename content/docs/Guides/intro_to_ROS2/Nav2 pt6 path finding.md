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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWQOM3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPkVISMHL%2FpHKgdCikhJjP0H2OLsweHWM7wJTjNaOK9gIhAOr7U3Q3meh63KvzP7iDhoa0sZ3wRl2Ayci%2FA7u70G92Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy97yNClAv23i0RWeMq3AMfrfCqerscqclNLCsR%2BeQ0OZsBBFTMPrUPfyOT%2Bt7%2BJHxCVKUDwmRSDqFfhIASZqJ43lv5XpTRDACRi6FcrICdXpx9Za2lhrtVEthstPc81V3ubqcHk2Si%2Fhd9NQ8Djy%2BcrVrP1wXvLgVHy5JP%2BlvfIpA8xRl2L5iYT4Gpz2IiEx4BT5Hl3ZS85dKCtN7etHQNVruOF3gsvi3o04VounrrujrUMeWOjRzXdr9dX%2FRl2tAtkZAuqWzeVAFDujD5tmFdR3mUVADeyXiET7Kv58PVDRbb3YAJcTmiRCrOozPeLb%2FotAZZDUepxq81CFhTkCHxTp%2BXB9oNfm2mVMO0c4KQ3RVtz6F8bAwpmdq6zYosXxxY4toKjeDgugDz9Ua%2Fa%2F7iGH81MQd8VMmUWmzjv34ob%2BsYVdKECMr%2FGPPORmBfwJDx8cXtGkEUdKZGsaGJhuWZXcvV1a3AEm9QRfiZSEysWIAUmPnT4ugpQnj%2FXSWTXWDotgBVovoHtJ7jrtNmxSuv8Qb3OBACU0rADo8DjmFlVrbPcW9PRZamJx%2FXIMn7OmXe9SrEXAtwV5beD%2BVne9NHPVLDHHCy26hTn1qYoLHAtz72afzNDr4%2FgzkNKR02TE7qX1XpiOnuRiDupzDfho7EBjqkAcyq0fXHWjkgrwthoidGx0miIB64U9CNN4jed7iHtGg3PSlX0Wii9MVu6gPYcGPlKKcZRh3AsJwcP8A7Qq65SovcnvMnFjbCBr%2BVEto%2FBgcvEIJr5OlS8Z2Kp%2FLkpP3AMNpolsZfVHBt5aVdjvsbHoL9Q6lR6bgz34tTftcaJvNmAMXmCUoSjAEG13HCre6bbduSijnTxi1MzayAbjG2ZJzXuCk%2F&X-Amz-Signature=861a92b6a24856ecf2cb7d30a2e4876a36f22141a7d456f6cacb28b70d151fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWQOM3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPkVISMHL%2FpHKgdCikhJjP0H2OLsweHWM7wJTjNaOK9gIhAOr7U3Q3meh63KvzP7iDhoa0sZ3wRl2Ayci%2FA7u70G92Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy97yNClAv23i0RWeMq3AMfrfCqerscqclNLCsR%2BeQ0OZsBBFTMPrUPfyOT%2Bt7%2BJHxCVKUDwmRSDqFfhIASZqJ43lv5XpTRDACRi6FcrICdXpx9Za2lhrtVEthstPc81V3ubqcHk2Si%2Fhd9NQ8Djy%2BcrVrP1wXvLgVHy5JP%2BlvfIpA8xRl2L5iYT4Gpz2IiEx4BT5Hl3ZS85dKCtN7etHQNVruOF3gsvi3o04VounrrujrUMeWOjRzXdr9dX%2FRl2tAtkZAuqWzeVAFDujD5tmFdR3mUVADeyXiET7Kv58PVDRbb3YAJcTmiRCrOozPeLb%2FotAZZDUepxq81CFhTkCHxTp%2BXB9oNfm2mVMO0c4KQ3RVtz6F8bAwpmdq6zYosXxxY4toKjeDgugDz9Ua%2Fa%2F7iGH81MQd8VMmUWmzjv34ob%2BsYVdKECMr%2FGPPORmBfwJDx8cXtGkEUdKZGsaGJhuWZXcvV1a3AEm9QRfiZSEysWIAUmPnT4ugpQnj%2FXSWTXWDotgBVovoHtJ7jrtNmxSuv8Qb3OBACU0rADo8DjmFlVrbPcW9PRZamJx%2FXIMn7OmXe9SrEXAtwV5beD%2BVne9NHPVLDHHCy26hTn1qYoLHAtz72afzNDr4%2FgzkNKR02TE7qX1XpiOnuRiDupzDfho7EBjqkAcyq0fXHWjkgrwthoidGx0miIB64U9CNN4jed7iHtGg3PSlX0Wii9MVu6gPYcGPlKKcZRh3AsJwcP8A7Qq65SovcnvMnFjbCBr%2BVEto%2FBgcvEIJr5OlS8Z2Kp%2FLkpP3AMNpolsZfVHBt5aVdjvsbHoL9Q6lR6bgz34tTftcaJvNmAMXmCUoSjAEG13HCre6bbduSijnTxi1MzayAbjG2ZJzXuCk%2F&X-Amz-Signature=0abdf375e372ababbc70cb49d0c1c4b5bdaeae73cee4e5465ac05c8ec65b5e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWQOM3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPkVISMHL%2FpHKgdCikhJjP0H2OLsweHWM7wJTjNaOK9gIhAOr7U3Q3meh63KvzP7iDhoa0sZ3wRl2Ayci%2FA7u70G92Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy97yNClAv23i0RWeMq3AMfrfCqerscqclNLCsR%2BeQ0OZsBBFTMPrUPfyOT%2Bt7%2BJHxCVKUDwmRSDqFfhIASZqJ43lv5XpTRDACRi6FcrICdXpx9Za2lhrtVEthstPc81V3ubqcHk2Si%2Fhd9NQ8Djy%2BcrVrP1wXvLgVHy5JP%2BlvfIpA8xRl2L5iYT4Gpz2IiEx4BT5Hl3ZS85dKCtN7etHQNVruOF3gsvi3o04VounrrujrUMeWOjRzXdr9dX%2FRl2tAtkZAuqWzeVAFDujD5tmFdR3mUVADeyXiET7Kv58PVDRbb3YAJcTmiRCrOozPeLb%2FotAZZDUepxq81CFhTkCHxTp%2BXB9oNfm2mVMO0c4KQ3RVtz6F8bAwpmdq6zYosXxxY4toKjeDgugDz9Ua%2Fa%2F7iGH81MQd8VMmUWmzjv34ob%2BsYVdKECMr%2FGPPORmBfwJDx8cXtGkEUdKZGsaGJhuWZXcvV1a3AEm9QRfiZSEysWIAUmPnT4ugpQnj%2FXSWTXWDotgBVovoHtJ7jrtNmxSuv8Qb3OBACU0rADo8DjmFlVrbPcW9PRZamJx%2FXIMn7OmXe9SrEXAtwV5beD%2BVne9NHPVLDHHCy26hTn1qYoLHAtz72afzNDr4%2FgzkNKR02TE7qX1XpiOnuRiDupzDfho7EBjqkAcyq0fXHWjkgrwthoidGx0miIB64U9CNN4jed7iHtGg3PSlX0Wii9MVu6gPYcGPlKKcZRh3AsJwcP8A7Qq65SovcnvMnFjbCBr%2BVEto%2FBgcvEIJr5OlS8Z2Kp%2FLkpP3AMNpolsZfVHBt5aVdjvsbHoL9Q6lR6bgz34tTftcaJvNmAMXmCUoSjAEG13HCre6bbduSijnTxi1MzayAbjG2ZJzXuCk%2F&X-Amz-Signature=eb1ad99a2277e98c114a681adfbe78ba51e9c47ac09d3ba82bbe6910fdc34b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWQOM3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPkVISMHL%2FpHKgdCikhJjP0H2OLsweHWM7wJTjNaOK9gIhAOr7U3Q3meh63KvzP7iDhoa0sZ3wRl2Ayci%2FA7u70G92Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy97yNClAv23i0RWeMq3AMfrfCqerscqclNLCsR%2BeQ0OZsBBFTMPrUPfyOT%2Bt7%2BJHxCVKUDwmRSDqFfhIASZqJ43lv5XpTRDACRi6FcrICdXpx9Za2lhrtVEthstPc81V3ubqcHk2Si%2Fhd9NQ8Djy%2BcrVrP1wXvLgVHy5JP%2BlvfIpA8xRl2L5iYT4Gpz2IiEx4BT5Hl3ZS85dKCtN7etHQNVruOF3gsvi3o04VounrrujrUMeWOjRzXdr9dX%2FRl2tAtkZAuqWzeVAFDujD5tmFdR3mUVADeyXiET7Kv58PVDRbb3YAJcTmiRCrOozPeLb%2FotAZZDUepxq81CFhTkCHxTp%2BXB9oNfm2mVMO0c4KQ3RVtz6F8bAwpmdq6zYosXxxY4toKjeDgugDz9Ua%2Fa%2F7iGH81MQd8VMmUWmzjv34ob%2BsYVdKECMr%2FGPPORmBfwJDx8cXtGkEUdKZGsaGJhuWZXcvV1a3AEm9QRfiZSEysWIAUmPnT4ugpQnj%2FXSWTXWDotgBVovoHtJ7jrtNmxSuv8Qb3OBACU0rADo8DjmFlVrbPcW9PRZamJx%2FXIMn7OmXe9SrEXAtwV5beD%2BVne9NHPVLDHHCy26hTn1qYoLHAtz72afzNDr4%2FgzkNKR02TE7qX1XpiOnuRiDupzDfho7EBjqkAcyq0fXHWjkgrwthoidGx0miIB64U9CNN4jed7iHtGg3PSlX0Wii9MVu6gPYcGPlKKcZRh3AsJwcP8A7Qq65SovcnvMnFjbCBr%2BVEto%2FBgcvEIJr5OlS8Z2Kp%2FLkpP3AMNpolsZfVHBt5aVdjvsbHoL9Q6lR6bgz34tTftcaJvNmAMXmCUoSjAEG13HCre6bbduSijnTxi1MzayAbjG2ZJzXuCk%2F&X-Amz-Signature=413eba6b72846e22cba3e809011c98da29d5464fad6d6f6b5957c79a99f82514&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWQOM3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPkVISMHL%2FpHKgdCikhJjP0H2OLsweHWM7wJTjNaOK9gIhAOr7U3Q3meh63KvzP7iDhoa0sZ3wRl2Ayci%2FA7u70G92Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy97yNClAv23i0RWeMq3AMfrfCqerscqclNLCsR%2BeQ0OZsBBFTMPrUPfyOT%2Bt7%2BJHxCVKUDwmRSDqFfhIASZqJ43lv5XpTRDACRi6FcrICdXpx9Za2lhrtVEthstPc81V3ubqcHk2Si%2Fhd9NQ8Djy%2BcrVrP1wXvLgVHy5JP%2BlvfIpA8xRl2L5iYT4Gpz2IiEx4BT5Hl3ZS85dKCtN7etHQNVruOF3gsvi3o04VounrrujrUMeWOjRzXdr9dX%2FRl2tAtkZAuqWzeVAFDujD5tmFdR3mUVADeyXiET7Kv58PVDRbb3YAJcTmiRCrOozPeLb%2FotAZZDUepxq81CFhTkCHxTp%2BXB9oNfm2mVMO0c4KQ3RVtz6F8bAwpmdq6zYosXxxY4toKjeDgugDz9Ua%2Fa%2F7iGH81MQd8VMmUWmzjv34ob%2BsYVdKECMr%2FGPPORmBfwJDx8cXtGkEUdKZGsaGJhuWZXcvV1a3AEm9QRfiZSEysWIAUmPnT4ugpQnj%2FXSWTXWDotgBVovoHtJ7jrtNmxSuv8Qb3OBACU0rADo8DjmFlVrbPcW9PRZamJx%2FXIMn7OmXe9SrEXAtwV5beD%2BVne9NHPVLDHHCy26hTn1qYoLHAtz72afzNDr4%2FgzkNKR02TE7qX1XpiOnuRiDupzDfho7EBjqkAcyq0fXHWjkgrwthoidGx0miIB64U9CNN4jed7iHtGg3PSlX0Wii9MVu6gPYcGPlKKcZRh3AsJwcP8A7Qq65SovcnvMnFjbCBr%2BVEto%2FBgcvEIJr5OlS8Z2Kp%2FLkpP3AMNpolsZfVHBt5aVdjvsbHoL9Q6lR6bgz34tTftcaJvNmAMXmCUoSjAEG13HCre6bbduSijnTxi1MzayAbjG2ZJzXuCk%2F&X-Amz-Signature=4f943bfb9bfcf553eb4632afdf58837b5d419bc17220262f77725cd0a7835f37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWQOM3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCPkVISMHL%2FpHKgdCikhJjP0H2OLsweHWM7wJTjNaOK9gIhAOr7U3Q3meh63KvzP7iDhoa0sZ3wRl2Ayci%2FA7u70G92Kv8DCEYQABoMNjM3NDIzMTgzODA1Igy97yNClAv23i0RWeMq3AMfrfCqerscqclNLCsR%2BeQ0OZsBBFTMPrUPfyOT%2Bt7%2BJHxCVKUDwmRSDqFfhIASZqJ43lv5XpTRDACRi6FcrICdXpx9Za2lhrtVEthstPc81V3ubqcHk2Si%2Fhd9NQ8Djy%2BcrVrP1wXvLgVHy5JP%2BlvfIpA8xRl2L5iYT4Gpz2IiEx4BT5Hl3ZS85dKCtN7etHQNVruOF3gsvi3o04VounrrujrUMeWOjRzXdr9dX%2FRl2tAtkZAuqWzeVAFDujD5tmFdR3mUVADeyXiET7Kv58PVDRbb3YAJcTmiRCrOozPeLb%2FotAZZDUepxq81CFhTkCHxTp%2BXB9oNfm2mVMO0c4KQ3RVtz6F8bAwpmdq6zYosXxxY4toKjeDgugDz9Ua%2Fa%2F7iGH81MQd8VMmUWmzjv34ob%2BsYVdKECMr%2FGPPORmBfwJDx8cXtGkEUdKZGsaGJhuWZXcvV1a3AEm9QRfiZSEysWIAUmPnT4ugpQnj%2FXSWTXWDotgBVovoHtJ7jrtNmxSuv8Qb3OBACU0rADo8DjmFlVrbPcW9PRZamJx%2FXIMn7OmXe9SrEXAtwV5beD%2BVne9NHPVLDHHCy26hTn1qYoLHAtz72afzNDr4%2FgzkNKR02TE7qX1XpiOnuRiDupzDfho7EBjqkAcyq0fXHWjkgrwthoidGx0miIB64U9CNN4jed7iHtGg3PSlX0Wii9MVu6gPYcGPlKKcZRh3AsJwcP8A7Qq65SovcnvMnFjbCBr%2BVEto%2FBgcvEIJr5OlS8Z2Kp%2FLkpP3AMNpolsZfVHBt5aVdjvsbHoL9Q6lR6bgz34tTftcaJvNmAMXmCUoSjAEG13HCre6bbduSijnTxi1MzayAbjG2ZJzXuCk%2F&X-Amz-Signature=314f2fe3224190872dd2bbfdded374276f5252933e1b00639f14415e9bce7d9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
