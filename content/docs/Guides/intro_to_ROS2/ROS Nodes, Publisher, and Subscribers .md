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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=4636227e90a5a08f03ad0178ca8e05f83fe7d6c17768c8e8bbdfd663057af61f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=64bf68caf5e6affa83b5071e83be0112d93c525ff310c4469741cd35a0a159d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=3b28a4ffb50ccefe998d6833e4a0b2c53398e6ffd4882d318b3129a07391d3e2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=ec10559e5ca805cfdfe6be3e64e3ad295876f70a88d4ea38c3e75fae23eef011&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=9aaa8446d8cb9aa727555e981d89b226bcf593c6c240b7eddd48ee17257d2288&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=197affafe3c86cdc79602a540368111594bb820df562047514baf080e2dff534&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=b5b6306e0f22e2d59d640dd2fbd2193e33a55f19c96d6a319ed390cc36b8851c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FK2F7QF%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQD39oSOBorAFJyc3QDAsvnzHiNJg84bAb5dgAvwlbj9iAIhAInkgNCk05YWUtJUrhXM9bEbQI3jEnnIKigwVKNdhCH3Kv8DCFYQABoMNjM3NDIzMTgzODA1IgxbuZWaa7oC2k5EWAcq3APuGMSstobK9HaSUQLz6eTj3pzdqvtzrWu1min17qWOE0%2Be5SUMZ%2BUhhIdiin64m6Rkq2ZGlE5iFd76iA1cBl70R6ATFaYIojl%2FzJWAfuWUrTKJDYc3YGBQ32GsSaEyvGA%2FgrdQaujp0MZmtrn8GS2EqMa320y0enGq0m053j3kYlc7B3OOOjsZD42UUQJd5hsLT6PhIDgYzCRfWCh0vzWMCSwdO%2BA7XQLwNEHn9CgeG8ys%2FJy21GVs4rLg4Sn0dGDAP1VYNzr6IKw67HUrLUEsEmVbhpGyJJKFmTyakiscmXk20Lcao9mcfmX9EyA11GPnYrQ%2FJaj7Kru0UDsDlZfmuLR%2FCZuHB2ErOzRxu%2FlqDF8jrXgBo%2BSSHOdnJmDPkOqY4YmaUBdAGtVMshugq9%2BFkVZxV7wLzEgxS2JnPiCS4KAMe0%2BkPCcGbjQgw6ccAyI7ZMYoqxRU5vIwmRqFGlMRr6uhQXWTZjqg5bRVisjKodibak3VPpfBqRCmDi4W1PxyMflOllKJaR%2BNAN7WfsCJd4bUF%2F7RCtNpJwCR4B%2Bp8dNaTlAsES%2B5O1zeh7N1GvPR37JdVghGF8IfVN7SIWoTUYWUR4IFfFKQf93P1P7iIbsI86Qgq%2BduZ9zb7TD83sW9BjqkAc9%2FXjoYkAtdewt7SHM2jSSehZvmT17i%2Ffq82nXf%2FXpdTTOBjr6G%2Bxf6gitkJNcDTISltKKvVs0r%2B0sWky7R8M7duHYIIZomntdTM5KMsJFI36mehWJpaBpfzrlCVGF2m2eSZOsPYUH4Rhb%2B2ACY1KwSr4WNI%2FLbyYdhTXm0Wkt2fwXaWM7VFmyxjTEAabVDBhQDKiHfC32rNDnsbRvFX9J%2F0OPv&X-Amz-Signature=db3b1716eec8052c62f318a66dbed5f7949dcdb01f0d025daa6de1866f0248de&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
