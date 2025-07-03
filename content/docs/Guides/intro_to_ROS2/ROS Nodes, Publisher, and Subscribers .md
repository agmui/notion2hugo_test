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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=2b66f8250fc0289e2f1befd57ba3cb06892557abb31e590cbd977c2569d3dfbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=be6a949f05b690a3abc68680f1df8e9273374425e7a1314eaaf3888ff86193c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=1d741e4e28d05a25781df67c95b21207b7d96c5a0e20db2201892597606859c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=da8d7c2e5951a6747eb3a1d534f3606e37488aa3312be32b66bb6b2d0d3ebab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=bad7b91f3b918c8615217113bc06b7ad1c7d622f1dce73fbfc79a25cb6fb9c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=41ff1497b4ded1442b614b12d89e18505ef6d90912d67f0d88e75fe0c4374282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=5563bf200e10ff46a89d72971dca4fc1e2c164565268c3c6ab066ad80652231a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBRJQEWR%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T051346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmucUB%2BlNyQwflrqAFYqhfNPf67Y%2BiDvZbyAnhhyVl1QIhAP%2BCgUJnJ2%2BVE9QpiKIzQViw4eK9oqoGojdB29Nanb0kKogECP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F3UbiA2lZkYdumpgq3APC4%2BFLFD%2FdKe6EGY6odklnpXvfwJBKMDLX2cWS%2BD6huNKMj2bY1Yl4k0cW9STwchxV6lWpVvqfSu2%2BMw78fFXlAc3NoBjca%2B26kiUE5%2FYnK2zUXFNu%2BemfMyI1ellgJExHG544jkDw5%2BMvoFFaEfYkVGgvD%2BSys02ptfMG%2BYcDtNtLEpcYtKiUcru%2F14PsYwgoq19imMw8BB5f%2BPFtrXHUvQHYrHyaFbIH7tC9K%2BSks9rbGKj16AxsVNYb6pW6Chy%2Fvq7KlNwVfWS%2FpT9jrv80Ba%2Btg%2FbtbreYJ7OWdqFnQ1%2Fuglt8NHHPMeetpeIWMebJtmrIrOMJBcDkz9uBsKHgrBo95JABJqGAXb%2FRs%2BU6seAKYoHrsZLk4Vu%2BhpJhjzgjmLzdhgSTHB8LCM3IiryIuf1X7i8WUMrAEz4dJZSYo7rukwNDcyfmQDJAxtSIXd7aRLewN2V0jwB70X%2BBPBcJYMaDsQBBP66xwvoNIGAp6tyIR%2FbZftiQufZ4efkEP6kKFUPPYuVbspCkw7NQEM%2Fg29Fd5aCL%2FhKIZtXutxOk2uNmCILzZJ86OV3Ld1gMXhUGe3C%2FcyPMfHSBzuPSrIxO8QH6fOSYxiQkbC2DmWHN3ACd3BAlw%2BUqf1g9mTDlh5jDBjqkAQYfDdYng8spRpe065MuawgbuyB9f7%2BeJdexpeRxzS5dpt7Dfp8TDG5hV2ULhwSJAt4LvqlUJ81A1ro7lZ7QXDO%2B15TliFHF0kadUfmuoNSX%2BJfqtTFpoG0BUSs1hNH1e3HIwHpvdmx85uxAVI1ne9rme5O0v5RZaCBESQbEDnA61gEue%2FzbwCRp%2FiYquzcfHcClBHKAmKPk8jsmN%2B5AP5O%2FdXs0&X-Amz-Signature=af2efb8200c631d2b40610bae6aa22160a555fdb784e633008fd14d420442c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
