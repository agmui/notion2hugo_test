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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=6ef082c05e702eb3367d2b261b9d9d8b29bbb4c46de3a4fffd3e6b619b3ea99d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=27b5d2027f361567c6714437ddb6ef084576701d95349596ee96ec26955bf9d6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=7a031e5aa6d3a4663cd63da8b8bb27e7db5268b8a0c9fc58ac61b628214e246f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=1a3e8e385568b5da56bce98f43bf064df5ef3dc5771b67271173b6e10f03df16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=1504d72b3a792140765e134eec16b058863af7ee63d49568dea65dc11defaabf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=83e749154d9e3d03644f1de495e42284c9f45c0fc29ebb5395356a723f283f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=28a23e9fae2fbd4d0e0bb642d027d028c191a9829467883e1bf34d8acf2d58b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655AOSQTH%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T150925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIGIcfdTf0G5rxZzVZrhRTbG3WvlBkMOjo3FQgWPrk6BPAiEAg3RAKIRCFgaqFMuE%2FtX%2FoJRH5xkxzpPcDaWUcarGgG0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNYEEAgIQjgiRzFbpircA%2FMnlFWiMoUc0IpnSGnDOV0rjPTM6MsOvfMuKNT2csxqiocxKyGeMHN0PNYUiVAgvbmb71hzf6RN1IlT5CO6CtAgG4EwRxVMCbA58Lv%2Fvz%2BBuUpSv9qc2DioWdyf9XjuiwLdTYrNOn6VRIAFt%2F1fpFxw4fY4cziIQ7m1o3IrMY%2BptpRuioqQgFQhnI35TcrWAn0wD2fGRJfSLx7JJKfKkGoTmqXFIUksasxtxgmihUHqcLng1R4kX3bzOJHJUPw88488n9ml792ndkEC5vbxEd4e2luKdsS0VgbI5sRIX5ov8fR6fY4t%2BRiEl92v%2B9G%2FNKwicahYTthzTkmjNBQYzOQRlBMT2vA9Ce84eDDcqDhjfzLFZR2H2SBzJ2jTZsJFoIQP7L6RVi0sJgkR9UTqlTFxQ6aWzmIYfz4%2BP3GsXEUe7iKnEJXft5B23%2B8viMwbcv9Aj5vp4eO0JRP2JENIrLtrIauK7SDe8ev9kFU1gKALjh1o83cIGmzgk7Qc8oZMZqlYSjJapNbB3Tp6Rj8P%2Bp7qnuMye6BndwbDXY7FwfQc%2B9KkUxVGANNXbLhsM7EPgaZMwDiYEiiE2HVmKLP4UieoAQPsEveDmPHORQ2OMvGfLLMJu%2BPJ470xU%2FA1MIiMwb4GOqUBkO6wltpC6%2FdrbRsogc%2BYWxYe%2BXRjPIoj3Kq14GZ1SmeWuNG52dM6hidXxBUtlfcwO8B8UYKuzPalQWWL4N3u37OkKczv2EmyGgmCpJPXM5P97bz4%2F0gY%2F8v1xS%2Fagle%2BnyuUZlqLNHsvd9vj8RNtdPWINnCg8%2F%2FnAdKOqUv5kRjJbWI8u93W3JqT74583Pd%2F%2F1yO2fAwmQ2uu6VT%2Fz0FeBqYVPUt&X-Amz-Signature=f41897a34988bc726657cc076e19d14a96b1f271ba91abfb736a5d5d1deacb61&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
