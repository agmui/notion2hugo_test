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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=6c1a100ac7b6c7ec45e6c5d0f2231973bc67e7f30cbfd57e860699ba0640f55d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=3ccdaa10066e71aaa256a70e765f471d5c1fcaeae3a9689c9a6bcaccf9e5bd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=3661b8fe39dd35b2f15c85d8bb74c0942eea7423053006efc90f04094de53b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=8a0998d53ba1ade261f493ec68076bc50bc9e87ba50bd6ea648bbed92131bd39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=c4ac784c3c4773a02f1389afc58caf0fbfe7e8af4ad64955fd9239ac9d7857f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=e0f5698cd867446c8124a40331849c1ab4c2fda1229d3549bc331ff76c5ae802&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=75535ee1743c0c402b7fd91730283892b69d1b4c61d020a9cb9498e62d42109e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRTTLX6I%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T220846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQDMsvW08TLMLYu9ABXOMHlq9YZhm2wBQ3Q3iPzpjmDFaAIgR5QTwdQEBbV6M69Wj58NxN91e8T2FxtbRPN05eQrSJAqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYIsW%2FnfN0pw6773SrcA71vv94oUTeUGnhl5%2F4aQQ%2FQp%2FChOUvJmrK1Hm%2FHGcya3%2FJQmdSh7MWoQUCtC0sbr97qBQPGlEA8m%2FmXvBbW8LE17KTPAK5ATSjNR0o3oRweYLhJ9VCFqqTrZrJaqYqhJrj8jppM5y0iEN2JkPQ6RQfBJNYpuoj2OG3AkwaxdZmyS6lonjvZxJzi8igOVXwLZ%2BLkZHdpYL7CanvXuHITpYf7sHC1v88Fh2BJnj6%2BKAy7HX%2FqpnFmrbaQrbAEd14Jui4CxQ9KqrXB76w72G6CQ39OxhbhDBwQsnKpAUgF0ch1vqYoIh43YiX%2FXTsYFiTP7kDSzj1eL%2F%2BUto7j%2BkRkL%2BPcxKigs3TTF09jdNNR%2FOKIbvgTCs3GUMqdJ%2BG1P%2Fy%2B3V7YC%2B9igMOxCMAWj2cqoK1gPIKdhrE7Qzs6GeX04H4V8EWv9i1hgNf%2B%2BWq8XQ7tF3kGHNAw4jX7ww1Fy%2FeFZKyKi0Qgc3hPKz15ESIZlxqfDDxQ5hEozBoP%2FNOREKJE4fIJMZQnMUcrPbDmlB56lpxoZTTD3mQg%2B6Zt1jaJGPg0nDcrQ04Re4ap7Jp33Smb9E2tT07nS6SC1z7vIvrV329OBTvgV6%2BBUYIYHpDxyBQmZofheNDBu3ZvDVVWMPnf2cQGOqUBO1dhA98BsJ3cEkYzbDMkpdjDTafK0pY1WzdT5mY9FbhwXit878BNSoMBzP4w%2BzP2j6X2oJGli2ZPwsB5Vj1pxWZV18qssdGCElZNMJ0Xhh1KQtX1p%2B43Qp8iY8kc2Gs18YTXFKQ92qqJcXkixRyY8IdCtsnZ4EowgzhF07Lb8dKEYfAfSfKWTriQUyi2LUab7VLe1iRf8fRdR5UifE0T63EhAR5n&X-Amz-Signature=68c234bb53452f6eb1dfd37575635805b251b8f249a7add4d85cadb17985d804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
