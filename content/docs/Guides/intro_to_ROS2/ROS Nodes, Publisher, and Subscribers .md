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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=ebd2a93fe0f41876a679403a776d3ba4bf339743561dfaf2e2cb3a36debb41b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=c98b09561e248bb0a6fb5beca0336befa7c504c43010957293896c4f6eb8d52f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=343404727c47b05eb0674faf48b98efef9480029493ab496f9894f13c184fa3f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=f1e8e4470a3c419aec7d0410e1c86f33d88a4f9c4e696577442c4835483b4e66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=b1f2c4bbbcfd8d1ad2dd310fd442910a23bcb2e5a507b5a096df619441714578&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=4981707d048ae8f5fe6536b3b8d37b282cf3a3c848ea0bdea62b01c4def2e2f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=0868f042ef1d0be1a841f61b195cd38f2b99bf75edc785d620642df0f65dea3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDAJ3K6Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T110733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQKv5iXt9zUoBQG8XLiK0nJzQP%2FHWiFPf4%2FQy4G4KKBgIhAP5mzahecy0mPjCuy%2FKqb6pQuYgqNluryER4Rz4ung6QKv8DCCwQABoMNjM3NDIzMTgzODA1IgyX4mjvBjAMMNk%2BKncq3AMn277ZkdbjZ2JhCBjLIIV466R5HlpsXQWep30h1fvGBUjl6FrjmiRV1IiFPzj5eiOcOSKKb7oYMJnymsxLNqWrusqse1vhjbrS%2B7nc3wBdZ6KovCVqY9mBZj9oeNmFpHwSsDv5cQI5LDp%2BFOkTYVsz%2FUOFB4KYfZXUrN8DS6b%2BZOX3XT%2BmPf9qBvGA6c8B844Xzw3XCz2nKwCa2XcIA9yhEg7SmemrejWF7R9ao7TQgRQ87e3PRwP3iwrle3VQGM%2FCdo%2FW2WyRT7BGfkf%2FLAN3uc9FoVQ83NOKYTx3VkZMzKHGkbELuOdaizaBMHcyQQbHb2G7H6VahIzou6dpc8C3Zoyn%2Bb2pqrgu3BiMXVvEgdr6%2B83i0gAXjmYqoF6QUf75mRxMWCtaMBSEuSV%2BltlkDyHeCTkeyyY8Qsk%2FiTr4q2vmvwTPpcVizvMBHHOx9BdsE0zg3xJ3bvopF4Z%2Bb1ucEGNE5TxwUQVgL5Ky6JolMo1enFrrdxUBQVmVqzoDrXLaUv6qQ6lxu%2B4E8cVQtzlW9rEyxcqBUFlgsACRhC6y7iII%2BhvmlTmIr%2BwLSqVPHnQjPSsdJjYzW%2BB8%2BYk%2Bj07PjT5BpYdR%2FZsgmb8tNic%2B6y0p4Eb1q%2BuEFa%2Bd6TCnya3ABjqkAaSO%2FNO%2BFqqm0XxcxzS78IAEoMRhkvJXSNrS1X9og0dDBzZ9ryMo2O%2FHmkSSfNpXcCn3g%2FciHi3JIc1dhNu3kb82WEgDVdXDYA09mS4NCRAJCA3XiegAavwzbQucFMkfXPNeA7JA3RYvR6UnZlc4weSSkDfBt%2Bwr2gbfNuAWWx8AiPz%2BGbBi2PwOL6G23lPKPMrhqxzc5zHa55oBzqF0EcRMo4GL&X-Amz-Signature=4d4abca57e4c692b9b2aabf8ed01aef2a5d58c9ebe9078f6be1bcb2a49b80271&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
