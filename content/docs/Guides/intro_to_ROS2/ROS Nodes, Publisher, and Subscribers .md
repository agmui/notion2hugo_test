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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=bdf7f4817029a3e0cf018feb79315d24177ee22b3093f0ed3f9949b19991fd38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=f6fa94f1f5dfbcfa56bf7ef7c4e70236d1ed314e1216cde921376989ca43c423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=5991afcf12469379ce6a55418ffa3f351bf22f13ceb89746a13ecbaf56be0c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=d1fb1689ee2d351c98a31b9c56d8f4a27ff5e2b78b13c25606b6303003e5016f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=da809d12c179515ae522b0febac3baf60b7b047cd6bbdabe00e3076480368572&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=7f227243009ecf7764f2df01f1e2156cc64f1ffde2e19e061a663223a0ea16d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=b64847e5284f40322d2ba46fbe16379b66315f1d967949408b73711e595f227d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UHYFZPF%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T061328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCICdjHSCYxWHFnTAQstSPoZzzKeMHK3ySGrej5MLeiWtEAiA1JQO6aEikkU05f7V0kzaj%2B03ARxilqMyhiIi4OKSveCr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMxOz0chJcQtAVRqylKtwDquQ6tJAOHHnoEaI473tI1qmfHseCIhVMtLddM3bg9peWZgsG8uDBn3q2iS4ByLjZ%2BXaZWmv%2FCvn0jsGKf6y%2Fme%2BVN8tynhXubdgP8VbjbjRhc3yS%2Fec7GaKfYi8GrNeD3T5YOSEDXPYLD%2F401VOf7l9WZnzKmOi0ZmAWWWBpTYxC7FkS%2BSUyGQDM76%2FF%2FILhWYX5jgI%2FM55ASSjRNZaM%2FFXysGYs2ieTGDIaMAg0wW2%2FfyOQSh1JO%2FJo68s%2Bk%2F0WPCvOp1p9A6RKzoYYHy1dBGv8ABsyskbLRYJpLCWPc%2FNEwsVONLI0cwlSIqQQeLTWnzx%2BNB7ubrrnWQZjJcZzOaHkVD5girvH1ivsF0%2F8I1zdFasxK6R61gyha0SjP1gIgpHNosWefyAfppuNOjP5Evy1zSM60yssD37LhmuROMD8k%2FowBPYwLoENvJcxoWzcyZsRuTEOB2EWykYv%2B3mZaHUm4tBY17YYhH1lv5W7QfhK78GpGrkUZDbIZ%2BTSpi5FgBflFcldTdIXdaPMbZZ3h8rUSIakx3xxb11zJtPTMW%2BtfXxuc%2B%2FkB5ObYceHn6z%2FRBR2ChRslbOAcw%2Fsq6%2F0JxW2t%2BGS%2FfbsHIbBxYVP050RMwIs55%2Bn8t9ue4swnLLzwgY6pgGuLEOsKW%2FRnmN1IZnn%2BijyqO2IkoPjJILZTq%2B21fbHBce29c54pWb7EvazF%2BMkqgW2Y9hQQ8oIioG5Ye59dSEr7RcnZ7OHgBhZ0pMOODpw5nGarYxmB0McXtZtmcpTZE%2BvXs4fEjasZzCScXW5JKIzPDzH7AaYfG0%2BUuD4lotOHgFZfkreM2Jf5wMQcNcG9%2BKCPF4UB6ZRMlvFX%2FAtHMgRGVwxPkXB&X-Amz-Signature=cc22b1695a3b576bdcdcc624c610f037bfcb7fc98555f48b81dc8b34e921cdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
