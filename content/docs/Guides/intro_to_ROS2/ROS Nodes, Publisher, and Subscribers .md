---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=aede5c1c55c71378c46cde70c23708818b79939b4299d1d7a7a661f77e007525&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=3ab50390e4672d737a1c4ff0157e73598ddebf8ec76915a5284146b0f7972972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=6cf09b268e57d8a4e0f71cd7f83441c2b82a8fe5eeed6b70c085b64ef7706242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=8406e50e2e02cc98028fae3b98d4cc93d7c0cc789015f7bea1e39e5228cf9cb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=6a0df74408d6deee133b85240abce4a83de8145fce618b24ec71aa2bdb8276c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=54625027ae836349df0176e8c7a48b6c443c43dacc1aecafc3b29e6ee32efbd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=d65eae57ea697dfcbdeabc152c5bd8790f7dd0975d4a47d5e9b82b9f261dd72f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLTSCKCX%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQD40LhW8aOD4it6AR3twCk9t3dmvaTdXBFIVWTS678u4AIgcPXzI%2BeXdsz1OOaEVq76MgVz7jB8Bvyt%2BHa5APFpsvgq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOqJCAdr6qP6c68A8CrcAywLQZzNdywkMLEndMpdFmo9cMC0EcLLV3pe3NmRyNj6DRdFGxPJBXVEz%2F6GTHfFM3zqKfEShBGnDTrJlV1SroGiotCJN%2F2d6L66N8UXYppy0BdWMRkI24goQcmZvooA6DCmzwa8RzJ9COXtWQu%2BPLi5Vn5h3rt7oU77gj9wOT4cVL9CUoaugU745KmcWVO67L0OJkBTotb%2FTXK4UTjjC%2FXt1vD793JmKr9b52vcR65sbX74ZyDBRvkp5QQYt%2F51jcCcOyRXeh8BBEzYUdFEoZMpXGPV%2BJcyM0KE34wIE%2FB6gjW35rHj%2Bc6syaSjgaVg7aVyzu%2BqFdhT3Czr%2BrtOiAUWQGo2KypmykxysJUqLBMDZlswE2D8O6hgJQmCo9Hatvfmwd0SIUh8UHgXb1rwNUBvSRrAwjm8khdIKI%2FZl1SMEKMGQ7QviXmbwU1jahe4HLB8Al7ZiWJKTu4SeCpkZjosUJm1lBITZgHqXowIuhDl8AneEkM4S00UDcgoUgYb23J7YWFo5lUhdgQ57aART4qd%2B8Isqo34WfgmSpZPPW4uGw%2Fdae6%2FW1nMRHX6nfhOHFs%2FJWu1TnpXQDrS56qPHmkL3Mub1efQVuVqh5dxzUuA3985S%2FODOX4wM2vwMNSKgMUGOqUBTvLWskXbpij5CcLk7DMVGj8FVWOlfmpco1HGJPIc5%2BJ5eGlSKRZkRjRY0eVQoGtFmGQOhrc2Y9txdEh3wjSjb027N6wzFwSUULW519USx6KeXyLDg202jHoDZuChEUB1ufg9OGqM34ifX8KsmctZW5uA%2BZZTYyYXeSd6qI1E5pk37fyqF2OrMT2yuO5awywCKO1S7%2Bo9zyEX7RCnR%2B6KjTfglRJU&X-Amz-Signature=677a6e604ac6737d0c19fc04e9fa7bf03604393a05daf85f7480867a1cb14404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
