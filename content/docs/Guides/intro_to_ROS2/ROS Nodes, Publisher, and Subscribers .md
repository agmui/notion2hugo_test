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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=4d273f1a54e5ebf0c4a3d8e7955a643c471a11903fed05b85967268259e3206b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=3e2e8975c65a1f38840eadc781a4b74756f890a673b4402d9faf7e2f8589d30c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=5c5608951485c147f171bdb4af69280769ed5ed9ca1a16464a50bb8a0975aed1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=6ac3f436fdd6431f1f91ee213909ca31d14d985a5f81769aa3673c7f8ced0ec9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=627fbc46ca3c4a3632468da2f33bd6fd45ce1f80b7d20b492a18bac74cfcc8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=8bdfc79a606adc865f6b13aea92d148b222198d8d3004baca91a0b623eb942a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=aec7bbe7d6d4aa54a8ed35324323a8f2c34522cf50a365d98ab13d1d67224b70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXWWLAMX%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T004216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDx3cPaT5FroFYzkw7UpHk55wknmeEjM%2BN2jMSXChQZyAIgXPBD%2Fn23Q03dzlyEpsM7nvEynq4mJV6eRb%2BHoDErPUcqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPk8MGYGCSyTxm1dyrcA3G8AeAOrxdxYyv7SSfnm89JKFgBaFA0zI32jAMMNYN6ThWxOqvxw04RMlEUQIjWUj6yw5%2BNtsKON0kQVVvXPWEEUYmqT6atHTZmCargB2lCtSh3iEG%2BIsTimB%2F7thFejwcT%2F1dMGapy1vp5v%2FQQMZjktQAPwfc2CUwdFd%2BT2xtM70GI4KTkGRJRokGiEoQa8g7ULyNUpTqG5WJJzYxvEE4UlsH%2BJlDdHbnHTSc8w1PftpAhK0M%2FWLcN%2B6rInAKCsWfvSmcPejj52MwGTjJSa2IDZ%2BrnOecRj2zc7uml9%2BLpImsTXr4GN9lLtWRBJ5Z%2BvKboY7WsGyvrXf6e1IGyMmdHd6gItrNIbdorzyUJ8qEW1fATiwNWuyF0H9AHVezgA8HoYjuWwVbF%2BXjBy%2BiFsjRt7%2BPJv4GaALxxBoFEM4ysJjsyLwz8PVJG5rEgqZ7LANmSGkV19sd4nfpbDcvvH%2B0lYPMiAwMBKFXJyi0Vy1M7DvO4xtt3hdEhIOw8DLdbwI8omXoRPfmxaQ%2BLmrDOV3qYMxpRK%2FB%2FgFG3S8Cbg36dy7bLTq%2BXJZBMFXb2UYznS%2BVtmCagtkjdqITCbaSK%2F81t%2BCsr29aBREDOqBgktGlpNeb5om9UeLHJ8b%2FLMPuitMEGOqUBxWmySf4HrDSXHsrG%2B%2F9GVMeSm%2BYioJSLniJj7RPjBIsnjmI8xoJlzY1fRfTDJk43VdzsUxDY3tlwjq8K05joVu%2BanYYAlWTQDGEBhBJ3XQ6Wc%2F0kwYsWrtq1LeNNceCkOXV4TYHGiw8a4ioN9%2Fc2X9GMOvA1nP23Z%2FOzGrgZJp0J3eSwoBfIi%2FquXaQBoRtNuzt5SsMSD65M1aNJO1hckIH0DUHR&X-Amz-Signature=a06d16d43be4f12ebd024056aabc5cf6ba9890078a170f9170c19c24fe0257c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
