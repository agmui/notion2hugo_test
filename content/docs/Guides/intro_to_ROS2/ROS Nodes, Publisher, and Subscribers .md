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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=c6f0ca300627a0e57971fc9fdfa785d4911e379ec6af618c9bff7a04c40c9212&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=f0cd102a2b912d6690b82b65799d3d05fbb9c1bfb328ac7dc9307c2be2ece5b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=fa337d6fcd321a3adac700e6a29eb27455c74dac3f5a40af40caa18435f10bdc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=883ddf4e07328c1a7d5997b5ece3d6b549c9546057eb326ac9f14ea53c061228&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=2935979f510423f2194fc439e359de2ab094cb3b0e8045aeb0d0fbed5ece459d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=1969d2b53f8c6d74fe31314c39c55ef0b5c5a13a4dec6e42df9fa16e3c4cb83d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=dc4ca65d74bca3552be0ec709d0c7f1ac63c79c95691c69db15919bbf4a4255f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSV3THX%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T160750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJGMEQCIB1MEuYSC34UatiF%2BonyDfpQk98QZNA7nJbW2AuKiqu8AiAi73UI6TTCurffhXImEeT8M8WeklOG2ioA4K9t5G2rFiqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHTozNqWe9bWDFbzhKtwD5queG8Ur45MTujYbis20Zyyv%2BBOyX%2FfK8MMS7d0vMPItdrFcNP3GYUgK1e1E6lOjZHaibpw3p2QNawCBxHw%2FkXWYenAHVuKfOYjORPhw2c%2BSoGlI%2BLt6CbwSEyhsgGeBh0d%2F31o36CIEkaAypVLBrQEv5o6nLDz0BAUcSJ3XJx50wFY%2FpzluTnqZsYYqzEvNcP5DZoh2EYndBvh6rrc1qVRiJABF%2BlQqjvmaecRptJsKFK6bxRefJTRr4sATugV9rkatfpz5XtIurppJVDrTt%2FFDMbcLWVFkpanbV2qcJw0MxnuP9vHUauzNaAPfpun3wzBAJYpjLdfiTEg83igh6MMhWVUII29J2MTq040n3T7b8%2Fj1BMqWx5Vg4AdZShVYrf%2Bvx9WqK1i8dItN%2FuylanV%2BfNs%2FxdZXZTCj3XqlyYCxJeGlcfsL%2F5chESuKlmE0V6rCcLSklmta8LnkILumH0WukqPzibkhtsAuMVNvLPWaQv2oJm5D4adUQVxJu5RcW8sHsZmh6u%2BsmQzVERImj2Vq%2BJzAkpdDFyQ3e%2Bt6SUWhay16ggp6Zv34EGwYn3f591khJkVRHPApq85h8gcqW5RMW6F0sIdClRPrVjhZpSzTyj6EQ3cr3jtMcO0wiZWMvgY6pgEGU5fp9KUzEot244TjR8IGza3FXpwsJQaz%2FcNm2wPawKluX4u6lLrm72k5Ok%2FvCwbbBu1%2Ftntmike%2B5bL%2BHYxOfJYDkUTAotYD2xrH4aOU6JS4cnz7Zkt1OvX6QAWM9Yl2OE225qyxPx71xxNvTx7rl4GmReN0XPU4qlKq34De%2FqTbdPZoib0JzXbh6If62Ifw23rqC2v0UE0PL7GCFsI%2FSvrcCCmA&X-Amz-Signature=9676a1318169662dc767acf8c5801e346d56787d901cf236e6d02ea1d45f8dad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
