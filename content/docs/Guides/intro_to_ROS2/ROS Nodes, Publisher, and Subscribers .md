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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=b94686b9bf9c38d58d25f04069fed14630732188f872217211e8eaca574e295d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=db15967a21740fd4dfedd21eee553173d31dc2cdbf0af8c2bffada3da3686767&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=be1bbb9612818f2a9d6c8253042d93bb0ad06e6dd3aa65dc99451cf4707cc796&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=72f7ce7dde27d2874ebe78ca254dbbcee461ad10776f61d1fa6f6dd4baf5cd2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=124ab36fb27b44394c262fafef1362794fc060daab64ad13d6905f847de4e348&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=bec8f104fe5d57d4e81533d6038aa41bc570412d87eda42d1eeea93f7e4982c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=0c31011953a1fb19f1c5b02047f953e11bf6928a9b455d57be1431cbb1e628f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667RGANZA%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T150806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAU4hoYLy20bYTG5db%2FVBN2xY%2BDaSi5bi6G2av8HzNAGAiAkCL38FPoEwVedU%2F7v4gWoWd9rTMjTcstYSK0hX%2B7%2BFiqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMr%2FJaeRUvKO6II5MlKtwDcBpYbhYdjnlTf%2BrTYZHbB0xPbZASYJaA%2FAMWL%2FgkkEM21Bk%2BjtowsGGN%2FSh0tTeFZqHWV5dtySrg86643lUT%2FthD1ACvIPpTAFbXiDZu9J8WjhTgbKNKLzRPqIxGAKPjilX2O31t%2F9W642nzF8OPZnyDb7pPbFcR2nEH5fr%2FWOmOa7RpvhSNGurD9g986M7WLzjD2DeJQQu8JEm5f8SHYzAbfZHbp%2Fp8PRDMyntOQoWGuDsH25%2FJMXNrJZQpndFFalaeyDm4ss0Vu7MWHJ9zLlqSJpfBrGxDZls4T0LBmNb94fLJ0e2XYlwpJkJSNy0dW%2B7pzjWfNJCyaFfqjj5O9E8EKjGohDumflLVoZM4UkfdpZBKg2HQS28v3YIPxnDn36JKV%2BydZS5eALo21fHIKxg8laQ9setl2Vh6BhaNaE2zcaf%2FoQhQD7YscBPzRPmVY8SzmFxi1KeEhLDdE1fOE9dE95NFPFpicxwqhIKID7PPA1dcIMkUF2NkRCVVhQIEAWBBppkPGP8K48B2wjV2qkNy5MsUFm2g4BaxDx1o%2FOb%2BDuVBH5kTiXXZzV9FcBGW30mWgNaXV0%2F5pcarnP92ebE5ysVKob8y%2FYRXt6bI6Ic7JK2tCFt1UQ%2F0o6cwip%2BovQY6pgEokChISiPVIVr2ujpcVtELIAOhdBKFb9bhr0jZEhvv3b6m5eaHDHmAwgO5MJQbx6vVbtuiIrUDomzISogxXAnImyLnxtjxQRgtNQEDgKkvv%2Bbn9jDCZR%2FXi7rk5HZLfa5NZ7f7JkPzQg23lbisQJWU4qvaDF%2F7tuVRkb0ku3k05JTRWIwxv7bRHEp56UFOvXOoeCfI%2BW90%2BxetE1kYoFr0015nIGfU&X-Amz-Signature=c7776353b9207769afe27668b9dd88e45cf1c21bfce769d661005534e1eaf0a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
