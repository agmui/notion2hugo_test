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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=d3053e8f4000bf4b2fdc88de990bc54701e7948f01f3efe34a0335bd60353120&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=1551126fe94cc7896aaa51ef52470afe75abd69ee46943df112e5b20d9c4a7e9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=40cdbe5af1e903498023293a2399a6a7a4fbd409bbc50701a752bda6b97cb958&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=9a4a6ee190d2925f18f6e98a1686b6c213fa063e682228a77a0b8e57e18918ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=3f7fd0ae6abfd6d706cef8889397026165fabc40352ef605004d21de8a6f7ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=68577bb9b2f97e82133cddf7c6e83fa291f02bbcf1b933b9a490058b1893a6b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=7eeafa43bb1576b6a0ba3d5efbceb8d33d72e7b06ac8972337d5ac9b4f6e73fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DO3NQDP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T041054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkAq0pbvwAn9NUgxgVQBRbXRHOEA%2B7ru1u4tnpuQYZzQIgbTVbSjwnBnBhBmH1cXXcDTlvwLkXcuP8SXdM8%2FpqQl8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDLmiug3OY3A301GmyCrcA0jNVr6Nr%2BJavznl1GqTefNM5GJ%2FWFKeVeuTrZ54vm70CQ7GyxyuD3rP%2B%2FlYgCiJ8bLtg2UBQnoTjYn4W5tEqMXh052PIZSDU%2FfB2k3BC%2B3WTqrbAR29K6V520LHJ58R1iQQHtjs6hd7nJuXg%2Bcw%2BMC9CLFskyfywCF13BjOVDYsx7kdr4q7FldFPLu0EL6NHuHccM%2BMI79oS%2Ff5d66hUeS%2BLNUZgtRdp74OTuAOi07GSqmDaS%2FkmHyfwq%2Flbt%2BEO9jOA96EF%2FR0luCIPCEkZYcC9BE5pGB0y5m15Ly7ZGsCK67xL2b%2FQ34DAK%2Fa%2FadXyx6QCb1N4RXls1mAplsSeBUz9mUdiujiL0zKfOi0Re7NerqPzYS9NPXgVVjC1XQeJNuA1LFB2auqktQwLEVd7n7SM2%2F0AwXgVDpupcF6I7EcmJt%2B5actyafRgm3bVgFhFP78nQZBxHPjM08WUXaQ177l8CaloLcmfNSRXs31jARN9EWAS6MUkoRxHm96mNkO5JvDxy4MeEjwogIeSrLvp8DeT6%2FhVPm1RcB1zpcZrz6P%2FTYYxTXaMgjuyZPyz722wVzFNxZqfElZBV9N6qlK6zsY0y3v51W5QKZ0xmsuNFQwq5ngQpvZuqPkhUNUMJiPh8AGOqUBouMshtShcCWl5PioEvRyWkrlrJ9jrrcAsxDHwVSd4eFFclse%2F8q3ejklBM7Ei%2BkZUFlszOrQYP58edZz5yfF73sXlkmQA20M8gjNxwZdIcMqZCs1BTrSrMYceHcXycN8HdJP%2ByQD3Xrd%2BxV6gjGh%2BuX%2BvygJT37bw5LISqsoKpTVroOczw7SFtvACzm6Tx9NxWCgLtZ5ZDBieTzVARBjuTnjfpR%2F&X-Amz-Signature=50ba768b2566bcdd1da07fc2fc035647d451a384e5115a69ed77feed7ab33edc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
