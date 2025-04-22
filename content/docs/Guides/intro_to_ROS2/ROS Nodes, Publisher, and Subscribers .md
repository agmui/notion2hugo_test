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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=1e42c2207f174e5c2ddbd1951bb5b0feac02d66627784f22baf3da4d4f42306a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=bf7b4282c819f267247a4a88aaf7f378559c749732cac43feb463b372ebc0198&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=8c57f136961ed3b9db0f6f9ae546d11307e1ad9cd279e15c894d337f3c34b315&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=e673bc47dc20b1f3d0549175c6d2a0548d169ed1b3ca93cd54691501746ac9e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=131b55a9967fc969fb1ba32d6a261409d0da3aed3706bcbe3e705918d8b32441&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=70213921efd347ae468da466848223c32a765da439cc4f09704440a23c1f724a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=7ae97bac9020eb1fc7be5de2a8e238ccfeed94ec6a91306a99e1b31aca94718c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTETTIZR%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIFZlVgrmXk1TJynlUV0F45EDlIw%2BvPRlvG4%2FP8MDfwC3AiEA%2F0fkAG9a75Bd3tef%2FEqiTdnqjMWLS3GcUvp8tBbWmXIqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFesClGXaP3Cgr7OISrcAzipiP%2BvPE2B9eLPscriR0TOgFul71jGRfLh083ucxpqmZIjRytRqDpmBGi4ES0oZTUgZw0DLJapYFX9hqHMMpKUq58xIMue2vWBOObBXuIqR9WftHeX5BTiutTeQ%2F%2FXaOr5xP27Lawv%2Fxco4EOUXWIfR5oLCTQ3fu8m3uCOPpiVuK6NTTlAaAT1ip%2F8ZTYKMsLU5OxFqfASJFGRD%2Fo4m0tWwn0WbomE%2BggLfS1V4jqlJI0a1qvv59H%2FmMzstu6KKfJUwh07efOpn6%2Fpw4JPSChyWpi2%2FH34aGW12V8I4x1bYWhkGR5O7IbDzY%2BEhjepfZGCfKTdSJu%2BSrt6bu2nQANCXzpttQ8WjptFu10kCQ3AzrA%2BeLvvgA3oPEm6qw28ih4v8XV1RZGu7u4ByMT95MFCRJWnxJPaTDi4oUX3Eq0jwjGo7zdyPMi9iFeFYJUATcyFfa%2BeUwO9v92OT749ueoUMv2aOwg2nC70uz9vMY%2BKedsUMJk8y1H4omE5Sa%2BKJBlMuMqKMT0%2BwbtuQpl6%2BLi%2FYJK2qH2LPZdQ%2BpUEpk8T8ndw8eiB%2BWoVZNJIGO3rT6G2uspAO1Uf0TYvAupHEQO%2FiGqrkvuGr%2Bi2OLf1ndUFnM03T1YvXDhEr3lYMLnCncAGOqUBeqF2iBy2%2F%2BvBXK5CVHPAjGu6fhgzjBxLCETL%2BET9uRFlaYft3su%2BK2OjwydRH5KYtaRN0Op82Xu4X0IxnX4zTuyfvjSYY6TN%2FavlmkgULWLFaoXK%2B3ApAbxiDgpbEa8L4fyEugga%2Fu0P2L%2Bj6zbidRQXPoAKrDs3aIkYJ2oD%2B0KTufZOgRdr1taULbMn%2FGVaTNw8B%2FuZNnVuwZAPu8jxggMqRPPv&X-Amz-Signature=a5f3cf2712f47410bdc265f13018468b3051f8c750a4120df12ad7f65f2fdcfc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
