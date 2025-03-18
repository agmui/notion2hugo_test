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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=7b84310f716faa62ee26fc4bb83fd1e6ab2ecef6d124cfe590ee3bbc26671cb1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=1ba6e8eb56689e6a92ebce7b5b762d55ced09de488f017fdd28c1e3658d09b22&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=c48e7ebe1dc3259c11a89f5f2f7bfa54ffefa8bdbc6554b3de6d1d9526c3d4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=a4a89fea3fc444d0c3099d3dfd2675de550e7f5be272de8bc861f078472214e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=c11f3645038f8d7a139624a8148a0c665e9c4a5722d09e84f341adee67e484be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=a761fa669474e71702b712070caa273b6ec370e778284c6581380188b3c4fd7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=b811a336bbc0a5b9c14983a7ca59020dc6669965cebcb88a1a4124562432663a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MXZOBMP%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIE6C3qNEcr0E9CwxpxKGjv893TzjrcCQfHXimN7u59rGAiAYExep039WbwQ%2BurlUs7Upl%2Fnr61Tc0P1T3fDtMvbl0yr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMozJs96jdnFN1Hn9fKtwD7uX9P6TXR176AVjRg1%2FE0Ac1A0xf2AcvEU3WJHzDk6iONuZ7YhBHGRV1RjKYhXk%2BgJHZ3%2FyDap4NjrGxv3mglUdggd7Evyx5%2FHx9Ptb1pRG4r1D4%2FoPS4zGWfkj5VJcajaFZBKfAe9Tg9UgP%2FpSYU3uM6TMLMHS4PS3IT7N0Du7xmxP9IxmbV30MsiphTX%2BFwDnfF1KGiv02u9V5M%2B0vUYOL3W8O1YGZdZNzDNLxYJB%2Fu0TFQCeS95n%2BEEkC8Xs9YaP6qF3BCFjD8RTT1oc%2FKLjMGBsSggUfX4xBmXPE7oVlsJu2JoqM4tIEgcWhZh4MWJQZxYlr8iuSUv%2BEUK0GV172HhF43BENV8dYnoLLOecocHU199u1vpWBQ1PGrQyXe3klc1%2Bjcxh4TV4E%2FPQ3gFshx9VpeVb5%2F18crHnnbxO0xKTlnlfiJCt7sXUmJEQedlNlydJzBaMxAxRhOAMegbIGAU6y1vK2Gzy%2FA7KDS%2BP6Doyk0Vcn2KrGPRi%2Bdg9L7yWGjYZGO0hlaukW6CQxc3wtefnIdFS5%2B5yrYPUBiEWYmycBF%2FXC2nNor%2B3hbyjRUSMQav8gUYlAvpxp6u2OYZnnqqFc77tcgLL1qWkGw09DGIl%2FVS49pu8cdfsw2fTlvgY6pgE4KqLbi2kYHLr9i7Je0J1%2Bm5b15J2q9QX2rmH7AUUS8zSLubtlQ2yb40kn6J7XFdcUnXBaXWNxfg6ZZs8hHmDvR7sUbTYshZYd%2B6uYS0U9JnYhLdfN0doqWm7BUUdJzqi1RTcS%2BwkY4EuCtp142xjDjm6hL1NKWZDVFteFnX5YYPKR9UiBNuTbJtuXAUh0%2BlbQYQOlZ0N%2FcdpS9y6nla4kD2h%2B8T%2FD&X-Amz-Signature=6451c2fb32ce643784cf2fdd98578b69bf6df3b491b299d20b06a8ea89485ee1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
