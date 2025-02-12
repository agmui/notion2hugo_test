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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=bec4ec5f7507f5a9aeeb19990d440d1468db5e7dd9b5a786943863a909b087d8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=e5c301d9228911fa50cb93594d8bb326e3bf2339169794e10c2aecec29f483b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=cbf8720c5671d849c2bbda2c91a6bb97ec5b54e170e71bc311366fc31826a076&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=6b6255fce6234185d0a6fc9b29434776c8a7773414e0ddc8d753151030203b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=d9d1c7669a322adabed325df28918486031c2f4eda61dad011eef80e489fd6f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=afc2c19c12cd28ae33c83faec32ada5776db11c342a7144f876686cec3ea1dcc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=c75049cbe04568850b0e03efea9e4f75eec3917452c38dc427726bffdf293288&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4APUGBB%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICmfUoEa1MK30Ce5PyPygdhff33djRx9rgBQiVmKxZ%2FhAiAPS5Px%2F7oDzLn8YoHMLyLKHv6GR3iX8G6EJ9n9zjcn9iqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJIi8KbV4ryC5enj0KtwDIvCjJnuu5L1wMmX9b1rCQGu%2BZLLxLcfgrifoe8pC0o1%2BkPyB5lL%2BsjqioRwclMXZF6WbVDCf1E45GfqIsE84VMX03ZW4ik35JvaJI2zDcKvgDtcdVF9lI2s6uyqfvZOdbDGEz%2FGbZ7E7%2FO0irw91O%2F7D%2BGUluOT%2BXwYVexZx8KlEu%2FMGCdW0m2qPTRG3aU4WzlLRLVdbzN%2F2hlek%2FCaKhMoC4y7oE73yJIQj2mP5ERBZHdMMpwAOoRrFgH0cHXeM5eTm4Pu7nk7809EEjmw3PbPNkaTwkeMilNJjEj6BVOCFUDCGdcodOjWvLwYACHMwD0c1T8sRm%2FiXbxpColUPC%2FWZX2HXeDILyG36chMJWFyNY5WuuP4fD0ySILjqOU%2BhZfaMzdQFCt6oDOuok2KGnCOaFYLDKSLWafcUBhsveirpbbTcLCuZ0tCUYr1Wtt5cT5V7it7gc%2BMGqJuuXVNtGhSBjfOknhucQd%2Bx0b5jRmBLw7gH%2BNcOuS87Zrlo3m8rQenrkOYqtSGEgY3r6ksd05rn9JgRX0lcn5X9VWl%2Fo58CBMiSTFm82aGNatymHpn2Op9c%2FU9rAfrnpRWkL%2BkawagHFG%2Fm9W15fBl0vb3XUWfnk6IN53LfPLN0cqow7YmxvQY6pgG5ro3%2FKA5YdIbsRmdDBakr0DXBYhslPOIqpOHeLx0xXu6tTtNFWSV0fHxJ9E6X97%2FIVSlqZBqAuo5CkuKZykuRJhXJvcXg1W0PQKam92NtvrPThYJf4VnubTIQiycahJLux3N1hEOpV6VuYO6O3HyPbJx3IIIbKJMQc6Ho1WwaOa0GSea5mnLcVmZ5vMNphHDC3PahOZhNcfaGolK%2Ffq%2FOM0Bx3vo3&X-Amz-Signature=0b156d13d2d488cc607ae6c39e92d88f8c718de1c2e0294698ecfa7447cf1bba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
