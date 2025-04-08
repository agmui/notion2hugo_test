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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=2fda5d65d2dde8854dabebd7235a4271c8986b5238a6efae4123878bb0610c2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=ee75d4ad2523e9fc4e0071a5593583ad60970f2d4bfd009f0ab7ca4231be50af&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=182ad35721ddc39935160985156d4598ef8d498bf801abd313b14065d9b0ab40&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=aa405b7243e937d9e7464b7f535bb236256e47772712ededd18606396f40d59b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=da96bddef86dc26e5ac7c80b1bb59910ee7f949866ef15fdf7288a64d2d0e531&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=86d860063fb26cddab048147ae31101448c190c20d4d9519a2e9bdb978021ec2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=fd0ce1c1fcb3245ca02669a7056f0dac7401d2575653ddccc466bb34ec61f4f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5JCO7Y3%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T061229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKRFM%2FetAf2KQNd%2BzLzfDmfRVud1vnTcsmPt8EkzbvWwIhALlJQiXz8C91R5Wpm46G0wrNGjtzwdykpHgOihMmw3NtKv8DCG8QABoMNjM3NDIzMTgzODA1IgyodgPSNiTEAbf3yBIq3AOtXo%2FU3wMPfP5pNhBykXaqyfM%2BON5jayG%2BHwfP1anvPgh20tkMiofFrJ6E1g3lxSEfybXDSiRdQ31FdfskoRGPz1%2B3%2BAIQbmEf1y6MgQj3eKjK9iJj%2F0EqDIwxcWj8wVFzrKNoF7u3wWHksnnjyIsQBvHW54W9AO5oednemi%2F0pC6y7v8Uw7JGVhimBZFQHQqK8ICBBWh8LcxU27D7%2BRDm1%2Bqt2vl%2B9FsDWv%2FFX1%2BttG2U3RO8BPV9dDdSbGeHA8HMuRdgMHbJvRsiGHlTMBpa7%2BSJuUs5oeipWrbrVgkCQrGmut%2BvafdaS6KD9hUxEyO4276jCnkeEVCXUOnSH9bUbrwcokp%2BtKRvO4mBb7iAYwT622lGaHJ7oKy2cgWVsVfWZdbSHv8xSArwjheyPNMV01LFse4nFH%2BuGS1WArKCL4QFMjfc39kS5LVT%2FpPIUEreBNdQpqL8Lq%2BFMJ2a%2FcTCs9FxhgbxQUgGGdNK%2FWZITHToCnWWUQjgHFiiwOYP%2BzoR3%2FZ4Zsq255Cm%2BnomUbyT%2FbdzYEiZOmP9ReP2PJiEcdot2kvRpy%2Bs7vFEFwoB3rDpqV6iXzcjwT0i2ECtElHpq3kabYa1jCYgCKWplspPUSDAUZQuq9uWrpXNkDCq7dK%2FBjqkAXEIGwzSEo9IdtAog%2BkH%2FJTeP97qUYq53UBgSFWn6gHn7EOJaBmBJKA3S%2FT2sUCLGFd7f4M2XZhVKuS56AxL4OA3J132jjRV2XYtXCR44rqybgCA%2BkAE7WD8X33OnyvskFTB3pxkAZNbBYF1OuR5FvWUOhg3DNVzlczNPxBY0gugN02ZfrEymQNRQoFV%2BEpzboapkD6PaVOw5FCCnUxu9IyP4jGL&X-Amz-Signature=578bc6e411df665bcff3003b68b8cc8d23cc645464e7f81a309a474e33e99507&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
