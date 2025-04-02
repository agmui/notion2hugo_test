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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=b9abd77f459fa9bd975ea94f74217a0d9e654e6b36b1685467113920d450326d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=70d9bb10cf2831592a2a03f2c6caae84c7e91f7f2e8f2f963d5415fa1bb65fb6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=5c48705c020b8232893e029c36abc9726a35ae435305979c290d2102bf775fc1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=4908886f9842760f2d1148800d31973d4bab2725ab63df6c232c492e7841fa5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=2a7e4d8cbd52b7da666b618c89c5dcbb269688131611b787600448acf93ebafb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=23a4cad8cc57f642b3ad5ef8615f5069858682e65adaebc2e9021d5af741dd9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=7c47568f29aad8aea90905da6cdb02f6926c393082ff4a405edde9745814e6d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672KYKFJO%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T022012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQDCzgDt2Sjfhqf541969UnT9KbcToYGdzQioDvdCYDIwwIgRDAbQ4qu3oyQP%2Fy3m3zt%2B9RmyHS22WriibnvLvwYRiQqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYxCNPQlBwEHuaJuyrcA4WXv3fw3sXNlfmBMFUQxpdOC2Loe0iVnhA7DJnnDsmMLRXLknVwEopHGXdNGfp2%2Bf6I9HNewRqSDHYxXc%2BQdPsn3fnlVBTRnGMglRvIw%2FZymzyMFWpe4rdcgiGvTv6Nt8a%2Fntx6nikOVDzdJ8TY0TKI%2Ba4pnM%2FdmfLcoY%2BjrpGOlUR96w0boLeECFB%2FQvRkhf8JhzlBKpPpkVAsL6mkxMH4YNepIgolcE4GBt0Zjd79BCg1yp7iha5eHiqK58wpwzD30RIo8dnNB2%2F%2FVUMnMsPpl5PnWA9%2BNHH6or9hi6AGbG1RQ5PXnh8lMdxvb09rUV9h4vLP4iMfdZ91rSDeypE2O5%2BmYMbKB1rtnimTQbXmj6E3OJewcTIDuAPqtmFpNbo84Yprc%2BbIc8fx60so%2BU5Ld4Fim0NNUR%2BTcycaSzRWQb046ZBLxY%2Bvg6%2FjzliwSJSq9nE%2FoOge6VxpW%2FR12nyk0IBf7wxn%2Bxg9cFPHAzNqN0gbKOV9de1bhB9jzF0DtIo7Nw2PYhQklN4PfDc79cALZuGIVfqAR9tHFKTPvqqMjE5XEmzxC7lNtxT3OwSUbBA9Gwdo%2BYRFG80EHmS9iWnT0lomgb3hN7ZmD8990uJCAlw%2BPbSjVVfQpgqxMKK4sr8GOqUBmoxdR5pXtSj64Ux%2FgNMX%2Fudga5TAKyl%2Bpp3ELfJyJ4OCqxcfHdk5hVbbnmKV3R8i4VFZ%2FGYQ02XCpLcrMb7yfuVIXrI1dSGGLoA0hnMkyYwMa3Ead%2BnDxK12FEgF9wSoFgZm1aGkk%2FZ3NBHEgplrVprjuDBxiBk%2BDllVwnaWu8RBSYWDLZomPDhAizblPp7zd0MMX65Wu4iCExHSWJTLY6OdevEW&X-Amz-Signature=788d6d21e0b317321831dbfa3c096712e7bf23437efe97647cc2905097ea6feb&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
