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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=f06bc608e86f1c126487a9446171f5bd9347c435663eb344df35ddcf0d193fea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=df035bf4c3ea063e744553dbec6c21aa0c136092b395a27b809bc5593f36b730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=819e7e545a30654aa67ccfcc3f1fa689bdbbba3c9200d72b2f82c3c175b0e515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=c894e0023a1d917c4004289a35c681d87c452a95e30fd9eb158178ef504737fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=7bbe6ed06955baba2714c154e135b1b462dbe6d9b1f0ff5b9e3e600ea1597515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=400966e7bacc11463ebd5332e85c28100e984e87dedbd33a93fbc85acd72c376&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=7a62525b043f402e07691e11e448de62ca6c5b54b8cbbf4fca8fcb78981725e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CCMT5LU%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T091720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCf2L4usbfMm0EtBI9NtHwTmvESRkR5JF%2FK0kw106qc1QIgDWHUvUyZl8bFW2qU%2B27UVtuBZCBkgHeQmlaMWvmXrIsqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1uGY2FB2ba%2BbeBircA7WNLYjC%2BUHq41fNz4vRuUy2KKPOx9iqHa%2Bu3bge3xnie6ZoWWj10RmH%2B9w3QJWuv5vh0oNX7JRtI70wm%2Bwnz%2BLzOGM0C3%2B8ldBugOtOerfT56LZBdSqTvD8e5mDyK1I9LlJp%2Fjl8Jz1NFb9Y%2BvRjqyZ9dqhDgkMMOsGvwE%2FjvcIaXqLvvXo7ZgRmb%2BCB09Zm5RHD7o1edJH13YjATwWZXiAi4p%2FOsknvA27r0cHzMLYRpyYnji%2BjV%2FdLSa2%2FbpqS7KiX5vZGJV%2B3Fo0%2BkJ3d92vkq6T2s8B7Ilv6w8KoqhRniQBy0pTj2bpeNfFWpD0jIXkkKDz912SFrBBf6%2BFnRfiCf9j%2Btg%2BtU0RVH81NoShUdcaPtaUcdi%2BlrGlPbwneT1uixY9uCWH9LZqNawpXdqQVPVkv1oSu7fidegFF4QrXc2rL1gwvfBEaaKqCh%2FIfCc%2FHDbBXqjXGR7qpZ9eNOk6sCDG1ObuGaUwxSX154LBBkoEW60dzEqB9hTOwmNPH%2Fwn2h%2FJ1b8UZSVqJU%2B029%2FW2kbkD1AsBsChxp1kxLo4Jqpind0Xed03CLq5aQCmhu%2B2pgJdaspwcfpyx3Pwp3WHH3h6cvdrNCVlDTdMcizm7sskuLDiYw0Lsr9DMLiT98MGOqUB6j9fzUE5sagKDWIl1%2Fng2nZk2G62IK0x4Wr79cfi6MWh8XatjmDAUnzm%2BbVLPOsks6TuxDfh%2FE3BsrlFquYG%2F5FY2blTQWJAKiCawElAzJaOzZWGlZg6%2Fas7bdPY1udPg96HdN%2BiUNg%2BFE%2BKzMtOxNzDDX%2BQ14zOGazxuSI9tq1qoEZSwlascOefUVNVlVCmSo0PNbsCeEfFbfv0us%2BexrMy7duN&X-Amz-Signature=5f09c9c1919901024754ea4488dea9636d70ab04cad539d97eaacdf8bf30a784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
