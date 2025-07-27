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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=db84069e6a210fc9aa56dfa6d96209ea1a905c4b5918b7f5459225e508058606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=70722230de6d322ff090d7bffee205cdb8278689b84074cbcecd7446eb2d9813&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=ee3ec915edc633daa8937ab308a3bf4056de6eff2be7bc7a99a3fc2a8421004e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=84c100a5f85956ff19979a7b8a537a366d8319b5373a3b37d1510294bae8f005&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=5aca90be6b2d6835d32e315cab7f1e99b36d010eaf7c5dad846c5ebc9369caea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=7ba02c4c6f32be2d1d7280970cf3f8af352f2c8bcf8954e812a4413e04d0dbb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=e11711fe25bbdcfdd6958ae9a5fd4db5f6ac44f4585f4de62e6790e8ce731c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QMGCXRV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJIMEYCIQD9%2BjnX5R1XcsAkG5MqqxbUlH%2BzH1YE3xHdY93aFwrdeAIhAIgfVo8HqTVFEF1tGy%2Fv6EZitfBeLgitm9qDcdSd1DxbKv8DCHcQABoMNjM3NDIzMTgzODA1IgzW4kaDARAl935r47Iq3AMVz3tIT0TiyZZ%2FLVNrI2b53oc4W8pcyAOLbY8L9%2F8zaN3DRuyt4K5SRwJppvmqNX4aiIgPTZgfUI2sL6P9eSyvxz0O6bfiLC54ddd4WItOIPM44wRaATsx968Vgmsd4n3%2FTHU8MzmdRs7SehOZXoo1G79iDM%2FJ2%2BPenc7vaz%2Fx2%2Fizco27XfdCkObHZpWQ8GgtOsdKcoRGpsJa46zZznsYLBgUKa3oITc%2BfAgEm%2BoJbPp4DqRmFrOm95IleWb8E%2BykJpfKOaLzXEqB%2FEWXhCZRWxaMz%2FK2364G8XdOxpONh08w4k%2BeHngSaRacmerP3XQ3b9olX9XrOFgtUP8gQrt447QCY4DOdPbnGKW9fydspUbaUFe%2BR0Q%2FGTIzEPxqzhALspsFsKvSbxhj%2Ft88%2BdrTUIDw3aqbKoM4Emw5kISoWMDx6fBt77zkNd7FCZNgO%2BTNbc1atTY1nFk7JZgirLFlVMOZKPEFZMmjx9eYBDLaYH1Yf1AiG41mPyZaD7XwcCwYwG9grfMmE6i4E6XGf05np947jQxKLNrYgodsQ4QkF59tftGuMgHj%2BFyGe9Eig4FKOXkJn8sMW4qqQZHMZHAhG85wdI0pm3VMKr5Mh4vsjKrvZ10ppGYnRDPJqTDN4pjEBjqkATCaNWgxTMjTfhsYjIEJvU5lZQ1OJFSsPkmozEyP9hwrmTNYsw8giOQI%2Fldpp2lvxn5XPNolPQofzGKSyKlpaWIjparaT1ZtaigghTos4Ax9nUu1sRJ76NTMjf1dAtKu4Nd9JsxXlS8Z%2FOt4os0LnKcbxIQrpUJt97xBQVzOMz4Qyei6pVk63jhfFtQakUA83gvGKkyNNrjYvupjjS9KzMWgulTo&X-Amz-Signature=1efe3cf732b9d0b6d3f56e3d4d4112f155ab0d3ac70d152f406a454917a4cf03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
