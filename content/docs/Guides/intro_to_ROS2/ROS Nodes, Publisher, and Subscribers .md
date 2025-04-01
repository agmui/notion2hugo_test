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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=de37bc6c42c615144d4042b26901a13e14bc83dd2f6cf70c4ba335e55b39d5bd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=837cc2ff040c9625c65761e6fe7a1fcafb774e705e5e00b99c53bb075b98b74b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=5d07618cf5ae0d8461b6fece634ecfd329cd5aa5a2bab88cc8c30d335a976e72&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=c7f53ed1fa16ad6c0e58f735ab90c848fc2dc685793e23d1f80fe8c011ab784f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=d551aeb1adbf45d11d76c3288af56f21a6d7173de87fc998c13a6390f6f1f937&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=cfdccba87192b4501f6e5b7e245d79cd9164728ae49b90367854ace2dbd3a7f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=ff0622bb8340f08a1d8f667675ea30589dcdf87b56f58480555526c83bb9cb4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ISAL3MW%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCZuQ7Hzd2S6G%2BX99xoxmuDvWtHOERvdXcrhTPeLbKywQIgVSbkIgymAYWYOaI32fQz2XISbraibG6gJ5ZQguJ36A0qiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJiaWZvCcv4dn2XSESrcA7AEqXJ4Sjz96E4dScNMgbIwCoTV99vBr54qKhcdrHh5xwTYXC%2BWcVoYI26i2N7QgJjspTZ6EihKc5fw1cTi64s3eEUWQ7ZMa1yMyzHd8oQofeGLsT%2F2if4lJxFNvMdM6fgaFJ0OotP6rcusl1q8bUDulqcJ%2BzdbNJpinnbF%2BhDuO0ZiI6xdrfAgxs8m7g775IcLn06dElwPJy3EX2uHsHYmgX6kSalRJJ5qe2YTGGMs5T8y0lRZAcf5%2BLwTLHJWR6xMT0JkqcfDxnwBR1UCavlY82jWKkPLK%2F04rKuoFARgQxaTQuczU8Qxck75mX8uUtz41l%2FCFCiKPG1t6hUK9AR9cr%2FEB6nM9r1VPrNFe3bvoDUm36oA8Tp2iwDjXi%2FASpcetooZ7hGk0pD267fYv53sVYkuSbEL1xb4XifnIkh%2BT6tlmsnVdsc1n6y6sJehDTG4s30XvNtEKiZHgL6uZZ5%2BbkCHfChXhwmKseybgRSQsNAwZSZFWn6myv5JnUhi8sCeLD1U3%2FtAAU%2FWh5fKrkEwnL1WK9iUGa1cgRl98Ewf3RWD1hPUuj%2BI6T%2Fadp6%2FGpVOre3%2BlxJsFFqVX2AUX8vuZnn05WPykAlhKXk%2BgaiM64MCqvksNOh92NW3MPLWsL8GOqUBHjeRwc5Ph2MrN36nVW11TTLm4pGL%2BtMqKcaSCR7nV0zXxbmO%2B8f%2BcEQUtnyxU3r5TOxEfYuXvsXFLWlhevb4Wsc7PpyV3dc9%2F%2FL%2BzbpsJ7gowg7Yr8d6q2Ezwml5tbVh2dVhv8X%2FnMEnYEy6UCPKWjLFaF0C4SAi2KjVp2LQHNLDQvgwxpwty6OkIju4wF4zC4e6kNZxaijhKQnZxl8bAXVJfLsC&X-Amz-Signature=7fe6ed8f152ce7ef86fe578fc719cebc95a67961c5c9508f9f4fe01a364d5765&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
