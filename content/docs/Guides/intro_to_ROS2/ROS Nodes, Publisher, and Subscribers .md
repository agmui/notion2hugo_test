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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=1e73f6451ec0a0ff3a7fcbe9d84dbec85d9676f9f14b380e6232281c7a259638&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=ec70c840195b459cc34936be6ef95793765be778e0c632faacce17a16983c514&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=85d8303388835832353ff5024960864e1ef863f267600ad3e01d883a3ed29865&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=1b168bc465e0ad4341f9874157bf9c7885ad6485c0919bc17316215fc96579e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=bf40c4002e4e40feb390f849b5780bcc9d52909528c2e386d307cd728ccb025a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=a36905caf0e953d7434a8581da8d9ae6dacd67e94dc0f57a376baf40b7df6eeb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=dcab4ba09abc56351bb6a5c0f98479bd466b602121e7bad4cffbac8a0b0d2628&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZESE6QK%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T121505Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICZN4i%2Fjwdhldt6g2ORRaU1pM6hZpxZdHxdQNC%2FwWfuYAiEAntAFA6b5hWTMQgJjzf5P%2Fn9PbmTgWXUhGb2ZoQq9%2F%2Fkq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPe2ysYV7xEOoru%2BJircA7mJRxUn%2F7mm3sfKCqfDEIGpdrwgicRxkup5TZgah%2BUCRIc78guXxhZLoJ6Un5EnfDCVz8PaUGXS4DNDFf%2ByUqUfUoksHcd8k9PzfvTsTeWrDH8%2FahzQ8uT6Unstjuxla9xVRM1L%2Fq%2F3cHhHn4ZX0nRDOrJHwNH5Ah4MUFqk%2FyBi6YZvI7VllmWzQE1MGZ51D1osy25fdN%2FH9ijzowo%2Bhn%2FWAoozcnT%2BvAKd44DIPwLrBuhIniPE%2BY6RqUl32DzWB1BJ4zXcHfYBfXDAirlOvS%2B3Xu4YEuRfr9m%2Fiaukd%2FeL59CwMTdI8TZWDVdTj0UJl8yPHrSLP1Dx%2FH3cg70%2F4ZXY4xzq1kixkThf8Cq10XmNkv2YASgFs%2FoE6Ob2DEGQX%2FnBFbBcO61EDUhO1kHZhGYaKznoO%2FMKjQ5RA9eFF2DtCmEMWx%2BDoM%2BuJInmk%2FmLbqVW33fkWTbti9fj%2FoiKnopLuGDNgp3mLy7mzmYoOkvP9WengMmH4InJecVazb%2Bf4UstC%2B0KapdJgoatLkHFubs8SsC%2Bo%2BhQKos3muoWRj69GlB95zzSWxuXDudYpYKLtg6pYxqDqti0GI9germA8XYy24zxLo4r3c7Ick1qo4eYGjGY0FEVz%2BNepTBzMKeL%2Bb8GOqUBScTjxLPMNWGOfcYm9gRx0da11o%2FWmxVEWaMsuM%2FyVwdxRIL66s3ukEPzuvak17zC8JrXPIeTe6%2BEmeW3kunRO%2FErQHtXDpqPXZN8sAWlmPSjkpKDKyGBYEkzEnATDDPGc7PZaFhHXatcuAlfnQz4wJH%2B2H5mMZTs43XKV%2FLL9QMwS1SaYZ3wO1yx0U%2BfisJZ78snQoIi31qDc80vKbWJi31wyTzB&X-Amz-Signature=0cdeea1c8ae3ed81bea9e0c2edf322b216c512b6e85d8618f247607d17619b7a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
