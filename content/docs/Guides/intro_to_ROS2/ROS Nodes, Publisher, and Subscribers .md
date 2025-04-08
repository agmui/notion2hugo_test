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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=474ef4ebca017810ce1ad1a23b322ca76b4ab78815f1fc9b1fdea325c3b18b56&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=e32f6ea4f7790d51995c75669fedbbb9fa335266104be85797aad5b3e40350d4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=3a69930e28f7677289fcf158a665641183fde289865e187341c8f22408b7a700&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=278fa9de406ca103e77281d9cd308a26e3f49899579740497ac90ff85caac949&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=8c1c4fc19f9f60ed22d42481ca429d5c2546a16d23f04161ea03cbe62f5ccad0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=a79d334b6d2fda5133f94cd6000250efd3660e55873452611f9626d3d908a326&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=79d1ef540202dd6fb2030dfb0a1857b580d81c318a96d40a282efebc8e47d735&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ3MI6G3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T090924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCTQU%2BvpTCmtfhj%2BWo3mSjkYy5WTH8X1faNKK%2Fc0y%2FvMQIgWOu4Vr0fJ3zF8FfabR1GyaIwejm4lg26kLFAaeL3QtQq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDHMcP%2B7o%2FXdk09rq1SrcAzjAL5fYZpPQ0LNHg%2Ftgd3B7SA5nhvMm9cSYYpamDNCDgA2Rn7e%2FUg3bmAMj3GkNZQTEes%2FmacTuZElhhWHztWzuZ%2FUSRj%2FLgYqLPVLfw2vvQDhK00S6YCprBs0qCSQrS%2BTU5D5AJnCWqv9Q%2FZxzM8oBhBstKWxmfvSienKzAKaPLGkL4GTSl39o1WIPK3PCkSTKZfNprZ2e%2FKyIjTsQFNBulNqMycmpI4LQdm%2BkzLMSbTBJC6CeuO0s9uiCJcKuLgS1D8YM2jrErM6zanjcuB8NnHU5FpSmpxNRjfTQhEPP1b8JxqAjiRWGgMZfM8Oz0L0N3nTf62kQQ%2FQFWSKlYFqYQZYIy%2B0qu69ljQo6tT92jpgNOoYLT%2Ft1sLtER37y3zefOapvLg%2Bu89BgUBPvjlbTVpCN5KmqeVi%2F%2FWYslHaSXB5jODpUmwFtlGqoIrh5HjRqv4w00v0hxn%2F6dUjPbwoGhH%2BZqm5YOd3Tk2FJQu4zi7kgU53BTYreT0uzy1Spbg%2FuxS%2BTBrsgZnd2xmghrlS7zud3xWCjxGNYg5q38%2BRBjYcAl7qbmNtiBDnj62hFsrApTdHmerg8n1wcze7MRRdMyBzJEbhkVBcPgeIKyAOOrrh0BAvWx%2B9MohCSMNq7078GOqUBld70ZzA4fkpHULLI7lL4ZRi9O6qvq9g4ZOTRxwqJ%2FeYs7VcLzetToZq1scqdlg2k1VLMtDNqYj5lvYl5nyO2%2BMCNxs78b%2F3FI2ayMsWM4tciBwAWUJ9Tuo6k1Nc3BYKzmBgDmigUY5p8xvEW2yP8oOIskgi%2F46Fqr0Fy%2BPmOyAWw%2FKxyIoyKqepQPYImUAagPBlGGkZlTa8ac9HSHWPBntF2H30%2B&X-Amz-Signature=9c9b05006f9c0663ba5ee483e1b40e107f030e1473359e38e715deeccec24928&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
