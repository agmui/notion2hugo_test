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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=3220d3dfb202c9e10c43a40e03c50a222737a13ba00883e3541253c4a623b170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=929d7a868254df5064b19f0de6b006ae906d9ca19b94adff601a3a4a405dcc05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=4dde2cea3d02683d40d06db63cff38828ebe6d7cb0b0c825ecb828e515d9ff63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=06f041598d6b1a3b0c685204d2b11d2c152ea8f90941e869be327c0903150fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=421067d3dbe3bca4ad773e4e8e9b76d51f7178f1b77e8a47e8b1ed26153377e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=a33216078b2edc366a411bc4b3287ab708b668dfeec68e6dc82f55e9c2064083&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=2477932e9d6bbe6fa076e6238496dfeec819f27dca2e073966444d24a8de1cb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQBXTVH3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T121451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQD9aHhe4%2FD%2F1cAjEPUdppl0DTJfsAb4qCEof5y3LnwUdgIgXehuOUfvLZLZhJDImqF4fLzyMXkVS5a07u8KaUYjTrEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDDkBmplHhrDL2kOlMyrcA2f%2F88hQ9gkHy%2BC46LVpPd2%2BnFN3Mu29FjU8ZPxuHhKOtWWo4Si8M2d06l%2BfGrFHnQv%2BIkIWEpBkXTYiBjoKxhLmVf7P1JbEW2bZzO0ks1%2FHxVOT%2FbKMH7XpgRG0QPV2dwcKocyoM5GVOWw8QMUd02STMK57pMA2H7XztcsjzsN08bK8agQsHrpfhw6XZv6spP0HqiJyYJy5D%2FU6gVEuo1n6ns0g81EVgCAZVpxuw7fwArTIze2keVRS3oSDTj1oh0enBdF%2Fu5QlKkpTKFtlI%2FUWdQiijxmNqvTgoEUtLjkdx1aNZrVxebZiJHqAfqOBnjdNSbB4g67J%2BEb%2Bd4yzo2v1KRR9EOPsnGgYPYf7vcrlQSwnYhKoCDAKzr4JpJ5Zmjl8ONPQoymsEL4uoOPbcP87DQdFy9dVkRQ7cQmf%2BSRG9OV8oWuIpI1fPSxOB3wlOSBOPSw%2BSjWf5Mu9GczyB4c%2FD9BWvxIqGGXklJM6nbIp5%2Fs24HDWvCXTrBYud5hPtR0laY6l%2BFlujSrWYgP6JkLl7GfF25Z748Kqq0MLlPpdt8JKnVKxsoIk4O0teb6vUOONuozCF18INhkYJGcYg4UvijaiKfjL2yAiQ5JzQDbhp4qF2hYTvVlgd6UXMPTCqcMGOqUBMmnfmoh067ybvjZkG8LFspiF6YUSIpJe5xtJMAn8Q2hgpo9i947AWkVJcrbvezTqiX2ARSDb9bZwTmFZUKEBgDLkiiMXzEHwTNiDy7S8Pn%2F1nTBzSUQDoWFy3DR6ZUxtjJvq5ShqasozmmD0lhPbVLQnvUFskKcWEeydenHuCR6jE1NagmaRgptHdiajEVb8U8mAaKqDcidslZL9mGeLdaAxshVI&X-Amz-Signature=f2705d24cdd8f2424a8fcbb34d6645f2ee296a9c75be0fd0a4db2c106ea56e66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
