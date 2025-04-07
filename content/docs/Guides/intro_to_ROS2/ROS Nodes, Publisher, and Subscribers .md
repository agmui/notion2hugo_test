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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=7e5d5f30e058934e8631ea349f135655610ef5b3aa7ab014fde32db85ac53d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=ba6f8ffeb9e2cd4fbdce608b288d94afe445375dd09d64b810eaa766a247ba1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=08164abdd6622f2f516b16a9cad935e953e16d9360072d63b441c2109ffc542e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=b530c760e10411262977489dc8dbb84e3632d412f7f352ad04bd197c5dab8b24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=813eb5ad8262e0c2e061560d3ad573b0678c67121aa894dfcd8f650b5ee77e2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=16b0e4258b5fcb37e54fa89c2daec418072e9bd686993c0cff6cb724b0748d53&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=72217fd95dbc3a4851db0351b5e4faa50456ff550daeecd26223ae39bc98838b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45SGKH%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T200929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCerIeenSj7xfb9pPWF5wtetMoIWsaKkW7ar7pNrUVSyQIhALwEUvEA%2BGOVWcDIM5KytmCDyxmPrR6KsxDA7pQby%2FJvKv8DCGMQABoMNjM3NDIzMTgzODA1IgwPe4kjVYtG2TH3bHwq3AMJfRcL4ohMQXvIXo7Ynd3niFXrrF19zU8dczTpSe%2Ffk6ryJlWczY78vRUe%2F3oOBEgNYIkreqcSvI0uUHen7DGDh0qRhzN15m2Qtg8zDerweM%2FqIDDz9PNQdIZL6qq80FrvwHO4ayl%2Fo4Le%2FzuNGBLhn6o%2BneYNOqMjjrntTJAyv9h4kc0BbrvLTlSxesp%2B1WVnzu7E9PMrUiQGIwBU%2FPb8yCgfw%2BcQcu0luaFlU7wUeb%2BEfXIU86UtJDe0HJnEq6vo1wYCYtcThyhXq17L95nxMEv0d%2Flvfx0uUGRaUalgz5mRkgsr0xVjl0V06KTWnvAZON990e3%2FKc8anHPyhfOfv6zM0z6a9hrejXl%2Bd12MWCN%2BTxaHiA4FushfvfHOZ%2F58uAS%2BFt9QNujbN%2F0K%2BGxb4o4d9LL2tq1sltF3Zht1SenRLpL5cZZyp5xgreSStXLkv5u6Mq7SHGNDGb5oqaUK3N8hnbWc8yAdG11ClovuLCdMHSJ%2B%2FoIkmi9uvr5z%2BDAsJsnX8OiqL4lxV2aGESl5If3rwhLtnvcC0jHrGg%2FrX0CKRzETH16oOWprkowFmpBFYu3f5mSeBqWw59F55P6QSmYzLPCogy76sTMSsJ8OVoZj5m3cDEhUpzA6njD4pNC%2FBjqkAUs1PjZVucrcPYkHtJe7aInA562dNf8zNgPfBpVhMs1QwPtNiVUKBlri3npNxIOvB%2BtPT1LKczVcgqvLjXYHbMs5dWStsElWS%2FnmvCttJGs%2B8P5Erlmn4Mj7ql%2F3G3rGttovAIlPiGWhd5pxJWtaloP8dHA%2B0pwbiF%2BI%2Bj1gLHmglHk5gjxN1JCKs2BZ5Sw9JwaFg3ni%2FniN9yW9tIiyC0Hu3YWT&X-Amz-Signature=eb2b16ef31af314bcb7c1d58114a58a9bf63ba688d8e02d15efb73988b6259e3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
