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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=1eee69c920ca8f76aa9b08b464e59366e6d3a24c005b2413fd170a04ba5d3ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=c6114e4ddc519fe6910868ad3881b5b732dc7af2d3250b880b792a53d33ab20b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=965a80031b9ccc4f4c2e6b7c2fbd513c58136d90b9729791b4190be06d5bb142&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=a96fc1be708cd912c7ad81fdde437e06f3ac51b03af5504b01797b5e340ddb32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=2a9c6c0709d25760475515b4b74f30a0388c50c2d35b367bf1e9f49c6103df5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=b506ee9ef1e21f6f3476919ca06cfcde6f4008abd3675c15d701a94e583f0b7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=e2db39917de0a2c56729a312ac33200a9f9ed9f98e9e86e8b71d78e202317974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RJ65WHW%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAmPrBL5522o60ubdTql3t6cRuCYi4Wp2DMKcSApQY4AIhAMHDXYzKoX%2BAsxETIITuT%2FvRlXpkHpe8rY%2Bt26eX164oKv8DCBAQABoMNjM3NDIzMTgzODA1IgzbWlj%2BQCJy%2FsjsN40q3ANhF%2Bfl8o%2FWMYocy%2BQNcq7VXaaqMdGpx5RkEeTEDUx66d%2BBu8xHUAEtFf5hocX0RSgRoz0cbGjGbYujajf2ArBG4GxCh5KFx%2B96QqGTk3oT%2Bk3VmLtq1Nk8zRcMZY7U4WviZnaQuz4HPO%2FGLHI7Ck3qdbzIzD0XeGO0o3azaSPvUR9p6KL4BPv7dW02hPA8d8LsJGCsF4%2FmoacS1x0JzYS%2B2dc5dOd0uaH4baiLoDE5xkNZbXHwIdmj8fEMhE2fDQzhlyOCmXKFFBV5rEOQOJ%2BIbmx%2F3mYPDzHBam8Yx4rStgisXjL6g7k3fZfN3nb2eXLnMvKvEKC7V0YP%2BkwkQu0v%2BuXJGDcBQMTrkmhxLytTxqWA17v2xj4AoYJYMPyBt925V175HFQGd%2Fzvln0nYjXENLbtSDQHoVndUHX1GFnC8uQbQSYL4PWhajS6AvpBvdqODMKTrdmIvgMhfghnjevSqfEdXCy3J6u4merm3ganfP9FIc%2F1jcErPsmq%2F87zbforfhQPifnValpe6srlP58vIaMAHFrQu2tTewFTOVh1ZShQad7I52nPhVQ8lvEjCRvSX7KCi%2Fc5Q2V9k8q0N%2BnY0JndCLrdiR2AcQ2Y7WKcvnYje6cBId6H56vgBTDi77bEBjqkAS3P18DJRTcKKPWqiwWu%2BxbYZfBk%2FTwDJBkzaSvOE8Rsc2WuCk3V4XP0H9MWc6ZasR41SIKpQl6Yq96FGsEfFBt%2FCQKN4L6%2BqJzZC8dUZeXnSJATsXqgYfybQqNzWL26Sb2jobIU3zAEToCjEVLo%2BOMGVli5z7oJoVEFSyPm9OmxzKna8Ek54tQjSJo78kS5aiVrEhpVL2M%2B0DyEOX5wdSbRO51a&X-Amz-Signature=094f9b3d93efcb87e95ad7f37561bde193153f9c4d9b7a0bc61e63acb7ebda44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
