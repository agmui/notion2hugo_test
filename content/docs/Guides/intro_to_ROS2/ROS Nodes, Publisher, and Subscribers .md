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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=0e70e113c89def35f391719dc7a2c44bbf1bb0fec04afbf9a1374501e2a09450&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=24fbfb4e2e5039c0653295aff6f3a0873518cba1d75cb39867ab8d8cb5ad5535&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=a25144e4d5df202eb6b48d9b2c9ffa695b93ee1a12717e2bba4030e657d95df3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=e308c0790a4344026ad45d84a7bcd17ec6a1c5724fc1efe49d646cb67f66c758&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=c3b5ca8ba38e5b6e3463c3c724dab97986d8180c1a8afbddb0d23293d756b263&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=48d571c3b5ec140b1aae3f5d634f1b448741b67ead012c222d0ff0e2b58cd5f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=193b29bb1791f565508f72c37b3c8386472da304c51e599e1b9c40dfc79b2788&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RAUBBY7%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDIUJBP6uZP6z6x%2FlJpeTtBAg2Duws%2Bwy3Pqlw%2FveCWPwIhAIUGIZR0LGQBN6q28oKspPRV57NV4q%2BatBr0TeIEbM6jKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzd4xC0jZh4LEIsNbAq3AM6FOy2H%2Fm3No4yIvZ%2F1M%2FKkCzHYrv99v0xAlnxgVAUCHHgdgehXESxPqWq%2BPf4EllkQbS5I8zwbghuXNl1Qgk2jZZHyauRW5npGHdhdpRDRy64RU9shX1qw2xoszUe1YGkDYX21M4eaI1vtTH4cfrEUmkxsYUf8pKvaDcOUjRmNOnmjcwni6UI%2BVkCL3AbooK%2BJOpWngGnAnJL%2BAJMPYKtWiU%2FD8opPa8%2Bt0Y5rCyAT%2BEFuufA9bIIq%2BSEDgBGIa0Gmaa6Qhfvc3laxYH47YtnO7ShjACWJ%2FYGUhJZh%2BCtluCheaJGQgmE8UTsBa%2Fqtu2DV7t%2Bna%2FvRL5nSm9PwQdWn0QYT57cYed9lukfNeWBlMjUfpsvM6vJgMFDd6JcrPbdIH1o8CmjSNRU6zXWoK6nThlIIJspAT9y%2F%2Bl2qFxTpkb9ap3uRz31ekh78w9bKWU%2FwU0z%2FV%2BrsuccOHbZDjNeIF8LOnKGbcT2nejDmgYapNyHsmj%2FltUGOnLNC9PGaW6xglxj%2FtClHJj2rFGLA9qH7YuAaUJcmioMjBEgaTvsO%2Fi1eXmqsW0t1CEQgmO4k0JYHPKhvVsipn%2BNsPeCBzCwEuJKGoK%2FnQS%2BfMjW5Q7aiyop0Md3F2HR924M0jDQ0v7ABjqkAXvMSJdXMiGZwn2l5CoTit3H5vkbGCeWxbSeuqf%2Bt1wIfbQP6focfo2SHmfe9IKUeLtM0ZVvR4KIyj1K48GsH5T84kW%2BO7mTYoJGVvjoZgcyp1WyL0%2B5ssax%2FecYap%2F1OYW9%2B7iBxu1wY3VLMI9B9QNS1DCGRm%2FGFvUQYro40Tu%2FjIgRAmTZud%2BI%2FbVNYrKIVLnjlbq8mk8ZAPK6SWOBT5tUjFcr&X-Amz-Signature=3d995b8807a558c0c18e8f6453cb3ecdd949327edfa0fd759623a5ba699d286d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
