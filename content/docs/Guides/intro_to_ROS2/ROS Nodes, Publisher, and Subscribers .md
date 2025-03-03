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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=cfb58278f7e569fd28fbca5a6a8cc6e77f5548086662671fdddfa23c997956b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=b1e25c422e43e5c9c7d0bdc21115ef3d6ab1c0494161530d4f221dadc5f6c14a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=fe44caa92bb0ab1a972803bdee45568c085502bcf5a732f41fe132a4ff09f9c0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=7dcc7c69bed6c4cbbb0b6a027320811a0f348c1bce2b4e43b88568fb6e5f7d41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=d5719ac4c9cb75cc82397525b3313a562356119673909637e9f0a9413d7e94b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=dabb188e2e171dfe889a56e08d36361b34a648bab83ec81e4294f5719de4611e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=d866d3352a78d634c26a8c89dce59a7b5e44362087d25d2153f0a003fc8f16de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPJKNKFG%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCApi4%2FlqKOVlbFwTEgmUqe7Xo926L5UTfCd67b2W8l9gIhAOkBqkxleMqsHWzpFz2MI3hWHs8vC2XC2rZXoOMPEbQ%2FKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWFBxatn%2BpTIF6bVEq3AMa%2BAUsJMUMJLrnLpOVnAzclv46LtRI2NmZEYWyLsNFWFj%2FQ8chuTCUihx06LHgMqQ4m8Gzjyk1UsLCw0G6BdnOfv4qpbs2RC3V7oaBvd%2FCE4aqeCv5yUUsiqLzlq3nK97LaNfw03Rbey4%2BYlvmTKPVK8HneRqp9l8TiIX3IfgOKTaeKtMMeWgr21sLxhaNrlvWcVzWST7f8Sg%2F0ZbbQrMIdaLNbpQC31XHbDx39Tu8RGgmWCV1kuA9ijMb%2BQrpvcNwp6G8sLUeGwD9ksrPzYOax16%2FLbdAGkjAlh%2FYcODseLWGPdoFZa%2FH1x1y5n2m70sThXu%2FQkMn3iEBrW7oohYFh7x1EstW7BGq0W550efl7pfAhU09SOXcFh3dyjGDPQxwO1XXmMa1i00sGiJ7naR56vxMeKmc7J%2B5OzBnT1iyrlo4NYPLWgFb4zVdioR1NctF%2FaqdS8kLRrWPJtgt0gcZW%2Ft06VGUI%2BZQ5qFgaB0dQMdf1HzLbJSdc0tZEX4ilPW62Cn2IxvrgohZEVX%2B%2FrQglz4dEYnKLZbxc8zwHqcVlEl%2Bqh%2FzwSkNpG2zrHHdHMPgDS1G8nP1YAG8sEP9XfQBj6kXrp7ZHF3M9dUWCgZh%2BDT%2BOiwTBvIINOD6kzCWlpW%2BBjqkAXnLctEpTT2v2QOxAHJ4s%2BpIallvxuUeeS0rNdEK63K5NPHj%2FjmVzS7vsePH1UIjyfo%2FUplZrzTCSHtNMXk5A0IpqaYoN%2F7d1sw8RQih5NXEA2VHks8lqps9Umc8e%2Fx6Pa%2FwnlSeoPTZ5emSpVFjkQ54BgXtS4is9SD70hxVdoZex8jF9xfSs9FqnW3%2BvZaItXG6xc%2B2vPHbd5qlvkSrCoHcSkZ4&X-Amz-Signature=8a0867d65dadd27e768d43caabee057152ec5448f80b45f5f991e4771445d052&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
