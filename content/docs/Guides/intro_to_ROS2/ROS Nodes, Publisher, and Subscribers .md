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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=1942a05bafd8a6c818c025431106c4de94a88d9f44daed2188c83f9806113e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=06c9be836f8352aff5f1861abd55c286b1154610987452d9e96c3a9a4fb896ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=9e7024b4203ce4fc1261e84be93d4dd50ace011d15324a0b0d60cb210620d5ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=8285f8f9a74983a1af440d52005b0ab1748c623bf6965fb8df4b4faeada6a493&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=f3aef54776a940bcae7f3fabbe377502d7c5a75b1a8dadc6dedb3a2878161fb6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=b771d2011ae77c504e215d1b337c6899ebb579ae1969374c35d7efffe9b470f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=c9e314b4b3d12ef97064e6d457797f18cffa8c4e5cf8d14937ebcba4b37067fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662L5UNOS4%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T100946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqS7RBrKjVk1YAByYDcwB7H%2B8aFjQvrf5uRUkleM3OogIhANU%2FkEhJSPnhAdIzIRhvXt%2BEUzF15cjfz5Gu5%2BhOesd%2BKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIvMBK9ljVPCalHkoq3ANyYpOYnY2XtIuDWxklT1thkSiznCcqGG3CkBwMZHbxtzRUtDXGhO5JorxaK4BrLtf0kwND%2BL0jINITcsbQx4IJJWMdeh3Ncuw4i0uF5nlfs9vRB5LgRedGAWh0UqH3ZthsWX9WWu%2BanQtOda2x35XwtMdIt%2BRILGrc%2F9cmMjsCzKkC2xjGNr5Z4RQAO%2FloRalKbpPO0tWX2QKxyl8%2BXok9Qusk12I2BsaoLVr7LAVnoz0GWQ%2BeBHToZLuIP1x%2BX5BaDWZz6fwv0qV%2FCk8NbYm0h5wskjh6u92NFdfc9QVcAw3eesREm93pw%2FbuIUGOXJpndtBbxGw0I1V0ZxezSeYwbxmtXU41UJnyWWzPQYlgNqmwpwGtouev4llYKzJtQC9I0wB1F0M%2FK8WLytpo1M6T%2FmQuNikXxrNuuoaCQUBg%2F76eXzeicde4fHGK9KTjx%2BeuEltJv9cP9w92gfR5QpRAH4VeQ%2FAPJR%2B05C3VZjj9fGdVQuzUZOrSqur0Si1numD%2F%2FhIuiz1ACsnAJhdNWO7UqO0yGDkbkUi7gJa0zCu%2F7%2BN3KYewtaT2gDC9ma%2Bh2idhtvfKm1ZPjLcNwyG5kQyGBrx9rSAuMTayVSMsKAFjKimb4e0CiHVGA6jP%2FDCakc%2FCBjqkAfIr%2B4qmbDO%2B4quIb%2FT5gWWADtxiPeQ7wetI8Z0VbfsDABQuXaeBJVGRc%2B%2Bx%2FNIg0%2Fvkz0D1L0xPFkd3SVaenPW24c0FQc5F7UkgZdpt6M0FkfgDC5iOAm9hlAY0vKvbyMmstyCNNx4ykzHV270Ec1BqcoIacEemU30CMT2lwwRMoVsJ5JF%2BtivceBaK0oN%2BlYeC%2FNEaceN8N3SBo3wYtgABKWtw&X-Amz-Signature=3f993f2a62b302684cf13ae0058ead565fa841b71991bef87f07673b963a4666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
