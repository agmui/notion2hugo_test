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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=6705d71713034aed67e215d4ecf60e76e17bcfc429dbefd317d7684e260beba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=062e385166e471886054ccd79ba78ed563653271e2afde961741ed1db61a6835&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=5b6c8ce0351fc1f39d6c62ea23c3247844e818b336ac6b8e131bfad525ab6f54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=a886e8315849b2809a34fc8b7428d6731c74e3d58650d80b29e03937d1271728&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=de1ce8bfcf3f6cf4e97b15003df32640bdf2a0e88c2c488ef34a7c718b0f1c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=073488cb4429f68d1f3b87e092aa07e6a56602aa4ed020454c4b8d26021e204c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=9d9642b8a14f3b9056ace124e1668e33c19cf0d691150e439b872ac15ffeddb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=dbb8f799c68e05399f9f8c51b0b6305ded4d5be71301043e3098a7a01bb3762d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=56562dd275d22f9c2164e2ba938caba796cf78a03aec79fc31acc3d8d74e6d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=72678487753ec5765eca7f2bd7e921bbece49ad6158d3f725495cfee360adeda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=b861995777446d9f3ec474c13a00f9fcc1db82f7c3aa158656458dd6f6cbd335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=bd8aad48975288e6c2b2b5e86adde20ffd6e71a80ec0f923bfd1a7b5fb53a833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645DAMNBF%2F20260830%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260830T035813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBLSavfkd1GNF3JiBL2JCqS79fCZFI2wIHWDJftbvejLAiAyFioFqR2ABiB%2FDXqjt%2BQOZ4EHtLD%2BINWGv15TI6LTEyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMO5oAmtt5L%2BRFxMjtKtwDEuxZnKwXJc9fWRje3mu0ml7KQx69d58bRf9hS60y5EIEVO1vvSIQo7JYHNWxXX55mBQwYlbKPBjsYfexhas%2FVtfxSRRSnsQ5q6lL3qVKLj33OMVnCR65EREuN8Y9o2cryadIpkd2K9TKtwkrqWyzD5BK4nia3GjDAm8uHNhzRJTxpgXhyIsWcywtirU2KmPCTXKdWj9fS3HtVP0jhkY%2BrU57wJZIkId9hyLwiyurQWvBkp1XXr7wv58wenFSHmBUNHJJIcN7BzpuKds%2FqbdTenUqP1%2F8FbJ8Z%2BKMIk%2BHs%2BGUhhTOYwFJLUZPmZQ3Kj40Mk6wndE1RRFJusNpHBNrs9vWNwG0QHTnBstjouIKV%2FPuse6CuRfHnPV4wkl0Qg71Zyo%2BAi0ACmssf9YEJ3E%2Bsxl2BEe8nSSDK9RsB9HH0yMg6WQV%2Fs%2BjTTaT6%2BRylaL4NNYY5ETat3yQMIPvH6sQ%2FFNbTsKhijtoSe9gJk8%2BCciYtM2e%2FeCeIwCyeGwvzT%2BB3m8wJWhRfr6Ph4HrszY%2FoteMcniFE8Nnss1PPxLl4nyqjgUuO5w%2BznygZYoJDT56U0A%2FWR%2B5lLHUfxOOuXL%2FE8Vd0IMd4Ju%2FA7IjXwFu%2BRcqY3gztX8kPI6UAWQwkMzO1AY6pgEkmQ7iCUwJKKlnNggFWk7uAEFa4v1dY99LqZHQtaWU6fnseJ%2F08JDC3FYdKR1tux7WZevT4TdVLZfp15VQjGIyBeyDKtgRVYe5ZAdr6jmDJGDxignhifw%2BXvUkf2eT5vaPngbMjBxAiFwvxrADj0ce78A4GE4SJay8%2B%2BjsIfJ5KBfVq2lFHFGLr8kUtyE9kxgwCzbXY1JT7qtsEvDMYGKpDmwx8YGG&X-Amz-Signature=0b12bf0c37cf4eb2a0b1f38c0a31bd84bf468b8a51dd0c2ed0cceda0efd94092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
