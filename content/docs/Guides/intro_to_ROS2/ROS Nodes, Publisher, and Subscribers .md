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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=d2ebc76756cebd91143baa7e58db2b03efa9ff43281402c514cccd7b02d58e2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=4a74ad4f2008a9ed8450bfdc7acf1a7e973fc9723f501cccfb530345cf3e8194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=97f9b83c8eccb86ecbd44f9081f36ffeb5e508d4755fce5875a3f5cc6d618955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=079cfdd16548d488aa1bdba4916844c3b9ac9d00f0cffc6633029d6d281aa248&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=07e46963828e3c326669e733b20b39507845f7fbb2237969c21ceb911de204a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=731d925bdd093e6dd3d7fc19628fb9857402fab574329847aac8006d1195d684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=ffd98cf10efaa200db4cdbdf95fd7553447287a488be56c455f09431aa4b2f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TT7LSDXO%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfvpg1gjFoAoJoVpT%2BXeMQwG4OcHPMvapY67ueDyMVJAiB4ITnR2u2pqRjacjQGdIzadI17D1RsfDPCH6tS887MIiqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoPtTrazxabKsCUpHKtwDil0NAp5Dg%2F%2F3xb%2BqEB6qL%2BclD9oUDo9wV4SqB9BSMeKju7B7Qp%2BOYa3fXq5YtA%2BmRm5594yjxd2AW1squ0c9dVApiH2Wc%2FIpEttT8pwztdTEZYYpOzkmELu4ywgPlgtuHtj%2Fk%2BRnhwrQUoF6gnZdCpk2IOSm%2BC%2FhEYH%2Bxm26QBJ9afOHrYCwEpi0CMhf5UWwOQ59AmqwIjTYE%2BalSAoP1wRzQj4SPs701HDslcLQTZZeMEns395K1xZPc%2BSl5cHYXxqQLprJq4HtsMW2bxhg%2Bxa%2F2Pv0W1OyPiJZGfcOeADqYAuvRkaak%2Fn8XF5c%2FEdjRRm0cx2mSxxhcK6OhFMTeV%2BbiiEvuf48cFAVf11hSlOVhT3Hnh2RpIE%2FZojV%2F%2BOD02DTC5zA2em9MzGhy22ooC5NPoyI2EiusZAqWZdHwEkoZxjBNoEqdbJG%2FxWpB3WupyJwOfrmQNz5AoReCMjb%2FBGzXbNclTTOCZluoMiwsIzE0O6vqFcLIojNwU4QvEbI5wbmikC3mwrjK3ttKCDBPFvSnxVbJqD3scpt9TXEuXTCmvnb7tIwSUjGJ8GrExYwfKVXXdx1uWIJT%2FQgrK4HAcTr9gU6K3i2OHYpqA66jKNtHEYPDdOotv88Qmowmo%2FbwgY6pgHlqoNL65ZKCpRzaHlICVsvNinGvlZjl90%2BAyNVguZCQWmsEt0UXNbJLKILR0IummUaM1nbtbndyr7tG6loY%2BRQY5csQwJIBxvseJFMlvtsthHPtlu7%2FshE0l6h19vsEvQz8ZprPBCNOWcx4p8%2BMsgnyerkaNmOHp0u7xPRVCCPSM2VkRcggM2kWsbDE%2B6YmT3PaWKUES%2BuvFY6ITT0yja30ZxC2TSV&X-Amz-Signature=7b9b4b010e588bc253c8a4bd18a98e030f9e70d6369db4e840dc56a1ce0d9ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
