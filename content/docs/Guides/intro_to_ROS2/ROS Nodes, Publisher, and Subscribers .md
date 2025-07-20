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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=70753a3765fb2ec0c97f8c7718193f3a3495749599b122e4747c21292a4f2219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=709849188201830f953c68b98c4f948a1b14c89d92a137db66e750b7d443fb42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=70555c98cc5164271b968866b85cf70d5972e9297a29652229f5c82e05723d12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=872e47f04e2cd56cbc150be5677b89c22072ec180583988d91d69f55f21a4ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=7e1317aa4654d9d49e0c8cc90fa67cb644d9689cf794c17d3cccc2cffac553a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=f1186c5cb7fd8f3c295769eacd5181de3a7f5273a3b371e4e3391e9eb187b4f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=b8e78918cfec84885bfc8abef133393bca93dcce43144232649fa4edbc2e3a4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664K6GBMJL%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T051613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNsZz2ychHI0N5D8hGe3s0%2FVLOS8uC%2BSHWZ8wbsp5DfAiAYxulIL%2BZQ6q1ousjkjwswxXMHS2UqPD9FPCrtw8AofiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiHD25Ciann7GLUoRKtwDehFIQNOVOz2l5wYBwz%2FuLYG2%2B9XyPyvcUQVaBeQhu88m%2B0TKkqCC3EerwXZHCsQ%2FaS9vnYvfq3FXD1GqQRA%2F%2FiaHBb41e7XlrSQL1onYQ2iq6uJRNMSfk0iHG5Gzp0nBkhxAiZNpmAhRAhu9Qcj6vqojVsH5yrUr%2FlCF6UGjNn8aXOq5S25suEcY50Ai%2FzWSDpejItVXuc6SU%2BaVZRjV7Gv9HVtzphMhya5OBfKRPVsfrTmkdxaMpFndOGnoCoBx5zIiphzYrNRuGYAlzH22y9ieAML9kPj%2FZONAzFV%2B36fMcX5sPBWoJgofmvIs%2FpwdkL3iZAdPhvYe11Hbj0NgbNYl76%2FDOtih%2BAgom5p%2FY0HaEpH8KYd2lbvLWEXFNNhhSKVFgC9wChOTRQjWWbZku6NdwHRVLvfHcAaC6kEsZ69VPxcFYpXeVVKJOzjeoH4I9eFiVB3WgUf5IRdc86d7dEL8SybaA8wR5MSqvu2UJ905MYneY9d6D7evNPy61mn0ZtM9J%2B09EU5eY5YytS0NYts4T5vpIGuVC8sjd5qyZsjt%2BcPaG%2BnYK8sLgXkCwvSzWMjnEafwaMsKt8bR1KPzERChNnnci6A7Ul41Qmgqzni3xQsP4Yqjk8yAdDMwkY%2FxwwY6pgHfHDAXzG3Y24yY9wYHNV6%2FIItbLlDL3P6kuUsSDoifwJMumhen7sZV58a5%2FdKvv0ovBQnHEAw39MRMUP8ioqYKHbYg7qKR%2BGn%2FPBE6WMXDpvH5uOIbVdesDGoFBTQGds9K2P%2B6881NzKT0MIRyXmoaePUXEiji4GKTGFNU2cqf9oH326A4Glj0NfDHeOHxkcbYgZLFWbXvgcwJP2LinZb6%2FV%2BtnJZI&X-Amz-Signature=d85260e13e10ed7409a160201e1d50a1a619cadae122843bf2476db9d4f1454b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
