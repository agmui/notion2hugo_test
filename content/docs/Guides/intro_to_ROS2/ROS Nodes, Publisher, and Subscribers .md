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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=2c5568c19d39d0d8e8756b62c086634febf97637865567116bbe9ec925a9f4f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=232b10c154e4aeb928bab9f5946735640f7d7c16981473227ed379564720e495&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=8a3fd6fdb12996969d453ed6b274ee8985da5d5b26cd9619d2e2fda7298be9dd&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=a39c0137946f2800a1b059a751efa9df487067482f903258fe3138ee7642854c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=96a90b963e959bfa37e1b8ad455254eaa510d69705a174df3c00ece01f420008&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=c616cd1d2edbd59fbb3970189dca56b4c8cf52894139fcc691e83a014e01443c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=69563bc08b4b5e8ca5b5fbd4d22c5c2dbb2110299fdd0eeaf600f4b21358af7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNN3KZKP%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDYH7O6CsYLYllR6mvvP%2FnjseGNsWJl%2B1hPWYBX8n1v8wIhAKMTzczrqiDADAtMslaPCJRlh8aaheiRDZk4stuOjPV3KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzORV7a9AG3rqb7RXkq3AOZbsNZAd8agyiTGGULhhnBJlEbsQJsGXJIANPUCXwGGCpztOgz8%2FSjg8sNwYCE9O%2BRqn28KZCTFSjIXnFdtq2tZCdxdBgzDUcBKqW3RLI5YkBWxUtK9WAd8EYtVXEPAZ0mX22zUl8LNtVC70ZdVqSdOGpSVu0kEBabImgT1HS53CoInZx8lI3rfJfzEPTk8%2FetMcW%2B9W6%2FeItdkMeWCjut8Q8z583M75HKT50FlyicZAyN%2FWSet4aY3xwOyly%2F4J2bFfn0e5gD14f6g4c2NcvL4XEdjw0GXHPMph2uMaikp0Wote0%2BbePurnAdrBeumf%2FepdSx4r8IDRc7WcUQoISI74ZGRSt8pxbZxur1mJnC%2BJIguL4PXGg8%2BxlwBj3b8g2lHXmokjo0Zzk3Zb%2Bv%2BiD%2BLqt4U7y4o%2FDfreHfX4cxeEoWp9wEZeaD5uHkaPGOQA8RILuo0dfmUbxDmrZ8js94BOP3pbxZl6I10EFJshvZwe6MvG8Suc3QTzwyXSHnJ3PS%2FGKaClyVj22u02oGOJWSCoQz7Dt%2Bz8%2FV4QPRBOZL9gb3RKGzq%2Fy0CVKhRmW2%2BdhE%2FpVKgso2RsQqzTU3gX3zBUgIE7dUvhwiqD7VTuRwxI1%2BY2ea3tUPibR2IzDHtsHABjqkAR9qHO10DHyr7C%2FhwtxrtwR8MrL5Rd6QRRJ9aZm9soKRPBeeANBRzSZyXIh8O68NgiuHdh%2FCRMn1HAvffbs7vGgFjfV8mTgY%2BwcsW5hmVGMWk95WEO%2BbhjdDI2DtXVL5NZi7IrOiXEfJ9uFsNY0bshkcu26d8BeVgspW3lRcBK%2FGlyefG%2B7jHCfPfudALhUghbDSA1nLE0lGe9LxvSmxFI%2FpfBVf&X-Amz-Signature=bdad3341282ce64721c90c0aeeaf4a518bc93beab4a1d7839652ac41319d05f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
