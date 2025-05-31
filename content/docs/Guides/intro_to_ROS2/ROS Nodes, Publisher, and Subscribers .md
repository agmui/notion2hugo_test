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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=88866251143e0944623b6bc206b84d6acd9c9232d80c228f37bbd453bf36c6a7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=5ce3b0331a75ba34a66653de295eb6e13a0131f2b18da8443530c3b1ed8cad26&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=fd3f746b592c1ea781c98a407f94f4a7233398d04ffd89ec2258e1e652eb4651&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=25d1423fca831bd548a19cfd57c88f900c07446242f68f560102b2777a22c4a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=1b829f875b5336d84b969bb6b7b470d86f382c11064f6f3a79418b25aab8c3ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=5c4547dbea48a5e116db8127ec2d75fcad03ca47212c84cc04cedc508e626018&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=529b49f70ba483f9122e0d5e69acaed83576a80b4ccba628a798e7ca16625970&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666NGRXTK%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoL5gojARjJcEz%2BowFHaUErhd4mG3gdrCvukNuKo%2FA4AiEAgihD2UeP91qPdFXYCzYUElXDQJbBuk4GTHBELkY9%2Fj4qiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM70bskT3B1dUY1%2BmSrcAxzdnRy1RfKQTlErr6Cmg%2BHlnsmARBtzjCLEkgkxupGCYWv62e2zipVMTO9do6DpYL1gJrn1kuQmKRnglafs2n6inq8sga3MWcZ4UCq7qp7Gfaw4dJQUq8mbhoON%2Fk4XGGGmjupyMLP0fdpB5vHAMMHX05Uv2N01FM4%2BVFB9A2wGEZyUIi7dMltmryEs%2FcoTfNwjrmvY8kkBmCo%2B9OL%2FnehlCAjXAT0glb9A7s3NQJJqFcpwB6lBCBtPKStv40iqgUvcZabCFgjOkBd9L42aHmr8f69bt%2BgBjQKZEW2%2BLTzONsg%2FuADqldZCgX3%2BG1z2CmRFY2cE3KEElT0FmXR9UTrME3nUij1GCq0ndlxD3Br%2BZEYRIx6dv%2BuSb8vECdAzDJVxP0eY4BAtV6a3mkoDieBvvYj2Liw1OMHUkdsIWVT7GW55AARrWf2Rgh3O%2FkqNxS7eagac9ZZhQJxgKrCHcDq60kngOce6LQF%2FbjMclQxEr2dabVIz6AMRCdftgfSRl4iGxdSqGa0uz9%2FlBH%2BrRZrIOr8pIad2gZhGMPXEYBdOH9y1ozJGplHLeQScKYHuBOr6OtT2LrZTbDaRB3XDUAJF%2BZtSITxJk7abyoVGoWJRmP%2B%2FSAlI2rsmScn0MLGl7cEGOqUB9JdHnWq8IB2aVj4XxIfJuw8FzohmoSn8TgXdYvfgOcx25J65IUlVJGBiDhVcrWhtPBFQ%2F3dr1ebRvpFqQMVgVvGErnqbBM5ioDcMQAggFu5y1xNgOg4MYkykaArvMkOKyLQl9aotIifm8QALqhLcjwTk5lhSdSKMcFg1HV6HJuJnK6mqVJFGryZ8PAdWLkknzBJrKjBjQnU9ZGvIhXFpcT0%2Bf4qU&X-Amz-Signature=a7acf0da200f65671264c210ecd1c346db19457d8224becb48a1812e3bc0ab77&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
