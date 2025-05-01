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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=97034225009abc8c47bb9faef4c462e774e1d06f7c5b2e9be2e72b9addd61493&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=e0b6ad4902c9bf7d39159cbd5920fe5ddd87cd1319941c140a46be235d3dc4a5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=b3c8a1645949b1000854260891be2b4ce20394e9ee6b6eb47d317e0304cc879c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=601abf706d4967a25bb370b5768c1e43a257d647231f599f89e3cda60398574f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=d5979578a3a09007e305882d9d3bd6ae826791b5794539325a0874ca85a9c84a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=15c0b44fd6f2de436169c249ad22840e3f166cd08a182a53eee75552dfb39c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=da4a07dd01ecb180fd039e5c329bb859cd73ea5f959b061c485fe814fcf8edbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZT623M4%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIQDEkTzkEl22aoWDuda%2FvWM7t4Pf4kOKdXQaKmNyh7oECQIgISx4P7F7DiyS4DkUIX1frE01aYPqcNuFDp7L06Ei%2BiwqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCuy0DJVpMY%2F03o93CrcA5T%2B1CCqlw4NcMpAiZfg7kVBGggoyjbuJ%2BwuKXVeeD6%2BBz0y9KsWkayxDUy2lf%2BR2vCRoGqxHPpcumlZjxTWtad%2BZdEE2IVKWv21Ka0pzh4DKlVb1XrDNERbWgWJgnrgleiCrMW%2BHnzME716oa9gFXKVHxaMXenYGA4hXYg4KjZb5zLxwFQ%2F%2Bpuq8jjzcA%2B20HLcTrJdzFrfUmQcPnkdYisfKTWX8X1mAA02jr5lgJk0OfngQXVG3OCWlGY8xs8OQ8LHm7gZ010JE%2FJZhzEj6N5V0kxmcDzFr1auwgBoI4e%2FfgEDW2H%2BaTsGVvsQ3BZ7llIzvzcDGtPNpPv911t3kAAjpfs%2F64GzfCLAG7wvto86n8m3qif6YL2AAudoN5IDaY7Dk0osDa9vLP%2FoacbBhA68cCU3%2F6A5e34v%2Fr%2FMvRt%2FO59pHcjGlcMQcB2yLyLUgG0xHD3HWZ%2F8%2FOKBJIYic0AOfFfUlxolK7IuW%2FJeDZfqr8tR9NOp0v8jx89cXrM2ftHpkOFdKzAfpi%2BBapYyxyOgjD1x%2FiUUmWOH2gmdB8MJljcypH3pDIx3HQ6WgCQoLOmgg1fzrDETI7fLkstHv%2FNl1ggEdrjTiu5ZKH1umcDOWJBfGD8%2Bqn3DC%2Bz6MNTqzMAGOqUBxANp%2F7R97pk4W85XJIpTDEZq3ekNccMzQrNm0iyORyj%2Fos4%2F2syWggkY%2Bu9O8zadZ65AeYxXSItYzTHXjN9bYfCl3UNK%2BlJYyHTRLimScUVFUhfKedHbezz57hrPjkfcR0oR6WOCeNaORNuIIN5pYn%2B2fP1%2BwLVDlbfxpoEpSZh3tsN5KCD%2BqCaF76VrIlCSwKLe8boQg%2FTh%2B2C7JKsIVVcx4fVJ&X-Amz-Signature=eeb92c8f69a6d2a026b11010e7abdcfdafdedb757659d5749609b9520a3d0f14&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
