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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=566730cd83f5cb497649440805e42bdcf40da315f48c8cd32330be2a9e0a782b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=8de483364bd0db5640df6378cba984914890f0332da0fc82277ef10ee10338b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=0259396d94a1003d6bc8fdae84b85c82b2678c4cd180c199d2e8e06d46a46a73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=00d4a8491f573ee096a401dc9394509865827b318a86c7a8349a8ae4be56cf64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=a42f4e75bc647eba00555297a3a6d4ae15157c469430210e3298b837f932f9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=6336c04f31d7d634a22bd07c1fef7c6f9b3e5ef19a419450bf9d5a2287e8f293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=9f2e89dc3c4209c9cdf2a297d6811856afb2736d625d30b02c58568ea6fd46ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP373D4Y%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T081344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDm90yXvvFZNlPCUgduDoy7DIdYzgEQYH4B3dD%2F%2FzF1MwIgRQTBqeVJ6YY1X9%2Ftc0%2Fp5nX%2FOyN4PFhG8y74Q503Ud4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDHJCzD2c7NEE9zPbjyrcA%2BZsbRSegH30tAJc6XUgM5XMD%2FuHQmOdGvA2UhuB8C0%2F1ytqzVaENPVRXTjbnJ8hC1hRt%2F6PGWFpd%2FzARPjjFgKTrxymkEGp8hCsf1TPZXfmBu%2FIBikqAW1HD7%2B6aplkLm%2FgaRtZzm%2Bxt7oyjjVT4%2FiGv0tm1O3crfrbUzT7whXOQ1%2B3Y3zUkMBg4aGtzkpBUNxm9kWSCuUfL4sqPQNqSE2oKSNdQoBlHG8lBK29bp4%2FBaUD%2F43aW4oapzSBVJc5csAnEEqNM1MDhxmMZRAuAfedFIRXILXm8LPrDYVgEOh%2F0HoZqM2uDLpCgOVlQC1xDjQUy3m28mHL%2FcVcAJkcjl1rKWNhzzO2GUc7mRAo4zXN%2FMuT7rXmnSBhuwLkUqgkyCOOelItZkCUDptU%2BkxVoyIika88kH38aJ36m%2BC5eea7X5IQt2TsQMDDmlgUlfqs1A69x3heKrBkEa3qvw%2FvbvbEI6rPyFEMRz%2Fdqx1qHtw0L%2B3Dbw3qwNzfXuNKXlNCwtMDJJ0TQe4UbLB09fr8RRo7vwtZNc6jeWGv9WVZzsyGxOmFbNA7O%2B8GdrMcQTuQhs7%2B0VZAzb6zk%2FdyzbC9t3FaS8Z3i%2Fgf99phHqfyhYyUIDu0k70hZgDGHvjZMKWB2MMGOqUBvkhvkYIuC%2BzrGz1X5BBpv38YMfLjaYQehoq5nRVd3xIWpZOYmpjszSPgB9aeKd6BYbW%2FLfWanU6HSMSa%2FwP4vrw0gtLi5fnB5Nw8CkbV2hcoYkkPB4rz8PZiSTYX8ErqHTVign7KL3AFieWA5HDDjvYP8Hg5rrgG4Viuww%2FQg1JA77vVCp%2FaFmfbZ%2BxLhRTU57VPdS4ET1Yb1H5qSdtU6GGj5sQy&X-Amz-Signature=9b719f7e44a73b7ef1552b9abd25a23d4136cfd6bfb0f132f88297c4e471d92b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
