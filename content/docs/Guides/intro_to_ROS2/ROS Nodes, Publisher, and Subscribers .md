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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=597295083b35ac2494d25ccd0dfaa3e73c3a3a9af261decf088ec72aab724fce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=3087d3ef9f63200ec86d75c1ec0cd12b0825b65ac1e48406664a92ec3997a604&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=f978e7492a26ecef4106bead74f4f78ea736d1ec9b5d6e7d0f3b2d014d019a83&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=ac79479113cc1ddc2b79e0d3aca10a94ab7dbb1437e1e82d3d00536667511cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=0a992123bfd0c007610de2f8ab70250eec41cabd3d3d5a062cbe65e36864cd55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=356c44f38b8a3bef8f37a0fcb3950774219ac7614a98ff35da7918302cb0f338&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=d227051976a7569f80f72a76198744c42c8ed3304722d4dba28b2e5bf1ae9d10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL75QE56%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T210803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB9Po5FmdABwmaNCIsBQ6gYIKEEwhhtIUiC4amx26q3cAiAS%2FY5UCujYt3jdeqwmHN92QkjJzUcWsw0rcvsy6KXYFCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRMtAo0X0IZsg0C3GKtwDXHZNfAIdcTEGfPzuXqPqCl5IQ2%2BVg1%2Fp4Ah4pbZuRN1NcBF0YOZFOWhTN60AwOpAJi02U4MwbdH4QVRgMPyAGEhf6LiuDu5px5sccaS3MHmnoUAWIyPeqzFaS6%2Box4aNQnHx3dMFkWcXiSkuHdG%2B%2FyJzVor1Y4dSCLtlFbBnbuIU0e6b4HpYgf5KZ5JjFtthAzzVWMZDnu00h0uqClcU%2Fe5y0bSFfJ0UjiDzrjPeznaMW6nqtWJ3zD4pwHgMNAubStNY78KERqIWsifv6sjmcAYCO6moLroAmqFVDLulSfanqtVu8x8v6whYLyjJECt1rhsqf0HY%2Fn55AICgkt8jrTyoCtGOpn%2FaELXGN7AHlQVF0v5kz0CbAQnRzAebbDGHrbQPJcRYWunaMwmz9hEkzTrb5on7LnhVLH2p6bg%2BIlylm7BUuUmb9FZs8mvTiDgH2sO8Vx3A1JIUrFkxmpV1pW0klCU%2BCJ05JT9Sd0J2XncQdYXeqMFStt4lxY65TYr37ccNijXrWmpD9MgYo5sBMttfeQ5IU%2F6iGTaq30olovU7bR%2BEK3RS%2F46vHlBCC4fbH0XMfN0uPSDm5qB1MLEPx4mOBbphTfAuGZDbyAZo%2Bwk8les1Jy3qQzSOtlIw0ZHjwQY6pgF7PtqkqtSEij0TzYGlb%2FYsLp%2BM%2BsTWZYNAsEb0AJQbrfKnCREIsYNejkqfBpYmGCC8lqtqZpYVc2rzVPqM2dZGHlRtgbzcrrxnF7G9I%2FkHv3QFNyWzbbJK9U6cLVwxoO679c7ZYtUGfMTJ9jXLmbbvVuhlvpQk%2FYagDQTSzYJOYddG3VIiIWglKD4iR8b%2B6NmRcvw1XteEJZwGU3ZGgmeVILamBGJF&X-Amz-Signature=15a64ff8b0844f13d1e764cd9e27a5d64066da34ac341f7a617104f0e9724633&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
