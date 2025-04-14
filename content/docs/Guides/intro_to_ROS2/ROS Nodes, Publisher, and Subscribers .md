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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=1dd60b30dd25b7f959288986a39931a88ae67e497c4d241c8cfb823e5236acb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=263fb48e0fc95ababdf5e168edd00184c8a72555990c6d3fae2f57db23edb1d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=9a874679dfb4ec7b5b500ec2a8064b774bc31d8957a619d16d965c4b182105a2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=919fe8b23cb86bedc2004fbaf79f73821a6452ea8a0212674d8d7dcd3c098473&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=9240b7112552ba165063d931fc714e2d9ec8c58a345230d20275ce390f09dd9e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=51a84e8d32890f72e7d7a67023685566f826e8d9b36f628a936c3bc45959a128&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=b17e6385ae98411a75a9c47a889f5b2c83f280c6f9dc71208a26a414969199da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3TZ6ZER%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T150856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGRwBnBZnbD0ov1g6teyfrRh642j0fI5%2B2HaKD7AEdmaAiAM%2FFLb1o%2FARFip2nEWwQN%2FjKwssfwEb4N8r82kMAQZNSr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIM97Ds96iKc0PzQB4vKtwDkX4prKLLRw1T6xpYve%2B1fY5fckM4UPzOHl2ZEwwQeEXWJuiDRvyltGZEVB0blCW94eXvGIB9wSSzr4ktTbXTLlbfHa7kVKgKALRqaRErw9dHg6qKRx2h%2Fw4uLkW%2BfqivX47Wf6%2Brb0weOw5w60HxiATteOz0kogF0fnENIitqCqw9DNftG3lxbWP4NxkUo9kjqh%2FB581qzBB5NQ250F0Qgpd6K%2FQ7mjJW1utUQPO5lysHDmQbQ%2FTB6rzSiKxxC%2FrbtY8FngPZalPLMYqUbUNLd7QbH2oPYCCkdS6h0cqmLVblZjPEJdhDf4E4WDRwnpnPV7MayzqM%2F4yuesjR%2FtsXZQbkC7UdDvyT2we3b3Dnbt3%2BeQH9ylXZrdIKgtBX3JZIXo2T2AE5X6p7dx4z0%2FuMQPDdfo3qMrEbpQw9EiFLl8ELoL42XR7kw7W%2Bz0LJiXT4%2BfCOZM12kw23p41sq6Iq1krAC%2Br1vv6BDhdGnzUJw7uLzOuZRaK99pHz9dVCscJYyuIkgybAVSoSGtauedx8mm%2FaqeNEbpJgIOJkTcEMNtDvJlffTdiAr3U63LbFJzG1KuDl6IbIVmWICvOlJTR9N2ecX0%2BqOmLCwRQkFoUe6JsZ%2BaGy64U0Te%2BQnUwiKj0vwY6pgHRRpejsQP1FOWiYbbCNv4ApyD8RMGdwBRb3%2F0haMqYj3eI90%2BDaVpAMLBcQW7zQYsrg3vNqmYek%2Bokmwb7HHyZO8adqQyHQIb2ie26rq8DsuGsTmhqfpZ4PNLdzImpvz5fE%2BMwmuCdKgtzG19nfbefp6zdhHNQQdteQR9woqwDDQjtiyeIfU6CHR4QqAFKtVh30gqmqwSULSwvHBZcEfkKoDlNaRVo&X-Amz-Signature=2d53e352cc24c96ee28ffb78a409100716a2d92a9389fdc5955af6e8757903f2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
