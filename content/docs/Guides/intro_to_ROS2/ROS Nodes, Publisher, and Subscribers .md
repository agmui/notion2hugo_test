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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=e3bb1a40532d31a1fbce775b139f4ff6b028610b30fb5ba424b464536318fbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=a2fe3a6b4c735a46f75e26a4c33670b8dcfd3b2897eba5462c84784319758c3d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=4db4b5f11a23e6733df6a3719f98ae0f0cf272239759a0e160140ba24f131d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=8a55190a59b68937041794dabc8f38ff696192e62a748012017ea1d07eb5144d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=ecb22123cff0f6a5a3020f3364dfe8abb02a883bc3bab96f813d1aa0519c2631&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=15e3d638e1a076650b58538321c95aaa7b1bbe2aa8bfa5b2c9cec21ef2b6ce4c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=0341defc4952d1d73832c223d384c37135241cbb533f33cb67c7ce81203dd970&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWPIV2SX%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEVaAg%2FKBz0kjuwZ78f3MtQwFe%2FpTDd9HX918oX7mGXlAiB8Lh3YEsCuNnGwk7KVIJVrjjMUq76wg2AIh6ploi2SGCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnZTph%2Bd0nQaefFumKtwDDggCcYXk%2B1%2B0AC3f1%2Bn%2FK2Av2TwG3q1KgkuRLHki9kusllnEgwuOp%2BzQugUczOWC0mXBO%2F%2Bh3DKs%2FlhQYzVukE2LuAMwdCO99zm5DPhrLL4rQpW5lKZlHWctgK1waNvuKTp%2BjNvpKyAL3d1f%2Bfi75vkq98aRcqk1Pfo2YSRIxJ7CCT9BqDvt2%2Bqa%2FkqlVOstje0MeFXVyUam76uNHG85bOhKZokweFsJBQcFaOA2otdscAsolrgt1R36ZpvuHIIQvk3aI6WiX2rBQ6uny9q76dmv6tQNLvdB%2BSE3RhP21BXDtDRU8oRWTBqbF90h639YjG3Cqf9Ilm3%2Fyq%2BaOSEUs9tVMKE1N%2BUA1tSZqwk4ITG1BUQwvQYCPOSLNjqWNPYZ7Kus6gUJqt1kjTbj5qqFKJzlwe0Yx%2Fzc%2BVsWSFS34IZbg7jinshCT4lM3EcllZwqOnOG8L4KUWqsyG3GLDndTG%2BhYHHh%2BXaYqTMzgTxQ5kHJPghCs3Mchp0G4I1WZDgfgG2RBR5l4%2FUprZHsF7BcrYIIEIPogWIOWQECeZaSNMAyK6hpU3usK6lDqwZFdr73bMmAnSJJQi%2BNks46DQCixIHEaROVMQJSGTaq6eZx9FWXeaSyA4n0%2BfDyk0Yw9KfavQY6pgFLoOHwxxlAwQjaadZjRP%2BwBMfBCHdYbVVoEwPJvx9h5Esbz8zEjT9oP9VCDKsuZu6uDm2uN6pbsy%2F7SOHhJ%2FAD90aI49yYn6P91gw9ekJMv2QsfjVKAHykoBs8h6ZPccyNxFWgyrxlElHPgMt3DXvz5d7i8Tqy5fEc1NI0Xcchcl%2FfP884QvpIGg5st4HiQzcRP9VRtUdrvZdrm6xLyIxJvv8M1jvN&X-Amz-Signature=b304964fe3ecaaac21311c9c60b48db350ff3abf5ac4bce2da5c16c2275cbc2a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
