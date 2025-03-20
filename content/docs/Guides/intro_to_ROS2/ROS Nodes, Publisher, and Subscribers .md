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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=ddc846fcfc9bad62a2f2b82a43a6e45fb7fa3a84b4ace30179978122abe49670&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=84123f3b530721efeb9d68aab390591805ebddae44d802b26155493028b08f99&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=cdadc735ab6bf59c6db7cddf977b76e58cf8a6fe2e07d1023355b88ed604189c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=d47cc5cd55bf1b886afd2bd194c8fe95a96ee05d9b54edff1cbd90ab8083d98b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=34144af47dea46d21ba3902be80ccfbc140025e26c3f5f8ec9171ea0df5da1ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=4e9e0eeaa8c0f5df99b70883508e382e6468f5397a53c0f55b1de77900960f9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=67a319b192bd6a7a8a2250d87a4d9e1ce9c11b83bd101cc0b002e7c6f584aa66&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F7TNLCN%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDX%2FXLNqT0%2BrPs7AB1pwLmT6F3535DwgDrxFGN0d9nLiwIga7UKe6%2FtQW5qujWMPBhnlfUZ0S1XHYiVn5le9CZ7vK4qiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCRrenieE9x0FPgJircA2IxbPE9pYYyrMNlDFj6Ba%2BvyZ%2B%2Flz4XVIQ0kIiF2BbA9QZP4PRQJg9o3eo0npMPBfV5lsY%2F2z96qgvHjyoqy%2B0rtefa29Fa1guaGqG2h6kVPCq%2F5Qz70hMVtHd23Ggv5BUxjtjunbCRZRULlVP5uHFdyDo7UFpVh95sVB3x9AtXzM6T6TisNsbVfNYVQmRbhdc6kg8PXymCdPOp%2FaNoghfzD2MooYKvPbXIGUU7whcnTjq50HpWSd0nz3j%2F4bAzqblJ0u3nmbeqqNMyeiRuTGOkL5u%2BnE7AWAMgSCmmlaSSkJRrj3aX5wCS%2BtwRCoJBXPXZB8kNZz97I4pH%2BOEyGY%2Bv%2FtNaeloPuJFBdbbBoR2HDUahu%2FtPw1v6bD9Lc%2Fa%2B6Sd8%2FVGorqO9Tf6oNTodVbWu7MwM0u5FsurTj4sPT2s5OllSvLtiSFBdgzaYeorfsp00WKzgHusuG%2FAlnAfNDrdcnWnMFvHmw3mH4uMYahVT19Xg42TulT8pL%2BN9aI0cHh%2B%2BdmKgbRF0xeE4uOFE7M27nEk94ko9c6nUld33rBDzODM6YmfinSVLHRZLHCoimy8mr%2BqFAlXUcVSI3on584s4ObmVvEWfuLL9ue10W5EcwFG%2FazeY6uatNG%2B2MI%2BG774GOqUBShdfvn%2BuvTcNsWvZ69P9%2Fw%2Bj6H4hD675H%2BvG7myyKbm%2BPxRinZyZztLKPEiyfWnEOqzbxY1wo2R8BGbUnbji7cXpEa4WhOVFsGKy2a%2BeCFCrOFwZjPcmylBvexzICrQ%2BS6OUuDbm%2Fvg3Cyzp7ti5CV4PAQ9szN%2FCD3QoHnB0cM6s%2B31kls2kmwrU8mmW9ttwO1BN4ZsUKDaG0wjnaBd2ROZ1bxd1&X-Amz-Signature=4fbb3411d194cf8f4cbc378d978904863181f872f40af83395568779be63baf1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
