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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=e87b054299fd63066344b249b677525203209cc3a34d3d9c8072a27b9800f386&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=121fc201506ff683fda2f9cc83dd8a1d11da7747b01ceaeda262a96a4b287bfa&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=369ddaec7b1c135d3d8b3f28802174ade5ab684e4d581bc469c7e49f66b36099&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=9dd70e0ce5dab75cf5a3ad0c9ed30894ec9e3bebd61d12582cf90cb83c893ee8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=a4b0f94055226ee3dc110c5d159db0323e0184fdd89ea43d824b8b34608f18b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=f89777fa14efa063d636c3eac5b3af2f10881f9664d2433d96ca664d5210cfa8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=be5b80020d1d47a02ce7dd7370d05c1504988919a82337fc8fdd8cfe295586b5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNPK3VTH%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T020753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIQDCVWx1QoECCiG125i0pEhzJIVLq55CO3HftCBcxqBIWwIgMRnNQaokluhZFk%2BQbLSlAWLbKqTpPfEGXrmyk9fBa%2FMq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDGI4pOtnBB4kLdpCjyrcA6eJ%2FG1xFayHJtNTHmL7fD5CSFgvwBmBkYEOemcw7%2BvYhqvT8P%2FH0QjD5fT5dhRxngzQqVqDdStcUmpI%2BgUtBQq74Uxkmen0ynj%2FlV7GZ3HAxjLoy9SddDcRIB4ldHMpzfO4NSyzybfoijDgy1vsPS%2Fdgyh%2BhY4yV6fIPbiYvGI3TA%2BPn7N7eSslOsedMwG0qbVV4MFjP%2B57oC6ybQ6VCu3434VpkwUDcccAnAWUF5CWKIGt7ZA%2BDwaY%2BChLxy45dofk08L3ubOXdzXgOhh7wNEmrysGkvu2I9Y%2FKklepuimo4XQ5H4ABf%2FggLkXj32%2FTuUsSwYRxCim7Z0z9e6LCo%2BeOt4HaqGNpWNhGS1WbGARr5JRLhQW9MPO1NhutyDEWzCJFwMkB8SHTv0KE18vw4MrBRdqCwIG5IaupgeQ494d%2BmX1DPxwNb0CY9HP3b4PKXmRctBMm7PGwz27BJ1Frw4%2FsqysfO6q5zpqShxqp7LS0clDqvhU%2Fw76zpFEomja6tmWmZNTo8Rlj1D%2BjVlE0l%2B2Sp83J2KGMykcuQI39xAegFiYIdnp4z49rIIf%2FyS9InVRz80r4LuBS8kW%2BANQPpwRNVMQ6BZkU1HIN4LOvLtbR8kSCOUvdWpgBKvFMLO0v70GOqUBd7P77905suv0ClueXp4iLdg13w0KDreibHjBz2qyBEebpsVt%2B2a8RIFbCimQtKbHLBLMn6%2FyOIORvciZ%2F6d7Twna7pU2AYv4u01rg0u5bcAWuBrm9r3fRQkeQIh27Flf1cZN3X3i5%2FD5H7BcpseR1TQ5dDsS0zsMMU3K4qXHtRAJxFzmmlKOxWuspGM1SUOe4tMVIMNYAEDPjkcLfTm4utanJ0Cv&X-Amz-Signature=1d88dc7b5eb9ada52882f3fc03b800d87a914abc8365f2b884cfc9574e9d07ef&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
