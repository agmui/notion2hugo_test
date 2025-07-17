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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=d0a9b1e96a5eb06591c96cbd14e99f9ef7fe281fc1f9d4cb58d2e3772cffd6fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=2d3708edce71659b80cd89c4eb6af4813c30a29a11d940c195a2c2d1063244ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=ec96cf6a66757604b0d7ec9e54a522385ec1b83227e1eaca03cc225a145255a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=d3bafbcdc612fcf7cb8a77d52f11d8e066b67f4aef3505029cde008fa47cbe76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=b8f6690882660b9964009fad1f02ae2de5f0b80c807c0c365d4fe1619643094f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=d17ed1cace7772d349c888a31652747f6b2829bff89ec5926d8ee772889926f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=1b46f4331ed42212ac76aab82c2bddd5d045e0bf9f2219965a518e484d33ab2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFRITOSV%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T024926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIBDD6IMkJMvd1Cxfc71ZsAHkzwluLeFAXHHYPkwhEYLqAiEAzkfwNtWIBrVggemPbcliTW%2FUYKNZ%2BupTe7LJPljai90q%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDO6nJaqHV77bXSsRYircA6SBg77PsHiVT9ooCa553qqxbFN3JFyZozgkkJjCR2OwhfTJ%2BJs1e98ZDzNxdD%2Fai0hqikWRercWJ4ko3VqbOM8dqCSToe4ozC%2B2h8as4vSp3UlWAlEMVpM35mixmfgTBjaUTztHI53i474rCRrrH5aDS02xLOFPrD6X%2BpgagJwkKgNl0Q7fzcVWt1Yv1VfsOA%2BZnCwwMCdLMHKs2GKsg7CM9z%2B46%2B1I202h3xKpSwP3SOepzbnRA9ky79EaYe2vX2D4mp5aP9F1V%2BMkTn3hYFg9NcFEiWRMHCJ3hf75NL8c3NCFpZWJ4CSllTF00ggNQxU8BybuNtaBlUN2rEeq7Zt4NfQj09FO51%2BS%2FdmExYGAGhvB%2B%2BHRz%2B2TBZGiSDp1qfmac2rmPzeSgA2JgAq35gTAD605Q1gVVo6hTN4QSWR5MnvKT9uDI1P65pfVYqXU4BV%2BeSSN70%2BMH2t5d5V8uETyoOUEA321CGs5%2FHdf8%2BBMrnlJ57siYPASkX44oVFesyP44%2FX8XtemTt5vkU9YFgfexvAXGVnjVNlRe8wNjj4L8JaF%2FhwuWX8fN%2BiAFiXj5RbBWG6r9ZNcobknZ29U6TYdl1wIrtoms5369y6aKWxf87g4XV2epkF1ys1JMPSe4cMGOqUBm1dgmeemOEHFuJZIpbzh%2B%2BGSpHj7tDOlJc5GS%2FI8IQSIHo2EbbVjBNKaIY4llXn32ytstjRZG2Hrweb7QvZKv4E%2BOzdE3TtUutgf6YfUm09Qr6Se%2FR6yjb0O%2FKQCdosh4UA80R8tNYhzTH%2Fr6bnzg%2FBekUXvqvtcPuR8%2BUdLvi2rzl6hELhL2GqasmxNZjVQ3Rw%2FZmkBRjp2yZQywH%2FvnM7e1ODT&X-Amz-Signature=7f9de2424ca9f7cd108a949f6688143d1a0693b8db6ac42fe14edd0013a990b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
