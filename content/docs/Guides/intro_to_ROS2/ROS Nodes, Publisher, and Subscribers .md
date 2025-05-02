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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=7f3a9f0cf76f41cd4a55a68982de28c6c299d82b685a4c8e9a1bda624d9dd95c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=a2133ded360807c5d88ec003a677e4639883ecdd0e5a46bc06e933ad4a224507&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=f5559e7544f323347f29896079bad0df10539d41998c8b89027ca03413e33d88&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=21c15baaee4a4b6ffde70ee913d14a29380cf69297e9bb0f033000853326686d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=07da9ad8b429d30523ecf78f16075353b9807d14d3f70920a928a6b48b420357&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=b7c7ea49140b8ee6d80924ea5ec2cd8c12aa9901e35274057767c7a1296c5fbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=88aed83f50a58f09b2c09c8a690d9f5c622a9279e813c58a6d24d21d5895f1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTXAYP5Y%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T081154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIC%2FKgMcd8%2BIb9dlj8Jr6aAEmaSp08ulYk8zE5XYI7m4iAiAJ21tdU773nlc%2BlwKKv6XqLFbXZvFcabcGW7mU1NccKCqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrk47b9%2BXN4%2FijkWpKtwDUSrJdmlU94b8UCkhRmMJVDGPjHGPA3VVRDX8jLwVM8zHoDzRuAnrTr3WZ2k31OU722h1TA%2BzHgMe7E9F3WxiSqMedQmUMD1mth94QTZINhF9LVHcFEkXiGE8jWW82MbbUbXyWS13Alfzn6wjXCFZYlnWfBcI9xp5g1tmBNtXjC3af2KrngIYyuiuMX%2B9ts4BYzwLWYQ4xU9pLIi1z5ffrQQK4kS0hF3ePbCMseEzBDTJZsn0%2Fc1kbsd1ugAP5qw1ORVhMGQ38rWDYhQAEJgf7A7BeVQFxpNpVuo97nwpXnIBKrpF07%2F9Ep%2BxpNLKBjx81WFg%2Fvg07MXfuZ6bXA20AHwwxcMdOi04dO3GmJC%2FI5HF766VGtBG7lOJtkh0VgHqCZ1wHiqS8fhd5jHW%2FvnSkvGIqDMXzotTopW1ScNVsBlWtLxm4PxLpLfyvPUl0Zl%2FYjqE3Ctcr8wrjQG9%2BdKujOWEOD5wPJVTKoho5YCeJmU9UDkXPEVd2hucl1rjLsg2c5jM26F52xih2HW4R9gNfrXoyLv%2B9FX6nwLYvWsLDBpOfXy4b0juiQNxcfhtOK9bEbguLRjGzAV6lvlhVxh3LYL34tKMQua7CembPQaj2AAI%2BhdOiRUVzwHCj98wh%2FTRwAY6pgEV8ppXloPuHftNNYOyV6hWNZUSYnPrYrKT%2Fs6LnQPyQ3EHYgR%2F1MFOSBwBmjypxWJG5l9ZYkJSDTwk1%2FxN0bvuy06K2o8Hgid5uDFV9JB6Ns3U3wkKCBYkXXXYOj5DZlE9%2Ftj3MFzJPB5wJ5%2Bm%2BIttEqWj%2BbIyeqBg%2F3jv%2Fz6JYSrQMLY49s%2B1xBX1czrqrLYxCkqWnvzOMogXbDxdfkqdmW%2FXWAzz&X-Amz-Signature=990fa62ad097cef77e5acfbda95bea26dead824994713b996ec9f7324569443a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
