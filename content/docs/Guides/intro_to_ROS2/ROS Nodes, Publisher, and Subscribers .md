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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=f9740d7adf171f0bff4b9771128ac0e457d5cfd4a7d5d27b39ca03ab674b6a95&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=072dc9b325e7fb21386ce54c190b5b432b56eb851dfd01024bcdf11876df1262&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=adc335015be435ef9302d8cb4b071ee001aea0b9f219bc833b5ca9df9e32bd20&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=0802e17f299ce35967920336d518d45473394476e17d7cb07366fb746e5094bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=f1b72ef2e034ed50352c5a7da4f3d780e600bcff3d6d39889bfaf7a34c17d0d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=d5a708f4b6add51a04a7d83b45689472f0af96deb20c0d99f1afbb5888389a1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=beabcf703aebe58e37ce5167d81728a960297773bfcc1b1f2888ec068b003249&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEUUYPX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T160733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDeZ8YZE6JbQpWFn%2FGQ3ugNyK9ZQF5r4NlANtzcZXwexgIgNhxG6HB7NYpM%2BQMcGq2FpiqK0gx%2FOZ40E47m4OUJ35Eq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFUJaLfzPV1H%2BOXH6ircA7riwpRusJU3Cg8jIE3M%2FMR4NqGPv75W8xwfj0OGjqdfF6%2BUuNoqIevvqfpRZ1rIfwW1iFNXupm%2BCYjeZIKeU0x9uNYLxnSg7%2BsLE9LOzH8HKc5sv5scEgT6jtcC9Lx%2BrgMXjUO%2FI2%2Bp94zBDFX9JRrtQrpQN8aG5bW%2FKvGrzHKALUlLPeK8un8oRAKeJeOoQYk6FsCHHBRaQAIPfwHtR8XmRAS4BQK7tq2HheOahUQS%2Bga350OLSou3qbMsEZwtVaR1E7C5SY0RzGSyVnfXfYlT3rxl7sbYgDEfD%2B3KuggL4X8g856l3umutfZKW0CA%2BokXhyrY4ebdAsZiuZt8d1nv8MUlh4p3CFOh7Q3Znb%2BTpGQhCY6RgI78p1v6o%2FMyZgc7ZuOA3segLMBuBps65KkKM8D3ImRiafMJQzEwZA6fLAu3OSJwLZ9vioO2Y2B4DAR3AcNGTtjUvJOdqQTb9E27UHlpp6rcUv11jpK21lXOTJb%2BVU9PXmFyNn6JSr8bzUEx8MNsP6P0%2B7rmyjiufSWU1G2MJv%2F2tBrQPzXypJf7i8YbCDOogGQVzPTxH7fFCITZhj3xMrRoauuj4KsYuWzerWRUpDX6jeRV7edLiaS3ghufMxIsNyzHp%2BLUMLGix70GOqUBs0W0r89D5GDl9o4qVU2E1yYRXgwtXy2fP3jnzQ2MPv4xpu3DLpAv1jSYYfRqHNFIalvZhpgkApjyqztb8PDz%2FCoKgs1549QDTFmVGS5TGECAGwg2%2F6L5tfGmRDAKQ2Y%2BulSOtoUocXH0RtzCZVERfG71gvmVXwcHn7jfPLlLXxVcrPeiJgZAY%2BkjsSXvXNZMiSRHqsDT3J6Fk8Ewn2KjV0C%2FtdjY&X-Amz-Signature=0a54e76473e97ea43c71872370a39438bd6753d31472b05ba62b01a8b6b2173d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
