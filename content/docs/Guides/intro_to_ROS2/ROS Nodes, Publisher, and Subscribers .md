---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=e7691e0f3866d507b4570478eb3b661a43a09f3bbb5a9dd2def65d6fc6267f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=9aacf30aff7fb6173f1a111b17689c02b1adbf1f27a30338ded3f9abe4709fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=9b65fde56159980346156bea0f450caa77f2d59ba5ddd478ff96e11506353f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=6573a9403e7b1bf2c62ff48730aa98507da5063621adadaf39d7882196be8881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=3a6f12af1c763b437b56fa8567ee3ffd140254451659e0d02612f582c758c788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=fe1dad548d5d2416f6a7ca6050b692907b8d76550b1fc2e8fcb5e9cbff19d30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=94edfd3ca96980dfc615f6a69ae641ee746b32fb8b52351465c8187d4f230067&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HW3HUFB%2F20260822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260822T011238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2FnKpJFlEMUUvKHcEtuTgsaxWQla7SYlMBURl14HO4WAIhAIJn2HARPn8Dm9OGLEumNH328OeUbHrnm3YVUDMvwLlIKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRj8M9XwZnmbJpQdoq3AN%2BqQJzU0dwteHAVL8s5H1SxAPFsVoSN2KFKxbVbl%2FHKG7i1%2FDz7%2Fen2HDkf2wBP5l5F0iyoRsmL4WKHvOn8Xe1aaqxpV%2FxkAZjVsf%2F5OEdd%2BebHt6ml7s8P2ln7DvLuIdv40GEA%2Bb5FOz8yG4FVyOVjwX7asvLXPmc%2BdFPcxLl2d1p6MSDGFK1EHYobJfq5TTQLrCIm%2BwGRzyiSo61a22Os7Z%2F8tntA9WxLw2Ban8FDzgJj0IkLdQRWj6T0RMj97usc%2Fi%2BGIx7DyYBK8lH7uIpJU%2FsqB8A6%2BdosLCEpapWq2hktW3jOcH1UWvJKVtJjhE3vLRW9ZearUPNEnPkPc3PyLyL7JLGb%2B4uHQtoEBHclEJgAYbhxBbd6EoWaM7DefbWIuRdT%2BtaperWAhjjRujyv%2BG7csaQ8pmlZ0rlUAm7ZGWlXUPwrDct1PmDWkwgfTpwvr7LM5VwJ81HNvYVthwPmMTzTeUSprSN4Q437QYWabXieZD%2BZBDs99Sc4tQMJZlN9%2BcY3RCCFa5nHJ4kfF3cUOjBkUsRZGgjwb7Gd%2F5xlLfQI7PvAzAHiLb4FoiF0gaacSqVRVi6aYAGvySrV4lgfsVFDkR0wAZWgv3wZb73Vbf%2FmuF5Wdus2vx3RDC3wqPUBjqkAX8Vf8NjpGjXOXlfAybUhsaRd19KFnHdw04cRXE5lpiTnaApOgpohXpJd2PMwUjGnd8qJ1XZ%2FRsQXDPInb3EoH6tMVj%2B6wtmDQPrS5SBIPZkzvnJNar5Zf%2BAmk10c7%2F8FQE9thRuJZPqO53k8mujjhNi1qWfaAEMmh8yg9C0N2TGRuGAlxA988XxN8lqW%2FDej8rVN2lUGixw3fmS%2BsShZ6S457O6&X-Amz-Signature=c275d25561d333e0346c2e944e8c2fb6e3ac2ee881f7a1392a0659d75bf7e01a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
