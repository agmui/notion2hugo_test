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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=8ca2f9103f8e47a1b86288cb397bca2ba4a4dd0763fe5bec97e93c84ede3554a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=e68810a4a62d4794d588cf30c80c6076e9029b28086984da9b6e27edc8c5f5aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=6e3d8db0a1ae3b779cf9548aa976fe0afd0315fc647863a7dbd687cc6924e672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=a986b5b9928008bedbefabe080ad4e142d414ab3cf736119fcb2aa37aec94e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=660a8d8e0ca67dc96e56b04906d8d07f6edad3a44c6e4239acf6fd0728192133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=7466deba3f95dd8e832362d8812684cfda61b2068ce747ed9b914f38215e35b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=d3047359569ce1cbe7fa7019c174ef25016cab30ae32af96366d58f94eabb228&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIRP65K%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjlWaK0tdtLWnwtrVc6lo7J3m13aGuHPIs8OKaI9nwOQIgfKTJ57dvHHCM3W56UqM0OY8KcECQewOyzcFWWLKMdukqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXSiBRG8IGC%2FBGnwircA66VxqHQcCI%2FPFqY8fw0zKV5nXvRbT470GktTEM%2F0WSqcBq7zSLpy3y1YXFFsl3PWDdI%2BNwHo0ohZ51hgmpbxsJHPrvyO0RjOqIPf3pFJS%2FqbaxuvCnKh4uO8K9Y65kbeFg527oco9Riy20ZQc3luUyExGJfPttviWjPUHcngFpS%2B9wFNcUKFdm0Urn9kf3vHphsLM4LgrM%2BIh4Bh8UmnCITJwWfGMzhqsKAUSJ%2F7PtyPWCB6CmolISkynAYt%2BwaKe1aNDF26Cy4LMJiQPdQF3ktIvuAOrxHNBgPQXtHwmg1HmahtlZE8Cri018rdmEljTqd331Ut0FcQAxm6Ye4iyVqp%2BAU%2FCB0GO%2BewDgtOky2TBk1h%2FlKqk4KEo4P%2Fv82LR0zEUoZx61aUCq8SvLt%2BjNr%2F0KhPauqVpL0CF1PUqebI12k%2FuUdwMDhdufxlwQBNES1ntwZirdXJ3Qe8AwdQ09w6JnV6H5ITuQVWK0re57XgrHwhjZwEYmsJTYdDfaY6z%2BSRCnSOr8dOsDGKWc35z%2BMZiaelWd9%2FI%2Fx0hnfzHAa3dA13Oiqkzj%2F1JV5LQL6K1SZ7jL05h3QtLhTtJ7IUlTbMJoTFERzMEFAuVLyOGkbSB3nr3J2OtdfZ5BAMJq8iMMGOqUBhJ4ccXF1kCqYjG49sKYYCAxkRhMzqpkmwtwR2r77d7ivl6%2F9dkIsAiS0IjO%2FGROjGK5iXdrq21Gp99O20vGeU8Kfd9u%2Bt25o8ESwn3CthcSSIQGNjeArk%2BHdnOvjVG8m5jCPyHnpNdqfHTMuYb60wlKq9Xh9RqwbE7oNYOjkYT5wNdgutrlydSPuMMRWrOOX4Y3aAY7UX2ACE2r%2FMliFsdLRuVHv&X-Amz-Signature=9eea79df015923e9697e9aa4e4abd78e048c034dc7ad88309757c8bd7dcbe4a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
