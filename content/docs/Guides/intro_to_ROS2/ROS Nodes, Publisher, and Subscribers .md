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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=f77393402b026f1d8b412ba92127916b4b47b3067e121a5c3dca84067d831505&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=a4f971a858c4b760428139594a4a33e9505ae1eef5c0991481baaf1b4358d146&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=dd8f7f335ca62d6244f4918be8f6ec98337dd2f92a28d19c84921ba5da0f2a82&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=a49616f6d3f051d2dadbee8871d287888ee608a671f76601f0907f748c79b617&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=408986baf124b59a8f35a07514ff31927cc9c3d0a0834ff2f779b8ae65755225&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=ab67821df5595bf62f2bcb35d5571d1f1807ce396fbba444b54db4ef1e6df126&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=37e21018e0b5fc4dbe76d1c19a18c6ff40c6666cf298758bb0b6ef8ccaca7797&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667VQMPJS%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHJfScv%2F0oJtvai%2FmsBMXJFg%2BQNtWtJXfPsJqxaXNLxSAiEAlnZhBF2T5FxfvVit%2BemhMqzVKviTp4BcgJ0CxVxZPy8q%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDNlqx0XzCGhTLyWrgSrcA1fqEfJA78C8mTiAWY5dU023K9hxos%2BXep3%2FMW%2B0pglL%2BjFS1sNzcFbAhFf0GSp6G015K%2BqyJHLJa41x%2Bt%2Fnf%2B51%2FPyspmfwAfo3Y7UP2tFYQpddOnaIfwk5xwkJCSYYfewo50qAQ2UV1hqeyRkZzSmzwAK7SFCphKse%2BhmbFPDHrxyl7luX3%2B5rd5oPFUvXzSZJkUJzWhqgw3rHQV7IzSRgLg0XI5cv5090VAunfHMKwtN2x0MVtALj59LF7X9e4k%2BcSkiqKNCfQPQ036CIfR8Z3SE9mylXJwfgvpdYaCsC6VQrAkJ%2BdCJAnxtSbZwHMKHsXJAdTDfVKhKn%2BawpDZUDbjdumLaX5uUevt1cOAzNLzZcMkEgJ3g%2F1ExaLYQqGUQdrey9N8YCa4xbMZNVQGzu3pNK0jNvjQ%2BjQQyqrR5u9UG4RNhaSMa24LBV3qBnUPjz24OUxy7kRWJl95LweLbotXS7ugAFVjo%2Fado%2B9JP%2F1XyNNEbx8aykB%2FUtwWC81z%2BO%2BjyRpWXMAOtRDqf0z6ltkNvWUigVsR%2FTpWU0iOkaFoQ9Gy8IBhL6KHmawlP6%2B8BlD8Jf9QPv0YpCvLWKM7tKZnx1KWp%2BuQb3oiuujzj%2FYShmkiwCcTJGKUZSMJT0hsAGOqUB5UQ3k8t8STGUN1PlkSiKYjjF254QUNkJtBRfljVkgvFt4l8n26RFr3J%2F0FytIdUM11T6nAyMgnu27BlfLuaHqa%2Fm%2Boehwmq534%2FVLo0idYJPVYdl6aGFZ%2B49nUx%2BVfRea4KxGwlJpNN2LhLMqjDNimPEx79pkq7k6pcqjIw4KBPAObuFixNZA2lhWENvSRah604TxV67Y9YHdcQTX81sa8Qro6fn&X-Amz-Signature=7da7d917bd69054e686f369343ab84a601f356792820269072eb0772b6f2837f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
