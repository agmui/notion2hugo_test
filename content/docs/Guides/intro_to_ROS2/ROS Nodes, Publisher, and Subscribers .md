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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=4d65fc3d6f84c8743c9ae41002d390c4abeb46718693b4eb2fa4d3331abaf4dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=e88845a433c6a2d4c5eaa39a2d059d1c65f3f8d201e01df6229f69e6c70545a6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=adda753c751e294c4d8c22f8a5342b6be7b78779470dc5d260b9e15077fdbf86&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=4d5bead7213edac92b66ae717d374ab7ff3dfc0330c75f01542f8722c3378a01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=94d0b2d1692c232f8ee780247354b3dd05ff487a68bf65624e5d4dd2c9877cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=90aa4cd9d30f1d2e13aef1ee0f9094c9054340dfad823976d90995e374bea710&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=2e7cd76909172948cc2993affc5e8cdd99eae4f01636d1493756a228ebfaa890&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYKVG4M%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T110222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDnaMQ0t3Uh%2FgbPIZXz74w8rSzAWvvii0qZicBokE1ReAiEAgobdEYtsT80%2Fu0DWJTiIRVHBa8GDykzfXQZX0Yvdg3YqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYS3jltBdtwNfowtircA1Og4vBZxMoEb1E5HiVRG5AT6WYAWITQX4qHY13OlBNQ3D1XEYJRrT4JKUd7rDOUmPmmjTegGBe%2BKmYVej0WlAqKDZIu%2BKUuu7qsDOPxkmnsFYnJsUwNhWhcz%2F33Qqljd7De%2F%2FLvNjpCb%2BMynu3X4rcuGNK05ry7xPQsQ6y%2BVJ50kCxJSRoFSLvhcJ97%2FvRMRiKx1eR7U%2BCF4BvoLFQKbQgdVV9hsLnZ2tfOxswcUHf3LO5Bp4NXCtZQuUnCYindbl0zaoAfH8u1EKNHRi0H1q2i8u6prT5Ebx03Wz1yxtEFrEHvcHMS9%2BycXCiiWhVGrpnKTVS3mZIjoFxp9Qle%2Bg508L7l%2B2R4yzTevc77gYMk0G1k6YFH%2Fx%2FWJL2ILZ9p2k8GOcGkNYlSAnznfCCpsgcPyg4CCaT4B61Lqi%2FfZRj1aIECKRnUnycTht40G7GygoPBa1l9WMLevjaj10hmEE%2B3cclDZ5SEW6w7qnzeIVbwHHpr%2BimSWlQ1mo19GJoPXbOP2QRf%2Bww4eN8cy%2Fk7HeBC5PVbd0%2FECz6wE5YoRVV3lJQbWxDk5%2Fco8swI2ZAl6K7Vvu62OZX9b6dfr3yLuLHHyois0GUC5%2Bp905JABK8vrFaeQitBNRC%2BW5JIMK2YwL4GOqUB2sMOD4tH47r6nL10l3nSjibmuzs6ne9H6X1XHmgtf%2Bb63i3pDtzvA2%2FSsBzOPGm7qtbLod%2FzIKvpAy7gk1%2BvwThHlUOFG1zCJhR3GNkfKFRPGFNqoRKfIi4GiY%2BclUkb6nnkBH38X4jyYlWFfS9grSqcOFMWV816j6%2FszpnINKitl2acdW8iMPRjyq5iQcTqUwEQlZ%2BtE0gbzZkC8QM7aUnpcySR&X-Amz-Signature=693e2c9500c7869e562d5bb79ae787aad6b1abad4a412731805d34537942b381&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
