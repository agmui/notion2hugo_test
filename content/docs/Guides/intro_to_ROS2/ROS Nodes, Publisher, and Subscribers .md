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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=f68249502bd32163f2bae8c4d4e96be16040e4d561a4b7b27523c931fba2da2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=e9f092a0a59fe66c9b2b740ddb442e34a5caee082c304ffe19e20d2340113a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=856977180a41cf505e67333ca559faa5b23e503ee455a0757251c3f2247123b4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=182eb214323b0dd85bd1d39d74e7f0695913fe44374df0ba2d58138886da49e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=a193398b9010f74ad2ad4c32d154bc3b1a973798fcdcb210c89fe454209a80ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=c899a6c27c1309128669269ebe6792870faab650a5d1aca42ef8cf87681ceff6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=d519a2e3da83e61e62acbc94ece9076e6290a2df9b9e75f4cbb5a39f4d8933d8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRO2WZBS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T070243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHkS4asR71a6bYydiA5Gm7B1qJPk7wIn68KzNugZCMxIAiEAz3tFHIrbjl6un9RmeN0Mf1FB0Thh2JpldovKYepAngkqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfT22nrbZdNJ0l29CrcAy7p%2Bwf5IuSkf5sGslFbxDxpWozgSAJ4oUuxBgWQtDRS61M0rbjE9Mg1PCKLCZIwy3htjq9oT4DfRBCGOKgOa2KrjPAAIHdf0DxJcf6TusB9gFIcCOaqjWwkPBYv8ReQh%2BCLi8SoMQ02ZVukCd60Eq6q6K0B4A5nQhpScZorNYS%2BQzCMIXWLq8fk6GTKgma3I5kiM9V0chrUhvjCA8qUXs%2FTCsef1NdbeRBP%2FjeInLFRvf7fiLIh5GznrgfWvcU7YxXrg04nMWpk8nB8%2Bv88lDA995JmxzIlFh72ptXy7MaO%2FmVk%2FYBQxyS245siekTVsuDBj4%2FDEr30F%2Bi8tNe3QnGfWgSyqPFgq0JdNvDPLmpUyeU2grvOivIRFBebz5K%2BJI%2BNLkNLji%2FtJKn8ZT5%2FiYbMrSxczQarLwelrA%2FNDyXPgnnpwgvIQXbyPpci%2FqvtUp4gp6ABEJ%2FjYGoitZg7eOtOnTaLt1os%2FsoWudCvCPZewt%2Bi2hJJkyu1vGO3kksFuX1XfdxG2VIQyg7mfA1a4xpGGTSu4RACMxHgJkgP%2FeJIMauoniKd4kLeswFIhAJ7zf4%2BBba5fNZ680GruPkrBEKKIhvrbG8CSJ%2FB1gUdUFPZOd7GQ%2BFC8pWXqzhuMK779rwGOqUByaGjCTBrbWwxZXNQL5f9C9EktLv2PJu3Q39Ij4a5WNRboATm0jhpHOevvkUyPRuD5tZXZv2phhDutTlZBBHd0GMwwJbJsXGRF%2FedOCFIudRYoBAX9pjHdopVqDiArJJD2ZgcMfze2pK1KVoRzFv0GIlojTKd5s9Mv6FF4Ys1Vazaax2NrD1hEdxbBNwRwtFIEMbYp1uszmUilbslTmskRoJ0Z2ED&X-Amz-Signature=708ee03cec291ba4aa7d552ff076652976261995a86acb7a55bc2ae7e1dc44e8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
