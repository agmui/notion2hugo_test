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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=25d0c6d131bb93ef531c3a634f6f133acd594ca475ab2203ca340a00d801feb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=2229893b4cf1f8ccb251c1946395e747f5b1d550eea33669260b290d8d848736&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=0db3f31af058f9d8606805ea946bb53e0274d733a3b195299350a4d4ba9a346b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=354880b1b54749fa95e70b6baf0f8b4a1bfc9df2ea5b565cfba6b7583bc699ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=021082fe9ae3052fbfbbb04a5f39edf0739b35913fb9a681ebc978632f4d46b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=ce6e13a500adc3bf74621c93ef0b83d19dd883e6e4494cda922f09e898ba60e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=1b39bff72508939dbed326a34bbff646c0eb9fc4e56ee6aa47cff40b325b1925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BOEFXYH%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T022800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDXDsBjjmwE2H7%2BqecfMnHxUHw4NiFysB83TXzVRVlJ3wIga7ExfjELEXh%2Fkv9J6NlegU8aLiu0y4rSmvheuzcpxD4qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7Kj%2Bg7780dFzSwUSrcA6PHBEsqntiQjc5BGgJnefaxbc%2BhOBaCBp4ZzZjvFrORISCQ%2FH8XV5jTu2VsIHmdlJCualFvzfG72bntuHYphWtea4GkOx5QBtfp%2Bfxg5jwf94hSrrgtwXyCgRDoXKA%2Fbc537VQowzI7L8d24L1NHarGLLr1xNltgYGJuQ4r3wvgLLWQYSul6295s0XIc88vmmx9JN%2ByynKANDRnjT2AqBVtHbaNmVkIbI4am9fMu5hGsJzbf2mlxoqFS2Lgda%2BCFB2%2FvZE5NFMI9urPtGpkKDZZTwxHXUGEB%2Fga2jPl%2FdR3obLY9yy4X79J9p4t8LZvXCXbPb5AdStr91R%2BLrw2IbLmfUQvTklnINzbW4uI6XdL%2F9gxSkZaSljXqsPlOFRmSTv9a6nKHF1ho8DCLUcJN%2BmJFLYgWIM42mz2nc8khjVhAn8Agn1VXoqIRyfINHOHbe%2Bfx15iPY3Oj7Ua3irLS2k67rc3W3fpW2yGk8smIgviys%2B6HeTVhfumxAmUiNmMZfn33XvHkOCBd%2BKxAZk0K8WPrc09F07H8tWj9BeTuN0M9CqL8s4KLXVTv6P9bDO2tAVMdSoEophqzvw1Nty8hNFka55Xu%2BWVnNJSFhdSxuneI4T%2F78G7grw0maovMPrGisEGOqUBE4SqXlWj%2FiASvEGoGJSy%2FIIH6YleK%2FtMmloSOrwfYKTADH02P6aDu4SCj2QpK9uwWCeSXF1BcCbr02DmXbCC5nXJc8%2B57dnPfpmxLM6DhVBLTTaCNQeiKfxZFBrCzLvQTvLG%2FGWDUAgLN%2BFfoPIc2dthVX0uj9VKd%2Blqx5YFh8zJIa8VoC0lchpORT9mK5xVhAGEaQ4MtWfQg3F4FVlT02Oc5wb6&X-Amz-Signature=2409026893adf76d9878f4224ebe4ccb765339c3b69563f94c403e91320da013&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
