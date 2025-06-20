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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=f6d8f4410b1907d0562f092c34ffdb44eb99322cb349eddab754595681ec6afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=943620ec2403952429ad31b94c3b2dbb8a9e62302b8214696f2cf3866f2e8c58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=12f34cc31c635e561c69c201f6baea877b7a87eaa2d146363cc202a515309cfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=db09604daa17b460c9be62f419c3349bc7a23dd3814478ffb5872825ec22f191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=c7678ff16cff5e7b7c74f2aab03b04a787bbd8a4af886ebc1b4792962bb750f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=985389511625217bfc49d8e663801f2f84823f5bfb087ac9a873bc079d97466a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=fd89e3deecfdc8b998a6e7660f0f8a65408fd181b550583298117d4b860210e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFZ7H7UF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4%2B6c2%2BgmiuupQ6mDsBKck7m6H9qP3DFEoV2qROrGNeAiAI15%2BQaQgvsY%2BB3DLHiTDDmsH90ZILisbkyvz%2BUQTSrSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtSo9ya0Mw9GyDdepKtwDLJjvdsgEjYc2qFVnMw0hoXM9lDyMDVk0MafBWJlcaDQWnj8Nuk%2FB5T8CtJkdga9KsL%2B49mjd37iIkSWJiD7sV8RtXWZFewxfsVeZ1b3ovSXccVfzCrNLd4%2BXh2SdydO7KNzoOfg8%2FXbIjYMYRXQ0sq4FMfiJOI2RUrWvb%2BjK9DDlOVcWrblznEGNgqAsCqaPwkP6NcdykmtPnNqhmX3rqt80yCeRbraEN%2B9HbDVsly9MckuulqJTEt6UruyphI3MBJFM4P3Xtx0siGrKWqaFsaSZdjTXMYnId1ojiTRFzf%2BrGjuyv6KzvzgnG%2BjQI4WeHzCaHrU%2FjbmT4RI57Z1huiYnc0zJiDSCHhp8CDOHk6eBH36vB1F3Hl2pfE%2B2oN9b1rvcl1Vqry03WFBKR615lmh0VTfg5O%2FdSGOt2BA8zLmsIWmbjlzxlhssqDzCwSth4Y%2BdMYlDF40FgXgpUabS2KXXl%2FUKQ9H%2FhfR4cQ0MJdE2R3pUmmBuz8A1%2BPYUBpHy4JaPs3B4cXi9sZw59yoPLCPXLBDw8H%2BDACtRxGUGW4eFfKyVR%2Fr%2FDWenNTDGluASJmNb0%2Bu1ChZg96SGypNbhpuu0DoMlUlex9Gm29FvbP9piKWty9xi5QaqdMwwvrLWwgY6pgH7psQbxZZhvj4XOdZy%2Byi%2Fwiju%2FY2cf3JYjWyiEDGay4%2FBRZ0DAm%2FyXm%2Fk%2BUXFD40n0S4eJitIYJcCWex6KzHLvg4oA6cKKPqAqsOJcpF%2FCoRFW4ef0Mt9%2Fe2CZZKuRlupmboU6LOspTarL0n%2FV9rXvr7cYRgYlgP1T9ksI5F%2BnV0tfjHxrWVAK6s5GZgizxPLL03kOSpwHm9fQhmBTOS6fqAuEElm&X-Amz-Signature=42670cb2f3e98da59a7af346213bce22505f90d2221afff6aa90c0b38270a0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
