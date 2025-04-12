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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=e8eedb63784a82d31328107a1659cad961f39e3642b14aa80fc7a8e76d61f325&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=16a402b9c527037ca0e4a232f53ac9e01e53862d00e76b4b6022f92f094a368e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=1968ae7ddd521e97b9eb869d3352294a2c3ae5981b842f7a8fada688f38529cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=e3ab358c1b8796b9c92a5940200e2bb402de9063143930f4aebf83403c74290b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=16c574b579ef9d2f6ae1a005222b3a04d799124098675025ecaebc3ca03821d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=f9dca7a5f1de5dacb0af77b77225c6c98fdb7d0142b8969d700fdf723991a42b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=2099336c73f2f690dc110d7af2cd8172efea271122adfdf8f5895dcec2736b08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUW2JX4D%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCVkH2qkfLZlBaV7%2Bz32pB1zQ8MS2IFKkcPX%2BXcXFfMRQIhAO0W%2F73nErbAfKsmIfOzvocaUuk7a94x%2BlIHXneb6KwRKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk0NdKniXgZNA9G5Yq3AOHki4YWaNrTaZXNOHzwnzFacPcSNi5K0YCs%2FxAna6a6I7I6Mbd6Dmzaw51pgbl4s8a8oYAJmx8UhQ7Qd0Ym2e0NVdYht22nzzFj%2BSXRU5%2FLQZZFTjxfo49jSobSQpPsgtQakRnQu10qK%2BcHlUQRAo4tSNuAmMdb%2Bwj667TU8ZOvPw7BiMQL8LelEZihJ9KFldOqlQaCGG0j2cxkMcXw3jIRNUQQuUIb%2BZtO8Uq1ypc8OsILT%2BmKEoA4rxQXsu%2BSR%2BxaME98WHTRZs0ZbX0BX0yH7WDnm5lhbPxigZrtqAB6LIunfBXBRfGKMuRaZPJmOfMTK5tr%2BoiYuYuAfIovJC3nXW8seu2ETAueyG%2B4jYQtMxD6KQNcRsqg5U%2FfKAaFOkVHVMLRsnIXSBkOd%2FwI6HDQq289XawwBkQHfBNO6DTlXFdOQK7WACxkjKqvf3%2BPzOz6NmX0yWFec3tRTpjyoLLrzScRAovv4m0xZEZSH1ouZBfhIwYmpyTkMbRBXa4nYVnJHggDCDHdb9eP5jtQtSaSaYPKops%2Fv8kDzeAUyymY1aTSegTZ6PDm4UtVIrKLaD5PTflUzkdAPTFz6%2B%2BxxzIG%2F2j52BqCp413WqzPM%2FwAabcW%2FVxwzDQ%2FAhaXTCwt%2Be%2FBjqkAQ1PGGQ5mO6paFuq1Mx4akPj2IbqItSUXFpF7Lji%2FwWw0BjhKar2EpENdFMluI1ZcNXKhv%2FSGs4iv%2BaGfF8NwY69fonp53dh01AQb8ghZAGB26QOC9kPvjjK1zWWY6w205f9%2Bv8W32kMbwDmViMvfP4iE8WTaZRjbputsrVbeiXfiByunZcIpA18t%2BsAVhMEGM%2Bsm13Ylb7aovrBY4Gy0N8OS9r0&X-Amz-Signature=3aeaa33cf5b1f8a4ca87a5bffd98130e1aa82083b5347ee04dad2f9c40f23765&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
