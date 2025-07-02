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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=ca72b78f181d763a86458f47b9f530f506e935bd77bb3ccb1b94d5f20fa94dcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=dc67bcbb482b1957243c41b9653d3947d21bbe982666ac80c237c11a46953ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=9547d6215c3c99bfac0251f664d063bd5a0d49fd10d58e252082beed75cc0dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=b8ffe01023957ab3bd11e7029376ff4da2661210fbf85f302f419928daa7867f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=0ebdbb850bff346d2396f0a1613b21e2dfabd6a6178c5010d4b6bf104ced13d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=c3254c1839ad2a62a423f47c98d3cf9b3f800d6b0eff2db5a8328ed477565970&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=89df66ee7b3c6a3707c11edc24fc79ab248fb66c276a88376bc4ffccbc7fa2f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDQYL3IP%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHvhp0EW6tICxYEUisv7%2BgBNji%2BX2iMhApqUxiqtmoG4AiEAxtS8GhgGMp9icl3Hf%2FWLe9XlFfO2zLQq%2BfaHGgKyHvMqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONUbifMOR7xYknJoSrcAxWnYv5EETwcSV8jQopTN%2FLYwIAPLVyQQrgG7gbTxfzREKE7WBC9WalVAUY0N0dQhAc1oGOgJOSTXeWYFJ4uF7Yzk4MCW16%2FpiMdFDQeEq92OoMP5FOYwJ3aHckdDeSMBaDPjML57htQYnA0Vh%2FPo5LAtXJmMh45HHFKWy1wY1QadoUz2r5RSbK30QbyhZJvjvdTB6YoAFSih5JiOFa7wZ%2BE%2BochGRFka0A5gbe%2Fz%2FSglViwO1%2F4iHoifrq6SBgZXZwqxiNUvwIaUpICmkUww52xwvQmo7%2B0%2B8Wo5FNwwtbtuTpLf1r2k3t3wsgLAAvBO%2F5hasz6QVnpZjMGQI60eXE1bcFeAirAspvBSWVSie7Fe56F8apv577X9L2DUaIqp%2Bf1x4cQBm0xoIz%2BZUsKnPi21nxET89MiW%2BmGe6qNfTABtE3wcHW5gbKPBAfNAuE1CkgwJIAKXj2zUTeAQRKJxCMQ1P6WPTXeNulBSJwRTtMrt1I%2B7Th3NdJdPpk6ZFN%2Bhleij7SVCgjcIJ8jbr0nm4wLVzVLJNuPgv6gGXadT93E16IUtlvxSXEadYx4Tsaxj0fj3hi%2BFDsOYOAVFPDpIXW%2FdluYTi7cD3HEA13GCIU3IzihBhmfA%2FzK7pXMNK9lsMGOqUBuKhAvqeEidUXCbaojJdaumKCIfLE2slICDYgO4YAJ5nATjsKZkn7UOLx0QwHKzyLMGvrishLgpa1E55KPGJnhqQMAsDNGf1Yxs%2FbouXrkWK2ZWtazdhtCR7FWSrPRqm8DWV4d9isYgL0JRHapQzXoG6vCZoLTOcHIq7CmEzeENBp4Ke%2FsLp6Zn2E8lEHiobdX3F6Lja42foTzQWXE7%2FqEzs8JXMZ&X-Amz-Signature=a7caa4ec7a6518fe5bf9068d59601edac43e4d64a7c9bdea44b75e8e4b9b4ae4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
