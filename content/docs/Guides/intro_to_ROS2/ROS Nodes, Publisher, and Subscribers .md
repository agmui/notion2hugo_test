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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=03f61027ba9d714745ab83169c6051fefb408480ccf42ff8f9a908d737f6a694&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=aa5e34a28a5c57f74a0499fbaf17c9531a1188a9e88a498dd4d28c0c5ae06e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=97dfd2e6c2c731224d7c42da07fa318d688c77d498713a671b2fcd17b993c2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=254c8cfa2e55b8f06bc8c7ca424af1940565eb761108c845bc44538e392acdf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=81f8caf6285627fcb2c2f3e669b837815ce7884edb3e90a83ea42fd4c503d35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=f3e0870372307b0e251c096cb080e03700c1a698cb8246a3adf3c6df2e2d93db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=c7f981472234a7a66ac2bac3698b2cba9d2f07fd388ae1ec89b3cede6a4450e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5TS5IQ%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T100958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiYTSWoXZg2%2Bh0ZzxqEWH0a%2F6mIZt1JyxdrIz%2FJk3TJAiBLam%2BmGna%2Bcel2q1pEsE428AXpgY%2BN0rmM9RCpqMbQ6yqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLRRFAE9D%2BVk3fYeKtwD%2BFIul9GMhz1pb%2FqcO8QXBhMm4mhaRjxxC2a07Kcpi9Y4elV%2F%2BqH8m%2B3ruYSeYrPzXQ0k%2FaAI1AyYEbXdQDB0YUyqR2A0eW6B6P12Mxc5J2MLKDPYwXj8tfBN97xD3U%2BRFyiaoguNlpG9RJopUQ0eJMf8UPEDR86AMMx166VSu8udLVg56dgmv%2BlWTA%2FcM7zLNNDsEA12YPoLXQ0MSFN9bKL1PMGW6FZ%2Fy%2BXGW6dH7do9rkmKoZc%2BOT5Gk4CsU0WeB%2BfnRZwnJMnQ%2FhfLIrFOI2Mw1gk7KvK6GK4QSdeF8Hg9NwG9sqh5KcZ7Ak1QhfHHQsi9Tpm7Yh5qCM4XfFNdIj9OQRsH1pazfHtwrOXoXzg2nYFjcJn%2BntxEOA6yNIX2CuzxajsWKzfIKil2ss4YC0Fm2gEZDmtK%2By3rT44q8hFsKLZOs30J%2BcwfFNJdO43AZz09CeYi41PZBy9pqxtbDNBK9Sqaob2eI92TTfcmBaUzKzC3gmBXL04HjK5H1EQUO0Sqbkhn%2FbWuYrHcyRG5IXZGihZaA2ZimUAIqObZwfrAiADam9PXGtiTXGdANsPcSaQzhU82p9H7JurSwGY6NItIchBmgoUWldQPT8BycplSctcZRSeZVW%2BZoOcw9ozKwgY6pgGP7ERJxx96owSW5YlGf%2B5GJFoP50RfiLCYfnn%2Fb%2BxB5clz25hebAxthFypY5bfQRGlmVcz1sGSRzWpL3pLVi197No4nk%2B4Fh6djmJ8zrkTW%2FGmm1Ku1MCGUZJOaqGsQwnIahaKrXDSaIlz636TQ%2Bg1hn66SyfSjcPi%2BgcNvn%2BCHaZ0k7Vcu963LIlXhFXQaU0PLTh0PCO4Bh%2BnavzB%2Fav50Y%2BpaThM&X-Amz-Signature=d7e1fb80e4fcb5433f25884e767fbe2088b74a36425cf4d9d56ffaf32a0021b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
