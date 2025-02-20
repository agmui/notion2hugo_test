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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=008046806e5abeea0f77dadc1a35d63a1aff54d10cf0806003a19369fa3d4b86&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=8b2bf5ac1d93ea00280b6289d3df807d21dfcac27009f026afd6af0c11088d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=f28c84f480fc2ff05aa3adeaf306bbf2ef08f774711cb619ef6b2614c1d75c61&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=5d532dca26b8ad6fb9dcff7e8937e4466a37d06087bcf69b2f0da0e875effa2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=ee014621a0342d6aa2b9ec39589943dac02f4d6fd3eea3ecfe0b94d6d5eb92b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=03933795ad7b5d256368567c7404a8901609c825b53b7c50c0d8b40586a8e3c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=bcfca673b57d7d2a018d1d8818c1e21f6aed58d3dbe5ce322e15f106e36452c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664N2TDEUI%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD598giC6mlv2TClbCvbP629crSfUIBP%2BnrVbE8ROW%2BiwIgUW%2BBPymYabzpkRD3PU8FTXq9xAxZzNg7jVbGkC5TlW0qiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRhbT1SgDwDl%2FP8SrcA%2BFN81Ly4ooKyQRYKD0R9rHWtey%2FlmVVFIIwgsavA2yEmfWDrgX%2Bw7raejGMwTQaHRXUAXdegu351soOlBEt%2BCj39167YdcRlYCC64Xh4%2FHVtwCmxMznpykxXPLzr6P2bZ%2B9EKjyXq2WS8tWhWoTg3neb3u76NU7TR6LEoQAHdw%2BLVUVyJbOry%2FY2PNlN9WvxjZhMWknyDH7Gti6nL8tRCAs%2BZtW6IaHzshHAf0%2FFFre7lziR5lVMRK4gSOQHvT07X4FAW9THkVNKjj2gII5GOf7%2FQhBgo5QapULbZlcFrCakwaJv1Jhb%2BVrMOU5RP63%2Bu7YEoz64TcWXIIO2r5eW6URvwPlr5K%2FvocMEZbXPuFM0k%2FRJmjd7kNwhIsADDGHz%2Fn6VeQZgsBMeJDOVJ4T5g%2BDEv%2F3seVZkvfsk38yqghhhXyPkHQjQ3qhqLuacOtyzDcI2YDd7%2BedwEq6MbrDMthonCo%2FcSY2BE5qjG2rFUcHONVVjhcyS3s2xT1nK6ChLsTqvwB3rwP03Esd%2FqkeqVsYDErecYDRq4GcAr9cICoetsBdyPCo6iUNpJBhqo83UY5w0YlXNU0hhbqlXOKw8JHE4GYgG9irn%2FYgHFa%2F3xx5pNoH5VD8AqXa9mlGMKCO3r0GOqUBxZs9VatXWagqdtM7NPZZheB6%2B9dii%2Bt%2Bt36sQJhNNQn5rpT50N4pHtsABwxpMs6pdXsAJxHjE2HS3ZdRNR61goXKB25A%2F0QS5njnO1%2F7L%2Bia8PHsxscgBZ8HWLWWPjy9UQGQjKZk0RsAYrKIlFsdJk4fWxi90rMvKW0hSc%2FH6Y%2BK2IQERBR8FXMxiq4q131szawswy5ZAL84BArGAK%2BHjQ4stf%2Bf&X-Amz-Signature=a232ff423daa0bb6c132a42dee4bc4b9a5e3e88105dd1c1e34d1d75cea640000&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
