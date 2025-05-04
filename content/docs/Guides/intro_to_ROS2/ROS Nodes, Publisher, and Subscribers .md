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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=4e81c3d81173aeb8e98fe8c791386ad8d293e9692b02a1fd5a5943807522fcca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=35f6e2457be422d5fc5fde04b8f068b20b634ff087f5d2caf826d471fe868ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=4af1bd2487a449cd770c1c0a2234e8a0e214393845750a3d04d01a8ca6546d66&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=9d1c27d92f6b31ec0519bd0f770a95866ac964c836888857c22ff16bb0071f70&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=78089306861286913559642909d2294427b8af8523f5342fdfbbd2274f870027&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=69edac42ceb906c0d486e79cedcd7d5dc30a56e9366c73a04810725b16cdfd4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=952d3075ee6f5f81431939f5523283fa12835da291fbf0bbb3da00ca5c6ae295&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMMEEZX5%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDvW%2B0v8FGMQifOnSVTRmoPymfq8zN8vdwG6uIopQNPwwIgGtcqlDRk039t03XQDJCV8YzyXUbBEk35E2ih06qdDTwq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDKdGg%2F6cFy%2FxB6ajRyrcA%2FrIrhvJMGs3r0KiapHuSNX1hR15oqLIFj8l9DnlhYop%2BjX0TBCmfaPFRDr4xjL2qgnVM%2BtVDYyMv1Nns6G09xPr11NfP3jLVpv8VsDxcPndz2SdclbcHVpVNGEhTpgcXf8EIAqlwpUZF%2BUYEmD8Jy5pnkgYthXoLxpJIy8uPHSB3uaOssXVwJVUEv9FCwAvlswsKjggGSBv5MgtotPkBiuMJMkIsx6kN%2FbmmbJdYuWsVRAKZIFlHQvvFC5aH%2BxmkCKummG841K0VY%2Bkgi9XSlBHfT4yHkdwcLYOLKuaro3ld3iyhGGTBZhE3IUC%2BjFl7ivnrgWfXBcEMaXgRH9%2FduTYPI1pkGneA8ZwXudDn%2BSRvuTurexkI1GX9oKVSSf0nOKvHmSamfZ3B%2BiTxgJy8dEnIY85ydvWzpfKYoUQFEuS8p06Ls0IyQ5XhrIlVhm5pcT5XNTo0IQLiZ1LG%2FGCSj2aOw5IXjs2XdDpiP6%2BvB87Uw9ctv9gZ0WjzLkZOi%2ByqBxF7H1WWTn%2FcC1t6EfYWcg%2Bs92jSyAxvFVNVb0U25RizII0%2FMyjri4SCxdUovjVRAASqQ6Gmybbx%2Fkq1pq7f6Vyt1JlFGhnu8x0oZOXy2G9iXmnc6fY%2FiWBZrYUMLOs38AGOqUB%2Bexej28Al6BEoOKhAPfsphnz5ut%2FAXVQRgGIk%2BGSg8qQcYKgty4bbQ%2BBPZVVmefO%2B4o%2B5gqtWGn9k46E2P%2FN08MNHoU5C8WaS6t4FUJiL7xBZLSI1Z8rxETBsCUbpBwpkKDeICvKu8DVuDvvFpSlSICe3IhXcKBn67oVAQjXVsvqF6q974kjv2eP3StxIeUyXWEbDMBGbnTvsR6YYxOq%2By2DJdWX&X-Amz-Signature=4442e265e6afeb6709374d132afe20cdca9a93b51871324b532b975acf1466df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
