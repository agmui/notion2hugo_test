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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=d0bc91a670d86c06be667605d7a31e8a15dc3b58b9b9f58a1f827b1a4f6a1454&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=3e22f199e907f460d60faed8cb956e653a359f9b560ef7172e578acbdc851133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=5f5450f489daa8119d06632ce44ee738707acdbedc1407e8176bc5130581b3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=be806920dc91f5d1e027ec37c873b6a2cf9175eeef52f6a7b1bc92d0775451f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=9ee2c69acf6eddd908208e077abe540ee2c7fd58f71fa3081450ef308d2b87a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=18d5a9f96ce7c5fe43c403fda8a6b1deb1f1bc4c68e604b389f59b32278bd61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=c007b5cde12a9eaef6a2ae85e90052fdf847d47b062f06426d7aac8444e84046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REQPT6LI%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJIMEYCIQCbhckme%2B9WsDLqIWPzX6Vqw0CfIJyR0416w1v9cJwBmAIhAMQWytqcpx2SqPSj7ScNU4eHbPg9Tm1xWZeZucrnx9Y5KogECOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxWf%2BG%2FtlpI%2Bjgkw84q3APtyeAwEH8AcNp%2F9VQxGlBnFDrXmpBkXNVs3jiiRa68KejWzjNp6kHbNGJk5oxeYJBu6kDoMQUXuLeM9y9%2FxKH%2FUfWOczA%2FIDb2tloWDs4pswlrwDzU5XZkpFjW3pVR2cogajimfdO8U1XP%2BSF4OU3F4aVyMPAsp%2F7Ml951prC2xFfN90E6%2F9RYzam7P7cHF0PP1MmCCg6YErZoo0dZeO6G1hGK5pdkVhqA9lk4nBQ7J3rfmcEubdDSbuQnTL7A1bYmxdPm8pRFaza90coZjR913kKtTVS16BFQcG%2BBAK7lhD6Zt38qBfdCco7ZYQxcME0tAFRON9J2opLaIxMgM527mRdKHA%2Bn3tQ%2BLtZox8Cvje4feENTDZr1w6ErVDDANLjKGl5sAeTas%2BeDnCguaNEnnOfRNwprerG2dqpNHzwjTN8F870duFTQPix2Jb97IllW5BkROFDUVeZPOtV4JKlqSkxm2oAhjayIVeKufNikNlgDXe6KjkzrkZxtnekJ5yjjHUL321IZYbzYnIirr9q2FYTxP8a%2BdMMPZR9EZSgbT2oUlf3cpat8p%2F%2BN0QCssdMcFWKiVq3TyS23Poj2LIdJ7AvwWuwm%2FEqlUCdFuSfk8WVbYw9rGVOkqzMj1zCuzKrCBjqkAQma%2FT3D5N0YkLZgJjADt35vpbd0YfkOHXFhQTpJ2yiQzzC1p%2BReKz%2BaZ3jCinS38F1N6ZlPnPp%2F6bmtIGTDoeHYYW5N7P25enxNWED8aifgTSY%2FTp5dB10N0AWL2Xq0iFd5493P5%2Bm7ezHt5Y9GMrUxLCKVBUm2GfTFastBtZD%2Bb7Vig%2B%2BT6HyNO3HuQS6QraYDYpSHrOElPaw8ZauSfVcWtfPX&X-Amz-Signature=12fa482c9e4010d11855fb6d925a3eccba53a345ae2e51fdbb6ea56a971fa9c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
