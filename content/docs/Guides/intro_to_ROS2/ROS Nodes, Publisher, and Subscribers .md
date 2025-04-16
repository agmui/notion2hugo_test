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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=09fc69356228f10f524d52cb0be8398f3c8456f46e712e30f749be86e32bfddf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=6feb3d06c303382a662da9a6846e7e31b7daf4dd5fb11dd5591d8fdffe94d7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=4c8c86dadef1ba16439082f0143c2971e30970b52601dc3ad4b6cfb265a3c0c2&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=eed7ee6999c7044ce5fd6e6ab2d4b3668f48c5ff6fd189cbe7b6b942a141d731&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=4857fee5aadb9aa5df2c62db145110b3aed97df602a2e3449989cd86a40b3b56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=5ba1dbe6564a607e1a6bb61cbc8cb187a090e7a11809300cdb529b4a5ba90a25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=e1be6386e8c16593905282bde068326d42a49456a29da11351d6f33d59791bac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCG2OJC5%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T070910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCt1EdzfO3pT61eM6EENT3DrgBiF0I299MLnodd%2FJPYQIhAM%2B4RJMa5CJGAI7KW5qUT6HTQm02%2BhlW0wYVWlH6ampSKv8DCEAQABoMNjM3NDIzMTgzODA1IgzrEQCT1NtbpuoOBSEq3AO5g1BBQ%2BeGYCmE%2Fd3KhDlNiy%2BY6mrJR%2Fdm%2BEWhyLltDo3DK1FyEc5jNCuOF9Je6KuxMUssCt0lDEgCvb1JAqsmgQYgzBm85hQrQbdNciPGVOtW7tMRecAl%2Bv4Njahi49OR72OI7hN43bb5OUmUCdjkNfSjeP89oe4pKEtkFxZloe8Sb6lGBBdHQJ06KNtxwX3mBpGuBg3%2FpPshGlOXf1WC%2Frtnc3R6SxcBOxS9eFU%2FcFs0TljXr6Kwbgh9B543z4CfknevBAOaFEHemAVcKQNWoiO0nk00XLI8vW9djTWIvkFHtcToaKdmgJSmJq%2Fk9DUQkDTvIOgMOti80wv7R%2FX47yS%2FUJDrvZMwr%2FpFsQqUK33bkE%2FMN3RiyYAIIcYdhPbAA1soI2FuL1nooHqxkgOS%2B10E8hZlQ3pXs7S03HdVxcmSEImCU0AXSo3zJNbKHG6%2Bilp75fEFSV2pe%2FHgH5vmmH9Be%2BVgBrZESWn7Sv0gezbS%2B3hC%2BX2QPUJ4EaPrzHEl2zUUsgu766TUdH2zznTGkqieiO7r0dg6sjEmt3V3er%2FfKbd4B6XilwOCBuaHw58UR8xwHEc5XYxyH2k4vV6UGgjxziepk3yM45PedTnLqsL%2BH63rjjYaooT96DCxo%2F2%2FBjqkATdEBzUhF19uuvtr0wCgh0IiqoBHATF4eBsU4tMaZbFqiGFODzITXEbvQh9waLG5xAhHMPhSUBgcs93aiLiuYPjuJWIB6uBv6N0NQUdUdnrZzwnSZaA0aipPDmZKc51Rq4fro01hM3o1%2BjDfclBB%2BUVAL9XxureEs5CdydnmvMqNac88BKstlviy8eO%2BVWpICecMIh01XYqzYhikljWKBK2G2fjH&X-Amz-Signature=71247d7bae3f9d5e3b94d2badfd3be9eb63026b406a6543bcb6d43df7da65a48&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
