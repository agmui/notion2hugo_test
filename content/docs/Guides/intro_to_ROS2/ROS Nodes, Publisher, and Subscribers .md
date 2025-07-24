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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=56c510dfa4cd0ead0f3eab0af419516d1290c53a54a762d996887a0606326960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=35aefe2121509e836525486d9bfda9d844d008d975320e00574cab1c17b4f1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=72a6fff477e8132216cf7d92b98616f3dc019c952ab207bcf067c6bc52ae735e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=13666a2fd33ef7e04be69f76eb1eee21a14aae051f6f7f60c55537963be9ecc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=426eb1c23f6f330aa00c77011e8d27e76092eff59dc6e78364b53270291190e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=66c3114b6748c9e4e4df3b029deea6433e80564e91f95452db2f94c42f327c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=88c8a53d2f7650d2f929dc4461e58e4fda10365880138be93e462fa0b6e26d1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVSUIBOK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIAdFtUo%2BHwIkXa%2ByaoqsxKFdjdpf5E9FAlqYuPf1UCslAiEA0ZLhS8OQiYJCfVg%2BPqg2qeHmAdQiGS2t5W2x7zncAfAq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDF1lW2LmLQWGCYbvqCrcA9dHjv0bDs4JtQPUm%2FICcTUy5rXdJ5%2BHz6j5ZYWUDLI2Z%2B8aTi4pldpg9Eq5gOc6UEZqmkRABHAH5B8uC8Xoa1JPtX6OTdyYnGh9cuFIdE8xEwFgx%2FVJ0Il2KOUviFIDpBTscC8fTshr4S37qaS4URFwZIREisYwzgMa34i2keiAQ3NntyvLfdUekXSUpZqzV3DUqoZVmWpiILjjYS6m7GoSxiLP9mI6J1jUf5ebN6Kl6q3NJGm%2FkHX4SlXwBBJAuHuZ3KbC0ykqfD7wh4HoDXjr%2FcA6M3bbCEpL7Y8ZOsq1AgMQQYj5wjYh%2Ff7mRGQCFiIAYJbv1M7Ez%2FFv%2BY12MN5yqC76KcynDFZhWdQ%2BuQEHGUyTwnQYWMlx6QPEB9FjSZ3mAsyO%2BEtxE9bqKm9Gd%2B4oKefd%2FZCUJFklVKML0ModgkyR1RMuNFKI0ikNcysYTDr99KRONlWhwoy2oYjIQDp715K9nqGQ9AwhTu2lChyIOngGuNZapCCUjpnpBvB%2BCjB99yfBTgGPD0CKUNJMB4Nd7u4lmXDvEDG%2BbWG4h3oKC4vgaTkW49Ew8Pc%2Fs0KQ9yGCeY39gBRrqP32a7kfTRnVbz%2Brn8TcHQRq%2B26uST4Cz7I4vsOF1ANgGzZVMPq0isQGOqUBAuvkeaqOGkoyjepIZZmEpR3bRAwd2YcBgP0%2Bj%2BKrLdZJ530PChIokxNpKf9iL%2BLGLU2WxN0%2FmF5q5jSYBLlnlkroBl%2BV7dijO5R6CkrYmzDAA%2BlWqvFvv9kdF9NK%2BQ1sCBLrmMkra6v90DeNUSSRCAYL0ik%2Bh4705pVEzmUGMno5HwmfmXQxzBaEgj7vMq5cc%2FrX0IBHTdGvanQmM6%2FR6cUnwimB&X-Amz-Signature=7f4f762b94ce13a3ab6a675b30f6d9c222cbe64f980c27e77c45b5bde6cf21a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
