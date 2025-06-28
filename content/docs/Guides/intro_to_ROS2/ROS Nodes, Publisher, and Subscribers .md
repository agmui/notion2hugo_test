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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=6ec5942bb444e1c3ee62fac76ff2a859d83a3f532036e1807eb9c7376fe172ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=d415c4d4de6604c6a0fdf608037b1bda3f9aecf766ecd763894c09ea167a8ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=1e4419afdc8fc6789789b1225483abcfde7dc0bc5891012c74e79d9de9144939&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=295384155f3933de2d81c01670e154517b88225969c4660598ea37f60b609075&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=474f9c3448d45a867968fdde9a8a38802760dd4c749af54ee2828c18eaf4f241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=38d167e2874e0fbdadff88b12f48065453f8304beb7fe6b5acc651e53c39c90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=8e8bc25145dbeac83e96a0f4fa3dee1acdd37e14250275626177aa34f7240a92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQBI3K2A%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T041238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxkG3ZEnXXGMWAr6GW5T4EpHlFbzd3jkIi7J77d6k5wAiBy4%2F4ihkXQwnqp9wtfrYBX91SF5mmxfhKLbNjp7dNAWiqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBfYRfYYC65EU8jKKKtwD9BGb7M%2FkAMfzkP1xnoigXvhBTLRYwyysGwTghN3PFaCyNXuZiDQkHezZK6K9Mznk6CZOy%2B0m%2Fb4luWjfo6haP0AB9ZYwv49DU%2FDQIoT%2BWw764sCwQT2iUYKtIy8sQf5X84o7vYSaVNhfvj9UZIOV2ptFsZq0W3Op7FuHglEt2tZgL9WuC9%2BR7FfDDoWXnRP6vf6fOyx%2B9xLa3ffC9YuYknWBLYEHPkYqbX2CtJtpH3Jy0rVRrsgchFLa5RiyFr%2Blq9z3Tvi0D8s%2BcTe2hmz5iGYDxpBpOXrpgnaPdwAK%2F5cFIRN8t%2BFvSrTt08rmNhR0KYaJKvFl%2BK%2BUKjIyI7xMGPpQOegFVkY4s%2FdVIas8CAZWasrg35hMhZs0DP%2FFgPGrBgQN%2BCB9qBH2M%2F73rUyHHZbsQm1Wv0Ir1zA%2FmcGKBz20kNfT05Vh54M9lJW0iHG7DuK1av5JxiWntOyZIXPTyvXDYT0cu9hXZCRNRv2zTpQtCxwcDFxwp2S3zTzCrkLi0s4KRCtvvDvwuQi09GziVv2RXZdNG0idhxIRtSvQd6JzE1N%2BJjyCZ83tVW1WgZjFkIMvEHCLOQ0MwFOcKSuW21xWNU83qZ%2BLQ0jmi5df9pVI36X7gjUP2Cdc1ywwhNL9wgY6pgG8porojpjdYKpeDecPW4pYXynbv7gIyh5o7vFSZfafYx6wf1i7U8KjI45xPg5tV6omaqF0GcFxF2JdPCwlg28WjViceGn8SlBxqBryq4MIWZLaVkOmd5ERy2Wfxtqv9NJdxMPWjRtCj7G9B8rAdsL61Gkma7QUptua1r%2BJhK7waL8uezttuc1cxiDToUxx08Xw0XQqrSE5npj2X9Pe%2FhHTwvpTGs7v&X-Amz-Signature=0f382899a3631aafb089ba0292e6aa1b03e4163118131dbd2419cd0025317c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
