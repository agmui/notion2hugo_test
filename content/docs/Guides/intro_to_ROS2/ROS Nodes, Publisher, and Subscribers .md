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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=309868f0f99558dcb33134599d1a89f65dde40e42e32992ae9772d455f01c366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=0f46e44d2736ebf9643fece164ecdbc7cc4bfb717400d9db663e994b35fc193c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=d29e51581ac8760ac9cf94696895687dd340519b984cc51d67142979a5fda96b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=9c6cb262ea05d3a97253fa442a1ace9a94ae9de1171448687d41e917cb416c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=05d1d9b131b8b9e041125a7ea9f841179c5bb48a60e5b066a4bd410a58e89a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=58e6a9ace0c085d32c106215da21504d7567f685699e0b620d1e5bbda3cedf97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=81a74c511224ea7b2fe913fdd61e2478ebd021346ddb0a61e044a218ceeb886a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM74O37S%2F20251124%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251124T014515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0l4%2BdRmrEar%2BDLztAAY6tJrzTq1F%2FKVTLBXoRQk%2FzWQIgeai79Yfp3zbIP2bIvGnJnWJZONhruIK4L1GkFiSKh1Iq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDI1hyk2UW7TFTnpPXyrcA18sbrcus24xku%2BC78e%2BafUVLQ5pF3agKta6R2hJtTdF%2B1fNUNCCIPnzhwdLiNcW7kBBtVrfo6lseB6hj2m1RO7uG2tRhrHRPH3Z30JZnABqm35OdzEoqqXK2GtkRINln9UBDnywuwBsm%2FpsTHKQ8CHKGxviLJzynGsg2SkMabWTh0FgZagff7VOstCN4lX%2BPukY4xnwBXACWTlpnzforqjGmsKefqqb70J6Xw0zBjbw%2Fuc%2FO7A7GvficYodvIOCyISi3xYaabd0qO0H4j2memLwmdlQDoOJu5PHNZMpzBD%2Bu7H%2FFSY1jO78%2FxDEv6KI%2F8jKB4v8GJAFbsu3cQE0qvL%2BWTfBL06DIagnF%2BC6sWVdj6QH3nBMVEPJkggVLt66odLPHKBHW07G%2FjJIwM2Lb9TZrDpGO7WA2Z1YlqWbX76efQA8JuLEb6VDiHcwe27oqLlL%2BBXlovlXUMdHFj5UGixl47fW%2FXrOA43xKIsTBOdV4LarKngZIKcm1tpeC6ePQi6Xp%2FleqKXD%2BE1YCZm75Mz7I58gzW5a96Vq6a1QAUmKjQkKYmLg%2Fs9VKJTvnv%2Ff9%2BLqeEcXEtZ3ayujHmFAxcJBD%2BCtJIfuH0hWfqq7nTcq4SGKnPKLyGoZ5PA3MKrcjskGOqUBMJvkXb3W0%2FXeEbitl%2FvF%2FyLbS%2FM9pWzMUI2f13MWSQEC1J6n0uXzNRSuE4EksjD%2BK7fPjqEo8aVj0rW%2FofWuJbNty%2FOtTG0wAMF3NSzJQYguepZzO4ODB1hcN61sIMkID1sFi0hlFd5qBFbXoRTrKP%2BDitGmSPtIFxCxhcmvplHxQWaUEF845O0GmV51PIQdnRv3COnypydLjax70mhMV6a9VwmH&X-Amz-Signature=33413e7f7de9dbb61d7df367ca62b0185e2739270355d12da424f812a417bc48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
