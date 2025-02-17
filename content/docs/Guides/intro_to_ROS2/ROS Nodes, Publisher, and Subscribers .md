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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=9f0c2e2515d0eecc6c86c3cabe6ccfd3482aafc14b330d2f555c55374a5febdf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=352f51db97e4d63c56385d094f9fb68f4d5f3402bd691eb4dc7970abda58550c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=9ef712a58802a00766b6f8849c80f43532fcc1ef1dd08a4b57fd926b9946c13a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=61281bf13a12a0fc407e2c52656d0e527032c0911d6fec179e44d108d4f2884d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=2ce4a2053ea2da080d03d4ff5a44401cdcff00b9c5ed55dcb7f4ab5a85782be1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=9417ba885fc90f232478ed356861a6aacc45b47e900d3aa0b7e1d2267590cbfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=44e8eee2a6c9cad85d8ede41572cc5858674d384aa6499db04d73d42a646f1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZC2TKDB%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T050856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHplIGaohAc5Rsaw70PhhX2ejRi24gXahdvRVOTNrzKyAiEA71kRVWT8uzuWyYnmp1TyCEYPaVv6IGlV6xSIPi51ny0q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDDAY3Aghydl905T2ZyrcAxIaW%2BekcK1vZjoBPkQEkRquSDlKbenI0j0G3dxUrzXVr%2FCg3PwvHJLpBgJwmPByNRDDxcTLecbg0aiQckuAPZLdv3ai%2Bi8Q%2FWeDkkpZv5SIjZ2ZR9Q%2FNWdcF8Uqi0jhtZIziihZZeb%2BfZjJKrMMwzrCijCWQmBZWCEqCg8wWqM8DkIoXaHm%2Bwx42YzaLuo5MK8DZKfmie0iTqpKUNdxqN0yX%2BBXY7mZH2lyVUJ%2BEThBqYLYuGUxZ3hmPzZbFF0ujKp8hySHMIxjPHxdCszwVf7mi2JUHmrRrX2AAvZZRl%2BH56RC9zG4Fg2pDJrprSjnCGMaHCWsaYY8CVC14TGovV75DG6dakEw4mwwqwxeSL0FK0cwQ1LQzk5jgPVRZnFlJiup2AmJYTiqPnI1horLA4SgUSW%2FcGpKUz9%2BumAJREMhc8wcs45SK93%2FYkYqtA9bu2dO0sfNAoyvbJ8yFq4XmjFyl2x4MDHC4LR8TPEilu3J67iSTyi8b1d81I1p14ir7J9XKF%2Fzn10oE6fzNfTK9RUoO%2FJngOZMIz%2BTzvp0izbbHmhsReO55R6%2F39mOkU8GcLV2bzoQRbAs8%2FvDpyA73VVsq%2BbFm2fvW6JnFruISiuKJT8gGVPzC7BwOzA1MJPLyr0GOqUBM0mjq3zBIxNdTiCLikchxcJMYZQYw6dr3npqS2XAaucLXr8Up%2FZJz%2F3sFZCIf8Npokd21EVl1QBlJUr%2F%2FRgsXFcejbPD4bWEmQLURfzmOL8CWptLfRDX0sQAOcYxH2hwstlDoX0hGNEyGFNEt1%2BZ3J%2FPhKvyuvnlpo%2B2r%2FoIqQO%2BVRnKSNVr%2FXX5fwu%2F7Z5uvRqI4nTuWmUvWvTqFagvMkyWnmrL&X-Amz-Signature=c73d36d563face3bcca63116808a70199689f40487591a947f3e207a9944c0aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
