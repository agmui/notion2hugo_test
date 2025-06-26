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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=9c1d50367157323d54c9e0eca2ee37c0453d22f68256fc012f6b35a725e9281a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=a1bf332df2d2a93c3604c61d12561c01670b25d8019b24d94da31e4a084acaf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=e03ef9e6a85223a031d19b8bd99fa40086275b726ee211bbbcee4b3364a5d86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=203f025005be2a0ec126ea23bf731c6d620690aeaee3b6fa589a09fd91594810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=2d4ef638ae757fa1d625d917980f15e40751ea80e2f65e6b307b786fe29d7a2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=02eb8640f4925e2bbfcfecd0200efc164ac01939df5bd73552907e8fe84ee321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=e68ff1aa09511a9f4c0f9631d9eaaaa2b879d36c04b4383740865c9487aba208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZLDNS37%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T034208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQDUCvrc6RXJRKMaCFzQFYaGXNMo1BpsE9KOXc%2BZO4HT7gIhAKDMoqGfjZydPxAekMWehmS9X8ONaSlBT8YKDRfCqW3zKv8DCFQQABoMNjM3NDIzMTgzODA1IgyTtxajq4d%2FsC365HIq3ANyAHwiSvwar%2FTLznYdshVWqSmyNEiazqi0%2F7CRO6xMrxj1TyZefWLjfxcANAPmFf6sUjA5gqTzbbi5%2Fz%2F7BvQZSYS%2B3MSAEHBOXMdlkZFT77kXE4SKYM9%2B%2FnilXJHNHtZUMpWEg8zUOFwNL7ZdKLvIdYb3Y3PNWy%2FXQ%2B9FguApQBYK7h0V6anIoD%2B9bHtq3sXJP3Df0xWdlXFerCh2A8m1bnW1tAGwG2wts9QUVOQPcc0LiOSKFDAfVdbYVLAe4s0l6c86qPn6jURf5JrouVx2xnrIvFGlhEAJctnsVT12NTPF11mbUo6mQzGDHZJ0cI7hmGfZ4TO%2Fh1ZOIRIHK2XxKM995i4G620bNB4Kde%2BGe7xqVovMQ6TYYwHZuqRN1AXMIFMT0d4bDJSyBeHhq9M06XtgLE5G0AgET9W%2BWjSwSLEgHX0E7l6RmeA7vbSYU%2F6HrFGYlHZHOY8aBmql5noIRraMPUQxEDJg9lQmOCKUOhiDgIBNblRQt6vEQmZyF9r%2Fzz0rrCn6LKMorD1bzZ6jM5jaWKX7rGThoiKBipeQDBO%2BjtBNJSfIi7V0MZc7L6jyfNE4yAYOPBzADPN4Hg8vxbvZObU0ugseZk%2BfgUUBG9rm8AwALO11Pz%2BGQzCa3%2FLCBjqkAfvRQunT4Z8OIQFOp6iSQRcK9xxtk6RbxP4%2Btz65gyZI3jvz8vz8wuduNz99%2BY7ry%2BICrqo5SgvDhWi6ziBXVV%2BcqrAwXPj2FWr%2BxT0WqFLvmMdGncKM2vy183gpjVRYJBIsWzl2E0G8MaLfVp4o5o8nrL7BuRwpdmdMlUmLPOlL1N%2FeycC9KqDyYrlnYlRjcLpiHsjT50aTnBCeUzbadmc%2BoSJV&X-Amz-Signature=9f7de511e416b3ba103d6d013106b9fab71ae204b0fa9c91616f621b4a318943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
