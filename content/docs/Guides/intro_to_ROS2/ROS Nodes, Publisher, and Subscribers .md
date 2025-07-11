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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=62f3792e5f0cd143ddda676294d0e7480b8f71fa6f7ed811458fc520b1ef7028&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=c7d0c217261eebf06eb93c2c4ff00bd94bfc7e3e5a98120e0399e280b001676a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=52f935fd4702e755f8aec9a64c568cce3b3efffe10e5fea2d2427e4dbe785d0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=31890763db07df419363ca5dd43ff7f40134fba12dcfe14d987e4eb2e6178943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=05ae39bcb6ebc61d11c06e95ff6222d933761c3707bf9021076e9a998730a691&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=63d910400444592890f294193ab5a15523ab7ce4f7dc6eeaf1a31c31c9c6999f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=71161bbd2739b450b8d375dd170d35ee029e37bb31b37a7c4cf8330aa9144211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XH7AYOJ%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T101002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGS9lJ4uPXWOmlLzc%2FVF2XfquDCG2qjifxiHs%2FtLxHwmAiEAmdvmoaPtX6ixiEYz2SD7NAGQVkZww%2BVyJwNsGjhZjaIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeSJ7A%2B1z4y5FpLDircAxq%2B2zajBlQPaXApmYhmndNTmeoo7ESdnW9nSmbQT3oRRLfCV9D24OwB5hgHFmU2NPc6UPD0GA4K%2Bxu0HsFk%2Fw2X1rAHpMte9syz90BvvQ9LJJ4ZefpARWQgLiuvYddiYmjjI3odwVXR0O7mq9qBSB2VCU3gkfhPQfBxYaXYA9Qgwe1DDy9vNPF6%2BnW0zdKw231iabFGbN66ixx%2FDW7IQBOyDLdAXWapTHDBaJ4GQFsrUCwfeUjCOGe067O%2BDo6KxOzJu8yhQdLj6tfOwmzzHaXb94Qibt8jcHMCRrJyTPK0kltnf09tl%2Bnwaj3Vh9guJ8eC8l4kGwcBnMHQOTKxoqBMpI66neSncQmquW2JWMtnn5gsnMaJd8pA0E6YVanMre4Gt7K5nFGXaN0lDjMO0jiR06UWDZvfXrENBAzRRuRIDPP7q%2FJhrrK9s2imT52SuPiGYRTEF5FAs4rYsIXayu%2Fu4WnNtDR%2BDv6vq4nL%2F6RbJmX8pCfb8gOpJzK04iYXyAhZ5rVNhuuqq2B2w1qnt2vYdiL3S6DMOjBy3NNDrH0%2BFA09101IW3tOmDktutaKb%2BTRt1FnH61QgOTmyUVMgj6nMScLyzL584lqL5W36PeVMJFkha2qw42wOir8MK%2Bow8MGOqUBeCbCsoF9Uz30tZfK3aweveY%2BGJaTwehdvhihfSd8cWqinyRu8kFPI6rKM15qhrhKVXUe6%2BNOFpryujkCs2qZJ6EbHIl9Y0ZtKI0LlRwKW8%2FfF7HjQSA0fQ65Uh8h1ygXMbjoYI5Q%2B7rYkdMqPL8E7i74kUBOgP4Y%2B869mKPRrWywqU9oMz88R5ENVa77bQ8VPSZX%2Bp9r6lG0oiB5ccLs5ssWKtFt&X-Amz-Signature=de28adea6fc1d855449bfb64a7114d17d044bb518ad68f14f10c28ef315df68d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
