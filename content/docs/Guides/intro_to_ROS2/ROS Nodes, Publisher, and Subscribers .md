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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=64d028cdcc1892ccc6156dcb2ed31d9c52cf4873e5e4e05855374549c8ec3664&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=fc3ec61c34c6faea0e52eee96acd40d1799555483cba2b3b0cda893c73372cd2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=ef03a115c17113cd128d44bbd6d5cf01978f6f9621a8ef88eaa4f77a654273b8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=b4d9d28b635ca90f2963d0e693aaad5b32d1262efc2750b6397d303b64e4efb0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=9d254a4dbbdcd16e1d9831f9eac5f688c57e41f0b39521b8b76b33a1a516c155&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=f83da499973d41adaa2edfdca7dee3339f36007500b2f737e7f69553ced288d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=68eb6d473ebcec5c7193017e170b9f9beb684d140ee72ed5bce17af99f695fb9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5TFGKKL%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T150820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIBeMmZqnmppdA1gVponCULqMKitA8CMEcu2RpQVJtDhSAiAD68OjxlGoGNZkMwVNcJ1vGSTs6EHMeY9i83Seh6uOcCqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHzdDJs0fzMR7SJDcKtwD7lP7O%2BrMdLRS%2Bvy4jSOf9Mo%2B7gXvb3wZt91U6Mo6cHL3UUrXueSkE%2FulY%2Bg8aObBd63kTb8QWBqop3Zd37VYvJTJgpuJiG0zKvFcOFtIAZNG5VeNtky4Pau4PwXkQCLpfS39B%2BfkCdWEoPUP27Ed74D7shmFlOH4XLTsnoQ38P%2B7t%2F5iVE5GDGvkMoO6a8UNbbB6t8vfPMMkP02whPe%2BnanKEl0cMMatdI9CpkmmjTVNvJRmL7TwaGoF2C6gYXnBAZ%2Fl9rMpyA%2Fx7yyFhXL5syK9vs0OyAR41HvvuPZv4Dj5s%2Fbqc6JjA2hJQx4SQcdxIBKUtce%2FgWlvvr2X53%2FxSnGo2uDQM9Cbveoi2bqmI4D6HSGPOYPFMii8CllWiF0vdtFMOii0hLKkdifwtAQKEmpS5b3JFe%2F03WdN2UoP79Mpog49yD7R5SCU6hFrH4vR9m4Oegjp9ZvJEwITRHtgMP6e9coIKTx5YoNJlQCWxE3Q6aYIrP5PpCZ3OkT6vOCOWlP%2FhpZBJyIZVn7D%2B85V8e2HkRuopQphOeTaHUXaTSV3WWrBBiX%2BEmFEf%2BABlWFkTVHtqboex%2FmD22lUyZ8ePHCO%2BNsc81XPrsQ6rQNLPyJlM90HAoeMn97nF4Yw%2BLHSvQY6pgEiIP%2BdmPZ73XINi9SSSBPSJwkHwWY4bD5gK%2FP35a5CagSL%2FFzQIhqT1r8W5wy3iHIAanH9Zk7p4tC%2BHgyYp2bGm%2BtNm68L6FchGyYTvRHzCCtmM%2Bj1PQwQJE3K1EqYnbGLtcy6vuQNggakKrEhfHDFjwYjHIjnNC03sCW%2BgmY1PDseo0W9P65r0PadqST0FgwNZ6PJcjgTgigVPop75JiXYheJG9tq&X-Amz-Signature=9e20b13f9d4dc3bf7ed970a660c8e81f84c51382d02d3d5a9c0d673b24234c46&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
