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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=5ac680d392f00cd1704a2304c03af8ecb0c7752cf8f61f71631e68de2678db96&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=cbe281283325d339f48d18133ff27fc816b8cea4bb9668d2d36db47894fe5bed&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=d1902bb67bae655283c3665d0fccf051546f371e93a293d7601026745c769d6b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=31deb0ba2505114c8848e130267ce7277a5a3d32b2102ca7821a54dd789c501e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=f2224015a081d3f60b3d65553baa3921cf769b6fdce14a09d028b82c8350f249&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=e21898489bb4fbaab12e86e5a1083310b423f119825bfdb2fa2c56bfc0a65b33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=a54af12911287990d9a0c18ffb7af89ac1f13b1d975391eb4da5b9e07ba8365c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQLMVAD%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T004220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrj8W2XDrSBQc5unyvDYgRLhHXa8lwncqIgECt6RIiFQIgcG32mfcQmHhMKEcwPeZ55S%2BsIaL5hFvK40jcEsZw%2BlQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP9WTUtRFgPBywhbYCrcA53zUb2hAqYIRCqKswsxk4ctli033vekOUMfv%2Bg9rVv7U137tNUGYB0kfu%2FgRGJE38%2BwRsC1OC4U%2BMzr7xUYOzESXB96Rweocwnis14akZQHDVIlUvhRDB%2BL8tkMk%2BocLNhuRgZ5Nd6FumjrHW7dMZPJTHUEusq36HsOxgtLnUWMagUIh%2BgF3X6ug5ee0gr2JIpZScD3UP3%2BtM8dsXHtm58pfgjO1XhbLTWvF7vZavkXjruc3mBPbV4%2BkERLyEh5FHh58KYqDr6vSeTjg%2FpYPqX8SWzRIFgVBaD6iAhWJKAKNi3KoyK76lo5PN3v%2B6YvXKV%2BuWy8RjBwB2uaCrrs%2BynX%2BpS2xJbWQytoPRgzEdj%2FcfK6t8WCXZcjA2ATy%2B9doubbKLSd6lDueTbiFsJ1DKw95PatzD3%2Bkn53QD7Brgx1YLf2hVnIQKnSYuwOJS%2FC5E2NzTzqEX2iAPNBwb6U18WzsFEmohwrLvucEYfdh8KzMzC1mh0Zy4cLAeH6eHxmRix1sjDB8zj%2B%2B8R5H7pdVUq5fHIQe6z2QD65fnnPwqYzMpINJSZVgwJTyGSBqS8IUIueJ4%2BrreRouC0RNf%2FBwwSA1w8ylZ3KMrbJ8qcbOZFJ3lWPSKe5EZL%2BL%2FmDMNDCxr8GOqUBdedukHT8gtuPt317%2FcoDHXaTpWyMqnzD6JWT1uAXHCzMWTpaDlhaGVhW1b%2FEvqwDZgMpZv%2BBbh93fGVkcbS5jvdaJEsPHoSwHICv%2BzbZuGRzHHa9NKjq69agNIy68qXaAd2GdKxAfPDUBFkDgv0UsCMc1zlfVnBKlKRt0XGBJ296Mn6PAsKM0ApbxKIlXPBm%2BL%2FN%2FId81IK2ecKt%2FGHe6DICWg3r&X-Amz-Signature=2eb6446c564dcfebeaab2b498782cacf2cb263cbb2a63f3dc3707d1e851f8d5a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
