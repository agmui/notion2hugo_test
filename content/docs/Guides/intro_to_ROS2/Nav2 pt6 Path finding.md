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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=1ebaf3ab17b2f25cd15aac0c29f8603b8812f921a4ac9e5b37ae94cda52757fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=092009726c8020c48c615db7ca39d48423d3a1b9f3fac89c1b9334306fb6dfe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=97b96895a68d88632e415ad88d05dbb071b4893b7eb6d1963108f0bed0c08102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=3b559276eddf88fd24efc77e994d3a32f01c47c74d23af14986597b144d3b469&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=40a1fc4d7d0fe4a852b0832ce97e7cd392bbed9732668eb9ba381aaa8caaa56a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=9f3215f0e7657b316092d3a827cee9c4518178caccd814115f8ec48a7641f478&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=a6303c7ea5f8e67b2c65bc2a04aba2b1d9c1e7f8e9c6d0924d40248a1c33a7cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=17a5f558a3b0023ffd2340994dd368cb58a717097709448dda359e2fdcdb0d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=a3fbd34d3fae319d647a116016f31ca776b9dd604bffe010475c7388280f75d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=8c03402922c7ef866ff154b454f11382a3bab0ef9a40de133f601dad9ee2813b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=d097349997c34150f52ff3922f678268bf9ed5408ee5229048fd3d190286ab6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=8124a2ae68cff4f0ca4e00003c359a57c6893deeb853262bf78a66b07a313d94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VHX5CFX%2F20260127%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260127T015443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDluLIhYiy4VL6ORkUXrHYNmfRuxOOsdzxaOmSsHXXTBgIhANi8NY5v6oVWcUjAqbRK%2Ft069vSGHRh7%2FJBzywQ2kejAKv8DCEsQABoMNjM3NDIzMTgzODA1IgzDvvZ1fnUosj2gyxAq3AMsM1TpeAyj1UVYHSTw82dXsQWvwCw1fnoGj%2FEPS4VzmdZcNXXGIzDFCqXMrn5W4Dzb5bMq05C9QmnlKk%2B9hyH1jbwHNPhRSFwEqBKv0YO0jz0MawJccEvc16YbSaeLnph0FFhNE4ygPgjRGBuWPx4soFAoi0Go%2BusLNc9cV0iNDx%2BH15wm3G09uGHkcGLCCQM8ToJ78had5TrnXURKs42YIkb9BTDO8FjyEr7zdV0O9kvHLjzZTTI72hPFbMaVTNYhOWLOVZWonDycYHDTdmGrt2w%2BoHoOZacg124B3XalZaU%2FFJyJdP8SZphCLyf36RNbWZCGkAfJX3kPmMTgT4WTOKVp4QCb7EET0IOl4KDt4BiBR4PQzoiNJ%2BQU2x2ps%2BItDu0vllMEMMC2swXO8Ki2OBtyLxLVZmpSKI6LH7AP%2FVeuOaMZsNjB5hCzP9DpjC%2B0T2J7E966vqQUhLi7oWw9KNnIkCdpFuANGB2a8JEZAQc0KoibyTlQcxa44LMkJh%2BXtXURLfaSwdES37Hti28gnB6D3ogaG3ZkpxhbKNm3rlft%2FKerr%2BORykdkHeoYrN90pLlgj%2BfsscHwb0TLJ9VfyOTrR7%2B63xOH2XammzesLTFcav7B6y1FqhXKQDCHs%2BDLBjqkAU4yajZq8y4thzttSPN2brBwoIWEMM5zmvNzVpKl3jmsjUPL3rmhwrK6gNLDAXIJCTSS3mliX5RCnyQipbQRpYGPVyKBUOH50cgX1WaLVogVEcDNFL6O8AldQkNNt9iGWW1Bgw163JfcvvXUzBNqfAZ6TWEENNBG3uTuShnQxc8u%2FgwtVVD2HJ5jTKwofbqYVEaffwYVWmOD%2FL8KPt40iAh8TxY3&X-Amz-Signature=4001490ae75734f9e5f187586b68c67b2ce013cefdaf488db71f2080ba882b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
