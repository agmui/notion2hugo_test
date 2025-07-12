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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=2019c23ccbfd170f190804151ee04eb2a22ab63a4096afa64d22566bf2acd997&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=59288d5aee4ca28bb1661b3e6a55f9f8f7c93a7ad0b53d88ad39779334279f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=d50e21cfe7408621b8143e3dec2301a550f52d55b6167a42293bbfab33c8a049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=dfd61f54e515a40644ba20844241648f71164efde02f6adabec16689ae63b797&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=f29b642f902a1489888af4d4083c1c9a5d628d0845d2e3124293383acc285432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=bebfd6324efeb4b4472deabe0b6f63a3b230cbbc156f809d8643a607984531f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=ceff244bd7e8e6dd920682930d992b7eb32a52dc714665086a6ace3ab3e931b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCDQ4OMO%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T051031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrHqlnQiiOx5Sx5D%2B3OVFmPlX%2BhKeyzzW4EvcclOazqgIgYTtaOQ0YA1xAMN6gRGhhzrhfJz0JnGUObEUxEOHXwSsqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKsQysxVwKF%2BWiUzGyrcA6V56%2B8LDCZRHg9vjwzh9NyAH9lL3GJY1zQjSgEx7jZ6R9CzczTYZFmAnhi4aQkO%2FsYlq524Y%2F%2BU5gYNfhgCGxDr9Cr%2FRnqxnmi%2Fr5pyPRPV3AhlrGytcymOzAl6jqgAjXJy20kI6GZoIjizKrKkfnQCMDdKc%2B1UteiUHGPmVxJx7cT3bZtZvzsRc5pl6nFTqx13Pblr3ux2K7nNmFjN2MXOWxDYWZ20m0AbF8lKaEKjfJWgsHxHJM4byV1xhxKAt3Xr3zxxLZKw5J4Y44MHFpZjx90vEToxMIbNYHp%2FXJQ0jrSkoNI9hl6oyy0AJMLMv6dwf1CY6UJYFKloVt3QV789EQuCyUBy%2BipB9Yf4HGs%2Bre0e6xAL6MDjo6iCwC%2BPnZNeDKel0sKQalWW6uCOH0MuXgGUpnuX1v3VxzKYWnQsf9mkWbSymQrPmzigdAXFANER%2F%2BwdIj61GCptVHMx5Xhse1GBwO9v0N3y5dFf9FuTnu1C0PtADuYEUvmVCx1E3RYuhMNIaaq%2FOTHXZitnETx%2FZkxHvah8AACh7M6FKV7VNaQgCYtXh%2B2zusrblA1FqnwrLVkoRsx%2FsbfPkkiyxjofsqxH4m5VPfdOsiXubhd1MfqJ6BCnwg2rzrARMLfPx8MGOqUBhpU9PcWYwRvMYdoOJs9R1oG%2B%2B%2FRxFc%2BONKjy51a4kJwu8k%2Fti%2Fn%2BfouGCrnw0JkctxAhfWFRH2IJ3B6%2FFINupdCELaU2xdiQOGu0b2UvsvnDUE4cZjSXpLemaCJwPR7mHD5M3DDwPj2ewqpYYHxjM26js%2FDMwaHF%2BMYMs6%2Bs4%2BrgJst7Js8XB15LjVFT3kFl2BD1FfFCYodBKZanbyIH6w%2BAbiEQ&X-Amz-Signature=e0eb3d1d81f6a2d8e517dbc73166f3adf7bc34d5c1133cd977a247457b88550b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
