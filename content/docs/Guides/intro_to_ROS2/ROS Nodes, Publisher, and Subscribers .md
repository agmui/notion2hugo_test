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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=a61376d2b489ec96c3f4d1afb0199e71b646d0d566553d2c0b3763c6a6556656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=77f8462e8f3d1fcb4dffec41a736b841ae67707faa83ff78126652c72db54dc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=2c77729c5adee103121620d8ce5f87dd6a34eab04e608ea6cda789b1016129c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=3a18e98f453f11da4324ff393219717e70f6352786e790c5f65d3766936802cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=c40f3bf0e5a20599058194c6b4db32a48b4464f66ac0400e554d6ae0421966a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=a2848336d9b116e303ec5a3e22fec3c0eb8d2335470ee67633e784f72dc8cd95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=25c3fefc95d7a07f3f5bff10c3da5c56f5508880e10bfe8786ed8449efb84c6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SEWD55ZU%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCICEQ1sGbB4%2FeyHDhrOqqkJEhXc%2FF3nI0cgpHaZUa2RNkAiBoSYQv2FXqr2dX1HManeU0bn0M56DbmUKCi5mW5Qn2TiqIBAiE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjFNSCulVnCqasZb2KtwDdkMeP6pCYlMZvhLiRbgmlDuGJ1L%2F%2FKVaqllhPYm6aUR3EDzByMVrMAtZWs65JRw9RqWKZQuwanChaCpZphu6hl%2Fwn4Wc7wmY4TzJ405VMJDOtvw%2Brk3rHZJcD3jI1oex20Q735h8YA7OzTtUmOqFpBEENXNA2BJxKSPRRab0njW4%2FDaSDiwCVzVUncHz6hzpigBGhYozTBn0yoVsj0ce4zlKEASAdwmP5EhdJ5kroOJu7hodKtfcRYbm%2F8rngCx1fGWUSdsnRaCQjyZbh%2Fp7mPJk154jp%2FCGTqjglZqUdOFSqRbBcS31pTwz11w1ilQ6U3ImUDkZyzt4pANRqBbJlOwSuB%2BQzicEoaa66Q9nHoaTblnKGb869z%2Bp7BHezaQYB1lkcsVfm2cEW6lK2147ct0yfXmz31P%2B2MsKdpHXI%2BNasH6j0ErBpzeIRaL2pe2ngPkKcdQgxAQZq1wfSnNePxr3G0y3dAujmUeRAIp7xADvl38gX5yN1b2CqMWTJ6efqRABUT2r72adpi5njJFSP8JmgLVJ4t6GQYn32cRsaXg4bjKN2GP%2FAaRZJgFNgKfjjnFU%2FycKsPiZhsgr%2FvdrXtCsjxuoyvQV89FFnUDfCnjLMSJ%2BGst0gXZWv%2Fsw0IOywwY6pgFs3HmLI7Wyfz0AL%2BuJ3Hlv%2BLKR%2BPwQRQUjxIFJtM%2FjemLd6mzyst7I6msbLiK0jq78eVic4WirxkYFjS6Ez7no15%2FPhA3Iet5Wz8u%2BrSjAW0XaYKQUILXlYmAwZHILMBTuYq45qkCrpBH2EnAHCEaP69%2Fpko13NAXi2wT9JDQ2sC4Ezoi638hsdQFkvIJfuLYVI4repflgJ7OuivEenquWwvLIJasI&X-Amz-Signature=f9f50a40e7effc6ec04edeb22d3b421d070f282fcbad310e22206d0df1f35415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
