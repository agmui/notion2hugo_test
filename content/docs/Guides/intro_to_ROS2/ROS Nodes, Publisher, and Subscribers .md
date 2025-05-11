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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=8e0802a5fc68715456a26e42f88277748fb9dea1908c2feb256d63fcb641babc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=1f6ff66822d356dfcdd3c6563657fccc0353db7680f92a0bba2018f6bcc4da60&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=000062652ca919bd73293de735bf485eefdc82f1b162e582f18ded77609aba58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=e06014db3cef75bd25936c006433c6f56e57d4f9848b60f1aaa9d338ba1d0f8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=6f53205c1bc914dcad3f50bad7b57f250551379de3ed63f2893cb8c261553490&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=f7f920b010dff6e4dec78f59d37d5b5ccd56597ae91d890a2df16940de1eab3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=8f8a73d9c6f995b6396725778e2530e61caecfbddb2ba1aa8564d3196c77a627&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5ZN5FK5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIAMVnLBhXY4HDz7mJ6LRtnQ5XtfEtay1%2FqKQghjsmMpvAiAj%2Beo0pHDcJZXlFtxG2THyTsM%2B5g%2BZRnD8LfsUq46DSSqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM10hMK7GwjdZRaFSAKtwDkqbHgW%2FEAmna1XpNFYGA9esp3RFn2R3zaGY4fPjy9WgegqLjqbtg2igDThylnzPn8lugE5HB5BC8oLU%2BgO%2FH7tt8BG9oouSgUgMYNiYk6OLKwsbVFIWqD97G1ejs%2F9rHpJ%2B0QvF6Kq68oSI%2FpThwclr82%2FMoPveAJBlKhiXseZUtU0s6yB0SCiQAz8b3fu5YoXTkREpKAkYOs%2BNXHN%2FEYGIoMRSE%2BwUAPO1RWKiGCbkdinrJWRsjyI4Ouf%2FUeR%2BfFJhxgYQBRjxVbCHk8ZO7%2BD8JBniK988DC%2Ff0TNV9ONwXaPE%2B1FCtX6DXlOj8awram8t6IlHCQ0vPo5nINuco99FP4yNBeeWXycSBr524tLK6KXpZPVx1mTv8Rsjoypdl2ORZwi6Wg6H5gHM4zz9FH6bXBszzifUlKT74urjfBgGAhO0xRD1b3I2LJV44SPSyLkE1AdsTDwL3et%2FESEHs0pu7TAeE4pDO%2FqeisUDFrBwNpizFSsAiM68yXpOyrd%2BGFTwbVB5X9xjJ6XuDXzOYPwEkSgXNkYUiu0Y4TdvPb6AN1tBb3dgbI0N9FUsozGeAuD4d1j6dik%2F2r0I9%2BH7nO4NgLto3wOJ0pd8WriTVeVsc8K7bllxS1WEIsLIwrKGDwQY6pgFDg46oMm%2FRZd66Hwop0XXSHnIkeU1slyAk%2BLAypCM7k8IfHk6NvuDprsJaFB63vneAmkY0slimOgyNjMuiRwwx3fbVoKLhyxDfFF1ALAm8suZpPV4abPk0uj3Aa%2FxJH5k2NcvGVfQFvPU9yX76mJ2S23tLOt8YtmX7d9KPL8QlOBLYfnbZ5FZnimU71hkf9u8L4cnTueQ0TNpE%2BfcsSYAqpkDzsRAq&X-Amz-Signature=f4f2d64201bfb4518154b2317061d40722cccddb7e052fd4bca65de3eefa3ffc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
