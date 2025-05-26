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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=edb12f695db0a7668f3cadeff937282f0ebef24b0dfcf4150b40f72b0df4cbaa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=f4d12e544589198b58ff5a6a44ad68bb2ac455730a9f9ea349fada91780b120e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=b139e06161bc0b84d693bfeddf8ed5eed4cd0d59ff30db7f658a45f17ef5ff7d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=76abfce47bbc746d21f8a69704e5b05ca54ccdfb40e03bd838ee0a3fe3a6b5db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=beb94964d39b27ff8cc16043699d01077ed240ca58dc0139b177a8f8ac2d35e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=56b3621110dd970a6facba4b6de1b0276c6d36188a8933908c38b61fc2c6926e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=eae9a3f5449f92a51fe907becea6bca947e83030e512dab3eb1d0b99a20fb6d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VV2ASMSZ%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T101431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIHcNMKI6kUSGe1aamrxZbijQV1IhILVnfHnkXJXJzV3dAiAVcIJAZ2Xt3%2FbFkjFMb5cKGowX%2BCbCvZWiHixAcQXAgyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMLiUTQBWBuxCwvxhxKtwDTdYvnFEGOloNOgkugSYldenRcFLAba6odnabr3aeYpxvWI4EsBacy0kZiSrtNueSxaqcqEWRcE9sLsC7oexD1R3hM3NwUfMY834xqyrT6btWS4OMILmsRojF04Tj5Mff%2FJReldjXod3gxkUgGorMEG1qHAFCoxsOQBEEQz0icAxI6gFcaU170Juo%2BnWQbxv%2BAwyOX9hqZBvn%2FyJpkGHFd5ZbNo8CfA2IKE9YBIc1qMvZMuUoWIJEII76wlp0lUoboqqrLr%2BXMlZS4HgXQOltz7vDqqo3gBaEFZ8WyIWHuyc75KRl02lSL0CNTdDCTPzbALUCzldDN9ODOAm578HdLSlMPox1Q7%2FGDL1jTUtNqG4w28RhCY6NlBl8L3885uwEhAzkwONO6CEhr%2FVmW28DtzxnDQG1fVHyYAwcsDmp7QhZ4DloSPkzTUSDnhzpYPYAB31LzBkq0lIsi30ERuqJw4hB1h8Ov9U0fOiQnYy%2BmVftJmrAs07qu8ocAU0OOoOUJ4XOpW14KE8iI9799%2B42aT3WD%2Bi5Z4F8wTGDeg4Ofn3%2BZahWJy2yiUGhteO7zMBcGRhatY%2B5a6kRjQFF9wYLfBiWe8V0g0VqBiY8Kylv57Qf34S%2B9L1qS1WbLswwhtbQwQY6pgGuM0Nwtrk7Bozr02y6TLtMIKROmrKJMB72kOZt%2Bnm6L%2B9vtZu9q%2B55qz1Y1ROVHWYM7j7VMbydspWna76hSrZOlz93ynSXuV0TB845uUng0HzzQdMwBdAXX7rE8MyJwaqYV8%2BonIWtbqsWLp72XkiXRF8ftKDY0%2BJ%2BFMpPcK9W9Yi7AJmuQQyp8TuWTl1yoqqcQTs8MNhr1n83yhLk%2BC3YNW9jkdyx&X-Amz-Signature=1275cf0b028f6c4d5e789292278a74ae4b815d52f3dda8a4b9aed0d2fd025d53&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
