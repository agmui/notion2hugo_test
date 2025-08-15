---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=459f040a18da0349612ff4dabebb0b151d68c7a4e1a5e1f009446ba1f20f3dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=cfbf3a02f0c4cb51c7602b139c809babe93300f7bad2d388fd86970ab53a9cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=beb4f7150ffc546ada093afb40310a3f431cbda209c31cecafaf8c337c1c7614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=9b18e0dfc9b132e7f43353b326591266d1efa9d1b6e431187a6e5cc6cc861a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=31716803a7e852d5a2eb70d57f7bb5033b9c3ff74b07a28a21b93421955a9a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=5b86cd2403064b1e6f9e018b978af84a9d6fab016df8b5b84a6819d42ebbacf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=e49dab4ea31ee34c8ad4e68b7846d21164210b66c7049b4c7185b3f46d76dbbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZG32A3T%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQCOUALXPvN1nD9nqnFMICnFpvt4VcKLKkFxlFy248baHAIgZ%2FRaIdj6eYlSH1XLoORDUwAGYiKTQLBN0EjildKlOVgq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDO3tu3Pw9LoyqD9FSCrcAwHhpg9pTU0nfHt%2F%2Bayrt2SRrJvR42X5bWMCVf5yDnD2oCtx7YeFlLdlYSqKFke%2FBm6vKbd26u4eBXN2xpWFLaUtxY7zPGJY1y4Kz7KxfVauXjPU27w9ls0IrxZy45lZg04B5x2%2BHDorNxDTcWtlMirJzS3%2BrvzwvyQHmHWYQi063NXRfTpBbNs2aEYqwev2N7VyRljvJ37tqlJsSos8JTvKV8JOqjf%2FvMFhkpbCSWJpcCKvdYNGkMYzTVzqyceiHs%2Bij0dccdIrf0yonVNgKq1ZK1K%2F1mY7feRqDNNzu7Pmelniqma5rDTMGfYuAXCzAUHnIkmR4cDIUWTzOuz6xRYM6zx%2BOaYCsY6Rhbxx%2F3jDpnYzu5ClItJqDLp7RusIUsaR%2BhNIbYu7LiqY1aMYmIUo2y7SBuw3vhw8EZzPQjE2bYpqmuGAdSUFRL4GbZCBOAMTEv6tltMyAdBTtNHOegxVqOxskXEoz6S8b82q5pD2uBPyhocgcdULhm6p%2BTqFNqXyUHXieptIA06yEtQWm7R4RZzLqypK0A4h6Bu10wDN7HPWF496MmBFdfxv%2FUY2JJzHU4x7VkyCKfNDdVU7ghzVF8mwL%2FQhCZ4oP61UL7A1UmDmJEn8XQmeEaLVMInb%2FcQGOqUBn8oNjjeYQyYb1V6jHw5ypyRFHQjxYlVmZ41hGKlkHUvPXZMd6kpuJEfONsG%2FXQkd6ThxT8%2BEQrHNNi%2BXlNCI4iLkEkQpKBqf3Sk0u%2BbTAN%2BqdVC9ZGKLaVv97%2B56dGsfmejFJDrfQpSXqV2oqPQToc18QSARGkOglZ81LOypkTXYr9jfQ7RPO5w%2B2VYIPXF06R%2BLi0DYK9FaXWqVCYDAecAYY%2F7d&X-Amz-Signature=566f54904ae80236355e088b8fd308f5bd36f8970a27e321a22399fcb8809185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
