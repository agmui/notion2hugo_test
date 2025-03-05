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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=0cb16e42dee8c74def609d67bfefd82d5b992cde11530b00d29980912c6c6c08&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=b6e85bac67751431c0e09b05964bbb5809a889d69e5516083609950bbfae6e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=0b1cd6750fd69907f80a3df115e2cc7e4ccc6256e90a1ec46b795b61640637ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=5e18f6f99fa8b5a7ab1c346f4f1944e74c28d078a88e59cf583d71d6a3d21482&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=dd1fac9c7a0fc9f93aabc2a7ed3b8530a18abadfc740f9c67700fd5749103973&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=bb093e73484e421cc9e34bb4fdffc62bd3d043165bfcca4cdd5d12ea5877f025&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=cffbc8bfcddd8f5146fed7ad3b6689638d3c01fcf32039b9256671eb1bc0b3dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GFHCGRA%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFX6eloLBLqInac2yT8OyXtm8UzwhjnkwyUZwZmp3Z2AiBUC48Hb4uCtj5VTXYHFVvUpQ%2FrzJNNnEbKyOgKvxgYrir%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMKmSOz%2FB71LVWmv0MKtwDgpHS00RDh%2FnxBMyNS8a77EcLGk%2B3uZc1FpdrzwJxcz1G6wmpvv%2FT%2FeJVPApB4but5YPHZErNxq6JZbNExxvJWsfie%2B7D09dWhjWQEp0qEZwyHflnMHui8Msdoi9s5fwtTsVDdjBayB2G7STSxuhWxo5zIiOHwUlrlxYvbp3YXm3tT51BUgDnGOtEnSfjpXgU8R4GpLkzRyYeLW%2FHt71xI%2BMQCo2UWjag901i8OfumqA%2BvPWw%2BA3UU6b1MJyWnVEB8a82DeMnrXvqgnucnGkSTpAcvbImP%2FDNEejmXbQRiLFtj7IeH9gjX0F7%2BjBbt8gXk5%2FcE4T3aKZPUlvXHXUGgN6B9i3T6qNiYH8KEyp1UPqRQNW%2FINAiG9n%2FkION3NfBhUDGMP0AH9RWSWf%2Fd24LPwyvvVHW5gTm6rESOMfeSWoqxIiVWE8re7fDOpTvadwCXKx3N4U1ZNsSNVcvaejAtG4sNivymWQniKbvuiTCYgZVrk96H%2B34K00uj5P1kkfF8JmKKTbsNwfyaP7YWVkFQZWyvoZUZojppYXY07Kv8%2FFWorHAbxONYuxNOWGzdUVJZnrZBFjrbFfzGZpQ24O%2BwLxuiWWZEYXaN7IILG86LnwNMv%2BYyTyryWlweZ0w1vSgvgY6pgHiX0nvBCP2JKV3Bi3ckYQuY8JNdCYltvgehK8wGMJpbZfYqFn6NtQZ5PhCQypE4Drwm0%2Fzr4NodqPtiHMaR9KJ8TGLuuEqLMAf%2BBAoXXL%2FMKQBrE27Q%2FU%2BMPTMK4sf2keLBtUvqPX0LFBjiPaxFWLfxgL%2BzOWTzXZUgV12wMQdAbmZC5iVpUWO8LU2OARx%2FiU9fZpNG7TDZVJoRoUqUxTOe3Lfc%2BDI&X-Amz-Signature=ff23f7bf7782c272e326279e51a9c6fc5d2a033c5d55537a5d2fef084e211c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
