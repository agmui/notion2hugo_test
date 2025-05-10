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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=c335976d8b234e410ab9c9ef1755868d4a9b2e49c632aa8203ee1269a134ed4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=ccd3df1c0449868894fa235abd6432029ae9715980b0b8a93f4c45c5f2a9e604&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=7da3fdb1266f1f2cd513fa0c9b214c5ac632a8ff43f83639b64be794fcffd79a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=ec06f938716a1bb9062170b57bff8b758a3c8ab7a2123b7c5d529fe0f8c18999&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=2d002b0d6241854241802c4ffe111d25e189381f624d67c83aaa3d44d427e8b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=91af3b5a4408b82347ef2676695d188122944800e5cfbfedb1fdd9bf3557a666&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=a3f850d6ac33248d909e8889c3083ecaa8e19eeb9e97df40d51da117f9dd0c16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX3JCXMZ%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T110116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9gTSpJ5%2Bv8499PCzap68Y%2BAWCX7Kfoj4WeEL%2BZZYNigIhALIHNlLETKJD1%2FSjOLURbtehv4Y0wff6EHgjpBVqN7OfKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4R33SVwBo6FUvO%2Bkq3AM%2Byq129poWX5r1OZWZFdaD3q%2Bb7a6c4jzsXaRlUHSftlELa7FkskwLwzuWr6ghCkEh3gxZdG1FV75PZPEFyO73J%2FsQyIRqZMQaJ%2F1OaTRCbFD16uH1e0nTJF5kOIyioP4SSpRBntonST452PMWQ4wu4fSRZJg0WoKQ0oOJnlWyfcEd%2BRMvw4XR1tKpTyhUDXQ8sQgLszJrVKjQ1wMH18FJPEmgQaOp6x%2BRVEljOfl2xF5e8pQau6ILJoMQJgbUqElZRv7u5fx5QcdcOHenrtYzbjH7Us3Z%2FsY94IpujLQ3WdpbYPNuqGnoiL5bSlJKBQ2cZUPsXTxaBojdwrEmbadMvE85TZWaEx0x5EToji2v5NKMmTYKrFiTRy2CNpAMJc38KVgCmjMq8yJcQLTcH7wIAlkQHwFxoX1%2By%2FDtw8QJiiSjihVpOk7Z6ThunfIzUMitc80Oh3DOVNSEkWlb11hyBeHoJ%2BXLN9dKpGZAbKu0dATPu%2F3hNzyWYHWrH6%2FUxeZCK36kpYAxCUIokDOWukVQpH9o4yOR9wXxO7dQ5tr1YxrN1EEhpLzATuHVI7ECXdnw0vLfXED0g%2BF1mxALfplVRbzEG2OwtwaZ1TE9zFNoz4sKk86rHMd1x8796zDej%2FzABjqkAcBkJQyP5jyxiyu9Z%2BRX%2BbcP8Nc5EasmlBUHBiMwClxKG69PqeMyIwF%2B8x7Fllqyk7Idmv6%2FAQEq0R6afNj31x2r1XWXMpNbKqmEvuOVv3oDPOafB5Xh6dGKQtp8gwtF%2BxGVHNSa2M1gVgmy5nuoKc1uQbTac3u3%2BWHiyjA8UyP88bvdgbWBOSNQCV9wSSIiPz7eNENcdygOCwopX%2FcM3DrwGk%2BG&X-Amz-Signature=f26ce551f2849bb53b3bedd32422f703209ee3c928749ccec7ca0d8b704f682e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
