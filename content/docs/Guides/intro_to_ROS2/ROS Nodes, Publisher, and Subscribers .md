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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=75c808c00949efd9166bb9d59d683f31de0f67a4efe6fec123d872505598deb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=21ad12af27963872d6ace06e6211c2729d0eece94089f6e0c388c88e23f89aea&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=e655075af9b84c130f7079f2735be806fed30571df20eec8b672ab36a26f19ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=3f3a7985d24c819562d591b74b674ce3c46fff5d8b5676378f985a20a50dee3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=453b6fb100c8fd77946a7cc79be12c3f1a8f1aed1243a0f83297418158c7c97e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=c8251a9d1c152ad579609213df08ed0e10506025055922fc30d6f2a0bdb4dc72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=94c9307420f15dbb9255bef59329bdecbf74fb0284876e6e363f09edceec4915&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEFL6YJS%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T121328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGfyvHmjCBpaB0yguAfZMZeKNsOXQ8H6zsurXwgw%2By9AIgCbcUii2eq2IOKv5EWA3bgTH9A2wy28Yk8sVVhvoWHFkqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCMHkurgSkzjEOnEdSrcAydHMSdalOxzYmafKS8YpdSkFydnodxhLoIgjjIyiPg4mTFZfJf09lJOum2WiqelEt8JJdBSwQoxafqAudup1BE7cqemtv81QeThqPTj27bGctbA80owtnD2HG4KAbFxWVX%2BsgCUU9gbnsejv2Kn5nWQm73LI1fm90FOhmfSdnaHHDBEL9aR2EK4hu8G1kuh9bzWQAKK01ivXAVog0hdV0p07m6xvKxmB1QJCM7e4pDeE0diygf8qlQH2FVNCWJro2VriHFe2ZPVb6Ga6nBsABxzWdnsUp6%2BDf%2B%2BPLUkczrS%2BknFF4OsGNbF7ZyDYeBWoypaqiLgyzxnNKjQ6TKPTrK60St0mCaW0df0nkz7SIouAcho1t3Y8CrNYLr6mM2c6u%2F1EIm6Qqi4MU212gW0mr%2BzYEaOleFRO%2F%2BcH6c1KqpOG9rH8arQNuD6dPJhgHHrSw97J0PY5elRJy1zHnLn%2FT8%2Fs54dYaviDDRdIY51oFnxvDXFTWPqN7xw1KVKlVr53Fcb59VNuoLNDWyLnAU6ZINnSx41FVP9HLafUAYRP3fhfItdr4J2VW1I6RKtKWHS8IwjI8JsQk3XI%2FQVC5IiEP14CYOqa%2FShlYtXrUTkZoWh0y5tBrAdVi0RfpLQMLGw6LwGOqUBZ%2B7v4vAEqdYBRXyd1j%2FEndx1keC6gk2XuMoNyhntchdPkECU9SbU2bpSxlQmMPWHMbjo1ZDI3WxKkzXUW%2BgWVrM9VfPH3f8R6UVKxkeTjcpiM4PynTKvBNsGAi03%2Fi315FNRxlx5xEostXpfl%2Bd5Ahrk8lFjxS2vpQMkKBvS8kCIU7Hc5lbtqAOJTwwAwMGKMbjhHhlAs31wIUlg4jGbaIJS1HTf&X-Amz-Signature=0866c0d626be81c01debc2d843ef59cb6680aae1023400702cca11003e8f5762&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
