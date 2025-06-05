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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=94dacf7b37e45c36abeb7a7b059bffa395d30bb14d8ba41123a686db11af6955&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=52e634cfd6972dff458fb0c6901aa1540e6f6c87a0b55d93309d9275303ed7fe&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=1d976850f92cb0db3af85816c2ed03ec98aa2ce7f81f8bed59d50c0cae76ce8c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=a69b426098bf673940dae1b4d8e4439d596559ddb6ad672dbb5e4a532466f223&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=198bcb2a488179f2efb0a4a10bf149dc60c507e406d839c92ea2aeaf0aefabce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=70375480cc404ff262444a07f874a790172e36c87ad201220417134b39c4fd97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=5dac88cff39427c854f285054d4daa1f5a0a3e1c40840ce25d11283745c5efac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V725YSB%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T140912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDmnn%2Be9U4N0tpnzHcflI7LZKFV91OwNbC1IJlGEZpU6AIhAM2ytlprw%2FnSymKF6fumLhWdPmz5E8DYnaRDUd626NZ0Kv8DCEcQABoMNjM3NDIzMTgzODA1IgwbFcbg8bC%2Fw3J46o8q3APscH2cSY8XBZePsXxx3zQsVEU9IZJM6fXPuz1jYDHrAXnM9otrrSwhT%2BkGPPkk%2FKBuZG78qjOCrP3VLsfpEuKvPv%2BmzjYPElJoFpAIv1ojgK7Ckyxi9cO87Tvm8SdaR3JvV2tyE5YZymUAdvLSN9C9zcO5tDhXUhMvZ8joZZBzk%2FynmfcCT62Md%2BIibxZacxTcwQfi0tK4y7tChX2Gj26PVxPI7zNyyx47TNCntY%2FUz3p%2FOIv4p9JnXIvvbWcZRYnMbGERqED5l7Zk2WC%2F4ovcscfTjj1XONIQVaO7GKAkJJlxPWt%2B6t3z%2BRKdakTnxJ%2BVMF0ZLmMonTn2q%2F2XEq2T7cDr0%2BuhWb%2BfPzAtoZDtZK4z60gjA5m5eKLrK1OUTYV2xfvU8JFEXgAY1oAAtQH2SV%2BBiFaSB%2BUB32Qw4jkEBvwijHQF7P70QlirML5o%2BXeQ73vryZZSKsAghnJeEiDmJ5CD9vLG0PDnzanDroP3Aloou6bxqGs3eozKqrlQHIIt%2BriLtdxWoW9lGv6ebEoWVY15%2BIfZOVdQ1TmqcVSEpX%2FGN8me30HDHTI5qPMISJEvY6Ss2E5pwbTQSpLQIG0h1vvl7Ht2uZCr5Te5Ee1ebUkG7zAFxevZuhYysjCoxIbCBjqkAaqtkegSk%2FeEyYUhbKQbddYW%2BKyFuNIsuKkXVgwtYBm7XdoKxm9Q2v6dMlfjAbeEToa4H0QS84EaFmKaz6YF8oaBf08sl21QT8AOwhdrCzcWloFsP4CN7jLq%2B7AQ%2BC2zRiQ92BXVS2m2FRv5fqY4d952cmie7KVzCiQu8Hr6YXSeMROCThuDD8eis3Re3yFD4svPkjqaMTSOKzgUHW7Uj0FPhJVq&X-Amz-Signature=3abf8b6e3cf366f759606dc3db40502207cd7adaa7d81644381aa06a7030fdea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
