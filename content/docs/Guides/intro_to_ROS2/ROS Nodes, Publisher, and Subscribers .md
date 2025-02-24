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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=65df55b5e2e2b09baccf5ba028ad0546b1c814d9d6d357a502dd234e5aee34c5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=912bbde257e60342a2e1a7c3156777b90c6f36ed6ecef7aceca22c52bca203b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=91d93058695d10187d723cdf756818c8b97887945f934eae78f3018b426a0589&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=0fd8fed13eab35bbc0c34cf933d3e7d2dffc014955f9bd3551539e17ccdb827c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=5d6e70db89ac76a80d00f20985ea9bb774aec6acaf5badd5f84dfb7f3aeebd09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=aefa5f48904fefc920a7cfdd3fd78c9d7b9a985614c11b764c464104c5df8802&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=bbe3a7674741d66b163030970ae55aacbeed35668071360aef67d91ca47ebc36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LCDH4AP%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEYK7QZ9aheLQZ6S4zFdNxhY9mC8eibGmZKRWwtjeiG1AiA%2BEJVW%2FTNE7TTcYa7GSADLzGhd%2FM%2FWAdYEnDFCr8OTVir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMpj0M9XGU14gQdeUuKtwDpe7Yy1KD%2BxfDQAOdEDpWIPGFGl9b0kI36R745lnmOIQ5e%2FkSP0o71MbqmTXIkDGp5gZ%2BQd%2B8yKeaT3%2FGXR%2FgL8pghqt83GzkBVLAg8b0FSZm2sv4HfT0O3CT%2FqicbiAMm6q%2FngpJB%2B5UlLtrQm1VTg9901Ou598IpZQGIpEBKQDWpWhBITCd%2F%2FgLeQ2RSIHySD6yka7v39neqsrihzrZe%2FlypFMh%2B1D8mSamr%2B%2F4oeP%2FTwpQU%2FlIM8teIuGkWolpHNE9F7bWf%2FHwa2%2BXrUpHggKPMwZuNYTra2F1yiD0uteI1J2is%2FkqpFfpd8hmPKU5xHG5frVAI5sITC%2FwA2bKnQT3vb3JgR9qoFJCMpuD6038%2BgqGhBqLYf3kgFAgLvC4%2FKN2tbN5qfCTahtGENyeeAaQYFZ8V3zFkGRGv0mTL4m1z8bpTQ0ooMEmGwbeOfSF9ysAh86wH88KJRy4VOepmEe%2FYbziZSP30j8y5tC44fFSC7TwnjlcYWQtpcLUOFad5KYhx02UtshN1d4nRE6AM7lLMMVJzCyjnSgtpJjZPJxMiV1xWGHpoKaC8HkYVwtMSAopbIGByUfXTB6vYHZ9EXkIxsRCWyl6m7NzJx1Y7c7il6j0RDKbnzEfyBcw3t3yvQY6pgHwOc6mRs0O1ItuCjhAD8cYjQMrRBriSdAjGe5L5puAPqHB8kLkY6OeiWyNQvGXM0QRGO9797R4wf8fxTTxxgGzODzeugrhtWt56GjL8WdteZJs8N2fUogzc8Z6%2BCy2Wr182e78rxcnglgnoTCQTuCDSzVkJGD41m%2FWWc22i7UtNjlpclYcG2FKUT%2B83JzxPdu6uNa4tpyOz23qAO4mX6xn8obteFMS&X-Amz-Signature=98a0d4ef215d5f522bd18eb8ed04c78ecbca353c75d2b5fe829f70756c8d59d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
