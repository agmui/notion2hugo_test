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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=8ceb5cc418e8a8b7f7bf802089a5e2d0d5a23934a9721907a9391f429d36e018&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=305167cc2b63475a92018dcf5c313b8e253c88bc7f2979ce307adf4716b1b209&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=200ab34a627ce492c976be1142efbce515b523a0863bb669386462f106fa0daa&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=b486b4c9dfb4969238c4db5d88366702d24b51d0ae50f036dfe97af8f68658af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=f3a5b1c878ed72bd4d4a70cf47f5d061f12f2539429be27d76f6bd4dbfcfd681&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=216c1ce8cbb62a6b6eb003f85006ae889cdea746ed8fe69d8b24279b46f307fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=0ddd88066517f4a6c7a3dd594566038b759cc51e5d4786d3c91a21ee1029932b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623KZ2PEW%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzE667pTBdgAJyHP5Qp2y1EeQRpdMzqvIlVWoLAbGhxAiBuD%2BSG4FHI2vdXuMJ0mIBIAgA%2FTpmoRnUfWiLkQBpJsyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMAF%2FHW%2FOBTgaaqLyMKtwDYtoJ9duC3ott6Mr%2B1uNDtAfwkDBPU4jyrTmk%2Fpqis14j5iQaHFEkYup5wGHZcLu0j1zRaOYTMadJfSR0lUk7BsiXUyIdOdgW%2BeypwsE07WXl%2BUuzvYxQ4swbVw4zaSIP9jqpmy3aTdofxQDbM1KyqphSbiOD3AflumwJDZsVXP%2Bx2hRqLAVt%2BIUpQ4CgUjKN3CanYcvEYBtigLOJT3XbNt3D1X4msFPoNUL23IMTLBK9hDyQruc3qLKCOtlyJRloIbeIdwr8JtfeBPLglqMk6%2FPc%2FGAdK4xk4Ori0giRy8qdmnwr%2F%2F2XeZSOTbpoxxsVtD7FHQceEhO9GcXZhJ4zMFp3ShzYGLRCx3kPPcxnIQMu5R5ER%2BJCkToU4ag4i0d3bWUxaQOKnR133BKgvicHl%2Bb5GgHDNWoG8%2FEwRQ%2FoRJOJGKBkSiRMIhUy3hd6zf9F0%2FM2Ir6RSZmDca0N9sD8nSqNBg8CPJZiQA92mjCz5NnaEDa7ddD6nFtn39kdw8TBwLnxT3hU4iusqaLBsy1N2aAKb5VFlyWoH7%2F%2B3lQlgAgqyprj%2BCXFqq69oXqgXdyCH3fNi8FEeGlDf2b2wD7rxi50uBtXieouE3aYpyr%2B%2FG4JZ5THBi1biJVNtBwwssKKwgY6pgHd%2B84LfiCPZAye5WXJbfZGz7x4JmvCBlmwIYn188TJDj%2BNoYB4WihQBZri5f5sepIEoxj%2BnXhVnr%2F9OUUlEjipOzdwwpaFGdnwX0h6RDZ%2Fj6%2B%2BaPmJ2zyqWE1Nb9EBVZ7mxknGRS4i0XC7y30RCPaI5xJ%2FJp8%2FDMwS%2F988%2Bnsj8XvXjeYl8i9yVDKaz5j9z9ovNJ0T6GRO3gD3FBQ1A4cVrjXjlywF&X-Amz-Signature=9b0baf1930cdee1e92c7aa152c1d17779b3eb89caf3840c76e5e4f13d22e5b33&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
