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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=c848f2f104823e3ed89439408743db2dbe5a67295256f60bfde0f2a6b93771a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=7d4ae8d7068373f4a80a3a52f54317f198763979132b51818d5aced365cb572b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=9a31e4b8eb6177a660953d0c27c12ce5543f433cfc3fec0bacd4194be4f9904b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=eea17158532d6ff47d82b124dc72573a1d2f5c689665f8ec090731f8ec7f068d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=1b131b0a2b72d58d6a93c1b09d2282679c6daad9abc4f21f0547f8319dc8ca49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=7c02485a89a6d09efeecc29501cbfe78d6aa0109298fa71f33063c3124080ed4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=f4908d8190d4e684de79692f531c98948d120d561b938f04640c24f4f1ed7060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU5VTWGG%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8ygOu4WixctDq0aGRMuw37%2FoIiK4PZ0N2PxN1o5SQwAiEA82odQBs4b0Y3NQHFO0PWpzfc3TtD2QiFDVgpzQGPAcwqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbXAsaEmZNHQqqX9SrcA%2FqGtQr8ZbgRmMEvk3duZJmWRjHevZ%2FXlHPeL47BO8pxPeVu26HfqnWKEuqcWuMG4gxkWsQt%2BVwD6Kam2u6woBNEQv6dnvfVeHXd8nySlG9Ya4HEuSTeGCm8UNe8HlH5BNMy5%2FKB4yWdTkDvodLKKaxsMfKVCmy7n60G05NeUxHKS5FnWqc3nRGsR9rflfRIicdYfGp1Cj1DCk5X826gFAdHKNgQukZysyC2WQSTHfcDuYqHHTYii1q4X8m9spm%2BAdVIjvonUxF8or0fLK8es2xaw8TryNsOSiRrSDV9p3VN61Cy4%2FUdqMYNRjQhVyx4yjfqNNuRqZJlY4VnI5OkmoFebyX6N%2FXFQcnI7tKKFF4xbKqhkhoDaocbXvOmbGlVCxnMkB7kOlSgbu7zCYcQZlSSCFDvILkCHbPnMogNADEHSBEOEEg9PVlsT82o0KQRiG4ibAEdlHMP9FZsI6R%2Fw%2BdstpEwgY6aRzEgMLa9IGrlbCUNy7hs9VBVu26MjKIqGG9otvbgu94C92t0aAOCbcrRb3ovOEafiBEB8qLavI5v0jKbAW98Qi7KCia2d7yfypGtnKtlV47N0gf8ONmVZ9zBttYw7%2Fm8bwknelnL10hon6%2Fb%2B5JlwvOi2AilMM%2BAhMMGOqUBVqPftAXLBbnXfbICXqMX5Csp8f27AQUj0At8tj38rhlGAVmEBF2KPef0Humv80hjjTJqhQ6HhC9tBF305KFD6qmmVIournMmFweX%2FDfG%2F84MFAuSz5FWs%2F3FMO4GF5lGyFu%2F24a%2Bu96j4Llqb2oUaq2bhR38DiLDZOU4RxJm63KDAJKK4KMW%2B193RaUCf8eAePO4WEt1PFAQvkAfC4n%2FlCHvoJ75&X-Amz-Signature=047a0606d10e41b13a8c83af54d7e369f1b50eb7af9e9eb2c06411400f6b5621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
