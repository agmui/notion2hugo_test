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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=b9235f25394230141b9be9554409ce2af2d57a7248aef6506a9e9fd0b15fc8fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=cfb4ecdfd69a8c01e73bf0ea089448ea786688173278680a5ca6cd9177834288&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=2433cf7ec2ff3e69530f01fe6a22e5790ef552f18263f89e8a57150c065cde5c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=55e0b92446677ad85be359ce2efe13f28d3784bc3a99da371de9a19f3aff6e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=a632428126e31c414a2b2b0e395b65cf3cfa4e4ab920a8a0395b1aaaa2adfb7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=ae542046d67356d2e19bc1d06666adb18aaf5b0c941be621d48195b0fc695d56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=7e5bfb81c7c93b97ffeb5a46d92dd2d0be8414f82a99999e657732ba595ab019&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNEYS7O4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T170213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQDeZWkGpAYzKthGYjr08GFsWXfkYYDb9IupmjKRIE3uPAIgHr4mD45j37K4ERsvNiNM6jC9w8R%2Bw%2FzPo2JEAOmRT5Iq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDAHE7yXZywxT1xZSvircA9FIFn4KtFO%2FVMd3X%2BEkvGR3qKhBDpoAqevfQGNoXfJk4po5MH7XaB3ENoWWDSHg52YL2J5%2B8INyWjIywAuVxUErAckP2Ag06ayHabDyMB2FGFOrKpdV3nFsw3ZCjtv2uaZxocwxJwuOGup2M5W5GXYFLYg3Q2GAYgBU6Y7RcK8rgcrsQgGzPyKueiGA9LfcrIn78v%2BYzDLtYq1DL08uc2VwikeXLjQCeG0HTTYtw355lDkEP7GIc4mvJY29TGp%2B0vknDDifPEZvY1r5PFZg1oCgXxv0cLUeNBSjub5%2BRL5FHIZdiTBMhScUYCsFt%2BO7Xxss3lsZ69eLjHnbS88qjgLaKVkv96lipZmYKd%2FdG86yiddE02DuK1l1UdEKkgjqwSasS5T1C%2By2cD8D9O74zarBwVQCHHueiiTXkrO841cTQITbMS3UYxl6rqYeX1kRdzOFL%2FGcWs6s8ouXs%2B6lWtcdrj9QyycQ6tMcSTsUYEV7gyFRqhLoT2ePqGfrpHVAxNR9kSkbiNq4oS%2FAh7NhQWbD5Lyweg85DBZPfyKK6jmHrjNEyvgCHyFo9FLix%2B4zxy3O%2FvBnwxABStHQ4%2FZJcHCOg72VxqdegQEI0O5FdQ7TgmedgSsvKuxCucL8MNvqvL0GOqUBk4Xdn%2F0D0wleL7IHYfrgqwX7Ss7r5NKTe5bS90RLsX2MjgpCKr0pS99Vtf6gbtg%2BDiNQOzFohpomuEML6G1wWc%2BhESXBzYq1ah40EI12AvTSacLlSZ72FrgkZPpoOAn0uh02qcJUd6JMa4jahOOBJnV6u0NBp7crYFTv66C6ARG%2FQW8mqHP6W5v4ly4CqutCP7eLer3wLzNoetHh0j9cJ01zvIa5&X-Amz-Signature=58b38db45b19715d1cc2b1478717e793ba6410ff1ed78b5992036b188d393d0b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
