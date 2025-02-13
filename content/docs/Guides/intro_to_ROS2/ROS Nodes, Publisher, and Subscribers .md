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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=53e79693776399a5657c59ada52eec81fedab0bf3ac41e29e8a74ea2d5708836&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=7498a096a224e6ae9adfd5790079017ecf1f678b07f903281d46e7fc49dd8161&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=125f65556b15bc47e3e39bbc3d026a8ea85268e67b2e3fc211b53fe04eb71ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=f3de874e86e8d1fc6abba8c67bd39ff4509f4aca1093dffd95567a9229681d45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=f45a1b45bf316b86554e43f4f076eaffe2309c8f7b6cca82c43dc73af218bcfc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=19314f89dc5f0127a4a23ce8f3d1f1ced00b068a9c0cfa9610fdc620fe15a561&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=85c77e2c5287fb7a34498a0e2769182ca1d84b2a05445d2d367663b0fe484076&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRAHM2SO%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T220727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC05mwHLEtHCcaKbDOIfo%2B7Y25mRFvn%2BCJOQW1JUE6k2QIhAPcLIl4WS6yW4s1d3pYh%2FxG4YeTQ48R8QLgrt3ptMHXDKv8DCB4QABoMNjM3NDIzMTgzODA1IgyhKVUQpjxwEmrnMjkq3AMf5B0UTi5B0gpYAOWTnsFb99nEDtXuX3Puhb%2Br60%2B0qtdZ7GYQwYycUBYbdIJ2%2BM4LhcIveJoBCViOk9x9Wzp%2F2kZ%2F3P04BL2i4SW3Lhte8ITUg2%2FgagVKjrEjdGuHplAl%2FXIpGdm3Zo0GxldtZ9MnjYQTY8WzJ2cLed3EpMjq26Lpas%2FyjyJJ4SCE4LJWsanZTbGZwcztzq8KBqKOahwxK5cHwJ4tw6p1UvQSKxqrnY96bANQ%2F3nrMpmky9ielxXO41ppZUC29JhZFnCUjLkyiZERHquPETs7Q9WUmkCpmilB9uio22aop42d2ir4rcmmii4tXaKLsmLD1z%2B8vJKeVDtd2%2FpMDqHCOGmwbT6XCk2XQAhtWWa8vrIa%2BpEnaJ%2FR0kReN2EDiStfqkloTt2XwfUVF7VlXowRxjILQ7uE%2FZwQ1UPTGwhqbKxnWjNh1E2Xl%2FASFXN%2FZSACQF38%2BLxzjuaMetqNSLD8r97eLNdnGM98tjpIBhX3jVHlxcOSLSRNQBg%2FK%2BSgLTTu399onqvrwAWezn3IW86VE4b3jbyUjCPyVtIQdNqaPPQObcsTOaZThGXrZZ5PGpDSqWw859hy%2FGuYV8M6W5dFKnvS0omOSfMbYOUA%2B1TxfBjLpjDrq7m9BjqkAQ1lYWhUWPbIoBmxCz8qWxO6YlcHErbId3Rj4giW3SxEdLSK68nY%2FAoIoJKLJ0HDQk6JIFSTyMHYOKL813LeHsJy0IR4ABedfVn9Vr7WyBsGuFBtMLPs9OugDygYQcWdYrBsp9XseyCjeYOkh04JtEfYcU26fyKkJrRTleic0v3m51OSnW78ZWhJRl9GORz%2BagTwEOUAZblyNggIcbBM9l2kmZB5&X-Amz-Signature=d463e5c5add3f804a98ad615cc1c21b3c9ed6d013bdec4da10f4f8239ead1ad3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
