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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=5b8ea10e4b61c1b85b3d6d665907564151ee08245e5f2d32a43b0bdc68b385a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=a380277417401dd3dc06a489dd6766d359ff2b75a108cd1eaa4be404bdd71017&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=53def6a7fa24f7e2bda0647fff26b020385c8c8d5638de07fd43937833e1b208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=c1775134337e31a1eb0d85d5af9cc097da0dff973e14e144c77d0ad13358ed4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=c50d8deebd546832c985122d03571fbdaf5cdec7c7daf43305ed7c3bbc863281&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=2ce71f86af938654b8bf7f21da9d8f915f5a1c17468dced4706699ea4871cccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=f230a63296f50f2a4acd8f84b774464fda912fecf06e955e4dea63f783d3a47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U33UTY5%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIGJforYmP7j4OZXXdL9gYYrdvPJtrX2jQsDWd6j3SEABAiEAh0NMIjzDpt1MK%2FzQ0vJgr6kJTee2KYatoF%2F%2BZDX477UqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJLghiYs95Mzsu4TSrcA5vxzYTOSraiVwAXKbvAsuBeKRoVGKRqEu1dhu41Wk3uAqqrNQeymwECukGinagXGj5EZfVKAadLxwlED9EScG9VuGIVVLOaHjmiFSCxF4BixGld4a9hbSWowa5BV9%2FegqY0pzApHAHQZA3dmwrregGWoEyH2OpULiEPO5wD6DM9cnWxxWilIApKJahX3DJiAD4CEjclGZCYKX4ibRNaGbs1dV3Eunk21IyuQkMXbrEotc9KKELO3TQubTpkHp47mNzHk9U1uQWxNNxM3UuTjNwseno7CfzQ63FDomwmEbBan55YZ1qebdJZfu9FtUU7pmDZ6kNjDIWnuif6miWVDj1vY1d0odcTsTMdTxaUUMyWDD2IKxroa7UY6GrZlSgCj4c319bh%2BQDpv%2FpeTuoMS5zljw5HAAU%2BpaWzrbzCHEN1FsQRwHNO4Y68oq1venS7Mjk%2B0jvkk6XOQ8Eu4CSvbDgMVkOignwopjh4ou8LkL6AAc91wK1BRZsFAf3mVBPu2Pd8JtdITCJK8NSTyepmNYgYb0VmcqQs0VFMKs%2FGXcBeZ5NUGXbWReKYrQdnY%2FRuimm7cY9q9eTmIin20vJDflSX8HrFw75%2FE2cy%2FdxeLZmOm2PwwJucWn6TnI4RMPjmosQGOqUBs%2Bg8g%2B%2FSuLQ2tjVOYjyHpu76GDH%2FZC8HYgxg%2Bpc59SB3A9VSok2skdlZ1Z9n8Ve4yOwprY%2FnSnPyI1LvT38IQFt0y8qXdWOUrAc3KyqJUsvu1KhmIabFtg4WS89FNk1wqyhwq7fWVVLs7iLS7gVvg08f3%2BifsxcwvqoxmHRgNTYM10wm5Y9rawuKBnqEwokdpMJbV6uqNUFd5YiolKRQ6h54f7kn&X-Amz-Signature=5d3066ac001dcde50e3f4a6432e2e3aeade01c058ddb8db51a4310f0f5d34302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
