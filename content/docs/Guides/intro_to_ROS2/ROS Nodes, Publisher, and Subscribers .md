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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=4d1e2794927c7df9e5459706cb108e54908a8483a5397316cdd133a656c58f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=1a79b1b5cbd6f55435d1bcce8a158b9c37de8e46753272f87112bc53e5c98acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=7849f19bb04c4dbe745a07257406c823734f0c937bf46f3f2659067efd63362e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=d9d663b541848447cfea0acbf7bd92f6ff4253ca2bf351746bffe76aa153ed57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=88d06671e18252669080f6f46017ac82b3f1611408f7678c62a2b693e32845b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=dbcdf33195b7d3ec9bf328c9791432fba91697dd0ae47a7d640cbbe6fd793f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=731baab70e34f945b167391505d41adbe62e13fcbe497c0d01295bb745cedcf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665THWPDEA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T230909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIEgnsV5B4bzf1UbdgSeM%2BjzqACdTahNIi4wziM1WPbVgAiAB02m6K7i%2BZcS9xFNKLh6VnLnSVHem5FDAE%2FvkL%2BN1TSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMPmwSLML9iNWBH7cTKtwD2soDIgk59XvAGzjzeo7Zg2WC3FXvBv1Ong3rz%2BoYl0Ezd%2Bf5296ILIrxEQEw8GI7jNVKFrAxenFobt56BTtihNfJlyWGX4Z3IsCWmPVsg0QvTKoEpiih2o0YazuYHTp359GEZmsUVxgxpdrEyghfoi1rby2ulbnYX9WEkG4E6tjciRP1jLoW1PfMXM6TM2yGMGTFRoKiTZBqRt%2BCyR5MqGm0tWTKDOXbCGqQNEPwLj02odRlWZ1lYeW%2FaELJtt%2F%2BVx0ClaZw62XWMSvIlJHV6zadn8vrsp1hMznMOA%2BIiFxt0J355QXJHKT3YwtRHeFcwbd1KV9k1B06GQL7xHEU0xNjaFYBeavLTEYSQ%2Fqa0iD%2FerV%2FLXjEeGMp6%2F55BJCu7KBaMyjg8YHmwJhSaN5upc%2FAD27FNBOWVxylXs0MJS7m44zU8sApBXSek8SAi0ZWqPC2TrYsLj%2FO2Z%2FGCcPbZZ4M7bhW4jC51h7Ns9cUESGBhMqke3BAIEQJE7fJhHtSRNuFsF4OT9fTMJOsgZqlioD%2B0E004%2BM8gf1XlO7d%2F2NZXN9DrkXz34fZ8mAcDEWhn83Z61r89jlS5SbM8XbTP%2BUAh1dfB8acW%2Bx9VkGyY1VpCWZEf%2BPUJbdNo5Qw5v%2BUxAY6pgG9dCmspNk%2FtzMGbpfvtoBvRmTjRQDGoNp2HUhU5VouQIA5KHyRytzCpY8llb4YDbCAt2vdne5awsQ9BeH%2B6JDI8o%2BFrbh7KNvyyEUnQve83eXI2YC%2FsHFSxdC%2Fx37JWokSTeoafOjHU90wBjrWAqODtdOTIetwQOBN8mdXo5sOOlIPG%2Bt6DtWzshVj06wNxxHPS7Vgy6XSnRst3l0uL1RS6VO9rDmh&X-Amz-Signature=f382a99ebc4c9c27ab51a84770bac3e0dcb2b49e58c7b4c15d65f8d728bf4940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
