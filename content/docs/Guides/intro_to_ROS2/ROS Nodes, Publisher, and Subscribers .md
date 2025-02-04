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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=10b658712a2c63fdf8cf45c19cc22620e3637c8e42789c92e91e6b32cee9e9f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=0f27c092cae517c3b47d716512575790f3979352cd0f5c7104d037705d04be33&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=e8adea13fa1b9eba46f231efadd6587751c12dab94d54b10394f0eba93d4158e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=2fc82ee2acf7c9f46ea29373780f6093745177ae280550dfa65e21d693c32102&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=9dec56607c51c1af67253acb4db794b6d7066f270b3f5080710d1cff382659bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=151b822ce9054482e02c0209821b9606c9af7e309f26d0a6bdc083a29c01803f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=5ed3ba0d61fad7d65dbfde555b07a915bd48920240f0c85ecdfa720050deee8d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRQRYVZM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T003526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIG6yxeuJwAVxLsV%2BeM4kCYutttzDPrNdEW%2FLcNWnlS5uAiEAhWPzrRFIj5kBA4AUQW%2BahTBcUGM2yK5WOQg6cEnogeIq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDAfr2hMbcnQO5oMUiircA5%2F8dYth3OaWb94HT4%2B3RrKN062Fh0TrhEdobcmM8lhzOtwiTMw3SK%2BWYxCjnHNyf3KbS%2BE%2B4kySoOnupzovafNQTfMPD8pqWR16FDNsBjtWDlmH7htmMCk9OF33xwMIGCgl%2FHyYiq30Sa5YquwfJ%2BWSGFP3uEm7vCYx%2BLuvgKbB4V%2FPFmWZY6dxcbR%2B%2BTZVj2OIxbTwgtv%2Fn9Y%2F9czlKHJ2gIYY0YfsNNL98ojxfOTFodfKnJ73ibchcRAbXOpajSmpJZG6PYM8trueBHNikoIEG3RsuqDEYMqO051K3Bclr7B%2F0DFmhqotLM%2F6YQ8s2ytQ0lAN5nHz2GhdCoesOI0LYST8aH7ztXHcYvwlszFMCgOAlTtt%2F%2FgSMKq06CL2LiZ9GInhn99KE3QK9aYla7GUmW%2BZf0PEycdHObBJ42t6i3l%2B8a6Vg6nW4fZ4Kw3fnysqT2x%2Fy28549Y4psZQayLhyAvihq5oCAn%2BdEB7qsAt9CkmD2hcFQ%2F1Wg%2BrI%2FFSIixlLnJRWOKKO7GcaFx5KFXvQ5ReDlzBdBhrAHzVrP9wcCp%2B7oVCcsNlBmah6GaOiHzeb1ck1t1fcFUNsRLCYkVE2ZbvhK%2BhcvMYXS2eptC1AiiYdk3iHWVcf2fJMKGVhb0GOqUBq7otgp0Mc%2B267mcEo8mcArT9YaSRgMMDxri8MOTfqWc8KEkF4rLe5NN%2BEGqor6zV2UyjTYUvDHClEmM64ZI%2FBhbaZ%2FJndXSxjm2Eld4%2FcWn6zBtZ1%2BfAM%2BiCxxhLl%2BXeXVF%2BTkB6RH%2BxJJqgkraIlSwPQ%2BRt%2BJ091xp2o%2BJ%2F%2B6f1yPo5OHwnacFdvBVJmyqeDLalK0AkRG9FRduwYGOOPSo5IrFN&X-Amz-Signature=08d0aa5dc0eef8a993f468add8517204f3981a7543bd44b5a0d318823b4c3d97&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
