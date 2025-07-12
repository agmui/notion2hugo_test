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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=70470d697471de3b36210ca73164220e5ea9522fdddc8b310de024f2222d165f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=b0e3625faada25c78d6f3c42e4eb7908dc77dc02e56cbc0579813c43b69721f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=72207a12129649fe7cf7a5d28d43d3f82da85b6dbbf5b281ea633706cb62cc93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=ae43cf9f3820bae56b5d4fcb81af65d953b8ca5e8183cf76bca73423f4c8d799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=b65c77c3500acc4ccf80553df54a2201d2edde72a77a3214d4aa6e69ad4c97b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=a81cc75bb4db49c5f252d9601d88892153519f5a8aa38ead0ab4d4de5b8f7d28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=d5a089adf27ec5f7cca833dfeddfc25f5cc4b628d7c29495e34ec9e6af837206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3I4HRJ6%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T140752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTe0pttPZsHooIodvZVNFXELvdzfDu%2FdP6f%2FluhrG4cAIgW8AYvUBnpts1pMz4L1tCKMO3t8QGvnxj%2FYioDKA1CsIqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2si1I2DD8wdfrtlircAwvA8gDFTvtzzzWPCbcOFxVLIkDlGx4idna%2BMl4Yoz7v7ysSDHcqngP1h0AcGQqdiq893zWCDcHUPcoL7bvet3yaqZFAuffsKLK%2FlXKn8PEOd5ibQcVIfO8JOCr5tuiMomDRfxpvP%2Brgi69nApud9Ne3h%2FXfF72efQDfp3DR6XssdEwcT8C2XM2NyeQ2D8O3bEBQENkTvA6uPWz0QeH7OVHbr32iqxn7loDQDH9eY6%2BX4wU1YHjgjsdFMLOIljxXEsJWqbMNJSICU%2BovZm5icWKYHn95R7wjyRgucwInnASO4PBGs2aiwpUkfbgk72J8NoNjCPaTSY7GnVOj8%2BX%2FKbah6HwC6e2exevlXnhRg%2FEySRbUuBH8oVJthyxM1pOHWT12FiKA%2FB503wJ0HDdIOhESTXM3DmGLcO5HJeGng4T1DS33zoNlxgRy2PwteL7ZpAqR62IlLHfpg9%2FUI9ad%2Bb8%2BL%2Br3P8vaOpFKY32xGsUqzYrny%2F33wSWG1lay9aZIpMFiAUsC5uII60EXeZ31nY9kiSz%2FAaXAsZHa%2FewwIoycqrMRJ%2FKBrY2c0qSdAV%2BP0nRmNW3WN1re6sIYDh2VQEDd2LfZ0YWY4Z437PJvpNbn0jERdl3xelcnAiR6MJD9yMMGOqUBpym7qbzyPMvhq158ry2CiSgALuM5XJRZOHKDni3N%2FGcK80iVo8w0q1HwyjiHo0wf0bLToNphJTWKatQpvbfYxufzMQrjMFsvciZmOk%2FggsRIzkKeh2fsd4ZBLNSZbXo%2Be0gs5VzEp7F6yFNcbbLNufBmJqs85c1kzrVjLVxb5F0ScqU2esxjGmCZL0zg9KpExcvgLryEd%2F7AWM6Cn1dhuPESFPqt&X-Amz-Signature=18b8856631acaf75df0faf80f1388d75cca1c25fdde7f75c293307a7f7ab6b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
