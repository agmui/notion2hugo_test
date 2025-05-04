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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=d5a917650119c7e52ffbae65212fea9af2574ba80158bf1da2b3e6c747f31b7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=34e21dabbdf2e695438e3abc8822664f31d9e8682b55c297c8ae11729dded92b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=f5ded1fe534ca39e55ed5bb6fbea76161e4fdcaf698398160b5b19fbf9cce4ec&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=36b0ecbe1125a60e0f5d45832c73e28954d2404b4fbed7122a9adb873bdee1c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=e5724f8d36389ed656ee626a86b447a86d627c818d2b135266d056d54e0ccecf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=d65a90f85aedfdec0ca2db1f7faad353d708f4f2583b86acd325d95dd3a10a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=3a77d2b0179b4e69d7784e1ad7a601974702166f000bad30508f7a257304810d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URONXJAG%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T100828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIEd1IfmxjiqH84e96MovbMgf55pxPLWXXgwJK7B755s%2BAiAVb2zIJOU1ObPkt%2FsPFVIyqxS6btcO6ZlffGhJzcWwvSqIBAj%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOq0h2oIxtpxHOvCrKtwDBTx5ATMRirjZMioF2uYiuq9J7gSx7D9bpTLTxcPXIwWqUo3LKUlKe2U2BvVcxigU7a2yV%2BZ8q9iImngvxj2XZPhR7zbj%2FCGqHUprd4ltyp%2BRQ6serIjetfAZcZ5Lv9qMByJmexeO9ikCv5vfV50yYFa%2BLMNZERFTCfzSRCsMRKYb9WhmqShps3WbsEVjLYFn6uC327ITW1bDxuGPh6yHDnLHRlXYDn59TTjv1zixh%2Fm1oEGsHPR66GoM01KCFt3L4toV9ADNan1KXe0Vpus5yhzqTmHhjvnuM0ScjPklNDBYGij%2FGqRIjfceVEO5txirFJA8%2FaWooaQcsmTyiFMlwTXmQrya8WDR9BpQjIp0eZxtEntq4kt5EuhnAniaqY%2Bjm6XbOeGL4fpmwLyL5ulbRSbRRbRvt3AWxZA8p9btGTTCk7wAfVOezsAtHb2oYXppAsG6AI6uYmF%2ButWh%2F3JD7x2A2YMOnpqfypWl8n3YMXMEFB7IF1YCR2cQBerTYZaDdhxmPOArdafe3SKEtuuvoOf4IUvzOR6dagzYA0V1zUwjicRkI5Sp%2FTkUKB%2BcRlXtVrTeT%2Bcm1imwJ%2FzBRYSLuBRR7psR01g5wVbs%2Fng%2BqJIjFwNFATqNHYr9YPkwu%2BvbwAY6pgHJLFpkVYcX7BwMrUhEJQcO4iRq%2Fik5alIfxb4%2F%2FusBmMWNbdraT8bs%2FzOyNISSzWF6uhI27%2FSBI7XDmlJKGQgOo2pWIUm4UX%2BjdkZAzzxXIpt5wzVqO4iuZqLfIGZDMYm2D4yX3MQo5eITNLr9ZGTAm3f1lfoTMmxZEptXaRGzGDapalqPdz20x2Jb9b7rvrkB4LU05%2Fx2B8BJFv2Ae847qpoF%2FXvU&X-Amz-Signature=1322968edbdb4af7d7b95e342b486350eddd79a95534521aa0329dd3e24311c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
