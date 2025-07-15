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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=fa372c6d8cbdfff777b23eac591b128d8d02fb72991e9fcec7639064c0d54132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=8906009efab8e26fef1d390415a9d78a6d16e9d7ad7a205baabd3c7981e36aa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=17fb2f5ecc9c01c20ce2fb41403cb4078ffb3284aa05778dccf6210cc838dbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=a086c55bd16a7ded3bdcadcb704662ca93daf793a3768f8f6c8782ae65111644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=0722cb88b338b12784abb0b704a8ad364b1f08ea012aaf3c0a793133cef59f2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=2742f837de80367e30d7194430379ca23ca823ef065b290a902c9ba5e56d8a44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=d6b77ba0b81d6cedffec37e153628745836379506454f4e7e3deb2c9c2539258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UAHOU2F%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T132924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDnotZEOtt8Le%2FGgxzzhC%2B75z9Jn%2BMb3KL5oyVy5Vr%2FZQIgNx%2FrEF5lbceLAHO5CFdgjndFesjRMpOpGlzfc7vDQfoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDLoHYSDuUm1vw0%2Bf7ircAxcJmLVH6Vb6%2F%2FH%2BkU0GXfSsKNJWyKi0Thr8xFl9bQhfWrg1UNGwFQxA%2Bn84T8Oj%2FDKeNXTc9wnSWsX4BN6A%2FRHbbMg%2FfriC7Rvq7sJWc9CflKn2TGpApE7jzzO6SLzYHdrrB1NE%2BhFlcc2Y9Z4WteZ%2BgasAw30CihvGcg%2FViQ0h3M2NIO7rf5U%2FeGi2dB0H%2BLB0dcl7wMAlJrfmZgsycghXzhj6m%2B5oUSOeQ%2Bo2BlDbKO4npRgYgaMxBYOcLfI8cc7tgGsrA4zHvR%2FeqYCnvde3RcUw3cbnM11GZBPYNKMrbFHT5vLMMXOaWz3uilk9gGcq68xpj6x2XnKiah86qun1qdbcpIwdJ2aX3zSr7jvRylbFL9LHvp4CXHydeZzGhGrz7lbGqF04%2B4as0ftNu6e9FRP8YiSQFw%2F%2BAMzOvoHQ7DFk420QWMjJqVbe36YmpgpkyiqnAvaGrVEE0bRneWRMA%2FIW545TNSjnlYG8DjKK1Ez%2FcSBUDpmw1d7no0dtVJmid1%2B6pFK%2FKulH8WShAceYvFK61iG7i0vnITKweLVra%2F8Q4mPpdk3V4UxWEwG5lA3mqPdkpbIF63usNgVto%2F2dXEY6GRoopGmtfi7ezXozKEWd%2B6dX9G6vYOoTMJGE2cMGOqUBzfR2BZTMXViSNv8Ml5sL5710lVU7H9dSglIPfsXP8%2FdRQbvnYzR5OSkvEpIRe%2FDjwIh3nfsZ3RyzwXJ9w5y2HspFBUqgco4K6EBvqyGmul3wff2Hz1N5TgF19fe9DPKfI44TkUuWpAPCnkBd%2FZtLSk8Y8%2Bz%2BJmXn%2F9jnoJHuXcj4MZ1ESDE%2FIZz5YhVJzOO8vH4LNBotVCgYsfDwtw7Qu%2BYFe9aZ&X-Amz-Signature=c54e2d1efcd7dfc311479d120ab8a2578649b7505ac9ecee70809a3bb7f1341c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
