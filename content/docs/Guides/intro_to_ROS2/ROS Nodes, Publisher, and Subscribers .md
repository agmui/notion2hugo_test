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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=130bad9ada8c893ea66a4c04d5a9cbf136611d95bd517ce7756164c6c5e2bd5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=ee07bd12cd4164cd8fe0ce1b4e4fc77d7cd4d7e486b1608287261a23e7a27c47&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=b62a768ffbe34f395fbad923d3127946512a05b92150a0a94ee160539e3beb4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=113ecfb508652a9690c288ade3e70f28bacc177c650c0af25c9cfbbba54f4cda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=f64e17708a796c54c15bbc674b5635250a5ae718804c0fbff784c97807bedecc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=0bd77b42181a38ee1d089c03167cddf31eb317916378cdae4159517aeb4e7cfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=c8c7edc48233e77bb93fb9144a165493a02870925eb74b8e7193f7e6c22788ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HE6CAKY%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T140200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ32lSRHS3Msu7Nn1KC8tKmMRG9dPFYmzZ4M89oxQdxQIgRCnrI9jk%2BwSo4O5F%2FvO8g%2B5u0Ocf1t8VW6MGTduB1LMqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMoqNgnhEjKLRzs%2F5SrcAwXyfzFC8w2f6BKmAnXuJctNe0XX1yugQsxG5gkTOiVhLLkWOnbYC5Y0PU0WCJdDoktsDwmHUCyWB4319AvG1bUM1tCqXmuRJqk86FWOlN%2Bqrf3NbmZu7aLFnZaf%2BtoLtAQegUG4DTiUC2r0u7AZxzcmvEukxdvyRBPRRdjjjMQWyHPh%2F7laZs74BIHMFWvaEok84bIvQXuwI8IeXZYU7d56XmeJNG2TcH2TQSo9ifGX4%2BCsR78%2FlUx9YNlHMpKWean1Agw3LZJAfTWHs%2FVrO5YrRHGsA%2F6LPzUeNlzzR4pTXHf3XRDTQcpzFXAcRCHCbcAmY8xsbNJBAm82rkc63bjtRQRd0xXGh5sZZyDrDTFd45jICwPuKrKpwmIEz81n0yoYDa0UE7m2IPRosD1KmiJ%2Bf6gQujyos9l49SWJU%2FOhHha8Qst1DF%2BxX2WTato17SfCjKgEkTr1V6DLD0IAc1lmvJd29Xcq41bDu6qGR5rZmg9v0uYbsDh%2BuQpMgm2CxyLCX5pEgQYt4T7WgblGRaAoxtwZtqv9dh%2BghTmg5%2FyoyOmjWFgfof7XUHAJlaXTYWMEL5Pwqgqi6cPyT3jzDCHyIgeK1f1i278v7paxEB%2BslD%2F0QQRxOKnhZOZcMNTB%2FbwGOqUBooitKGONtfZfVUo1aUTk9tGBIveqt54T4lgvRyzGegjgVfcVOet%2BGDr%2FMfgz75KtwVOZ8ux7ejcBZYO4pRPYuoX%2B2a5gAhpuqYCbS8zhlbl7UCi12z0xsisLP04TWXx3Te%2Fmax27%2BRY9%2FwCLZgsgbAKmPWjoO%2BM%2Fd4bAciNd5NFQQNAKa7kWT6IJNJwkPebt3Mi6qfab2L2LZq%2B8gLKCa%2BW82M5a&X-Amz-Signature=ab0ee16df6e06164574c8b2e0c549d4066705336cf2390991c9c9ddbba802591&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
