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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=4bb2cb6e92658ce256d2d87b8c0278933d6a213daab1c718dd78d6bcc95f3b85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=50f28609569e0c24dc1772917a8dea5822e707ecfd5a0ada9374a88a96afc035&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=05ecf2f2925e67ea273ad3c88471d68229a2570f024f17ee22d5e44318a8a27e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=b8af8c1250c4ab0d8bc166e3c2d00ccef1c3e708fa5e454ee7b6daa14d98b12e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=521b47f5965f48c84f5a2c6045a058059a28e6ad3799a4852268565cb331fcc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=0b694b958a641cd69d9a25687574370b8c8b57d908460e54ae96ff9c9051c6db&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=30a81d052e88ca38159db200903aee2045dcb4a2f13f2014eb3d30ff231b0bd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQW7DPYN%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T003445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFll9H0f2zd0LncP9j2%2FXJ1gQdXr8HDS6qeskEUFSiIOAiEAxv33xZ5e8HUrG0LCrBMMFkkfV8nEIunCh9YvkGPaSmMqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMr7dsPSHzBbtvdlfSrcA0ymlQy%2BOVosrLma7yPTFoGlSXq%2BjPxwVGTTVClaNpF%2BuX201%2FYfwtW%2BBE48f42pPuzfGjbv%2F0w9RLH6%2BBZ15Qeu%2F0CmjUFG4gjKqEVZnRv07FatIC5iFQWvyaaRfTeHVAjEoWRDzvOmH589bNV57dSKip1sBqbyZbmDzkLySMbaOBqRxQt6ew%2BcgE9yjxTi116rdN2ZiiAtj%2FRNSeBDvTYGSA2BG4vShClSsfoUFi2rsGpXbQBIIEILu%2BOyr%2B%2FSo53ZN74%2FcDngVJGJLpnhW45CuPLFbeMPUiL4jIR5XUv%2BDMfh7jzbP1C0ZoPCDjVEN8XFtQD3mf3rv5d6p4Z4RUp87ra8Mahi6tWzQOISOB8uhpgrLvjbsK%2F%2FllHUHhjgYhdtv3WC4PBt5%2BvoYIofEWXAG7YO1Gu%2Biw3JgOz0HzUZDiN1Zs5X7ojd8se9l6wNDwZV89ivBl6eCcCWNk%2FVffkaEgeeSMM5BbCcskfLfxY%2BPh0QfJZmR5X1yJmoumsxT0Q4PliSB%2FoEgNjQi8wYgXPPJ47sL5widXRszl3psVKubUr4iG5%2Fkhf%2FUd5Nn9%2FoB1MGu3gv7CX3GoPaF3N9HMQ976SllIgCavOtQAnypwEau0zIah6LwCufmTg2MOvG6rwGOqUBh1pioLqAa7ZvAkvQoz6i5mVji%2BxmmA9EgXLDzhYfPI6mreXEYBcRuA5rLRgP3X98utSxlhxEd%2BLkRjEcQsDluAq%2Fe8K1f6qy5Sfja0WQ0%2FHyQ3jieD5FQzcDsKNBoLFlbG4vsMD9p%2BaC6wJwBCjgL3BA2CO4N8kWljJCGftYQGPtydYkJVCRrxiBGyMDNoE8%2F2Gsu2ZhHIcV8x%2BpFu4CV61zW9QW&X-Amz-Signature=9f5b82799929d8c318a4808561b83a1105697a2500be830400a09375061bc69d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
