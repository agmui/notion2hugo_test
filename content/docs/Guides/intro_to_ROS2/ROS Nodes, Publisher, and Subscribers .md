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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=5f37f754f811d0f64a3b3b1e56514f23bda694101ae6144485bf7e1366c5d74d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=668cab6b14450ffc4ccbecec805764143fe5e7eba4d4ba69a367313facf00508&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=54c819639ac1133c981e8f8b1669ddbc0cf67a9354f4c5a399ed86f0161f045b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=ea78ec1fc1725f5cbe8430b87fc29af19f1ded2d0069b5f4ae93a103adb7fd10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=c28d3f1626c443824f8167bcc72d038db405b5ccaa21c722123c013b4fb969ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=7cdff44de14eacca0cc1742deca4a865fdc229ef2bcddef5ca7f21c5fb14e312&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=6d71f455dc690e0de5b6aeeafe697aea515bd8318b68df7f6159ebb3d15853ab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T47YCAM4%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF8BWmpi0LEsEm0cOKGhDqK%2F1qDwdHUa1MoE8kJYHN1AIhAPWkPElItFAf5CE%2Bx2193lZucL%2F7afXF6i68E2%2Fn3wyEKv8DCE0QABoMNjM3NDIzMTgzODA1Igz1jd6tV2ZQC9Qovvkq3AMwP6VR2Xqa40krTDiM4gFGPPRWF9s3fzzxPvxhwGDirZhJaI8gwvDTReREPtj7nUKRUmj6VF910fpSCbYYz6Et%2BGMfG%2Brhpjr2JvB9yHYk9%2BpKFhVL0leJoKhtoMbVburdHCkin%2F2h0zoisMHxF2sm4hncs1tE6qN0NRcUeB9RoWColnHhDD8g%2Bdl5QeYO5WwuXlWtGH3YJwrEkMyEODa%2BMXEYrdWnOTuC61YK0kjA3321rRrKxVK3dqRkY5j7QY0c0L0EJlOmvDE6psiVFu3JKeN4l6heWv775WAbUK7VURS%2BtOebkXwdKFxvo4RXThwCx8SfoNbGX6t4keMBB6CndsgPcWyQv3hmUHKo0i0vPfyqPR%2Bws%2BkDs7rN5f2K1zWEdD%2FMHC%2FU7KuQoGftCmId2txrnXqzvsNPxcLtfbw4g2%2BheLQ9ukfGnuPbHFusywA0vBeAEEE%2BOOCGyQVkjNrTzQjxeRjNR2VygcP6DWAHVmCGfcgmnbj931rkRFSUz4xc3QU729N7nFkkUUCBjoeCR552kNsdIvmuokVUb4G5oE7vRUBsg2pSDm8uSQFUj6wPj7y3feBCcRtAmk%2FPbTg76wCJ4QcRPrWbgTnMIGK8%2FFKfExRB4hQS1un3oTDbguK%2BBjqkAdOJjVKnV2GKyrKr%2BV7SNzRn0XHj3QV5ixlPNH9quAsK8DD63%2FJXQVpD2ZsWB9hI4mDoa2%2FtC3YieNaVkD%2Fm7AKBjSTXfTel5ZEu5oEUorK8oMF4%2FlpUB%2BAlSpM8EK65fASgcMtytCk1zuUkqcE4yibG2GWefB9onR1aj1Kd7lczlnz8eP2%2BBOPJNHpP54er8x5nsFLW15zNIZHrs%2B28rYQTbL0t&X-Amz-Signature=4b17724a7602fb51a7a9b05d107a9d9b702d4c70f8de4937c846014f8f602c42&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
