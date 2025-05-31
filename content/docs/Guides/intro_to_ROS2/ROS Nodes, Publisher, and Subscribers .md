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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=85c633461d41e4b2b6ddfae7ccdd1c865710a82cf7a979977daac89045ddbb3b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=5e33d3419c687eb8ffbd65fd1f7939a2fbadbb1a2f029c5c73eb0e98776110ad&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=ddb5ce2bc6f5759bc901ddd8e794033cf71a6b8e34f40cd2b3d274bbc155e857&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=881a62c91ce32ce149c3d4070adb11dda1f610953b16a600a598928d3392f431&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=4f65bdfc8f58042cc8f952e701c29dd97fddaf1c28b7b8017b0aaac63ed5934f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=89c4a3196e9ad3383123485635734910daa91a25e15e2e99157cd359807f6549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=7a583f8c6cb4fd64393a7abdb80ac979f6d474571f0a45b7bd3bff9ca1da50b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNS2NS37%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T181039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRRe%2BYqMB66h3GkSvA95A%2BWOMBjg3qxE5f6%2BlmFk2vXgIhAIxjA7iH1bwYBxVttNp79hBwSxNORk5eTwbdyRqqlXePKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw3vJk0jOAywRFdFZIq3AP%2F7DfL%2BfSsBmWUpKI2CtodFnnuFPSGY0h0%2Bxy2NoeBdfSmCydcsvXwAjTOD%2BfdGLALqU3JEyrzY5OO0jUm5MpXRYJvqZ7Ac8W2nW9FBJ1y%2BftoZGcn1dv9o27zkDZrvSw0UgNPH%2FRlOSbr7T8ulcO5SQZVcWXUVuC013elmgSJ7LdZgnu9Kk9HwQfdFArnmtxyOypBQiFF%2BATfjy9b3Lrv5dvhm9qwcc917Wr31sslHgWQ%2Bnf9HJ4R9Sux1Aq8OkFBFT%2BjfDVQu%2FXKJnP0Lu1f1oDOzXNav3HUvVdMxFbXnzw80ckCdA4QYzFmrLlr4xZUjUVP7oCA%2Bka5Zzm%2FNbTN7A71ucB4ZY6VoWwWXsNAmTJKDicUMem4%2F9ghODLY0foBiGpqcF3OEw8qL9HvxzN76cS1AemxY%2FKH6Sk7Vh%2F409xwLs6cvC07ng7iXxy5NaQiCvPluk9oaWKhK5jhNoftai5292vkvoRaTZ74Aixu1NrlmSnQS%2FMlmi4VXsh%2BTEqGZnt7jC2RlHZ%2BUFh2BxKC5x8j1QVKSG0lgAojX%2Fc0pvvt26k1USghoQyf%2B6VKH0zAJMbG%2BoUgQlseclOGB%2FrxatP%2BSXQmTN04VIrV05kAA0BFs9iZ6b9QlNMYvTCxqOzBBjqkAVNxjBwCzaKVYMq8xaCybGTG1BPt%2BxL4jTvB26GiS7eql5WhFGqwihd3tzRHd2xwPZAdH3BG01p%2FnbzNzJ%2FcE3R%2FwMqKN9eaJdIb1y%2FlUN75XCgn6X4tduB6HFLj9pX1R5II%2FsbxcfkKe3FzUhphwDTW7rXAkNIbD3aGd4foVvWtPYVkGpdX9WJZzPe8f3aogeKkr%2FyVCtNo1LzaY24rb09inS82&X-Amz-Signature=c5293304a7e3cde74c548dc90e4528711509dc968b4c5da451bf38d4b49202d2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
