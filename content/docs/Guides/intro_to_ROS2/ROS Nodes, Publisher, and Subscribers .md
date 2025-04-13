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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=72d79bff7649fdccccbb95ae1011bffa1335751548b646f5e8baf6d018115f9d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=312159fb528e6ac934cb63224bad6a5f249affd5081fcf985ecc1398fd7c8bd0&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=4fbaa9d71fc99104ae202b8e1cdf08dcfea8604f14ac4040a9fe63c3814ea7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=923537fc65e67d07895b632845fdaa35b323d4b644ae281b32bd632bcf6b0671&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=0db71fb2a52062757547dbe4a5449b3b60b33c59d88d56cdcd7906591b6398b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=0998c0e264c3aa38d67426aad324598c27d29b74352695e45357d6757f1600bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=06bc65026a0399a4baa9704498eb846b92e1a99c822db52fb49504cf9cbe0595&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPJV3UZ5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIH%2B%2BrhgKZEW4N3b35EJ%2BnJx83%2BzEL3tvMnDR1q3sCLZGAiB6mz5cnIgRU%2FqvI6IWAkQ4NnUU8kprhLq2PRq2pqCANiqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbYhpCT5E8aGHc3xEKtwDy4hwJX0zKbvbm6YsuMQhtJQsz2TtXGOVrVRUcovZJKBEAa7vzKKGpkui%2B8UFav3eV1GWpUZPgMXMF7vRNMZnWkm8Urd0IaR4oOwECd1wxGZvbkQtVAD5KYAZ%2BbRFFMHwdfiOQgMy%2Buhcnnfm2QDv8XgLWHkkql8UONgA88k5DgZrndFwM93w5n59Me2Cthb2Rt6DvrV86Ivfj5yxazih%2Bv9zsLbxOWmCNIA%2FXPPytlwiGN4ogDpJU73egHI4qlDXy2ba0I4F1tH4G4foBaiWZKylmeT1LEbRDtV5IlPn3evO48vygwTawpm5m3WJ9ENBtBP3kwP1DO8nSa6CzxQlhL%2BXfFxZbeoigvamgjM6u18XR4pf3m3zg41aN7ShuRaippsILEE9OqwdrasaP47iog%2Fd0e%2B1CQxyQfO6pYTKIFUDOMry7EZZ6d1U2sBGykka5KvskvXoL98EsbK7bLNfWyuRY9sclv782jjsg04L7Z5wJa97blhSQKo6IJrN%2BYLPgtauk0ajo%2FMEng1Z7TOo0hFmr3hGFaMpTKy2oS%2FNx1vF71L7d%2FnXNnBECQftto%2B3fiGAE4BUchpHPnqM5RqtsuEubfRKkagouqf89cAKa3%2F0A0n4F8uSRTko17Ew3uHvvwY6pgEBw8Yg%2FaUGNACE6zYWHfKV60Ldb5hPMCv4LCKlCW9qFn8%2FvpH8k2737z1QQTkMfEtllPdssp60K%2BslB%2FdFbeWmHYXbttkrifkwT8eIYZJsoGU6laVb6Me6LplhpNE9BEz8CM%2FE40gHQM1MU5r6REULZkk2v%2Fdauvy60CrHzZioSlvHBmtb2WrB2ynEyLjqwjkXIfAgIyzypncgyNncwxsboYiRMv35&X-Amz-Signature=dd939a70643afc39c0b72b11268a11f696a14b1fdf937e8b356b7458ec5ee942&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
