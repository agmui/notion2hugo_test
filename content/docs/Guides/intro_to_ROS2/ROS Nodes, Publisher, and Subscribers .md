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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=f8b2dfc0e24dbc50bc879b807932ab2cd64cde7e6aef4fac75f6568446e443cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=b0170ce139a920e3f3ef5f4804143b7b7a49e9ca941b183c395d92d14476685e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=9f462d87c58d6ed4fda04575d7a233f18df4c3195414d39338857d4861d669d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=ac302f0a3e944dc63d547ffddce8157745efa6ab5518feaf0a4a4a4e8ad3952e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=2bb35c5a803b98ae5de07286a25b4973d6aecff53dc75dbb1089fc55515e1dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=e3e5e32c2127c0e6116fd5bd4bf4aa9edf010cf9325102ce2a81cc228f3e42de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=7e5a041f0dbd7ad9aa2a22f26135fb5c54fa06b21b9d2271a36f24bb3028ae7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZL5SIUW%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGCRHH4FmqpLlxu51rYk6tR6lHYbGq94rL%2FPZ0r467s4AiEAhnhypWf8RMaqumiPlWvshQqZ6nSr3K5RzmJMKwoXqREqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJo5hKr5C1s2N2O4bircA%2FzCdpnH82CGOSKjwuliNDmqhj5dSDB6toU16NjmpnvoR8X%2F0%2Fr6KCY%2BHr4kLHoqADcIYv6bqV1vHBPkM5JT0N%2BN2AujWZLcmHcD0zJsbdHP4tmn8jUTypW%2FtDA5GmuFs%2FrwmtjnsrSuxra3ZYegETZFAHCrYG6YmH2DIVLn2gK8pHgQaIfOUNOu0sHjf%2Bj38XAM0IbFmDRjJFtvPz0pcqIirNROExfVVcwYashI%2FM4qyt7QyqBtJt7sInk8R92vZA36SyT0dct7n6siE7MFEVGAcA%2FxIMxFba1PAM5AuJrRvyj8JfmJVVV3xxgudogE%2Fjkw%2F9CnYErxWsHE%2FGC0Wgj1l2zbkHNutduHJQzOq7zhAWkWdLkIYe15UmF6F5M8y8HPN0hl3iPdLLfVmNhbN8l1qwOqWZxJNn6UxCPtQECWsRnPkPtIgROhuhb6Uax%2FS%2Bf8%2FNSHhV5IFU1V57%2Bp4Oek8VPVr%2BZPZSoejChmKqpuciYCYeZ6o8ju80cUPWkNt6OiXLjT50JkU9PGKSRCv%2B01yub4EAucka86tYNAeUzwVIQA58bz4xf71EfXqUm7Xss7QQhgecuRzj8uqNSi9PKrYchz1ZRGwfqupt%2F957%2B%2Fe%2F2xLC4PQXRYTZWQMJL%2ByMIGOqUBTBcxRd%2BLPKGojJheO%2F%2FA%2BAt0XkfOrJaRGjSjnxbQiN%2Be7O96UFDujOKMJaRkvEfXwtvikaEszAqT%2Bytj1wX3tBb61umM0KLHuhqXZCNN9QD5k0RE0YCfE2ssh8dHpceUmGYn4ElL9xlc79bmu8W504ngAhI1fZs8msU09ZI9%2BPVOq5H5WqH%2BCDEvLCtWYpAek4Zi%2BSq8OJ8%2B24IuG5ao4Qe8QWmz&X-Amz-Signature=e2f5412f62e48a20839235cd457079fbab67ec842c6d180f365f9a29fc2fd874&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
