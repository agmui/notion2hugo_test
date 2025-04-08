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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=92c7fe0f4b2b1e81ef1efde6b9491c3b3d2f330a564bbf7739d23a974f6d2c33&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=4c03f385350f584f1c2c557e3e15d60bdad1f207adea8acdb8729a0c634ce04c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=fa2aa620cf502585d9bd4696428df6822b9a0e921e4d5294156db778e1b4ecf5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=e4097b5bd0e1d2981a344170d6d8545f004f1486361ddbd47b93d8ce96cde522&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=573bf52faf66530401397796cbee44fc2fe9a4a95117813bc3e4e8314412087a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=f3232ddbae689d4fcb6ef199b1b8e9720499af8720c910631b1357c79f58d908&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=7b3dde35440edb75cf23e3c3495a1c878923164d1e73e63aca96a7c953435ba2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVVEGXRF%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T190729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIFjNM7hbTW4cg49t3RSYmO801XKOEgVlgvE24zeiISchAiEA7%2BpNdF5OkrxeE9rWEl3OO7N%2Bisigv4Q20e8E7bJArNgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDBAagoc8ESAuy6mSCrcA2kmLx5VP59LUF0rxc8HGt4qo45xdGBDXbSMDiM7ZLJ0GKL5AO1XcDzSW%2FSoyjkKC%2FQKYYzvqnqKJxod2%2BqfCwshBoWxYV9U%2BqFmMr%2By3M0feS17proslqJvTkOSPm0469YzWvfUgjAT35Ys%2BxZQgY6ycGluNzilSklxNQUEhn3LhA2wTMSSpqdejvVghYxqnqTGsGpfMj9V5irtRi9n2TjHna6cruKAABWCjjDlq408v8J%2Bz9ar90EuPFPRNUkPzW9leHglogrAQcHQ6lKgydeYCp%2BcUMhq5xSiYE9fhqHDmGTQT%2F1Rmxy2rkxIUBg0vu6RNoWzpuNRur8PEVl9%2BAirKEW1QqHDZbzId3AKP5Z1sQVXwp7kVZ3DP4zbazxXq6%2FbQmxc4%2FXOLTohgZSLQ8C153c5LYZcqTK%2F6itNH7oUh1ms0xTWKql89PzZvjMAvvTXOd2ZSqXrsPqRqG22TXAkmCWSc%2FYeNN1uk0IbYw84M98NJgdA4%2BXiVxlzusN0GaBpphukXVPnxiWCzD4rvYm7za%2FAv5eKBkSkaoMlGdQEohyzbsf2h1fCJnOwUf9nYh055B%2F7DLdKYpcXKfiWWN74%2Fg5ExwNCp8lV15atFMtvTUVKm7PPFysZdRf7MNDV1b8GOqUB8YvSVn7JNbi%2BIf%2BIcLJvPkEB6v%2B7Vb0ZnQXPUeYEfypyPO%2FKgMuCjFVFqrowgFt8Fv68m0KD0CKAqDU4Pxf07BTDnuM2quTDtQSBJQx%2FPT2TWa40cwSya%2Fh%2F7XM2dBVFOU1UqGR%2BwnG7N36Z3y%2BqTJ2L8SISys1fPXLsarRimX9Wbq8oJS6xPZgLjTmtfG9t2O1FpOjjmV01UnEdaC1mETabfy9a&X-Amz-Signature=865e42df59995ffa75e6411fe0970e93c841d792937cb359dc47992f1986486c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
