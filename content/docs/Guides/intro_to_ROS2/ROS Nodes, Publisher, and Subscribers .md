---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=c9e7953806736f63c7f3f1dfac7bf90db35b00eac2b686baa4149559d3572c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=78947f94e1eef92204931b9bbafc46fc2b2cf12f6b7093d31493229fb307c673&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=bd85ae25e42d244c5609cc9def84d7e8cfbb343ae513a31164074ef53af6d7aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=4a8bec3ca8e48866cf7dde222ccfc89b1c9cb5f38af6a3f74694a85db3cb76de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=403fac0d29b0e43bd6fc12e5d28e8afe9fb6f319691b7c9b56c9bca1fbc7da97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=425691bba9356f9af9643fa062d65dcd55fe8bcc2688c252aaf8a7459e728d38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=2b0ea45ac924b6bd78e3360e40861d1b7411c6a5dc3563f9e578352457da72ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QP7WY572%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDt2c%2Bt5ZjiuFtsc04TnifpWTx%2FfGSnHds4ufiDfywBZAiAdoPAFe4KdtI%2FYDgqVbFF2vzy6cXL%2BdXHOp3Iju%2BObmiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjc01Aru9xkPjZvSGKtwDdfBhsQJGt1gfbQkwyszUgDU0nIExCkNmzpPm3w3a3O8hURC5kiThOEbXi%2F%2FqhRo%2F04yfR7fZ6yHCu6WfuwnLZqia2KYMbbdd%2BspDt6PQMM%2FmA0sVhMx0u9DDai0EX7Xdm8NXbkSeIsU2SyuwyxCgvZpGcGRdKVEPMnGeubSeCmj5%2Bdyl0ToLsdQJnfT2YJ6z0wvwkYqLbOz7S9Kc4ueqcX%2BbD4PgzkH7b8Wfj1W9pZCsHug6MZAewuvKCTaBo3K%2B2zevbPP2Na8T%2Bi60BWiV3dZHw6X6yvn4DWrybu3khKuxu374064CuOFAImvL%2B%2BX3Pp8HWMKmXo9H6aiQP%2B6ifRWXMh5UhkCs6ACuJLg4UJR04NVlkNG8N34I623V0DzNlO6XFGBSvSHJlsV8VxnC2JHBJW8ai5myVsoTsGbSBrlK%2BvcODQ70pzkghHWnFM8Dtmpl7g2sy8dURRORcKdqj%2BcC46MtjwdlUH6ymmQ0sQtG7WEns88S%2B5K5eqFjITPvVQyOZBh7YAAJJpKyfYPSoQ3d2UNHwGT9phxM5UtdvDIX57QPdeobvt1XGDVJfjs%2BX6X48OGZgSG4asWUXbRLXlbW3RS2yykPriwMHM5fmt9c48b6QPMOQVBU5pkwpfvVxAY6pgF0KTdwfyMKrD4NBkAVf%2BGvoLBHAv2C5L7Xrk%2BHYwX4iYtFLMmVWvekRlv96a6Uf2zrZTF4kpSJj%2FqegKi1sDt8wjVo1%2FOgBDcLWjF5Y6R0X1XMCJf1pflJ4hJDyLylo21W8LN4s3Sl5EQI11NHlFKiNCJSNcvefIiaT%2BNdC6Zyxs57fDpc6OGCZRsBSp716MWmVbpj%2FIxYawocA2ElZIoU1US2YTuo&X-Amz-Signature=5f572dd581ac6d9df2f73959ff5101918da6371c3a8b442b1259120a3be79008&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
