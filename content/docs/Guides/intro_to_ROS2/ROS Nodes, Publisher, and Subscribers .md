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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=bf86be9f1e29a84e9cc2ec31f83cb6b3f8c3bd5791267b2fc9295c154f270f45&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=516eb63db5c3b96c74c2edcd479abb424da81112b2d601dddb223dd4e1102c97&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=e8e25274d09e255ddb7c7662df22891f7e3dd8e74f645191e36b7504c895f4dc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=1a84edcac26658876f412287bba00b28f643f245f1ac92c7bfbb5f9506a0992c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=b556877df6f962a73ab23b1e8bc04963f9ebf6e1fd68d43a6f29795cc9c0f5fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=d30728f97984ee40786c912bb577e49785a035fa1b0cc20486b79fe01c2b2fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=c8ae9815d240a10c583b88c149d7b1640422834cd6d8f8f1977be3268db16342&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UN3PCTO%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T100851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSAnfsnEZoujCR7QKjgnnvEYK4PxcOzpSR9Ovx%2Bly8VAiEA4BSWpsuaVPibnC1IEeDYFtdCMlUZIHDySE5Ms%2FffihQq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDCcBz%2Fk0WQh03qHxhircA0G%2BbEpuEzk7%2Fy3lDAvfE14HkY21u8qD%2FUxnKZEMQN7VnrOHUoFQ3tqcbM8UuoZnZzENIbr5XPRft3gYB4xUqo%2F5Ryhrj5jl7KlR%2BpAIDsTGlX5huiC%2Bf0FGGOPQDa5UMYZSVJWh4yMM2KZHtKydxPe%2FW1%2FuKKAKMen9zHi8Opxkr96EXZ4B0jgW2qVUhstgm50KNCPCkGu1Rw8F5f72ccePAyesXpacAHW%2F0qWWd3yBSm2bH%2FLD4xopAlYZ1jGIs4eI37JLZGpOIMrTBVJaWG6PUV3ZvDV90jQlX7mmXoprbOYWI352Qo%2BB12F0r7fCx4%2Ffz11BKXLOYbX33W52yfu%2BzOabTMZ6My0Y%2BkEwAhOBlUGrPSH06UWPaWpS8hGk4Ww9HyR86cGaLLaeZc0pHtkmj2UIBOCGJYvDztfiPIdzzD8%2BmbgQHR8OT%2B4gRxxT28yfWV37yRjdNJcGMfmdOB855LtrQ67VGzE273%2Fc%2FdWqjrNa%2BOLBy9tLhMpod3bbp1qPF6DuQ%2BSYFniL0a0cNB2E8wDJJjZTqHOR54tV4W2EGGctOZVi4YwB1GHBbb9LvgLzRL7QTQQzrPMRoWNfVMDxp7pIlLixnpBIeU%2FV%2FzS%2FPN7E596OKfC8pKstMNC9lL8GOqUBrs6V637VML5SGxfTYgk0r%2BdHDV%2FS2cZjAcyRhI8KLjZSgABeDcbeByrX8AauYFujRpcwuo1UXU2i%2FB%2B8x44fDcPY1fA7T3wDfrj%2Fouuu3zBchpND%2BhJFVKjJYJHF3h%2BiRiV%2FxErM6QYT43KHCMDxTjESI7OemXqQMYUZ9anXfLxFcHZKv%2FG5EXw%2BV758mHp%2FAXioxAVgtklr9%2BXiRiMSeBckwBXT&X-Amz-Signature=1ce05a5cb153443c80738af961420e24fa427ce900a7aefdcd1d370d81544267&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
