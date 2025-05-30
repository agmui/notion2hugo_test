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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=ed47fcaf9acc0acb359ebe1db266add6d0ddfec0f3eaf3d98c55e117433f6716&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=87be805145159db13503ea939f2104f45edba1de21e3dc7614a6ad0d71b17450&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=e8dcabb15fd2a8074d841f7e69883d95f632473ac0d79b4e6a3b4ca91066edd8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=88d73e8f7a486cf35c43946677df592c97d9ff749fb38ede1dff17aa30c2ea1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=d9384e63173139a8bec13687d7e1c110af6b79040f86f712da10a324d806f8f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=cc6c9cf9d10025c22c6e8fc278bc62711e89bba78c3201c5d0358ee19ab87d95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=ccc35c5001fee7c23086497126de7d60c9d31ebf961c4f370007bbec083dd127&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPZU3DRJ%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T041335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4mZ0qtAhVDeVCcCI8lc2EEl6GMDsuVAHItzFp2nNCcAIhAIM%2BKVac6dubn7owXiWcBXm5hO4fUQR2bgJtrFf5%2Fsx8KogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igydt%2FYz281zJxsIJyIq3AO2W6Bk6Bn0UMmtfuzunZ0gJ7u2GAE7upkJyJphoQeBn5pFaSsnFebxUi90uKqoYhlRP1z6p75ro%2BlmQ8pAABwp4PgbL1O9aQ8lEgjCLL2PK0686wv2S4SXMeuI%2F53NTL92dQ0vNEj5UQVUoRs%2FuIagEcpgaVXAVNuQpjI7eGWYe7yLmh6XV4UfW1QrMSTV%2BRHDKwp2lsZi%2B7SqpZvEHXjoXcfSYpfTZuwQsgPZhZ5DGYiXNpX6HeYDpBqBSSpIary4I9nf3hxpTndmf5Reh8co0h3S5UZ%2B5feYSejCK%2FqXm7GYuSLyy8x5oDcozYX%2F%2Bz8zaNjzSChnADnN5nvMrp9h1p7c8rs9XTtXcFCvp5hB0RFWNBGK5DGRI2wejIgZnBxyq5N44NLrNzfH6IAOSTMkqBOgFVHVHr4ImC4S3LI7bl8RIphhmVi8XSpTtHJDQblmjs9O35f3YMRAV5R0l7D%2BIkUIHrbapZlF629Dcbi8oizf%2F%2FcKgWnnNWOTYyfwPdhWSJLPaK7qzuZ2riL4Z7U3T9p2%2B5SrObWT1HmSxQoDx9TApHLRCD7gKuuHXfDojanG3G%2Fp4kRwrNQnKqDsG6gSZD%2Bqqe7TR0D5kDW8%2FUxqDrSPgPKP2YXmF5%2Bl6jDJ3eTBBjqkAacNJ1fy9W2h4Bsfvud92sPDaiI0fmGFZ9NrbdmsIgsXeAQQdB7gFA%2FQpsqMEjFACDcwr0a0CoSEv5ZdyUkTQnyj4hAefXRGcbNLVNJRgSVyftEwXh3sWocSNZ%2FegYNm7fX0iWOVsSfVwvJLL5qBx4HgCGOkSNpljfatsIH9tfOwLMXXXOlDq5lulp321EhZm%2Fj6G%2F1cteezyicvgu3AZvRQ0tM%2F&X-Amz-Signature=c9bba34a29e2b31a69918494d27b7d0ef15ccd02148a47ba8931192936fe0ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
