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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=2e299f4c40ed0f13685d557586d19e8654979256833558b98e6152048a7299cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=dce3a87eb20528d35aacd7fbd1c134c7c3c5d50a5bd2ed4eb69bb0d508f9e755&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=545f6234147653c71201fbe733f55f310732a0a7abbcd2a5a95263302995e95f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=8f0dc61e30ac118fcfd736e88ad131b964efbcff12f209770980110f02d63e6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=32e01c257b370f6c4ad27c0fdb3b00983f55fbfabc7b93e80a9de56f52e8cb45&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=e9fb95292429a292a0f75ab9073227ee5f99bec6c4d00b60b8074ea6fec61008&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=83a70ba8a34aacf6d04fe7632b1648351498d2af2f4ae421524db393a0d69b26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2QVT77%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVkJM%2F5N%2B9XzZ8kpCFQ%2BLYqGWlD6gz97EtmbHAvgzhXAiEA58iDQkMtSb3LMDZ2icmY63iOHMESTzKMas2mRZr8JhAq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDNhtn%2BgWBZxChv%2BbRircA6d%2BkUEC%2BXpjjWgAwod0%2B0kE5aEfOrEhLWKyqkzY3EvUqvF2%2FF1lTTuMsIWnFd8cjHOEr0zwZ6XT6goHTRt3ih1nFJu65TQJHKhwD6kJUrRqdEJ7R9C528n0b2tpVgDOfEmQhC5iqgIbLpv%2BtCBEBO6g1eUjTSQZJIzsUq2T3WffOIA536V%2BN%2B2rXCgyW%2F6K3L5lN0fd95HHHd6V%2F72igNHuvvt15ToUQ9OvYCoIfJZ1T4PeWlBZj2rUa3ObNa5BUeEqCHCmaC%2FKnEGhhtqTRctFbg80r78BzMbzaeAxToPzr9cc4wNyyHuTWr8qUHiJgHC7Npm8dmkVr2A7tTkXnP4XLeewtkcNY2v9kNXRkzw9R5%2FyEkImzctI5auggXA3aN%2FxDI18ydFLlM%2BIRfmenxBndc2CyZSwM8fJ%2BaZKqyMTmOeUCsj57X%2FuEI%2BJTcEijiOn60C%2FjPIWxSgFO1EauZ07yFt2MCn2Ib%2FqkgwIY%2BG6BAiR%2Fe16UKWKes%2BN7HTIbSU3iShGdyoSggp%2B9KpolqqdcdbGz7u5%2BzJ%2Bb5rDAJAVLO9puqXbD28tFRVOO8wC0O3GIxY8j%2BKmre%2BNj68PGOEzKGZB7NWwvW5VAxiYL3vJKUxmbRPLNKVxCYe1MIa57sAGOqUBwCNceX2x3Aot6kb19vXAZgSCwNPl3yL7dlm9FLZx6ZglOAS6F2rKPU%2Bp8owBL%2F3R8T2UekSAsG9HlV4dPyakEnp%2F0Lu5rQRBFlWJHc0Ad%2BpWY4fgBf9f%2B4Rmxcnjcdu9O7JrvThSg1obIoSZ6Lk2vRdpFQBWMR3UL8Z3t7If3SfF3Z8AO9jm9nNJRMjl%2BwrvNWnbvmQbSKsYRboOniautabHqG6F&X-Amz-Signature=3910546fcb7b914f572b92dd697ad2cd8557ac3d48a5232d68ff8cb5dd470349&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
