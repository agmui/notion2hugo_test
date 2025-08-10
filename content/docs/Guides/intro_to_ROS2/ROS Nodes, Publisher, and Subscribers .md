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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=be7c9bec4bf60707635d617ac86e91ba5cfbc6e4711877f3c1c21301b3c53d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=82d6f026eff78fc688ba6a59d7cd8821291c32edb85e5353664c84cb80b7e208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=20a54b573ba69abfebe63b258488ef5ccb823e83246dde57592155b41006d628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=fe237175449d07d00dbb4716f321b08eed23f2c075f27a14a0e3809b2f8fcf77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=03f31c6637efd490c61d4c7aac327eb42d4249035f0f6c9252a6ed4d35c90325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=cf1bb77895bf1917d22a8a8519f605533fd0f507d8a179e5bc3683e27f482a69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=7b058445b29c4a57c1c4fccb126b13ccca75db4cddc541218d02f0fe08efebe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLBKZCB%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYv%2FMV8AXEig8CaaaoVTTYz6BmZCYy0B8WsAMLnVoc5AiB01texig24sqiDm8bRfDvOvOtX7mCan9ivw4iFx5CFVyqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRcZVdGAHS10G4FTzKtwDW3Fyq1he1jWhDaRUIOKMbzOn3ecPB4gHOyW4lA3eoRPhv1rZz4ozYHUwU%2FGhWu36Vtql6L7WBeWHXGSSthNc3UpaFqQP7lIhpJsySvdauLdRCqVLgR6%2FCARjEi2%2FP2KGGTsmgYUpAFLkKsgEngYic5KF4CBhjD0E0L4cPDZw4%2FjzTPzbnJjHbnajbksFf2aoUQXPsYkL8NiGlDYoSjO7Rweg4gbQ9hegtwZL6mEFu8XsY%2BVkhkmy1LzMWgie54PRFkUjTUR4qhBbJ3PxEa8HaxfpStQgBFrEcdRSYopNy40pdzIv7clQEZq47cu0elKUw0lGaaym%2BsX5gMKTggA1lXmN75dg4PdKAvG8M3nTD%2BYlpFVRNSluLp4sAwT9uns7rZJnHrTsd%2B3FprSn0bJDk8%2FGTNbJGWriuxDZex4BYq2%2FSS7SQvBzD3B4Lx1eJXsjW7KvK4ey0kztitrp4h2YI5p0g4vu8J7guz2Gmcf5wK4kYscb1Dw%2F3Jr0ApXlj8eQEi%2BjIe%2Bc8I%2BMBji3JGz7DYupL01eS1wjH0SFBkouQIU6bxOoQ5HgJyShQjWoKtIXkTqfntvc0PuKrAsFqQUYubRAYm%2FxOJ8JWfXYf6OsoONROgjIhE9QfaOly88wl9HgxAY6pgFoTXX8FwVbgk%2FEYvglCdqt02d%2BwQ6pMe1FzcOzxWmKDIfq1nqSKSDiy%2F%2F75%2FE3ZJ%2FmVLAJE9fbWexg%2BKdmprtN5OT43wHLYge9baL4u8KDUKy5rxiZTLlj4Oa0Yfo4Ifd5pr6Ea8r7AyEjvoZ2PP6jV1ESO1C4Tewe4zNvrTIeSqY%2FMKA6ybD49C9OcvoGC92T1tIqzYEUVmlDDYmYppfsGHyOk6GT&X-Amz-Signature=efa52332ba86be2f4233b01f5ca071bd3c813f0601ae4bf2f00f168c24232d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
