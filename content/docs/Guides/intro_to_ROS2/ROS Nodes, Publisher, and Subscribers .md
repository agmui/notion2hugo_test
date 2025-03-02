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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=9ea05c296ff677fc572fa47f87128d2069d9e12f633e9e714fd33172f0e0563b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=eda9cfa0435fc563f79b36980a9580f7f834d0ac7913db414ae83a3685917445&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=6ef484459f1dc5709fa3c5764b58d67ca93340bf1418679e52ff1642ef421724&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=23f1a8fff63d8fbacf7f872f7dd4f59c5bf3f8a0d89f33af8017bea857ee4e0a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=38479b7154d86e3d26141a380bc8d2276e01b845f9066ac2f3b98cb3c3cd0b20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=8d4c28b53f6f76d73114b8fa4d83a3f71f742af271f061773ae979294befd749&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=35e6292e8a0bbd09412de296a1f9720b06add4cc531c7d983bb493a724d0f2d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OYTW4VT%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T190116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAyd0gtQw5VRNyaN8tZFkfww6t010rCsfwSuIf2C1%2BDlAiABETiVaDqQ%2FedpU8SODnvC87u%2Bh9psQDCoy0DeX1sipiqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWcCnvWXofZ1E3wSFKtwDwYPVQ5unvdqK4FK6tNUnbSpw3YgNE%2BYOjC9OWtfEAXkz5ZJcLAEigrzBz4WYz6TQwwX1Wau%2FEU%2F%2Bu2IY1%2FWvLrJlGK4jifTQ7Qt3xZPPHnOXWWXzVReVqNExt%2FQ0V4sOISqJ2EIib%2BWnaApJI4wsPi9fNjX2%2BnT7YDsAAwaOuRtokLtWKaLQI4SMZXt%2F6GxAHbrlR3j1QEDzm6Xjc912XuqkYpXFiqhVVpxLLLKiAbI6gfuVHNDwHYjXbnpjFqTXn1FWMitQFhuONhx71EIfAZ27yOwnm%2Ft0ZplHNX5O7I0yJWc5ramVleFPgSQ4Rg3RXqPM0eLEEpvN5SPxoI%2BE170vS8wEz54pBzGLMV31d0n1scn3WWtIRkrp9di%2BT2Fr7246CCChgdjkDhMqM5FVHlwOqiMrfM5Kc8K3sfNbAQHAOgBzuC6dPgcS4EQMmy7SqK1mxlNanhwmJrU%2F9M%2F071HLK80w4wXZrds5O2uizov9zv9hf5Ec7ycMjDDSAbD2Di2g2S5sTNBYbPNo%2BwPeEATBQeOcMV%2FJpinicRHIVZen7oixLAONLSbeKBAeCADDcMLRs2IQZgWA07HSgmbpWPDCqQMslZzS5lIiC%2F6Ix%2FhuvvApazb5LLSz%2F6YwrJqSvgY6pgGm%2Bzcwa937B9HwsP90IN94ltce9OnhCcKB%2BDgK7q%2FAFjfv7ctBwC4260HwBZOR6Opd8PC6gArWqzr2ywvnHzOk0RfvdMPFfS1Xqmvy%2FvJREI%2FVkzyTCu4ekcs%2BYcjcGxFrwyAfqGpUzrQJz4mwcFm%2FK8YXjSo1B4vGSBmKb%2Bw6hE3FSuw5at%2BHgF5p3kGpgCtaY8tBKmVc0ApuFdRzQ4XVo1NTiJxn&X-Amz-Signature=472217fcc21f05a6b955a2ab466d20712b0bd5aa72696825448c0136b8fd4518&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
