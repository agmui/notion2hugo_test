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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=f9c80ab286f063b63e86c2b55930f44f7db2176b5131800138d85e848f71ee0c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=efe9a43a3d6d4bd7187d09fc0d9580bfbd7943adaeef6d48824d719cee43fe4a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=d383383e99df6803439ac1ff7b675b24a199627abec285a2205e6ff7f11fa2c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=15314c4c81c206e998b718f041b47872063affec820e6635823c2d80c671c42c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=400d08acee787c7f01a0a194db4cc5903d4771a20dd752d5cae248b00d7cf6f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=c42225a8d1a0fe5bedf27fcedcf5496fc3fee4107e0f0f28f6fcbeb16e11d3c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=8f7f89c9b8e2ffd25837557bdded31bf75bb9e285af09549a1b9a25725f14ba9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GWD36XB%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T003806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCoSvAmoQoy6J50dEefQI9Bzlcq5X%2B92bQYjeI7tZKWyAIhAKsbb%2FPNDEofrTMbSzZYl8CBEK8P8ELLsXYAqGlBqfyTKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6jQ%2FUmw1mrZxtetAq3ANVGQyUK6mBU0LIiYFPpinO1rRBpziUVqrAOZMUXR%2BDwwK4Fplstv9ysIUR8sk%2BODLLo8tMgrPs%2B1rcjNd%2Fh%2FNTZ1zvdqkM6T5eeYTn0tJyzylhT527PLJvpIgkDlMZh23LAJIukJUp%2B07PBQNTC9Cu0LMhzpW422XXHehxdOo9BWSFIAf25MdZixW5OjO43wpw3d8vUt%2BMPW29d1oUh4i8A1mK8RP3M5Dl%2BOyXd7ywQeyR9TuZjX7ZfAfi8xS%2F7eMS1kQYc88bfLNy9HOL%2BapjtXSC4cQwSg20mE9kdm0jjF0uP1HM%2FPMXUjGk%2Bz%2BxiKkIHacYCkqNtcevpK35hV2fs7KyIGL5im%2FaV97NFuQ1iNtzGDSjFfxKKZmRCUPN%2F26h%2FDKBG9kJadL8NN7BRBK8xMNhkToybSYYxq4iQIPhysqByJrRpWbuNQuyxCtBOLnNUaL5FVRCExiGaMreaX5pM7JBVHhAajvplyfC5n4o7rHA3UXC3y3ybGtcguIJaa6jaqVvLDXPUY8dLCHTStlcVMZoxV2Cr%2FO3kCMX%2BCh6ZBrC9ORuuuQ3djRiikwJ3gNSRzYr%2BZFHWBjkBtUbtzZRA7relWVmMBeOYPM%2FUAztiwaotbmBE%2BJNHAkB0jDu7b2%2BBjqkAXI433odw88CxsLoPpxxgg8GL0Sqri1UCFWCOB4jksX8i87mVmGBFtzumb7%2Fu984eQLqwy9%2BqQHd8LKjacVVsLGEQCi05Xcifw904MIiIO%2BX%2FUC895IUPUg%2B3z1jJRmiHGTveQtMq2nnY146L%2FdjhTFjJfOT5NyUVqBVdONBof%2BzWyEwBkYyFsAN38vuc9ge2Yx%2F5kl5BcmBdv5Y%2BUs3oe%2FFmfqO&X-Amz-Signature=fba14446faf72db5ed08ff7e77a3305f4e6fc05987df3c186017edd7f0726236&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
