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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=051b98ab337a8cd640fc4ccd3ff838a2ff570eb8131a1a3c59bc8a3124b8e902&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=7c4be77dac4afa78a830a8ffe03a1f215a10264d893ed5a5dc73fc3cef286c3b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=9d2ad1f63ccc5d917a8d11336b3a973214eb5df0ce139c9ffbc37070725876cf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=5445e26da84db74fc38d8869fecd4e4d08d80f7c4156f7206b3a195912bca4af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=724565f14c5679e06a29ab60bc3477d80f3de51c46e53d116b9b0d9f7d8bbed4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=f7aec90d76ecc83978327f20822bcc14c2295541f7410cc1ccef9bf962e18f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=cbc194ab3222625834d0d7ed99d403bdf80006a16465b1d93f54b6d73f45dd8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV6NDUK4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T220516Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnCrLCamU%2FbKh1VgB5X1RDoCDTQyPUD8IUJL37qsmr9gIgBR7aHsigRhZ5IyL653GVTwMqInXPdM6AOKYpz0P8770qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3g%2FYvvBfbsZHYDYCrcA4NK3oSgEaXjVvR5lkXZHQSowD4WinWNPY%2BncJr39VSOuJsHUyJubJAg95T%2FmYG0%2FdY62P4yTyrsd4fRmhSaiBgDEa6f4JJRUIm%2Fopy6UVKyMkahNNHlkT9Nw3ntS44tKDFwmclS8Rw6GfWBpA94fAIZsn25AWH1YKR1SWKkeP4NVvfkZrV5ZEjuNP744uR3WH9a%2BDJwQlRVnAtFNI40mIIkCMPwG9OCWXoHxscLad9pyHTcSwiTXgz3d3vlRASPVsFVxjClQzsLnn3NkPHuUd%2FbsbErYMnWnaroaTc0vH55%2BC%2BQecsgwAfQY5gDdY8LYr%2BrT48UX%2BD%2FwGpiD63gk6uRFOzpGrF1BUynIrL%2FXk%2BikNHd%2BE7WYErNiSd5PherAuTKz%2BgDWiAiYSCwcfUKuBu2Ocg9FGbjZUke2tXapE6xutrr4Jw3MyahUHRIdi704Rsd%2B3LEf%2FafF%2F9AFWDLLoRHCZsTik%2BgR4swx33qBhikj7C1yWce45XGELGYiuesgM2SornCy4QUQlRyhvmMZjs1T6V7eHalbl%2BMOnXO90NWR44t8j2LKFkuRVVSaFvI74KIJKNWMwlcsILl00WUCl0RsTXjcmwzF4KwtMjqHRtLjIrcG4%2FwEszvMgbeMOXi77wGOqUBs7jEcoGBg8Q8MXl%2BJMfnz258L8hUWxZ%2FVaOvE1aiQIRFJ1Cu5j2ksmX3Co48mcCOTUfSXN4ZyMvsLGcclCLVhSPRX2LTuHblc9AD%2BCXdlJ4XFHEu617kto3fEIAC7MDqr4cCZfWPE78w75eng1cGm1pjfKe2He5MoHNjhFiFHOzB%2FEQkgJFApo73VcA281784mgyevlXGFSbJqxkRuPm5x6yX8EK&X-Amz-Signature=f90020c027bf010a2e4b980e386fb0c92c94e81a4d8eb1787e3af70a35bf68c0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
