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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=2b24eb90b000fbfdb464032a0eb9e086f0c01ee93717f816c66c2692dbd0674c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=8b79590c2846d6c0f71ee2e597e7384598330a99bcb800aee4a3f315e75181c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=5e8a15f1016718f3b15a5b13a30711a7568791dd310665e47094593b82bd9f81&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=cdaefa199f4b8a0a076032aec9e20841613bbac2f9f2aa5677b1e3605424d45f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=2ea4facc4a0ec3d79c565d243b34f21105de24b7d66d44b2960ab15f69294e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=6db36ecae30227fb8dd2c1c0157677ace4608e3967796ea91fbf473d3a55d89b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=cd0e2a61c9d57c6a41bacca87958af75a734af214791b04a6433fcf21fc73921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTMIZXVO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAx%2FBLZ4lEDSonY9TAXMxgdzXpMBW60WKl28HooTirjgAiEAyCHg5ctpwT%2BmRqLDoE49N09N6fDlHwAK92ecVwjNAjEqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUPRvB8%2BOSwXqjlEircAzfMS8Ti5nIVonKvOh7NXEy%2B8kLa2zyKijUq22Xfpq7QcwxdS%2FZQvv%2F4%2FM%2Bf2ko7ONDYCd8qrbefef7CRAHKWC%2BHbEiDGQyiNzffFqDfZacg03TYqnEXisajVYSQB9CYbrKKxeryuIdic4liaqBHd1IQpRJ8eF8Ibu5KodXcR7Lm27XLvLbsnc78TrFZJWw8pp8n4jPd3IiZ%2B9Kxa6T4vvxD8mqDu%2FlZKCwYiMamHB1KATQWWhJarB0rDsP6jz6OMCsJNSMVtRaq8dFKZqp65DGrFruVJvw2PMlCeKpuphevnmYVNym23CpT7B8vAB%2BW5rHwa4lsucVZTP8OEJzRDjx8Ig1LmmjvDtjfMULXdIy8Yl%2FZIr9StHh3dWxKZHJr7mCf0EyZcVVG9U0yDUOLeiIbOrzXiLxJoLLYY1sAKUSBa8E6Sm7Dz%2F3vBDHvq2wCjTYKQNlU%2FSeRWIvLZcqIPy5i10hRLxhuYRpSXxRsogSqY8CScAIpXEUEE9hUgS2ckbAvpdFvVO%2BPkFSb6ZSKUE4TrvzIoolm3PRr3HRQMgROPNnU461LnMykA26khApNLsz2SnUBM4CNWqTZ3%2BR7x8GODDzhRfqvkVTguWHIo9ZSerSqHqAvlB36O3EMMM%2FR8LwGOqUB9EPIlPEBrr%2BgxTNTLrMFnhISd9Evm8im48ENCVpjZg7pvYhh%2F3531hkB1YRnjgVD8Xjm6wDK8DuS37R8rvTkANfNP%2F%2FgzFDwDynnHmOsTzT37ZoZybHFb6MWbANI7FzK0RvJXahGVuO%2FShnkmZWStyIEIxAX6%2FgWzNxW91990WarEI%2BDXNWZ021Vt9jExOANomAovq3NFgyUrMaiqbEpz8zymAry&X-Amz-Signature=fe2204387a31efc5375ff6c93a0d5a4edfc9adf3694040a9c4bd75728c28e3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
