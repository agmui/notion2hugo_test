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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=0f3e4a85df68bb3d96f01c0b645accf42090ae148eec051e8a27ea7b4207ab86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=1a0b65b6fc8874d986f76d5e5e92c7130a5aa836c1e67c693d9a9c9bae459c9e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=7f34d063ad3e547957a4db6a45d0bfc850b056bc082c7dee96312e8aee3cd5e3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=4f4da1072c8ac1a71f198c97fbb563262f0cb60531cb3de633469c847f47f1f6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=7f97781294bc8479b3cf21a7299fdb2ef0c25a98b4859d14ac33c39086ced138&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=2e33ae64cd50196f8bcfea9bc9d7e9785fb39ef66c17772a995aac3a907889a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=7efd344238d519eb7d53fe850105829c7d117d1df537d2e13ef3554e2cf19061&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ECVCZ43%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T132510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEYaCXVzLXdlc3QtMiJIMEYCIQD0mYLmLOA00kp%2B3ffeZ%2FlHp5FAn5NkAe3NDEnCP33vrQIhAI9nX8IFXXQjC8ZLrKPk33hq2U9%2Blnr4yYPSLirUdfOgKogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwrhovz%2F%2BKiVtHzouYq3AN4Mnjp2qcjDtO2%2BMXy4gWUe15J3ud95H%2FILz89X4%2B1PHrI5UcCPRvvN3%2B5J%2FtpkREoRQx73V5OeBSX%2B2ggQR6QRk3h3RSWF06t4Hgp7g%2B8iirdh3W3X9jM5mpDWMg3fjtkhm%2FAZt%2BvDfeP5qpXmfwCsTOefvOAhyRcEIpkoHxZCDuu3IDte15u%2BO4XR0SBeZvqVycBhl3CRivIl9JQISu3QIi7L2XFHE1UjSh6ZOhNVgEKX6ATuCVtikIMY%2BgMQq1xW%2B5GRpx%2BGJktJGf6c56S5u11vKI2Q4JX2nbPh%2B1nVW3Y2ktH9b3dMmFIGDbM66iMFU0xfwgVyrKrjGzhPEVSvRs924GuxxQya%2FRskecEC6Kv7gx0DmEQQrpgCGwvsJf0PTN%2BmgGr1jxoRAdARh%2FAUHGXGAgbgmnOsw3Ya0tqSe6LeMsxcoD18Amz8okeP6Qcf%2BVfbLCDTRB3OR5VuckgacmaX0jjLY8WrHiirrM%2FIlJirPagcihE0SMSAwoJHH8%2BaJTex1NCc44NCrQb6HBd9mWo2rVBgHHmIdtx47GaP83oDwoXnlQMLbasyGB9BpkplkgE27Nl9x%2BNIFWplww3be%2FfCgjvEO1dv3jCZ4AsYaTHUp6A9NE3I60a8DDCjY3BBjqkAaThW%2FRQ7KIJzr9m3Pax8XXGZ0%2FnCAn4pAXxzDav09Uwy%2FrNHgVI9sT2wecHlGhIfWjmg4n0RwfHPpVm16awQAiMHorBG49xoRmXZVqi60zZ3DCK4avGywbJmyqUrLGLmrm7B759521raUgKBYUn%2Fcygkfc7%2BtoDCiPc%2BVorTelM%2FQADytSr7B5YEEH3XLtsba9lwXMmXinTB9K4WrVM6nWaJOAw&X-Amz-Signature=1800c5ee448e802c2a2f2e9d908a36ad806775d6b30722d0e0254de1c695b332&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
