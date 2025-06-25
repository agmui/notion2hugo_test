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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=bfc64e296f2f1b7c228368650fcaab91583e2bfe829d97d7c8a91e595e54cc33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=527e545cd067d25951b87fe1d68c9debf67185ffa6b96a2687dbbda45a767693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=4a7aac2bd09effb195a51abfff0acc14cadc116168d3d1083984f551ebe309ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=bf3740b75c26b982db24245ba179df15688625d1fd2dddbe985010c25bf9e47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=57a8b32947c94872d43c3ea0434cb575d1ead1b67c40fc4a294e6f28a79e925d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=88294e83b71dfa53cd3e170562f20336d97de64c0ad9920469d4e44ee7af4dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=dd9f340704fd098247b7f3c4e67f69976e0655106e9f7af88964ababc774221d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W46AKNYM%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDpA9zH%2Bh9AqF1XxOQ9XzZQGyFUSzSXl09f%2FLLwZyLYbQIhAKkVFeWCq2Fg6kUlcLn1p5yvfokz%2FRV5Jy6A0paHmH8EKv8DCEgQABoMNjM3NDIzMTgzODA1IgwyR2JN1mXe2w8itNgq3AO7PLXZnjlmmAA%2FQ05atGx09KpfIhnsKLApLyqvABmPhK4So9xPEGmTnS6MXsHIDyipsm6W%2F5lss0I5c7IvQLuXXn2tVf%2BzA3P%2Fjvd6w%2FeJnoH2hhkxVY0YAHRk3tR%2BvqOqYX3DEFZcKxFLLEgNa4DkmF%2BvtWnwuJE1%2B2MwIvdR%2BOLvmcNsj2TbsWReYL2RNc%2Bdfa5JGeXF874P%2B5FRwLmIN8XVft2cmhMw%2FKzav1HmGn4nb%2FimBVbh5ui1KbuV5JQch3xaM2C6bX9e9K1ecsR8vWhCq9IiVk64BwXjc8JXVhsJ%2FLeXwPQV3L3SsfdVIZyeTUPccju39qGCPHfAI55e6AzK0d9YSCqINKd0PK8NxXzxt3gL8u9Z0swdlO%2BvPns2oUYRAVYRDfKCWbvPL5URO9ZXJG%2Bkpclz4ARwQmbne%2BtawmB21E5dTczQALaL2gJ7c5tLKlWPfaDNH3QErh%2FqSowGCuydtTI4b%2BoBVOoJSH%2BxqE3iLWHiKfTGgiAs2Z31c0eY78LvTcru8hoEqtQdf8R1ZPkGVxij3qIj6lZO0NolLWSHFAZj81bTAkmPTCuWB1A8SWb5xX4lSl74c4xLjePNEeMGAcu731oVwE0ZcM9TsgUazwoLZhjGljDKo%2FDCBjqkAZN1NX8w2C6ELSUPZ5U%2B%2Fi5oAj063nZwUtdTEpCndMfXWiKrW5EM8LiD%2B6swKYOEM1z1xEoyCwfsM4TB7sgnOJlF5%2BIR8TXCV7pWCgFKZEWitLRi2qLJY6dTN0i%2BXme16VyCH99X8stX4%2B0QLWgUtv10LjzJVStsNYZqDgIhJYBXKkrwyXyTBAjAOCdOh1CHUTs8ldT7bgkEE5m8LJMxtvKAEkaC&X-Amz-Signature=72b221a8efe61e9ed774f11a017cbe6cc4b2be489d2ebf1f3f048eb742ee008b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
