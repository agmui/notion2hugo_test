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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=08f841c502f707408b769c5ddf066ef6b4fa5e3d8d8f8069fe98d75974b51a73&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=e5ee4cc06560d410f7bcd852dde2248a847291d9863a692fed3fbe6a055f3787&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=3d63c8a45d4b0a8a69e85ac020a8ffc1e575a353ba78ca9e656c5d064029d04a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=018ebc7dee95cf0bafc5f87762f158adf171bb005b6d85f3c308fc17a3f42361&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=58e73617417bdf0c38c19d450bdc47ee0e2c553d5e7543f98c882a1aad813ae3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=451604c9f12b9f42a7024c777e27f9c527f192eec4c59a321898d94723e85b06&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=85e4052a8ca0a0b138e2895cee64ac30b80c0a1627f791b963aa194b1d6c4050&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMUMSNQH%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T034046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDdZIA%2Bg%2BtnnD6w8bWfdvf%2BhZ8Y2mpF8j%2BPkEoziBaT2gIhAK%2FXr7CxCBhttB4xVHOORomY%2BtzEgkidXzQeJMZNh7chKv8DCCQQABoMNjM3NDIzMTgzODA1IgwG2CFz5iy8GJPQgukq3AMUVEXIrSWCh3qyWVeAimvSPQFueB5acZGHldRzGAejtzcb%2BgROKJwftKOko5Y5J%2Bde3z216fVJ3DidJjpnSqD4rH%2BIdfVDiHis8Lgr2I1yzfbKPN4v7h%2FaBqiAzSnzceajglumkBAkzMB6saziCDybYsyCS0tDZmvn%2BHAVYS%2BB9Q8YIJvTIabGEUSgp6dT9YhvHCaGe4H75t0%2BgaRt%2B5q%2BxZxGMnGBvGqN2ea%2Bm%2B%2B6kjM3yMUkn6QQVM87WXcKfIEfY7sWuQyVYx78DB%2FbbtHXQtGN93Sq5OSvBwGnGIrbYFe%2BwVOpuSsI%2FhH%2B2m7c7gUzDTXvn0u5Ko9jLT5H0sObC%2FIa6rRVs5Hvv5b%2FJzysiBoc9XwZqWNdNCQXkGOm2B7N5c4vguL1GST1zGay%2BF%2FPB%2BhQBzExvxmZLMtB1pLt3Kou%2FHbB7Uy1cvH7Saq6MNui3a7q08df0s%2FAmUS0GYtbpbukrs%2FDiPHaHOmsHXIQGklh7jRVziJ4OrKh%2FgEDUa6om5SVZFrK1muuBtUZelUn%2Ftb05eFkY4ChZ3SKRKsckP4x44%2FNeNpmjgLsj9xwgmq4AWhzySYdPYFUZP%2B1bJCK5JP0q48zlnu%2BZStiyavvl4l8oM%2BCWlougsccgDDJmMrBBjqkAY%2FKPyIrhqrJ91fpfgi2UQsft4rqPNiNGoiWvMUuri%2BNAKXfZiUITk7t%2FrjRx%2FHsLnsU38FAmuOnNQlrPygo1qOADFL%2FaoMpoK3Gf%2FPAWqIs4S7f1bMT0t6f3V1oCUoXQvksYhC%2BtnYncuprycJB8%2BY%2B8Ui9Lv%2BP%2BOUNpbaqdpO24TtwU9EpPyUtAWhNBOOXHq36RYlWuJZvJBoA0%2FnV6%2FnOP53c&X-Amz-Signature=4afd4603e593c89d2cf4a6ac07bbec28c23bb4de4e9f010bf83cbc4a32c09e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
