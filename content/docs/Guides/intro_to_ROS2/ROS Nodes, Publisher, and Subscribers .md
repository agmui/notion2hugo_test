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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=994efcf460d5278ff7fcd73c9282fa51720d80e45342a38d19359da2586e982d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=ffd01ae4cb5406ac426b1464e1b6beb1ac41be6c2cf188451ca3a9dbc3861a00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=1831c0d7e511d6e61dd318a089ecca2ecec20a24da3745dc00aea19667957e51&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=b5352f920fae1f0a2c0e99a8c9da8bd1982cbfc5a46dd0a0b42dd12a4ec8856a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=c9892c6bfcd482f03c964f34b5688d859d0243188028853ff37df4912e6cc009&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=0fbf9def210616ee8d7df7619ae67ca220ce746ab0fada9fae51d6946dc4db64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=d21517fa38e078ffc9d2f40fe3cd5c5d250a892a933d448b1799d1eaf49dbd96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EGOUD2Z%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGmIJkXAa1Ipkn3IqhzZdJauY69PpwB3IlvE%2FAVbMru0AiA1WGcyf3dEBHleBEblpopinygHqoiClA4XN8bI1IVbiSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMymhMPFpg8f2FIgUJKtwD5L290wdGtDZmdvQz43YgD0gDQZO6YMaruWGOBcFqW%2F%2FdAM%2FoIXglv8Y5%2FtddMoZHP0Fm1%2F7%2Bo2w2b1Lsnmd8UF%2FnsljrJ%2BESxItl368aEqqyKW2ji2E3WaJ2FxPMO9%2F09C6TU%2FxWlehZLq9I8sNzh5BFPlO0CvchNtTCWyGiQAg9U0VDJxnLPNSKqLs7oIM4TVHi97x1eubOUVQpeceG05s1DII5iFS1rbZcCoGy1lJ8v1BieCMsVtJ%2BjfzrSK0dSI1j8ov1yYaM1AoBFjEuT8Pba2T9nPC8qkRHX5EmEjBtiaAPtbUDpmvrLyGC118azwfbtOxQ%2BdG8IaXMu2KMxZ%2F1sdOJL0d%2BltJc2kftAiJ6KunMlZ6ZlXCCWY1yxYqKfiIOr2KhUEK1zuq1%2Byv0AQBJEZklSGJJQ%2FumiEtsBo1Nbkc1A5lOSk79nnIDtx5sYZ2YqSWBTCyxC%2Bdb5zcHBch%2BcoNHOz6lKVidVpCqW%2FxqTxYmCt%2FcrVtvPm%2BWsRcVJeD4KH3BP1pautHbRL0s3Dno06hg9knx%2BtRqZjqxBEv%2BurcRXjdQNLlQ4kmftOe2ZFNqfJ56v4agkiSaan2hjGP4gNhbgyhXMqcTbIQMatXqsSre7iepXbB%2F8HQw66imwQY6pgEROjh0uAdtBeS5dnKCA9S2DA6ijuIC842RbGkHP11PXm4mfUPE5EN7t7BfCtIUbsnQ%2Bt0t8Sam4PSdbK1J257aCNBExIIDglvty5t%2F6roZoh9m0yhmZ3oXYTK5Kxw8HhJnQdwYhrdVmLq7aZqmHJHqPutrBbR5nW3yCcEJsk8kwoD%2BiyjS7IIAzxpwus5p7sD8Q%2FRXoHi%2FeNcffSrNTbqruIJYJ7wy&X-Amz-Signature=ec8c00d730109b314f30d2e74b66db818e712eed022ede8821f58122580cea20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
