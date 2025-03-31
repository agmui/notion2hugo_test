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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=283c3bceaaababb2b5b1add9c547d49c84d183b99aec7fd290e061ba1b2394c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=1122f116ab1816ca41282bcfb39ea299696ac2d3fb4584d4928e1cf915f75aa5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=85392551ec1f2b39de82a5c3c92eaaef5fb12c2fe73aa09072c855effb568e42&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=e5c24385568da6681ef5fd48edeebfa76345d3193c5f2d412eced0dc3d7b9fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=7591941353848a42b27ed997e58b928096afbcbb204de4e46d85fc220e1185a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=c4df404cca5546355ba55fcee12b9ce386ba06aad4dd891ddafdf8d913ea5c8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=47131902f56671f9058bf1e43cf60c56dd73ff79303643f9ccb8b4d426b92833&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMT5XF3O%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T041049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCVF4icilnBPIdZJiBZhJxHq1SYQlcFE0WTiA5tKFnUkgIhAP7%2BVjyLsHlO2wAtmwz3Vn%2BwGioDKzgaRaJPdNrSs6pnKogECJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxG%2BjbX0UdqgnYdVZgq3APuQvCDsLzTjAXiqifIy0%2Bc9V4vEVyb6VIEHBhqner6fR12l4Omus5YyzYEHqatqySipUvapmRN%2B8oB0%2FePPkAjNJWYtZ7z12yLHqsOUfRnkkHpGK1OhZ1mxZIvrjWTiSRWp8AWgVAu%2BDhTkfzkeyVFfnEROEUcO9jiGtMsDDHZo%2BUMw1HKAXoV%2FZO2v2xt2wYzxRl1ylk%2BI%2BcGiU6QwLMJJGOjTflzNSSwp%2FKTXSnI0kkSo60W10%2FOg3if1FJLabHjJ384lIZ%2BqEzvU8dN7GMzCMlM4HY3rytC%2FhMA4t2n%2B4J6EIItilWYSA7Po8KYdB57Z6TU0w6IEGfhZjhyRlfrxVS38s8d3XkmWFJ3tsp1LN1p%2FcT%2FYYmbN5%2BuOAhRz8kAPZaw7bNPiVO9RQpfEf2PCx6RQbt6LwNfekUF5ILoFgQiAcsQ%2FTNJBA3a7hWKBxJF4Aq2OoaslgyVP%2FlCj4A9fnrFqJSC2g0LNqWJ83VlvpI8V9tobjd2z26rOYBNbNT7NgShzxzzqPEDetqMkPq199xTwFD4iCvj9WqlcFX3QHYesFRYnXtH%2BLzUlO%2BwRkmLxf%2FLf54WfLCTBl8f1P8KoXxupGcW86UsD0%2FPpFlt3jrRDPcQaCAfdIuQiDCnlai%2FBjqkAey9kTSGc6QwUZTl%2F3jY%2FdYtb5jujMo4Vfpm5%2Fg6lXfVVLxi1BWlGyUMZy0T8WA7PJbmLGk3kxDf1PLDvwCK5nxi8PSrd4siGJpJTJ8YBiIkQblzlDvoxPRJIPEpC3pvTzQtDC2DT7BMmtm4b0cm%2B4WrbF5nbX2TGKf2vyua29zAFiSLmWBd4FYonKkGT4YbdqoKPeg54s61WDpsSCMTbPZFzMyZ&X-Amz-Signature=3b960fb3966dac6160886ea60d25161dcdb1aa00810e98762ef63532656e920d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
