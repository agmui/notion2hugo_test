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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=eb724349e6e8e09624d6e67eb4455603ebf53669f82fde607018f88f51740896&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=dd6550fa6b9603a8d5f5f1f110e49477a9c77f49553f035c2b8c2a16ee166b8f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=6ff1c010dde29c062f8d8aff5cd46951c928be3d1457d89337412a38c1fe2283&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=d43f88710e02267ab3eb79e09de5b4e464c8ed05dffb9667d190636ae0f067fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=451f781d758e0680d6f470c2e54992c8459c48405888a630eb8b571f8e1ea11f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=2e0ba7fa6e15f079be69e88e6c81c77139c3e50558b3a7b75a451d9296b22bcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=6ec63b6159e0a75ccf925c4336c28e7072cf8e4e04d76a436dd679555aa6cd96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BCOUEHD%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T070718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmsi39gKjd0i0%2FdNfC0oNqeD3Xv9tBeRKmghmk9J4ygAIhAIXqglFVgzYFvdibY3bYYB3JkMfMT4fA3tQks6vc4DINKv8DCBAQABoMNjM3NDIzMTgzODA1IgyJwHArI645Tgo9wMwq3AOWO%2BTQ2iUqdI71JJ2a0dusyXnLXOTz75An8HIqnzW6Qbz2aBRKEpbjF2IQIRFrh8mtf2KQ0P8H0dUaLqAVdpf4nZZJVJlerc5FrCJPWrdv9K8f8VE6m7lNeFXWZckv6zv%2FNpiGsNG49BNRDkVZ3P8F9anTGYg2NT8i0lNY3774NRuD4PP0uYtPQIRHemTx%2FqKz%2BQC03m0xiHcjOBjGg8P%2Bz0xFmCOp1%2Bj1i4yjW6oqXwPEzVkYkgxjF1JiOf%2BdWg6cJ4hkHTmBEuJqAzn5nAHEdoUJK3PLoeeAtlWRyAyPh2m2wGOJ5BlWyLcJLvLcw%2FbJJl%2Bqb%2BiTarXVEaQEvACNBHdC93F1d15XwgL9XK0QHe2LI9Xif9FfvnfdNF5m%2BDPrwDGUzoChlsp12yk3hjDBT8ScSh9%2FZISPljHyfsEgpZBtBkaR3RWQfPB39mrHL6gZQx32sM1BxZuQaa7wzQouAS1tWCn0xMCIbJ3bk4qKEAx4tkIjjwsUhEWOu6NxZKvReyhzbet0t%2BsNoQ78ZD%2BUWUpwmOC3XTI%2BzDj5HtBQFWbPt3I1rBIGTLv%2Be9LYG0JJccfLvFiz%2BR1kvHVrDgPcDmk%2FgUazySQCXK7bJnSY%2BJCNz9POTMagDU7J4zC7xNS%2BBjqkAc5XlDi6hhJqvs90c3DRBGPyfXyQk6ASDGaEM52lXgnmqcnZn6PVgGMzg2EfLJWXyE1%2Bm4psMlXjhz1HdaGpgEzOWnzuqvdSLVlVbIv8rDnRup74d6pw46M3zDAnAnXmwneJf0bZZ%2B%2BfmFPi33ecCmX4hUWBhEGVAXkKLfDTLbl7evZTeSbV5%2BhhZWd9jKxrLysP5Tk%2BAyE5qucPOaEFGPbLbEdA&X-Amz-Signature=4b991981709371dcb27a3bfef5994b4be3826a2c9b2b9f4892af4ca24dd67f51&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
