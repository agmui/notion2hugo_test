---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=f08b042e6832e0ff7fdcdc7ef792a32e1222d2d1dd2e93a3971cdbfced3643d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=6ecca6a553a655884346e2e2bcfe6f73ae45d4d0de26e5a242bfb77c8015093e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=1d57b11efedf6d716505d328f440bee0f88a71b25481cc4da87ea271377fcb25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=42c83aa5631f8277133e2911408cbb118cb58b5702b9d4fd7e8f7a65e0fad61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=7be20328498ca07e99a203cfb25c05a45a1a90addc9f46042b80e9b013118b57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=bb22800e9cfd9470f7ae312e00566c1eb79c26ddaa1630114be7f3e657ee53fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=9a3e9422dd83d454aad03558e30ba3c3fc0b96a298717d3492bcc349ddc2bebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=e4b29900b70ccc441d9155e1616656cd2c484919cb042d8b8854fe526fd65283&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=77d3ecaba85fa89c0ce9f7b7b7378febfbc2502d006d8f0109af64cc2bf60d3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWVIRDKI%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDjMYLU1NWeu09CWdut8wililkTX2LrmrgNrIk7Jk38yAiA1JH1LRKKzn7RNweN%2FiqsGGTVItfajxdpsOZ2LoPRPZSqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcrp0rojvQRx2kW4lKtwDPOnQNEw3umEYm3ke%2Bk9Oy8GIRvk7LvHAmbEafXPauVnIYQBSuKLnN4fUhjTta%2B4qpnitQOofewnvaEomK79Kkzwv0bHERqV8UTKpeVxKYLsJvp1WBHLmSeOLGIltJZfUmDKmMpUVHQ57X4VwpAu7Jt9V9ejlfEC9Peu7HT5S%2BAiN%2BPeA6vR4snlnXeczdniO292wbrakpNCXl0eQnEX3lSH7Ps0vl3%2BQoLwmL76dgrFQEqDaidfuzp3LadDRd%2FC12xj66w0JApIzDSCXerTMy8dlYuPb5U26E5%2BGHPQ%2ByjyQEI5Vo7U7BTXJ5Z4T8zPeoitPJ8w1TaPwU%2BNkRvGnPXMHJfbU5vcnAIYtlUbdY7q2tMmsaXRKKaNP%2FpWZ3eF13DdJj3ZtbmT9a1SU56QZ2Vl4vhIAgZWsy5Wm8%2FvIZrxJnpGL7WXv7VhNq37dh%2FVznP66rnc9OxwOvKyVBNXxV%2BnLUlGbCuozU1q0atboIBa4uZzBDEYNR%2BiidMjlCobmHzRHbFvgZlVb%2B0%2B5fjQvA5jDEjq0lajKqNp3qozk1HTxBH%2BNzmq9GmweeqouVwQUz1Uybf%2BMbwXU1q66fiVOCWXyvb1%2BFd0zcdZKDlm4ed%2BuSuLCno474IfArAQwvpGyxAY6pgFzmmGbJCvWVQEOv5Dyv0QFqsQdC96Q7tm4bcp4MI0cpEtMPIVyolfaLOE6R5n53fwKyy%2FVY4Ha5GrLF2B52SjTfr9Me5eIYlrJiYcfbRAnJJAQJi2KJtxbwSdnReD0nxXCjAzudtMkd0d0SDc4%2BW3e62ZtcsTZLAd8fcjWtVHoeRIcsnezyUGq%2FLo8wURzrNBLguY2amKxHH25d7qoZGxi1YV%2FLlxB&X-Amz-Signature=bcc881314c973adfd3d3517a40f05231354035b92ff531a2fb035db931379387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIWELGZL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKddr0RNQI9p2A%2BHaCqBQr02bnxfHI%2B1AzC318Obq5fAiEA%2FDvC3KzwI%2FZkac3ZnCabtvMC4NnXy2J73c2Avs%2FqqzoqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwMkhp1su%2FjowWuKyrcAzax1q5qEg7w7nk2bhVAkiw%2BXaH7nZp%2B%2BCRQJlIbMmYPsZUYS1StRsmw%2FOCF6eQGI9s0eJbNM3QD4dVq0x8nwD4JOKUovUKLqYFPwYZkYBND4y2Hd3GijSQcZUDTrRz2LmweP0T8DT3VdUMzAXc4drzPJsZG7hlFxDGrTzjG91nRLRm5qH3l87BRmScVmKU8qK2c5%2BQsp5QYyovE90arvvHj9MZ8ol0%2F%2B2rXfyMsUSNfFi68XMdPdx4s7kzjapFh1ocAc%2BeeoQs0gOt2m%2F6CnKDofajyYLx4MDlx2bHuFBk%2FoHc8nr5Fre4hQo1dOT3vi0kLEqQ%2FOQHvSCWx7NLUu%2F6EXBkvbshvmkATGATmDxmjUMV5GaCFY3RboAnzl1qxczrgSvMDoDVv4NcWS0nq3ZmZoOLzxBIDo6GC%2FKdkDOn353L%2F%2FpEiexH3LdxZZK1SZxLKyVcfCmLN3bZGjBSQ6wI2%2Fou52Dj8EDt4aj6ct64SA2WYpBl5bK5zyhqlKqO9keuiBXUoSv%2FbYlQKYZIguBrSs54UgtAhcIMBr1yZ0p1UuzV%2Fnm6lfiPZIIJXL38hlrV5eRtWf9tv4D%2F7MGgC1tt8gherbSBkpgzMt2yEJqYVBe7qtFPHYQeksq6DMPiRssQGOqUBy5I%2FNFLrGtWd%2Fzd0FKqyeSWpbxAcCOOVvsXEqS%2BVsyHCiXeaevopuUef70bEYdRRZ2YU0pv1qFOFPWD%2BGxvnoS3GdVJXdPlWLGh1wbjLjTiM0GH7hXmuaGzy93qUCPY748uSMIm0Z2laFjiQnog%2B6jIJk1BAvGLeSSvlZRfewbCEFqkqkJNppk99V75sJSW%2FGEkMdQHBXnqxW%2B6%2FMWng%2FHINdney&X-Amz-Signature=aebb79677ecd691468bbd67fe3b66c061a2bdb2955da87134754ac779b58c7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=fb3c286fb1dbcf6d790ac760d77fc9f292545fbb5c915e1741f5aa07b4efaaf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=da7ab56249c7ebd9f1453fa0128e767625c5d3d63c6afa356a6c56ad5c7ba195&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=3946c2fe1167ce69f0ced722d9e0273b9da606a52c0795f83dde3d452c5278b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=f9f4db2b4c208268ff810141bd222797a556193a5a38e088d02cdc77750ceffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=c5acda6ba6a24e589052c91076dbf48df17c7ea347c3f4b5ad7f4dc55b741ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=599c308be2312b8d35a2947ad73b105486a380f1b7a3b5b9da6be0723121053c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=1e5cadd8673b41d28aefe7c510827afcca0129d9a02f104cdf366006cdac81b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFDBDHN4%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBORv45FX8rKe1aNvCkO%2BjBhwWHI53HJY6HoohvXVqgBAiArPP%2F9vbZG3Mk%2BEokSfhJTuPMw%2BeyTrthdZSGTWJu%2BiCqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMU4bGX9OckD63hP%2FRKtwDIhA9hnvwbwAHz4fqvuuUSUlYMQaX4HN4kFmPGN0oAV%2BtDEBErpcumYlLJtg4EGVZE5%2FCbJiw5XMQVK6q6vWP7rRkj1I3GIvTBYSMOHNwq%2Fw7mj0EBdSyW7jfrUstZ5LQaZuYT0BqeOqntvwHyC2VKo%2BZiBT48NoCSaNlfcrE3v1KS43ipJBKoNuF4me%2B%2BF9NBD7HMVEqYQrtTV1CDVwtmHYSHQXlyHvaQ%2FSqTu3TfkBzWgoliQziVMp5StCT5JY9kijYnwzbDyssmtJQMDjTvqEKrte9fIxIOdX8tKaGPSql49DgZK9N0v6jjmicnMhH6t5qPrtJdvSA0WVL3xR6PmdrbeNTtjVPH65CJ3HE9haC%2BMqDMQbtbMQ7pOyVUMobavG0mGVRqpGq7WSD2kZFy4SPKtLeA1hZ%2FKfAiW0%2B6q%2BJoDM7Xss5L7V%2FsQFJSQkl0FqtCWe2NfERfBoK0RqgoXf2X0YYDE9IdKFaW37YqodKwXcnnB615lZUpIbo43p5Hgwsfkwv5kQPmyumMmScafAd2dgqOn9WZ2UgNjjapSRfZQ6ioRnyL6CuJwEV0GI1MPbepEONKYWgnoUmoIRzq2rux4%2FcBs30laI1zp9U6W35rlSCMQOWaI9XX%2FMw4JCyxAY6pgHpaSjXTWwtNdw6mlKoUswfes6vbs9Qx%2BnP9%2B6on%2BYis4NltpHbbe3qTT8A8jEUV8UN%2Bo09sGPK5yyCLuBxO8VX%2FCjMDJwHQWN1L4uRTuwh8ZaSj9OIJLvz91liRe%2F3Nw1M0tRcKJyCpEScvcPHsK4sVsoFFN1CkRbX5z41ajjC%2FzGncwLtc8Q8Z2akHOoZWG7n0dNn322GEOLm2tqENoSl5TxCH4V7&X-Amz-Signature=1859cbacacf6d240b57d90dcef041fdb3a499a47f6df6a63164afd515c2b9d83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node
