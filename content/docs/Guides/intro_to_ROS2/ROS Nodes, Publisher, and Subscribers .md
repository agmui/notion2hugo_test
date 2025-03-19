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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=91d94fb7e18f6354b20887982babf9a34025cd8faaed027a4d7aeb7541e4a0bc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=067b3d250a53887457374e64edbf9d2c703c149dd2c3c6ac89299c30fb11e98f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=224a03ad5f2fed3f45e2fbd01604e70d4f7e0ef9209c546a87b14ebed7c715d6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=28c164af71dcba2101bbc583580982d927c939a4f21e589aad18bcaadc2f9359&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=4f927488b14766bc58f5429a47ead06d2d0706555e4886d253e78f965009f380&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=be8a5e8d5fdb869c445072fa0fd3d784e58b4624505ee55c83b12d07fcc9f2ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=17deafea1e2b0c562c2f12e37b575f45083c69ece646596d38eb82048dc8ad60&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LA5MA36%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCB9HjcjyEje84aHC%2BzU6CKSiF79BvQYzlUfhaA4wQ%2BuAIgPQIFVDdUqJ%2B2ZXp0BzTyVToyfmyPA0zrrvcsd4S3WKUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDFiPLd%2BsJ9Fum186mircA2NNIbiXFBNU0pkts%2FPm1hDsYoodY7hBJFvHiamFje7KEyNJDlAJ77UqcDKkj%2F%2FuGItRDo%2BdGN3Bk5FtYiS0%2BCc4gHU1zdqGnP%2BBJ%2BZ33vBMT4wTAq8XyVDkuP7lFrH7jC1J6YYqwNmJAqu50UHV7Fj3hpRjX0vbwXM%2BlzTRIpA2%2BGDVVWJUyfC%2Bcx11cMlz5Jd8rR42Y05s3uhV%2FkWouZBEAr6GQIPlsdgC4SCuBESbrhK312j2EdlGISJJkZ5oyixCG87rau08VthmfoMUtkTcFOdDRg1dGsQOFhHq7%2FeTU433BL5Zt1yF88glB6wL9XvVZYyY5D8gTb5bZzhEDc6O9cyjpuyI7l%2FhhCPJ6BG3YdVTA9AdG71P4ghGSMhQXafbz6qEIT4cwhd1xRtEB5%2F60R6erSVLZi5KIT0V2x%2FSijuFeyu0RKWZ0ye9ukkZ0sHQkOXtdG34D7vUUT%2FOJ5pR3rz7x%2FBf0bM7xMf3KvUzt4MBU5oB4H2WlscOBl2jKU0E%2F0SQYsDjrE4aPO75mn7B1Rays2c5kQ483wOgRMaeDBNBM1A6kPb3rKSRDO8sJ%2FblRFiAGL2TfnY2MTVmhNjAGGRSwlNlzlZUJ7TkC9N2fzbNPzCoKrhOQXeNMIuD6r4GOqUBjH47kKSnqUCxtuUYVnSPbi62M3lDdtVJJTuUymhsAHHtdu3YaM%2Bb%2B9wxyDNhgRcGmJP9d7LcNl0JWlg3CKcOYrCrFq6azbXksXTLEVC8h0bljgjBDFxJKq4L%2BSHtfYpi0utYgMmhSuhOozLFa7eSQ4CjTVWaXh%2FPzbWhL3qFDpQMvIb0VaVN7u%2Bp5GkckPop8LtVyQxyumuldgNABrFDIcY5qiov&X-Amz-Signature=6e395e0573df623424aa0036013dfcc94711ad2edf0834eea34f9ca358acaa67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
