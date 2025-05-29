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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=962132e56f892b13434f5748c997adc0f263b6aeb8c75af199d116923b1ce416&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=b579ac468f2d8fe26e9cc0af9af8060fd6a8b4f6f1f92bcaa1d0a712e6868942&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=8a4541acc29e38bd3a022a001f5affd2678ab7a10fd29df54ab7adfb26c7fea6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=858d484a1a662841a67573b2cadd1387f8c3a5e99fac2473f8173426a64b75eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=a29fde271fd99521d23232e033b6b5d13f06762868602b65faa689cfc72bbbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=829427c10b2e1a4890da0d968892bff1a496703b4f003a36917f43442c27bc33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=8227df92bca2638d92f1a25c67c6499b05cff482b99311673a1d3db02daca0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ63VLZP%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T150855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBP2S0tNk%2FhvTVDzarbsXZDm8DKzl85iqes62PZaZcY0AiEAv6gJqn3dd%2FiOzuQMj2cOFL3tGXtzP03QFUA5nt47s2oqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOOCY0TewPML26TEMyrcA2FFdpLe%2BJVFcnSjvfe7mVQwvIWmMYldrJ4JtANwaJ2s5wp5eEvMhDQlOsqMSqj%2BA97gq077JzLTbk2QoDI0JpGaGZgHDAF2T%2BOQSuOGUcQ2gtlGsI2sBUk78vKaczFYzDitSqiV8QmQQCV9ELfX1UnAHak3HHKg97iwz1mAww0Y6%2BhRTjgdsHk%2F4DrDSMZ75YqjtL6s%2FKJnIt%2FQwnnoroy36dnKEUBhEPMVwfHwjH1v6QAVADx24o9wzlblG882ZfgPZmrDlnvjYctt4%2FhvC1aBsmSqQx2WzI7cNurtkvqRTzapzjIupCXzrtL%2B6Fbe5%2FNdHOfNxvOq7hqsEncAqjiuw8JfeO6c%2Fr2UmSVjq4P1DjUhzn1S9ZJne8oNHxoPovsuA8s0EkOl9qUfP0pj31SRMAYV8REgI2zFLeRl5tQDuFGtXRf7cbKPQkExJOUndDaEf8YmCjri%2Ff8LseE16o65mtpu1k9GHHY%2BDBCHrcRPjmk6VIk1NeUfU9ljdpC2s%2B7VaxGYcaIGhTrS2XVchsWdI3SRCSe0WqykacNMk%2Fz7v5AvQnv4t%2BpWWyaq5f14XODgtxBncUHD%2FQXwXHiJiHI%2BKodmlVekMH1sCLALc69LiBCjd9pKDtGp%2B6MqMNOy4cEGOqUBQbug2Cdn5DFKsl358kAhHcQCbVQ%2FyFS2XtSZBBRTEKey%2Bz%2FmD6kc%2BJXlyjUollTN3KOeNRlB13u6wVeOCt1p%2Fa1hcbSOpD4%2F2P4V95ZE65RBIgYh58xS%2B7OZk1kF63urOPUfMKMzUuDmS6bukJwGWvFpUfEWe0H9%2F1VQZfvdaK2GZuH5TcIvE95eRwj9Z%2BuZW0OMiscxxCUevKBFJFSRp93O7GRV&X-Amz-Signature=cde27452cd176d3f754c1bb6c51e76aa3ce3b103dfafdb9f678de31ef87e3c99&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
