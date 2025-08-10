---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=af7c10cf2e33b3218fab5aed35c767e42dfe30537ed51401d2858070ab57ed5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=df26c34b037cfe10f52798a503e4510e1d6774476b14842bc51f2c1a4ba9eed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=f51c6d31b0229ca35e66aa9973deb6c12d284c7e87d63e7741ab5f5dbb443885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=5e01753d29b67f8fdb82e01e41ffaa69674d48c11f3d51d6ea9b05efd5163e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=2e274aedf1ec5dd6375e06eaac2d9611aae60814ad1b7248754259747905ff33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=3a69b5ba9172b53c35149bf3cf0251789f041fbc82265bbafbccf8554e5d3d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=1ef772783d286ec767fdda1b630c2e9e593359c738ebefc0a2e4b10e909c1309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=af680e42b33cd488f8cc31984d6060b7716a6bdbcd05483c7251d83806bee460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=c50762de73304b60de1bd31f4b33606ee7a3186f46977728ae1c6a9c1cbe8878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRBXURVX%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDV%2FlFe5SJJlNDwqHly0jazVKEw3NBaimjack9m7klwHAIhAN0AOecT%2BJq5iKPdxlEc7oDmYxrhsQgWk05DTTyyIUTjKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvxjoC%2Bal604v8BLAq3ANdWL4n9E64vvfcarxdl8y56EUd%2F9k4z1Wc10ztyZ7Wq6rd2BhW%2FBhdgRAUdz%2BlZrR9IPeKooOe981LSPB2T2wcZPxBw4AkJnczZiwjU31WgpixI6XsbCA2V8t4a9J5TcBF8fs7%2FB9q4d80I7GDywMxWE1kMwA7h9GKJjGbbcC%2Bi%2FOLSugZQ9MkxrBmMEn9qTERsjyYF10%2F0qZp0MV%2Bco6PaVZNVeUknSnBo1VCGz5je5RJo%2FKcC7Lwuwv3r9PkfbW4ZAWiO9iY2Js33C2X%2BJA%2BCeDa8aojfAMdRyN2n8pfVaFDVIWldpW8aMuY%2B5n6J51NNFeNEVFfS86umMywiG47y8y3%2BjFUiaZjLgIz0y4KR91Q0qVl57kk%2B2iWm5PRxVLiLosACKFkCggObVVyu96hGNN1fyx8BEBhfKBYAVoXwx3YE4B5eYiieLsf39sue1y7wNGWBudin7VEFNN%2Buy2HhXtdcR4eDglXeAGCXTlM3STS4K%2FemIOIyoWM5gV%2BE8a3i5x%2FyOTomxZbx8jdACZ84KJhdV%2FCePUD64KwQx9COzhxQ1NyrDATAC6mqxsnS2qybtYUpWibR7fQ%2FenI5aedrWuiXLntyN3NlVjo%2F0MI601v%2BurpV0CWzizitDDk9eDEBjqkAdDnP12ekk4kLIF2qaBT0mPc7M0zBwnhrUEGQm1Pbv8neWEVqIGymO7QCgM%2ByJkreBOOhH1Zeb3CN6NOmjaqHay33jkcUS4nLBXZyfPy1ORBXs0TacRqTQ7qMq1r4wd2fGTkqf3cLtfFYPCDLkTqwsgWpToExVjkkajVhwdB2q3XVBiJvPo0Ia3H%2Fhvkztgv0nZnHELYqzgzlgp3xyg2Y%2BV%2Bmg7d&X-Amz-Signature=baadaf6ecabc14b64e5244a7acc87a1de90632b8fb5f07e62ebe3b51a993e43d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S4PQHOPZ%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEtDRH04aS8mXBdfRlI%2FOu2faD4vNdBy%2FYLKYIhjkcZTAiB41KS4PYGnVsDReVvM6ommXYRo%2BC%2BiPhI2a%2FEBnGcw8CqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMReRCWFOo5%2F7XW4SbKtwDHFYgjAtbFWRoubRLEDsohEYUcnqLRfKnCWq5gQ7DVrH5Lts4wgt05M6pqjsq7WO%2BvY888h4VnQ7UgGkFt23rQnDVYBW8UoXQs6KCcCBdF6NAFoE5SZ486YVBOc4QNdD7wGaitBdKuL%2FIZMZayx4UrcnTC4Tp85uRbQz%2BGeqbhpGLk%2FBY7NdBJZuptYm6x4SESVp%2BIvPejl5i6Xjc3w54bbk%2B07rLz0x%2BckP4zMkkvlWN69alMvclCvDrEDs%2FTp3HzJRUB6rFuJpGgfctiP3stvtLtZaeeV5y2R7c1IFUa%2BSEfhVxKAPEPZmrwg1M2S56IE%2BY5f7lPw6vuTz5UFNekNo52EoumsMka3d4pvlEr2Xc05q1ISEyqzTGsqjgUcGwnNhlobcao8PuZPfgWBfMDyrNGz7iFcj%2FA2fS7hQ%2FfFbPzvXNCfQ2JsjhadDQ5UQ3lmN%2FrrNrunqrMW6CqNuxJBwE8b7qRZyT77Ith0jZmk2Hgax%2FsctrwabTBXywYUg9zitqdgl2qL0OZwWSBl6NwcvMuZAasf4CFJiMzCxD6zVJEe0KwYpb8sqOPYMIFYHE821oDPpx6rzYSot9a5kTi%2FbFbTW6itnUdEzvngf8FxZnShEli8sRCtG2xo0w%2FfTgxAY6pgHVBrzRkQLy5Cr%2B7RcLxkfdYz8aYhfWyiOINd9U9VvzusOAjyNuCmIIceo5miy2utTxrqC3kb8HcnRCoJbpmf9GKobjr6C3j7EmCuPT%2Foghl%2FYNemPzcI0Gv2YOTKGQy7nI68r%2BXKncHBRpIZXGqizzYxOFSS6oTgx5fSBjuMypMcRQascyI6Esdpc0jKiPSebwF5z5YDHpRf1t7uULKFQXIaayUzW5&X-Amz-Signature=dad49dcdcbb0f3159fe22417d0c46db1f3c17a4e212a328cd8a230a37940b94b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=e47c49ad3650c0f092aebef56564336289038ddc9fa48565c1b47d2be52de89b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=746d350e7789da254d00a9ae356afd45e11bd66070091cb32feefbdea4a6e4f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=604c3fd5edd3a16d0431fa1f1683daf181921cbb6615d6ba048375f5e3097000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=36b93714549cb5fd7529b3a9306491bb4fcabbf7eb11c239f572c21b520a5ee2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=59a88150fcdf6c3893875411f26ace423b6df070540725b33791d8878608d8a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=f88c66109e7a21fdf66e58f2360c75c70de0611a0a7eec6424b3fafba98fc040&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=cdbfa903c4f9cfa6829f9eb7d391333baad1bfd83fb32e077138c8d72a8dd4aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=37d08f4d0595134d117d72eabb2f345938bbbd5d8575df49e3ab60de71337f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UV7DZF5%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvto2bHtBNEC1EQsWY2lT%2FaKcbS76cfgWXZ2wiDoGKjAiBKIXzViqPKAmB9D678ZJR3P9pZnOn5ZTWA1M9kmAI3MCqIBAjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM01fmPtvjh4mYIeg0KtwDjrm3Tz7%2B0rEg7c5nbUT4cs1vq0qCHpuKlnX1f96f%2Bv8Qu1U1f96f2uNukR1stbtgrwX%2FwcJhhMlKthv9FQ1j3ggLh9csCjXrD0GQfWzaZgBPx5RNwYJyhWy9%2FwRsosqavjBQWEFzPci4fDyiq7UVb5WLBfSPnyYcGF6jzzCaxmCYnYbjSdYLUVxYC9MKCXZ9UVY2otlp8xAJg13KHdkzGzeH8z%2Bf5YP3gjDGZ4SZR0Vugaq%2B%2F7fCbdX7tXhkNEFWdICDQpsjwYLEfjMH%2FT5jP0HFlmlVae4lRIpv1eF4No9eeuIw6UjXG30RUYV%2BxkHkv1gRf8Oz44uIbUEsqWHYSJMxq2C3DpworjMTskyByv6X1i2aFwDa1C32DYrT%2FJ5YyInyjcz9deu5DmkVIsw7X76UG5AS0VH7CcvZPNxo5gyBhcX7JZyn1xN%2Bx7wNOblpdLOnI6Quo7ULfN2%2Fycs4TkfCY1QQKmKOPFhkL5aFkvSxGeBXNhE8XP7uj6UHlPNbskEdGwN%2BOKjy%2BEi4b1Mtd224%2FBhQFTne34N1FuzHv2Scyu6CAsHDwXee3so6NAeg7L9vIzliX1otccyH8BoNhvqP5ENRZNTaefnYtBD37x4PTkd9n6H3jhJVhkYwnfXgxAY6pgEipOzr6ldqNQaHfp89sDyNOI8H1N0Nsa4LPDqQNl6881UyKrW68rBlpMaX%2BEW7916D7sCOdNTmzuyT8q7mgt2COaaSxod1d9GLgTUklRpY1I7XVPDpTUYDViYwj8lhrFBbiVXE4Ri%2FCcTarKJD%2BMxfTCVVzCaF3qNT%2BRltjPBJXrEK%2F0MqOTbX4V3J%2BswI7Ecz3q439SPs1B8ZiDo5%2Bx4U%2FTqg%2Fd4h&X-Amz-Signature=f7c65c3d41875c94ff32651035b1821d4d31f4e35334b8907d09da3dbdfb75bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
