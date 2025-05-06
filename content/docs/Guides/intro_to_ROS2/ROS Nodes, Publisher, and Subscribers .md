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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=36b644ab31657cfd55632a055c94b6c49a805e9e7b64d943de11e1bd46390aa3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=830d053003a8aa73464ed2226be1a580fa954f51416802fae54fcdcf3745feac&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=1a97ee177af72f291c245d95df074c6677bfa81a30b1cb95384c9479a111b86e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=d82c07913193fd482a66fa1b3bd81fb6970a36314c2e392b7a61694a763f6e01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=8f618718633ce355d125ea82df5b66d3faa18c75c2d04f5f83b9ac7f43cd83ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=6cc2cd9de8de296b25042fc01e87d40c4d2717fae5544ffe324eb6abd1cc2c29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=73158b7fcabc34c124916f69f0bd9641ca94e274cf9ea0297037a56e037e0b82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRJOLSDS%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYgsHpZXHD9npVeequ%2Bo4TO06zdYrmw6BCFX7mFgcuoAIhAOTHRcoeuNeoYU%2Bqgu9Af2egEQtk39XOn%2BnG%2Fkl9JT%2FYKv8DCD4QABoMNjM3NDIzMTgzODA1IgzkwPZTSmPd5Rui5qQq3AO7jfCpa4vLs%2BnWu43w%2Bj6sJwmubHK2Z2d5pncyOFX2X%2BLebxRsh%2BFTK0e7gydz1cAzwA%2B3OL9r%2Bcg3woZufino%2FpJ1u76nOt3Zr2vyvWeK%2F%2B2sg0Kz%2FkAp3SnsdiMP5KEZjvlllVKFjz2S9LRIVwj5IzKdottEL2BS2MQUnAmxYxihWXcvV5B45x%2BRyEAW7XqkFYf2kMVeiX5RW99%2F3Mplz%2B%2BfRsyzKQ3cubCbnRHHALx%2F%2F1O3%2BAGJyhvi8GEqJqscGjMgTFx98gmSayaOCFYoWmg%2FY1npgreFvtMhEM00A8IXnU03wnJ0iK%2BE9DwNGYevHbJIDNEnAfJHB5gl5zeUjzVE28VtrYJkK%2F0bSEu1bRrs9FlM3TCHiRum6wcjvWC6Cf5kt8jdzM955Fzi7UUJ1PnqmkXbcwIOEaxvmFGvsj2f0EcHqpJaIohEJjAHLr%2B%2FcZW1eMdULF4Sw29n%2BXrxu26wu4tRZTPTF5SKiWaRYaqtzX3Lvx6fZbQ8FjQRaEZ8YzE%2BrPHvK5GbV3UsQITnGUfctITs4IkChfjfPtWth%2B4d7fVAPddbgj3T7IIueYQZGkl%2BJYWAoSrnWt1VH%2F7IkJVm9Ttm6E4KcYACmBm9e6rZtYITxiY0%2FqkJGzCasebABjqkARLlzUrXS8DzHznB4G1PUbFkjdq6FeGFy6jy3tzHH8loBAveWPaTK8dfm6EgvzQxzVaRZkh0jn83C8NPwo0yMFH7oXlG%2FZxNErjOk2c1D7Gf4J2t6baQRmAPs2AQoztp4Z%2BdBLqm4xbSAuJsVMcYwu15VyuWt8xAf8TGtDruvM34%2FQcYMd2T%2Fb88EVWkPPKj3vaXRJqSVWZJg0U3a6VeRRYpxGj5&X-Amz-Signature=073046243e13983101fccda973cb9f3e484ade6e47c2eded7d65cc3053873574&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
