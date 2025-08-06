---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=b0bdf508642204632a13dc44a7b5fd9f8ec48fe864b9dec0fe1b213c245d3ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=3f556b8b437de89c083b8f9d9c85c0bd0e2465c5a4a061dad603a55149cfebef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=890fecbce873c8d14f002f93a35b595a67e48bb8e05836baf8204c34faf7c7db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=64602addb882c7abc75fa7277d66ae7a52ce4e3eddc072f10e070072ee7184ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=8c315eeb8d7e71fe4eca1eb1bce9c4edd468ef4c691a67106b50694e98de6e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=894a0fe581b128bfc5af915582279c479720735bbaea30cd800c88889309b64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=11f3beb5ee9eb012cee66dbd2b532f05b06714c9734b93d0a960b1da54f029ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKHMACSE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQCdHtouLMtmnA4nZCWg46GnpsELQ0tB9ilQ%2BtJHsWB15gIgZmhfPnrUiJnfpPwilXKkNitXINBwuSZOOmmdFV8G9poq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDLeGG0lQaSiQWHkjXircA8J5KEWTy%2BMlfDxAPDjzxOzBupv3r8QAjVPrkrXMIQtF50unhOgHRsopUE3MnU9os4lEGVz8HA2CP4eEaiOPCHIf%2FfHg5%2Fu2azTMqDlLOEHcN1OIdy83c%2F%2FAInC4p9E1A0luZyURZK%2BzAcCL5Qs%2FvkZPHqxIfqYBpxMyMQ08RPQkv3Jm0Q0myndMZnyBq51uwU3NMHHj1i6EKjO%2BL0Of8IPIZwFOel3v3LSHRm8taY32pvtKx2%2FYBJUtYc10Zz6qw2zeIroO79Tqk8Cjhq%2Fj3w6wroA7yMrgYunzMMAQ4ADzLPtJ5S6BEF3m%2Fcwoxmf%2FFVtFxKi2tF8nSmCtARHlPUmvtqvC4nPM8OxrSxCnJLxy%2BsM1nPb9P6fo%2FADxpd3QgKHg5jkazsYXEKkxtcfALesosC7oYLDSuAlzFbsQMLOF8qMAGgW6IL4Ja6caHoa5dfkyX0fqOBa1LpLFkWOi0m6nOJ%2F8LNBTXv2xL3inNnx3US9cLN%2Fd3ujBrd11s4tnjq68%2BMaUAxd4ZUgZTcFkmbxw%2FKo4XZGx3%2Fg6UqqaAI4P1I4lceU2ZFzpaLplv5kH8AhfFVugA5hB58Wa8SVhGT2FQMbmoKM0%2F9PZrgWJwoyBnTOkIrNM0EiDgq2zMLzFzsQGOqUBf1%2ByevEYCRqJvkIH91XpQLQ6g23xnFUJXx1qUWz6Zj5HWSVa3LxAZ1okv%2FLLmb2j%2F5EzAFR2tUQVAMcTi8hA1LYGFo9OoBA%2BC4QqfV6XxlGcatwrE%2FV7uh1ixZEhLlBiIOdxQRyhbePvqCzdsYHnhMDbMamucEyGQ80uwWedOdodCEhZbnFxQaSm0pEv6rtf3GiVJZ1ujj0P7E1Dau7hfGv6Nq4K&X-Amz-Signature=5e5ba2975d3e2e35b1597a712795f5e2726f001dd47d3b955cd8ea13cd585ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
