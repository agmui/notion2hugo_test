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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=c225552c53ab3f313de395cab163a3b1dc08382503d7a6dfb6a8624c6a467768&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=6690606e92aff3cb2d5945eb752073a5f5b53629b75b1a7d44046a0023f4dc67&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=0097543c8c14c785ead419a8fa6d5ecebd85582d3a7c28de70a261ddaf829920&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=54991803b2c050a4602a1cf575a76bf82ca34e6375a96d61b1ac79ff1489a961&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=6415991697ae008702214ee1ba8186b3e171cd798c4628f31bd733dd44a5ca2a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=7342e46b5a08df605a988f0cd1b0e94ad0191c62ecaf78d070e579e40f4d3379&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=b26a3646f342276a3960c6d098135e0942c87c75b0b232a4891a24bfd5b7029e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJZQRDG%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T110207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClOABxQvlnmk6fbVXADgabka0AtqEhwh2Ypn4khu1yxAIhALbqWXHFxndDND09lqfriXblXg4tGvYfF13VSNiVo%2FQGKogECNP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0ih7ZFUfb197Tgtcq3AOoYDcLr03%2Fibn%2BEsmCkTMo8d66Jkutl%2BgjWDPQWSuXUcEd%2F9%2BEuSZidaymCB1%2BpgwlEJuQlYQSYDS6ERNm3fmVbhqh%2BC5doejEFqRUMxeoDYMGCkHxV0ofAR%2BI9OXnDIVTlf2RZXOdICStSTMC5zAj2gDnRJQuhnT1f2DGQkWFjFsNpCzi9Qs9NsV2zB3yYZzXbkgIZ8eXjiAzJHgoWkZkmrPVUQkXiWR45yYvPcrpBa97lqP96VTDbxZNZqVthQ2liZb0L2NxwvoxH0KzWCJ7cgQKtaWMaKaJAgCu9d%2Bww4buvsdulz8cOOpAIiJUg%2BbWWNaENmvvbIBWeG7PCUlR1bluFt3aVlxNmgb8nCDhf7OPmM5PO8kFraxzWJ5bHpuUD%2BUkQOYjjxbijgofZKKLE4eCy67gJ9SF4PmkiWJH1l6wrQ9HhELwbkIOP61J3WubZWqZ29as6xF0V4igPkOX04hg7i9bdO5Gq9kpKV90ghLBvDtPCtbE5ZqppmjUNK16mDer3tqe8eYGXZXe5M9%2BwVS7Brl1iyfwBJnBgqpH93WFqTbed5VOHdRHJGVjn6lkbx%2BJ0qywYvTol5dovmoNpH%2FgJkw43212NyuO0MLUuMLZsa2WhbfA9x2OETCRmeG9BjqkAZd%2BQm0k9cmMa%2FmT1a%2BC9lL%2BPhL5zBRd%2FxiLUVFuQBj6XXs%2B6dUUyDgqQsXpQRopnAFzJea0I7P4mloiV%2Fj91GQvjyycg%2BdRkKJOMdWJG9izZTgwjHWH9E450mCo5QTlviIGgo3ytqmoNmR8u9ix%2BtYf7VahBOb4NAd2M6KuFf3WBfS7vgJh9yeUqFXlfIanCkH5YEgG9SuD%2B8fBww9DSoM7Q%2FNn&X-Amz-Signature=10de8958bbe0c78a7c0da9e11f795fafb9e8389766ff846e4cfaf64f7d20ed59&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
