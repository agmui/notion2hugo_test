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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=91e8a31d26e36bedad291298174477d5653287ee8d04e5754d841eeded617b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=66e5675786c441ccf4b4dacb2ba564c3d986929afd3140bc658fe535ad367bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=de295a79853074dce735dbe4e1be95be39a68acbb67c5f06de3791957c1c449b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=01a7f92494f1952bccd150e17215159840dc741647ae7602c3d7917cf98e6e8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=c42ed796446fd69b19fa0641c5997e46be8f95ad605087e68c38efe2ad1bf92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=c8ca987d68c33c6e2d1860cb2613f16a8ebe18d17180b0ce70d825e114642208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=13aaa1af90f7e929404e2b896a52c5cefaa797373fb59d0358c8c3dcbc078743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTMFZQG5%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T070945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFldoycyM1b3X%2BB38scUT4CUNS8SDZorO%2BHH2V5NK%2FpbAiBnLRJD8fc%2BVl0INElFtTsnQMNip1SVMVVhGJkl80I57iqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ZElSLabPlvAgeIsKtwDvHj63h47g3hQvAVqaiERMKOEoyiqkegLTxVEYcYRgAJ0dffCVXdcepKsXtdsVeRMMSq0yor5TeXLRKKmbnUGMu9Jg96Di8vW2bC16hAFOQ8uKb18mKFVSaS032uEQPYkRmRiL3SZ93S4RyjtaFoETJpi8wR6QOQy45BXeKv1DDUdCNe1grz0X0Lt3sytODH4BnzFgAso8k22Opf1De5VWOrYlrE9gJZ0ca54O7W7XQIOiNN5qrFIvjiXnGpSBsFT8m8JluBd8bQ%2BQT0Qxqh%2FS%2FmvirAForOvxbbo2F6sMDYUBrkv%2BwsD%2FI4kDNV8ZaNRoG%2FVrW8mQ8EQxNjjnOWJp4YTBQbHQjXsvHvvnAb%2Bcxtccn4%2BtxdBF2MJZ7KxgC1njP9Gd5tAYHqDg7jAKWDNh59Tlb43LanatDy2ekgJkLBoGOfeW%2FGSflfljlmQW1pD%2FWHYNVISgY3u77bqcDjG6dQUyKN7dTIo%2FRlDoHBTzw32J5qbtGQmc%2FWGwCYcW9o9GNO%2BdDob35%2BmbjmheQ9%2Fq7TcRlr8nU9OsJL4JpZlitZ6%2BnV%2FyNiteubpc3ttxed%2FfLmLjvzLJYQrg6OoUwCPEAQY9CXjelespOBZNaaTzWAz95vCIWoq7t6agNMwo8mkwgY6pgHRrMEZI0yMWfAnNgkH8kNpaCSwCB%2Bs15JJRU8h58cxgtWIEdqJ54ZQy7jcT%2F86aQg3dl3KWc7uwPzpvShXzwtT0F3QXVAG0Q%2BokswQ2wDDKBhwuu7W%2B1x5uPx7t3IXoooPY%2FXqBNcZSkouWIkqKNbtSMNftUiOiArv%2B8odwYVLE%2BBS9gVtIw06kwLvebRe%2FxcHNtPMSY3Q0cOAJVDidfhD6Db7J2qD&X-Amz-Signature=4818e6698d5a194dd26eb0809e188020c85b1486b335a37d007bdbd7a2446f1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
