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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=92ae654b241d1d3ee5c0a9cae472044c5cc37128d9c193697e6f4b0a362556d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=d2bebc622c4f98d2bb0d9eab7c30def47e5f1dd52aaa13599895addf2bb6d400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=29b82522ae635332b1f57d3a3f0854e42b2ff18b415d91cd8ce7b8143f570faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=4c0ea6d1c734250431301d6413d309718342e1cae1777516b60f7d376dd7d225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=3ea897ae277f8047198826f3c3b9d5220ac4bbcb0254249cc941ff227daaf1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=76d851875b5338124b7addd3873724b7d5ec9ec6d3a806cbf6fa2af4a8d8a33b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=0daededc8270bf31639ab7f7bedb4326ea7e44fa7a082246f904586c5518036e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UUQ4T2F%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T061401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIBtdbVrwdeUlzc%2FiPFhWj0dO2a14Yfu%2BPfWTb7WIOy3nAiBQ%2FZ5ALJrlH7drx2vvkc8ATA6UCGfRfavFtJppgmhEByqIBAj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUa67zodvV19HJnbnKtwDDZrxCQ2I%2FEeauF3X1ZFzxQEIbGAs%2F%2FyL3AK5ZVQVgL7naDEwPq91mdGEJIULFOTSOI%2FIieI%2BnRG88FSsTI77iHN8Ds19xLcTtkU0%2FdWxrk9f2WrR2yBBiCwlobL4s%2FIDLWInjhQpwP7dK07uJOge5E%2ButMTnMl%2FiA3jjpNS3FFzGB2hIkBk74JLMT4GL6l7P6upHaRepxEtmLJIsYi%2FtX7WXRluttg7D3DoDbg7N3GkINT70GP%2BbTbUJiZS7LRUIMGFKyKE%2FQ9EGT2SrqpDV%2BRkoVyuIOTmThGX1Ikp0%2BY%2BLzA%2FdPxd3V3%2F3rtuxGSSf1EIoPm3PRWpr%2FiLZayAftH4DTe8lkTur39GJsMTyCWx1BsV7zXJjskW%2FacNHvPoSISyS2RnYghL0p0TWcP4TuUHiV2T2tIHI6n7crGu4miJEXZgOIOSWhTA96C5GZRvWZvXdPpJT3qqZwc4IYvd1eDLz3blzAXIhsg5cmVYjvf%2By7r5fNzfBbj6XhXjczSY1IlaauMvmHq4XVFU0Gw16dK9A%2B817iXQRZtKLS2rStpPpQyi7su2x0rNcXGcoHSjGJ9%2BpFdoFHXi7Yiv%2FUEgGC%2BzlULyadDHsQm%2BeutXU6uh%2Fy4rpBKfiXv7H%2B9ow0q%2BYwwY6pgERqi6KfKCiD3PdGmf6fDZRyw0ohfeGnwEIC71Lhp5sA8qVn9tVkRtStSKyhIvA0tB%2B82txHVSgAwLSOBA2a0tsULRMynysW3lnq%2F9QtZihu91QcoA5rPoi0QCYdpUOTI6NKG5ynNNphgnifLtlzTaN9MMMz7QyT8CU15Khk54kg0Hv%2FpDurtH3eTk5MV6mqURpMmWsC4XkYox8KZQjV0T%2F%2F%2BgKbOb3&X-Amz-Signature=99bc98d70ee63c62cb65d7257a485418384b59bb7150ca0eb4e5fd86038fa095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
