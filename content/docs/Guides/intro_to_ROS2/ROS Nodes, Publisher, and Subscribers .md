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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=1c4b535080cc81aa8fe00bfe71e61299ab8deaa6ac1efec048f42d1ca84d7eea&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=28f81640eb81c0ec1174494253d11f769e1957a5d0773489fab27c6ee19f4e83&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=0be7fea7c0729bea66dad05e2ac59f5a95390306258cb5ed262f069c41e554f8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=df9c177d717dff81872c178d2f0b23f7a9a2d822c29beae97ff8d802cf61b409&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=0ecce34fda5e63672471d89c01fe863c7f7cb8ab4037b3a8ce35cb4bf9c721a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=91743261547a98a003666c573b72b1557423b10698f83d42a7b2a898988074d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=5ccacd58f5c28a0ccd455019de3be972bfd86144265ba22e2176322c629a4e65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UF2YKQJ%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIEEepSy70DTC08ZOtj%2BLu9BM6OkhjviUu2q19AsUbfJNAiEAooXYc5f3WRpHvkxCpjmHxhts5e7moPrQhwpyoJO5x0UqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCsWXjO0%2BbX12lyryrcAzZpBPASnGv0xDAWW2BZtVdxhHJxuWUKnTdu3YSNTliG9uuoN2TdrgDwoLHex7I4H9i5RcRcwEVtRXV8OFB0YVEAtArflvgJGyU7iWOrwihElb7hBGTm%2BqoGqBY81nt0KW1aVNWEuIbfZ57LOqcZKeZCVVcoJKAJvJjqXS1LVnGL61usG%2BI1tNZRTnaoF2APDKHdB9kNqdvuEM6qMnvSEKDUpJcMF5Ac%2FojAqQc3E7JQxkHaBzFP5LsIvyh0ve%2BuKsQt8K2VEM35ch3kkPRc6zT54RSEmg40zixgS33KHY%2FPGVplPO9iuT30dwAvo8eSzwhuUcGvrA0M0xUXqbfKm7rIRmHXTAg%2BXzUQ2hLroSR1KU77V5rHXZUN1SUm4x2KaCHBv6eafBxt2m%2FbpAUv9rnw2x4obDalibitc8x2eDdHrPEurSQxiLms1dg%2BSTt36XSscZIQuYB%2Bus8s165pB0n2lCDC3YCuzoGjQgAQXv8b%2B3277X%2FhFTE%2BEZm5S%2B2G%2Bm%2FMGNh3tyJ2VusJf%2FoRPW0SQ6QkozzfcrjYoGIw7mHf8yBoOunU0fSGDlI6sY5h%2FRAmqAtTDI58ppwKvvIfqvERSI%2FMf5SxreGWeUoyS%2B8F7CsOfxQF0N5lSZNcMPT1%2Br4GOqUBNp70fKZFzY8ix8dE61QQ%2BALxSFs58EYEkZ7TQ6KC3B8ALwfL0gSSMr0p9OxsMuy813%2FXlkdUNaCf8csMLDyoN7kOgFnOtxI2JLRPIjMvzC6j8vOfhbJUIdFQ%2F5KnyGh4r2vQhpldtpxk1fuCBgwVIGo9mp846mJr8JqAO7J540rsqxRbbK3WdtVc4JFpQOmesQNvEdkUDu8yBjfDVlcyAM00VpwV&X-Amz-Signature=18f26c3a943c064a44b406838a6890d91000188d399c6a94b10b9e7bdae265fe&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
