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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=c743095111a4f09b7f2cb46d8b7cd0d910473d81984c1eef88a20a9a88181e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=50491975de1d1a83872440cb95c2716ca1a97c92a95c238ffdfb4887b94e7ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=f3a872924ce791feb16fb6a4418964ecfb63858889cec466089990cc35a4e4cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=44a579a157ff2706c477e2b4c952fb564806ae05ac2684163fd57cc8a22604ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=b6046df0e257ed3aa89ff145b2fcb7a432465090962d9b526d8f0e76aaa51b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=09107746b2e05eaca797f9ce39456fd32b72251122a6be65591b54607d7613e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=1e2bc7dd0774459788897efbbc009b167fbfaad9528b252d71adc1a9153d025f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIW7VLEA%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T220830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMxqF4KH30ROzpcEWcpK3ylRLQFOV%2FnmWy6TdxgRJXoAiBg97zQGUip9iVvQ3S1QrqGYi35pyMnavj1udUhoibeRSqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kLQhZrFcIT3LO07KtwD3kombANLPVC3plG4bA2pXeCSHKknKndkQS1dEqdxTarZwTBl4I98%2F%2Fw5a%2Fx8J%2FSGVJ2mtegWwDy6172M5FSiVtBnEww1bnEmRY3the6NUgcj9erl8YE847bvMIuzjleLjTjJc%2BPY2Gr93fUI6aF15wJtz%2F8s52g37awhlHu2QWmM9ATFGmTDmDSh%2BVe8z4k6okql9oz3XESuhHn4emjbvWbqQuzaiHGIkMPgY0ROqcLCnplyNOGJKDufo0rF9j9f0gmQzLztbqhjFzvsrGZb1WdMIrRJu1du6uM1qs76NdBQVVhq%2BQuH8Iv%2Bn%2BZnLT9DQmAFf5tDLUrBzRXwMSNZfMoH5eBjWEGz93Z8wRrJApn9l9H1QyebikmD2fFl276MnbLfSry1jlYi0NwL83Q0Isr15kpx8M7RFaAOR26%2B5qxxxJPZImkrlz4Ay2cRUawJMvDf4Cg5kVlfgZGx2RMyjCRsEF7tmtvqD9GhNjRavfbnLelbGuyjAoSFpZXd74ToXhmAAdGiRUAr2SKG0Y0yx9M28wkzgRoDHG8suZw4GiQ%2BxJluG%2FHHyNedM6whz8sLAuY7quqxbM8p8fV3mzG9oKgernlOF5r%2ByMT5gVA0JnAC5fHX5H7nPfqjN4ow3YO2wwY6pgFSpJsSFG8EdIBB9g2H0U1%2BWqDeSzSgY79xbfub4U6NqMcLvgfKtP3aVrU%2BwVDHPppAb6PbdbkoApOOUaWMZHJlR3%2FAKgTioIQIiwS5WEa27qquEvva07H5o1p8iF29aSCoeMH4AzuX49IxZ5rGHz8koVSa32m6wH6VPAy5TBxuooZQSfejV3i5iL71XzUKN0RQxe5lx%2FTKq7yl%2BUMxzrS5CMXKEiIU&X-Amz-Signature=bad7d28893899a77d844e5e8f56daee57f8d75c7ad8cbcf2e95ffa5431642cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
