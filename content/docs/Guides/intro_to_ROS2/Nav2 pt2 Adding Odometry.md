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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=06739dc2e33f3a3660d1820eed750a2825b14b42f80ab9b26100ab1357d95d51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=a3c98b8401559a3df77e6178f6a0100c657c7e0dd4575fad1b27a7fdaa768058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=710f38e2fee7a669ef33686b1ecf8a0709da1993a6bf9ddaf65b4b0ddf2139be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=461f66278705f40081ae08448c41cc7ccd7256ccf7b382b7e2039d51e4b2e41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=465e95a2601eb95894b8476c7b088a53bb59290262ef7fc402d9de3713d50093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=ac6612071a01c5723526f59427b157c66f675379727240c2c5938d0b967d3502&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=c291802175ec61b17b8cd27bca12e4ccda2926238faf2dc38f918e949180c7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=d87317626d7b8278e714b8dfaacf7e2b39668d1ec3c9364bf21325921ede3066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=57f4491a58016427630ebe5a92a05bdeb8c5238ddfd63815bee8411405b3efde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Z6MDDQJ%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDaXMumkBqmJ8yobb0Yc9MJB9Du%2Fnu0XZxwv56aXowFsQIhAPCbXxgniS%2BwnMEbeSbzuGCrobI9GKad%2BD%2BF%2BsoO%2FVE0Kv8DCFoQABoMNjM3NDIzMTgzODA1IgywycWEt3Got0ggBYYq3APYpE4opeG0oaszyQFRFsB7M5aI8%2BgFx%2BQDngLTVY53rYSLIa5ZrKN7Naby4OTHM7FJkVBippYnuQXfh9Dwc65w8qTPk8y%2B9wDPEof9yo2YV7XRgcJLrZJW8ZxNqWxhDc6yF9NJij0cPydwl540SrXQeEnXxbcZ4f1TiSw%2Bf3OHnryWLx9F8aDaobOJVDomQQH7CDRuJhSiJFW9p%2B9pwSe9Hi4fjC2XJyhiEHUjXFnwe5H9u1fZmNHAfQysUmgUubhIL35Z8rXQj%2B9u3z1m2MslD6P3klw2BoAIQ7L2jo89W60JpC9M6uMgAywtsXpToQZ4PGhm2DT40miaoRonZB%2FWO6aluOQuD0OUpMskrY49NHN7eJsxg9uVeP3ZLj8uSFn9EL7vjepHTkCR14Fr17xwuopBOpsoIlnjZ9eSWEXgJiSExz7czu677HclBsmrjdU5IAmLWa%2BQkErqbODik4RVQdyopBBijWTP25Sgi80W%2F9mww1AlQcbAUo3cCHqWy1Bd98dQmoTl6xJF5rbYBe8MxHVrApWyDDOwOJt2L3YeHe4uWV1twEgHomnBh1e6lTTDeGYM7d97pldGbu161HiH0ovFFHv5fymsr5gnocKPLRXpSzPpzR4PFJK3iTD87vvEBjqkAa2cHRs8k0frVt5NWAPLS8IQ3tBiz3tAMXrptj2x8n%2FRDhchGkA84REhcRxK1nlIDNiRqR733gqyuLibSmcUZg4a%2BfbKS8y6nxYtpTY2JSv6JiRQXDu0A4X8%2BOPfaBIWkGiUT1s18dKUzi0K973dLCZDpt4T0YH%2BTHAjv%2FaWKxYrlOYGGyrU4oRgZKw%2BlzKKdqhf5NrjlNXSYR8zVlbqvZUO65BS&X-Amz-Signature=1b46a46431dd5d342ca95eae0b8bc18cb013c14a52f55ad62b5734aa090675ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXD4ZGKU%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIAazG6EsE%2F35j7%2BqDHdXpKAFzmVDipbB8dweBXx37wfIAiBhZn1RRtrQAxxGy%2FTcdG8HPs0hqGcCf0cHg8erPU3%2B4ir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMmiQob6I5NyfAhAHnKtwDVRGvCFPLpCbdr85SxxTzfSSemUNeWmspFUrJKyn3MRrNvNf4FsA5gbjYRNEP2sLq6XaCcUGYTNCsmz8v%2FrWSHi8uKsJm%2BQFK%2BOFTK2D60wlFqnz8yOMY%2FgSQiBqwU8tAKo4xeKOqaM7scH8Mw6Q5eauLhKMck6gS6SFP4xeYjRqUQhJVIHQjonJUgZAXnxj4tUQj1p0E1kkyCKXO1bnG6r8PLmTImaCew4hbqvhNw93LByt3olngPCjk7CdzdilQ5CBdDZSh767caNtJJsCCIuklm1AUjFwmVPd0Yy3sQ5OTm9qqb45tPW%2FFaw%2FMfuhIJ%2Bx7WMVvCEiTxrVOAVgJChzc5IjFomrhxL52wHZm5DvNyBS%2BnTw4FOS8N5z4I%2FQplzaWf460gJGqDt0RSYbxKHra596167uRag%2FDpkYhmDR4cQmMvkmrR4Q1IQnvUS1I1H4g%2B4AwwFR9yV2%2BnBTh9%2FGKOhyfZhh%2FlFrYNAvyYy6C%2Bh8iaqUZQe4HZ5tEhTdau%2BnCytOKl7R8ZpY4dxjfXz3yfwjOhpgblJFyZ%2BN97LI%2Fw5p4dAFQH8wWaivlQk6MzbDrcCEmr4OYV2GZkgLExCujMNt3sGE1Ja6ayspLfM2jNSHPo%2FhkivbSd5gwkO%2F7xAY6pgHp6vKvqYKkQK3q0POLtr11CDfpI%2FbCvUUdQdbEtnszmnqPo4v86r7I5cS3Uvg39k9IBnydsToBACfYwCgbdV%2FM6oxSU3C01Dfo3OCZU6OwgW6NQxqjlC93%2FM6SHSP5B3dIx7nMSnR%2Fkh16mIHSm0ntSzAQZhS%2FyHV9NoEb4%2B5HMAcdvLcmbsBPgut4d%2F5GV791RFSkl4ipYwiRdlHDkHz5F9RvaPrY&X-Amz-Signature=30e17e5905fa398b62a0735a3d7efa30635961d3f9364df12e15c58bc1f0ba72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=1e739fc35f410752cfd010e397cf94f34a7adacc228d264232d5d9b9c56ca641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=d89c90e7fbf64f78b5e8f02d58870efbfe6a0e4228ba9548c86d538dad5c5da7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=4563d7edd806e4e96567811cc15ba6c054058ef4a3e48515afd9c5caabf72dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=771e9f9a45549850e5aa94091b2292727871015d66647ab53f01fc382434acbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=5dc3a557e0249db409eb2633c5d2e8fe56ededba77c4e1456dbb5a2fd54c1b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=5f49cfc08d78f27b25884138244e7b4793cb1c05da3b35f4b06bc21dbed8e264&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=973349deede46954ba9cf93bd273b435e7573869b1ab50f4abda07a36c964ba6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=92571ca0947e2d71dea09429089b745ed15648343ca2fa8e8eb1d34b165fe378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OSNIZKV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFUl9th0tSQeTAvNsFi7F9b3eNYcrcuOIAJTiAhkNhKmAiB3LGr1S1lwMQDygoN8T5%2FMyfjzo%2F5M6HSAx%2BxW197piSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIME%2F3CGGHyePP%2BrycwKtwDNt7d8zmbXag1Hm9DtYh5KDaLLw8Q78zX0zOmfXRGnGqtbSgR4Je4PCG2w5eYUf%2Bsu3WSmrtRk1uL01a9YXVLFurET0rjow50OjxJqQpW7zVY1TRZPP%2Fu8%2BPWJLxLrnOU8DrCKMHWHlFAHnohVd51gluwYdRA5EMkenHPwmiHEZyK85CdleV8SNDWru7e0kTZ3eqBi3xrabHIoqyhbQQN39lbLfflKQ%2BonML6Hsc6UvCdWsZ8c%2FHGRXWe3gu%2Bnt3CQVxi2n2M1Y%2FCVdQ5MTjjRvpMIw6VTg%2BP7ULkXY%2F7P6qYLTM2MwtJDMfri%2B3avLtVv6e7nlxQLh6VBHMb%2F1Y6QmcsWKZXX8DJ0b%2FFpeKxMoOAHwoQtOTz3mx0oL35Yp8SVIADdQk7jexQpQl54Rrax89xq93u%2Fk4N6vNscatFpAhaFTfZ2hTk7xZc07xTmOilve0uRERfxt5v%2BrOdwVo5ULsAEzb0ktZIqTK0SOusDIYR9FyKqHXUeg0UoGV%2BmtpUKuyH5zCUw%2B4nfdNzt9FiVPkMCmeGHVf5i4kPpAcXE74krfhUZT4ZJMSRX6iflWosqzqiHLy2iCAMfhj6AshuctrwwZzrKCQmwS6ah6upjeEG3olSe2lWWRSxe9Ywju77xAY6pgEXfYUopILI4ivfufl3nt4YBuBzS1r4EIL%2BvaZ%2B8CJekINJ7kpnNYdw4342B%2BQ59OgSKWunpw11S1nEHwgc7hTLz8Kt4DfP5VD7wTCLvrSeMwhVzL9ufccwF9TrlazmgHXkAaV%2FKomvYZ41xsaygZEDiXwvWJAlckfb7xUZ6ZGMj%2F%2F4jxuCjCUgt4ZLajVlxTinfLhNLR%2F5%2FxzDxhO4i%2FRACEKWO792&X-Amz-Signature=0dcc9cce7d97921027fe10e174a7cfbd3c5e84364a4a634dd8db325d76b5defa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
