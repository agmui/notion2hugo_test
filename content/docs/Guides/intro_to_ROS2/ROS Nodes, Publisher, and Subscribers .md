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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=f6d5f543560a2fa70d93c63be70629c46caf4d9dd57306ae21e802ec9cc5c223&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=9c29c5cc73e07626ba15b70414aa98640962d3909ba21212a7c449812eeeb806&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=a599b1ffe47469a9e45dcc9f984b73b765539b3ce95da978a42568440d80e2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=abd5739be468d7abe017a85de0a5633150bad792534cae2a8fc9bf9cbe689aa0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=4a6e3c0e6588a5c164737c102799a3e10418bd745918f754918c1604b7c83848&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=7b4f5654f8f447d616c2219d4bfcf750de7ed26a0b1b21c02ec69c0817d7eb53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=e482958e0d4951c03d5e09ed8b305b71b9c660c3fbfb875940924df3904564d2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QB2JRQU5%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcMe8hpaUmZz%2Fn1kD8m14Q2c8AKIeJMQmmtuaSwV5sfAIgIRpmUZsiEZc5BG%2FYtKTObK5vSEKBQ5LQmCffodjmSlkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOFzaeTyJbwe%2BTZSjircA1eQqhHGgBuBCf5N4zTcCF8oAcZ%2FAi0ONp7tuFsbRoCkmTuFX2Ml7EOg8bNXw%2FMrPB9v2Kwraiqbz79cd%2BRh7cfEbx6npf6jB9FDDlHRVo%2BSG8b24y2lP6NwRessw%2F5CKAI%2BIE%2B%2BR6u8Y2aaRu9c7GBQbmpEFPNtrKzT%2BQpet7RvPHb7oL2wLbrmSOw107P2F2C38SeW0WWWh%2FNNWRQjH%2BTlOslqAz5MAuO6R%2FQf8nl34WUx4OwNRF1lN3OWHUF8z5lstmjxAzxo9LcC2E4IuwUlJ7uCx6nPopw0zlUQNZuoHlKMPC2MXowAJG58eRK7hEi7GEqxvu%2B%2FrVbBXSdpfgv%2F9hGAnot6CYdsaD85GK9Zs2FAWBaiZhjN7qK5kPLM7g9gXTFYhNvSlF90CId0nNoNwzjbnzSVI5c6JHo3J7HeslLRuuGnX1%2B2qwq%2FKSd8MZPds7pboEOsXWI1du0PqR1X7UxbBOnjG2e%2BaNaQl2I5Ps0vOp%2BIRQI5vL15zKKzcYqjbY1qx%2B3vw%2BbmWDK5tZ1%2FqKHxQnEFu8gTLWzYRTpq3pm5k8TaStwlJoeagohNT7204TF0YW6MHjGFGlJolKmQVMETmJ6oONvXjnBh%2B1m%2BQyajOv1SajVSEDMiMOfZpr0GOqUBJ8ooQX2dJj10MNXOlIty0VhAHrhqlVCpTEIfogBG%2FxDCqTITnXQViOTuwil%2BBxA4h0WD3u4%2By9bz2rZjJD5fAIHF%2FgaH4qRMDkzXY%2BpCi8DrmJ8zIDxRWxAjuDlBsNk5oJPEvVOjIOeb4LbtvRUhrPsWFu7JPVLu%2BKpwJe4Qw%2B3KbiRFKtAhso85dtCvePc8G%2FPkAiRmfusKhvv%2BVjsfsvn8qrq%2F&X-Amz-Signature=5e770ccd00742fe60dcfe9b6c63e008327aa881e8a6d7999f9445689ee9eeeb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
