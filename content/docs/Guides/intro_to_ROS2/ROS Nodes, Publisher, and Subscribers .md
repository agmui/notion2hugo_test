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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=f33fce2d48de5d9148920b6014a7a81f1748246f46959cc0a381a58bd22928f3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=7eee6ff608d4334f329f1505c8c837373cf756c024631dee8cbd6d6d9bfef67b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=0b0a0f0593e46076b51e672789fa3b2c9bf68446214ad813a977dc956257e2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=175420394abc9e28d9e7aea20bd4f4c02c04537b0b24568dca5910baf60e5b5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=39befcc9fd1bf12f7abf4a24c43a2e0b15c761e544c17b93db8fb165be42513e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=fd025b57fc796c6e8a3cb48b42206648533ffb72d3e9a1b606c891884ff3120d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=403a65c06811214bcabe57a899362c77202938ad4541a75c50d0ca0553a0acaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNOAEVNB%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T220700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQCWxSUVoqZSZjlZN471%2FDQ%2BaJk16gLywmVVMSd7GsYLXAIhAOkPbbyIUgApMqweAiBoaxtAtXMdeZe%2FzbkFCo8I5tS9Kv8DCH8QABoMNjM3NDIzMTgzODA1IgxHZAkGu4%2BuohClA3Eq3AOcIZJvw8Ue%2F5PrfFUIXpnxUoPu2%2BQDP3ubxW8LT0bTOiea9BY2nTIKuQDqWOR62Eb7Wdc%2FCADzopVVJTR1o%2FRfe7xeqYoCci%2FxMOvpIxrkACjfffJhk57eR0SUwmsab3g5tZsB4WaCh46lCDjHqVVgK2giRXOBAxPdert5nBzx4MJG3et8JEAsZxO%2BiHbWTAAWo7uR60m9gEBrT16EJZZZmWxkxTqMNT0ExtGvrn06irRf%2FgSObcG984jfr%2FRRVCy%2F8tTIWej%2FkCVnGqR7eaQtmHjJjZ%2BsF4tAbIjiM5FbFgL5jH3Lf8ejnjesek4Tu1sJwHlW7QGcvv65qHBwAoeGCaDpzETbeqi3bJOXqNOnVGlQWYCf6VDWx9%2F%2BFCkjK5qP%2B4r1ENi4LM%2F%2BrhKom4IKKw8o7U%2FPRiLlclPnWvTTS9F%2FmBimSwS9KzaaF7qUf2bq8jquD3dZ7U2Hf4Qn9sBq3u4dAKmplZoe93Q8oxyOz5TTqcdEOjL666ZolhzUv3vtlPcwGvnY5TvepL8KJ3kBKEMI7b1cE6Vku2HjrihQYTq83KvtxPPjGOSDuS1%2BumhxUSWOfIMWjCoji1YfmamsKU4R1JJwINZdWNWRvtIb3odVtjH4jIEq6qvtSTCQ3aG%2FBjqkAcc%2BtJTpD9bEOAi6NTqoOX7%2Bl08rYmtnVQEF%2B2c%2Fd%2FTCeOYsejx7%2BycDhIggc%2B7bipTfHIBU3Csl0CMe%2Fh%2BnZ1FZmyhatwMS46%2F4GnWM%2FpsCkN40X4VKZq3dAqZX062PUxmNLIufk%2FIcNQoi%2BcLbLNwKo3Ry7FljlYEnetkP8t2KICiZL4slXhVLS9NNJtlvpuY2G7b83fDBG6YTv8hDhSUS%2Fbl8&X-Amz-Signature=9131d78cb7771e6948b500ac46f8610a1b6d91abedd98ca68a01d57bb527a8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
