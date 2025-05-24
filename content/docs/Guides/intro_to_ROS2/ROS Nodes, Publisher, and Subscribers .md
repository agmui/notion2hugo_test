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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=2eb16ba50a539a28c95880e4eafb8ad207e82bacdea4f802a68ad46920fdac16&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=cdeb7b4762d94191013bd6425d1d938265d0cfe66aeb22eadca779d85cb7bc4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=bb36e62c2e94dec91ce346eca646c9ba89cbf03186cd1d5a7d2b3911d51941bf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=a5f279795bf1013c12759b185592baac210dc6e175a02a0a283b7980217b66c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=871f3cc723399f55a29ca1f40bacbd16fd73c75d1fdf43c4bf06e0812945c843&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=63bfdcf25cfa4cc68df647b5749af581d4444dd1e99f49c352b43b8381247539&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=901165a8f530c013f9bdbf7b3fee88aa9e1876681c9134695effb8eb2058e57c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMLURMJB%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T070748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIBqnYPaSQLrcncV83kplelAUjvgMYmXP8T%2FJt0YY4Lw8AiEAhFrRcfvEl6xr6N7aWFmH2Dg5lLrCcFw2LAf%2FCJYB2uMq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKWxVAWupgz8zqX9bircA36Uwd8vYTI12UHQPCRgiulYCTD9pYJj624VfoqPb35md8Qu8G7dSCRY0WX6GND7FDdpwePT0gQKwymPne94w3GG%2FVSjN2fsY8nCP6mdw6RI%2BR0L1qxVBLdkoWdygT0BvB5Ak4JUD7KE2WJtJ8PADBJlz%2B1Dt0Xj4R8SyuH3%2Fo0mPRba1spmnsdKiIYeMDaIZy2MMR6dY6XKgMHcLwIAXcB%2BrLGJho7DQoUeSUxkRGqegFkQtn1IJLnkNulXTNMog%2BrTg15OYddu%2FxodSK%2BWSQf31YUWwfFPlJI6dwydcu3BGVSS76%2F009Ox3jXkgdF9Wj0DXdzMJ89%2F6ov0rI2HG5YkR%2F8pwsNIL0FMubLzTndyeo%2F8RlD6m3U4QEGIx4maX9KX0JbUNjiLzklMc1DbcWYgMXYLrgtsv8BUFDfEotBW%2Fw46IsVwRa3a7EYlGRCZlQ0AT0yuNEnBdS7K1Q8num%2BZRyrcqTTe66h2KjQwwkLgnkmMHZO0iux7R4fLpiknbTCNzeoLHdcdRaum91FAO0reFSk1if0cb5JWAZ87%2Fo%2BnQIKyob8ae%2B0lp6uq3fANgzqoa4Ma0Xydk6%2BQywwtKrvt0RsGTcc1gcQIy%2FgnfDnmJcIhhps%2BmUhRLj%2FfMMvfxcEGOqUBS9i0jFAdb%2B0cHgd8%2BDCDcPWkAjB%2Bv0s1QdOUz1oLfQZky8TmTOnvwsdZJEePUBagYwkZRa%2BIXsl7k5vCCNwAcjDK%2BaBUnGYFXLeLEzjLC39LvRMinKq0el72%2BTrLXDVTde5xsPowhzqRgDucTGf1VybQqNmycejcaC4WyuTZ5Jj2hVuDYPcH8sb%2BbN69uRjTkZr3652EpI%2BdBNAS8v4ETeTqTnfl&X-Amz-Signature=ae75ef9d2a00bf2c74bd5a1bcc27c3dffb497a7ae8e18205ca017563a163ec85&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
