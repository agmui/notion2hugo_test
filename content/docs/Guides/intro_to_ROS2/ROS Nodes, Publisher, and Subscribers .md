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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=117ca6ab7dc85a93d31c9e121ab61bab843da3dd872f967f70f59820fdd4825a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=498912328142e05519289b8b49f8fc42d3377660fdf12d4dfdcd5c6f0778cb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=640ebae7dfc599d4e29b59412d9b8f1fd7860b392b40195531fe3f046c073c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=35624cd24e48a320a1e558668187502524d2d556a00d4b8bcb1ff6338b85d510&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=ae0286a63d50fb89ba53ed7726c7d5578de33c03c5a0d4633e69eb4c015a1547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=745caf3424fd78cfc2f23e617af9317ba4ad4a0fc0ea44fb2162df80ec4fea0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=1bf7cee8b4f9adf640c73c97371f85b6064c924b1976bcd772d6d6ef49c1bbac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SQ2OULK%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T140922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD2VzPUWPo1uOLdZ3IYw1rAS8AbSraoOf9YljblA4xJjwIhAOxXgL2DABBpEJOO39K%2BFdysflc6jzhCCtBJrTWrsn4FKv8DCBcQABoMNjM3NDIzMTgzODA1IgxacwlRwisIkeHqsREq3ANaSLylIiFYB1M1XO98pESIOWxmT42D5ESi6UxxqWgGQF440G6m87CldQyNQA0vOi53oY7TRMfzfoBxhX8HJ4PdEDCBlQrjqqZL6GGWPbkfc89Wt7hvxgzUCGeZ25nifn5tYT%2FiKL2axNiw6Ylej8KxYKD1d9zzly91ZBqOItH1Gpe7N3ArQmyAXpRKPIYHAAsZmIoEhuROTD06hzbVLpAdHuawwy5kqbmIbIaorjkZAS6VB45W4hactf4uRRlrrwPfwRJ2pjLPlC4%2FqEydMRv7i0QESKT2Ifn5AVY7%2FBsyzPuh%2B3C6TVfUds4C%2BczILLO%2BIR2CBt%2B6rFufSqoOZXvDzHfij8tFdQU7hlS6jpvWB%2FvrYi%2FEynYNNBcHUBYGZeVujvo7gz9kVFbj3btmVFc3jr%2FGc0J05Fjr1gk8bsdiBDpqxzB8aUwJhS2EtIv%2B%2B685xlF%2F%2BjgwatlG6a%2BMEuqSEaSiiYYHpeoGLQ57B%2FEgcHI1Z71%2Bnv5Cn7faFinyQUY%2BCZZKcgRtAhSTtcTE5cUEWKpNK8wuw1GKdAcgtqJW9KOwlugEj7Z6GOjRrRWxthoKy1blXB7CL47BiqnuCytADXqd9NH7ciPp4TbsnS40LKw1qJO14BGANdk8tDDwjZrDBjqkAYFmYrXYTYsgY7KfAcxvmC7BKO2yZf%2BG98EyirAWEgBjJQ5OHovWaIyM1hs6enX9CpcdDWEAVOt9WZRUfBX2QABuLoTHs%2BL8%2Fxhfkcvt%2FZK6C%2FE0jwlYqcvpBs5wCjiJakpkwFrLDAcMTlK5Fyaccokp48zSk%2FiTo3RihxWGMkqYcY0u06ZsTNu7CAUNoFS2Ptdf%2BS99RtOltj7EnxM%2F%2FVRV4bK1&X-Amz-Signature=22e900b2a5228a9e20333f546b398fdaff6c61fe80f9feb6dc39cff9ef4bed6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
