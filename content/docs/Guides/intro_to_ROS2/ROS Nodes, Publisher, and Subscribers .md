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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=a7dd892adff57d32db2aec97cec62928be5473d28b3c56a3a333f90a1fd7e09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=2d46437a8f659dc152d3dc773f8d342ea8e4b0c6640b4d763384ba579c022f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=d5a743cf99540cef62bc4dd1aacb17b2f464b764b0251571455cc683750db2cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=e16f0961f1e2a926a9948ac8e237a535c428fc2f409c6c1efd6a2f680e8fb336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=28bd61e119d0cda759a549758bfcd19029dbce0108e16f609ceed3f8bfbdd5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=b8d037e262d55aa629ada6c6120bd33b1908e72cfc6005caafc649653503c452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=0d5e228f3728e353bf00dc42adcd851e82a9dbe219589ff7b53d0e44562571f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAESWGH%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIHyPdn8XPq0A528SZQvzc9q%2FizVqi%2FogQpM6%2BI1YrXzZAiEA7KI8axoHoQr2wR015sT4XQe3IzrUTir0YrEaSjRfIigq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDBm0LxMQ%2FMxk1MK29CrcA2inx5jEYMLxWY%2FdlJ4xQK9zOKrTZw%2B8YPxWOUUlygWGW0guOiE93rdmLuM4FXvu0hDvEOzkl8q7bmnMGJEnV4f7etq6x6oU%2FLd3zmUOwsR0mYbqh1XcFJKbYw50gFMMmWvhnU5Yb00LLLJnjyBjBYe1VWaLnx0igBwrqZzyO1F8N1uTa8xr8ZdEmfKZCX5SDkRcdu0SAtUv%2FuYHLBZOXnV4HX4fNxMqLqzuHHJMr15MswmKORrjLu3Fexi00eO6R%2FWVesKZjBRCeYNgmbbbLyWepEhMZi4pp4Dy%2BIsujec4jqis27a4j0JoIJ%2F97WV1CxDgl%2FGMULcYrNucm9VCQ5iPfYS1xdkx4TxmCHnLonjopqARbNpDvvEySk6bJ38HCC3nbwaWx6xUTGbvdkJm2lPV%2FQd3cDk4RgVvb74pSLjTQxO0owZNqfkyp%2BIwQGaP4zgowqIrUtuVhA%2BD3bx6YlqOQz0Mvq%2FADKc6jJwFCUt%2F8dLN5UFdkVEEyjJU%2BHEYnMFCfeWQ0xf6GEPIFN2WAPeQBi6SC71p373j5JiEmmxSw6fuGh9LDbwDfxLmNp9GD15yv234jpp%2FkIrjOXN9A0N%2Fw0Aw4qu%2Fbzt8b%2Bg4XLTgaRI3V9Hdy7bhn8n%2FMMef%2BMQGOqUBRDtz%2FZw14IzKl7%2BHyZBitVHIplKj78b9eMU8IBh0mapV85XL%2FsaSsq%2BF8W54J3hD3Jba5lH%2Fq06HszpWGBA1pv9THhHHt5p9tgdp%2FYK04%2B8t9qg1gzlXCgqbcKmc%2BTn0kGj5C5qFIOfPTAKPDrfOyHuq0AS2GhTgAu%2BO1SpnnNZw0cTJhVl%2BQWMlift%2BKnSV28ijtQz%2FA6RgwC1QSpI2SMPqai58&X-Amz-Signature=7ba30e0680e3f66fb370e60e574efeeae0e7f70244ee7df0b46665d13f78be29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
