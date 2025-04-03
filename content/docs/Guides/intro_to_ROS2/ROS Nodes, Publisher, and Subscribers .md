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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=211951e287423383835a23805c19e217013d5e97b3c50fc90baf75c5cfc497bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=cc44c946f991f4823b8883e579d9db423635b989ae6238de132006df41d1f815&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=15ccbf09360c19c25a3bffa3897c76229420a0f5b7e13c3f5e5fa024f23469da&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=4e0adf0ba30877c627b817f93fe8fb4ccf16aca234a91ac5fa1ee03d2a286d41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=6c218b52f63e7bb91334c7d3730f094e73666c77605b356e788974a7f72f0c37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=5148e590cb0b62f4e9bc9a57c2005d0f0c3c437cd023f3ef213e64764b75ab78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=ad90262aa1b9ef84de0549c563367872ba9561cdd0b9c926087bfa62339d9a82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R47TGB3G%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T041059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIC3FGryLZZcprpO%2BUByA%2FWJ6NeXXZnNc6m2GsffNt4AcAiBK3%2Fsrr1WFWOiwvKO%2BUMrAVRwg85D0xlZSx23QmnSGxiqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHRHz4I0qEKAtdCz3KtwDCIvDlLXXUROdFBkXcsYYLG2U87uSLUKzC5GhFX%2FJqp0gfjwwXjyxWe%2BT2d1QOnRsapWyk2QuetvA%2ByWOgWwdD9CdrKJINwy9dd2PuEn4t6GzoJY9li24BbLShoNhHJYp0SONIcv4n7SWWUL8z%2BTrABltP8%2B9TmnD25OEir5uFfQKJNjUSgJtWMql3Sq7V4VX1lDeL1fMGkKGmTaXTg%2Bo9VT7n57Gc5EHIbdn1XSFIwNVkF9D1K9eWJD7Ai58bX6OtUBw%2BdHdBaUta0P3ksmZTKJ0uDsj0wz2WpshFysCKBZZdGw27wYewXQjHYdeNo0eD22EQIPTC5EJ4PmMgKqcL3aOUKU8yKc2ACh%2BzIUKOtDKQ%2FFwTf2SHLd77H4e8m4lvAqtzsQLWq7AG%2BKdTbku5hC2WxR1ZvyjgbncHzSVy2pgFwCA%2FExfFsG%2B0TIXCeQFJyQAjwfWts7W3x66yjzYxg3DvhQxuyFp2N3OrakH%2FZX%2FL7X2nDpKrpZ8bR4TaZ8yIwUmIjVtOQClyz8TgTdPxQ3rQrs%2ByD4qRx5F9uu7smMyfLdnCIgxNvqOH7BfedVo1mRiQ5V8qzal5ZKrqFU4FdB%2BcCxE7RIlch9b8VQiwUxUfE%2BdSkpytTPoEjUwzfu3vwY6pgH1ECo37Q7%2F6Oyj7Kp09%2BJ13k5pJo5rQCmveGlP4RSA7v4%2BE13rg8%2Fkr16yNXky4KxbwJ66KtwJwGD3SNdBpjL5OrQ3Qr7xQANCQawR3rP591Ymrift87KVLAiO7BBj9%2Bs5KPvdS0p6we2sV%2FuE0uQirYpEDZx%2FC1q1TKpLCOYGO6r8kouyy6z9eEK7urDSgPrkOHItltkw%2BhIJ5ia3sZKktsgGP6mY&X-Amz-Signature=1fecbb1a7931720bfaa737f19601bdea023c60507f5fd1bad276802e765f2d29&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
