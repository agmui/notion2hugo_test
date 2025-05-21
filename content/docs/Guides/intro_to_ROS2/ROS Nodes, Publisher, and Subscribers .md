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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=7a31b75f09b3eeed0834c23006856253b38988d9114cbca553fc70abbecb84b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=27d709d9cba58d0021fdfc602ab7af080d72799c505795cbf59810cd68ba3151&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=76d0f123b681a56e6537a85205e0fe2e968fbc4fe3aaf833e3c967dcde393ed9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=7a96cf1007bd2425f5387591d5ab725974eadc0d5589a5a67459a2b72351de47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=897ae8672ee0a639f3e4bdd6a8131c10c777021e58ce01e128943fea816d0089&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=fa3de13b2eee7fb2f799b66d13c9433b4ce67511041551f4015cb88396e25774&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=ca535ea5e04947f545afd8905b76a28b35f75620a57d45626fb3f5a80c2271a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3WXCHUC%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T150919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIQCFzDUedKv5gr6%2FiwcDNk%2BuRMiFjJkzm8xohSjb0NcY0wIgU12P%2FnT%2F%2Fus30%2But9WLloLOm8Svne%2BDVEphIycGLEb8qiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFaZ8TP5%2Bb4Sn45oySrcAwNUmzk63BkibHeVKILZbIn9bKnQfTImY%2BRPFsXgqVYXLO6v3PgSsrA75mhXNINFRpY8WmJhicLxrOCMbX%2B%2FO%2FkqzHa29SZ%2BCVHvKWd0WB55%2B7XXdvlYqw53d83vvF2X8rQIj49uDiS338ulQuKXMFS%2FR9sfOQVu0yVApcKO3YU9O80l%2B4WBf3NVWBxwZIWQwacUIz%2BIkQ8v2QBYgyWCwoXiSgKZ0DF3vMbtYUW4BN9u%2BWT6%2B8hrbB9k3zOUjvKn9B4FDjPhl78rE3hu3rNN064AsohvI1%2FR8B8XiWh5%2FxfVKZ9sk6RflQWSkT9W9QBUfXERaWg6hxb6AMQ%2Frgb1oXdHzCoDgUeSZAeVRUmmDO8LYQz%2BfFw8jmRe8XezrfRaXN7olh4IrjC3Nx1oEcv64u6BFZogjD6NKjTTxdO7dVboSJvu3%2BU29tozZQwPVXK6d8QZ8rNEX6DdQyQzS9zUAS9LCTa3FOiXHJInqXrb12ZGJyI4lgsNLZsE%2BmkbYiKco12lUGakI3syjB%2BXK015ENscT8W9wwpKBRU%2FANNac77fRzuidejgNY5QraVC4T7jn%2BuO0osmfuU6UMmvo4Dqd6EllFaM1uVbIGx2cfgZh%2FP0qXqfGw%2B%2B6tr26fbeMNrDt8EGOqUBOlpCxOVj%2Bo3uGYV8aw9rZvLC45GLIcG8OSIehLng%2FDDDEQcOLz%2BWL9GIzm%2BCO0EIOBxtmhuFslWUjX6716ig%2FJv6xV9Lzw%2BapNudDdPqlnBea1nb0Udsu9nF3FiT1ir9DCDV6YeC92N7SYyrOkCi2rJzd58E0bhWnDmT4ghezmJb3awFlnsJ87GY7M9JrWqob5AB1tO7T4UPiCLxmiktRZA2bqBW&X-Amz-Signature=83b35f45709b709d1663d47757af59df926d2391b1bfaf9eabdb34ade0df4bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
