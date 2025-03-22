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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=ac7957f5fb5fdda7a9236b58c83f4125c5949fe395b4be1d8792567e7f5f89de&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=7090d2a45ca70bcc44125e4c7694e06cb55171dacb52ac38a49b7ffa765c90c0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=7f3e676338fde1be3d0876cc7678ebcaa66ed588de6364e29b7c59c513ed14e6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=ee47448576f69421fccf11480b0254819e90fbaad02ebc768641bb8eb3c58815&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=3bca22cd9c4378afc41c9c5125deb795a14a7b20b5b3ecf567aeeece05ec20f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=ddbc9f406a001491bb2ec279c7083e1f69f4f3250494f0169e03ee2ad7ea924b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=4457bfa122ab76d272a939fba2fe7a73bb841f4f3d0c4c6755fee9e63cb11fb2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUMMINWJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T210336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDfImMF%2BWiuSoxGpxqLgN2XP2bX9oug3yqNx%2Bv%2Fpp7n2AIgW8AzbDwqa4mN4UWqQf4Hl%2F9MIYC9410nq36E3l7pmW8qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzO3jdlBuR%2F%2B9AosCrcA6%2FNQ%2F5wCKpiBhZm7WXEKJjGzcGOSO2q1FAvWS%2FveVA9wU%2F8hTt9AhAyvly2DvQp9LhGijoEt4jZ24vlaYsSqpWsAnv0kHkagmXSMBZrppDtCfz9kZceDM36m%2BhXu8A5f%2BWaJKSNGNCDX1OAhXcXWYfSaNLB5X2aiSS%2FPWCeVK8fAj5NwlhfHdiUI1rWhL7mbVOsjQOAJkBao2qRbJ8L9UrAApycWHW6w8IkiQJzYpYzEdJ%2Fcn9wDFlNDIA4fBtBDLxPsWUELJv4UHM8FRoDr0RHz4CQmCUALa5R9Rhbtg4GyQDNJDPhXNjn3jAUUbAQ8RGGbrtIs11gAyy9REYxPadaxKahdleopxdZtFfSbAq3b%2FCt%2FVCHx3E4vWVoK9ktXvYzNEk9AR0LugIAEv5Zpo9wOHxBtO8m7ckl7wQnXLZhtgG662LBFGvkCzxCfoUPQgwsC%2F9iUnsFlcO4qLUZQt%2BB%2FD0rnQGZ8hEMvTcdz3YS6DzjRw70kVicRUzUonYQr14ZonYpckMAOsoJsrN04JTAH9TXxpYAftbPTXKPkrSeKj%2FAsUfRrsXa%2FfMCvaPJihFhTgpqx4NeohD1tzVhqBBKvQw5JzCXADSAAsPAm4rDSgJl%2BkqiM6Yh2yA%2FMIS3%2FL4GOqUBmdUng8fasGVBuhwtnVJ8JzkbY1j1H%2FsjB4pvb1WnsUH%2Bzh5hj0ragCLlbrfsZ9NV8qYMTTpG9lt371xtZR0gv36qUe5jxMkKr%2FAvfjvGmEycErLyus%2Bepcu6bEuaXaBle2aLrqzHvSqc1xxeQGRjYIIDyrPrAPzxb6uVTskBSJCSkjD7NcqKhLzN0i4j4kpygiUBLFCGO1zpzpYZ8q8QNsIrQts3&X-Amz-Signature=7260d6b70eeddde3e700b326c811942ab38eee6ae368ec692c291546aa8d1cd9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
