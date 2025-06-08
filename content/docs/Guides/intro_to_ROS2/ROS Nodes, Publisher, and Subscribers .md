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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=a9c8ddbb7892ddceaa6b69c4a9dd997977756f96a7fb05daf919af4b13072bb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=7e5d90529d8b4159868c2aedc57d10db3149fc5501f5b701e58ae9f5f2ee90f7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=6c51da5dfbcd77f0a575606cd710dc59676ca3f372b96eea1a42e7ebc72a7b4d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=3e470fe0a251b640ee3495e0ae5367792854057559189fb6bcf661c129db661a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=fd4fc583582ec2df17d7024270e484e7a3b58fcb931f5db20038f51c0dac2d63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=fcb135aee32751ea5467cc3020383f13521b572f27ca0036bcca19edb72e18b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=6a1e6510e77634786a299052cb682f1c7c9b19c8d4003d0d970fe68f0a3a9732&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VR3CA7K6%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T061155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICULdaXP%2B5FF1Ev%2F5O6IXvsiWNDto5j7AUJ7FeHsitnwAiBGsM3S6GwCtjcBQGzGqszUYHs3CUQ5F7a45y4x3zAxPSqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp2o9K3gfUvETVqbTKtwDgJqTHMvN%2FXqSf1Z4ULKRAT%2FhzoTme2XdLtsNNSfuSD5H7Yyq0cnggs%2FLiAgBkNO0h4TbJbCvO050sYC97%2FuNzUa9TA2rbFAlG4bM2%2B3B9eCxgq7A3FoVbgODMKRw0RnnHQaoZwKlqQNMB%2BVvEXktj0fxBW2%2BC1D1tQd%2Fq0yz6E5EZ5XroFqJosWHOsN%2B8tUsmazOPFsHEm5L%2BTCI8VlxI9r%2FixQ85Rbpn4ZsXVxlxaeKma0QUmOMK66pJqVKUpJYa9unzqdgo%2BR1X2gYSrcf%2FfztbMRi0PGxGCFuFuPQ1DtIX8Bce0J9feMJ4SOjVR28lovmcMWVpbKfXIQGZOb1A%2BX9ahiWHjrfOnmNQ0C%2BFGVYBMZHbcB0zYcy6Kvy9Pvd1%2B4Gjtq9czr%2BgHhERBHvUWcVDJN70RIj7kFFa7sul4jBE9%2FpALHCcqe6I4o4Z745txZuStj3AqWlrAbI4brNcpl%2B6ylUn%2FwEbgbaFQyWTZHOWGKYWf7A5uVsYMzI2ITx%2F6dwYbcNHwnTRwsXgYwsNLmi3%2FJcYq0OKdHqonjaNAqNRJO%2F2cI%2BmHzwdbzr%2B132HhOqopv1TUW3M8cc1VHHrVUQnyQHeIbQkA9HqmrvPb14OYkhsqoXYRBG67wwqbGUwgY6pgGuaWfEUnDLI%2FdMJaXWh%2BgXABhqjv%2BxThF1fwY1WrE4m7tyDYrw%2BU4GcRL2jmNAjvEVMZjbaza78TPyLrX%2BL1oxf3J5LhDgzefBUF0GF4NoFHwU1%2B9rPHPHZitCxh3ZF2UtpAAHTrN4l3S2DSj5Xr2H5WiRkdrOHMQuBm1FHjbnysQcx%2BO2UsSh24euQrZK379IU%2BQf7NNK0E59R0GdipkLIbnqrS0d&X-Amz-Signature=810a6374cc0da7a762bbb19687992d130f162c1c7f12eeaa4d8883752ee23be3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
