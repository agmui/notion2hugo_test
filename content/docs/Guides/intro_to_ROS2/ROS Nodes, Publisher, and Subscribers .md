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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=0625fbdb2a98fa6b193333aeb1a6c6348467baada9346f1908b0d774a5e3678f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=defac411d2d531c1769fb3e7d1c1b38f74ca4c803fdf83609b3a1471fd64963e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=30a40eaa638978246c2e4726292ff178f73f0aff686be1c033d7a0b35d5f981f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=5d297946eaa91228e82936274a923d97798d5e8ec31083fab163db31cf6601f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=2602a105b73608dd1c5f33cd6ab8b4ae2683066bc1a59a29424d84cf2b3c8197&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=c794a7c1054d30442f5dbe062f535327f41710942a268b01be1c7e8257c47964&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=6a11863d6150c70fedc3e77d3e8b7da8d8937890d72927aafb17bb9ccd9a2125&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGSVOPSW%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGocIOu6dOvCwdqZvOjFJA8uae3Q15jJ7oE%2FFNSZFfkSAiBIEs1FiVGT7zD5nVzk%2FdkTyQg53KT18gWfSKySjey9PiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FhK8fbwwXLQYEs82KtwDuHE62I%2Bg6zR2DntF8SvbwmGHDf4lXM5FTvsbCqaZPGlm5PcHFH%2Bfr4KxxWtSdYPGXVYLKk%2FNwJ0SbJht9gIA73dETa%2BAUKh8iWdOXdTRanPBClbVeFEKPeKqzMTb7aYDme7R9a%2FbARho0z2MuoxP062KJ0S2Q4hlDv87oasJQsZaHGQAlYRzYo8ibWlaqKjnBQSYKTQ9lxP723jFNQC%2F2CtK3EvtDP6OvLD4py8YPbNrSnZuA%2FGxihJ9aBo8XXNtlHsueYnZ%2BdfNhYgRy79Yx1xx3hchDKkIwyiFcHW8qw60LUeWWVskfSfwU4jRlpns0Wg3lf%2Bccr6mX2EufYlh%2FpNA2y6bEA7WdJqkKbSM2zM0APCDfMqGUkl02FbQm1MHq0h54JLglubjY4FdTUu3Ek1XdABnFzooce%2B9E4vbj8qmRdibrZDqJTOq7jiELIPej1QjidAcDqz%2BKkAex%2BP1e%2By2aWbA5gdweCxeJ3URa8kgUlYlKOhhUUYQ1pudCEi2SJ9zC3NFHCoi27IKgk9UUzUf4kMSYHKAG6%2BVOfd0xBschB%2Bp1bOusfoyZVo2iVDG6qCEyaT8QHwXilrItZHML5hNDx8LNXshV0mTyqoyyS9Tf9%2B4U%2BleJdn1J68w%2FIijvQY6pgEtpUpszIHpeqfTMzb3qV9xTU5MQZUtiFKGRxrmDRGnl7hSo%2BGp%2BgJr3b7gu%2Ft87XvBEfvzYFrrHGxI53o6aF0yaxO%2FECiK3DkN%2Bav1fz8BULCMCMOIVo3d%2FfC4kg8MVd7aUZtWhyaR75Z8qHSjEh8KsfK13aca%2FSFNxz5n4u3TI2UAAvbOk4KXUEQRAhIFHlYaIQ7vCMXFG1JGGsIKauXcpZvSnLeo&X-Amz-Signature=f59ecbc4d4b38d1284d23a164b5ad82d9e66618b45486d84f816527a660fa1e5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
