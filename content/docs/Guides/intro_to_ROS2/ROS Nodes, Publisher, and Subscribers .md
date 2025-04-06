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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=6dec42813244bc5dddbfee5c282b7c6fa4236e6fab5faa085493e00b6db9e42f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=306c70e74de65e6f87660df037957e32caebe703c279d160cf50113d0ea41223&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=c25251f542446d307adc7f9d06f175cfe1decc11ce0a0e7dbfa1d0dfbd755f2b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=2b2233214eb757c70f55d9db2dcfc5e4ad4edea45048ca4cfaf58894171a0104&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=42910a3051e88542e5dfd5b8ee48082f3b81f4c76017e74e49754f89ac0dfe70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=55e1084a06ea9ed045fddb0fe77e1d18b73817efb5d4a9fe72c4ac8a804b4720&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=83a67309746c4e7e5ec34f1fdb75e11151476982e1061afed95eb81b4c52524a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2CGD5HW%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrxaHGxYCpvhFJeyqw5ppyKGLwVp7mXNbHpyaR1W4otAiAb0Ir%2Bu9TrA9NtlvS62VeT6U5QhckZv%2FwmxGDqmTvg8ir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMfxVZX36zSJywBUfdKtwDsyMy5Z5AB7U1%2BHIptKyirGKy5YHl2EucAqP%2FYVwuyK6QD6dU1vcQpNHtdtoLMdMC9a4I8kHfON%2BbZNP%2B5igSBoDMsZoHVFIvNocD8hgOx3zlIiCZMRjcugq7Bc%2F%2FCx2E5jmbncGzAkBWcJR5cyZhnDAUAloGPXFBGFTzZcnF7TP6%2FkGGYZKM6JuxI3jncuGhcBSQ%2BmYRGsIXWyb8v8ajHtjtzXDr2PG%2BOdgOSRamxKqj6R1%2F7kiCiMnH6P5O21ITT4M1lqW%2Fs32Kpni%2BjaBxFqfgx5oGcLSy93NQNXOml3Ngd2oSGB5YBr0znn2Y36JrOHHbiIGQUZte9RyxsOMO7JiWchoNUyvZZB8xfRT9O1kddrkcWnuQfr8j6m3iIOEccD%2FRPSPjSZc9cxskk0LA53FAuJYvB%2Bq2dKyrLB%2FJUYNBCsmg76Qg4mlUDXaTKBiitu4h9cwErwrId6JtYgIg1e9cNfK393qb4C701SvXEpghDLhHIHj%2B6oEcgA8GyljvifL8Su696ZYUJPoMRJkE4JTXxsOzo51O6v06sc3PRNNcqQONFg8nJUWFjCgU6AGCM7iZepRwhTS6Y2oonI1FEq9zx%2F4ZWL4%2Fd2Zfni1J5CN3zIXdbkZTjrkjpbcwjqHKvwY6pgFbtUtp%2BEteqXSKMXo5qcCRiIGHSdbpH9xNB%2BWTpNeuw%2FcE6zgoR30mkB0cqnluMZCnXQFEppmSsz2g4tRMJtLMcAAd%2BOlO9YJywiVECrxqeRDPluCsKBgr78IPuohT%2FwEgmUrFapl%2B9Rhb8TCw0eteZh56b7NqFB%2FYQkA0dLDp529DsnK2G8yIVrZBkkm6OjOw3ZyWpSEf4ppuldQZUgKYyLTgPLVE&X-Amz-Signature=905866ca94801e6fd0b0ac39bb2d887d1ae8daae2ab092c76470e6876cdc9d0f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
