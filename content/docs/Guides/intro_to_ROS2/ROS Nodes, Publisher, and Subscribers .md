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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=f4cdc41a5e21e2d4669e9872ea7d06f67138cefc9c7bc9edfeadf8ac8eecd27c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=5a77356e4b992d00eab345eefc1bf99cd44c037735cea9d6b994fadcd0c8c909&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=d57a5d5035c0b583925ec3c533846b30cf03d686c19d3753de873187020afa3b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=d57673b64eac2a9a9be0fe6958afa104693de53f1ee32abbc1315f8b42193d30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=52ab0c89053dc2e98b51f873845811a3332c9d14fd5afb46aea929f6734bb154&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=e1b61cfa569baacac9c587b3af6466ecc0d08fb3a255d801232d25e3b5c46858&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=1d78c3bbb37822da9d2d189c197b789f18d17db01184f25bc82a4faddf7b1f17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665O67WN7E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEcaCXVzLXdlc3QtMiJHMEUCIHSJYS6ho%2BTBLuSo8%2BxvmS1rSKd%2BkoutDrrfLk%2BdNuzmAiEAikInhNs9eEQkdiXvTdBEfoJeMSZ4yd2EypJ3Ho3zW%2Boq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDENaz%2BCjBWVovNvDnircAw7ZJqhqGsn1MHBgjFSz6uhH88Rcm8ZCwWeNiMoBzvRZRgG%2B6MXOmmEDL99m33Lw0hvfyT47U48XiT2I6E09ksCSjHZl8%2BqlgL0YfQB0txBly1wWruz1XJ7R7fZYhQcyd7km1HOeFvwuipQXtDKtAmJFGxc26q2nBP9yYVwJ1q3DxtCtZdoQ47CLrHbWEMJW93W216MBQbMuYZETGYdDqOyX84GTPzF%2FFt4zXgdllIDWrrrrD7ga6hFBNGwOEjazupdD7zjc3OLJulTrIxRuSm%2FldD23XN%2Bm9Ga5DxSdPXiYzbkqp65BbcyqqCOWODJg%2FgDj5JIhOwd%2FvBqi1v9SvYblaQl%2Bdz5NbvgRVTRI9N7KmS%2BfPKITDv0AYg%2BQvh%2Bm4xmYdg0%2FGzIP%2BeTpTie4KnpVoR1gbbHNrO3Kx5s7ZdpG4E3LXSufBrma4%2FHQl26QQbvggeLfx9MFXdGCWL1zta0%2F0dxIHYusrbjctOKdbf9%2FNPt9%2F0gykEScCD3t4umhbRFYrDKBJ8hOmNOaijTgnwZZ4vOHf%2FAm0gVbEN8MJyhn7hE2qWMTdWhBcHToRcHhqICz0k8ySo3MSrrkMZFxk3Zc8gxhRwsSd6QBAsEgIZbqanQ%2Bt4QDP3OhB5b1MLH3%2FcEGOqUBhKSWBSQI%2BIKbIWQZe6V%2F7aq6qNnJCZqQVaoLIJDcuion%2Fy9VeQLV1q%2FfmKgV1b8yx62tadcN61dyrXtTlZmWH2SVjRn2RcDyKREWP0dKQPfXFdojeNKetut3g8kNXKoKSnEhPYMgR%2FatWAUlRQ%2F1azVM0iqEl2rrB5Patz1vWOmXv6LmmgN3ZRWUV80WF7bC1JadEZJqsv1xYW0x0yZqT6olSqup&X-Amz-Signature=abbd8987f54dbb79719138c7e8c8ae26b2aa7f5868c828a7a478aec747e6d2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
