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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=2aaa50c0f4ec86b08a6a214a75d323bffeac8ae93dd74b0a85ddcb1f030d1cbb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=a989e0a22825f0f719c2fc74b66f2dc099792d7725eff7f07e40a2c4feb45d2a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=9f2c83c72187a8c4c3f59a00e62f4a7e72cf441f21ba904b2e772f5c7a76cb95&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=2c1602298db653c4361bce9e5edb87f5693c82a39fafc8c3315552aefb393e3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=565ffe65c91e03709e8a5d20153b762a57cce8a0c1d0abb55ee489fee03a3c13&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=cfb5f749ed45b0c1dd367d99c802a5974b53a36242f230c2243be36e79a640b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=3a3b146c3872226465032d0ba507aefa544cec9955321bd3799b2cd80dd24b33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MLB625O%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJFMEMCIGWayqAApIZY3PohEzlrXDuANWZuSCpMl3xqoyV9yjJdAh8lHU2KjE%2BlGakBBAk%2FU7FmM%2FOONAG%2FCv8jScgrn840KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwQtRNkzbGFrVGOHskq3AMMt8sdrlAlh8GYcyBiQloSBcAlXNIwcU6DNmu0CRWjB58GwWe9HbUpjWTvTREyYwPaC3ZXX8U1FSwgpkm09LIeHNyCXjRMDGVYp6ZEVsce6L7HKLsFNlEMExBndPBM50dBoH0alm6LoTvs%2FrYbwfFsv87%2Fl4LeAm2JygfOutIMsa7SoqmyibNQoHNV0Qov0b701XDQEuLJZiuYeaaUkS36VYz4q9%2FW2JRct6aWiHeJXj01%2F9%2FipxkpTTJ4nYistOc4tHeXuBct6xu3vh5508C78d%2FTnVF9ohBu4kir5Rk37nHfKtbEKt2NSrknC%2FqweflERk0Eo%2B%2FWgMObWPew%2B31FQXq53wUgMxbrWNiAT6WxNuwQxT7%2BCyKAA7bE4soYJQNbxIndOLV3shngnZ279qozOgs7xbMhWcMlUvXtgzMfHA9rosmKq9wfE%2BMytCPMsGgRdC%2FYsEMLkFT%2B7qDS6C64XeVfZzwYNcOK0d5b00U%2BtcvQMEYnEZHckAkMbAayrlVxyygJtI92SPNSQoymzXCXqAADTRMnSCnIT5DjrpsUw8DlSWbApK1D0WxKSfNe2ji0vWnSHoVXYo0lQ9QLmPq2kghibSrfEOieZA%2B0It%2BNZF78bAYzpyjq7bbdCzDx6OW8BjqnAYUXVYqfG1gN8Y51sSb%2FFCJ5uOfvOnHPN%2FJkDszU2nn4Ru2Mi%2FnmGfoVFavn5IaqK6Mkv2d9K%2Be2ZlQbmbHXRcAmftmJvf6sbXnFi4kXWPVDdVHy3lEdvs%2FITQACe2BXh52Z9Bl4u5YZOSOxfeHvPFOfbUOPncnFlJ3e2ZQSO8Fx1wfANZkZ0bzpaP9v2FUopg7sfOwsWU8XQMG6qddpig4P%2B9A%2B6R%2Fn&X-Amz-Signature=073084d3a30ae5136743290ae57e896b73eabc2647f3ca23f47a652aa52791df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
