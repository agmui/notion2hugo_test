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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=421821b400ce4d2db1e7b9985a3bdca8195b0f6f588fb012e437a5d27709a72c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=19cb16f5be87d65c994eb1cb2db1fb59148ea2e3b842c210f2bd216e35115e86&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=e4bf5afb8bb4c92ec3a1f175bfc3fc3dab345c59656ae2bf28e1742f3438544d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=69a61379ad17599f7f828fd84a0034f144a3d75417a648f4ca6963f622bcaef4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=7cc530a88ede44191c310d7bf7402d48ce77a145467965753971fd7f69e941c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=563b80f24cf7f1d643c4a0b8830ceffb17c6a834be3a1aa93b4352b88c8d93ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=3d2772e089f9efe58e33092dd4b1f7bdc21c2165c3b5a6eb812b83ec732bae93&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHENASDC%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T070926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCICycPF5yIOAV7CaE%2B%2FyHtskhhcBUSwUxle1ephsj4lUDAiEAg%2FczdcZ6czpksn2EM6wzV1riEymBnxHIQOkJugYhg3MqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDkMNUEPX2tjoLrPgyrcAzbB9cxeLIHSsTLG2AVsHNKa0%2BgmtZGgunxOuF4V5laaZk6CPIVQJ%2FTcx%2FdQ927OfS9RcwJw%2BaY0uVGHnQ%2FSnRtNAvTbs0Z81W18DYnkw7ZO1xKxsasFCTCWzx1qQumky9XeQrAzrbrNU%2BQV85EpYr1xurjTPR2rN7kH%2F6lrki4THX7lYy%2BUkZEfk9pn1Aejp74H%2B%2FmMxvR1q5IWti0mS10N5BpPsTK%2BjIufRVImJeNzJ0SIf%2FO20YKL2DtML47EZernQca9QowUv9%2BE2Niu57HpqfStHeINTACzFZ9j%2BjUOTcJm09xFSOyQr9HtGFp9gWE5MDYXxMtg7sdJ2UgMS6uijDHX0RAhYbVwK%2BV3Q%2BiUTfN9TsKbziVoa74E3XQTtRADBr4fqQ1TfUem7REQdPf5kHliShe4Z2Kf9olpHNjEl8uChwRpin7nrhB5XzSt%2By6OGmJDwIPSy4CWI4qO8G4WLVnCUTc8FCnXsTqrzFfjY9hLrwOdtBFTJsofnA9lnwuFS61c%2FjKBNHAe9KwqRg0tmkm4RQNyyvTEVSlzj%2F03KvBvAmRpzBp%2BqfSP700Gay%2B2W4plvNYWt9%2FhMieLp2t65xgf%2FUr91mbdP6mJMMMbQzfWT%2F7FI9BJXSohMKKxzMAGOqUBESgdY4WxKA8Bjz5FrDov510p4D2nFEMAJrh%2FCqGCJAU70XSqcdkeoiMtORHKKxMmVOAUddqv%2BkkaM1NFqfcApHDuQCLROOttaR%2BN24jw6bCiGC57SKtS6cIRbmpFD8nILR1jW3JuGXW%2BfaEtMrbQ3to64Cc5z%2FLz2Vd6zzGHMfoKkiTQB%2B9dIwIlMeg9EuvFzesyFo8P3e75PLjjNAjcbKgWqHv2&X-Amz-Signature=bb3c608124d92124d8302997dda3a83384b5d19030ac2f5b319463a51d29dbe6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
