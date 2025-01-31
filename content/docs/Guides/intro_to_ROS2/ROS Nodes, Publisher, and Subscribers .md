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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=b4f52d63a5ab1c4ff2836e99e6eb6d978f11cc1be27f0e54c1f1da48961a3335&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=a0a4a63817cbdb8fc21ad9e6938d15536924e101f374a71555f21a9069b8ca4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=610b1db9bf7385d8cdd9dc115061b96a9714e950d77d9670657cc60980405df8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=773864df413381eb6d6ba90120ea1bfdfe5af1f3acf5ecd227afec2fb0598519&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=eedefc772d53c73e55d7d0a81566a5a268d5ddab23a63d9fab874296ce1941c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=6644cde6c6ba02497d23e23b3c4dedb2990085904fa1b87de0d892ecc1a88457&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=52acb878f0fd0b93ca50f7d853449e1b27ca61b3258cad6e1e8f1ad47cbce7b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UETBSLM4%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T081013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDUa1VuCUyakA4mHCKlJkGEs05eIEEbkUFmSCZ3a5UkAIgE237nJToo4%2Fs6D6%2BFV%2BHTRBaLJcgrAszKzsDLcsHHFkqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKlTcg75qKBhKB5TPCrcAw1RwkFFNmZCMEeBlKJg0COMZHAeTHbZP0qUCStcgaZqY1ao6DUBm5daPUCOK%2ByHgZyocIm%2FvJaWMNqd%2BT7jVdLjDmyoTdMUz90qR6ZA3vy06pf4XY4vb2bPkKym0LFt%2FAnU2abQ2au%2FwpHtI2dkU8efk7B%2Fahrk%2Bkuk0GBP4W3NERPsT%2FA%2FkEkkl4xI36uL7O5douNQ18l6NAavZ%2FhFYYY%2B07p4Ji3EGbKz1KGLZE92SfiBlyVWIg1mnGnsUKRG91%2Bs%2FSX7MIRcYvl2RwJS6nEJIWpbmKbdmz3DmQjfBthOdndudWgVs2AMO0MESN9yBI3m6b8w1wvgUhxIOUClTZfhNVx2Vf%2FdjVkRqT1TCatU%2BdT9hGACn5sncvY4DEYbiOsiSpmqqEeTkgPnd1SJSJI67W%2F9mgFpYTnVC0q4JGt1YHZYhDmh0hlT7RO1M7nWnuuTvKVFof4fVHFwK54ln85z808lOVxmk2RTeSLdhcBLQ0YK8nbPFbsckc7HP5D8YMi2gmPW3ra2sUR93d8VVkrOBAJGatkJn%2BAIc8J6KML8lY8XNJPT2UJY7iJW4dJylLKcDPbJ3iacWB8a8upc97bjvMYxbw828oataSd%2B5TEZznQRSpxiN7NxUohCMJuA8rwGOqUBhNUv9jA3qgSZUwFSaRd7w5lat4iYbUvU7GKij2AU5NU%2FBNMM2SElc4MV2kxZMzzVFLFGwUx0zlLSbxrzmm145Pf5cRlsnR5KRSOuUwCvGTLX566aCAtfh3EoTxJUn4w0tMuzx6vRo3JkKFnLvBwCJq6PXGkjFTEmMMya64hy8f98lNE021%2FPGowpuS%2FORQHhCU9zg5jrX7DR97%2Bq5FJHhvdYFSMw&X-Amz-Signature=571a89f223866f99c448d9aeea2949b0b5e21b4dd687195c157c138aa43bf015&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
