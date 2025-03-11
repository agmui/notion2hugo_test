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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=dc8b9c0696aaae15e5a87a5e42ef8b55488caf2a2cbed3a9c6e923582f3af677&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=59f2f81592c6a649359a0b72b4e626f89038f511d3c0d811f396751b924c4fa7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=16079c68d9cc08ea26c9f4b4d851e484940a3c63e63e57502f805560b1cfedad&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=8480e7cc2372bd61a74e68c0c8cab7a8d09d93d18f4d6e3b398c2fe273fd394d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=9641ae16ec0417298d755bc926421adf11b9d7ea2ce5f64d3ea52125e50a9e52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=456c17b730d9e8fe7f1368dbd1ba81063d150087618873fea6b7d29f8d5aded1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=4a7cb07dd056f9089a992130e38f1b8d98969ef49935301910bf8a714aa370b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYG4SGA6%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T050846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJsPLZXuKuUIA3Jt%2FTHt5cbYIWLMzeDnG8OkhFtUxpzgIgWNzxGz0tqzUzL0oYmFp6nOcWd6RlD4OYQ3Q12C8qg14qiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBiV2DoaQ6TAQiESiircA8zW8z%2Fz8d4zxjxB6qnBE252ux1yrgkzBz5NKtWhR2njPGIwNO%2BZM4xAyM9DUnP%2Bcdg0FDKxptcqkyuFqBc7zQ6nADlcTUmd%2BqjWkoqcvDFkIR06rjyf1Tf0QIMe1AtrTBXrgWFZxGy3Zq4ousmlsF95twEn9tQnkjRP%2FTeuV4jvlmh3JF7L4NXrMT4oBFdkMY%2F02cVckxsG2Gr7P6%2BAefr29FmACRq8g6dkNbps%2Fc29jeWtBLdTXWaLRpjRH4kVofTtqSoe0Z0zyyB68QP1X9rlSU98bAwLvvD0VBTQbQxfSShe%2F%2BKWfpWvUbscLY5j53NjYDi2Hb7y3f4mhPGkxdEGvZ%2FNEF8LqqhMI24VC4wYZNw7aedxktfnMLZ%2FOUj%2BYeyn%2FfLEVEFZqBD371ngG04MvL7x5mHTN30XRE8SpGNvRPVqwwloK50S2wSlGMAdcMxeNtU7kirHUk91u%2Ftp3eTMLn%2B0lSPePS777ZbEovAO5DtZjoQ2dK%2Fg6o0ZwVxc0eiVJHvqlp2l%2BzrXrSSnb42iXiG80WY7uXVK7EnQ3t1M1Hr5hq%2FaIk7Dlg3wZsuiDOgEgnCR3h8BhUQqTJEU6Xt%2BpBnkjoQ9VrcMlb5VTb2i23YHnchjbyVMDk91MIHwvr4GOqUBIqCaVJYve5q3RO%2BAAZ8kuhBu258Svw4Q2SCj56WVETzYUoHIYDJ7vBWl9rZxK%2Fub%2FYoDPnLlBe3BX7PoC%2FhqjNijDoZxzQf678LLReallkDruzMfc4CmS61s4HGfQn0ERg%2FlMScRh6P7ZI3bZ7gYhLmsz%2BY0xFYvTMf3T5bT6SNtvx%2BejhUQiH1mcVjdAQbsqHr03Qo8boFlMEoSYqPekdQ651Oz&X-Amz-Signature=171aa9771e6b72c1e232c40baae6d06e916cd2c7239f657486c0583af9957a64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
