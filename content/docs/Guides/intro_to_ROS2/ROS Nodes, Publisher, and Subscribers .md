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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=68be9409d2e318197dc15467f2aad8ce074529bddccf360c3c70d08984cf6e10&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=6bc8d6f486a921b23ddf8d1aad4ef916dc6eb6e19a4f3ede391c8e01be4f48ff&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=c9d9d3a098d772859e26490e20e8a59fb8def226ec5d456c6f9eac8fd910534e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=78e6615c9e20ced92d57116de9cf3b849876a1946e17cb3945fa96cf84feffcd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=190f4e181a99ea3c7cdaae5f0f5d8d3af93c94baeaeec35cdae6d5c6b96116f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=fce4e29d7d0b2fe5c71ef87662b671563ee00846a9be53faa4759468674a3f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=8971a98e635a722295071d1ae732411a88fbf0a6bdfa6682bbdc83e3790d56b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5PZIJX%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIA1HX0ax%2BYUML4CqX2TNkZmca5VAdeMVMW72L%2FVBEpj5AiEA1isoaPB43%2F2Su9Z44AcaGtx30wtqOLMBb0M4Jmp7ipMq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDGPjTctJzFSXRSZRpyrcAy60gdKa9YqUF6kCsTorymZW5o9Q4GGdAxXkPP801cD%2BSZ%2BzpcL6Q78Inhd1vLqwS0A2vWOsm%2FjTBtM2jJDoxgAqX5%2BNi1dJjoHR0DG48jkEENC2Zk2Lybc8WJDDbCkshRL5GTKbgx1TLJZ1hrb%2Fjm%2BrfiFtbwXQD7D7KlvCyTYvs8mi4YoHoMPNgZKOqSKVsBi9gi6jtfSr5r7wBizV2PwmFqnkFTz0EjL7nQWxG89xvdnG%2FsvlRRzgqUSHT%2F8DyWG1emET62D6QwSHNGOKWBpShwNUpx5URQD2rtfHb%2BBG%2B7fc1FLgEcJUswx2BkgXtduSMMQRf0dVBzGLj24TiJjjJUHiAGN4IqVE8jVNZlP3gS2Vuvrw8hfgB3BXbrUNuALqYd8l0mmjpy7VXiU9nSyUgsMtbwdJX1XqtdkLut%2F52kcj%2B4QprEIbQHPAHp%2FFKYhizoQFE3q%2FiPftRqRhTus8qj5PWG238RFrJFxp7QKmYAVJpz8wnpceis88zlDenGqFuTE0PtEquM0kuLDs4YQYEvOsgg28YF6n%2F4DaeDGd6XV1d5ZXH9tGCi3O0LPC9T6QsFBYrBL61H3CSA5Jtn199liHnMkshCkPdzsLmhU18g3rxMPU%2B8JtcYAOMIDY%2Fr0GOqUBek69Jpd3L3Hb7xRkV88bf25hMivHRYPgCU3umyZWH3kJ469fSD6X3bx5%2Fa1LSiilw3SodkbeGM%2F9xUsJl6%2FhQySCjnQ2T3UK87NVRpfoSQeusD1PUbNjUUy4s5LXM8A3XzHGoyrUxpG6RmoaHEag9iGJIpw0ZKok%2BE%2BkioyaCRfsIALnHGLjeNRv2wVv0rETxSJ%2BlvRwWD3VpntCXtI8PahOcYlv&X-Amz-Signature=43c928242a8ec07cb2f137a5e28f5fc2871cc9dfa09fa91f2db6b7fc9fe2be49&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
