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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=72a644e75ca903f573437a99f67dc213b41b7f4299245fe7f83db0edaff54046&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=d936d0f9609dfcad5e0c8d94cee61640aa8e084a69932cb14ffcd697df067926&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=4fc71fdc92370d5932d27a8ac63604e1663a71246032c4397358bce40b2a2482&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=d20bce8c4b6952f21dd4f040d42637d353c9ef7dc28a716afbe4ad0a834b384b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=ee0a40c629fa4b1bb8b86b0239829c2e0067137c9a7a28bd63e134c58791f421&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=2a956840039f725fbdb9803a018d392f231335875d5533e714125355f49b9441&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=d8ab168f4dc69c32066f5542488f5aab3c233966eaca276d001f11efead81bac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SXW5THE%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T051008Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQDc%2FYKEBe2yliQdTVhHkaNEpYX9k9bA2a9hU8MquPAk2wIgRJdimlqVx8fGrZhXvnzN1CvTSWaBpVfX9uMGntfm6M0qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNZFDniGgl13uUVeSSrcA6zN%2F4PPTwLsBGlhO24YeSRNiMvELzimX7J7pDjFWlqzg6VZg17h7OqxMEkdpNQeHWdt3VfrtoNk2pLKH7rOZHzqn7qXFZNrBC4WzFN7uxNy%2BXYmiDRTHCDGtDg9Vr3VCfKQwJ08qNyPPc85lL7MALM18iDJLGqwIVA%2FuVJi%2Fi4JvcBJuozQ5zkgwYPk6BuZSCXKpx0kSUdIRpS0%2BUz5BihFm5ehj246SG%2B2Ci9ybdMjbvUzabkY1PFD4L3woQX8QKBtXATO%2Bbv9tXPqTUP%2B5g%2BNoMG1yvXr13cqLJUmOzKv4vl3ZOLBL4SbuF3ldfvvcfSfZNlcKBO8bhcCLG0oWwDtcL2EFt4g7aH2x74HoQ0MsgS7X6jK%2Fc3fj3EvGTB9yNMVfv3OCkJ0DymQoR0REF9nMtxjnqhtE7YD7UAulwzAtr6bOIyzDv87UbfrvMPbWRmfaS2oxvlhtJxtsIdSNCBuLP2bJ3Me3WjUCVaFgV52ij0B5Q9TUJKPfGHbBP8Mx0vVBoWAkJP1e4OSvfx%2F9%2Fm5eIPO1OKLLE0X7hOLFWRjC1%2F%2B6g3J70iKFzW%2BUcFw63l5xSmdXNLCiTy4a58D%2B4vgYA%2F2U%2F8mt%2BdaC%2FakonmvaVEss6r8LCo%2FLDW%2BMPHw7sEGOqUBU%2BH%2FIgaoBNKwSCr8Z402f6R9o%2BcKhKroNderuVvxwu1CUfvbwL6qWjHM6xM%2BvsuK9151Q%2FGrypLRX2YkrTFw0iYRAuYmmzzY0ucR%2Bp1SIgAIGPzTg4Jii4p%2FMV7iFTXilGfFZVqUb6U%2BirclIZwjWGfJ25TE%2Bbu8H0%2FGhsHubTTjsDkj1YI6J1o6c8j52tQdYIxoj0BSX2MqSscpXnv9ntGtSVav&X-Amz-Signature=a183d911521cf063ebd3ebc85c64c863811facebea851290a4356c9b2d6e28f5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
