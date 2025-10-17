---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=cd5a3a65a917e180bee2d438a15b44b19a95127e0670cb96ddf07e368ba0c607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=80377278cd7909d53782da20848ab1c0987180c99fbec4e8175267dedd7b8b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=7d06fc28ddcb091ecc107448f37a2a70525978cd0e2c768745434ba05d047d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=98d27c3ae16629990cd3ac391aacac0e90895f96a6071a300202a41333f896ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=f7d67084fa03d099f2f632c3620c11ee9ddbe9b896acb89e75bf0d81e27e6675&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=8deddf983dcbce771f3d41b565b1023f4cb7e35137cf03a6976d296e710855f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=eced94494d39bc405d3f351c770eed9b17eef31d504511f264f3d542d891f536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666D2IGG2U%2F20251017%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251017T012531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFTp8ypVEafEvnMUkNSIHAVQRnFwRBuBQMC62S7IXShhAiEAi1GpRl4WioOzP8IHhMb%2BuBTIgeyZ7hpu5gzpFbQUFnsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKdTzIkT2Ahr1ETzeCrcA5TrKzfqiE8%2Fby5Hgs6%2FzPl25w8IJfN1Gn85N8yUs1hiRiec5lNldpUOjjs21wUJjnF%2FXSFcVWUveEYb3X4kmkfNmbApMipIpnYl4wTHLpL%2BByGGMo16MYrGbMIOaOb0PDG75%2FGasyyZgqznM5pV8PU0lgRFN2oRaRg7mHZLjDBUT5sXcc%2BudZGDMbfiySDGHmcqMLExxI2HpakXfWVLzAA%2FFjQQpHZpiUlw3Vz3R3UV7LaVnhEoJB3Yp%2FQkExHsYMc2j7maBNxRs1UqlrVPBZB8uxWLwl1iNgLQJvi5oXvzRAQ3Ky77GgDnXfJk0w4kOkEx%2Fj8gLJbeLb7xPivGyV2v%2BA9YQEbzrzBxaQCwbslWtT19eJSVfeF%2Fu7Drl3hRDozhQa8hA5SZgzs18yvYOzRmIriTwFteLIumQMCR1B%2FHbwU1SRCt9iaK6Flbi%2Fkdo5RvsMeEoCoFPGuL3G1VdfYLyZ6qz%2F5jeNMBzAvwAInG%2FD9E21cMEjcMZktLEEnl5qfFoHaaGedpgM8A7qYRD%2FDnjjlqR3lbV7To%2F%2FABj2%2BDykeFcP5HorF8QWBiLHv6MrORqmsNy8HXfR2DhLH%2F1O7TMuxIgVu4qMo4PosCS8DmRMCFLwfQpM1Ov8TFMJ20xscGOqUBpXpW2qfvyUwICsKkti7Zllc81n2OopUQgtovQapIw9LqZZurdM8T54zEqywtvjeVZIzKHPxdhyANnzHNAEioQrDCEKdIK0o9416y5Sv966CVWN%2FotPBqBE%2BjUUVripHaDzTZUETCmuDvQ6Ig72adebmmgOQ3gu1aJ9wEUM1LXLzQHFQOPaoKprr1%2FMLvoGaZ7eSEvc1oewNVQEpzcB%2Bk4S%2BKQG8J&X-Amz-Signature=4a638502af849a0c2c57ee8f70db45e0b37f4d7ed6b80e68341ecaa7e148acd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
