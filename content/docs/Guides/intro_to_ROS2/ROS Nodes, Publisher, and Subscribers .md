---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=7e55e45ba96b0bd9a7c535eabd9918584e3ba4a60d152d0a70abc581664afd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=6ea289bc0b41cde318c03c01c3e9fa5e8786acdec854fb05cc7647d628057cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=3902a593fd971d8a1383c519eaff4f6592b1a15a64fb154fc64cfcda27647101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=ffab78fa2ce39fd0f034bb4c990f8923c4cd290c65244d089a01e00851cb47a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=e8e224ddbf69a331a3a6f6ad6bed9b4bcb32c04b2baa0f20c75332f4bf0de4ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=395298b198f7eb5f2a0ce1f2389c68bff6a037a2edb5462e0d62a2a476fb3ffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=4fb81fc7ae62753998dbe033f32037e599a7e5ed72c9e181848ce35ebf366eaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FNFXNWD%2F20260212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260212T022225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD3QjbeYgKcGJZ0Gf2wnePhd4oxHbhJ4sJ5iVeoVWr6fQIhAJw6E2tT4TlMGyJEfzhqljg8Myn%2FpCqNAleImF30KMdlKogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjYfXMf9ymVMorZTgq3ANNogN8Un7vtPw4QuaDp8S3UKqXhosVgFjiU8bLgq940csI3g152WxNiuHiRXtiiNiNYIVl5zzns4WeUjX1mJFywyT9y%2BUYXk6tlue9FX8kX%2FOhDfsFBCwpTJ%2F9z8Lso3aB6VkyeMGYOMDKkvMG3qpo8I74ST3gXzIrRgG1DqzDpKhl660TfxTvbQHyVTzgzOj4UiD%2FCIOL%2FhoLabhArTq%2Ft79ySYGREda%2BMF%2BU99enkWJFAsg3zmDFiBCBUkXUvrLfB2ErjSCDLtEUkR8M%2BBRvd7GNkfRNRmU0vwkcI9iuoO%2B%2BFYkMjybBtwgD6NYBL54i3UtAQFCY0nII4m0lHDxGM1XDo61bJleZP4%2FQCJGWx3KniQ6IU0uQ86JU9R0BAycavXo7DkopKcu2%2Fvl28OkE2Mrb7pSNvfQIL4TNeHyPoEVjATWgVKFWF3GrDsddSaktgZZRLPbAfEhZ45Icc%2B3P52Cojh3XeuAEictRl54j8mQiVB0DbZQ7ubP10doP0VRd1VbER5SK8dMQ6cWBjHPBNo%2BVMyXye%2BvRyJcqBVSVnxs59wX6Pw%2BpvInuZIhM%2FgOxBhWn3LnlRFZzgaIazd1G7fw1UU9hRrFEPtu2EYvztrYbAy%2B4NAuS8ZFNIjCS1bTMBjqkATE8o9yk%2BHGa%2BN0x6CF5Lo5lCvlDO9Q%2BdizUt1p5gRirkFJ2Lu4s8KxCgWwUH%2BiG8xC8i9BSE8tboLrfOgk7imKsK06i1CxWA8OLT1%2BoCevy6Vl3RYb2n3Qktj1BKDHFRv3yzSgYxvt4kswhs4fIQvEhP4fBrJ%2BKZ%2FjiDWyH9i%2FeoQ5arsOkYXji6bzhF%2B16evcNzFlK7gXwYLSxLW5wNDVfW7FE&X-Amz-Signature=ddbdabb643bfc009fdcfbdbee06a7e10ff51fd97575a1b74465b63ddb4d3bff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
