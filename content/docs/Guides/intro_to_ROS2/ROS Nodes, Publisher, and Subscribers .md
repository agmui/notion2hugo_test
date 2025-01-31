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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=8cb80dd702d404ac8d30e03757d76609ba6e4fb24e12234d0998b96064e82efd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=def536c9123200c5c66b0f6a00382496061cd896974ebec92c55a6b403441ea9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=c79f77b3c1d400f1694816c1acd5b263b17a174a38152b0a4666c127b9459aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=109d34e85018f350538fdd9734e1b6e453d1fa52c6f74762bc2f666d7d0cd696&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=3163026b13224894ac7ef93644492b2aea44dafcffdad13e0adad38bc77430a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=a4791809abcc893f9b38fc405ea2b3a1cc5a977b9b6b082219da71e029fb100f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=25afda268672d522eb846650dc65791aac7705002ea45e3a32f36b72324f45e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FEZTFLO%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzITn%2BH1GzvKcsGH6g2KO0khjAIfmFi8ZgS36VDwZJ3QIgVr1dlsGkvXYNqXKcW3URH0n8p1j5vxp4HEQexmvB34sqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN0jlwlP1DCWNSzjhCrcA7gdQ8%2FJPzDEmwIIRrTEfkRuH1bB32SACbCh54S62lXOH5g4jGm1eBk9%2BVgPVx6oc%2BjzaYinNjmci4c1eMR4%2F1StGV%2FiKRgbXwd18nkkj79NvAGLUTcyAg8EHod6rYXXueNabrONCpd%2F7Dgcg2j8fPYz7d83CtpvjG3PMWnaTJ4uYCb5Woux%2BoRtndyMOkER2qXXyzK5afpwbtsz%2BxvMCiw6WU%2FibwMVyQL%2BIPrfc9sFzTKhBXKn8DRBKb%2B43HBz7KIlem3uBpnQupQe%2B2%2Fl7OvhS34FHq75tyLkWTY%2BXQ5ZnhXUcKC4qO2ODobp8sZM3Tk0dc%2FvugMn0kqR86D0JmXK87yhKObvLA1uxm%2FEIOAcEkNRM%2BSCS4MqIiOpVosg%2BE2pAy1%2FjVmX7nZpWbXdRt1m9DKpUuouzsiTH23mg3NsvOEPqJWYITRv0kVTLHsJBH7TXYXReERC4bz22jghZk%2FmKxkaXdVBC%2FEF3FlvtO9FOctjbA%2FvEC3kCqtNOaXqlaYKCVBlHU0jDXL6vWu2ZHh7OL1hn9wzVpHlhgfoSdkfPeC0siP1tpGqOsBqQ9vfFjluwHgUrCimKrliFf14CQywEqtqgtWZLrmidtShpx7pI9D%2BVFonLCPhGEwvMP6U9bwGOqUBjIMyGuQwFKF92aAz5ZrxY1nKBwIWcB6yg8weYM6R7rqRbjTA7z%2FPqb14i5rlGq%2BdaQTVzfF87dHMK%2F4O4abTBEZ3pvhdHbyfjdIwLSnYjYe0BFh5xyU%2FMUR5P3TnTmgXVbWPWzZLt4TwRxCLlKwTCMf%2B%2BBx2YnP7%2BTCmJ0Poa%2FSc6qr%2FQIlQNCU%2BPHBz691sxXr%2BVGhNN8EBXu3lg0XeLRuw6oAA&X-Amz-Signature=06a4b9371bff4bb8e9425c80d243845ddbe3f7c6810bdb87f746e3135ca68497&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
