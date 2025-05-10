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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=5d5074281f55c5b67bc6f12975cd76834e409b657a5582eabe44a081bbde214d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=ad8c41bd6515b88b5bc6dafe5f2198cb817262f600effc45d05ddc8c2f5a4f37&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=3fd20c63f392b8c4ab7ea7394142b53f050b1c7e134c76939d1ff74b4b759935&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=97c374ff45a04705cff1ce59459ffb0b4d73d9697f2ddcee0eee55cc0c98dc29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=839b1243f3dbfcb1a535f7aa1372ed553bf03d5916c6e1f54e30d11c35e3fc02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=ac2d4331ba7fe8cc3a7c6d485d28feaf5a116dc4b5207c59feef1a1265f99006&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=756e25c3b469b9f875d2806eed6c24a0a2dba002edd9fba8d9a851fe5595677b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UE5ER2JL%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4VpnpARs1orlBNkNnbbsZt9e7Lee43748H2Xdq5wFfAiEAu%2BMoVhyDgzNnD0nw1QP1YoQGt7Ko73PmC5hEWIqLsi4qiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHrtZJYye7iPcThjMCrcA%2FrsGP1benuO%2FAkCVgL3BYanpldWfUJ3tdoRN%2FIgeEcHvxGM6WZlbEUBXjFkFanpb%2BJDqlMVRM%2FHCrxjib5LRTqWNGBTtLSxYa5%2Fy48Ky0FKhDeIXS4okGyX14ssjE1cdQut7Pi2mCjg61%2FefGHp7h7uCwmVfalLCbrD5zdjbcFJr%2Fx%2FAyEJgU6i2D24jKCJ1nbqNI20WUqce%2FZzby7Vd77rvuoPJyA6JOr7shD25uH6ZWfZkPIuCafTbyZwaRTJHC%2Fsd9Dqad9%2FXQ2sHkL2X%2FC2r7xzW2KSXmRP8peErpO2z7CKTm3u0UuYS8pT2Wt%2FBz%2BcVKOOtmy1OTUIRSn5DOqUptly3O1Hk9NlgD52PE9ffbkUG0M48UwZETGKmTy8faOtXOfodwCkh6koqVNFLjNpTjK%2BmHBGSAbr9fEPdr7%2FVHF5vdzT6vlFuhiGE1sPz0N4Z%2BSYuejFP8LNb%2BFCkS%2FHDI1SN0weTfW9nZF7vccpyZGjUoVcx6G7wU499m6XMbXizmHIR007Zf%2FT%2B1XobmiS6E28xeOOsOL%2F%2F9lv9Dt3vNR%2FPta%2BYOSYmGcEA5CZxzrcXvHS%2FzZv8pJUUpxt2mHOXde8fhAJUAwxLjzp7AEja%2F2ovRZXkz9z%2FPtUMLuP%2FMAGOqUBSG015%2BAITN2VsNq5QIrATOF%2F7gMk5XOUaV%2FoSDfBBmt5YiXqKe6sDXINOcxE43Lj7Q6TpIsjbLeIjF57qCspX4TbIcC6LB2xvYuwaZMnGQrHe7hwoDaX5fBjCCd6JEyun0cFp3YsHmeQDmABaz%2BAgGVOdy1uf6taHrDIa6ERotqLrngzjKSPFTrEx6ynSQHGMTLetziaQKjtgk3BUjqdMffR%2FQ2e&X-Amz-Signature=e34e6cbec3f3ae5f8b9fcb7da37a8c578e574a332dfb8015873e7b224547a856&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
