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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=2ef20c001bcac5e5c88404cfac2c4dab86bc3716b628c65ceed51fe16e646d8b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=8a81b0422d89e5f0128578922b2a29ba6930b495a17d34a229811ea3a3a30e6f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=c556888c6761593bf660c92e889eeac0ce056a4b7ce5eee4a6401131e95db41b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=f941a058c939caf60187f626e91c80d6dbd0b87325da48feef50bb2b6515ac69&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=4343ac7674052af74c020fdb0bd7024448ef2f50425ac2c9f2cbab67ad15bdb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=9adde7e35950a4a455ce6b19476f3ab32e6229af91a91852836a7cfe332f391c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=31531d22a06909fc22cafa5380a793127146a54833af2c54fe43d0aa5fa543b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KQQ7ZFE%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T090947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQC4au%2BaeG0yoeVII5bgIj75%2F%2BTADUCIVvAF1so9bxJehgIgd6uC0%2FFenPeP5dxFtMKcm4WFroSqv0tpVVZAFnYHWiQqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGXwYBlEpAJa86V43yrcAxiATJsjl1hTRhVcrS8adqrF3TX01QAkcpcyuRsHYIIXedGQBPgyaJMwhD%2Bn5t%2FxyNda7b01P8EkbH%2B4teA7S%2F4ke1vRe12FdHuVKUE3pAc2XMPxUQcPOKq1Wxyw4spjEoZwyVKKCqW9VGt0Ya7vlIyHeEcUcSLOiUGrYCowovB%2FoQF802VyrsVyPtl9TFdcLEjVGR4U%2F5ukXxwm4Eiy1QKyopf21ZyFJPR9HmOpPZ8yCS6GS%2FZ386bHVYIeFzzI%2B7N5YkcZkFcor5xQ10lMbmHvL8vlUb6vSBjQl3Rnqkbns74nQbV2DefxCLAGOknOn17BE0M5lTauQ7En0cC1%2B6ndPMEp79svwk0LXfSBwOS2KQw%2BnXhnjgxaijEmXrMXm%2BBIVMmOFVoYg9YuchWJAPNg7g7xtPiPXLzWuxEaB9Xxr6BCWLa43Y1e0CHF7eMkIjMEUJLDhWXVGa%2FEXaCwS8icq1H2ggPvlE2v88LdXWyQmLU9d5qp%2BTBuh9mLAP%2B7LqTltTpvuXbOcg7MYYS6yieKHq5mpGtAYYgjEzPKwfMRQqrfsOpTlWiRqTA4AL1M9E3suLkTyqoDDUZ3kR82wk0j1WQqykhnN4%2Fcj65H30roQXcKVbAkqXb10RdJMNyKjMEGOqUBFA2hB9poEYWR2SAvUFmSgLDmhjqUnTEmgSlxFkeHUcT99q6zYZgd0Ikw9WiF65Qh9atuYbvg4sW6M2U1YXg92VdrQwFXAh6eEvuaAfHgxclfzcq8GRSP2T%2B47MSlReS2Mnq%2FMjpNv8APs4OnP%2BVjnsBfR7fymGiZSDFtqaGG9PkMzYcqHE3Wz1XzYh49x2X8c3bKzaoqFe3PKUICfk7BMym6BaRP&X-Amz-Signature=0d60d10de6d0119b6748ac1907ca4342505d7763b54a5efd40e923052f47a793&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
