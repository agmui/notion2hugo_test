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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=25478b6632d7ae180cb643f139f142621be570bffae8194e3bb0d335c4e004eb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=2b4304ce379fcf69538f800b605d26e0c4abf3cf5054acc8f4e291d1f65e81b9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=7fde9e6a72721e5dc61a80d1446ef244f48a04bd5bcea60ce69ab1b5873e6f1a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=9554aaec8f75e4c0e007af175ec7358da3ccc183637bc8d58062a5906f91de62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=f43a1be57a0ccfbe5c1eabc569c321f4b086dc423012cd917831f50e6d6bc2f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=8904dc64e711e31737c8aeb514ebcbd6fb72d46346886658c6b5c906e8d3fb3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=b71cbfcc23060436cd6da6850889137c063db3252abfd11e518f6ba1f35b3635&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4D7TJCL%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T041024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyZtyPKjunmuR9OVrFe7MVcgIB4RakCg7yR3zrkTW03wIhAO1mQNS%2BUynr69ArSviagxpdGQ9g7N4VrqhgIRXUH%2F6TKogECOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyDJzEnV9oz%2BeWmp%2Bwq3APs1vo8jQc6vI76cGNuRAPQ%2BMIX3058TxdVa5twZ7cp1cW6ftFf5obtRZv%2FuXoEkLfwR6o33BsnY2aghNczLfdq%2BLls9Ij7MaVSx2L4q3ffGwTwkpxpJbv3WewNKQR7YZJv%2F61ZtXwiBklCkwj4VAd3mPLhQSwzrJPiWrUYliUY8Si%2BE8T0cdzhKYDPNyUH%2F%2BPJMi5058KgJJQmiam02GaHwqo4P3IxxCUvlIPjnqKK%2Bu0fe%2F1%2Bdu%2Ba6XWrJcEpIE%2FS7pa1%2FAaVgC2HFgjXDmPnxvy%2FHTnRRNM%2BYjEkvh0DV1ot0dI5eYXW3XDwZ2jzOOtCCUMRZ9nWgpMINzhqoT%2BJRJD3krMNxGT%2FsKs5ZkWsCsRX%2F428caAvnXO7ElcX2xoC1So02MnXzPQZ0JBXNq6KVUEKdDOE%2B3TVB%2FBxyh9IXXuVe2RVWLYb6NGCf%2BSdUtMjArqs9bPQYk76XF%2FKWjvQ3uzkMMRLhaKN3Xm64tby5mgnfHVsjYvzdNeLWyBPcTq8sf0hrlg%2FBtHZCadfIruJzsech8TTnmg9VoiLe9HX8wluuwgi74Ssrt%2Fzh4XGS6WzcnvLIoVNpm1RyIdMQzIdP23smwPudyBMIZ%2Bj1eks7BJZ2phmCDWHomXwfDCW%2BJi%2BBjqkASUhgQL64uG8Qi9zd70hSoEAUkvihr4JNRtQ0xPR6p3yPCRPohaAzMx938xGxdD7DzFfv1yg5D4HV6xdEyB60axPnMpSugtJMGjy2ShkJsAHCU4sErhtfGaEE%2BbRin4q95nYz1r%2FN3nL2R8Bw6%2FwSyrBrxsf7d5hjbleqwF4pVGM0Fs5YKpvg9EqESJyBjOhW4RlUoI7BynL5OXQMZhsXpUV%2FWYN&X-Amz-Signature=8a86e09319360ba035a2c324fa5718f30b52f0bad1b9ad0e5a8ba6ec4d93564b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
