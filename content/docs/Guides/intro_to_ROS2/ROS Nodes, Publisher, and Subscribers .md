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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=74eb2943bcf7d537281e971ca87b7763487872658b1219e69bf46d1152b143dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=df469c250ec64eca668e052657cd151981b2797e6a769ac0d2cde9f43b25dc52&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=c058da3ea9fe22e623404cd3bd2c8640f30b89bacbe9a0bb93d3b1ddfdb50106&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=82b016fe51627b6eb82f7bbdf7f3b57bf02adff2cf32e3a8a9a1c9642c46bace&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=d691c21a0512722758dd9fbe841836e271ee72dfc08abd0c28509b49de7dac8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=f46fbbf93e768ee749745216192b8ce5c3ad1160b053e1d49c4a7aac41bc48a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=88bbd90805ef3a10c81739bd07423e02ebd97a3b5e866dd756705c6b54c3c249&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3E7HAPM%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T181234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqrS33gIB7aqPs4FXYUC15%2FDjYq6zFr4K%2F5xP0DMVNwIgNybwXuw1HO5JLLQe%2BUAaVHEObAdlsLkSyiU22JvOAvsq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDLgJBEsaGDqXh%2Bz4lSrcA83T6ImHsoFmvIgBHT7f1OAdh%2FJ1lGecVTyylsqjx%2BEMRy2apcUGOE760YfPAqzwOw%2BuSmqqsLsD5SkrGupah1Qi1AtnQzJkjI%2FgtuGOasumOnE6rIOdD8jK8ZtHt5%2Bjg3JM44BYh1Xq1cjTaYc%2Fi7Fnc1%2Fa2r2yeLI0aRKV7MEDdJGtiW%2BjxMGbUvSGhedqxiA9Ku5521NNxynNQhIT62C8D22zYStP2Eg46n3gbu%2FBs%2BPo3L09Lp9kBGZtoLF0izeWzDMa1WrRKHAXGJdt13%2Ft41y0A68W9kiILz%2BtpVYKUGH3eEIGm0Cf2DbBUW0MiOjlaE1MGrmvSH5KMkzoyueSg6xFrN3fSybrXhjnsDmoAaRavBmBxN3bcHfVIFih2O%2B9zxwViXZoHv7vlCG6Vg1U%2BrIeTeFPUkd9JuinIUfszPs%2F5rka%2FCZemubwqzdrC68V40HNmv%2BfWjVdWh4WTDCL9saZCbpwL2odkslvFy20jHezzCErbAHVfyl8GC%2BEHdQGiSewauPTzDXv8OxG8bfLICIAGsgugOvHT4OqNT%2BmwWhikWzvM9HgI%2FNtzykwEERhwoYljo4pMF2DTLwZldvPXuj01MQkdlU%2FzxiBzRRZee38UdPtG2RBJRKoMLX0vsAGOqUB3zLQmkR1tRVphvc2uhuZH5Tq9pVsiU2B3ZYwUXhSkGEMbG5G72Xk72iBodB4YksOq2yPYk%2BA%2FYJe1ISS5K1OKjdaMyXBhIOhuXqOsu409KeowBwG3AToQQcNK1GiYT7MheVpC9nyvcpJUKBGnLIbFPShrl7vm6QGdV%2Bbzk0VCFECnE8N7AqF29l5hX6y3JGqlRmpi0HG1oYaV9sbOsACuaewFOah&X-Amz-Signature=9ddfaf22a5fd62681edefd2d163fee3c60d8c5bd5a9af69e284463bca345ad3e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
