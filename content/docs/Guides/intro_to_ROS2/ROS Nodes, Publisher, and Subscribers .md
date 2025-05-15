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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=c0e40d1600a7687f9ac977a836d600906c44f36b83def15b20a1063eb2d35323&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=f90a27fd89105459d54b445bccc51488c222a618d900906e0d3db4ff352387b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=c2850fd8805ca05bde58836ff7b283e9e483022b6f42594708048ed55f84f691&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=32a252f32b5c2de0109c1bc7dc2bc373bfc17e98a3a8b6a98d43353723d7db05&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=c6f590642c4f75a13cd43056ef79852ba9e9cfd061973b2ed61e269c414c32be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=5df0bfde2c11524b25ee52fe20dee844e01ffd08aad18014495f6c83b3e10b2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=d077f83d4688a9b8478a893bd7c04bfd140430c42fea892dbb3c872ac9562b1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VPBEEKEN%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T210805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDXKVznWH6qDlOBEKa4f%2BfYr3zhY5CCeqrlOh7lMnWS5wIgP6%2FRzadtdQjR8go%2BkuHxPyvYlHDJ3clDTEmpw%2Bf7yu4q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDPA3T7VXulIxqanLfircA%2BqS3t%2F5Iqv%2FcvlTr7kN%2FrueaT2X9KE5aCl%2BssLqOpwQel%2FjHhFoP1e4PoiYCfPMc2tYzMpkyjdNYi0PdBIwUXaGDZ3pVxtC3iyHuqL8VstIIkM6S3k5bGQUeWqOxpUYCIT6EP6xKiH%2FTog4dvR9N%2BmgDiijDmInuJQ2yLqZJTX1sT1NyxWrXfsOJJt6G4NtIC%2B8HJuHKafLDM%2B1JNVGndv0P4rN7cFTt4BOZBx6UP5xdWBn1JvBadmhtdOZQIBgHB6rTKpFPenMV15YjYAeFksrDBDwrWQzj2K5Z1baIGGv0sjrgupml8ZlLksJUKCAJmpsiJg5TTfKxMgF5INBaj%2FpPUYMAcGMe1%2FvcUlCzBI8K9Rsq2yodC3Leg7%2FkcTiiNPdsW%2BqDhB6fZs5OjXTNgwBhJMvzCHCSbTYVEg%2B%2BccZMhBT8scHZQDcNC5bCalay001TUXeGN53FUrFrjjGS3AHi14sJOubf4pGJxkImYc0sJbxdTtzLWs4xW%2FgvWxGg2KFxJr%2BD6ofD3ttBYs%2F%2F7dgJ7CAy2X3GHZ6Rjy30TxLy1bq%2Fmo5gkM1YbwPACvSMM1YZJOm4jD3k%2BEcoR25Kc4xT1aaza0AJvPcKj2WSrgZVkJCZiFEX8GTreFXMLX7mMEGOqUBNMgXu%2FubEJ1fg7TCs7KtBoTuxOpcLEiUCunJ6VreksQmXdod8GJfvc2zl9EgyHaICmypf8NZKqZ7%2FRX7ed8XxMCGaQRQkVrdCpKio3YEMiBfkC2t%2Bap3Zxwp%2F48wN6Y1Qlu%2BhhfebJotq%2BxD%2FyYLCizpTNM6JeY16rI9UCjzAFmTYdZT0Q05Jo51cYdAvdZ%2BxxyGCQimBLlLq5zHuuu9AyTFJGXJ&X-Amz-Signature=30bc61e34d3802a916c71847d8849276fb640cbd60c3dbf3f6d8e8c7504daac2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
