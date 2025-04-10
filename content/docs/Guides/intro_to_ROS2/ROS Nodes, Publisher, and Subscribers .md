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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=bbfbc355ae8b0b4edf7800443677544f5dd712a32f3b18b3f0dabed42ed01268&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=95194ae2da1ad136b7d3a049e64ffe126a1a650ba9014718945b7c969021c72d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=86c8d7a8c10800a5e22a0cf2986b5167f42a40fb2b67d3e76b67d7547233d9c1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=8e456fab26eeb20a1461ac89befe32323e802c3e21b8b71991a1ccee1fb47658&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=f50f85502b41a8ea34f741782e53d4390a2112128548158d5411c1c262388fcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=b59188a8f014a298f638d5600fc39a24ca8806253d6924459bef3cbda53a3194&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=da4db70fa4cba3f726cd9226ea45426f20b23e41bc93e68d870538e939b49403&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCPZZ537%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T021945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQCsVN%2BAZPrmDjiZ%2Fc6cF6HI79S1zx46x%2FN9G21zHDIHtgIgBq2832%2FdsHDw4nROmjoKH0al%2Fdpi0VJ2x7I0jQgxjp0qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJrDuLQVqR%2BH1y2VXircA%2FOIZHReIdksCPqQtcfVQE%2F9QvAEZArbQ9c56Tmr8bJu1p34V%2B7lJKG9miY6fr6zLWwdgtUm3LMxd%2BLcvNY6EX5Mwun%2F3UmXPK7QKpTbyM0hOLT5Cz7SVihLHRTaDGaWDXswG1u9S2Wqv5T1E27mLVLLGvJ%2BZng360VnAHcniVkKDn2%2FHmKeeZuqJLAgXULgJ5eYQV067fP%2Bnh55fXVP4M%2FRxZZ1rzp%2BlOVBIvSSWzTUsEVnbMV2eY7Yi3UbLAiukF1J9w9lxhMrlPhWe58xXQLA5QF1li8qW9ZB7oSKWItoRfzJpBLp5dhvTsi7tprnFqyKE2df1YPhIQXpbGhif8Vkh%2B00BEQY8zF1f7BN1DnDlp7ZxXNZm%2Fs4Cv0C2EVNZFbCZjQ9VHOoZilbtPMyp8PHOjmR8FExfY%2F0g3ghYab1u9ArhPYC4Du%2B7S4k4zY9JxMFyIVOdUMRzS8gU8PtPCTuno6R3%2FavNRxBuTk1A3nu09aCEvFA5n63rZHHU3lhEGEJ0neWu8lnfg05kQbhNH%2FmVqpWusdPzWFKehf9f44eVJdC2YTXVTNFxFPYe7Im2JDdBRaziHaJY1LmqPDfjHtIciWuqQrcoU7%2FdXv92fOq00SRockDs%2FilKciIMLzF3L8GOqUBQftyxnXgbb1Sy608vKHmZmQWtZWtZ3gvoJxNWjdmm7UiV09aS9oz1DJxrTYOynEK%2FozjTEBxsg6zjMrA0g81Gq%2BvIgTb%2B1xHqadqQeg%2B85WAgzdlQy5iA68UY8Fe2gKIIQlnFPrVe8tq8uPx72P3wAeIbt8chm2bDHz2J84qFNW55uqnjX8vFMjD91VE%2BAuIEsd%2BH6%2BbI%2BAKJdPoaXQdxC1Ngmzm&X-Amz-Signature=ee0bd372e7b16beed388c2c05d5a24acce88cabb7884dcc0e07e3bb4df8ad026&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
