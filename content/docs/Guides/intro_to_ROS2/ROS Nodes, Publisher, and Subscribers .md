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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=f30be0f9e5f4a2cac5cc4e3a48aaedae8e3d2166ea64a629eaa65b56b627213e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=4bd962e19c2be173d13933331b15e1b8d7b128f8fdea5d391a74f3265a5a23af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=2d75508df2061b5562d48135bf0273aea93d5c2e15765214fa075d111b18c78d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=2d86c9093be050cea2e29b19b724b27e81003b51840773eb67dd4e1254bdee5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=213c018698152e724a695382586eb2a5181b2c1caaad69d70cb4d1bf7ba57464&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=44f627c5426360ed9fbd6f40ff3bb7903693b51bca785f00b98c96bf678e7362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=afeffba8df1644dae612ef7032d1796939674ec9d75b38774621c49e2998b67f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEKSD3R%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T200918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIE%2B8RnRcYMMxxadLFNXwnztgvFPKHmBgzJcNa%2FNOdjc0AiAcuTRT7yvdydIqBz%2F0T6t5uGjfuWghZ8viEcKn4YQ0Qir%2FAwhNEAAaDDYzNzQyMzE4MzgwNSIMF19fE9SiRDqOLmHiKtwDCoMxbxPlcpecm140QuTtSyvWJntmIFBqLe3RMJkmeElcF9ey5z5qY09ytM28HNhdiKTQuh3Uhr82PRrETTPvGiMuma7aDxiWjJkRXVxKOjh0L6XTpYOo6Ji5ngL0Y7BProiUeXCxOkZ3kClX%2FAsg5yCh22LM6x5fio0LaDbAbkRQZQsBSy8JI0TDC2idoHVfvO9IrnUcPun0QUipTijIAe41%2BMKny6W94eugTQdEDPjWDpEYQ09TvwI%2FVBj2UAg94SmbAXsuAT1xu76ALALZOzzF7cKTpSthLyRq2Wt3a%2BaRxWDB5y6CD90GDc9mMHQVInUSBNe2%2FyoWd9OoCZJ7WYfhZPEWtRagv5YpZ4O%2BzTuIE3vPr5Ee0YTL04kS1rPYu2JwRNebWnnowDOZMhCdMq%2F3ZDp%2FuyFJGPuxLSMVOEpnzDAXcSXXv3frkcfh5Nzvs3bJERqyj4NbERlrCkZqua40KpsnL%2FEvNh1Ewo98ykwsnu31x7C7OhOOqzZBO2hNzfdw9aqQs4RyGXm7YMjgkrov3GEgb06akQdZF7WAbl2YdfPK612p6UlsPxMpQvmCoHWnAXigeIowO84x9G96ZSE2LePpAGTMPabjO8ricQYc1POXQESVBscBAr4wus68wgY6pgFSPNDSgBpeO74GId282gyKEVdzI7TfD0XFW3lu8Y7WiUvIDfr4jZGJ%2F0BA5MS2EXYwZu8HNZ8pJ1gUigyN7%2Bjz2ThRElGOClz52I7mIhZ0aocIJ%2FgAvH6%2BB6IcUGPDyhU509wGdVu0u91y20BD1vA1UITwDiQGhdvWIGqZw6kMD962Bl60XreHztFkEr3IDlNbMVQi3Qah3kPNjZytLxK07MqF7s2n&X-Amz-Signature=2a904155876d4f6e3a6fe29eea5c165838811a64ed68ae266e17550b6bbb19d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
