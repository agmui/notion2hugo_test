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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=1ae30ea40fd2337aa3ab4c12296a1016bce45ab27c6fb212668831a3073336bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=6d59b792e09004142dcdac2c4adae356bf04f0c6ed32eac71ac255b300618e92&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=19ff2cf3beb92aab1a58d31522bbb64675c172dd27a9fcc0a1698ff547b55f17&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=929d4d43e5d3067fafd2738439dedd9649054b1ba5c01a2abd70c98dfaafd011&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=f7c5a4d5bf3d28637ceda2b5b4b290837ce470209dc25f8687ee247863b9b220&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=3e597db5f6adf181af5df80740c5dc8bc61ecd6ad016202cb68eaea83dca229c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=ccd42ea2c98165309914099a0d0767eb20b0971143b7ea775e82abcde8496b30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RCQ6TRH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIE22%2F3J0OhuDT5U9bT2KzO72KqvGLSei5DffA2Fh7597AiEArFlTs7kUfzE0TMZa7QacOaGTfR90tA6hsrEDklBZkkYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNreboGCgoF1hi43USrcA2FyWjqJw7UN%2BzY2MgH2E%2BSC77xBmIsdANZdMGDe6lb8vSsFag76MeQd0GMZ12HzVE2CMCud3Z8m0F%2F%2B%2FVsLnY5dPRckjeimDA6Vl4dW6OwiPmfMd09nnCla%2Fp3scvPRezGe1K0APKVDQuenvc2kJtWuX6Ci2QROR%2BHMh1aljSO9Qg1BY%2B8VBH6YECG5eJMfZ0st4b7KWx4xMoldttbUt0dipA8V8rKgp3P1n%2FWlo%2Bx75Yro9K6A83XbnYuzFi9Z5d%2FzT8ScE%2FBZhdl9%2BNMXKi1WHOT2NR%2FOckCHN8HyuVsDvWvKmyszqyEXx%2BLncSZ3S4VUnEW63QiWCnrmqcR%2BQOB9VA7AL41Qr6cH6h6mWxW4YGNoSZXAYw2iTcRvO5HQg7vmI0U8dao%2BxhfdkFQrT2IzCYijWujKzuUSU4x0KUpyimkDQOLVi%2BcCwtQZCBDouSyydoBlziVyfcEo%2BRat%2F88QtWPXdrQTHjrWF9g4GQ28yKu%2BUIHI2DyCnXpWoC3J0NCMXjJd9yPDHmbjsbZ%2BDqA08vGKZSWnOgvUGqiU2GpM9z%2F11JspaBGCP7IgtB1gXKCOqHK52Fn0SRzocwL%2FE552xYi%2Bn%2BXWKIH7ZNXAR%2FBK9%2BF%2Fzoo4z%2BdZ%2B%2F1hMMCpsb8GOqUBGtlhLJITEeAlkELkv%2FsLslgG5XcjYFuYu0ABKOvkEGOxCe4oOUR%2FqtRa7LE%2FQwKl%2FBLwR0Py5P%2BN%2FFEb0mS12u%2BqDvuXxzANn%2FbJQRL%2B42XZ1MGS2L8SZyhCvo8OfvLs0pGQij5qKN%2B%2B7uCBeOHwOsLahGsFZD4GwfuheX5WX32LhkMEiD8Rdj0VoFk3H35gf3bQqAr9AYurQNQCirbf4vABbLkD&X-Amz-Signature=090f3ca3f789522c65d6f939641ce78eb78b699aad4806f47249ed290ecfccea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
