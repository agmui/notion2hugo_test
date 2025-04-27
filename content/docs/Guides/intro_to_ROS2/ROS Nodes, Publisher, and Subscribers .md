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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=8b53e9e142477f379d061715a5f2d62fd0870c01437c474f525e6ec7d5657873&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=9041d6dd30bbbab3eb36f569cadc7708636d1e6817ee25be45190066d792c0bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=5da6935bbd08d79620e809a72a08e13aa93083488870988ebaf642f72ea0424f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=ad201873fb13db0cee0fa95070c2f42b18654ff20e0875714fff276cab46a835&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=8bac0355d481c813698200c7a2e7af6f5669bf0bdaa891ee7e1012be61194dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=5a7c95b1aaa8fd70be5480a489a2401d9461d02714510f563ed3d0aad54fbd68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=cb47e3f9e754682969e6d23b3da65e93b4a3117d02983f11c8310187a11a468c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y22OJL4C%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T070746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQdaoX6rMwHN2qYbxvA1vEG5F64MWJKzhJupFAHkdHiQIgH7nVCnNqKOzARTMl%2F7cowHbR2sQP%2FHPVa7AuxYY2UeYq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDLn7Npyo15fN2Q%2BvXircA2YGLm3pe3FD%2FYHQticr25paRry46IIkS7dNcQdThgRJERxHJyobKBihtPryk7EZdN3FNj4p9FkJo7VSv7p3Su%2BUKd%2FOt1jaXFTFumTTdi7Ar8yurNoJzZU0YKKuvKyCkJyrH6waaadPOu%2FqAmYgdfDNds0WYCPYTXUdRyZYYCgEnxR1gjxyOZ5LF149h6vk7ckqlgoMeJpN2YE7stcTivAkZzzkr8qzBd4VLCNuimHGaZIZ9vTk1u7IW4zRBn9%2F%2Fg10liQmlofqivt4wpolTBeydiR0fcrbcpwdN0ZK81FI6GK3HFUijT6YfDbGXPaVX8DnlRIYjmOhxvUq9C9uHYfXsUWDDVD6bJssA0g8Z8CHxFGdTWdPD2K5NQ9MNfgZZN2UAGGzIF79ecAlVH0kkU%2FizQcw41Ec8VKUvYsqFUbsKGpgkQ88334OzIXYgl81sgUVKMWGDn7rfgMu%2BXb7df4m7yFGnS871l%2BrqsX6lqj647FKEtWxfv3RbTq5AzPqbXyzxP%2F5yLxdCuIAcU3BGKQQjfA4wLeaGKVvpv48d3O%2FMXezyJ2bAIJYGUbwwl5%2F%2F9VcpGFUz2pDGuWgdOEGw0cu4sAF%2B8E9oAg%2BoFEg2SW455iNUSytwpsBrN0LMJjttsAGOqUB2%2B27lqCl1%2Fo83HgXwIbsbzHN4SXclFhYPjOKRgf5tRIv4BXD%2FAaCyB88WKLkXJ90I3xj3Y628CpO1CmOOSkIeLUHSVatuPpbY6bD%2FMAFllxpuZ0MctyQWxJX28nCC7QUyQ5dKFVP8kR4aF3XEQJkay7HdLsg7x4nSRYqiu6YqEhHIfNQCI8F53GRXeO6rus26XXG6UzmLuzRTHD3qwQ48j5llhrN&X-Amz-Signature=f2efd0c965b38c87e0a6084ed2b6f627c80fcab13ff54b4f101bbe902ba0e42b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
