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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=f7fac5d2bc764bc8a56d72abc4e5e56ae10ccd8688dd46d93617c7276f07fe8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=5ddce8b1acbe851556d3bd7796cfa033d8772c4e0a4aa2f4d380205776c9cb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=66cd89ee303003ef30adcbb4c87c26949646af63a469b9845c76c109026313d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=30655b8b8ffa14f8454246d0912f76ec52daf8e6beb42716d0f16d8b11a0751f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=b62a61ce7c67f908fb17c2c78976daddbf9a4bd5e04815f930a0e5784f285f43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=9fc5eebba36cc7daa242e27dadbe41d9097224bcb220446dd54fc1b7eda1385e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=906a3cd28d2ad6422b36c16e09da81a575eb1a9a9b067fd98ca12cacad0d4006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNBXJYY%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T190119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGrRi27o%2BhCLoAcqK0kFiMh9yJVqF%2FvR73zqEHSCIiHrAiBwpcrIjeXAL3bjXM1mwaJlOMx83tXP2azVustKLrDnxiqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5rfJqYVkVr2iCNbKKtwDxrqm5UiU533pPrbTKyn9XPjiZtZ%2Bai%2BkkLqxc6BmqObh7htM4eVo2k9L4hVxIRXC%2BqEyLmdYw3lSijz%2B0vj6oVDkvSzvXHERnuKLTddRn30RCCZ6DJ5jyiri7gcyEcRaPAuO2KHGFHvGmhXMAHGmZk%2BV6JdEyovYUMoYDo2zD9JhpfHxaLyT4wKp3Ii%2FP%2ByL%2FuTfDotnz4jDexwLVRsur2bqKZEadUlAifFpJDcUOoPTay8KNdr2o7h8A7AhtwVuE3F%2Bf0mHZc62JQUsbpMSPdOax83fIg9UyFtnVY9WPewI5fxmr9SZYj%2Fwl6rytpAvBXwaTGifkYva%2BlThi0OSkq7DWoQqsVaMv%2BurqhToNQtroP0BBI9Ud7zzJEpqF7CDFQ8OzauYQjsfaQ0vQYKWvTf8blMPTZEYYYLtCVLEN%2BivAZS0qFiXx%2FuRNhLiC36jZMD3g2eywh%2FqqFPpOZcf0haAZFzCUGT3lUu0MktRRaw09omgzo5ocEVYCQ8ayZhWstFZA%2BzE4G05DSLdwllehvCrTrymWa%2BCSEgreVb%2F86T6j0C6aQbw4KUD0TcNd%2BGdlD03mCAwpMoNsv0JUj0aayaHqjcm5azmaf0hCFOYMb4CPmtO6OJXplcU65ww1qOLwwY6pgF%2FggTnCNiY2RmmqMe7BqlhgwouhnIUfyu6xDVGLNJCz0t1amHjT3BDnSZQfdQK8ZBN4ZH45ztA3x%2BNUXKN8rtlJrtWQE5ekb7MS%2F3SOT2N4HNG8r0GdVKgNOU%2FyHPrriNPMAqmFRYzQuFcRrZApKasHUXl%2B7KozLHo%2FQs5VbN2%2FfstY9fytUFTSI8btlm7VoiYBju6rW99b6DMFCE3ZirTBz1%2FA%2FSV&X-Amz-Signature=d9be417db62ed228304a6c8f3798dcb2308394fbdd3693b08697f5f1efc56687&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
