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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=228c4dd907c6da6265158fa4f1e2e1316b8e8ae652e1d7aff1b9d681154d1c0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=ee71596da34217449a882251e546ba486b662d0b81375988c94745d7d17d6d35&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=fdbf6ccc55c48342c2c12cd8aedcfa534478da826cfb7154824a00c0c04252c9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=c720347a37e96a73eb32c7fcf3cac123b3d97b0626d181cdce2b309e96738fa1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=f82190bd3a3794c7909bd8fb1e8ffef99ba2494abdebe29bf6fcc0b88a18d1ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=3669f01ec9583e5fc1be73b67ef661017a726f3f83e610a0af117595ca0c7646&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=7c8b8e61e0862aa316c974d06bd7f3e5f7eed2e75ba0f6303090b2744d07e3c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAA7EWRI%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T004211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFtR51C1qxpnTZYd1u7sWwYCEEwPgCYhwcSBDj6uEC1yAiEA27aD0FhQ10a0xvcZCSAxHTiuAK0ErfCbFSCx3QHqF%2BYqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGju5l1tf4UWm1lqOircAxxPFvn5JwAy6VTrMZnkg6zJqHtACht7bwIAnjuAWEh8YIk%2BGTistlbh%2F%2FuJ8uAjZmvNathGMn8MHp2uxhpYtz1hGAGujIxVWtKn7LlQiirwd0nzBZJz%2B1otZRrZrFNOpGLHdy2%2BGhZ%2BgvmXpmKU7jIRbGrI70NISETZwr8iPwEoyR%2FZ4qIF1U9Sg6IJ9MbE1x6Xf8cFEGtKdb9%2B%2Bvfdj4gVQ8EHXmYpwgpxaG0TRlVfi0dDcnR868dsuS6IIF%2F96mv7bAQLaBxIEjbuxL0363UeIqg1ncyNV%2F%2Bv7g7AnaROYXJS6oqP4TpIUc7HZsdkE25lQ9Kd23G3dU4DFJJFruQSHWDCPpjxlKBPCbghmoTzWVOR%2BVzf%2FKIdgmEXUB7%2FWdcIQoH80oJVKr5QQJj%2BC0wJXoj%2FJUwq1L0oDthYpYg40557p965LOvWIEUEI8f0FI6Cu%2BOL5Xo2oDHFzy8KcyqJfIkbb8fQ89loxDLh6ZJGsesq04iGzXAWZrM0qQBCTrt2kC86UUc6j8vz3Ahb3sepfNaerSLGuh0CqB6l06ch2mO6oMDOw20cBRuMB3zmYZQtRPSYJQRORo4geNwjDJTlSmZlqyhbHCfYx%2BzY8j10hps%2F8T3Ek5EHJTRxMMze48EGOqUBZU2zKAinPNkmM9C4xU5cGaKoBIsgasUoXoDC4URma%2Fd83okHfPRfiLsdKzRxMEaoGTRQCk8hbNxODFrjquYatQdZbr6U7CejbCdNE9m4JPjuTN6rp8sTrzYLLhK%2FIiZLBKQbs6aWS8iFqgc%2FdmLXZoZiFVzcGB6UXrlw5e3C6tpooc%2FDs%2FD9XCkLMzHe8JZy5hk4Ie2bS90s72eP9%2Fkw2O8S3vuP&X-Amz-Signature=889dd6179912718e573ba8cc22caef3ac4a805624b2b345c801d3c9394b44a79&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
