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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=be8f58e6325e2e1b62db8a11d8e769d75da7c0df203823d2da043b08d8dfa78d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=2360cc43f3e160c499655bcbf5047d0c0dd5b1ca6675f43252bc96bea872df59&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=cc222dcb85812a1665d0f0d477c712fd7061e06958a3980d619797309f560c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=3d7b9c38edc43f0a0f4a47158a352d1705aa43fc6673d4b8325fd41bbfaed98a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=ec16b69a3a369d1761ca2c251eeef879314426e925193d30b5814a6a50862d87&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=4beeabe66a45d326c5199f1acf6f2f693ca615e915a47f40f75ae5d7ba847337&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=b33b386b846b0aad4cded3bf3829f7369ddcb9f2ac5c2b4166566ab61ca47eb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NXNY4YQ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnBtdvvjdIUxDAT5%2Fn8fpqBw%2BNkYeH7eHr%2BGpebPx9GgIhAMeMWJ%2FCrAcB27AXL5YqWU6L9DrGcFJbPV3%2Blxtrse47Kv8DCFcQABoMNjM3NDIzMTgzODA1Igw1STc%2FR6GAYkD9TCcq3APBzxAmOw7aYaWI5KGWkdjT5VlnMNmDvqxRzqKczpZt6uLVCYanhQPvpEiuZO11twQekAiU7RS6JCF%2B8ZhcurPGw6mYelmccp3D%2FOKq5MTeZwIwI4%2FC4%2BEf9JppjtuO%2BRZC23jA4sJVLNUv3envq8oaS6FTVx3Cet2T%2B2ZR%2BT%2BL6SiE0z1znaU9KNstU9fAXpLdsUGeM2bFwRXzKbjBGWwDaUzKPZaEuWIPMWpzOTKowEU%2BuGSkubGqGbzCOVLdLdXFmhfSn%2BaYvfQiNmOsMxfmbhmLRxm6bapnC1jk9JvJf5IYrtMscyPT53TGNYATNrvgJwuLKpUHexUnZy19txWP5%2FM%2F1fOhlCzI5O49ZVsmAHA3IYBmtjecPQZk57Z9xT%2BejwKYzWzmVwNp6XhscIePSzZuPPgUB8Pu%2BqxEhiyWyp7N1dIjIiyOMlclXDSXWYgH39zf96H8cXu34YL3%2Bh6D1m1YcgkUo0g4FPGho%2FbbJPd3lOQlClo%2FnNiV8DymF2eil3xxEppCQb%2B6zJjOnU2f1fgkrHcvPgJnX9BlBO7fByRi7yIqlzBxFEhEc93HZZUkddpdR6FESgYLXHa6WkyoWmH2Stmtiake22MQI9ArOb6sl%2Ftf1SC3u1UPLjDA6Ji%2FBjqkAZ3iXEhzsi1UqC%2BHTa1UDlOrNIViI%2BEpyuF1QCD%2BzeJIXKm7XrsQ0Vzu%2FAyZqPecLU6ZQzt5NlztRWrySmgt%2BkXpE0oSq7F4X2uBw7EgeWS2Ot%2B9wQEKhvrx3b6IAwhFsHFf3Fh1fJmJwJUozB7nF12hNOwJGvSQt5qfh6Q5cNBcnaRViZoGa8QxK3pewAAlgKq6IhYt1qszWe86ohrl0VxsDaA%2B&X-Amz-Signature=2a1542395a7a53e1723ac0c4d780e672a43dff16703028b9e2ee55e97839734a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
