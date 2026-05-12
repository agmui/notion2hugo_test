---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=93416b459099277b6ffffb1e39245a0322df44f1ef2bcd80bc7887cd7efefcb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=a19a5eb8bb64ba304beadc83d7e4ab742db51b6692aef51c09a309996a534bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=1dd5f8b21d88b02b6b352ec06ee8de4cfe8955d80b3ec54dca606beba282ca16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=325607a00492d7b9831274b1c562fd317d173c8ac16d97be25421b1775e47c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=bc98ea8971668ec2df4fb47d389394262b317d7ab69f79a8b936eaeb64159fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=bb6c2acdd873b0abb4b79a337919c86326bf2834fe4fd5b5ed419313ebda06c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=0a156c229a56e40ae6e4d64eab5251f72ba2f5ca6bc55d59c40cf7cc37089870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3ZEVKLF%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD9phmJnXjGRFwSgPiq7ej17SRSkakiI8hfeKkmZQz65gIhAO0uKB0iOHF4e%2FwB335%2Bb9EemkgeDrkp5vVVwWma4LuOKv8DCCQQABoMNjM3NDIzMTgzODA1IgzCAiZq9z0n3NiZnpEq3APT%2BtiqfAbJJnwx3OQqqHnuboQ96fY7Myy6P3%2FJB2sfcs2qtHO2VkqwHr8O1pFpZTjYa%2FTA83gfOrcgWtsBo1DcWei6XCuw7zS%2BHDigviYnh9IOSq7Xs%2Bpx1wHU2esLjL3W%2BirfOJlhvhQld7y5%2BZmGKPDJOQ%2BRbenlgrxh5GNZbOP96S7yUDKnLpG80XES%2FWWb8o45nfqD6ubjwdKuOwJkagcu%2FlV3m%2BvJ4puQLs2sk8M3tZ4fESCELSBMADRP4QLTQGIC0jl0liyl26S6%2FBiB0qWYO9zdLo9y2qRbf5leQS%2Bup1n0ZSjm%2BZMpueCb%2FX8bQANJKaTfh63xufRs5fOdtdm9RqDhkS%2FxTnePBon%2BeFQcz%2BtOcNyiIydb2e%2FXgrr24VUyuFgJHsFkMZFdz9J23ZEX6TKn14x5Y6Tjm%2BuTfPXbmv08cOfHoCq3aR79iTdQTXzzTvXKNvnMXd8juq6XBoxQWm%2B%2FYIos88Q8EjQYkwP3lM6Mp6Df0C0WHmZVrVqRwPsAL7D1PL5cBpfdFsfWFyeegtvTmG6VeQAq5ZQK5IghjIwY8CSl%2BEwZaHMM7DNuNtRwuFLyC4DuLCJKst%2BLkAX3cOAxxJoqTm4H9DV3p%2FeszA6Egef88x9ELjCntIrQBjqkAW5SWYuJZ5eqXibZcEIaNQzekv0SQ9jy0a1oCkzN97QfzxgHxPlsy%2BHOngGNeHXhi8El25VjmByTeyfgmt3uX8APw80aTtkX%2B3fTSRCLB%2FCyikW9YtXY7wGcYj0CWji0grB4SP0kkpFBTIAvn93HXd%2BiBmbULHiTdsezYB0eIn8tgIoaWkn%2Bk3vn34Wy%2FDnXtvGTl2Nt9buxU8N8SJAdZEyJDOHs&X-Amz-Signature=5787580bcaa0592c25a4c64603870594eb0c85fb942384f523b922de10b84bac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
