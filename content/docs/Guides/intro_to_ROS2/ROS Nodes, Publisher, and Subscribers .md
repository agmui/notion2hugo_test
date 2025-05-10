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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=524550bf20f19a9f4e3c545ee3a1f3613e8c783bc4f0f77664c389c7aced5a1d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=e219cef41918bba5ce00cc291ef7e12fb7dafd720725bc8742c3978e84b251de&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=e6822f0b3b502fe2b53d68a4d32eaf451c88b957e805f8f468f5ce678a7af918&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=cd3d75591dd365f2f4bc44dea63f0d9a01c06ca3ba3ee71fdfbd111afc3f62b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=80885e0a52dd6cc9c0975a4bfb579da293bd79f661f77f3e3e26819e07a661ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=c1bb4593060d50b96f9f10baf64fa3e057b893595672edef803d7afdfc5555bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=617b3000737f24c682968fc7b2e902e1abc9b94840d5dd754040db32bf3e1d32&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C4K34AS%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0BXc5alIusmqCnl5FEVLou3s1FnvRhtuuALm843FIAIgSoppZy2DCXZF2paPE4Xa%2BDDuMoA2UNoVlDAD9S%2BHjoIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAJr3VqXwnadpHt9uCrcA8vjZiShdjIEx4M4k84dHrakUICNOY0LHiRF2V5gZ6eryNvNFpZJ3T9k5mJrVeCNkuO2cYhnN5FT0j22o4evYM3mIDqvuK370QPEpCyY1NG2oQc9BU4qS6d7hPpH9RLYHkpeBy9em3MDmYOymflBiRTU2XTBUp4qTWmEQrnzwsdZIRB3aEU9IMa8rGEkyCF0FKKPVYnm66CWcJHqid3zQ6gWz7T85c2jDSR8FRlb0ahSyTmI%2FDC4LM4%2Fy4tCWH0MxyV1tpeWTVcK1yzDI%2By%2FwxEz7Pr6ocq9dBCUpFFXbtW9lZe7g9ZFybyWx3yRwRkZtur2P9xX6n%2BI%2FnE8EVAvOSYSdoNyJcGJjgA1r8EhsYmAkMFSCe8QYhEkHgDmeDbL7MJsC8MP5qM5Ha7FJEBW2nVvosh9JitdlqnMcYQbSieYXJfiVKQxG%2BS%2BKfydYUP3rjG0ytetXxcraR1fMijDaYui1jvLJTS%2F%2FZlyUyCJth1ZsqsvNg2Gj2u22yXKPXDLBuqHonaIEd9ZxP%2BWz%2FnEq2BcrPexfN6pnyk7383t6tO6UI%2Febvx%2FNoXfJ9tvMuBj%2BPIBwO8sQ6DCA1nNLMifCh9CsS1CBfvKboMfWklij5uTnKdjZMX1O7KZfCq8MNT0%2B8AGOqUBDah75L8g1ZwKMHR4TRRvkzzOtdZLWk5gaHpZe%2BtjWloh2zVjm5bsyVjbYZ%2B7vtMOI34GRAeAwutFvJEfRmEPsYrsjij1KPCpPF4lpdHyXC1E0fRLP%2B9qED7sWAgQtLKq01CS%2FygBJ%2BTCS58njIPm4WZ0qSilQ1a25XJvJt2Bs6cTwRbWC%2Btfm5yyvSLzCxYMBAWVlB%2BnaPx4mRlF62gsGNCrM0Qi&X-Amz-Signature=50f45be4c131ceb492e6e149cd0a003890b329fe5ce7a2c6fd3d8fc71a5c1beb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
