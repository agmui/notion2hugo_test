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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=7db7c98229e251baa4a98af9cf85985c69d787ffa604fec511a0877ceeec6902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=c3713831efb8e78814a3fcea378385578a08be1d03d18f9ef3297d0132645e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=21dcc31f1b546ae70ecb059e5d52148e82d470fe11b9ec6b4a57f2f7a28ed174&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=cd839a92c944e801d272310dce85a457b0c910d027c506871cb1fbd7af2c267e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=e603248016ec6fa5c6f5533b30fd0eded9ecc9e823a35936d4597903aa76ebbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=c77c91ee2d49b52081c2c39b7e9e89a51940a4e2d66c1962e34b7894c4715ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=2fd61e160b4585caf94da3a981ef4a2d2ca4ae4540c3f905c505e473703413a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4PUE3OY%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T035044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAjTkJLJ4OBMFpHFGntexlN6oDooPuDBWanV3tOUHNp1AiEAxz5o%2Fn3boDiDT9VIolMWIKQnmoJGQMfdh4xOOeECouwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEUCcLOomO%2F7gsUhvCrcA6fpGX3rmt9svqKLR%2FNeHSdwCpx%2FupVgd1tXHr0bagJoyYsunlBiJ7kXJPDAyhxiNlnaB96aCmL3JTWt18uEQn1NlhZfTX3CBACIRGC7O37qYi4rMX2GnKq2Mms%2Fm7Wu34lnX64xj0Do1jtbwrHs0W5A%2Fees2DTTFBwxEWuQZGYEWvCOrM12tyhjss%2BoZefIuK%2FUUguwKGdo0eeO1iW5%2FMZ8qDeG08BGhc6vucgGiErmDWi3TX%2Bbw4ZogPX32wVtoqKqy5U3nNkokw72qBgTcLrpAcZzkYaA0Oe9%2BUI30jjxGzy%2BejaIHat4mn4tR44obvJaOQNQgOwJgV0q8Xdddgkshm7q4TzAXKDqcxcO%2Fg%2FWwIiN4UigqTTteucnv6lz4Vlf0RggSWa7RmETQtgVxDdrxSYwGywDTDDR%2FCwZpEsFfoxDT7EtdTMxgHiVr1epUAeLMw%2FqDJ3R6TgcIgn0Uj2AgbXENWNsjigTanmqjJ1%2FgTxPaRLndK%2F%2F47dnalVaVsBv8LhAHi7rbVAEkilSJCrJlxjg9zCP85tjOpHuMWYOpr8s5fuMBePaNVb1hRe2tG9Qa%2FrvsOjFO0C9qFEsenh5kBn03erAu2lIoy0dMd63ezYXz8ce4c%2Fb2aTuMNGigsMGOqUBWYH9lvGhTy18atFnLlVv5u4awBA%2B5ixa4iB5M6oNfx2rYEn0JwhoSatd3mgniXUKe4J%2BOFKxW0UDTQP5IN4oDuO5yunWiuCIl6R63kunhFDaL%2Fxsm%2FqmC0iOy2%2BnTaOy9ENNLfd5f8b%2F0Dk3%2BtTiG%2FJozApKcVRVq4IW%2F5%2FpITpyXSbDJW1RuUm5tadoVDONXkUqgfU7SBjg9DWGQGxS7DAdxRZx&X-Amz-Signature=5cb113920ee05a955b5b65336b91fdba3644b90f19991dfa9912f38cfd0d5f6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
