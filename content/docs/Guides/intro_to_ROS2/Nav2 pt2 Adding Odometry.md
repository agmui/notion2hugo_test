---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=6ec8146e2e92a9aaa07c5466d828e21f82d3dbbd7d6945e000099c6713f40ba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=631ecc012dde973b056d50b4cdb24970693fdac0df203218ff5397a4ee568fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=0cf046ab0a76900296ccdabfe930ec581b6537c87adc7c6526f06fddac544344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=d8d8a059bc5b1ea76904f1c451bb2777598cfd52468c7bd155e4f71bce9a00a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=cd2468b0a81c93dc1303dde6bb3b4c0db6e6e19e7268717e8d618b9f43a882cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=baca8eb77444ff635f276b6f24c350ac3f49148e332327660fce653ca8fe66f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=1d330f658118bc7f6da5cf32a662a59b80b9d53712a0b83c81c28ad86aa54543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=e2893ea9a2eb9ea836ca6a3ac11d89d1db5a4fff71224e836b17f7edfa85eef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=59b82b2640adaddd7b66b5dd82d191d903296575fd558ed452aa3ea302611222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WQVBCZ3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDUo%2BiqOOOLoRFAfDbVCdpD53vhNm8bWOmBcBLZ5qI6AQIgI6iWkuC1YCspwrl9XRpqOnPXNnuP9%2B2u%2Ff9il50SB6Mq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDOSqqU4aaASjtUot0yrcA7qKrbY1S9F%2BJE%2Br0NOJxRIHSXuBesWcvcC%2FXa1JByYsdyFtl1gej69NUWgyhexF26SvNARRsGqQM1mCVq84w0nqWrqzvA3m8yP%2BE1BkD0lA%2FxaZLS2WMHK9EzVQaSELnX9AIXqE34LQ7zGFJkJ4QZC%2FlqEZPDgEuyI0AZtokVmeszS6kZ%2ByyfNQ6pDP2jaAHQkLiNiGsvSfzUu9ewq5mEUhZQKFvUG8cifW92YlekSF5TZ8yULC3p%2BnsmRHBzuBbu7BQU1fcyd%2B98NssPI1g2fROvfUF2hMF67egfssaUNVD20S0kt3S7rCIAXv722Dt2Znau4VGU%2B4nmowlwBUtlnYCOTEzw1oqWrkFpd%2FXYc8egn3KKkfDeWu0iDJX6TRo5pBRKojHZv85j5yhcTBHOVPjUK9gpdHpBfoMTYWtZd7KoG5vxtCzsuEOb18DN36R1Ce7kMAbeWy%2BY0V38s2Bgw6iZ%2BqR7gCJ2fOppl31HIgCKQFy6054zgiZ07OtBF6%2F%2Bndel3QZ2DZfx4zaXmA172NpuevJ2puu4UXQb%2Bdex0J5GQVpgf%2FX%2F6AhRkGeOx%2B1NT%2FJhCzVhMRBC1RTEyC1XvMC551pOvKQnF8lVQGcawhtUr4st%2BaARkoh5SjMK2GjsQGOqUBs%2BdIpBTjCCrAOzZdg5ftuO7%2FS%2B321VyvpvO1QXv9Dsot%2BAgvwhz8Rsx3sMjXbyQdcmOYiQi90pHC12Yy9EHPcdvMkeN6Vk0fo8jRP19ve1ykjzOVO2mz6xkb3qyJ75lYKfRcYrncKdZWa%2BT3%2F2w6fVhYBw32KBclW8hTMRkLgBbXyMYTGKd76z%2BMM6zoU%2BgfQDWGL2CA137sQAsZIFWdd564FoOy&X-Amz-Signature=a447c49485c18716e92b21a1ca0161ab3048f3cb39984adc3cce6f860a5c9081&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

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

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X23FG24D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCzLDr5DWSKt%2Fy9UdkfCiKCcJ28DBZi6zd4rtWesVOVkQIgD%2Bu%2Bt2D0MXBoyldopZs0JBc%2FgtVNgwWdH86Iz5PP4%2FEq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDMv5gQgSKq%2Bqw%2FcX0yrcA0OLCs9n4c1MW4SAjmYrV2Thvph1gyTSmb9saKKK7p31qSUKm5cVp09u2lP7ymIP7UcZzmE%2BjPmmsNcChb%2FxDFnFYLZ8X56SEpwQOeTmkrZYo5C0%2FGNfd5wrOJ8J01LKMgN4J3oA0T4R641veq7dstqENRyySheWKOvoti65C0T4exTxmPgzq50KmXaSHy2x1lauLMclRmaD23A20nCL4p93AueJ4gQNLzT9OlxwHgwqAch2XOA3u1jXaxHVRICRpvTgc29YPmuRUT8jv3te2fiXshejI4Ex1rJN4noQohPPAloJDTdTA3qjVyd1g0otMd9CVeUIHUEbla3Ut9MJTQEHU6d5BLdPNe8PmwFVgHjlYpzbwUQbAQPMfcZg48bGAY%2FwkLGdC2QsGMcfpBDPCRBhAAqGIT%2Fr7r1aJGoerpKpaYB48XTsz1M2e%2BZy%2FxBkvt%2B9XYQjHWMc%2Fsr3tB563f1y0xP3bWRM5jB8yndzhT8R36Zqb7zwOVgr2VjnBbwNd7Y9bt7sktCqbhkjf83c%2BgQW%2B8KQXLKmFof80KhRCFlOSP%2F25ENx9GuQkOGzBSO2CIeW9SBiRRc9XYAlBQ%2FQiOuOMUlPsqW4bMOWSXSv5o8iFQg4MK0yCoywl1dIMNOGjsQGOqUBKwahJ84Ku2s9OFbL7n7%2BaKX7Lkme3YDLxagZNS38AdOxMqdXe%2FjAQndVSvkgE%2Fufg1NHzdtrosOWR9P8Ohjzbn3aHX3ba5GiH7GsOGhf%2FcnVenJoWm1j%2BHT2glbzogxrS%2F9lKjLnnr2utGCMU6u5qeIwfkDkBMbwHALwJkTqPDb7BnjtFPNwKq8FGxXb8eepKeg1Q8c%2BPUszB2tW5x7DOXXJey4C&X-Amz-Signature=46a73d2b5727e3f6333ac968a5cc1aa417efcc6d855c40d0a96bfbd68f8dbd63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRAZ655%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAcrd%2FFglXHxxGOLxygu4dNyF5AKW%2Bc%2FNjsSm0Jo%2BFGGAiEAzkMMB3uGu%2BctlEUO2xSOqK0gAXv%2BWq8d0SFHIDyF%2BB8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdWE5hIgoVrbZtpbircAy8Rta%2BFTDYm0oU2Yl8iGwlBpJ%2BrKcc4b%2BO1n9MMGW45c4MKWZ2iNf%2Ft89N4OjoLFeqioNo%2BCT%2Fj5bxsEZXJRW4GMwGafHzHNTpw86hD9ukf8HhpBfNn%2BPcVvdiUcyunjzp9X%2Fq3pVRFZscKRsoaDSEI%2FqzDPRxUiwLP1jd%2BGczMVa3k%2FUtHRrGDzvcQrKN8Bb%2BbMsncLg8%2BXJGiANLHZClbHkiJR6FWCFtodvye4rin3bb5nAzAidxqJQJ56VaNBMcCpHGZPafVELTb2nVM32erebOK9QtW0vVc7MZweHB3eBwvZzsqTtOLBjSDaEv6HCd4dxsPUQM6tXKJcYMb3mMd8QVAF0C2oIFQI%2BLspziNVTCFf9KfnKQc%2B78xVXY2mjWjHYSl3UzSWJVh3FW4%2FQCAGRvSiM2ae9HN3MndLb6yCUe87ypLkWyauIU96clUyIZ%2FfczKbITUvkkAJpiEHaX%2FpSohlGJycEDwcaBSQ%2BCXCeTWq6q%2FI3FdTZRXDMijClJrSl%2BXA8EIQXjEIxdKTv3i0zegmnrc%2FPS8vK4DsBncbk6soFsV6ucDscDviidnTRxYyMCiMgQAAbyQV%2FV%2B1IHD3P4MT6AXOSeo7wv2mqCHQjUzW6I6esS23h1aMICGjsQGOqUBeANSUgjlG0tnP6fBaa58nUb3cvDg047MwalgdZ%2FNawAfiXuC8iU%2B4vU%2Btvlt%2Fe7YRVG8ieylTDoroNIE6nt9J%2B1gPZVqkNigygOjEsq10jqbvdrZRf1OrKPvkIutYJyGLkX%2BVx4xCuWnV%2BBtNpAplv9QWUX44P8zOTkA8a8p0tiQ6wF1eVunzh8ZOAcPOr0KDfs7KhNa5HUcMcmBdtmZ%2BlQ093As&X-Amz-Signature=0727c05b688ecd41af6a71cf4ea84299b22d0862c77781cdf4b42c47d27e95bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRAZ655%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAcrd%2FFglXHxxGOLxygu4dNyF5AKW%2Bc%2FNjsSm0Jo%2BFGGAiEAzkMMB3uGu%2BctlEUO2xSOqK0gAXv%2BWq8d0SFHIDyF%2BB8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdWE5hIgoVrbZtpbircAy8Rta%2BFTDYm0oU2Yl8iGwlBpJ%2BrKcc4b%2BO1n9MMGW45c4MKWZ2iNf%2Ft89N4OjoLFeqioNo%2BCT%2Fj5bxsEZXJRW4GMwGafHzHNTpw86hD9ukf8HhpBfNn%2BPcVvdiUcyunjzp9X%2Fq3pVRFZscKRsoaDSEI%2FqzDPRxUiwLP1jd%2BGczMVa3k%2FUtHRrGDzvcQrKN8Bb%2BbMsncLg8%2BXJGiANLHZClbHkiJR6FWCFtodvye4rin3bb5nAzAidxqJQJ56VaNBMcCpHGZPafVELTb2nVM32erebOK9QtW0vVc7MZweHB3eBwvZzsqTtOLBjSDaEv6HCd4dxsPUQM6tXKJcYMb3mMd8QVAF0C2oIFQI%2BLspziNVTCFf9KfnKQc%2B78xVXY2mjWjHYSl3UzSWJVh3FW4%2FQCAGRvSiM2ae9HN3MndLb6yCUe87ypLkWyauIU96clUyIZ%2FfczKbITUvkkAJpiEHaX%2FpSohlGJycEDwcaBSQ%2BCXCeTWq6q%2FI3FdTZRXDMijClJrSl%2BXA8EIQXjEIxdKTv3i0zegmnrc%2FPS8vK4DsBncbk6soFsV6ucDscDviidnTRxYyMCiMgQAAbyQV%2FV%2B1IHD3P4MT6AXOSeo7wv2mqCHQjUzW6I6esS23h1aMICGjsQGOqUBeANSUgjlG0tnP6fBaa58nUb3cvDg047MwalgdZ%2FNawAfiXuC8iU%2B4vU%2Btvlt%2Fe7YRVG8ieylTDoroNIE6nt9J%2B1gPZVqkNigygOjEsq10jqbvdrZRf1OrKPvkIutYJyGLkX%2BVx4xCuWnV%2BBtNpAplv9QWUX44P8zOTkA8a8p0tiQ6wF1eVunzh8ZOAcPOr0KDfs7KhNa5HUcMcmBdtmZ%2BlQ093As&X-Amz-Signature=e75bbc59be4e9838070059b7005f9ee989939d9fcc392ab55ae3a2be313303f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRAZ655%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAcrd%2FFglXHxxGOLxygu4dNyF5AKW%2Bc%2FNjsSm0Jo%2BFGGAiEAzkMMB3uGu%2BctlEUO2xSOqK0gAXv%2BWq8d0SFHIDyF%2BB8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdWE5hIgoVrbZtpbircAy8Rta%2BFTDYm0oU2Yl8iGwlBpJ%2BrKcc4b%2BO1n9MMGW45c4MKWZ2iNf%2Ft89N4OjoLFeqioNo%2BCT%2Fj5bxsEZXJRW4GMwGafHzHNTpw86hD9ukf8HhpBfNn%2BPcVvdiUcyunjzp9X%2Fq3pVRFZscKRsoaDSEI%2FqzDPRxUiwLP1jd%2BGczMVa3k%2FUtHRrGDzvcQrKN8Bb%2BbMsncLg8%2BXJGiANLHZClbHkiJR6FWCFtodvye4rin3bb5nAzAidxqJQJ56VaNBMcCpHGZPafVELTb2nVM32erebOK9QtW0vVc7MZweHB3eBwvZzsqTtOLBjSDaEv6HCd4dxsPUQM6tXKJcYMb3mMd8QVAF0C2oIFQI%2BLspziNVTCFf9KfnKQc%2B78xVXY2mjWjHYSl3UzSWJVh3FW4%2FQCAGRvSiM2ae9HN3MndLb6yCUe87ypLkWyauIU96clUyIZ%2FfczKbITUvkkAJpiEHaX%2FpSohlGJycEDwcaBSQ%2BCXCeTWq6q%2FI3FdTZRXDMijClJrSl%2BXA8EIQXjEIxdKTv3i0zegmnrc%2FPS8vK4DsBncbk6soFsV6ucDscDviidnTRxYyMCiMgQAAbyQV%2FV%2B1IHD3P4MT6AXOSeo7wv2mqCHQjUzW6I6esS23h1aMICGjsQGOqUBeANSUgjlG0tnP6fBaa58nUb3cvDg047MwalgdZ%2FNawAfiXuC8iU%2B4vU%2Btvlt%2Fe7YRVG8ieylTDoroNIE6nt9J%2B1gPZVqkNigygOjEsq10jqbvdrZRf1OrKPvkIutYJyGLkX%2BVx4xCuWnV%2BBtNpAplv9QWUX44P8zOTkA8a8p0tiQ6wF1eVunzh8ZOAcPOr0KDfs7KhNa5HUcMcmBdtmZ%2BlQ093As&X-Amz-Signature=699de82e8a6a9346cfb67dba4f0fdd6cb067894163f3003e7420d081edec8cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRAZ655%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAcrd%2FFglXHxxGOLxygu4dNyF5AKW%2Bc%2FNjsSm0Jo%2BFGGAiEAzkMMB3uGu%2BctlEUO2xSOqK0gAXv%2BWq8d0SFHIDyF%2BB8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdWE5hIgoVrbZtpbircAy8Rta%2BFTDYm0oU2Yl8iGwlBpJ%2BrKcc4b%2BO1n9MMGW45c4MKWZ2iNf%2Ft89N4OjoLFeqioNo%2BCT%2Fj5bxsEZXJRW4GMwGafHzHNTpw86hD9ukf8HhpBfNn%2BPcVvdiUcyunjzp9X%2Fq3pVRFZscKRsoaDSEI%2FqzDPRxUiwLP1jd%2BGczMVa3k%2FUtHRrGDzvcQrKN8Bb%2BbMsncLg8%2BXJGiANLHZClbHkiJR6FWCFtodvye4rin3bb5nAzAidxqJQJ56VaNBMcCpHGZPafVELTb2nVM32erebOK9QtW0vVc7MZweHB3eBwvZzsqTtOLBjSDaEv6HCd4dxsPUQM6tXKJcYMb3mMd8QVAF0C2oIFQI%2BLspziNVTCFf9KfnKQc%2B78xVXY2mjWjHYSl3UzSWJVh3FW4%2FQCAGRvSiM2ae9HN3MndLb6yCUe87ypLkWyauIU96clUyIZ%2FfczKbITUvkkAJpiEHaX%2FpSohlGJycEDwcaBSQ%2BCXCeTWq6q%2FI3FdTZRXDMijClJrSl%2BXA8EIQXjEIxdKTv3i0zegmnrc%2FPS8vK4DsBncbk6soFsV6ucDscDviidnTRxYyMCiMgQAAbyQV%2FV%2B1IHD3P4MT6AXOSeo7wv2mqCHQjUzW6I6esS23h1aMICGjsQGOqUBeANSUgjlG0tnP6fBaa58nUb3cvDg047MwalgdZ%2FNawAfiXuC8iU%2B4vU%2Btvlt%2Fe7YRVG8ieylTDoroNIE6nt9J%2B1gPZVqkNigygOjEsq10jqbvdrZRf1OrKPvkIutYJyGLkX%2BVx4xCuWnV%2BBtNpAplv9QWUX44P8zOTkA8a8p0tiQ6wF1eVunzh8ZOAcPOr0KDfs7KhNa5HUcMcmBdtmZ%2BlQ093As&X-Amz-Signature=b339f4aa5b9b32d85619491768aa0046a57b1f8640d1fe8064b97a66a7fd3241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRAZ655%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAcrd%2FFglXHxxGOLxygu4dNyF5AKW%2Bc%2FNjsSm0Jo%2BFGGAiEAzkMMB3uGu%2BctlEUO2xSOqK0gAXv%2BWq8d0SFHIDyF%2BB8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdWE5hIgoVrbZtpbircAy8Rta%2BFTDYm0oU2Yl8iGwlBpJ%2BrKcc4b%2BO1n9MMGW45c4MKWZ2iNf%2Ft89N4OjoLFeqioNo%2BCT%2Fj5bxsEZXJRW4GMwGafHzHNTpw86hD9ukf8HhpBfNn%2BPcVvdiUcyunjzp9X%2Fq3pVRFZscKRsoaDSEI%2FqzDPRxUiwLP1jd%2BGczMVa3k%2FUtHRrGDzvcQrKN8Bb%2BbMsncLg8%2BXJGiANLHZClbHkiJR6FWCFtodvye4rin3bb5nAzAidxqJQJ56VaNBMcCpHGZPafVELTb2nVM32erebOK9QtW0vVc7MZweHB3eBwvZzsqTtOLBjSDaEv6HCd4dxsPUQM6tXKJcYMb3mMd8QVAF0C2oIFQI%2BLspziNVTCFf9KfnKQc%2B78xVXY2mjWjHYSl3UzSWJVh3FW4%2FQCAGRvSiM2ae9HN3MndLb6yCUe87ypLkWyauIU96clUyIZ%2FfczKbITUvkkAJpiEHaX%2FpSohlGJycEDwcaBSQ%2BCXCeTWq6q%2FI3FdTZRXDMijClJrSl%2BXA8EIQXjEIxdKTv3i0zegmnrc%2FPS8vK4DsBncbk6soFsV6ucDscDviidnTRxYyMCiMgQAAbyQV%2FV%2B1IHD3P4MT6AXOSeo7wv2mqCHQjUzW6I6esS23h1aMICGjsQGOqUBeANSUgjlG0tnP6fBaa58nUb3cvDg047MwalgdZ%2FNawAfiXuC8iU%2B4vU%2Btvlt%2Fe7YRVG8ieylTDoroNIE6nt9J%2B1gPZVqkNigygOjEsq10jqbvdrZRf1OrKPvkIutYJyGLkX%2BVx4xCuWnV%2BBtNpAplv9QWUX44P8zOTkA8a8p0tiQ6wF1eVunzh8ZOAcPOr0KDfs7KhNa5HUcMcmBdtmZ%2BlQ093As&X-Amz-Signature=79c9340d9aefc4a24572d5a8efad414e081b4d839b72e1efa3ab280289da1368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRAZ655%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAcrd%2FFglXHxxGOLxygu4dNyF5AKW%2Bc%2FNjsSm0Jo%2BFGGAiEAzkMMB3uGu%2BctlEUO2xSOqK0gAXv%2BWq8d0SFHIDyF%2BB8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdWE5hIgoVrbZtpbircAy8Rta%2BFTDYm0oU2Yl8iGwlBpJ%2BrKcc4b%2BO1n9MMGW45c4MKWZ2iNf%2Ft89N4OjoLFeqioNo%2BCT%2Fj5bxsEZXJRW4GMwGafHzHNTpw86hD9ukf8HhpBfNn%2BPcVvdiUcyunjzp9X%2Fq3pVRFZscKRsoaDSEI%2FqzDPRxUiwLP1jd%2BGczMVa3k%2FUtHRrGDzvcQrKN8Bb%2BbMsncLg8%2BXJGiANLHZClbHkiJR6FWCFtodvye4rin3bb5nAzAidxqJQJ56VaNBMcCpHGZPafVELTb2nVM32erebOK9QtW0vVc7MZweHB3eBwvZzsqTtOLBjSDaEv6HCd4dxsPUQM6tXKJcYMb3mMd8QVAF0C2oIFQI%2BLspziNVTCFf9KfnKQc%2B78xVXY2mjWjHYSl3UzSWJVh3FW4%2FQCAGRvSiM2ae9HN3MndLb6yCUe87ypLkWyauIU96clUyIZ%2FfczKbITUvkkAJpiEHaX%2FpSohlGJycEDwcaBSQ%2BCXCeTWq6q%2FI3FdTZRXDMijClJrSl%2BXA8EIQXjEIxdKTv3i0zegmnrc%2FPS8vK4DsBncbk6soFsV6ucDscDviidnTRxYyMCiMgQAAbyQV%2FV%2B1IHD3P4MT6AXOSeo7wv2mqCHQjUzW6I6esS23h1aMICGjsQGOqUBeANSUgjlG0tnP6fBaa58nUb3cvDg047MwalgdZ%2FNawAfiXuC8iU%2B4vU%2Btvlt%2Fe7YRVG8ieylTDoroNIE6nt9J%2B1gPZVqkNigygOjEsq10jqbvdrZRf1OrKPvkIutYJyGLkX%2BVx4xCuWnV%2BBtNpAplv9QWUX44P8zOTkA8a8p0tiQ6wF1eVunzh8ZOAcPOr0KDfs7KhNa5HUcMcmBdtmZ%2BlQ093As&X-Amz-Signature=5b7de81b529529bb1924d4ebf17923178edb4db81faad1187ff4ca3ef6a7fa7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRAZ655%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T151004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIAcrd%2FFglXHxxGOLxygu4dNyF5AKW%2Bc%2FNjsSm0Jo%2BFGGAiEAzkMMB3uGu%2BctlEUO2xSOqK0gAXv%2BWq8d0SFHIDyF%2BB8q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDJdWE5hIgoVrbZtpbircAy8Rta%2BFTDYm0oU2Yl8iGwlBpJ%2BrKcc4b%2BO1n9MMGW45c4MKWZ2iNf%2Ft89N4OjoLFeqioNo%2BCT%2Fj5bxsEZXJRW4GMwGafHzHNTpw86hD9ukf8HhpBfNn%2BPcVvdiUcyunjzp9X%2Fq3pVRFZscKRsoaDSEI%2FqzDPRxUiwLP1jd%2BGczMVa3k%2FUtHRrGDzvcQrKN8Bb%2BbMsncLg8%2BXJGiANLHZClbHkiJR6FWCFtodvye4rin3bb5nAzAidxqJQJ56VaNBMcCpHGZPafVELTb2nVM32erebOK9QtW0vVc7MZweHB3eBwvZzsqTtOLBjSDaEv6HCd4dxsPUQM6tXKJcYMb3mMd8QVAF0C2oIFQI%2BLspziNVTCFf9KfnKQc%2B78xVXY2mjWjHYSl3UzSWJVh3FW4%2FQCAGRvSiM2ae9HN3MndLb6yCUe87ypLkWyauIU96clUyIZ%2FfczKbITUvkkAJpiEHaX%2FpSohlGJycEDwcaBSQ%2BCXCeTWq6q%2FI3FdTZRXDMijClJrSl%2BXA8EIQXjEIxdKTv3i0zegmnrc%2FPS8vK4DsBncbk6soFsV6ucDscDviidnTRxYyMCiMgQAAbyQV%2FV%2B1IHD3P4MT6AXOSeo7wv2mqCHQjUzW6I6esS23h1aMICGjsQGOqUBeANSUgjlG0tnP6fBaa58nUb3cvDg047MwalgdZ%2FNawAfiXuC8iU%2B4vU%2Btvlt%2Fe7YRVG8ieylTDoroNIE6nt9J%2B1gPZVqkNigygOjEsq10jqbvdrZRf1OrKPvkIutYJyGLkX%2BVx4xCuWnV%2BBtNpAplv9QWUX44P8zOTkA8a8p0tiQ6wF1eVunzh8ZOAcPOr0KDfs7KhNa5HUcMcmBdtmZ%2BlQ093As&X-Amz-Signature=d45cd1d73d04a4ddd04b66d6a765af7884304389e5c2de57604a12ae8a101226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
