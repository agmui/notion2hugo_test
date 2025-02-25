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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=153df1e5744d2997ebb6079f2a6f6953e2c79c2a8fba18c3468313a6ed413c9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=59414d91445a3544c08314b1c1079a99d49a19fb827f89e81d608ea49246b7c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=ee4803bc30764f8de538b300284164721790ffad4ff7b6a76998970fb652e8ed&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=3d50eff09dc56c99d5f19ef6a270ce71e06fe1ec02be3016477437308fd57f8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=efa6e232c96718a8b4200a913016c9b032a887fd95687234b8a0a9b019d1645e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=098fd39736a0ec5713e21032db1d6a00b0f256b54a6ca1bf5c4133744ed42da8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=e131a0dcb964fd1a0b2649354786a8fb57fbaa0e0391fd21777136e343b5ea9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMKUQFL%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T220733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQD5icYZP8ZsPcTC3Q9rM9cHgWz7LfV2Ko8O0EDO9bJvDQIhAOSJQ7DscyR5KLPGg9W3%2BF97zpt%2BU8njuUyBGE5HPwITKv8DCE4QABoMNjM3NDIzMTgzODA1IgwwnCCCvAySCbXo6Fgq3AOAcf4J3R%2FWVaqlwYzCBgIp3bAqUqVGqR0qfDR8G5fP%2Fb5Mwc%2Bd4K9IK8DjDHvDg7frZSL8xMf%2BUoOfsI7Hiht1BPjoZXtigEDUg0wYgTyH1w8KPy9vFHmuBvCpdf5u5A%2B42zrd25UiO5K6XB3s2yUvu3NiW3H28yEyel6LXbUQxlXsMx8kwYjyye9nVEzSzrtASwPSyceCQK3oxVVinOYicRi4ESnFZZL1PU5I1m037amW18n%2BEeqf0MuUIt%2F3Zb86Qb7Ih%2BYjz3BwqUTQXgt%2FvOKwsLRETU6QpyPDX2KMb9MmJ3KNEWKwdPvuf8cX3RCilLRvD4ZsQacJlLCziAj6oWR%2F6uuGPxmjWGAYchpsVZjLfL2xG7iRsN2D8V9sq5TPkxr21Qs0p12z9B1dPiraDVOGMCFWpBw7iANyikphpJqVOxetgDJEC9GQCKZKBY2pBuJLwHaNTL5Ni9T36wE5356bobHmqxdgaSLVLzRzLEsOLJ5U1J4tRtklYRI45wczeVWP0o5b5pCGVSoD%2BlV0SCnRkdm690QHCFcHvxF%2Byn0y4u1XIEmvCEqTF6qiOYp5Dvez%2Bx%2FIzrrs5lSaWxxy9G1YbGvTsFTu%2Bb80r2FilavxYnSAY%2FJrmkVbQTD24%2Fi9BjqkAb8NdWzzqwJ%2BiHG3Qyd%2Fg%2B41CZPvOjSUczlNhO6sz20BFlOzUAiNlc5ED69sJoJWia71dt3D0SbucwKgP02OLqPYgVeY%2FsZSWO76FR3EBRWQGm8vU32eaTnAjY3RXltzrrjBfcEi3oBaPKrar9jpDA3nXdasIY9yJSxeOVssiOJwcTNvSlOK9%2FnKjopecvt8OMgvEzC6BGKUSkmOC8znkeZqQmb9&X-Amz-Signature=7e64ddf69843a4cad69095035c2f634ab1c1881b2b4953fea7fa34707c0b1d23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
