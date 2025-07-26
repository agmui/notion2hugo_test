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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=d5f3932b78f1c7532d029e8eead03d18473a1fa2c0cd8bf78e6623b36a6990b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=d7473dbb76945636068647969b05c06b278ca475594280efd38a380a6eed2076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=c6149c99b0dbfe5cb57d4b909298a59a849b41d9d38671f434373a0f33c6b53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=ab2fea8b2d9f5cc5cc4fde1163e368dd1d28a665bb0a7e304d30cf20f2eb5be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=041f417d1ad717b0f5c8935e72668d278f8c8166a8a70c5fb60e533cbcc4a972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=021bcc6687d5f02d6576b612a3def5d4202f166d506265cb5fc23769c893206b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=cf4155eb8d7b5dd2e73553655659325fcee04225b32c85e5700f9d69690d722a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWDUOSL%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T035126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIGfvduSxDCJsZniMzQmjEbTiJA9%2BLdXfF%2F%2Bt61TrIykRAiEArAGxj%2BMaq0dwNGiZPJOUT7wDDiQfht6eEGhGrIzSJekq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDJj0FWSpF%2BEktU7gtSrcA2wit8KTfCZiGKXSanO%2BHZF78tpNZhPlb2WZCWAFApdre%2Fb2sGXtb%2F6%2Bk6Z%2FXR2hzeETyYwXSgACPwdQmTuzF1GvjKWcZ4pLzx%2BUk6sK%2BVXNvp1TxcJDf%2BdV3zdl4nVIRFgBoJpsiWAh%2BQTr62eHBYAdZEarxsJ8FecKJzeyHJVUst7KAyHld2uqzNN3CmDhbueF1rFDrzCmoTjAwuJepAxuJVmCjoZKSyWGFySHPIsHyopEZmKmfwTY88Oz%2BuWE9s71X3CgslQvv1lyFhj8ZFekEPoKXVms67sgX9tjaZJRhYMCYSo1HmcOGyTTq5OIxeP4RqaOLEsYfIJllzEEP7r49lQg3fyUqMRfxy6hoZsMdXM5w%2FruEW8f3atj%2FU0E3Kl7AuR8%2F1f7MiO9ChU8CuvoJMzH9MqfBw%2F%2BpwWJhCcjgWWZQiHSb%2BRnU7p%2BV%2BUPStpIP%2BuX%2BqeiIJnxFTEJl%2F5zlZW%2BlXnFsvGhXo04e%2BL3Ic8hCGhttcDvh3WWeQuK4R4D%2FDRjkAc%2B41xbR6dJPjtA%2B900Fysrs9WhIFejKvrN1%2BCoWNTxee5DruovL2nQtGFv5v69OrUfg8HK7SlPq5JdlpmrVxOHKiOS%2F1nv9h5K%2FtV%2Fy4R6fdTQridIMOr0kMQGOqUBX4Yndbh75bwLXbNfI8CeJivSvqA06UZ9ztILpacCHjlm16tyxHSGlWy3uqvSsv75co%2Blgej1IuPrGOTE08VEe%2BwrkGHefCmwl%2FtVcveFTqmOtodcWlKbzFGUo68m1I89kM3a%2BUzd8zvHdABsq59nbVSN7BYwxXXnMw7XTEdrcMEyFnBopw1ohLSvZIG%2FDYV%2FAjeAV23JnLXp%2BmrSNrq4x4aA%2BMtw&X-Amz-Signature=eba7224e2b268cee0498dcad420e2eeca4d1abac83ca718b86653b46b09b9dce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
