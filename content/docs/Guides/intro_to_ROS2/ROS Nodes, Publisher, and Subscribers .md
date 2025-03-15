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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=dac0143aae745eab9bdd9efd446727fcb3e6d352f660c966810ed54e6abf523b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=9b8030837cfb15572ec7a4e7e34460a4dbdb589ace7bf319fc2f65a57800dcc7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=aeb0ee7d8a0020d341729ec1c49ef8e30a14104fbf0fcd469fc661cc3d434e6a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=22896ae3a181c26595a6590593458e9241f19be60e4aa5a2ce82979f50bdc2c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=439e8a30ec04b4e1b3b470c762ac3cab82df7dd63b87473e1a435ab53cceef20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=26b9109d6c37244f7bee0c62553996d803b48316d2563595a3cf20fb761ba6f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=8d4ea57972096f4e7e8da0470073ce94b0b7c6c01aa22126ddac6f35cdd581c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNFRD6AT%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T021242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCCIU2IGSIZGxVqPRBfju9K%2Fttwis%2FlcZE472nVz%2BZSgIhAMKyVOCNiSbiY8yewLDxxt4vGTVFo4t6DOZ2w3Gkaqy7KogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzP3AstcJeGuzfi45Uq3AMT%2B2vbVNGZd2lmcAR0xBzn1IhzJGZVr%2BANthQHzBUogoGExhJUL9xcA71id%2FzkUtvp0MQYLUhLtoItDY8k2isoDZYYSvuLEkzokshMp3RfNCpd18D5KniB0PdFJMecQJ89kakQAl1KXOU2yx0%2BLfHlfq1eXnjDFEPoZvad%2F4FIc3mBSFktq0GkIfqIM4vsQ2jRRviPZUGmqKkk%2BjEnDaBoFhLn%2B%2F45cSDKJ5EW1HA9zMhLvpbgmcZN4FHzo09DHtB6U8eBQirWKiJPtaLHDuGkSegu8JJaYWnQR%2Bo9oDWIMRzHeOLDq9X0nrYZwonH4IpKhbSmNwzGYEgtBtnB8jwe6TqYPNpJQkSIjawfxTWj5cJDeg2%2FYTsEhxiQD2uQGAgqy%2Bh85F69ESmK7LnJbeQMdewmJ4p31ZNAvq3Ufm8IQCAkwD5p1VPjLmF%2BOCRnV1KsbHbVbhvnfrlKkkPJn5c5GsrHqM4KSXh2wQNY7vn9yLkQ9uGWZpbG69SyUnHphTOS0i24WoSBVQKYsAwnj6YnXwXJRWxa2TUA4wZpINquaIj3jXAlsmRau6xSGxyUAAAyy0fiwxRXxiCeV8sMMPNnNuIBu9tfu%2B%2FdDsVPEmXe%2FagnE2KpsSyAL46m%2FzDvq9O%2BBjqkAXHFXx%2FNUwdMJZjQeDdXP3miJyAMu%2FRIl2FARlzCVqM5xlPBh2rXvCoy5ptsHKVTcBqytz0mCL0ZRUh8WDL9VVSC%2FU%2BST21GvknfPa3WczdQu9rfsYF27CDkMUN508iu7AhONYCVAdTcCz7nqM0qA1OE%2FrKq8siMyg08LBXE3vxttOymD%2B0ln6ZVO0RNlNE%2Fwc%2BjQqsIM%2FNfGb6P1BzED3SvEqYn&X-Amz-Signature=7f2af60854f3273b655ad72ca7fcaac52e497b801adb43d734b0b302913947ff&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
