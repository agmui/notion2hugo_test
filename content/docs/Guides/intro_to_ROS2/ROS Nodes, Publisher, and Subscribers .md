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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=ead5695052d0b2a3db70814a84ac6f7a204979cadc2f2c573e898518970f1fda&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=aa01f50293cf6d64bd2921ee5a20d7631379d7e7470e1f17fbfbcc01d934f3ac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=c0fe5343012729244862e0c8adab0ec6148e411e0064b9a8d73296a1f5bbd200&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=84063617f53321953d9980ed43519b7124ff79408d011a8a98259568fafcd50f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=dfd903c21f84a68abe572fc6b5dee0e734753528ccd1ca6e199047df7eec97f8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=2fd27ceee3aaf22efa6c903f61bde23dc2346c6e4925a0d82ecd09f360d1875c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=1eef6f62b4d5591934040ff5a219f1b65aa3d1c7da6f1b22e63e91c9b0b3e64f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX3L6HR2%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T160853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5HCe%2Bw9aezCdynCJBEfBU6AEnK0VqAAVO7mSeUnJQSAIhAOtt0o1zMZGX15XknqKRVDo25zDM67lDedE7KkmJRNCiKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxW16ICM9UirUdJc1Yq3AMoyswAoK7cx1tbW1u0TVt5J0IVUJvdpt7bY6mdTHTDQtGyWF8oxjL7%2FkMx%2Bdb3Q%2FN%2FcgBDA8ynVkXz65lragnDtcAknhm7xBpwwfuYH3CAHHoE9Ibvxp2SlyWorEH6zoYVQUs8evMdN4h5vpVxj1JrWlvcMNrnkjEAsdFdxORobQk6dVH6Z5kxeo2muS6Qs%2BidKhZc7XGlKUrkgrrJXJ0uOlbmXpJ%2ByqlSPnQEN21l4EohhifMOtPw2eerp%2BArnH8dsZIZV0krhtImFtarLlrIJrE3a7krck6MkXYShwvYzDB1jPCMgsEw1ViAoz%2FFV1dpjlQAWGCUzhrCmNW2awoWmml32%2F%2BX2%2BasVnvIVN8hZ3QyLIH3%2FdHscq6bd4vMe034ZBUAYjQSztBwYFygCGPIJcUschD75wpnWEoap7ZPFq2uUwx2vQziKp55Dok5vS2K5NovOdU7o0OVzmjseCrJJt1Sld%2FjdA2cLfrwjgKrE5iIUCHziW5rxWWc7cikk2XNGvA8fzd%2BAgucWR4ei4LaZ1A0fX2HYHDj6VAB%2BhdwEPKUT60HISznBFhuCD%2FL1Hxacd7yOGHMAgOIBxU8vqrFwvTykl8ujVOCJoLhVYLdIiQK1I43UjePctMX3zCXmu68BjqkAfz97CjcViNjhcxpMuzgQaRSsa8d3V%2Fz%2FoIRvR%2FN%2FpZdFXPJhWZ9TUzkOlv08e27rdPoNNCtjmbnUrwLyxaXsaDPe7wYstrON0U3%2Fm5OcifYLMQDtwy%2Baz%2Fnb4OSxxmBbM8YJcIqyqU2VmIRCIoH9jAo5MbylZhgEx6QR50%2F5V2UBhDyghy9F5SfR2MsWpMx2FTvMhXs7%2FoXdW0T6efSz19z5vTZ&X-Amz-Signature=171b0c2a7dbaf1a75951a55f3a0b66727f5b014847fa60d21f04628753fbc8aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
