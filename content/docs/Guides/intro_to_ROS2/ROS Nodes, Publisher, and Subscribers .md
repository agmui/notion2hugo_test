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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=7258ca77325f95be228530ce5d00ec6d68599b7316ab6748d976e45bfab8aefe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=a35db487ceb684afe014fd2213bb62ea8b93dc6cda10eb1d9c60fceb730c6c22&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=84affa15cf7c74f4abd9cd7367d3f9966ed4640a6052e951eefd8ab34c1f04fc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=2d40220118255f35a75f754232aa36c9b6debfad1542d2c4f314ba34083d7270&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=f3d3c0b4eba21b9a82b4941437067c0519c93746858154ff7ba4d5a441ceb847&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=40fc042b3616af37954d1e517cb22fa1e6ec60d291c9f6479c8fae1181d8943d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=0751f9cbf838aab1b627e52f17cef942370078c0556f8c272e6568cc50569577&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNOC5QB5%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDKoCgheXg12Oh23%2FU%2BNubhJGS4F1qxrRzycDWkZsRcdQIhAKZa612FDe09av%2FCXR6ffOQogEnwVEcFqpDRI6P%2FNkh3Kv8DCDUQABoMNjM3NDIzMTgzODA1IgzmFBga7DKBwL%2FyaJ0q3AM0nOum8%2BcT8nPZjZSW%2BPCHVJaCweXonnaGS2RKo9jbXzGCp%2Bzm8j%2FsgeXptX5KWs%2BJIab7RM%2FuaH9tm3rWqnFxuHrXOxo%2Fr3LwzqJX5gthiWAHb6tJmSvqrLxEt868HnTwop19EfhaBzfR4OEuor7gTZI4qAr4ezJjkHKQ%2B38RdltB2vIFoPUowW%2FVpIgYV7FErX45Lm0ibMOLKOKwup%2BjFAPavY4IEGEcq1ENK4unlY9dsr5HLrG2PLBCdEQMM9jLQ2hwAiCeQw0DQWhH%2FumX3JCMNaySoeZjhn7Y%2Fq7zoIGUrK7PLRGHvoPTSOusOyMzq%2BjC5YtfXZftzyF940IHBhReFLh4%2BZ1Peo3%2BYIBI43OZWK8h6DCJ9dmTCdqsG%2FAtDkeTiYrqRhgGzBqzkC7bmezScGiNiuc%2F%2FL3mgGX7wKECySNv7giq1Xtq%2Blwk71M3%2B%2Fwd18GPcKbwSBE1f4SCu0p4kuWl8Y7DE5tFj9JQBorEVxOWYajMTuESjOfyLYwMnfAWSNRW%2BzA2nmFjyxUOSbaki4lmsFz7UTvhpSzw%2FCgAsB8EqUH82u%2FGaMBKp7gowA%2FKLvz3KQlzJx8CRTPb46skySq3W5JTR%2B6dXn6AaNhPkMRdZ7%2FCRk7R6jDftb69BjqkAYs12dQH21AJ2oKFyc9y12cuUKIx4vWahu8bDIHcXHq6GR%2FdjeK2S%2BuAE74cvfsWDg7FAv97eZi7MxgY0jQ0tp8H2YTDcwKgXT%2FJ0CJpoffkUbd7ZbssBl7S1N5Cd2m8iwQ7K0OHIX3e8QuFgNDG8nKYcmmxiDWyEbkimYznY5J1enkF8XqQj4YMi9MYGh7j4TCa7XAD4LAbG7rcAlQzTAMSmZWC&X-Amz-Signature=8962cab88e34b4711ed502850dc9ed2cf7bd125e87635b55817e5e992faa0760&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
