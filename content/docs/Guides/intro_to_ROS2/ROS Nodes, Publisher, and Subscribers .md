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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=358223416cdb98390104af59beb30ad53d9c82d7bb5fc92bf13e49a40e1d1c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=77e76ac7d908374de15bdcaca4ca9abef6e96e2cadf560eab9f0e4bfbdc0f900&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=a5650020b8ea38549d6041d6352a775184b44ff674c8dbf7c867c4161334c2af&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=63f03842c43ace8a4ebb23956e5b56e2548408265a40bff807f7375943f83d12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=cb7594aa65c575da4fbbdf82c796d280e64bdcc95dba102bbfe1a0502709d474&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=740924bc8d100fa2a7321c71ccb38fb9c1522a65462e9d8dc6b5c758b286ef83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=bc0c6f0c4a5b719d41953f8322fd26e3d62e1b629f708b69344eac0381b557c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MB5BBE3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T121342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCICFJmYmCSx4g6cTGHJ6P%2FBkBIKr7qOXss2RB89arsmFmAiEA0HI%2BCaVT4RbEmYM1rr3vLwNVLJilbfPK3YImnC1jGP0q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDH%2BblkTr7neXCgjX7ircA3vNq84skOmLhRCZq3rKhmGnCsT2oqI9F2njbchEYyDJGSp6JMKnfb3%2FEG%2FSXvw3p0CZ2kngMj5ftYwDbVBOUwFSit7DQxL%2BJkGZg%2B4b2jFxpx1%2FYI1%2B7CJLsv9Z6zkxmo1IaQQC4kJr6OZsGMyjU7ge1lOCXue0E0a8FY5aP28SBzjzA2nE9hbDDMr8BIHpgE3mO1fnEOMbuS1mRoWkZyv8Uq50rxLrDw7xalKbH5PSN881OBum97TGW8Rc3Gy%2BjeI7gIoRYbHCazUAYiSxMgztzePDSH5CWJGWDXkmFVnHJRSJX54%2BK4mh7tJ7dpuPkozZISSnP38EnfuH3MuSBWAOHQLm4SUmNJHIgk5BAU8WkjAYiNFu7Jc%2F2PjuTdKO0hvBYEaeVJwVE7jfxYdzgnh%2FZdWndQH0S0kKZdqHFO%2BQNKC9kEbzAb6ZeZQHmTWpHr7ZRJnQ%2FQU%2FC7kOEER%2BnchodMyUHTN864Q7I0L0bEdVA%2BK%2BsSI%2BjBy3Qcn6eUl8mC7amF1ex9YzrVGGo6s3g7mQTN%2B4UTEtZhq3Dwun%2F8MT7g5Jcftp4Gq76G5m5cPUU3p6edJCwOFCTK927kQVz8PMNyoEk0498sD63UbPAfxXTnaGcnquN6iL5Rw8MJWyvL0GOqUBHFMgLmgBOUsdeIf%2BSSpgsheHamLGG9DowNpfK7ffeaUzTqi%2B4Ekq5oDfeBRp15xT1eBKxfBIunbQhQY5tl5L41di6xZeJWHFBlx3J7UQjJbjCIEPi1i63VZYxeRo45YHkNzzno%2FuF0T%2BkfmESKOxb4UDixOfhrCMizoR9ixXBUElxWV1wj4bNhBx8g8foQiyUV4SfXc2GNjLykYZrCY%2BuIIURzkJ&X-Amz-Signature=bbbac86d22c10f7a017b5af65b6e9d769611360b2cc5b0c5f1556a4b8c7e8224&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
