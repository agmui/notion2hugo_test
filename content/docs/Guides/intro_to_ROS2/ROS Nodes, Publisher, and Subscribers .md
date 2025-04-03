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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=a911b281ed36f1df8753f7f24cf66bca316474f04ada1dad07f6af4d482cff34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=b7bdb16488cd9a3aa2ce21f2861b1345f7bd99cc2f93e8da252fb8fbe4e7d2af&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=8f006f27faf924136a5378bf74bedd7e02c7502d94920bd4fa331050b26e8e24&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=f215ee38245191e424c9240bdf594c77fc1f56f4c719cb5eefa2708f5fa6bfd7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=1465663576657acd4b26ab39a79a8be9a42ff70426331a0f6dcbe07a4ac9bc21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=1cdfa37e72a6542619d5b714052464fa2558a1dd60199702258d890692a6f46f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=9efd667c4e7b8904b309689bd518259cfca3a09110c297840e9fd8e3639576e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKGVTTR2%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T161003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEcA6wCwXrhFlMyaJbP6W1Jk2nICwGfC%2BM9ULN%2FU48MKAiBxQUew1VppHZ1Q0jZEfSyp9FQTGJYSTzm8ww0JWVu42iqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDee%2BQGVRA5U12HEQKtwDDzcCBeIKXHk7ckdHVkWurYnlD0IiIsPJA3v3EYzuZVyP%2Bep7RlBlDJZ3MDJP7DI0fq0AVpXNxQyug8t5MDbIAKqcTVRuJQvj%2BHnvB9J2zDHG7WfPl%2B%2FWp8Nel%2FV%2F0z8h8jw5EbcrMWIT1GK6QCuRbpBkwsnJvK%2FK8K1bEOGiABVFjWSmJWtFEHlHJMyueB73Q1TjLtBDzATWx0zDlDOV1xlJprpq7V5xl3jl9%2FXvzE1rJ3Tjm4R2ADQpYLVLmAjmtngvHiRwfWAVUHy4b5Jv09%2F0fcgK6Z2YQotkQbY56tKbKjNDpJiuKVABfxkWLEbiQVKzBJRkQohRB%2Fk7TW2cu1NwWb2eH8PGoIapBaXxqJcmsxKutMLCVs3Bmtcqocd5lEIc3J2%2BF7Vn02zMeoG9n%2BqZ5tK%2BKrKdzZAt2s89yi0N2tke2%2BYp0u3WHh7zuijN1WuwxAXfJfcrKTC%2Bzli2nBGgJy6%2FLhvsy25JgOCWTp3MECQ8KkSrWdApemdBUqtUADr%2FhGfZelldQ5EacY40XmEGHNDHRvTLthnvAT99JJ5udW5TSaUzFclZg42p3vtkkhHtj4fKN1EBcDCR9v84MVZa0mfxQqIejPyC9h7f7%2FfsVlLRPEiEUizgEHkwo866vwY6pgFwJ3zVZkYNrPFpEz8p0qUSHdAXEVH6nX9aNnwAtnlPVs4ITsyADxOnuuOiDcUCkF8xJyDCF%2B9DQ4WYSwO1uC0ElBtgRswp5lyRMCMmoPvHIIKggvaLlf2IT9uwZpDuaHk7PzfNkrq3JtrVEGBQtGDiB%2FqzP4%2B7jxgiKwInoslrV0mc2wYUEs3UQ%2BmeSKZCnh%2BUApowdjLP5k%2FKADfzUCj7%2Fb1%2FX%2BT7&X-Amz-Signature=e0873727bcb5f55e695253cb68283d4bf6c2e99d61de9a0535f9118a5645541c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
