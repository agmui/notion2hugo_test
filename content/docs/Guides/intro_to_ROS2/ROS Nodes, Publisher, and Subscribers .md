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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=95f9e91fa8e0dbf7ec279265e7348a0ba1b27893b627b30373cd9cf74ceb6d4f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=42c1890d9001e3fcfadb0fd734894cece77a9460ad2f5ceb0c925ec2ca8d11f6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=efc44bf356bdf7e27b37b50594f0460fc54a0c931e9ae0c9e12f9cca9e191970&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=1612e139df1f1c3868cf4cd14cbce4ea89c2b32b77670d975bb444cf37f728e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=61f26990a1e2750c8e207abfa29c23bdca36fdc317d63142ae7c6296ce71323d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=6fab0bb0de826d2dc22af1088b8b637f06a1c5bb44e94c5cd69ee3f043d7fa9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=c061cb3835b680646661ed7f680dd292ba4ab69f53993e76a562ea7dc949aca5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVEWXBL3%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH8f20o3u7yGtCJccDehLeM7kDgKypy3vRFFVqo94qSLAiBMLZ2BBZkrbo4auqsvSM0LX0KbJ%2FfvdDpusehL0ANe4yr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIM0hdUW0G7s%2BBrvhOPKtwDOgka38g3VUgnLlAMfIvpB%2BF0mxYlJ%2BBi5d2OduaFdOPVcOaCJVa2wUtSvg%2FfoeDkW3N8m%2BMAy3KKGSYpJ%2BM0sKQs7XXjh4CALYDyVethUlO2Ew7qLBIDc2lEdC5UNR4vv7DFjjixlvewg8OsDw0%2FIO3TGf%2FFMZHk2u2HdOufUGYBJDdi%2BYCo8%2F8RMD%2Bw6rtO3amB6g%2FGXsN%2BeR63VHAnHHR0DaMantTFqZUWkcfp23ShMUZEZ3Tu%2BuJQv2YxrwxPzCFXvVoIEQc1ZAFz6tuazFOLOFqS5vNWRftp4h5MEm48JmhY1LJsX0cNLxYhnmp0V7v4hNo2VVqFVNguQPpWQ0SsK8XWDNWQ4%2FDyb5pqgQzmKNu63U8FP2QoQrICEGX3TP%2FIESp7Wq1Nen6a8QLdnXfT%2Bgco3XKwFm6J5Koq%2FT0XhcQ165mt2IoaLRcDxiYdGDx9InbRsUNOTQVaCpSQT13BTva8T%2BXmXXnUoilo1Omv1nt3XKuzz6flsj9lf7Jx4mR1GBbej88hQbxNV5INlH7uQy%2Fg6njKCyQNcwHPUlS80W2goUDPAi6kYOUu7qN26UhkcVuYQnebI5f9WqxFmvfKHxRCQ7bD9e2yAfQ8Rx72o4vZDwNu6tNR1Qow5sGowQY6pgFfTbWJXv1pNi0bD8ieuuirWHg5Ypoofgwq60zN%2FFg%2BEMuna57S990JNUIA%2FlgB8JXsAxhPRbsHhI9S0tPhWQgBPmAKyrURr9QwsXlX1RZ6hs3Jl93zrBkvErpNFyAhXXQ%2FYwv6s3dR8qDLMCSEWnab4npfnFjYEp8ahg7i2%2FZwAsj%2BcYxEWE5cb%2FVaOP3jN%2BLcmdQ0mNjuSF9GVJOgqMW7pKM9WS6d&X-Amz-Signature=ecbc213e08735765f08a8760b85fd961f1909737174291e78afccf38026b8888&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
