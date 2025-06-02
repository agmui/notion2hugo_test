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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=36bdc01cb00590b7c367a8f45b48fe2bfb31d9491d638f4640adf1cea345702a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=51500a4c4bc705f078286da64a53a5bd4617aae14b48ef0174d7d6a51980a3ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=f873dd5270354fd91bf8f399204272c451502d48281fbfa200969e4d9359959a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=c679c85f19ad814e09e11f56cfc95ac393c156d28635c4d047236bc9eedaf76e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=3ed9f515df4325b37dd3a857d12ff73c7f9bbb61478a5b8c4fbe5e7e0353053f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=23b578248f4cd96d76e8dd30d33575ed5d4e8b6e2cdd8ca5a06bae6ac5cf82fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=79d77d2790c4187fbf9ec14048baa5a6bc801e9407c0b824f84b8fd929a9220f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLFUX6FH%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIDwZvxAEKijHBt8EHjG%2BQPSI4%2BjyCaOuWyBWb%2FQYqt8CAiEA7mg430xmZM7xXLXKFaqzUMXXuFz%2BdXczzfnvdSbb4LwqiAQI9P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEafxIcb7Xirh1CgJyrcA7bKBGu0E5i041HtJvw8ZxvVC1QJ2iuTQQt1cxeCVGLdl9iRPP%2Fcgh3cLo1T9D7rhxQnJh53REh9ptaDMaGO4oOL0oyhlsZsvtgFSAFqbE4xzaW5Lzqgmg0rwRjwajaLYLtqs9ehAVYC7xICnmscR0nBmubi2B4zJmYgzU8%2FYVYBB3Ke9SWb20Xpw%2FiZwikgn61aUi9%2FoUp%2BtDfrRyRM%2Bfvc5YopjlmbvNEDq1OV2X%2F1Vq7VkvBt%2BwFmpM8%2FQn90Jb%2FmLlAZypNgzxQ18J3mv34Lz84rCKNG52j1XUHNs1SPIt4bo0L60qPLY%2FotbW5ABc8IAW8kMJ18icaKOotPS8AV5EemVw6epEUC5itbOER6t%2BR8tij66b%2Fj%2BCNlnt2Zle%2FAXNy%2Bs%2FQJ%2F2r93PTwmFRwiJT00XaCpjehdPB%2Fz42KyAS3qEHkNnpAQH1It6pvrthD5Wr3CtQ7JT4gyOfxOsmUuzv74d0d2ZNpaZn5Yf96dLQAZKtuiN4seZT1WsUdxX%2FB05M5aKJ5Bsr6WGud3WgahDHergx%2BxOYhFY3aK0NzwK3Wv1tISOMa0A%2FL%2Bcotwd3LjVUiVxAc89DESHP2Smbq5qlDa661C4sHkbgS8woCKVE8%2Fa3R6h2YX4atMMfi98EGOqUBzpuVRpu64Zty1XspX%2F%2FHhGkDoTtirR0KrH%2FFh%2Bx2dcGx%2BAhkNJVHIz6oG0Vga5s4YG%2BTV%2BmLaRMEhV3lowrm4Jl%2Fen%2FWzVbphDJXJkkWvtasF7YcDqiv5jvvipWUMPEGmXBhpa6kSmjENhhF1zf2k%2FO689rYu3gCFm42ElCxYRuFB1dEntlS7wDw7auHfEpgVLKpYvXV4rT0YWYtn7KN2vo0tY%2FM&X-Amz-Signature=6ecf4c47d084be40b704536d79c611b4364cba57310d27d1613d181cfa240eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
