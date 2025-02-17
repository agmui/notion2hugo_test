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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=a549724fcb5c471a048f1135029cc442e75a60788f25488b223bd8c3438a7e0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=2650b64967ac8fc22f3202cec112bd87981c40135c408b72349e30da063ff5f5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=2891686afcb2a016281249a1fc211646211e5b61845154cd71ef2bab6080dd31&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=c182d7f1244cb88dde2f15f215aa08a613f470762b35fb2afe99d6f3e7ccd89f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=e5a3b4ce8ee3f29b39e973542906f3b2853ad8f50f14b674fb4ce86a02f31876&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=d3d33ef5e13bdf537a89a1e0953f74c16695c85704ef0cdf702081d88c349a83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=ddc75ca27498caa8fb966253c032c54e3f54f9773690c4c8e7f0ad9fb72c0cc7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZZZMAMM%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T121421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDQfyt4bmjztk8Ul7UgFGZVpn2zkR4oO%2BWQ7lQTE2nvVQIhAMwxX2jXXvpTj2m1wE1328lY1Y4zf6DH6EKnMe04xWgTKv8DCHUQABoMNjM3NDIzMTgzODA1IgwgVLIUi4U6bMm5xv4q3APKb%2Bpnja0loRmEKypFHT51RG2noGZB5f6KciKyS7gJUN5%2Bka8O0FkxhoRrAmA6fyuVClrlDqh9ETagbIbNTaQ1sLJeXaoQ5RsIrPbo4dk5fmDgGwumLXQEfyRGe99pscmsbwsIhjz0ueyMmFgFpD6ooqWg%2F7lrZ4iaO%2FUR7%2F599A%2Fq04aGpQ5qSSsG%2Bvdd5wxGbCJRBFHCDe6SqJwU5VVq0oHdPeVlknSbNrcW7bAYHZgpaZGfHmHi93PTSRQKkissZzqhF62IRFYKCgkHRWtUZiD9I6SP%2BVrSActDwtLtVVd1yxt9ZnMOZhrzswjSDLI%2Bl%2BVU8J172U%2Fggfj3H2psIx%2FZa7YLKJeAsVC2nImvLK16Ds0J3ZcFIVXZRMIl%2BH%2FksDMgLzBGq5cEZFB4w4fYxJk%2FLOhjnzSjm5RN8S3ZRudRMNqtd58b97ICJby0Suoz5pW04RQ5wO4A%2BjEFB2ucjbGzrUfmv0pPCaDu%2FiyEOMykXc8IOUxeRdQ4XcMY4PXv4S1SwRfCKbhnV%2BPj2TdhZyEzysNWztS%2FzSsCoR1ly6cDl2bo2z%2F0frpok8r%2FbhgVczly7Qy2Ak6ZK4yiUxDRDAAB4UI8ZgWZMuNHWa47gMVw%2F4Bul3Uz2P3XmjDTvsy9BjqkAQBgPyFGoeLX483SR%2BqjT%2B4VQRKjIrNGtw0jHIO2h%2Fxm5wDy07%2Fjhh%2BkvpKv3jtGAWe7mysOe7s%2F1frcAxH%2B%2BZ9RkX6NbzRKBW8m%2FPre1Y0MnGd%2FqTyXY88jYVuZ%2BBd1uG%2FqEUVNQYYkOwOkcWhkZAzzX0hDMCWdkW8x0uGWG34U%2BYmwVsn1eFAnKW83j%2FtGeZ7322L8mBoVhgTdSTPCVnNLv%2BmH&X-Amz-Signature=14852232bd5a190a0eba3a4d6b938fd3fcb00ad2fb5eaf19ab485b1aa9804b23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
