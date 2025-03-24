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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=a8970d5eb3fc3e12818bfdbe2e5472342c7c86aac97893db0bf0401f448eb378&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=c1b3e2fc61fab4d34c3a4bdb5fc3321be73656330c44afd0cae1bd39702bd6d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=1ebebbf9291d2bee0cffd39a8372f03f628a359780b7e573d1bf41034e81634d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=71841962ea727d412e69ae5e5834c92de261f4dabb2e4d6779369d378cbf69af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=9f13afb807e75d4aeb865678d1407d338f00095cd90c122fe2f76d8c4d53273d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=495c7928a931e908515fa8476dc6116ac96942091623049537e730484ed6e86f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=951dcf0fe05ddab6539de3c4cfb6dd7bdd2206e9c2f5fcae06dc7b75f74841fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633QCNEND%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMcKFYf7FOebzCkcYYPU2pWcJm0uxo3n7DtmcfnM5DOAiBXmkPcfBFOQaYcazUwRCLnL4voPEwM5potm7hSoUzmcyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPa%2B8KDDoHQmAknu9KtwDKfypm5vD%2Btt5jlwuQEQMljidz3LrvnXsNuHoCTiAeSwXg6nY1hteEagg5TIxmb8xtXDMXbCyQIRxnot8pIUjX1CHjtQNqGR4WOmZv703e7ZVLxytx0x%2F1qHhAyOLahjw2zeICfLIfG%2Boa8Vn0tnhrAJFCZvX6g0yt1CpOE5WLPMKqrkZ0mRUMnG3Oy2YbixW65mcb8GAa%2Bsea371Ix0WnXHacPTqixbY1qzfyQYH5MV5jlpESSuvZaAl1ylaYhmE1Qc13nt30ycVSxO7Wc7LSNwVGNMEr5BpqBR%2BbTXUPuULuF9TXasn6Exnr7xgtaPr9tUzXzLKVkgaO7jHKehGJrDj%2FetsHVR3YZ7flwouXcSFhKguGU54irLb1aJ1JyksCdY6GGmaOztsFdYUbJs%2BF6m81wytYPdcuKTjYzY6xipY9eLAn4YWxNjVMEVs4Z0LnCHs03gjn2BUznRA2R8leMvIaDz8goSUKMPjO8WErcs1JLohkjjh3EfawU%2FnAGxyrIescx9UsgFnZXeE%2FPrivRDQXseVKyYF489W6UDxAIpexUuQFiHMYzewrdHkB50UFW4VNB03uehMCF8St1VUfc5iMNkltUtznTTsd5%2FCkkceA7Hi3INhMfK%2B1%2FgwoI%2BFvwY6pgGXelfKV3EjP%2F%2F6wqPEVBr0l3CJR0zDVwDMqTQRlOmz6Pku8hg2sdLg8DZodMkfXtbOnYSV9z3JYHVj1BlUY1%2FckTeTR9UMz7na2n5bDBTIRsP6NMNJhRU%2BDA3eFKXTxafUeeK6QosvSv9qMc3ooKzXsmL7fpkgb0CyZfBgwCwwFXDOJQK72zcOLkfpEjmBZRbG3BahE%2BWGtLrIuHRgssx08yE%2BdlI8&X-Amz-Signature=75bbc48554355e19902f6d2cd1c85a3e9d8f3bf0a1b6efcd34ebab2980b2fdb2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
