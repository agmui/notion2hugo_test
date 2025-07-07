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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=dc1b54df06d2be4ffd574489fe79207a3fd3ca646badda7530aab0da82b102a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=cfa2ca7c4fac1670bd799c85bbfcb691bb07577963ee135e8a8479cedc344ed9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=c93137f2418ed896f1c5e8b0e0757885c71a94fefbee6bb19997aab821cc741c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=702a9d1ee80bf3115a397359b33384ac71627a5f5142162d86b0d3c093ccc85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=058ad05264e135ce82d8d3e89fbf05583d062a9401e7c8f46221973664c023ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=ae2fbbfd6ba10dad5788bb998f64529b97efcd0a4286ad685ba5a32594fd6d2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=e931883125d84b9ab4749d3b91968bf1785d2b7d865c42379848f3eff2456ac3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJATJW3L%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIEA3ieLiSHbWeqHHGB7NYQ1iRIUYAFKcfgpjnEyQw17KAiEA7zx91L6icEDo2qJUmBFNSaZd51i2CWpR1KQHJa%2FZFvQq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDFxuqSK6zoLdB32RNCrcAxRkMvtaujyuQQyMbIPcb9xvVu9tgi%2FczJq9AM%2Fpjc6qYuLqzSReezq2pKKboCdYAtaKd7WtebAqxUq42bLmnRvb7aCP7VFBPenH4In%2BeXDBauuODPxGSJRBSsudrK3ume4fpVjAuBzvGoYrGEOqAhPB%2B594QqQzCBY%2Fo4Vu%2BP1YmDhGxP%2BMdBdp73HJveEdbtRh%2Fhsl22B44Nv6Tpx6ZxEcmUX11DpMnL1LFxOSKy8EDoZUCIxCf3ceYecJGR%2BGn8cbbpO5OK3aWp1OsHRPHgN1k5I4GHd7%2BF4ZTbmQqHfWEtSDzR7A%2FxBnVYjoi3Dztl0MgbFDz2ghfrOJ7MQmUU5D79o%2FLXvT341RLYVFLXdFB7Y7BThNHkv2Nrr64JjeMstDyz1UT4O%2FKjD8ZSd5q%2BJBx%2BHAoQCYmaSR48%2BKQSsqySAGpYl0UdvWx407S%2B8JJ8L3T7vSk1DF926kHIPoRqVjKYRQgVMgpQ8KXcwZu1QN6H63i37%2Fru%2F0h8vVAH3%2FqV0pKi6oqFrdQLIRL01gMJW4Je7r0WmWbsE9hxZ0SuXIuBkI3hqgzHkWgoEowZDyrnwE%2FrLC4gmtkDkOB3fBNZ7m0wnTN%2BqavgeoiMxtD7OsZhKzuN3xURVOJ5FFMM2brMMGOqUBb1RDO5vaJa4GXZTwSua51SOOextzIJgQlQt%2BFtSI45ym71KSkbHhCiiRNgFoXiqL33Ouq7HWrEgpK4VtTVUH5zXHaf6Ru7wzdeIDYTZEb84nuu12AM5uCHY%2BTZ%2FD9%2Bqxi%2BuqBQQbbOwmT38Q0S5IwLbviOqMM9kQ097nyby6Zriw%2BgbCQ824Afo4PHCuZv5iKE3G0nJXaQBKpi%2F4p0St87XwQSn5&X-Amz-Signature=079e72c1da0e5aaa41ba527a672a683f1bc7db9c8e09899db3c4cf6d3e0804e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
