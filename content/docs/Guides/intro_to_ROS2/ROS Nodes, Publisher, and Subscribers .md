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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=432981005b3f03f044c63a3139bc131fd1a5be1718a8b4477fe1bad546ab77c2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=24d21f23eec59be48a18676f7ac7490510e9be2d1fd022368186375c016e8bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=ab4a6cb3c36701a2fcfb8661d6d0385719337a7cabc48091f95b5b6f563b2c81&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=2283bbab6d7c05c5bac5d15cde0b201c156c06ab27b8e5748f50b6bcb30fcb8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=358b46874581aa1155d6d288b55b45c2dafb46f8780018e5309ae2876b7dcae7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=119da6c276adee88db6c22b01b527426e0a42e30e3206e1974682897c191e1dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=a52edb9c714ef5a91cc8f90e2097f3f52a7dd35d55a69061b3f438608e2fbf3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWL6RN2P%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T031939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeRflvLZvIKVnXzuKzukG%2BIiZiH7mvcK4o2UM%2B7aB1dgIgRJ2oWxxCbgFKkVYT5NKJldqoTi7a4eixSFQ1Uixm6ckqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKae30Uolq1WE25acSrcA9FRZfJV1nPLWpTR3vxvROgCownCPaBaBuj53%2BjjZidi%2BARIaikQ2qDmDRvpA%2BG7H6%2BnkAg4qIwz6bw1%2BXwj0bQmXexeT%2BMi5Ccs6ULTcU45BhOxFxfyX8QOe8%2FXXV%2Bv8%2Bh%2BjG6LYCAkOsmd%2B6SEMqKlj4HjpbiI5bl3k6KiaXUHRSPPydT8%2Fr%2BpfuoP0umbhKnWkiNKG%2FOsd%2BZff8u8AVv4qpA5vdttCkkrikXS%2FJD%2FqrSLz7yhHYg3Uhm6H1F1ZPF%2B9gU7CqkNyk%2FgNQ8e3T%2BBFZ0zIWoJX2zyvDr%2B6789thhgj29GbB0ljJVqaAfprsriwAKYX3xtIosgBaQxzQQedZUe955Ccv2MAqEJrK%2FY%2B%2FblZsl3%2FGTSL3pKNFOMhrwpwwUjyzp1Rc4evsShP00K1b7bKCerXcvW5Lp2XT3%2Fi%2BYdX8zyO6NSPwf5xEwh0uTLyB4Oq%2BG4blikX4KWrvxWssI7AUVtSv687V0BBrK%2F%2FysScZArfQ20OGbhzUWilXX9FEOFYzZZBwy9Bc54LsiXH4ZB6KWpah0flhuJDvrkUnRSFSImgqJkCoBhMmpKLsZJGbAy4AhKIUyvmqrJYIE8l5WCL2RouEGpSFGoXc9e8ZxdxDy0EUT2SJFeMMT4mL4GOqUB798SjpiW2Mx4uMOYFVCt2EpMGk6AR2KNPEoO8tiDnqVZvOzM4PykfXGf2KpgM8jJpuXHD6Jz%2F7o01gT2iGSWJGWhON6aKavwu%2BhSztiPPfAUt4qn1fMq7aqceIxkdYnMaXbzjHAed83IrUdgdkC%2Bw2VrBzAJ2z8LmATIrsPXQCHUpx74ieMXu97Y4A%2BEsONzMVWuJxO82nIC5EiE4xPvN2OoARPg&X-Amz-Signature=4afc7c9179a44d69b7a1277181f5315859de1c4e6c3585fda1a60da20701102e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
