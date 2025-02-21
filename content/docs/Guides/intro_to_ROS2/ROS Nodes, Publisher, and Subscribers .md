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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=b0567ac97cfbc8345955dba76b4882a6c7f5f1d449bedb532a0b20180f679c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=51824bf5b48da153dcae3c8de5c1f57ed9bf8cb01c0a97244fb9bbcaf4792da2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=98526def8e698989e20a9406e0f7f33e00056e75440e8c67b59d5cf9e02a989c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=9d01a6bde811a64b874db8bba378215e1488b18077ca3753d90778c03da4c2b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=5a477713ee91dd0fa679b1a43ed09ebbcda7daa24852e84bd02b03c6ec6b9c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=ebf65f9f8dbf6bf5f6099bf0520ef9a8a4e4694cc9c45d3140aabfe69e9b8476&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=b7075526f5a2ea157cfaf6095f5b7997467aadbe7647ad32b24fa4e348e4c3a9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNA2WAL%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T003643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAqoyrnl5BBnXRsm2vEmxi0tLbJVqyRvt1IOE%2FSQsAGRAiEAv2EeVizyMD8ZZh0BYzVUeJdJvGsKgZx2F%2B2cBBavvzoqiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpzXwLao%2BOyNrV%2FnyrcAx3lPP3A5iU3pvNaosk6p9QMaEo4oUJCHndzgNZhHhLYuMKFxBL8S%2BSTlxABPo%2FLqzb%2FIWoB1BwJvBohO37uMNANkOGCzmT8f1tDN9pm7x48UCm2v8TrZKlSUrkgZoldV8%2BliCiF8wZgSHrZImyQ9g8p3ldTat8hWDWKUD8y%2FyON4hurv5EtSYexitlej7AzJTInN%2BFy2R0wqGffHQ6xWKolpAH08oWUEuhgix9UILgl%2B7ciUwQY1ZuvHuLsZr43RFsN3CRtwzR7HPVPu799ReGGrzzFpGGfI%2BhsvKnACs%2BJQPhSu%2Fy%2FEXCxLBrDf9nHktOoO0eZ%2BjnVW%2BVQru%2B%2BUldz0t%2FtQWHPB%2B7gbDDPzD5YcWu0jKWjt0qCAmbwZmJiyh1VIV%2FNP9YWiaJ4WdxpCGN9Tmb21Wa517Pf9BMGQjYxzP90OAT%2BuaHQUj%2BqwJJK7VQiBm8m7uV86cWwD57RcPPI3Dv3127jr0ZrpIH0dB8DzjgHnTT38X7%2BgTx8agWy5d9kuPd7lTPgFDHIqyuYBDbzu6wRyH43aMAp5MW%2BxEwW3hjOPNhDG%2BkGZOzTLQGjZ50edBidXl%2BB3ptDvvSZdJ2jBH7DPtTTSQgtsm7fBqMjaqUtnsp149nWlHGvML6E370GOqUBi8nPm0QgquEaxcw%2Bfn5aJKxXD60oB%2FF1JsXnRvhoDJKEA0xfz1vJF5LLBf1obhE0rH%2BXMM%2BWYYfG%2FmNZliUJBX%2BCGJlkI2sg7KaKpaSLClq0lhceLchKJt4bwHetfO8X0VIHpF6rNbVi4MqP8xctvcsUSEXq0%2Fdai3MfAZqpA6s1brWSTLmC7%2FTbSHeRvW%2F%2F8NbZ2GbUaKfDHuiN5HA%2FjsflCnfc&X-Amz-Signature=cc14527946531a7e797b515bca04735e8cae7e953e14cc17af5fe3d40a79639a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
