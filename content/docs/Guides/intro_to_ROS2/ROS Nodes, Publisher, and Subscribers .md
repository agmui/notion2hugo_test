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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=7b2ae4ff930ed59aa5d7f14fa9daf1e1121dc9e163821dcf788eb83b698f8dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=a5d0df5e7981e147491961121b943a8a5902a58dc2c144468d0053b24d6f4206&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=e94f8549e8a67a2c3626ec8a1a24750d84004afd0abe106316387fb8c8d04093&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=6db582de4125f5836e2f741f5825b9b80ccad18345256422c2a09819e8cc62b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=61b223b7a6a48838aa8470477461de71c3f6b077d694a13da3d3dd1dbb8e39cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=4417267960da239d5ddd710e34168668f2837c6e88d4db6f7547c76928fa7de8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=9ccf8b3ae659304cfcaa38fabd4103a10e40b23f8846010f1dcf04907071e3b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWLE6EZF%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T025523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIQDjybNn3l2%2FsxtscrT25gu5GErHiHvL%2FIehMt%2F3BnZ6YgIgRmpASW0kWpRD1tIN94AEXmkVpc5RtijiSd4hEVuVfxEqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCa8B6slT41BZp3cLSrcAx69R1YNtMWKNFVApnciVNRgVzpBUK%2B6wgENHgTd3FOpUpWV1wR4If610MTHCrAU%2B%2BRH8ZZ5fJO31K8xsshi4OEsKxiRxfemojVCm%2F9X74A9%2B4RkBfTnCy%2B9HYbRkM8smUO26HHCIGCWOtcA9WCobKu5VkzEhx4%2BjprkBHnMtMKDJOiw1EVtQR14bYcvoCHKXIJ7O%2FR5dIcgr1PQSa83iQCtjpJYu7c5VXuMhBLAYoP0KH5c3Jni6jO3kQdVm7CPQW9mBXDG6i0CjqGN2J3haKTACKWZzyrnaq1PkC2Y9Q3JvpJ%2FR8svd1OscNuxL3ufoMeTgy4xpoZ05swhCVgSQBcKFm6YqvAbDgX0FWjkoHbT99%2FXd%2BBKfip7OF%2FNBTeHTIF9s2vPTpAiYfp4dCgsj6%2BSEjQxlEVoa2qBCIl5YpUsY3Uxe6N5Xg6Qp82AXDix3RlSGVFCs6QEFjMxaF0%2FUgMHDPdFYqCH3BvX69jzWuPt8tHr6ihlT7UtKPTAzNdqjSq5FnqCRnKJv1ajYsVX2ow1grRVaZnXmI9K0aG9L7dOzvY%2B%2F%2BNcj17ZpEkCtLWS4dJTgBRkvk4b7BHtv7HQSjGzwVltpaOPHdKILomMf%2FM58tkbh7a1osWTGAhBMOru7sEGOqUBzyvykURthMX9fuaFPl1Xj7ZTraaoRufUU%2BcKVWBswaEH6RuYnfAMn%2B2jEbGlzGw2k0i4yV7P20gbjbYaz0582pc5cc4y6gMwUD8791EDJph7bW2yODXqwiphOOOtbOb%2B0Gk%2FpyQ4MH08DFDzSxrvLZNaAByiUdoqbD9YSOOfI2T3H0cuKeal6JbmIS3Jz%2FxuJSdGCKhlBUbZxoxOGR0Wl%2B4YQTFN&X-Amz-Signature=188fc284c0df5f33ad13edba45957fa72a42ec68b4e6abccc8456bdab2bbc420&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
