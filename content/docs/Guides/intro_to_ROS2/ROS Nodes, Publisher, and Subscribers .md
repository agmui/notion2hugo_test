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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=f0b169c11f40fee8a3cb42214a7cb516dcf78186d133bd98427620541b678401&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=e9f5a3d5f303765ed5dee0f3fd6ab3fbc62d99757c4e8a0d792a88e972a7ce8a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=7d946a0498e76e3e3ec250e400d51d8bd56802a067ef0c38a1cf3241e0029c05&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=a7631e30eaf8c4bebc6685086ea8a80be072e088783efb86fb2a1e2d9ac9914c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=13177ffd8f88f8c8cf3c34fb6a3cc6071d33bc57976378b3022ccbc12a84162a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=77718451fdeda7998380a55da665a7d3b63c5789cfbcd9f255259b93865e0081&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=f3100660f577fd5ff0aa074b2c0d6c98c386716e6aa1ef1ac9975766591a3abc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623MYPOKB%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T004547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIBqXWT0WRnk6QIHkHuVuJwgSC6B1l4A7GyU1uI4vmj0pAiAji3nYo2mcypyX18KB0di2O%2Ft8GhPmiKBBahMAn3sHuyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe6JofylYuChaY0c7KtwDNfMHzjsLLBrTHfZeGssUqB4LP3ySr2423xhOMYnOjeuADgdIEvNFoBzmkTnHwy2cqs5dCTLcsvcwfm9xieXj9CLGMx8ZFOjj5wVkwMjK14%2FYFkw2ltTZE9tQqCdYcS%2Bw%2FSLbxxcilhg%2ByabQatMxUhhNSLojAQlLKsr9KDtFVtglSNcYSgVXpWUmJvrmnmpRnL1qa1Gazh33ycd7OAcKI7xUobu1IJ11YWjehGlKFrpA9nIGmevxPCrE5MfrxVNqo8DCFqqyGSvtcisyF1g1LTTvfLFKMeJUyz0rWholi3II0FIVkV0KMSFSuVWtn%2BFfX6YPBgEktCH8URfxTYFFyPXocrqUJ4lcTW3xGp2fDWFf6lG2XJ9xkzPXRoSzDhc4YFt2oWf1zmr3COlsQSHpaD9j1swLneUiBhkXdxo4TWMuSVDj4NRotQqhkgbvvepIDG8V8rlFHQzjI8x8dnS%2FrsExIbvisImTBHHxwZHV43NZj2m7YqWn9A9PDjOLHjf2FeQ4DAqy7R1MJe4V36WdWHQSGVpQgOmtSo82g8KO6xXkHQGF91IzICxaQc8j6Ijjd%2FMKDeh7VPn40sEIoSeVBHsorp4vc4dVXoxB98W2KFpVmo%2BnU9mfv%2FHpNDYw54PLwAY6pgGVf6w82pCNKYKwF1P2LMcz6G6p6GA6Q07f3XifOE6AstjmWPYzmCSuSWqxMNEicaYZGKTi6469UIyrqjmT%2Fwpa%2BL%2BCSL5V5zlPSaXrVmuJSEEmdaqRlFwxCCb%2BsxpjyAUYECUYIzFaEIrGZwZiV5ux4YvgAB5UKgXQZLxZi66GemALWOnaYuURNpV3leNVogf9zQfttXzcSuYFaei2814P9xRWMqMx&X-Amz-Signature=6739a7f962c612354d48bc2c68f8b827443b8f98365954f71905bd52c9c0ed69&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
