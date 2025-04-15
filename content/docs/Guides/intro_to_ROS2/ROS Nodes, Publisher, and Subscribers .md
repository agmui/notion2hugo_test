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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=eec96550792dbbfaa62e4c86cb35e105ca26bca1d1854150b83e8b2484f6be4d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=6e96a7a73c990977537d45b7f1cce54aa49a8957c67507759c0a00df4b669230&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=4a4f595f02ca0a626554eb7c2fda0da6e0517caceace23cf89a10451e2037047&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=31b2b128b36222e1a3ffae9e556604a6da4e7366ff753a3a97b30c6f0349c329&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=3081fab81784930b703924cca07a6624a7ccc73161e4e3a897c13de366a71475&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=d1c737a81518bf2bfb2e1c8eb621f26b67439a3c538edbfaecf64b467f693055&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=dcf413957a9a8f27521f49f29ad5b61ffa2e6efbf3e541a9db321be6658bc4d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZJWSKGN%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T041106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGMr06vxYoy7pJITLALFbhqwPOchaRAru%2Bhj7Zm5sPcSAiEAuDBKyHt6trtKLQJQK7NgdifKr351qOohHKQ0GvCsIKQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK4LKVPGjsIeXbEvGyrcA45R4h%2Fe99%2FU8hJRj5W816O5QQE5r49We9RveOVyP0jA9pMAMJfutGvPqA4fwGZG7a8VTuIDGafph0ycEk21Gsw1FHFpx21jL15a2HBabDc%2FjO3eRNcQH9THGhF9UV%2BP54KwTWh%2Bqoo630cOSlCA%2FigywTJOhxj0ZER9C5v3ysFL%2BW1PdcNx%2B1T1llATnitw9zFSUDlRAH%2Bjmtpj4Uz9DRBC32kisN8sSCc2ihW08GfREW5IPK2KabXtgEmMYmNdRUHVFU1zP3OxZEPt5WPW9mGT5P8De2YLd3yPID5gTjEiWn8Qqr5sKaAVLWP4PwnoXhqynf8TRzqnMLcVp%2F6NK5556MKGMBZkwQlEhRd0epi6eL1HSJCNaYGhqidjJipJjKLPvM0woDmOJwMbm1jl1Q3q0Z3S0HSJn942%2FOXWIYmH3HwZM3JfJAr358u3Qi5teGIVungATRPBw7Uff6%2BraVxuTFYG8ZfJcS2dihda3eMniUxdWbGChMEugLa6dg9F0cBS1YFB2%2FSy2O0wMbghRldRxXCwtgq7XwDEA243ust%2Fr6Rq9SDmFbXZRJ2njLf%2FvKS8wHeEycunBIBSF7XApRWOuuuYRVA%2Fa408R3A45vLw7dJJ%2BvfnokjNxO2BMIee978GOqUBApVcIPhZHCEV%2BPr%2BTMxdCG8rDIJQ3se1B5TV7iL7FUofpfhlwi7tYuR%2F%2Bk3Y2IiLSE%2F9tMCxTCdMZRzQG8kYAbLgVnS0BjhTuIgD2Ra7EA2N3j58qH9LonckVpssKpc0Up%2BveJGYJoUzFUrefcim0bbzmKlCO0qFEhgcm7uW0CTBh5D0zjef4%2BGxiq00CRix9G12%2BDLVtqZHLmvbIFipGAvUYNwd&X-Amz-Signature=d52f3cea5fbe10bfb7886d13aafb9a5f9880b26bbd725f46fbebd19be2fc514d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
