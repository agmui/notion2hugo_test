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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=8f54d9e88ac826fb92b5f04b0cb44c260f0195cd0684218b662eecf0ecf14457&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=237f5ef08597ed6af8601c1267200710c88634e74c834460c625f1dd7574d137&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=d8af38a8d9f2fbf44c4ebd110d1a0fe0d2a99bd83b0aec8640d19718995a9596&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=93841623f78282f4909875b0b0ca4f2fc4343516ce3606a4175d7d7ff0306b26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=d74aab3f39cd52304c955d5af0973080b74f59302934db17d8ea59d2412c190f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=bf5056739c1f3b47971169742ae0059d3cca6e6af7daff355dc044ca10e2c1fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=5f1d551c8bb28d26a9e3b44c15c93d2956be2d3308b5d62907a54b81b3ce8bc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQFXMT2W%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJluHHHXX7fd1Ik0yczZlmJcnT%2Bz%2BeuWTVinUYpbbdlAIhAMPsLToXENvts3sAz%2FiogA6bib53rM0ymt9V%2FfDPiPLFKv8DCEQQABoMNjM3NDIzMTgzODA1IgxWUUDGcg4pn41S5S4q3AMGxrm8roPxbGEHEvE3cZh8zrKtVkR63YpO7QaGN1ZoWg5gnIeXagit4B%2FCHQb%2F2fEwcZhGBEooqCXtD%2FUoS1IjhArX5ml037rARA4gfkJLrIJeDrkf4uUkehMm2UcxjvSfPaWbmFqQHCrS3fAZQH9MaUMn7or%2BRG0AQTp4We9IZF5qk2Nnqkkgy8qqo5YeJguRMf8JOCHbdLKbWRAhZ2giIxjdW9s37V07QCfPwodeqamVs23W9ndshPLinxgdc4IF9Lw0sirr%2Fzi5jv5vUOHe2Y0zyhBYM5FlNc5FkNcMJ%2FwA8cy%2Bmv5RzV%2Brn7kOHaHu8QAfxqX9SiO1F2EgJphTg8s3YzQEDFr%2F0lYsxzFsrVUenqYyEbrnsYxHrigbL4S6kzbOLLx4CGYD2uSRK%2B%2FZkfZwNI1rRk0BGtBgYt59vb6Wlv2ppE5MLaiTha93ciyoZwGeD9JAXSz89O12grZ1AcpjtjCtMAjMPLeaYXGv4GbxRXmOvBScbma0i7G1V39RYQYEv7GKoFReSDRvEHVkMAkARE1xf2BLDWmdaks0AX7phKivsgoBBi2sUrxLm%2B0k%2F1wy%2F9iGhsuFqWAmfYdDUdHOS8lSvjzr%2FiXDN3HIHJFpZhbdPIwv%2FXBDBzD42pS%2FBjqkAXl21w%2F0BoWOFfstQzT8IGuqZxMazAxvIOJmpn%2BYixfuigqHcl6l2uRKK2Ie9R0rqyNE0oT32l9SQg0wXaxZuzVVdJtYYCpBCCjWwLRGBAjTx0R5yxIytJQp7oa6Yb%2FLz57koiDcdMY71KDw5j%2FGLkM68ajrlR80RQRT%2FxeCjIygiBas%2B0irNUzLvr%2FlS6nTQgXKBJ9y0Qxm%2FMiL%2ByyI9hjN1AtC&X-Amz-Signature=35c2185888c068f7881690a13bc801c909a3e39cf4ce792cd828e6545eb713c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
