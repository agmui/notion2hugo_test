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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=5a5a183a564cba11332219e491c34520e5ca2d9426e05dafd560cdfe84e73824&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=4ad55a305ba1e3bd3231dc8b6fbb6916d017e5fbeda5b51155b6ea4279b4b4a3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=a7998269216413bd7673ce5f5989b12ffba499cf2aedd675557dd72e1f8ce599&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=d9c61ac019c679504b6e6ad2909a0d62a63874464cbce125bec3b5d135c4ef11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=69d433460413e03e4b3b4342cad3682e4a7c60a5731b33d562a56b3fe7e44a21&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=c888c435035a192990820b3f0831db9e3d8096a402177bb85a3486b64de2c500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=14e3e19997dbf650e8894a3a3d4d628ab501c4c8b733e2fc931259b4feecaadc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCLGLEBC%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIC%2FF6jIQi3PREU%2FQ9VeibOlbuoX6bnRHosQaxDBfPYg8AiAQd6yswkYww8D8%2B2oG6fMlF5kmmFIPmcCVmZPqKygqGSr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMqkaWSAGwFNEtBAllKtwD1Rx3tKpLBmEppjixctZnKGaLolupBeJiQhkIv9bMGllckNEXrdH0CPS9RCY0DMZeqIIrkLBQy0ZYNpILUq6lTFQb7cQuV8T72Y8iWFE4DOWkrWUtH29V0o9wvlXgX1WHZJZCWxn4yl%2BAGSluLYIHuwhfBukGvn434Pe6ciJoXA6tRQcJRFhELvwJSeGpGpRfA%2F15%2FwnmrBjYWWGtMG9mREKLhC%2BVTjCJ8YSs1zuWSOxOsEF3XVZXh9xDEH5CeT9%2BfjTgqdP6%2FlOin6NmLg8B73g%2FLXW7xrwdKz3qpVA6vO6jZnGymkEoYZcnxBcz4SdOdQ4rwzjyrBF0cRVqYS6RRe1%2Bh4NNFmqLmfcnZnZavYT0FmOBTJdbZy1gdt%2B0gPkYSm29XrXfL1Ta0Y8%2B02G%2FaawuPlf%2BNN5HQSN9c0RiNQbMM5UEbLBl3GDuGGBZxE0jo1%2BUlL2GVFIwA%2FdcS6pb6V4VvC2DgCQeXi26ivta%2FLaokcrLNNxLjb8tvc9c%2BekC1Q0DNE6Y872dgpuPC5GfyIu%2Bhg3lxPpa%2FMhqDu7mYLTnS%2FFN70w9bbtmI55heTOrxIw32Z%2BV8g9oNZJKqEnK%2FyAaqS55CaD%2BV%2BCz002HNclBpD1jRgq1oHKxihYwk9vLwQY6pgG578zbS6dVHE1C4%2F11LhLXH0bjJr51reaohopoRmfuSoXpskG3WL5HtxCzcEQDuMHM5gSIagFbOUOw%2BmY6CC0ZczR53ZGvHwUdnEdezclutZvWUduyO6joHG7sYNPyJKRGSaro%2Fxlq0v5p88lfwr6A%2FUU%2Bxf%2FrJq%2Bf2fqqEebjEpAAQSeCNNuirTY4TMLeO%2FTnv7BmEAqhNeUx1PdCPoF1sk4Pm31T&X-Amz-Signature=6f149e9d5a8e642ec7982d2c1c6bc352ae700bed7f7842ae860699a9e7918519&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
