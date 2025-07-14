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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=56330224a3c4fc8c9ba6549248eea43ea22c5d1835e2d52020fbc59d66ade216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=ac897a1721da7a9b5702c072c34d289efad61653e10da198abbb619c4fad2dee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=45c429c08098cb9b63c8380c4541fa261c4403ae26e99ec4950582e268a7a407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=8f26c2f2a425c2da4e3588bb7e6020b97ed4097666df12a467b3b3444a1a43e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=7c68da90c76f9a9eecbb216c5165a1c54ccb86dc0f231ac374a87cd4ae626d6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=8a9658eae335bd0590f26351b24d734786ee52525b958f652145a7a84aadb07e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=6181fb27738375b430bc046eba7c52dc1c41fc8d060e3a7eb23affcd4332078e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UVL3LTZ%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T043319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDFcgdlQYoEO39bGf9wHTRAphqNJoiAPZeLdI9sDGOSagIhAMaajmsR%2FSFv7MIOwJJ2RGpZ6t%2BMluPd809Wv8dmrF6GKv8DCCMQABoMNjM3NDIzMTgzODA1IgwJcLB2Yk7dgF9CynQq3APuwKxPbuytHKcB560qaNR6Q%2B9IAhPAObfPqxQTpSQ%2BB2VfVX0svmKCWBFgvqy3g5h9uusOhntRgIvRwhJVhgD40zySc9%2BNHpOQUyefXXkk3i3%2FoCmnMggTCdUDhfkcxY9I3iZJ7CdvTv0JaUPm2YULvETZWRZeB7K7%2FFF0zHmwrW3%2FHu0LYPP7xZ6vTlcgp1YrrsgELaWtRnefMxC5nEyc64Ux1thFSH%2BHbWR0jftM3wDrUKQQGh3sfBksidjSawbzkU8SUaShWOscVB4IjTVvcMgXndgyutxpashIdK8AvNcdKWKA4hchIA2R11WgwIeuvEgGNe3nsSe034ld1MPvnaQ5ZviwBH1W1hoACkZsMDz08hVH4BGe2elVUQ%2FReCOLvyQhErtjO0AGHG0tUbJR624uqUX2XZ2%2Bwejhj5hC4gBHKW5coicVUpPcoZIraRAuHuoU4nHdh6Q%2Bp2I6q65BvZf2A9qSBXo3e9nRDaG83lzFysEeBjlO%2FSpPDdgOwZ01U7EZahJ3S4D5QCcX32rlNGpOIJsm9MVQyXR5OKMXRyFKeMjuLsJbuqFR%2F06dt8MjuLVIfeIrPitThtyVf7tOb20jNHboxNZgBKhCpk6c8dMA46kOFuRxTVZNZDDBzNHDBjqkAb35RBywWfFojlFhon%2B4iZgeIga%2BeU1LCYS2PLcoUkFMyi5TVKXjclixcwRhDIRFijaRTiEWAxngoldTU10MX4Yrm4QtieaIl2%2BAGqyC7Q61D%2Ba0tO%2BXrqDvIY%2BSv%2BQ2NAb2qxJhp6ldTS1C5gcXWjyv8Zru%2BT6rZWP0ECSFeTMpUQdAynmZ3lLBHh2S8V7PjrilU8OueB5WOrQzeUZTPTc4ATUC&X-Amz-Signature=372dd49e57519154c7fef7a69be1f041afdb604cc088e974d7076819a0c90aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
