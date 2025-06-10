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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=9e42f07a2668e23ba29bcc5a8ab5dd4aacbb074fcd1d12213384600236e0bc30&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=c5ea207c324976c00aad11948304dff637a4acd17e9e9a2473639a465322b89a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=5087be64238542a36c64fbda831be61c60ee698eb44289874e28f52cb17347c3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=bad47936f297b336bc36487872db27a60f2e32e11cb35d11b377fe12c2b5c0ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=678c776ca3d09c600ad700050072d8f4e373faf6e5b49369bdffaf2e54fb1b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=30549812d5d0c09b8e65946457d5b12f818bbfa2c0cb92a8f95c73b75dfb4936&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=2dc1cdb85f1c70e12cd4bbec9d9b1e0c28c5714b3746835e0c0f070322cb4ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBXZAEOW%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T061313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC4CGthJAxbqzJzkByERHFqLNE5qtJ4EPg2bU%2FCtVfOqAiAY3iAucyUWYv8ZEZeQzuXeg2ynth%2BrIPs00z%2BXEOMdqiqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMsn%2BYUkRWZn%2FvlJDwKtwD7ccvSpaRPmk1uBEpUzdeboE0v9MmYCzqvlv04u2BoJlq5M1vCYVc%2FLmVQSinN0Er%2BKVImXe1If10%2BRQ1ANhVyjXsWIlwLNIaghN0ETY03be7SXLGBGNcE1lQ3YB11YvB19k1haa9H4bih3qkLiIkyetbz2avyKorU7O1bkvicxv9z6BWabEITT1%2FkLCbjWQVcR6zz3WQkT5tTMaWQYGXmWVfoUI3zzACtDbc%2FprOf%2F7Ws0iJGgglke%2FOtE%2F2CKLGRIhpm3vkFIRtiXm4SLmn2FuHcCb3GCchFZ1F3VwuaxQM3Y9H76UrFPW6vyuDIPzJ5iZo3ETPx3Kuu18QaZ8VtFRpm4B6uccCKEZ0tDFDdfChWTrIr5lVwzDFFHqNLdTwZV9Fs1BWr06w6NOgSbVjaXvW35wpoOCjyH8ACdG6JgBqOrTpo8wx8m6BAT%2BKicdfPTcT3mMm3bM3YNSPmu%2B1y1b%2Bgb4XwPwgxRTJvps8h8VHXOpHzZybtrBMtRG4tTNf4HT3JsJTivvb%2BPDza1nnSVZhn%2Bmmi6A7e3CBqXbrxuWgPNry9dYJWvJ5Eb%2F4AoExnnmSDRwYlj2JjAaa9f6fuEHMD7LpnFpLSRu6zCux0dVxiR98%2Fx9TZ9tvBPAwwYefwgY6pgEDN3kMX0e6%2BHVnxom8dS8DhJyNTHL5j7zinK%2FTsA747kQwQTsF5ikJS5mhd%2BdJDomqLF992hxYnqyhqfVYl%2FKwQtRjsbN%2FoDd8WM39KYo%2BZEbQ%2BIlQRGLnFAy2dHusd%2FLv5%2BMr0udkhl%2BwVjw63ZIQMa2tGyrEpzUs4LcyaV5Bc9kIh7O03BnOQFwj5UWrsUXNmNw53I1ClUXT10gl7McT0Znptf5Q&X-Amz-Signature=a64f2ecbdbdca44306d3706b527bfab5bf4c784e0087eb253f095f0689d7bc7b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
