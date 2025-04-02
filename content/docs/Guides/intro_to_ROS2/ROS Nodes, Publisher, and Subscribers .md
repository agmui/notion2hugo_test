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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=782d35b6eb3fbc9f7388a58e6e37d4dd56bad636a3aae79b6beaaa97f13920db&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=ae6e1b75ff66ce4b773a2de458221aa435ad34e1440ded9955382a516f51209a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=4b03030ad0968b2dc7017cbb9acbba04c1e93435fc156b85884024e801c29f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=69317bf04ed4ca247ecbf3186ddd6fd21b41499634ad0cdf0bc9e058f37259dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=cd300c72525f2e83a260732871691d999db38035921f42a7b74ec2c093cbd32b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=c1adbff1c98500e2f32b19dbc5c168acd694452de519f14da832332f5e5bc5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=62243aae1d6251d8c8f3a7d325cffb74cbc4a2e6d866e8956b4c64cc26b0657f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX2FRTPX%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHZu4NRvlmFj18bTD9ib1NZy3U6DSmgdyPQPntgK2ZxbAiAbaq2u7i5U5GqBBgl42x1kJIkMeCCpnFKS4NkSOs0CkyqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8t0WU8aJFZJ4TjEeKtwD%2Bzoi%2FaVMpRJNNtRa%2BqKcQZ4AgD3p%2BpO4zMoiz%2BcyLZic47EzHfmWjGK1zez31f%2Fu%2B5extCuWK9Z9iAymg7hxRb5BpFlvO5z%2F4Ap3XJy8C3j7Y3sB3mTLs25jnoXgiinhv3PQoJAx936UdMyLNIdKQ%2B0Qfh0MWTI9rQ6iRDDzz4wli0dlhf4NnhkkM0C50NGCjQMa3moDaNfOt2N1mzmx4d4Ty5KLxMXaVi1kzUlzMnzYbAcWryZ3kIuYnELoWCBrx7jJLJaI2NOr%2BHv5hOr2AWTELFmddB7FryJSwGytXFtNlyC8paz%2F%2FQ4PN4jVTLGuhZKUqZoXuKaWs4R2wF3krZu3tfaA%2FT4JfiERj7a4MJ%2BSVZjb3PfGT0bftCCs2OnzcQf7b6Va7icvWcNsq1QrtF2z9euWiprrTfldBIXZ5jVy5SP5NVrOepjRi%2BRs5tql4LydmVFgXOalHPbNnvaBVOp92ajzsph4mxA3L8xXgSCNSxSmbaYRubRuR5kpJZ6XgaD5LQl0URLUxN5%2FiPdTybylFBGYd7S3QYR2UOF%2Bzo3TyeOWIGuhUuM%2B9yEEAs4s86qsmBVpL1vu5B4LhPTgdNy2lYqoQ6kFJYjqAyvirpOnA0cZINdEX2LLl28w3oO0vwY6pgH4siqgBrRg0edOZOMlmfnLIvGM20%2B0UPz1zt4M2MUNQX0%2FyQ2wNbN6IljqaefsA0gakUQck4WMMa3VcJpH8aKVi%2FER4G14hACIC7NKIXhAN6tKhY752%2F2TtSJmGHNR8YAhNiNgaabFmPGJEGSK5IpWyb6DawxCCxnFYMCbLsn2F%2FpJm0RQhHtpoA80VpxCWnhp8vgn7E7ooU64dt6A%2F96ZTrXxndyw&X-Amz-Signature=8bcff7efc16002540b8ca185598d1a97b83c41b2742351828ff4adcfee387a81&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
