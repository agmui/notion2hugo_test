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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=f7d98b04df19f7e65d4ae106635c802e9e0f2b213f5188ee6bd9d65a6e289134&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=595535570f173dbdbb104b4db80089b9a025292222007cac2310dc6403c125c7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=65f867ba3a9680d3b90caddcee433b6b9acb5c9b23efacbf30b8937c6cca2429&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=7eba994d4bd8f4a88202ba14958cdd29ebed002463558a6d33e0bc15d51e1d33&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=4458424b9fea79e3a00a6b714354f87ab42c89725694a7c71f314c029705ffbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=bb4eab42a37a5e1359eef4f9bd7f8a9a41ad8958b884e1c9565dec3f3bb970d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=5470db1022d36bb71701d771ef335a4c182f828ae4ea78cb87626268da7997fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPTHWMCO%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T200905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIGXRj7VPsIbNx8vgjGOBMC1Z6efYfyPHM9Zjiv9uI%2BD4AiEArwpxaJeuGh%2BzoCJa7Lx0I%2FhEUXI9DDbsxvUdCsih77Uq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPMUznon%2FAzA6FkdDyrcA9ygln34Py6VhYx8eKVSLHWNVBMksLePkitDXmGMg175CHJX%2B6U9Uj5cJCoFM2dU5KxkfwNnXCa5iPju8CgxlgUyToTUSWdKLm5z12Sb%2FrkgY3M60rDjnBEvcZmgacocnToxVsU%2FlIabI5rP3pfvB8wJ5x2DMDSgqnCMssgAnpgRsvGo4si1s3X5TWeOnSfOrAYAmH1soQpllocTQWd0AdDc%2F1Hk8fzbPn2XtRWJUiCqGAaLIqExFfDgCOnpl2Zd2nPDyoDsUpTyKyc7BVkskRdlSI24LfWDw3me5APR8IoSpak6tgvtl0AuBWswtVQpKCbUoWcg%2B0jKLH9yMXhlrrWwZhNhYKeJjUC13jyaMFciAVFATCbrkCc11wmX0T5tPDO%2FkobkfXj9ZUS9wzT99iZ3UklIsARxoQWr2M%2BsklWiZ0uWpOhI5KjhgGv555QczebV9W4ATkvvDQ2tUWbqnrpSlCFjsPCpJSfvJKb7qBayyd9yhukOfIGcGPyM1ldtpu5Q%2FCjfnM%2B%2Bld4fU6UaJrRIFP8hyJypcmrd2J%2BBN6g9vONACmFp2Ji2Yad7mwTgNIPMKMejL6PtiAN9b6Z6KwotEJtGlzY9gKETsdJhJ5hL5MwzoyVK6GUuSZpdMIGq%2BL0GOqUBm3et%2FCzcDcCKa0SEStFh19YGDpuqvBHSmQrCFoD%2BEGXCHernTtpc9HKK1tdYfmoU%2BD6hh7He2jP9vvuZl%2BjW1%2B2S2mOYGDDgsgOtS7uAh17Qp3etapMYx%2Fv57AzVKFWXBRKooK6IPnzQv2OabIeGGWk8UJM7nel5%2FpW805aODYr5MIwPEJp2KEmASBSV2HAOFRrsw%2FlshBGvDV51v8C2ugAp%2FLEm&X-Amz-Signature=49587b915e6ffab22573a74e1dde09ee37cdfa3ad2d1525b26387d00772d3bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
