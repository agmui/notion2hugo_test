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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=6de808c241d20bcf9b012ff818755080fe62107899c6c67dea5f20ac5ce94052&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=335c5c9cd8096d1ac272112771eb28aafc8d8ae333b4f1fa5617c8c192962b30&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=fec51291836bf9226112cdf9cf5b62895646f05f048bef78669ce0979ef8947c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=96b38e121b67bbfbcaa6862c665e7b9c404e8bb6c27bdbedefd0d44669d096c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=5ee7d8dd2b07edf3d8bce21194aef5adc33c49db7be97d04d8a0c179936d8d38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=c6d7c9da148a247fa8771b43f97ed2b391f44b91818377086cbbf45b3431c7da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=bb59f53673314c68123a0a82ac1d51308d4c4110717da5b0014ee7e92822b84a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVFIT4BR%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T131548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfWjDVB%2BoLmP6iWJnEFlkTSrIEu9YW56ic7%2Fdv8f9U9AiEA%2BQFE6QNOEc8kYOHj1F%2F%2F5FWEHeIwuX5GxoiEOBiJD6kq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGjQb4QwUIRUMKGAkyrcA42RqcqZvVAnYXDENdJoFuRVVB0yohZXKzHavmexpZsTMpjQ69D%2BlZmex%2BdpUzLGGVAlqz95XMfVkbITV7ergFNJ0J5McK1IHtnjpdBMMtLX6zWJC0EZYkkK5mSw4mgp4NSxNZpI5PkaOlmIJiB8BG67ZBivc5i2cy9slZdzCoEQMXYodRva7Ysh1NPw1qI%2FZ1hAZVWIXmlUSD6aiIXY4BBYUT6mlnGWzjvSsISB96XR1zdqZMRn64aowbwp%2BHH9tJJQ4q4dbqi1JzGxHLohsbK050DhtG6fd2BuuaISS%2FgZUtIiylwERyTRGf7YqZcW%2FOEsIG7pBzPySe8QPNIDuCy1nKniPwacrCTZmShVDoV%2Bl%2BdXzguEtKBSCHDFADnps9nu5k3AIZM9jcF6bxOFNQ4s%2BRonR64%2BnJSDsLe7zYVqQK6syurusi%2FOIwEWBd1lErJL7aRiSmIIS5rYKL6qm1%2BJq6%2F2A0Uv0QTlre1zx3D9wb3bgTDStWafpy%2FgT2q5Cuquh%2BqsaemI6OpO4FvXk%2FWa7cLSOhyi%2FUjOOe%2BRt%2F1Kjw7oiBrQIJtZHwjoo42VPO%2F%2FbwTDniTbNFxV17QTcMUolSnr%2Fgkyhxecu1btbIH42ezpdouuCwUTZfh0MLqMuMAGOqUBKTMZbEfoG3eNk2nW5xFwypRwZwSbjuhQPxiEwS0ptrNzB9E5qLpxsDyBBc%2BGUe212olK0Iw7k3BG%2Bkge7Fb2qhQIruV9ejmjaETOu1SESViQ1w%2FgRZ01%2BBthY%2FaFavY4qV%2FyXLsk%2Fzi6YtU789PKDmP7tWdtaGOC%2F3WmYomBjt%2Bcs7hI0SWh67c2%2Ffm6qK9wjfboLkzOX2rM1ovrQD6zxWFvGZ9%2F&X-Amz-Signature=ff6d3d69559ae3f6005e5fbeffb6c6db05b561cb80ea4f867788fe001705308f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
