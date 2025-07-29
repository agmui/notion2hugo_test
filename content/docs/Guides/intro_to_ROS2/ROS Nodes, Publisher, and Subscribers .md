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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=90ea2cfb6a76594d0b88063576c791ee9f257572bcca758b7f9299ca0f51fc36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=bce1f89be9c404e8e48b48142ff1cc4599304d2dd582340856170ca83bf8e2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=96d7dd311291b5db65a55fa94cfcd15e1ba23984a50f33e9ec7adf1c8a036a89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=c42ade01680145c821a316cf8f3d24a95dfc5c982e41c54d3d97f898bd2292d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=6ccc0d1abc2b14d26507dd5c012013c8dad818af4a4925a9584b45c6deab81c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=a0cf4f696bf949f977f1d0ac17ca9514bfffd7d4c74f5d8c43e88caaf1f17a6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=980e6dab75a50e6b0a425a25b089322c1635c7c393d444d07ad8ab43494127e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GVLNZD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T030238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIGfEtyiYxvNge9lUowMsJXAl9KttXRC0hWPp6tIVEIGUAiAXIyHGhTdC9zDEH0g2dHOBcA0s2lfHZKkI4LX2btzB3iqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW33%2BKPBN9fE9pzlnKtwD1m6ZeWAJiEGae1Btq9XWrXLepEVG89AzuCXjuc8SODAefIPn9mr%2BdEY6o0P%2FrVtPJ6fTEM%2FSguu%2B0h2zfbGpX5KdLjq9Rd4WEaagybhdjK1t6gkKpjqr4ngaDTUpKZTJk5SUsdh0uT1W20bLy7wqg9obQYBBFJczh5rouf3t6tNmAuCuMlxACWG8FK0fnmlI4uN6Q3Bl1Q9NtCj6mkG0RmACLAFWZ2S87dLWN%2BtGaD4wYRsPKrLvNpQHk44%2F0HGN4q5Q7E68ZhMH%2By4oF6NDMDd7%2FYSkeLMIdch00xkcrDsI1akqsj2xDu9hG1XXmisSo%2Bp5plRlgeRvf68k0TOz%2Fry6B8%2F6F%2FxyzWD6V9UIn4c3Ojozk85YxwyCZquJPaMGruWuEcD2TP%2FjpTClYH4udzrxISfTa3%2Bki7VfqeEJOlsfR3v%2Bycz0vcRo65TpuWmu8MCkbR7%2FVzye168191x6CbLRsqJ0QH6Fpy5ZclsnlEGkLSSkAfA2l%2BANHB3oCtrKtWA0z%2FNarplLFBgGn8O65uQ%2BKqs0PSG38ughRqe4CrzVhQNXyUVcOZNurKuz9yeXYtutMowXJbv%2FWCf5PFEa2pRBVvaC5pon%2BBW%2FiD8O99raz6ZIXv%2FvPyf4Auowic2gxAY6pgFz%2BlZqO%2B%2FTBy07ybRlk3BP3WJn3sevhZ6i6JgNCVtvzxiF502AVPrZ7lIkkBhzoFyNxqXKTCjSRYHLtPFNnvlOO5N7g5UtohKx2%2B4IekJBgCWgZkSF6S30FJSNgQMoGjad%2FpSoEgJk14KH4Tyhycybb%2FaYiWxw%2F90cEGqHt9%2Bhyw8PdfQveJ%2BcSpbjYgKhnuDPy8z%2BAS3BHaUNhb2tz%2BR8lOsbGBqG&X-Amz-Signature=179acc8609cd8e999e74d9a0f59c10c96e3f528be137a10e7947a20f3195b3fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
