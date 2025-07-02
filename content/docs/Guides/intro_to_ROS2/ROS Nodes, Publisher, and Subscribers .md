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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=6448704644e0b080e5f9bc441314cc4e68cc0d1e4f24dbc75494a8fc18e5668e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=2ef5fbe10306ba372f9bb2729aff857cb06f2926db27764cc923b6f88898bf38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=ca4275aa93d308ccb8ae598781b35bdb1b4007958707c7cd9f8376f07e4393e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=8b638840267e173d8a2f47a9c9bce3ed4e939ac210f9348491df7a9a221940e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=b9e4d67cd9115a744f6e2c5ce013acf08e7ccc900bb58fcb73fb86ae7bcb7663&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=55dc4a96945e02b9715fc2d7ae6f7198326587db779a7755efc683ba523e896a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=2dbcb7b77641fa93f02d94a74a1cf9eb07b917bb220317430af948a8e546c253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675J2KBAJ%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T091149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTN1q4BvRSZAfJrRk4hYTjmrqj0ptJjv%2BJXbzrmWffmAIhAJ1XsojdCPAhS%2BTPgUU8aRERRUVArpBoH6d%2Ft6k5dfOyKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMsH8nQU%2FgJeZJTWEq3ANK0gR5VQkMSjkExDUxdupgMjYHnsGC7NVDS2Eonk0yjdtSmCiLQjG9bsQWTY1FWEzD1FfW%2BKd7LDq29okhDUtQMvufBHC5ADhCnwNcbikVUmkWSlSHgSM%2BzadGvtiq5q%2FizGX%2FYBBhSCWsOnt2A8c8xsVV2Cs59C7KKuvp%2BQxWKGC1P3hmbp0V930NCkKgfnOO9yFFhMsQ5XsEUBDbCemwxMglXSAqj%2BorycZOE75ZFV2Yla2GEdEwvQslwLh%2B5g5Aat2ClwDyRqdKlLRWQ79y3obd3ggtlkRp612IXPSl1DP1srfEYLFDn%2Fgd0Uggm9R7bE7YvDIns03EhhBr1aer3jR%2FqioJalCn6QNr6YLb%2FxL8fE4TmVLsIJRNUKDnsCFLBnZBvai8XN7eXdzu5vLqA2O3t4dFpMBLSLiSlXCn7YIXnG1kCQAuDi3YWr9wHN3%2FEwXvLI6CRZ0L%2F%2BOrcDmGFxdjRY6uuAlav44Fsc92WpUhRg4hjkZikkFA%2F5VdGn1gXdW7jmBzXD8ioqSqO7%2BSmsaju2RBhoMxVvtsUuw5FVJYj%2F3La%2BitBtj%2BVnARbp3BT9PEwIvJnhdVww4t97p2I0QYPpDOWMaPbl0RgC39xuNdKZouVPXSpnL1CDDo4pPDBjqkARSf9MBEZONHyfJ%2FD1TzSIaq6nEIf%2BiJAgDHVVXJM2s2uj8XLuthKDeTzWNhp29%2BVIhr4OIciwRYA8FXwHwTPT%2F30z1fc9kAYwk9v87TmfsgrMA%2B49hPYdJ0KlBS5dKDO%2BjHDWN7I%2FpY4v3HPpDVhf3toFcQHs7A6SlCfYAVLGa6zfhPKJflSjnY9mF9q9SbrQ1rlEDl1ueh7cJ6Apkjw%2FPM0nID&X-Amz-Signature=29b2451d5487f0fd3301ca86fe5388ac0ba427c99dfe0eec788209ea2274ad60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
