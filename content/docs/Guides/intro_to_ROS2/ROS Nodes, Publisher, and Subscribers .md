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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=65572fa47420c306a21b0d2b75d1b0af5fdfa4bd2f28c9a6858e0be4cef7c3a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=7d1fd740d11f04b769c883161e179ceaee6eb73ca6f764c2f52ea2791a21cc45&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=32772aafdac69373eb5571b174f859c3ba20624e0776fe8dbd568383cbf0fb03&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=41a70235ddd5e4686d30c27f36160b28882d3198c2cbad2f5b1f1bf5fc7e3f29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=903e151a9dc30702bb2a6fe6d4ba649516ce1c6f8d6efb9bbbce7ace9f202fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=c31a26fe42436fbbb99c07ea3895fb27eb7c1526751eeafb8ee0feb0f8e432ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=3e1c1150e6157e0fc0798153c0ceb35663a2e6d5c9ffbe175d90e7ea74f05912&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWUZLGTW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T110127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIADxq2fj%2FFmH%2BA4XGP2XfVWdFTy8BUSy5k%2B12lNVZoAdAiBVKDiTsNIB4ftDfi5ohCcT8uk5%2BGm%2BK91CJMe01I1RPSr%2FAwgUEAAaDDYzNzQyMzE4MzgwNSIM8H7g1wtPUMR0hhWsKtwDDvcinVY4MRBoOuxPyjIfe%2F%2F4J%2FPrfc8kcSuxTG2KgPE6fGssmGqwkJiWcs8dT%2B%2FsbArhBYmHZOjKSutqQN4badDQQP06Ny%2Bw%2BlIqeKqCl%2Bn10JazpB98c9bcMJgSdpOekn8Y1u8j4KDV%2FiZhxWSyArpRXoS3cgRXciSwiMP9bTZJnl6NXNDqatND0k7XuF7BuD1gh3pxle0%2B0GdStTTIL1Y7FoC%2Faf%2FTcX%2BKypmOhuKdW85rqcIJYOuDIZPhkXvPXy%2FrGipPpXOSLHFQdLWj0DuMNXOXCWRivWfizuUdtVvYvcr5Y0QpEut5mN0lAk7ZcZkicuEpjjEPqJd0rnTdrirmIqVq96gw4eXWKI5HmZzP4lsHHiUXCZnBiOX%2Bl8lhxcMCagMTdTMfhIQOmp4HHFYVZOE9lwZrpaAVVxX1Jg1riDHPuqTYNj6GF%2BsAonrBKnz%2FZIMGrpNYywXifl7IfNjowdAXPn1%2FjBmnphMvkOoa%2BeQ9K7jJyBxu%2FramfpuVElCV60DporSYCPPZ6qn9lO3pFhi5LRBFtSe2LGyaNTZyczZo64JnygBSRtgh4%2FwHvKCkCxoSAfYWnHOGcBvtIfKxN19WtVc1%2B5JAQW3xoaSWjHs75U%2BiiAnQsHEwxPfrvQY6pgHY40w7r0jEJdFMtWuLSw7cFWqH9BITCngGzEwOAZ0Q%2BO9t6rKL38ZtAvix8ofO9%2FV89AAvxdVot9A0tmjK2bc2mUEBmjsHLdRT9cJZJmBixkHRUl8U8A0zpolpXxaVG3B9ivvtUUF9U3rbs7Wim7iwRpADAU1hoYE7URRX5hHTeCvTl38kEWMlHFygStT2GGzWEVrj1iZUGZQ5M4CxPAVnja9aiJEC&X-Amz-Signature=4754b03c438b4d18586de853cf21577a468e69938a8155197a09c3c8b4c0d511&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
