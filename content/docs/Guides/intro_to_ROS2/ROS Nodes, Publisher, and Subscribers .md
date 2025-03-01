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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=52b704b9cf5449bdbcf8b34f87271fa56aa46fc86943ebc25e52e041ad8fa590&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=b76754ac6a48cd9593773f0baac48fe70606190da6b8aaa594b06aff01827224&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=03108988a4015ccd23772feab88190b407057169910955ea78a8e8e0714949ba&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=41885ea585d404b8e1fd9538ae298ea99980dbacfebc22849c344686f7a2ce4b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=2956adebb54642552b51bb757b932927a162eedc8c79b55113a2b10bc686112b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=fc9bd9242f4e9c60e583b5abfff7902be485bf480525ae4503a5a55d0ab2bdfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=3e120d686f93ca11f8ad920df129cc6dabbfb794754ba7ed262ce53406e8e186&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWFWWYFI%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T121234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIE0sSebzV1wQBAxx4WQABo41s3CZ%2BPStdvBLBdXjm2pmAiEArEJqecKpUyRlDbPzqL0Z0Jv6bhddeB24bCttRpuiwyAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGX%2B487j9KefyxabTircA12CstfUZRnHobhF%2FPMq165S7bYsY6Y3se0ZdnKRNAco%2FSjK1SRsqO03dbFkkiibUSBI6tybgbCY%2FVNDvDHSLMLzJ%2FyAsze4n7DWpR6qKXA44apXWhJRFIOdf2R3CkUE7hMwXZG6XSoC4jURe73T6gEMHYm5q4ZTPMnogr65ICHf%2BuDskH%2FwF2qldBp8vGA3WoYA%2BwlYTwDDc7x%2B7lBu0wXUtHJd7WAtRLZDzb3dlF6%2FmRp2JIwI0ntEpYAQxqHRawp3S2H6CLethprifiTwrwDiXqAc1VY5je8QiWgTgYUxP2jvUlx3xQL6%2BUSz6TRjDbaschlKpOx09TkperFrwq5wisY0QujCjFQOguxOZUFskhP1VW3GwPU3GdkMVMs4VWXDLNY%2B3aNojVybW%2BNnKJ58d3rkMa6ETvs4knKmdC%2FIKICxdfLJcyWzVcawsXMpd7oEWB%2F3ccIfTCqpg5BMOWc6mVZ9%2FW9my2OwUDT06L3nAgZysImrt2xN3%2Bf0BB2jrEXPuhPnzOwh%2FYmQIF9AqU69Uz11nC2S7400FF6bYkyT%2BIRrGxw1bFKTMZgP0WDOqt9XeDnX2ZjZzX%2FkbWYIUpPIRWNImKO%2BScw7Jiv9OZpULN8Sq9%2FAfc9GqeZdMLC6i74GOqUBCYLL2OE3mIxpfchQIjeBWGEJdRIK6ogKoFvdYr6vMDIpXGjOgFgj8DD6lbmISEX00Vp87d2%2F%2B%2BcLmpxLHmf6wnsDg0ZWjwAF0Qi5kacK9hUyPXwTJYc97lmUwDrG52qlFCLkd8OPpFbiHflwnQ9upuWMHgPvBHPDXX8YM0Urkwg7%2FoBdUV4K35fYngmrFEzeV8KbNF3omlUxF8NNVxmxPAICqxzc&X-Amz-Signature=588f42b038824e72b30448a1f16941d15ff9b7111f705b415c99619cf522d51e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
