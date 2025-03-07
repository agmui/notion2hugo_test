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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=5af2b9f4ccad8be8cd5ce67ede18085ea6f2ec0a142957b1675cd89328d7499b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=a719374feef39d8b66dd01c40643c5fc8ba8a7456e3a8a3ac4b6d3da2988c6b8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=5a840e9c24aac5ccd5da707db56ad02e4ef11026656e3405c99a86889c2295d2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=8ea05bd707a57a7c2e0334e0519e3f6d68852a10072b5fbea66703b52e1356c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=5e835e084e4a40ee67256355e234464d9c393c24187419e46bb7f4004cd072d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=2a0a625c67ecc532cacbb4a37a5f89bb00b9979e1c8a6d75bf2969404e770d97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=d8d36f1112647f21325bee6361033564e583944ce0448c48b2c2c59dafb5aa1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RZ4LYHV%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T090829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDReIGQAdclLxuSMX3BX0PDhKpOi14qhMphxijSLLP9hwIgYwSuaOizAnqG5q%2B25WJ2DL%2B5m8aenZi3N015Deru7BIq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDEqqbOaZASbR%2F8%2F6oSrcA26bBVbzTD6qsO87Qkw6hDUZXbaShSaWlZPX2%2BjaJ1weeWhhBIN5JfPKcU9FLNpUfnNlY4AkaxM9epujOy9003z2xOJVeJiz9H8%2FAv%2FOEJ9xmvg7dslhFjc9Le7hxfjeNhYz7TpoEnKKTcbePNc21ouUdJTS5fg7cTXCTOVefYK2arFaxE1f5gGskjV69RTYqo2moWUAxsnUjZWDjcNr%2FKWmVRBRAOcpWezKFERCfFvMmT16fo8zh%2B1%2Ffv0hsGLmaSuiFIBynJhs%2BNSsf9kySx9zGKoMhIxMnp4edf5YBpklmTrIyHl3zQMx0dMBCdxj4lQC0aDVuL%2FGTlHbeFWj46AAObr6%2F87E6nteeOzwNYdv8M%2B85nuqFVuUTzE%2FH0eStuulvLJwiplhX%2FkvoOyBP0oIG8QBSlC0fIvl3Eo4Kyoo2gsbWxF7X%2FPI7IOi6wyHWONFH04mUXl8rIO%2BHMZ8uz%2B0oLrJThNFaHYJ5KC3WyL0%2F7rLinccGf0hEZxvthaERldqOdakpvLlCkpB71ptQSlmfJTaR4vwC3TK9yCGUDYFEeQtahFV2MgFqsKaSIDSzcSqCVNGcT%2BleCr%2BUABwWsmMr6orVpBJyDryc474KAGdj76pJUhSJyM4kBopMMLlqr4GOqUB1tPFb4rDKIhZdnrMUhB2s8hqx6j0cUptj8IttRpFCq7JoT51mMku7rJ%2Buw0eRLULQjUGtfRp2JbH4hDkbBGrK6Xd6BL7gpKMJ8tQF9AmPfST2VHdSvAdVE1WRwK5ozr5poT2zKQ9TDTQbDAkM4bDsfhp329Hk9cFiPa%2FdY16ZxKIJwR7b8hZXPoAC%2Fhjlm66qrulIQn0eiGDBgm21eOaRAiqRkbi&X-Amz-Signature=2f7fb6cef05fa4317428a1249b0e4334a9244e5123c9163d12a67bdebc2d2878&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
