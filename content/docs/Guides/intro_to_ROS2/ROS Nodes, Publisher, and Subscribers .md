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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=a267ed3ae7cb3d9f30335f607c97aa813ff60be83aea1d0b1001c05c6090d510&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=48277560e09c6efd8574a0cf5e5e6cdbc28e9e1c788435cde2be02c4b7b2aad6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=6938a0f1ac1a7f956b6f2c1f1580f4a8b9a7cbcea41debe6d204cd5626b5300d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=e147ef57fced7b3f9fd6fd3ef4adaf5d0326ddbeb6232ddef67b04132aeeb272&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=4489c789d368f965a7aeaa0814a7d776b71d9cc33c3a4467bd2f173598161194&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=4b3826704916cf9eb7ffc78e2b232afe97c494764b2d852147c577bcb03268dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=415888491ba2760a491666ed2e3338b313b2a20790361eb660bfa0c7bb6b352c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMEEKFFZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn1CA%2F7q7%2Fhgex9jIVqwUSzKGE9p9goariJLO%2BNX74eAiEA37bbT3kbVdUDduCb179jjR9Q%2FAhSW0%2BBgh%2BWcUYkcYQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDGEDL3EJi4Ex7DSZOCrcA8JoUEnBWg3llGt25oaucAtiTTzXg6xbxCd0G3FsR7Jqmo%2B%2F915a8kN2M2Dl2i1YSCTEnJh%2B7PEBBHV83ulz8t%2FsDI99DaQGEHwVJzC9K5yR834rIVcqp668DMuiPDFBGc%2BxBYsmvFfvipB6IYUM5vGxncl3fHycIhXzv9PM2kh2w140SMbmJOrTbje4lQXC4UOK1hohP%2Fx%2BxtzNw9tZcytLmDD1n8%2FW2IVSxbewoeMdFCpcAyAyAA1vo1Hhb7jb3FrIeelUucvqyqLfxMeF0IO06WKCHGrFRx4JBHn%2BmBbub2v3cWp3t8uYeRjq3jQKokRqFb1g2WIh4bwBdrNZ3WqXznJ3xxt2pf3ib72fGN07lXZTm1VgKa23bEabIX6C%2BjzB%2FueZuh72%2FhG5xcQg60Ob51bMjHS3ufIlQoZXty2nYWTOR3YWgtZ%2Be6uSU4keW%2BKinrmTp64nDrC2M%2FxCv9OCbhE8LuDjf%2FfU6h784VF2bobyfKl7npYgfQIaq69Pwn0WyHLq101trfGwRJCkiSuIw2Ykc3ItDo4tLGaIcO4Q8soylXWR1Nck5ffnA%2BjbBVdDBdopndK3FlamQg6VzkcT5m0zTQbHhOa966Ji%2F%2BNmIONiIq5oT%2FLToXWIMOKKusAGOqUB4ZCX6TwcsWZwqnyEDJloMUPq4lQRBThrZq70x3jvbRTOFILdY87RGv8lqYJGI9PnV6jtbCAyjddeJsPae2SBz20GelU46Ayzi1GSvwVr5CY5UvEkkiO6wki6GZXqIRIwWrGxyf8umCehQMgefUR2F0ouIMpwkudLSucpwoSGkyWB%2FPSQullS4yn45lwxnDJ5ysrIVBekWbWHz67Xvs8VqYdcqgB5&X-Amz-Signature=23b277dc3e095297edaa1fa3d03cdd8af6762cef735382cb1b6d494d1423a496&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
