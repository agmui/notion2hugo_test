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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=c6b15d3047827181b4a60dd400dc39f32fe3e02878c02dbdfc34b6d5dcebaddb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=1bafa9070d284da1c1f728c442ce1cae4865b948e989c99758243b05508fa290&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=5bd525b5d9c22fa63b44a9e5f9bcf76982cbbd27b7d07fdd66bc6963ef044a85&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=f35c0b833c5e50fc10e813f7131d193f887417db8275739561be5112e1bdf3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=deea2084cf05aa98789ae4d8057b647edf56ba07a6d245ea505a67153e40b0d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=30e437b57871553908832722ee847f06eff53c90ca3906efec307ecfd03d7556&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=e3b3c2e81bc9a2f15eb7ab436cbb08b8c9188bf739f15ccf8d9b40468f172d60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YG3MP563%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDl0hGkGptMYRQSq0mJnY3ocsSdsgcy16ivLGglXEAZigIhAPAX%2F9p8%2B9uQcNrmPvRWdpZ1BIVaJf7%2FRj%2BblLnpUG%2FcKv8DCFYQABoMNjM3NDIzMTgzODA1IgxmTV8uwNfDfCo0AlYq3AMoreZrcQx%2FMhA%2FtZ3XXDyB0q54%2FiGsEpxoDjSLzpFce4RtYk8AiWl8E%2BA3hXJfuSYjccO4ZFABw28mM%2BZZUEtKFF6OZcCOkcM0YvuR4BFobHFzEqnkcITXAmnKMR48OG1xXx45cZljoXBUQlffyhnZbK%2B7jSSS%2BMdRjmg7gvdU8ejFxzjvmndIju3pD%2BbVpSPuvyiFSUlQfGk4VH4Xn%2F6nK6QvfJYnidWL9%2FH%2F0LfMsAR%2FZZwW7nd%2Fs5vafirFQ1dMjVQliB4hvoL5u%2Bk41a5ynBTgZQLSGEA1%2BxIii10jQzZvJqgjHfTNMy3EMfga%2F9Zpn2Pss6OrFE3x%2FS9TBH37syCc3gtJtTBW8WlRm21huKpLNVsvHOWAxLwjUG6Q%2BV15lTRM5JR7umWGhGMRS%2BzBBCwfC2yph3tRowOUp1flHrLrcpIt%2BMgk5yKe3hexY7KkvJPwzjsZ3RFxwNnN6AhKphkBPLYPhvyhclfjFFYgEAMk9vZ7ZCaVYwIeKfSB3p%2FiQEiKT9OXHG5nytHFJZxNswnW1rGpcbNHaK6Wm8uM5BARhg5otN%2FSMXe7Jfa7flY63obyyqKYak%2Fm1larkw4fRQIIRbyc0h5v3RX1AHicLike%2BzU0GVFMrNq9VDCa7bbABjqkASTST6yZn1j845OezT7ZV5K4%2FC5FSDWIrZiqSxn0lfCfiPdV0bkv77xMUVVRxMcUAlGXHrpf3jxF6RAbwSEYKUx0jP5LZQmeFH9aat9nLUTYYY1YTzmDBVfNe3QK%2Ftncv8KEWu%2FrgjjpUCkW3dX3QHxqdGP99lS8XgjynOq4QcZKkZ%2BXbCLmDbkFf%2F7vD5Ygw2oc%2BLfTHz15D24dNBTQ4etsUsWI&X-Amz-Signature=30ac76a38a446e45f4da4c10d1474b39ab3e07e777d5076129c59b5543540b0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
