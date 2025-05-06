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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=52eab37e1a40ef986a316521c479b6f37c39c25c29063265f57c8e62ba8f11a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=a6b283a27fa795e969aaec9d8a5757ca8cc7b81b8987ff43c47ee99d07efe501&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=7a0c24ff69028e218260321d9e9260f940e0b20e14469f5e01726c0b243fdaf5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=2da1942ed776d351a43f2a7fdcc7e63366ef345fae1d21b9555a51b7e29a2a22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=e1f759a4fc1803b1423db3fc717074fd792e5df66de973b8cfd07698dfd47cfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=f739c7f7c2f2ae7da5b671635ce4bc3cad1d0f1173cdfaf66ad6284fe641a08a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=457098ef0d6bd19774388975960e339e62835bb3aaa4d71411f8288846ccb8a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TAQSG2Y%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0IGZrOx7IxUfUpE2BkC5TwmtgtRwOBP5n2cWz3NPJKAiByiIbM2fQpxElqR%2BKkts%2FJgb1UKDqPS0jANLM486caqyr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMOJx5Cr3xe2tx%2BwynKtwD6wy%2FF2z4N%2FiPVymqqhutzQctEBZvt2e8qxxTW4LLgivJSXpOkha51WWZquhQumk0jpYEwxwEJhZQDCVzu9ykt6mu%2Fwd%2F12MRCYXJfzC3RKnRlRCgMSeEf%2Fz0aKT6D4X4lwUl03eZSL3EOai5ztKztO3nsEvt7mKHt82WvxvVDwAQwBEPg78wo2W6oNsMJSkoZzf60TdzDl3OZ0JdLJZ342zmTr2RCLkEaor6BEqEZQJ3tGjxR%2BD0%2B4uPfzSLUFzcZD2o3jLnZ%2FVAGaupeim53lWFh1FOmJvP6yecal6QetvO%2BuYEcmLvkTfOfaZPK%2BKS3AiQsQCn%2FlLf0Vuy8h8T%2BAQvYVGNMGJyDDnszWBjkAHNbf86WPBPE9%2BhJF8fK8NmI%2BtfMwSDUHqfolzigd6LLOJzphVLvitnF6bSawE%2Bdo9JEsGaNyy4HVQ4fquiYFKWg%2Fgd5p%2FaC1%2F1k6cirW0v4Z%2FWkZGSdTLniGLYuWsqQurrnckUTQYwNyhaxpp3silGnKjXAT%2BmNKspKJjREUPBds4TxYT82uViD%2F%2BnUwW8umRDqFyw8r4q9eiuneXZuesGQ%2Bg4jP%2BzFPpxVayrR1n9UCaWqeOaeGtKCkRxF4WKiaWuwLHWU1bcaOjBR8Iw5rPpwAY6pgE%2Foh4DEOK2Qu%2BggLoHNNfDNMoJOs9YMUGJvmJZw0fIRD7AwLFYpRTA2ujJA0Q1DYtI7cpStOmbvIjFwBKA2IfdvykOgoI98ayWCoLe%2BNCDrnoB35%2FwQUXdZYAnxbJWwIuDuJ9M4%2B0o%2FwME40AumknJZTj8W6MKEFt74YBEXRsQUjfxedjALgfwabKF1ZwGOGxS0M%2FM7lG%2Bu1x8wOAhGgNVDSEX4p1o&X-Amz-Signature=da90ca802fd9f62e9c754362d23e52bc7949a96dc8ea2f229eba2f2e4576584a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
