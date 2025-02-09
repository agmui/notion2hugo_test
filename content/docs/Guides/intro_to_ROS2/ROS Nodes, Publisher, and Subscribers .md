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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=ae51d68bce9436d027746dcf1d4f640c88b6c275e0c659821e910a6241d7ca51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=dc8cceb39213ef61d2fe64de90a5c13ed58b1df6977c6251d5aedc80a148b39e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=ef133f536545786fbd4ccc200eb244a196d0aba0a11ef161100a46210f369e74&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=e5cbc017265295d3454073d8c659b8368f5bb4c97d98e0b845a76ca3b9da467c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=27a82a8dfae7e49c63eba71c4852b589828b2462759f88c8ea7f53d3202f9004&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=8ec3f5c0d7c8763e33580d3ed3b7622e0e620c5aa28964728c9848a48c4366a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=0f7976361c16b48d8ab842de73e80063219a77b1ea892c3172186c7399a80630&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2P2VGFL%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6ioL2D5s1s5F3ItuLon8glN6is8VMl7GVm5RE2q37IgIhAOHMmS5ZF8o%2FlAr70s7ncgAdBSbx9CWB7nfNvn6GW8ckKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2FnObl9ptNONH3Xh4q3ANn70nQkTI3F6U68H00HyRlPaF9e2%2F9br05jDnmy1Kvz1pyVpyqBrDzY9YuXI4gU6OtTsj8Lktu8cThi8rzyL%2F%2F%2BaiNQ9Y1L5JdBsieQGYXwumyoeY5W0ybyxKePBfMJAE7trp7uLqg5ySsZy8IGw1gdduhvs2CM9uiIbo1Zf8p7O258ayGW5UPQN1fqx0rVB16zulx73khDGKKPT%2BktSO1Cez%2Fi0tjtVWsBXnQ9bPu9bwn%2B8hRzgDjVwF0hEOyEARZCAbfiYDkVaPYQJvQO64DaMilD%2Fm8bmYERTU9zWsscOudXmJ5wsNWvlyEXeuBgwb4Ue70erY5uGWXCPUgVpD6JxjUQmBmDQ4UWP8MniMJjvacIOkPCZfyqJeliwmseOwHcQoQNkSH4x46tmweIKsGwZzZuhYejQmBAVIYNWvQWitPteCBfVKPNgj9X4AsTs%2Fx8ORijDnEbr9F7%2FGOQuFp7FEOTxf80GCjbxA3EwTs%2B4rawJbzFmhH7vC7vSNxRBDpMiddFaRTn%2BdR8aGU3bEFJNJjgGm4nQn1cyArY7jaxhQbFtJrrPznwg7glQDTDQj3GKI2krHnv8Ai0FHIbzdo9Z8BgzVmRtDU3%2F7j8%2FTv%2BowSmmSvURAnfcREyDD%2BhqO9BjqkAX96LE0tBg9lqWnBThiwkHxATydr0Oaa6SuohcZZ5BE4pcuRuZDdETMQ52M7SYg0ppRNYyVWnj04iDOZPTBjG0vpz2%2BD57kfqoB0CRK8WdXMy9WdgyECWjJ373g%2FOjnXQ4zmre6rHvSX%2FbBfTHEEXURMcsGqI1mF6RKiNhf%2BS80r3xBHp08goJb%2FhcS5uz2fJFB8VP4ZP%2BWhleSNWnycjOsnkw5b&X-Amz-Signature=a03aa5b04493e30a1393ebd727100bb101f7511735873aeaa4852d311666020e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
