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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=da9609bda74de64bd6ba81f25d73036c8469ed91e71c63c246425c526354bc2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=7867db4b6a21e6417c31f22ae9655f5d947f5b7a182bce71c3ab5e40a6277f93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=dfb00cb452688f4ad26285c56c7351bddad0b4a8f71e4084b7c6779be231ce43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=99714b87980b3d33058cb87cdfcbb185ced6fb86bf2e11c4757b13d018a9c4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=807502f86485cdeef6a7935af7328b7aacede7807a11887d79b67c449b66bbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=4b2bc31e0cd62c8817c7396bd868ad28d724f0c4848d091968543aa56ec0c78f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=3e144ade780cc2086e82850076ae8bbc1945466645ddbe5841cab4011d41912a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TBDSPTC%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T121603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQC93P9tyfr9RRde3plHouQ%2FV1Tju7rMKnTuxMfp9xwmLgIgCzBxUeR0aQGi7B4aF3hKKl6XFoQZaTwJA%2BzDAKsGZhkq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDFRfr%2B9KIWgkvfwHPSrcA%2FZgJXHHZ8Ajms%2FsANaf1dNrMa3lwQnxnaOZpncjaFUDwXgHOomBgQ%2FonVR%2BDZ2IhGzF%2FHRTVQSo7x7fM%2F0MGecftFP2HAwxLQNw4Mt5J3S6zAxdYK4%2FE6Ora2%2BpvufQGVHsY%2BSnB%2FFG1R%2B6Fu2yGK3OMBlowEtg%2B5D1YQFmzroPxw5O6shN6%2Btq85L8wFgZQdFtg%2BlVleuxjdOTlMjKsLj8JQv4DJe3Xhw%2FH5ERPIwLvIdb3JLMUYXC1C0cK4xhkHllcUcKxgOX0gxnjr3yz8tYK1ue6zpNPJAKOnZEvGKFg%2FeWwe5eJ3uKWPROUb1R0mZxtg8xTI15oqenyBG%2BCA7fs%2FoYVFZs4fgeODgAhWaYH5FRf%2BRFfJjU7SZS8vukg8r%2F7bC2R8shVvSHOp4dJvlKkiLc11qxsK1Cul%2FC63%2BQWfMfit80Xvbp7AH8%2FrLTGNXGS3seqkyNTKwx8oUxBQLf48sGxrsd6QFqYfdaYbVAUUs5rgR7w4%2F5XMqnSA2TwrvV%2Bn3LhEm%2FPUJU5JpXglnREbSmNp8D8y815FExDDQOEOnHW8RjYik%2BKbT222zhXNGnE30rvk7oR8YreVy8R7WQDiGFlP5oSFps3LfipBa0zzuLneIUlcjexWVHMKb%2B%2BcIGOqUBLX2zmYxtrcvggcF6sZA7zav6C6fA1awZLoLDmXmTCSzlWyR3kfuSMmbKJ01rBMDXRfb1b7W3k7B7%2Bg3aGVevm5xKom1DRxyhWWfVB2YGRUB2L7S1W67Zm8a4BgfThBtfuU%2BCtVOscvFLU2hRH5%2By1x4sR4yl79cRxSTIADY8LZWdZ2P2wbZm8EzgcUHcBLjGnsipxbhihZLs29VSEwCA6%2BwGFiI2&X-Amz-Signature=cd85af8cf3bef3c109363c8d98c07d46baaacd743a6c38c253796441229b4c1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
