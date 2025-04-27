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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=18bcd7d10c878a25db3e6625fab9d9da575e4df9757ed8866e0d440a1700faef&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=09a8e90a07d2a25244ccd0cf6660aecb92be646247d627d0c9f2cc6699320a14&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=23a0102c44d9268e3e4cf0b868a13c2389fb6d11a5079ba83bcb3d9202404625&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=bb4ce60770de18dc5236a268ac3424223897e66e0aaf524c673276766d498822&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=8e304a3aec78397d1e70d1a2c81aa05b5eb1714a062089f8c8d544e8fed98992&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=bcef0d08ee1199c2458e7049b266db42a8757ebe155464f9344abb50e98bc746&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=69bdc1b8197404215a69bcb1a79fb737792878ca872f152a64cdd5a84dfe81cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQZ36JDQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T033109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBF%2FTQZ0iWf2DhmeAZz%2Brh%2FsKT7OpI36yPqxDsokuST%2FAiEA0zUS%2BCWPLYWNZIN3h5wxk6sLNDPZxYBuJBgAggWNy%2Bcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMvgCpnLmyaJXevo2ircAxdmWxQ5NJWcTvxuGpjj35pgRftr6haMInxUMD29UF29IwhTkyVMelJzDBdbJhMWClGzDJ9z9jz6JY8pZlBsqCq3WzcsdaYU8dQUdq6yWnJN0YGzWMPgmhhOH2MD7wTavwjohcTwX%2BvdZlomnKPJgVjgLqGtVS0pD4ecA%2FHlz0rEERgL7clfGTnE3%2Fm5zx0o8271KzgV47nepDANgtVwITVi6hLCL8UJ2F1sTxUOnnnns0LZV9frJ7fK7lzVoehDl1sno9Nzr%2FRTR%2BeZX7Jby%2BZvFv4vrx0nWySFeFiKmdtQcPdAHrXtTUfaQAQ4TzR9UajR2RLVX303FuMnw7lcYPO%2F6BccSyRiOtgEdhGO3SczXAUceYGIff7bid0KltmqgTLHM5MnVf0JHp1pT5U426g9WPMmUMHsiM6WOcYny7hTA%2Fr8CS2gMi%2BbO05UQdpIWYNHFnxSgxLNvD72g8xXPo%2BGKk6dtsSKc2BufodsXsgCRJno%2B43uILJvipy6HzttlprLgKjdQlWewmuzmyON%2FjpKoV8cIXQXZ2DajAy1eWR8EnU4%2BfPmtg69pDRcnUUyeae156cKYgMiHv1TGbFVwcY%2FP3Fl5TQtVPg%2BH3h7Ol8s%2BIiH4W9rwFIQE7WAMMy%2FtcAGOqUB3OF8CnA1Fmv8dUGltU%2B3KYdXncqfsV6fH%2FwSHNyAahLhbxGx7TdTp1x1M9tKvyPuPlpPPc6bNzr5CpN8zmC6jwUiEEiVc7CgdE4Wm31JYyPcBBz5gxvOOiG%2BgK3xnFCmXohvL4VZgMzhYTLNci89VFtZ91LWCgsOJ%2B6sZox7bJCEgOapMAnV%2F61ucFMDF%2FZuZb%2BguPSzVo7Qw9%2BQd4%2BtIeeM7gtT&X-Amz-Signature=a1fb680eb59e51f668220c1e1239ab7116071a71a14bb364bcbbeb05a5cb637f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
