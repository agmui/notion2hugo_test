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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=26c30f7b7ed3aff69158a5ddac9c2dcc8e146aedca6a887f6ba3d6ec2e07179d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=0ac909fbc562c6726af5269b07ff2a9d6ac8897d3b452bd4e68d165513595c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=bc54a067f158a623a9e482e4c34ba4071f3d12d3a3455f9cf97f3ef56a84520a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=0bb7bebe7df00c6251ee236eff0762b200a806ecfae07f6e85df70366d22160b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=94fbfdaa0a1326c4260125284d560bc85b8a42d900270198e4352f676569cc85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=246bb948a429de50eb8d73131d9ce98da6167d9235003fae6d58eeb43dfb3585&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=307c486747c6eca8796afa59a6fc608b1290380b9598c413fc74ba0082311e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJEM4P4B%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIFFVsHTfw5yX7NIuQxUpnS4L3cOcOWniu13h4fy24vtXAiAtIek4nvrcjfCrVBDLciTpLuIseEBuXmThEeurE6ziQir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIM83%2Fhs46bzpe57sWKKtwD1dRV2d%2Ba9hOcGjAFUVtJhRXvUMtsamb6ub21oBU9jKlzIURvwXkFOZ27sTrBKOFrwgr3ktb9wYFjmC0pUkfhq%2F3rXjwWPv0qWKnZnSHoPmyJh45kP7WiGQptVtaJWyjUfIC12nRBG%2FLs7K9wsMf%2FlSZvsF3cFA38rl87HTTtmp97mWSbPsqYyGSkAeKSqOsrk0FPYh1UH8%2B50wPrbtCKSTMcTgwrV%2BS8OK%2BNwMIWkQAs1h7Hz%2FVP45HVuItleNW2RLaA963P%2Ba7lzcn1eZ0oIrXKmdH8VyWAISOBDnx1LBsqQe1SH7I5C4QLFxqgHp9KBm8U%2BRXqs1toIUEVJA2ddMDfopIXNytr8g54nGDUS%2Bz1AZ1vrl4nWsQuO3Aob3W3LUYbrNKLePzPlsItOLIIvKrwmxQMSB8Sj1mN8CfvcMdCaPi5U8BuTXg6X9KYTDm3wErsLm0kQ%2By8hfeRGJaksROVRf6sg6GfQp2QL4fUlwOC372Jab8tpW4qpalq8PXocWkwh7CpD5X%2FqQm5r4hjdhxdc5HQg9i%2BsuI%2Bce9Zucwii8GgywCumUvnW1Ecbp8yU2CGzW%2Fb%2BasPQ91vUcf368JxXT4T4bTvyR62n4mv2uTk7x0Of65qek8VZXkw4p%2F4wgY6pgHr3wCxSU1kQbJlyz2CfKnyEAaoGLmQLALqrxD5hfNb6ER0dlaGjCYMiZZAPXPhkj8UOAoj8sCdq3XvKri5hpKafvWl45l0YhqYtczqrSUY4UY2Xh6sBHv9JpN3sg%2FaKaVz4zHkXAjykRmHtUBSTId54tKIkntSep3Yh2RprXIP4HYLMzpKMg4HWIHUzZKa1ooInM%2B8QpEdSIT%2Bm7Qysv39GyCubD%2BO&X-Amz-Signature=1b325fbb56d995606b2552ec24b08bf85a9ea62e8c5ab9300b6c800f9d01b9a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
