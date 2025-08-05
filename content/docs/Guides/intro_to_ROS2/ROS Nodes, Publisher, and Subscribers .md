---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=e4533abc417519837dfb87766cf7e8f54428f5ffa66a1742f075a0a2f101bea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=d10a7574cc4dc617d16f0031feeb1d2145c3627df6b43f9bc20c9edce7093c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=66ff4d749c94a676c0b86b11bc7ea9640b59aeb885336b8e612ea2a7f4f45aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=6d1fac71b18fff22561a039fd538644af8bc005fc02a14b9308995d75d10dad5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=56e052b09e8a33ac396db6f292990906566ef84f6260ec7ca8a5a8c1cb8e45b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=cbc7b8b7850952e400a214d077bd6c492bd8842be75eefec44e4655296461440&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=ffe9108a904729df14195905f76c4042e82dca0f278cc83ac55f993e24f1b014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6YWXRIZ%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T133406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIG8Vi35S0pVf3W1FeK8ZReJ%2Fp15WK9DR7qvtjjv%2FwWb6AiAU6l0Ini7Wqxo9vE%2BZ9GpWl8tlj9WHMFu%2F%2BYSvRLHzxCr%2FAwheEAAaDDYzNzQyMzE4MzgwNSIMiO3nAKK%2BV4sP7fYVKtwDwLlyb0TtxVT0w%2B4U0oC2Zbnz%2FZ3hQQb%2FZSz5UMTFWJ87kllr0vHjv%2BbLiz5G%2FB01us450KvACBJzEjll2rNmhaxTI6oVq3vWIaYgFXb50JTZ3bfxPF%2Ff1Jgl6ip5lBZmS87RKZulRJaj%2B8prxTXCdjwovS69QtnWSgmJIsSBd7XsZ2Sv8uQtnuZ5AShpPUmeXIPb4wFEZW3ncvNQTf80w0QK9uzslvhfQN0uuiT1hOlrPQ6eKgu3LB0o60ZFgIsSr3S%2F06vxu%2BbW5vP0wA18JJ6cGf8qQWMfp2F941eFkS7mLge6hUbz%2BdauJixQaFfuviMIGrQYEcgNCsyXRVzMnAJP%2BYDAq6dOGujzICVlI5VEXlkYrgnQO7GgoAYjZMbsirLo3Efu4%2B8mcV2lcEXQJfzM%2FmrI5qyFhWncUVJj0hjJAVFlEoZsnube0%2FAsi79KbQog2ElOEO%2FPWIjgbMcBU9riBGdsltzF%2Flun19LmijuDKmagqBHgK3hOd3Kta83L%2Fx9ZV1iClY2nHnwsmlabqX5vsBl0UVKN9CCtT8NZvYu7MjAATm9kTuxFWApQ1PbepWyAvnkxX2Od77QlasSeTwH1ohCbbmtwWt%2BTTMp11FOf09Vij2ms7MbMiwYwo4PIxAY6pgERrHd6NqP0d6duQjesHJB5kJ%2FVdp0HogpWJq11QULn0p5PFms5lmNXCTlbn3lFCOaYqMCxitwQeSsHogSETDke0xCPPcKIVM69%2B5NCAvpTHeQHtSvtJngHU6f%2BLrGxX2fokUs2q7CM648rOiCwgcUB16Yv29jL7VTX1XW%2FpVrtLktaeIEHm0bt7uXBWfaJugxqQF5Eb5YdFBtA%2B%2Bf27tOGInQJLjzZ&X-Amz-Signature=38b1929752fd66309f0bdafd26788fff92878e6bc10d1b16bb517c6a1a6ce6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
