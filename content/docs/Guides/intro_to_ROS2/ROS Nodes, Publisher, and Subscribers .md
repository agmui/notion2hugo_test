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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=d79b88581d1ca9f4c2e6c3a342748d3380ec76b6c68141b3d6d6fb55f2667af2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=2ebdc530497dc3baf36fbe1688fd15841dd67d4af9731ead1b50dcc9c33ee198&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=937d1bc6777f37a1d19f760b28275c368bd2c65e9386c88ae4517d0636c5d66c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=889bcc2de0d9c5ea4ec1d444f84e28f58564a9f829f86061cce4b5b107816c23&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=cbc275e1578b0e624eaa9f15c020625448bd649b847e5d37f84121e716efac12&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=9036da77400d0e008e53e2b8d88a705a61e20e446f57c01da94538af41001ba1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=69428839887c28f73cc75ab6460d39a308243afa6bf0cac9178c5a92a77bbaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PBYTMNS%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRzXdZiaaOorb%2BDkKO6%2BqeSYASrKa8S7UtIrg1%2FCsrpAIhAIhmVr2wuaPY7B0G7yMZn%2BwUH%2BdPlwKAR9MrktN6GIkmKv8DCCEQABoMNjM3NDIzMTgzODA1IgwSDEuFW8%2B4KOzAVGEq3ANJ2NL7Zn%2BbfQH3984yi0OKhXEhK0Fa6Q97TsIetsogmD2y5Wmy2O11dvLtGued3m0ujDFnAWIoWY9W7mbHyTbxNEjFdqvFj2wCF%2BrdEo9U%2Fg2I%2BXznQzTG%2ByJaHHmro5gQ6C%2BOnFxJ6jCkxyWf7RyyKqge7qzb4sDvGVwH8pHsLSrWeCRHWiRrtbl3UZ5tGZe6vFbrZOpC13Sa389gnnQ3Wq2sf51ZruVJlAP2h5dd9ivhNfZPGSQSL2Duu%2FKovxin0YXxWlBi3y6N5U5TH0a%2BdxXktozf5kZ38onD2OQx%2Bf4V5rpkoR4rOhaLVUuS4tNaURE9cmnrDAHaT8945wdcEDS2Fp58tgaTm%2BtlIoRDXOfIZTa1viEzXxjzx2pbSIs%2FGh%2FhiSZzxMId4e%2FsQrMVehPDdnXhbepBn5fN545%2Fn%2BOP3lhGb%2FkilXR%2BnmoB9lFyjnExQ1xhVjcsfopIPtpOoiCQK5EtQvgk9fXIF9fSwDBGqkb40Ri5ieXrfYg7pLNN%2F86x4SZymUcoOBlcuHrOGSJGa8VWqe9RSO4ltdg8GPNBQBgJyv7D4zHQLrQmKukQhfVCi5dkJQtW24soIjOuy5kQ0m7CclKVJbcr91Y9ivRwIMghQB0YExkusDCw78G%2FBjqkAanohOWp3DV4sukqDdA8OsWYdozwGIOrPdqQrdQ%2Bvh7ZSUSI5OIcnmvmlo0CbMeAuBpB6vMsgHXAyWy6CAKEDTZSO6CYYgKd%2FHrzR8078LKQu6l5Tnu0w4gyNatvqUUBWTw%2B9Rs0gHge5zUzAckP%2FK8Rjbz1iZt06SlOBUExe6zOjyD27KWK3xp95GV9aghOQO0yuN1YrZfBDKVtzKo7jP45vQ5k&X-Amz-Signature=81e06b853680d13c7ca8915781193006a38ace1f5654b53a8397ef6d5f445062&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
