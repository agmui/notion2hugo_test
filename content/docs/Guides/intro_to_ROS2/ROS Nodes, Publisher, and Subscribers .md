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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=2343b222f0ec78175b4685b53cbb52d555752c6d3003d33dd0fda550692fb7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=b9f390ef4efe1e8b0bfbd411a9eb2d9737c47c223284fe344ae4f3f1380e012b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=702f7821c554ff64c0231ea18e0c6453700c026aaa68545c9157b6bd2c050ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=083b526a666a2d53c67a7662b86a05a2eccd161f23faedc6725ef0d175bfd60c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=bca1c7e9ba67b8a0bcb9371848d25fb607a874d14faf8fca5acdf9388bbc9b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=e14a257ef076373580db1c862a469c11c668b51406e5e1258c1b9ad1763feed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=75a3cfbc0918ec336f1c9a50c22d37925c369502a0057df2a35b43ee3a5b3de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6XKHA7B%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T170723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA649dem4TynGwknOEMVE2zh%2F82TOtnQY3jDF5aX0TC2AiBypwGMuo6ZQ5nF5Ip6%2F2YzQsrtr4yAg90oOL%2FutwmlPSqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM394ZUkDEUMIcl399KtwDbbiqcnoL9QGkw15jhFc5kqQU0c4vGw3ca9BO943ZQNJrRHpWh2lVE74zU8MKpOBej38LGRb2RfZp7JUXjJVS3jvFlM2J61NZQNRNJ74A4Hbg8%2BiCcNrIQrEkBziH86342QdkIhPOWmeJ%2B3CKwJCreSUIu8cht%2BwqM50CsW1Zos7YgPoMOx3neN9MWT7BQJ%2BqD7vhpvOzsHbnR9b5lQgbhvZU9XBwXxR5GgF7qZaQQQ16BOD6O1ad7DJZQ62Wr4Th0p371eHigcpnQUaTGJ2gVPtD98o6uZtjYWKRuOpzL8pahPC99B%2Bd9fFype0%2Fy0889dNvz%2B3SyJ28ArUc8AoyDIbCsPGSFzRaR2Z1B18wxeg%2FJT2hjvqkRThQD2p4Zxk5o1%2FE%2BlPPVkEyyaOaWzDUy1tTe862ZUsPTVpA1NkSul%2BWSBpcjnER%2FdTU9WG%2FH6K82FvyvfdfzayIMZgtiQhFCtKWKV1lpaBZQBZWHN%2Bhs3flgxfArMf2Utv7uIAM9974rLtedrGmkvfUWtEnh3GN2ieUsFmk%2FYLrL0EPQshH7lRZDPBetNYXIbipuDnDi6e%2FQytGXOpJxTnjrda2vMfbTTRXWFtUCZPz5PCLlcc8aZamclOr9%2FabnCkpqp4wttmFwwY6pgFWDhM7icHfxYgKjfvla6HPMrcgl5%2BPuhZtlY0HO7QpSaC7eEGVhVt20W2WCCC0SIPYVokKOdsOlb6WxQyzZz1gM6dkxhoeASnZ7z%2FAofURKqvaH2kfmzHAhqBGXqGZFZXvZJ4sxfI%2F3W23mTSsqyXj695CHWoEh2lfJ9Uv%2FtKZgIorEmxywA3NAXwZ%2F8cCzFoW9dzSNOohVgMxrelpe4XZLT%2BIjAyC&X-Amz-Signature=cc0016f4a60ac0c63adb370e265b66b07b7384500a68906d52074dcf9dcc8c3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
