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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=86db43d4322ff3bf0e740db07934e32ab73c86573a220179bd7cbdec29b3ed47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=6b5da2598a4a671428d8351104f0e5d3dc0937d1621525bef5f795635437c596&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=d465322a394a03ebfdf0bc2fd99e4a2199035ae708dcf3ddd01b16c82fdc796b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=576441aea2f3b0773f8ba9617537a87f2ba9f162cd053f09b29a2448130f7230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=7e764597d822d7adb0c2ba1dd6860e819fda1b9a9f0fe47cd2a796614858b188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=18387f4dffd2a38a8d18ab3c86d6f4c5b2aceb814ed2660ab28f8efab259021c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=cd8a5b6e584363a2517657b5bee5c027714cc12831ebd06df66f6bce4fe61a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KZ2MMKJ%2F20260428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260428T025642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDC097cjMz7AGxKZQYLz9%2B6QU%2FN9RXwskWo5KSzpQ%2Bq1AIgR29CnPDdC%2B17gWE7a37EAqTbCoPc7P%2FX%2F7k8S4SGTlAqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKwIQ4SC94TV25U3UircA3LZqaxryUbdLhaYwY03pcr6MxcKMgI%2BPSFompS0WtoLjxmo%2FMqy0UY%2FlTYWSMbwa0iOj9y2DTBU3tPn9BgD2dHHfhUUSgujsIhI42Xy%2Fk7dwiLyleN2Xp7kd6qa7OxzGu9sCdUDzcWLbb%2BK14r5CFqkTSefmbslkpaQ7lcHoaqncfWw%2FtofJuO7tz%2FoP72xZ925i4giPcBWSQR98mUZrubjEdygGHfEF1lryPmupF8l3k0D5UeGpkMnqJxhFLyCDku%2FrwGERDYWdhWqEbqL4WoNu0FPr1NeJmF5GSD8YgwzqO7AxPpmO9ENOM%2FOU5GZdoHcsW1OMh5%2BY2fot9E2CBAr3IYSL%2B40p7epD0%2BUGFW05w5jY99UYsiUm5uoUAS3KOiNF%2B8cqAYcSZJXnMdYsEXm99k7eF29SIKz44lYcE4raZyxS5TnmW%2FUfLTe4SaBIqDVnubyxtCjTVAUDJb7UZrNVzWGPsGudJa63eXhE6528L6YPyz1OiDlyVFry7gVF6ouzfyMyLZzdVexxax3iUfYKPzs35NQeitp%2FPWnweeYZUymuA7nQksnJJZxFpLYC3OU9TouqKfy%2FjShk80Txr04CMlSSGCJKB8YaVUYu6CBMKt%2Bj2%2B%2BQG%2BD3BELMJulwM8GOqUBAztYmnTtpmW56sir39hYzXp3A0xPM3CQE63oyZKNUKNPE2y9AedFwOkrcTLnvjkbV4ztlN4NvgZ%2FrOxUu1cW%2BIHyD6ZpTAfJ%2Fytsl%2BxUzODu5OvA3DOZ%2FTj2MDLsR1V%2FZ6b05USXl8NvH4eQsThHcb3m3nDfUoLbFZrTbjgNfKGiLNczLHZsXAE1gX5qwYo1VpvMHVaBg3JRpsGEaii8pWyX0qMK&X-Amz-Signature=5508dbee358e9ebe2c8e0e8f0844204d9ffc845dbec15661e475e265f21fd259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
