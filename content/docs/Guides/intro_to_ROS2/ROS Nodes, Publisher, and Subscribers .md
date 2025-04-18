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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=ea4e5ed6e6f0277c5bf6f3a4a84fc967434aa087d1c02c8d0eca8ca381c75edf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=8d9c11d1687fbef0d61603c0214993859779373b81bd00c5eba9837de5526302&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=027814840d5d631c9a5ab54e59de444e4e22c8a6e2e120842c8b53b26685c9ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=1190a672f5f9e8c7564b5c0c933d275fe28ce19bd70f736d30148aad76a7843f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=a40280a15a2a036285e7af1aeffe8773320c4997a65fe3a805b98bc9805b62bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=a3bfb27408575cf1fc52684ea883e06b63f723a783733725be34da455b75149b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=b91f25689f117fc48479d1ff3f9263249a85e1c7ccf4bb6a15643ee32c9c78c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624XIO3IL%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEJlv%2F7PpbSjJij045JnbIEl6XRcujhnyao2GblQmeG8AiAzfvkM9neaxsGxzO4dACuHo%2BLf1WweM3eB8rC2JHgMhCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMHs561C1%2Fg9G55k8FKtwDhNPxsbyOMdvEfke5J0jZgKH47wD03nB7myKbcxm2VgfeYF%2FNEg20Pq3SNq8YtxX6oU5EtFonfHW2FqwwdzK6QwUVHZuKogKDaXMJjvn3hTFJTP8Lnf8Xuc89pKhFU0OBrjpTBCeWsge98SAaOo3JNMMYK2Tjsc1dJZIk7qpXCd6oq%2F7vq%2BApX7r0T6Q%2FUKnQz0LX0T5eYWtmZzPiyr8F0B%2FBO48gExVRj%2FIqaINFOLp6ats6%2Bc1oeI0ORmb6%2FTWV5foe7IjdYJvZsntcub2PNxRyil7fWSt0u3WNzqp6FB01oWEwvTh9YlzGqNQR9kG%2BIZCQXq%2BbQw8giSQOkst%2FdQ%2Ba78xIJQHqn1Z4vuxV%2B5bBHcm5yEl%2FX%2FnPF4IdH6S2%2FosNV2rhOMrZViLe48zrOEzqkmVouMN1sGTvb1EMrBZlBt0zrvhzmuDAKkzaPaGGJMcmHQi%2FcPqzgUQh4%2FQUTg99caApGVvjRl%2F8awBJr%2BK%2B1fAK5nHWYzSXUNDZ2912OSHL%2FcXqG8JOtGt78Hq4WQohtqul%2BvhV2ttPPCXXvyHP0JXz00AgaSvPSC1LbUHQeX730hCZe3ukjVrcyzEEByCB6Af6bw6IYM6zIX5WtidEdlfI8w7UeoxIYWUw4OSKwAY6pgHU1O0KrMuxQGkTXTo7rvZ%2FDguDJqyRlbZq6hFdTBXBPYJRHy1x9ZtwRcNjn6EKb3QLN7rgYC5khY5z3KZ%2FCW1eBkCqR%2FTHtmwL6r%2FTdpPlRVR7gvzPwOrRtSjyGaxHMfDNWg1YiixnSTCaWtgDl6AKs80R0K9FDkcuC7nkcn9f2K8BZY8su%2F3K9yY4HS1pEDyvN%2FN%2FsZPHCGG4T300JSuRJt1KI%2B42&X-Amz-Signature=cbe998e5849c4ee16cf55c23e74fd2b77f0b44ac47f44b0506516d91dc68f15a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
