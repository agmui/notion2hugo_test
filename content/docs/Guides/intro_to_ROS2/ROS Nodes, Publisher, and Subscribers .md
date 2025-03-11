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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=02b936d52efd6dd32881f8d4e0b6451704f9f7231507f916601453ce78ef8bb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=c5fa385eaecf5da8578d768b46f07a7f1b30048dc17e9be0187673ccb7065d87&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=a9359429a2d8a6f6fc44cb926048ef6eb9108115d4c709d654b5198dd1a44b3e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=cd82d78189be0d0ab68fe3cc7a74da579230930010d7b635dd75ea73a60aa844&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=1082598af64e6bb93aff4bc8e46a478bd0a3a6d590498ee17491f7f2107ffb6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=080eb78577d9f7b35440d123957b11c9075adb4d3273061b0d3bace545c8ef37&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=a035758f1d791ead180019ab202bdb989a43e06bab783cc20db145bd4fc136c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3EHB4SS%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICGIMS0x%2F2%2Fbb%2BV%2BLEkGd4GjtxakTeJAbTfMvjOT0dDaAiBonGIhvxS2S9Lw4dhk3gq8zBXZF5y4c13xcTUKjh8DIiqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCLKki5kKtNxf4IqhKtwDhMJgdcrjrCUsl8dfr9NFZpGSkn0cd%2FaT%2FGvG4F3yGh3%2BAi4H31WwExJkFZw8TyhmdF%2Fisnr05H1c1zBDT9vbZk8tqQ8PtIwaaZ%2FEsksZbSOZZ5BoGz7ot9pdRP7i46uU4oAKrd5XFKHpC1PA4VoU8v%2FrtEYb1%2BZpUP5f%2BilaDdPnRY5J14mzcUjpyuyfKwQhRXheQgxKdbfdd7zAQ3nHlFN856t0CIXe8bHyW1R5WpB3V47tPFV7%2FZPcyBlH%2F1CoUyNHj1uyoLrfXdFke8A1wtkq7%2FSTI%2BEJlq4w1inFEDcLUqXkajDQsAemMzGRUZrscucRjEb2Fro7u4P9hs%2BoKQCyusL%2Bl%2FHdavE0dfrXVrrrGHLVIMoD9I4CAxWVpnDybnautqoHRpN2ZVGGMoh%2B27C9Nr%2FC9fgNdPxlwaEZMiLBcFJwPnLLdVJ90YlDmrrIRguSD%2BDGbI8%2B6s9ySvmk2UT%2BY8ME9v2nCh3mTDPc6fUNSj3BCzoZrwraNQmleQXDioQIls4CIb%2FLtU%2BT%2F7xMVk9zU8beuYc5wO3Tq664RWh%2FMFUCPpWxJ6ruLJzIvCFM4dZBBJcA4p57atpth4WhdVJZ0jWXhpjCx0IVaJYIFK9o0NIFDa8dBovuhXYwzMrAvgY6pgGvzEFdiejYlhkd5%2BJ5m88icC6hEnTlLy8aNN3881xlyJbYr92LOIR3Pu3swC39SUYVPm6cpdtfX575hCyOHOVlSrTb1HbsR9fUCBHopm%2FAZIfQ1U2hDg3VAiWHFzsfBAEEKyEF83%2BHU8d2xKxZCn%2FsMFqkoFUgC%2Bd8jlcOzSiYV2c0d2KGSMEfjRVomh6I3oRfzkagg4Ag7KrLSX1nnGizzeaq7kU6&X-Amz-Signature=0d472e28bd6202882704f0c4ad7eef2f0d6664c408133fa96b8a90df2fb99542&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
