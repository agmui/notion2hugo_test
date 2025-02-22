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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=3aac8f9332e8a006b82443ab40d7a44f78cf7836d05a1e36d8e29eade55ef578&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=c214e22ec558fe669709961ece027705b8e74bf9aa0c93ddce6b67b7d01c4bf5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=c800bbcde9a854fa9c2d471279dc94ff6049ea8ae9e3b117e83335c3111c4478&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=7ea205d5ef1d211613c8c76201a393319e1dc7e09ed0a58fa76d7622f507a512&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=5df25216cdadd409e3d4840f381275f7a018447de32767a6e96e8a0adba546b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=093f7c3ac2a6cec36ccac50f3f3da58850000a2d2bacce9a23868d7d55bf7664&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=028f15419aa92f6a74b9a53d1bfb8c4e99adbcd785e3a6182889af1379314793&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGZLX2NF%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T220236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDutl8hwmOKTKemsIF%2FrbL%2FzOR%2B94LZ74ns9RHbLU0ByQIhAMF9ezZ5k%2Bl%2FdsXxheZ%2F74Vrj8tGr9MKtwTyMzi5%2F1xyKogECPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyHsyChCpMoaZGrFdoq3AOXINmUBVpR2LFbAAM%2BHyX541m5J4w0S42YyBYRsCrJqbBP3iVECWYvsuxJKsArqG58rbrKjOXFcpkrY3Sdi6JZwePAScm3nivQTqoXxy%2F%2F1HoveRrcpA0mvJ6R5Lvkt%2B4IGATAcL31iOf2GS5t322XlOj71%2FlTBb6ZFNxwpGJnfQPxxhUVBSi0EZb03OyIwATlHlVzLr50t0xShMbJlOWmb2ypsDtR95F7Bim8mkJ3YvdynQ%2B67t6K5HcG52ICywaY%2Fu0TCngfQOwdM2Sk9s359zGe3jzKF4jUXQu8lPVUQtZlYzaLYcrmewPMxMv74MRRI9RV72UPZl49V1PPiGtK0ifbo7dteT%2BE2d8hbmXN6ItcM6XMVnAt81DVYJ49pyKb9yLXX%2F6Z2u98sqrng6QefdWX%2FsFLt7vGutqfMaYJHBkdtWHzeV5cIQh6dscCTZod2T1FrUMszkweSnujteTJSXuXo%2FrMJzDwlyPua5OrASvbh%2FtcEf9yT6RZV93cVILFokUUYg5MOJBGmx9pHLIogzJpmcMUx%2FZffrt1pwj5OJ1kOvvfBIrOJm3Watwjc1hXCTuX6jaxxw9ftbZyry9AWyGRz8ABrSlakzsLqRXc%2BIRZAW5WZcya8bBRvjC4hOi9BjqkAeAoZqGm7tO6lab7iww7jm5vdOZfNncxKLI12Gje0xQzeAFckmNO%2BB%2FTUcjNz3k2vyZu%2BRsgVmELmMGqZ1%2BqVPIxVCcQaYfjhl17ZFBJb7v2xTtHTMRCEW0s7wyKAmV3Us6SeavavsVIW9l7izcWiD%2Buh1cZn5i6kyJUmR5YVMnRMuj75q2bteF4zvgCszUolq2zKGw4kgfYCjhFsLIL3lI6qbLG&X-Amz-Signature=1d5104aa0b05e0bd20a5a0fee254b60fd70ce8754497d9ef521f025bee5e2178&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
