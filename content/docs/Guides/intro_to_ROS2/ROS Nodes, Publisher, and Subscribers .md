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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=5caefa4e2fd3da0817aff4d84e48cc4c5217a210992bd6c51a05d3c38ada0eec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=90cf6abd2b02cd4c266ebde2001f1fcdc91ac5dc1a5cdcdfecb7e79069ee2a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=76f543833ab1da22426155769eda618bfe537217fc9233f2f4052ec0beba33f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=afe69a11ad07658343a68c01bd4b4fa0995a987f5eb7805bcdcbdda23a92ae35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=fc266d47ad83c079ee126369d6399d5d9515869f67eaf7f1c377df148dad5206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=0a2095aa60ae277b7dc9badcff226669b54ecf942395a116580b6972160305e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=a3e5fd4664b6a39fbb9e8ab622a852e556975ba95568b01b4b4e433e50d2df8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665R34CILO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEo1PF2dQ0V%2F43lr0%2BqaB01bZIJetBwDoTPEXqA5GQLiAiAi1Pzfqf1I3vhkfrpTSqRUJ7feOrThRp9jqkEuDzrXKSqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDo%2B%2F5EZ%2Fvh2I%2FbHuKtwDZ6AzI%2FApEGyjZ3kdKPSBii%2F5%2FA%2FNzL3pE3Wjjp7sGTICWeoHcDwPtqB%2FEE906yilq%2F12b8rDd3FlvZJLcI3PNXBpIguRx2jREBjX74Ey5YJAyHQtPJQnAgWxHJcK4F32DgLtO2n6xBGqPw44Nm7zQ6q26kPDOjHCjXeaPUO7Ra076HQOGnXbLECwVMGqvL9FHnbffiwczRk5UG7xdAsoI3mKzi0tyq9QqHUQBvzWYyHpFjfUQYKXrbwXgIRKYEnfnWApNfoxzVfS9v1ICtKISdTqm%2BcePth%2B4VJ5dIfCAo1r9pDAoX%2F4g0rx73XXYMkV%2FnTHJzOH9cQ5roLGZOuGerSNu9Du5p1nUrDY5BFV%2BlhIixQR7%2BalPJiyIoPvYpveatQL%2BYzw8LsS6QGDhsXG3e3OEUbkGq9IqsS0SQXceapNqc2YnMgZGSgr6Okn2psLd70bJDAUVhZXYEUaC5jz45F3oO5eu5hMGFzV16Nx2z10JcM66fZAdACBfV9L10BDp2XtQRO1r1nzTtlTiu7h6qwk2GalSiXYDkenxhnhW1tc1yJRSo6gLRHR5Z%2B0tnUW%2Fi5mBDs7E6W6DIF%2FjpG5zJnVkXgh4ZPL%2Fr%2BsO0AGHfbMOhF6G88Kp0BkRbsw86TewgY6pgHumzksqx%2F4jESGtZXpmOIbpb%2B5lcCtZBlGbLdExBOt24rj6mWemuDsP7LUuOmQXSisDYr4rArkBHgCbng61hx2lXRcz0JXfjLEWCNmCp2AktC%2BbxIZlzmCg%2B1aaAsSj%2FSI4l%2FPOnxNpJ%2FB%2B6vcdCMHB%2BOZTYgLQmnDPdSzmbkfX4w9RhUk7YH4HeHodxFf6U7eEabAH4L3190BoLgsov5WwaPSzSDK&X-Amz-Signature=b95b08085313bfa32288028743043537a6f5874b3c48e02fbee581698c55ab5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
