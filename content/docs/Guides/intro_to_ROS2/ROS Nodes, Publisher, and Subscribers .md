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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=d1297790a74694b8525881d3826e825811028a5026f9c11562c7878b7dfde589&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=f3a4537dd389d86dc903d084b4c0beb2b688ff3ab69ff3a207c0bd1d955ecdc5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=ff03c76ebbd55dbbf264c7be65cb44443b7a00685c3e3c120bf649f0bfd01621&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=59d379d406bc4d05ced60b71603099f0eee63ad8611624316750548405853514&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=9ca1a514523de8a0f3d75b1efdb961a91e61959d61ece8c75773586f58ffd565&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=9aecbd1a307633678d6e8f11362621d9d534ba042af60a3d75e41651a44253fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=e4dc28145f23c32fef899fad6e6846129dfcbbfe487ed95707c91c28cca826c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGZ53CSC%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA49t7lVG79G7mFpke3c0PFGzPi2LLNc6LWWs%2Fo4QidjAiEAx8BeduWaPy53opJvuL7FDEQF962SeG935%2Fp%2BAWHe308q%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDLuHuGzi9RHiaFnoxCrcAwIJYyvW2vSaZMH6VXhojXmX5pnJIVM%2FIFx%2B2bSVEwhORIHxNhryiKsnber2j9nvZ6JoWZ8N4P1uLJjTCJ2IjzSOmEdtLkqJOCxwx%2B6Qk7aCS%2B8B4o1gueuYN0TVe6l8xyfD%2Bl3U8WCYN2X652maOTgafPsCgl0OFwqp0s7TAGwZbwVgdmSUT%2FobCY%2F6LwEhmRhN0fyEcUQLCjgUYJeymV5pBm9FKYT%2Fa%2FU%2F5hJ3GTPRNSbbcR%2B2gxmHZjUHusV5qD4vSFQHiDLYwG0BzSV5OiuFr8ipgxTP%2BIlh2ZpZLUpf8fNfCG0ugnDCLP%2FLsSIXIJ7MDRbteaKrBIyNcEky%2BooVLPpCqVGx6o08SmcPQXoHawu%2FP1ARvqdrcXmk%2Faa%2FAEUlDWMDB9mPYb0Jglj5NnzCPJKmVaIntKZ8Zl4wFtQoigiwbpRmPTvwqSBQWwh8iOrwMJjGjQ6QNBxYFEadZoS2xjw0ZMHMryIj8gP1TjIJDZwwep1NvONJysm7KSjtcwXw9%2Fc71FBKiGCqHBLBsBQSR%2FKDG91xssInopDbOA1i9I2GcT%2F5gU2b9Gw%2F7txS38Pw3%2FrA5W66yijhwkXFWzzve7nvvdIrlrycl8edCFZZXS8Nhl3q1o703s%2BhMK3B28EGOqUBlX%2FSkhNY%2BTNqGI5VUFPb27x435PVkUvL3bbhR%2BO8LuicR8tWH0YPdhG3D8xqN0K3sUJ0nFi3C%2Bc9CDMYkvTaB%2BaWMJX018reoWqpDm54zKBeY6%2FEa5TTYmFvo2YF%2FdTM7XmYQ5I29Jf%2FNkenkjTcRyScPdwfNunqVYMKkx%2B4nvwV6jKK2%2FtEh7wywIeYmorPmeY2B9W8BHHiK1e1bh3MaaXEsX%2F1&X-Amz-Signature=f76740209e05fbbe54571f0d86522f72a07dae8062e85857d37a1bf57fb9b33a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
