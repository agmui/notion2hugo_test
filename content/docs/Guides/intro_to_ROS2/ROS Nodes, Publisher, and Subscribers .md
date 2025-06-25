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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=59c0fd07ea4f3cf59d2f1e596cf847c2dd0dda2fa3937623d046cdc4ab93f5b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=18fc4225c80020cb9c33050bbac1d27ef4d528d47a1996f173060e8f6c1a3133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=82fd3ba0e771993ae6c6e05233b2c5c45451a792c3e7e94e819bb20f73a298ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=59b4d803efc052f78499243f32968c5b6a276c0e5dc03e0e052159bbc06b78d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=a176c368368dd7bf37f96848c3c4f8b0b914eb1814753ba5c30c05509a0138b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=0535c96f9eee0e9fc0d5cbeb10f4fa4b4d0578f214633e40b3c9df95aa3b78f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=aba5f8ed2aedb00a21d0de8a100ca5283d095b3cc1bc3d17992a6018b8514894&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUDBAONW%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIHNkxnPGvU9qPYGe6N1ObKppq3Lz%2F9SbfYgufP34%2FKpOAiBEcMtOThyGRwWfJ%2BDfgHXJ96Wh95%2FCLqyIB4acOiT%2BxSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMajKyqgpJlLMhfagdKtwD23jioKWtQGB3nrVBf%2Ffwe%2F9%2FfnQqWcC%2FXZV71OeTnnzJ24j2G1IWRJJXQT2I6Y568uDHu9q%2FrCsgIUy%2F9DNdilWcZuEMTV0%2BkuUOAKkuppyu6ho3%2F0l9KhQyqnlgDzwaZIwOYDAphB1W80X1oeq4G2ybZ2cuiz1fnkuzF9AseA8hD6L8D7G6Ts9VTyM1Np5ggkJ7trOyp39bClm1o9vI2iV4qRY7vlzM6NLjQ09e1cJ0cpncKnF7IX7bNrzrZimjx3zsrtq%2BSFqFqRQPTw8%2FPL9Ozw4tJmpr%2BjD7jtKyUwf7Z5MpHaN3GC0tyVW7x%2BNNak0ieyFUhUx4Q%2Bfcnz35YNj9kp3eXdYnJXaFYSK%2FcpL3rcVNHis5Q5FkmnRGOqmfKP%2F0prng1Cv7VDhO8f0hSTExpdi4dhbf7NpomXu1THLqe7KQcw78saR30JmNkeHZfFZG2nWxZf1i6OHGrzFQeOdfcX0g0b7nkHd3FPwn6APvCyznPBg4lSJak1m05wixFKKgpztwFJqR0v6z%2FnLQzypVO37N%2BOOOap5DOieF6NloKFL5eU5WiCMi%2BzcNP2Jp%2BhHVxwgC3ySlu216gieP6G34OhUtbvBVxrzpox3HlWaM8h1muJkPga6uqYgwlrrxwgY6pgF6eFVjqBvAaZFxjZc2j2JbbCh7%2B2Jd%2B7MPY768k97uXBm3is7ZW%2F3WM3CdsZyXDf6j7C%2BmWjzcUZWIZ1H9MmH3LNdKAwvpyAUXQW5GTxq9iaaV%2BAHk5Zdt2lbMbM0ozxsoekJi68RqG8TLRKR2nWcS4%2FeT5cuHQwR0A%2BPzTYW%2B4XJeWD6jCyjyRGVu8PtqN9eL9c5F4DsY62TA5L0nYF48OU%2FcJ%2Fk8&X-Amz-Signature=e07e783bbe9b6a6e22f5c8ec214dbd4b2c8c3fcdbdbc4deb5637aea0cef3ca08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
