---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=a384cdb8b3600db5a3afa2ef8bd198b79519514da2d981fd2c0b28c2f5e16aad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=09b738eb790c38fc3053cbf68caa13b7fda6c3b37c900ebb1acc419f0b2e8831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=9ff002ea67cc9f60ce6e6aef990891311d9b31a58b84db0aa09bdccbad3d20d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=191c59bfa9e085d66baa8f487f5d08b08da4d233bc1b79ae1726638c256a1952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=7c11147198a0c4f1c25c26fd3cc2e9b1c2acd59b9d39b72a78794a4d12fdd670&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=703df36ccfa38af9369e2e937ad68b43080dafab6c57fed91f84318ec804c8ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=375543fd4fc4bab86e1f74ad8474acca1379fd5efe4c3147f0ae1b2c45e7cb4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5KUBB2X%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T091548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCICIFtPVxfZ%2FHsaLugUfE%2FR7QgkRd%2F%2FcWrUF6BzCr%2BSDMAiEAlvxxxLZepcbc3bepW8yul5%2FqepSTU5IhZ12OnGvnY8YqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJkfC7%2B9xEz11eUnECrcAxGxG5bfGzs9S7eSQ%2BRV0HfUdTVEfXmqIboFCI6oBuB0NjTm0BUkL5%2B8eWH1RAmWE4pUEO9QZeNeMUMnOha5xcvx5aywPUtVc5NIhllfFRxy9WwfLXL0gKpvsZqo83ToTv%2Fk5%2Fyf0z4bhOMXNxQnW%2B70v7d2jsXjHrbTEB64RVYh7wAckVZ0kZ4F%2BtYeSB4hX68l4T92Y4cHz89p1kz7ibVkFJRPm%2FaTOcU%2BFXQ%2B%2B5386wZVpGB3T8Wk3OCzoch3ZSfQrTyZIAgS0zfBE7nGXOJlk6mhTd%2FGEl9%2BcgGQ5rhEOJnQ8T0NeZUnfe9oSy8KgKPgnh8szn58dxDDDYsQyqkGKjciFXP%2F0LxXhFMVKW1NxPezs3i6oc1SxeZfFEf6rRF0G7mk37BQuegogLlYrpTmRClXMi04RopTS7KDRptaavQcxDKK9r2HSEcBaBBOJkYmfcpNS%2F40rdxdSM%2BozTCCG%2BAgk5sp0KxzDzKY6J2lVe8Vkn9H%2BgncsE5mPpV9u7Ld2E%2Fx%2FYeRVN6tTvEfwWmcOJ48w67wPKrKR2RdC%2BlowEYiH9z9mV6YivJ%2F%2FJkUW5ZK7ZVr0xZxjtz%2FMWg04YEiBU1POF2iTyFnBipjnQ5rTntPQHPpVwlAHRs4MIDt1sQGOqUBK9oQoO6W6q4tQhGy426VZJBDj69RF3jFSzb5ka9TGt36SPBTTkYsXFOqCQTVCeavK5SREh0lRTwQPou2SM3Yf3jvfbbDzod9Mt4SOL0lyI9aWDyAhLcVYzcT9HbiQBTUjZ1RVGGahS80F3%2B9FbKHc9mwK0uI954QcvQ%2BuZa1xOvgHGbqD6CafozKGljn995LGOD4q0Vjs0zr0CbnBg7vHQpkrjaY&X-Amz-Signature=b8ac5c2303a0c258d52b90ff6fd0c1b81ae77850bde2220e635f34436a6c6c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
