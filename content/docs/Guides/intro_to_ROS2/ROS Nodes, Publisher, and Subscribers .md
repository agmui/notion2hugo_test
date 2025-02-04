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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=16b2666e18184ca9df1188da7940a843fbcf3c39fdb0c1f126989ba1c42549a4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=61fadfd8a3448ef120ee05791932bb00df4f6d99433b940cc03c168aaca0f84d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=9ee25b20c9e837597f76d4be70f41ad55856ef7a0080106bf3297d4c82d9ee12&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=3a6ec12302c80519303f4c443aae2fa95756a1052c0210abcd2dcacd7c96f2eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=3591c57d50a04c21707b9f14419a6bcb0f14f77c4ff11293674ac80262524e91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=3b749076163fedad90a0a9d472ae18ee7eb64803344b5faed9449a6be7305131&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=0a52a83c1a23a3e2feec980be880e4e6be720a52ef3a9f038b9985df66b84697&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4VXHCR3%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T131504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCICLFF0ky5egxByYgZytMOshIxantKChB3pQMKKsgYjDFAiEA2BLDennwp%2Bewf6Rc6qRkD2ezX2LlA9pl5jXus3mIelgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDAheMfEbXq%2FnS3yfyyrcA%2BWxgxoSdsPH02wqZAPcB7a3nLUaaigCAWjV9HtFtNOiuELnI2SsuCi32WTijI4nWaYcHszGZbl9nzm9GYu2oFjuurBFerytseaeLv4lJICoRLx0spA%2BwU%2BGKCdTa7N5%2FYvZcMqJTDWqkubQQV4kRAsrTnhDHK8yet3MV1XhOCPTH9HR4l3bbXATYvyQuMzMrKrVLmyQ7JArwEiPHH5uQzTAUpIXE0ctMwX31vC14mOGQlWUrrVy1vo42HcdBIBMJQ01imLXoSQ0TeWT8dJUVVbwMuHNoomd%2BH2WpC1UY4DuVxaCqwF1l45CbhFtwU5YGvFwaxmsce3vqKaZCahG%2BhTqKGNsuai0cz3V6YDlHH6rquO%2BbRUAaa2t4i%2BI0bk3MRcPMLMQTX%2FKmWvhpGJGNhtsQA2hj1CqhevSSGhRT4GC66VYmOmDIHKSqj7zbhIJNCejDn1CUoSP57hait49axqBe%2FtHedBGxewKuExHbq8I%2BGWWDrzc5eO0sURIiY1mESlTjuzmTSsdG2ysQWY%2BM2RnzO4AIxsQGsJUkOGtIy8kSiSnhisX1JtbFEqfT%2FD8pmpZX930lKn6o3OPZdGaxHMxVjZsIDAePDb7Xe2%2BCu4nV%2BvbJavDZZDpa5b3MIWfiL0GOqUBpvHeDf%2BOqDML82dnJG%2FARqu2uEneNn2IWo46rDOKLxiDqkbTG%2FSvOoXDcDl%2B8maH6jDsiHBGNG%2Ff4NW52NjA8TV31TWEt8q%2BhkDYt7wgAqdo1LpsTRwT64J2Xf%2B1rdYOQGb62AGuFwXJr5AXGzUT1W%2F3aTBODH%2BiS2f8%2BewgCLruS%2F%2BoTlAQRJr2Ys7k12euRHbYhf4l9amzcrIZsETZEX70ydwY&X-Amz-Signature=19d062909aebdd88b8d4d638f21a26bb36dcdb9919fb69600b90af1ca5de9f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
