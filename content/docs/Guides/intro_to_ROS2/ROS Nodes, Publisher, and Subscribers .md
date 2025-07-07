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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=c874392089b787ab026340abc7ef1c9c0c01236813d71659798e0604d6aacc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=b4a0780da6bf4d5fc96c92db9699b234431956aa30ac15013bd0c0b52af0ad3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=24db69e4017ba114933eae9398bdd360727ceaa21ac93c2a476c593f851301c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=51a1dfce4366e8c68e5a18ac75bc18cd18ea49694508f9ba7f036ea25a01ae6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=d16a094990189d3ca88e2712c1304a606b37451226b80e466e3a4b5197939449&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=ceda25c2d1cc63b8eb902a183d4e0a669e0e14c84472add06337ec5c57464de6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=3a692d47c4dd82fe135a9a792fe0acc4a9d2f34a0ea414372db9f6feade2362f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636FXQODS%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T042423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvZn3lIAepiyeYaHPzwKjBhncLZN1QByThhNZdgZTlyAIhAMFNCGlEGu24fFct3YaIROzPziCaNM9BcW6iNSqkM82LKv8DCGwQABoMNjM3NDIzMTgzODA1IgwuhjUOov0LsEc3r5Iq3AM7S7QQi4esePJfKvtjQXnYjb50IYMgf8QcRuL8xu%2FCqeow%2F%2B6Gyn0XYQo%2FGYFaP8ZR2Q3oYGAxy3aMh23IwaHsfO3dQLj7FmCpqJI%2FU%2B%2Fz1Mz8gDAC%2Ble4TKX2YCL%2BIjj2Zo8HvOTMmYZ7EUy4E7V6%2F6yC9p1Z7srR%2BWpwA37fWafsmX%2FhUBQVEd2CWhWFMN8sxhbFDD4uVQXNMz3hc%2B5Pn8AF77hyXeULffJgw4pvH1UrbHb3ayLTxuOv0cO6symtkt%2FdAX6xxIIiG8erDvE5xpRHpg7%2Bv0vvas0xStABZ0lZ%2FzIb9gDtOwRMKceA%2BlXzo7YLHxyvfpmqM%2FYuFiNX44DzfXSLmvT9envN6nnOH2%2Fx6CyBPm8IXVCcCm2TQdhcFVGwJ3AuAaYKaHPOk5rNYE8oQ7dHN8qcjO4%2Bu7fS8vnXsgd9iTDIwMmlnpbyGLz0uTladgHx6poIGuXybJUgju6HNFMv8YpxLN4CzAlncpRGQtoQxmRpIY9Gtkdua4ngmmn03LcvypNQsuO7Miu9asOMJIMippMscLstGn2FlmK6Ht9WCkrIYul5wnjZ%2FaVO9a89yJTiYWoga3ZEwqEqRYND82o5J3v%2FRJ8BheYtOUoPBg7VbIRAt%2B1wQjDk46zDBjqkAY9KBfv%2FMf90PPvruyPEvz0Qp1s34K74%2B5QPIh55ccPnXllh5jrnaky1uPrLezFLgJqBLvFK5h0FUlyKsP3pvilfCPKkdDDwWpfSTH0ElhF%2BpAD4vyjVtl4qyuktB4yV8FHo9ysn4o%2BTEtja%2F3gviYEelYhKA7OGuIxmrl%2B2EZEy8Jv8STy%2F0FqTJEUlGiQZald7XVmUbCBq8%2F%2BTn5cmlDMymdw8&X-Amz-Signature=20e3751c4a1873780c31e04f6c8bed8e5ee5151b9b8a8b0dc4b47608d558afd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
