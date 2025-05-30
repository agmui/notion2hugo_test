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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=90f47985eccb980825538c63d67a811111ffc216a31e04f8177b5f24b39efa62&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=d0577b1be7aea03f941921a0f0450e798f09eebe475bf91d81dd9083f40b2108&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=c44811c78f9f02532b26a9c1a46b7f835be38d9227ddedce6a7fb31d0b5beba9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=d99e3d5239e2a7f99f9ce73d08998963d52bc7655d29575b7ca228e113dee876&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=6708a073caade284f21eb72a0cf74885d6dff068e1843466af73a06cec55eee9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=6d71a748b2111eee91faa1aa620c9dd303d92da8f7404f4274a78ed3c6d59175&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=6dad4d82cbdb7b12c8f911f0c5f0c5cad6c974f665771833912ca0f7785cadcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JVA7S5D%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T190655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBwDc%2Ffprd2kUoP5irw%2FTpCDkRvTXhdFfNh7hCDyPq5vAiEAs3Xcw9iQSGoETMCWDQxKZ7vTGFMI5JuYid2XN%2FXaZY4qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKPzxONVga7%2FtNCvxSrcA73oGKXvL3%2BMPDF4JMPTk%2FipG2KYdDrVOMFg7sITJbydA5x0m3XWO8hlIvcRGAXJZ0xNkVHTDTGx4K5zKVIymiptmlG3GS01nv7cc6DaZvPB3po6TMaUiYRlvxDrqL28zEMqNN9E4UmRIIgxWPZ1OHIAJQCKHpWXb%2BjuWmeIWsFYHQ%2FxIZmgkXeAc9W79NcXaLFRmW5%2Fk%2Fq0Yy4aC8cJYR2h2sbHAksLI2reH1moJV9cOk0SvP9%2F%2FfUxKONJ9R3YmysI2aeosrEXLJrHIslptDZNuQNjYu1cthXAjSND7FUlviHIq5AE3roRT9Pb0OYuCnzpWoDPxGfZ1EEriSW2pou3t9odKNAJ6v4YkKZWBBwXwAZrUea6E4GiKuntd7R8SFU16qYgGI2mpkB2%2Fk2hv070zwvurxXC4bjMo3ntHG9oOTgReBCkjJZATtCk5CEnXneDk4mDwwqZu%2BmfrPeELcqDi1ICh89in3o57DXYreMS2VLAegbYHQbFd4y8RevdGHcUROTG72bUJCbMSFtUbDNKwnvmirZEIUh7Sh5jxOgPAUpbpsq5QkBppxppkIezvWr1zZqoMWFqTPu5c0QenbQvukNTKlN5FzWmp5vTSs7E45nVRZjs4VgVHMmaMJf958EGOqUB4gFEiSmjYqFIH06YOFHiWlNiKyBZhiL5emvrOBRODvhZC8pKlruFLqW5ZHZLgQgAO6GNlhO7lSNNDADKpk%2BHY3U%2FitSpuf2We71GdKbvODBNobgbQRv5OmgNXtPIih%2B7JthY42W17tXCsRUj5Oz0RihkPy3bTqzOEHAV%2BzS5d6Fk%2B%2BG2nRkF8Y7v8wSli%2FA5gWULx4rrrkUG%2ByI9zSMOEqoTnVcu&X-Amz-Signature=5700c68f801c9b48a19e84d190d530677a39a6e571b43e68f90edff327b7527b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
