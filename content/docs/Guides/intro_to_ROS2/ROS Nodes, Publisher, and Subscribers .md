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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=50f58963a1a722a69435af01125c26fdabe91b5252137753f29457abe7d551d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=5322022b40da1af86dacf8283711ea67a8a0d6b07a3e31d8c4a338b97382cbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=f72ba62e348cd94fb8f14e39fa045f0a90079c065f4adab70d23ad61c9a3675b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=02639933d9187cc067491dbd988059069a4ae5b6b77df464db00e315d3dc4f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=517d66323d95cdce6731757eb781d54fecc7facb5eb0c2b2b013a2341beef714&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=67a2d01e02e61b358e8ac6b1529bbeb6b19122de6e246ba558a2b3a9b25999ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=4dee8d1201974e6f3383c8199c2a84fc0cc716159bacae4568df1ffa22e5d2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665L2UKT4H%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJFMEMCHwFoyX%2FFjK5hyMzxHIMqmJkBylhCqYVGqLqtEp0ZUGcCIC%2B5BDrnKemkBDMhutp7DdWHOMwQ9x5E3WDnNxKk38cTKv8DCHAQABoMNjM3NDIzMTgzODA1Igxub2lo%2BTjAvQ9Cm%2Bkq3AP5b67%2B%2FIAc%2F1G3qe%2BFT%2B2vdTHgx4a%2F4ZBSLN0ggdi3rv7XA84HRDX7JZkL8RbuscbJwyD%2BSMbJy25RNqNhtjlSUHz7sS%2FHbHpGCYBq8rpPYV939e9Bb57MBBnplrKIA6olT%2FqQWS%2BfEBAUWguDEyz6o%2F5PsTcOcMrPb0N8u%2BjCwERANfCvxuUJCbazdTLGhhPM%2FTNGbxHVcDuarA1pKsZp%2FNDPZzrKFF3RENFtdue0AewHj%2BuMNAxEwbUEVhGn9a1MPl2tGDoNhPYmjbk0QfbZyX2iUCw9XJ%2F5SHClY9b9T4OUNrUSOlxc1H6nXtUAuJ5meDE5EMwokxghnFHfgbIQAaUm9Mr%2B7IPLBzPHVKALln3Bzs7SB9FLzTPgWoNA41jbSmEf9Mn7pPFTwldbnN7hMGkm%2FIdql0%2F0TFPHYx0MySdkIG60RnwNbwO39WJIpVgZXCG4O1YrxDt0QZvTmmcsa%2FRp1x6JMFnCxelqfJZy%2FMbe4j0N6ajh3VsxC0za3fROG%2F0G2KTs47DiPfieWxoNIMxqtFkHNMFPd2V7erxhwum%2FhuBEIUt1%2F%2Bdi9UbcNhog%2BoolLrh4I%2FCZKjVZ7icbNq6cjqe3jccraHduX5q%2BUYCUmdK%2BlcIEmoJcfTDc9%2FjCBjqnAfe%2FVPyW3evJagx5rjH3YqcRodN4BjIDTdTzgGLbzrwDHin4T%2FjtdgccbQKZMQdG7cBUXrYCj1uQNAik4V9uqiVtrVPpdApmFNrep3lx5p35IHyRMhC8Jh5I39sJ5tVD1E%2Ftlt3MGLMkPF0NfRx7EdaXIUBZOYgkhSLvTDyIUQLmPUQpEbclRn%2BE5aKAJLxXQBUo%2BizeSn4cbkf2blYymvSZ0blviEJi&X-Amz-Signature=0dbba96d67f7c3a8ea18221ed5226a8cc3bae5bb5e2f68ade1e412dc58fc233d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
