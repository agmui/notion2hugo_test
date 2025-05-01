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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=5c7091b6512363d0e87678964382919bac946535aa2db5470fda0da607d573e5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=63844672dfe8b02a1b75830c73d61175e1376c98d975c548027e574db25ee488&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=b6cbb0356383aea436105a0141991f927cf53221b6ec3b935f940c6655f0ce06&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=b5777574e3ca58007d66df3f5bbdc070af7308d79980be400b1cb6b2c3bd5cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=f338cc142ee1d0ecd287f0bbed75baff94becbce027519dd75cb0eeb71fe458a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=fab278ad4704474fd0d5c8a64ae40d8f6a8fc708c09d908c45eab924a56bfba6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=1b6b6460384090d1272329431480d7df40b4ee622ddb83af2f1608b1cfc524e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEZBDID%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T200920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDFxP4sPF5oDC7qLrLT75nqIIsLjrc5SYfn1AlGAEGS9AIhAOKPuN87N6h%2B28dFf2jJnBqlzvI4HCx1C5wUwKEuymNUKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysmXi5d%2BaLSpdiEm4q3ANg6ftzZulJiCam%2B3PhfF4cPgwYrkDgrHYG4hPF0AbE%2FvdZvaIL%2BOCQxqtzYfPOGDgFsiHsMFBKRzLu2DcVgXJFGtAtm6mANSL%2FYFBY%2BJJHYhJyQjxjCC0FOZudFNCvSb7tsn8Qqr%2BGMnjm6tDbinju3rhPfPidGpwcHGGm1QUWcmNuh91r9d8Y8gzMe0qmxGEvAAggkp38xQNrC%2BrDYcdj3ClpXwmm8aIL73A3XqVwfN4SeX%2FAMqr7eY1Esj95%2BQKMTVTs%2BN%2BaZGHqQzsdJLl%2FuwFw1O49MdbFdJzWSCTY3Fo5vXl%2BI%2BZy%2FYx6MIXtQ0zcC%2FEhiPPVIAI4uHKeS2shXZ7qIO%2BbWPvoq%2B96wCL%2B5z%2FBeZovVEQ7c0hZO%2FtTFK3OxQiS8xRMrFGooBB3aPDyUICCBel7gVS9TKwY5YNAfoGafrp2XXmhJvOXv6uPtKjHoY0dOplyqz9ucRKuyEvY25ddzJua%2FP48m2pNycylbeHdN40aPqi0u%2FLsWCCox6lxgNe8ovxloAiDybveMk7D%2BUcbeEANqDtv%2BBXISPB6oyxxErhB8EnhSIpt2jMv6YwNf20R8LXvOIGWyrnNqnUvJCWwL9q4po3zZHPdPHYkk5FncV2eoonTZF3pvDDWkc%2FABjqkAQ5knhVONnI8ArfZujYUBBJObOFtZ10b8g286JTCgQc9x3FzIRYCO%2FUmydPrvqYRjF1%2BaGfv6IYjC%2F%2BsZn6WBILbd7wVox1p0GSPIT82ypjGt5XxfJ%2FwhwBzckibfg6AnCuDT61uILM0XU1p2nlWBbawrnUJN4RW%2FzpfSuFoLpPQtWfYlS7GLIFAKoJv%2BBHUleVQUQck1XWJVLBFL2%2FzfilAQ%2BG6&X-Amz-Signature=12ec2f5345e304b7deed37bb3fa9f0cdd250a07cc4f340aade312d87ce04e0c8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
