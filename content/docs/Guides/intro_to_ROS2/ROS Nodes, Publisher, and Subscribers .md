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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=2a3b4231c206a7303588069f7752ae70295ada28ad2e8c77bdf90103fb62df9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=0ec137030ef5155bd37ec138f8c002818179b11a77f9124557592d32ebe89195&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=064c2f61e12e0bc274fb5239ae836ba62d1951643e094b10835a47238f279505&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=cef854b4000ee6fc15e6961228d146bd4a0bc1d186857669a026dbed16407c58&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=98236143052d3432d90c25600d0a315a929fe59f0a2592063bfa3b88df7b5512&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=61bf908352ce235254649aa5fbf14f8ed77a4704a17a055ebcdd661e9c5e5191&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=0a8f9d20902aa13ec0f3a97a8362ef16d06855ef22f493f825c59e4fd6fe0def&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634YF37UA%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIEykPid91AboQKP0OpbGQGfCZI9Jjeaimt2XR%2BH7jyi8AiEAg%2FPJiO4FPflrC1mg6f3mGtPf6I7UN0%2F4A4VgLYStcEQqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHik93oWEuYXMy0ZbyrcA54PWTA92K9MmubhWA3euCdfCiFOuNUUqBZcr2MIBt5r0g8diKEaSCmaxdcuR4tlfgl1O8PVImSkDS9yxTwQ6FU3WbRRbxoxtBhcAWVclCttyGvRj8QgkodPyDIiN9iTyaI2%2BzE01d5D67LABktmy83pigSBN913vkKbWBm6fmBTvP15QHhbJ35qMcxo2l7lv0qbsH%2BJbR6XGXVvymTP4DMiZ205yYICLehJWRLMfcHfkKJNwxYznTFbG2CTLnRRaExMu9MpR3CB8UPh7ryr5gADZWzTPSOXzZcG5idIORJMJ0e0tDxU22vXArj0ZGOAjhJl9PRdS1nmDeaE%2FMDkG4Br7PPowvm9kULD2t8M7n%2FIXNNZrn3qKyVtPHUnbPWGbx3pyKKKd5YWbKWMfqnUirxoR1ba9qa1M8N95sTO6Eok1RPzMgNhLeVAZ59JXjOVa5pO6s%2FZJ7XPbZesOTp%2FKPTfSRot24HRzGdNBRf4Xba8eP0eH3LAlvbYyKLBViwT4hXH5xwKxYy241ISPuzez8ohdWwrrsimboanvUG0gLAmKYEHC4bpv3kluOI5olAQZgic4DiLjlMX0FXmd4DoLBa%2FByG995YDzIVrQ1ajc4BvMP8iNrul7GHfJk75MJX4xMEGOqUBRl3br7vwHY91XhMPiLvXsapKOaW3Od52xyeE1LCy7Dz%2BT0%2Bd5OC9gG4HmZ%2FPu1nosJvGIYODNRXPlb6ssJHH6AdFJ97t4hJ5TH5911uLqGJqyO96E%2FM4hX%2BlsjaJwvUJhcaMvQROKlJCDiFnTjqYqKoC1RCDUQjFJGmJPJE01X%2BluDl85NybmIq%2FOq%2BiuLdWd2xIcd75tFRPR9imnOuDoG295gnX&X-Amz-Signature=cca073025b2ae70aa353a1cd400e0f500925e1f34a412398d27ed7066768fb34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
