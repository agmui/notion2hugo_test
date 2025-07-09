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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=b93d42de2c603dbfe0da475407540e9f4e413a3ba0a0dd2620a13f8c9b6cc97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=d2fda2c020f879e357a48786256593c2fb6b8edff1c3cf3a0908f838cc620aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=d3902de978beee112cde379daa2c490c74df768306e043aa7b24a25d42b2d28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=ba7890ce82b7387004bd7875e5dcd6a26430464c48c3ce9c2b662abae7ffb2a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=f4c34c4322517e21a4b0c68c7a77b956a75fb73df27e6dbf913bd4d4bf18cb7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=6d288abc8e96182127b0c4036672cd90132129f0bac9aef52b169df4eb1e5ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=acd7ebf2600b38a21cc0a74554c62c09f679d0850125edf27be063e79c8edf50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPJ62WPB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T181239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK2HMXECR%2BKap2A0pF67Q3LbzMIXEZDMPstXub%2BvdU6QIgDZvw%2BdZ1vAveKpUAGd1CfEnea3QXmkNHEfqUG%2B%2BixmYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAEx%2BSP%2BdVr88rLT%2FSrcA%2BD09IdhDIj55YwmIgVJT%2B1ATC7axI3l5q%2Bhe5oiQowGuGKLgkoObSd9R9%2BUD8D31RCE90akQBhROguFoD81fLwso7QmAuLgKyxgcev9zVWmBtcqLGqkA%2F1m2fA3faiuZkHW26RjSI5LpurafQSXyF8oovsKtDn6ETpL3yP2F5VX%2F2quC1kFdhi9pSrFlufx1zl%2Fn1V1C7GqlmgUZ%2FfT%2FZNJaKPTDynht4VnIxgj3wRONg%2FHfhGslusiDgA35MdqYUAPnKgwdS1AeuWLP9vfspzFm8papVJvTJ9Dipiuak%2FoJO212r7uITtepITmTtPYhBQX%2F%2BKhDQGarNMl7FMm1hjOiXiAdFokF%2F0duxuCnLmBvy9c3Gv0491dHoaJNVV4NCRSjAHY9MX7Ooy%2B2imTfjlS%2FLmF6WwtHIano04Ap3mQc2NjOWz9NEwx0MwRUzHCfMIUmJzCpZkNrebCPn3dLp12vTeUGtm%2FEn%2BXjpK%2BpOxzytTCERuIq3YsjoH13RYPRVOaiTraV1%2B9Gh66O7MgDL12retFJB5ZNnKhaEJt4IrUelodENgbmS3xoXnV%2FiwpR1QqJWY3ZqVXbRuGeY3wCZ8G6jfjoAvY62%2BXqmj9mJB%2BRhh53GWScz%2BwU1t0MLHFusMGOqUBTd%2BRZX5eqcLWzYMf3ruC07rVYXVlNZ5gZfRXngTUtZQUZCGeNw72zlfiCI%2B0z1r50ktj808n%2FUIo0%2BAKEx4c1JCvl%2BVzLHewvM5DEUV7u%2FRr40UPxVEYF05pN2cnW%2BFsv7o2K2SawkzLPpPukNzAB%2BAzQaFmG3BRPeD%2FNCr7jrZarCZsVWFxm%2F%2BgMxjD0Pii5q5SY0UuKhIKN%2Bt3ZhRXOqai3fS8&X-Amz-Signature=98351088e8bd9a3b7411cd592421edbe5942e9dc8f77e5b55a4dd37c0f1d767a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
