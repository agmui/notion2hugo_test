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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=a3ea9f212d1ef30d355cf8f81c838d5863fc5e428335c91718458be3054a488a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=33e09f7c3581ae7249d5dd59a2596e8d3c3ecab9b0f50357519b93e74e762e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=ef8649498e4f5d542a030fd929577cc1ac3ccf0b92384018cefe5c3a4082cc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=7eeb1c06a1b1efd3fe3f613c51eedfdd046af56c1a92f827e68e733f35445901&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=57515e4ee7fc133eccd88b1cef10ca282662ffdf1fbaf47db1c1de167f5a2ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=8115ae151b58d7c25ad321603ea5af3117911d7035518589378cfec464a5980a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=6b73997040a31c46c03160face6dae85297ca51652426abcfc74fdf8934d1c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2I6RSBG%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz2UQfn7dIT7%2Bz8ksEFgHfDj5pA8c%2FPgLEppZufeD9tQIgae9%2Far4eANQwkRrZ31it7ARnNla6ZC4Ebi9Vuqyc7cwqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF6xAN%2B5c%2BGxLQbpFSrcA%2BAyx9lVoj1xMmWWlGATIXcBcmZRVi%2B7xy9BxS1k5UXtjTAt8Ax6S7U2nRxCnDJD%2F9TRO2roGsRt9hhCQ6u1tJW68Dv%2B0StVXxO4s0L%2Fz%2BqiUYZMhz3ZAcbVFr%2FmB7RohWWt8Y62yDrVwk4wRtvBh8v5wQe1fnNZPXUqlXCTQmgceqKkVfS2lRbW9BGUZ5GqA4qI%2FLnnSfYS2HVoS4SWyqXHsILTuU2xDhwTxu%2FTA6gT7iDLxLNb6NDQmaItJ5KyYg5SRFP5hgnoGBmxlpRIEW44%2FZLo4S0xHhrFVDn3FirN0dZFSsXW5Tj8aCK%2Ftmj8uc58qlpEzRxTHeFZvc95iabCSPoH%2FV%2Fkjxzl3tjlFBSbWInPqxMxbGJ4GZxH1WNtBSuFmh2cTmZhX%2FLAs8MC6p21NBXDkkAmm%2F72xnhjYXWCwUyde0mg4VJKgWCro%2Bi2J%2FaWz8lg%2BgJNitCW27NEMEanf0hT6NIbNURBziUh%2F74RezoY%2BRymeaGhcGccOPiU6SPFI7YXCca4yNRxP16YyBTmwfJVCnBmZuNf3iaqeSYJls2qhbLJWzK1TjCUlAAL7NxD1MX8iOEApruFjGRAKrzFV9Mnv%2BU6OA6zRtd4PthiZaLxZqumBRVAuBNYMOXRz8IGOqUBOLQDuXmWgbvwWTbQfhm%2B07xrkva93aIDL4n44iBBY3R2Z29ZQEvmDGNlrP5yZNMfirkJ73Px7UN%2BWlODrvoh8PTTYccdSZuIsGrfC%2FwZ0phYZB%2BBytO0oydjruWBmR%2FMlrET8nJ7aFPwJKaLDcukPoj47v0MLZLg7YcpNSWBcindBFWbyak6eVui0SlTFyHVRINxdgEDovdvymh1JoaBgCP2A5B4&X-Amz-Signature=3af300c21a6d41d8d01fe806519e3405b2816ba770f549865d8fbc1bc436edc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
