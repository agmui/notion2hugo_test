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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=1c602efcb22a52da3a9aa00d7dc5c63994846b6384c456f3245dfcdba2dcef77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=c13f674051c0c22e7120fffd7e8bb20f82cce0e112bd3a860c2779360ea4b9a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=30e11bbb7cad19a01606db4818be6aa97db201ae918fa7a5cb09567f0f521cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=b429af6ed000c6597023c5595c8c96079e03ea408157a45b9fc2f8d6e6d0b9a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=8a73bbea00aa5725523e5b517b4aff7670f2bac2b077c8fc32927b0dd0292853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=b720063285afe3b9b1e60e6e6478e55701297386f9e28bb44317864f22fc5008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=534eb2a83f5aa90aef0b993b5105682377d448aa2a6448d62d7f9d795901bc73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S264Q52P%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T091209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDumap7BLm53gOA6hIv9LNv0Ch1FxqyDkPfu3Flx1Vd6gIgKbCry3AH1kX%2FBHuAXrukuozYLJosMBeVhsiSJOp4j3YqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOp1PNgFV21IlMXRPCrcA8MgE5yPpLx7M81AdAtMWOL%2BZmW8G0mRAfByMhhH8BT6AZhhyUK0aHnoZq5LSFCKSz0cRsiEm6lHkDIwWHHsGzvxfpsKlgAOkcGsCzpfSAsUUSk6bAq6hOVQ4hxfrrFDDOkGdEj3N6HeKqqm7NoUZX7fDn47m53mm6Sw2EQNBgI23D7RVipU2T2T9nLdxckny9j7azIqoYTYWP8OfGm%2BEg47Mplh1sVtS5DxEy7XJAe2GwbiFUBwdyK6lB%2BEE9pmviu%2FuPd2UXWAndLgvDdXECBndSf3Z6Y%2FS%2BW9dCofInFB96Jtgj8pe6tMLQa%2BbYYThXk618DtvYZTCFly2xJFh4d3g%2B3viYq84w51p8rOzZm9GSdZ5ygnFx3INHLZdrTw8PbmeG0S0nibXaq7iCn47%2FQhVfMafdkGuU1NWbcmhB7FTbEjjmuqzRaDmpoJs0VrK4sqms8oUbTw6uhZ45KjqY3Dh8a2KEZ5UIqujMCmiG8ygBNdPR1KFrBdoj%2F7%2Flov6c%2FuFVJkFDpHSPd1ua%2FePpmw6uUWRvJY6C2fy8Z%2BofF0yzYKYIB0Ef2OsPwjSqxco6BBQqjrpY9JUenSG%2FM7OQhc88uH%2FlgNMPG%2BUWlhw6RJSwXXxa3y6%2F2DekM9MI6HjsMGOqUBpdJzMxnfTt29Dnxakqt8CZWx0i13PgYMAuHoywSTnOczy7BWvl1U9yMmbFR%2Bnpqf%2FGMSkREQaqsD%2FxMAfEQJ6JeTRHhGZI6s4sYfBryxFPlvt97jX2%2B76ukOEaphIRYiXFjrjh154%2FcEKRL1A41i2tbKzIsPeghKChRjNiIJZrZWhYbVVobu2cfrGMr3VXBXVmyYjhOHS0Bx1o7Lj2%2F4FtihsD7M&X-Amz-Signature=dd104f97108c90593f61199dfd182667c409191688f404922457156916df5b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
