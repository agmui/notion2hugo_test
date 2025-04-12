---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-01-28T20:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 142
toc: false
icon: ""
---

The basic building blocks of ROS are nodes. (referred to as ROS Nodes)

Here is a more in-depth description if interested: [Articulated Robotics](https://articulatedrobotics.xyz/tutorials/ready-for-ros/ros-overview#2-nodes)

Think of them as online accounts where any node can publish posts to some topic and any account can subscribe to any topic to receive updates on new posts.

![Topic-SinglePublisherandSingleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-SinglePublisherandSingleSubscriber.gif)

![Topic-MultiplePublisherandMultipleSubscriber.gif](https://docs.ros.org/en/humble/_images/Topic-MultiplePublisherandMultipleSubscriber.gif)

Let's create a basic example of one publisher node and one subscriber node.

All the publisher will do is send the message `Hello World` over and over again to a topic and the subscriber node will listen to the topic and print out the result.

# Publisher

create a file called `publisher.py` 

inside import the `ROS` libraries:

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String
```

Then create a class called `MinimalPublisher` and have it extend the `Node` class we imported.

Then in the constructor, we first run the parent class’s constructor, `Node`, with:

The string we pass in is the name of the node

```python
        super().__init__("minimal_publisher")
```

Then we create a publisher object and a timer object:

```python
        self.publisher_ = self.create_publisher(String, "my_topic", 10)
        self.timer = self.create_timer(0.5, self.timer_callback)
```

The publisher object is what actually sends the message `"Hello World"` to the topic `my_topic` it takes in the message type, the topic to publish to, and its QoS profile (don't worry about this).

The timer object is to call the function `timer_callback` every 0.5 seconds.

Now let us create the function `timer_callback` and have it send `"Hello World"`

```python
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = "Hello World"                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info("Publishing: " + msg.data)   # print msg
```

We first create a `msg` object and fill it with the string `"Hello World"`

Then we actually publish the `msg` with `self.publisher_.publish(msg)`

finally we printout `self.get_logger().info("Publishing: " + msg.data)`

To run the node go outside of the class and add the following

```python
def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()

# makes it so that it only runs the main function
# when the file is being called directly
if __name__ == '__main__': 
    main()
```

## Solution

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10)
        self.timer = self.create_timer(0.5, self.timer_callback)

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

run with: `python3 publisher.py` in the terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=256df5f1ee65e8e85885c78b94fe5d2990acba0d679a2a9dbf5bdca874a2d736&X-Amz-SignedHeaders=host&x-id=GetObject)

To stop the programs do `ctrl+c`

# Subscribers

create a file called `subscriber.py` and paste the following

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalSubscriber(Node):

    def __init__(self):
        super().__init__('minimal_subscriber')
        self.subscription = self.create_subscription(String, 'my_topic', self.listener_callback, 10)
        self.subscription  # prevent unused variable warning

    def listener_callback(self, msg):
        self.get_logger().info('I heard: "%s"' % msg.data)


def main():
    rclpy.init()                                # initializes the rclpy library

    minimal_subscriber = MinimalSubscriber()

    rclpy.spin(minimal_subscriber)

    # Destroy the node explicitly
    minimal_subscriber.destroy_node()
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Then while running `python3` [`publisher.py`](http://publisher.py/)open a new terminal and run: `python3 subscriber.py` 

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=edafd2b416d66c6693f2b83a3e85a6ae51591768b4409401e337d83f8ae77cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=6d6b9df22a186b08e20590d5b8e3828239389f3722686a979f9242ddd48177e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=157d012f630048a95c8cb49bd35cfb22541b5d4c6197897f17baf299680b44a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=23b99652b6c07d019fef79791ff9e1ec10cbe8819741c8739848f2017cb81ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=4bd6f208462d76555cddbb9c199d070f5a1fdde5662475c996abe8a0a9bcb682&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=cc1143ea1bcc97f1c4bfc57a66de20ca0ba4fb47411f258907e6d0badce96c23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466752NAVW6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIAcNcEICNJWZtCB%2B%2FxB3SqTaWtEalUWRjcbOufB9AeI2AiAIMBQ2jFHMI90VS5%2FLcy%2FrH%2B4d6A63p4j7d%2FRo4ZQu4iqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZJY0EnepNNeHBc6KtwDmApR19AtLUk%2B%2BSz9iuYPOehizOvM58h784srKBGVSC5CnVfXtCogp3IgIUnjWgI3oyYAFNE26KD5ps1lc7SX9ZZjzDroyIYbgBtOcjcMmJczg7oRhNpd%2BDjYb1egDgge46nNo01%2B67D1wsuH%2FuNiD56w5byli8bg28Vbde2L2Zz7y0jM1qkwqOXlAoG7OejOpDd0cPvY1Y0OhtJPU9aDsHdSO5sOducnz%2FT4U%2FpYSsTOMKsQ5VtptRTc%2FIDZmhsA%2FN4BGE9%2FMSrk2Wm9vkab12qSCpNLz3cQ2VHnxxXsAERDIeitmNl6WZ9phVjSDSmHnjLNWDD53qEgw6vJYBgPqYbxBralbjyp2XxrP4GBnhJ9T4zjTnMfXmWpuAuKC%2BuCiXiFH%2FvVXp9YhjmIoEeDNAiM9K8rvfdnVIyHnN85HfueSLUlB0eNdLyVWL5G2bFF%2BNTnXNpQ5yp5lVFpSbQKQ7kEFx%2FEBCq2FT4kpwovg3JqsRFF%2Ba3Frt0mwvBxxk7cC6ifwqzsxl1DXGkRrkcEag3UY3kia%2BFvabyMh3D0x5%2BX5GP%2FUoNU0w5l3riWTwiAaN7JPw79eLBuY1ov57ufrILs9rDEP1A3nobPa%2F499v5HCcFPEHZuVeVzAQ0wxdXmvwY6pgFm1NtWu%2F%2FwBtlsYUplW7CDHHaNWf0z7LUSnkRPJDiwTGC5NHLjLDMvWpc%2Faa01DyFYIModFQML3GQt7Y5KQ1JDQIm90%2FY3y%2BvtctYEtAUZr6%2FQbaSlvcgesMwjySZSmRuUEMykBef95kZ0ftbBQEfYMShKyOSfDaZ%2F0nH0%2BI9Qoh4%2FRw4G3keQv7JvGSjch0nq1DSQ1EQRCzObLMkVnB%2FIS7nfyBDd&X-Amz-Signature=e791590cf125b2c5a11a42c8ffef9a59783f12e0a04d8fc6581c72c1f921ded1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
