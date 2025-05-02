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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=41551967bd05718db5eeb9ce2477523e580a08b8f45b3d054834e4d90fa2a258&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=2728819236fa486b0aff347407e26109607bda4bbafb10c082af5c9371d1f585&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=d88da75ecda316e3e48115686f618f3a58a400966d81e7be396b6306a6da2277&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=91cc9e33cc2922925217149b5ab3a307c74b2fb923d86e8ada3220b74e4cc3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=159d38f8da7397adc41b4edd3ff0ad55de8579b8f96cc65653882c6a6dda06d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=8d05a0e990f5d0f013d54a94c3e4aa9a73d5107a99b89b06e570f8f39a85aad6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=b182cf4f3fbc00c677d3ebc6262c94756751df6dd2446a6e7031d90a960597d6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3G4GPX%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCpxH%2F58qHp%2BWWlg0QQdxTmQe0dA3jF7po4JaDdZhW25QIgR2EisrXUyY%2BLtNtWoNDOFIqXOoRssDAsH3kBRNy5fkQqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMmn1I5KRnjNqqshYCrcA2XMYejs2jkVg%2BBWxFFVndqiB1neVd3Av7jHaQ3HesnldZmh%2BIufjjlID1Ttxrsf6vd7C%2BQiSuBDRxItYcVPA4MuojZz%2FDoj81zXxvmWHN1eIKQza1XamuKZ11lL8eM3fYpJtvCCMyS5Ms8bNFW3lm3Q3DTfc6m87iGT1DfziYZ6QbcrXFcuMA%2FkOXxmO4%2BrWoe0XNnI7nSB%2BI5lX4%2BJLCIsAhAP6sH7YR%2FspBlHENdA90cMvG3eeEDyFRMlZmBEinKJPVNCyo6JBwL7zYuwosYizWZUor4uuEqKqGksd%2BsEqUPqNddpaRUTeoJSvEInXYTA4digpI2clfypYpRwDar7wKP8v0%2Bj3xTjorkqa%2Bfc6WC47qldOQ8U%2FAGMYtE1VxQmYXyBmkNBVHcmOYlWNCCCM4s8vSOpQnsfb2FlDLGJ3tqW7BMTee2S%2FUdsur0Hi8yyJqIqWYPQPbuWJnMmHdZ2DgnQsgRLCS1gaHSJ9%2BJQOGgIbqCqYk5NaL4817nkA%2FAQLDUTdE%2BtCQ7yyKYzf0%2F%2FNItTaIBJad6BmcfoMhuJB02BFWCRCWPJJwYJSkkHfQwaHZdfIRcedd4au4%2BOVAGgDbdZYDuYaWC3o5ZJXwVONv7TBbtt4gwXWJ%2BxMPDk08AGOqUBHHceO75pFfYJYtMVEf91smDwyT6dMZPks%2Fa8ZL327rhxzKjAYPDLIoyf6Ihqj5xJ0TBmfH2FdAc5MFrts040qJxcCo8iuBi%2Bb41JhZRWSrzu8vEOlMYZRmGMQ0ltBuCf82fNC5lOCjWziLmcYb4Uu5r00xRf8IFp8XY2oiTt1aWrqLdbdce2RQLZyUgCKECZt9KGES1FCeIKOvvrjgYeXQDdR8BS&X-Amz-Signature=54a8b0df29d88638849ad834d1114b2ff2201056bc5dedabe33878a95f8cffb3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
