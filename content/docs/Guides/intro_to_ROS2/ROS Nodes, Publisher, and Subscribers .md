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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=52f9e3ad5193e174318cd3f9a804a1e7a516f21180e32be483757bd941f6c5e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=718b3ddfeababd2b12a76b3bd789aa19c6c462b79070c7673c36ea34881ce5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=bee184eacc9477aa8a60e4d6c7cc56d46d3e33b0810c6ef0f33e8110c60b7328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=c80448102a00cd70d237915d6f52f6f7f0ad5648260e7947b8419eae41de0b73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=05ad75498b945f2f18d05736400a27549e3ac5344663a8ca75f7b115d0c5031a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=710c5577290456b6fbc3ece472a7508692e54e5781e4f16e6741883e2f0609b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=602e71f18e0023c547485e0f6bfedc9f1f7635fb2722584584d9c3071ed68ab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVDPAX35%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDt1EmAs0b7flzw9kI0iffNJGxxoRvdlVTBSar%2FXxgiVwIgboBUjrPMGNAPm7oGSyAuzrfGGnL14ekYji2SaFq7QwAqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWo7EjjeUh99Su0SyrcA4TH9YdGaqafqInSwdJMc8kKLwK0L86J7gEPS6wcgI%2Bsjl0p9wGpoXY%2F2tpbCpWG%2FTdgGetvn1vKIPmC5kpNSH3tt3AsO18ce7zoAI%2FFxWGvpSUWHLATjJl%2FXHuX6IkSYR9bHsjYtFhfckFlule0MBf6oymA54YF583Z%2FYsPw5OzZ7uanzfuRbQbRxT4Dxm6kfGO7oiG9FnizbPKphhdFNleSsU8wHdM6cojE%2F0x20XL%2FVVAQm%2BO51oQXcLCvbzWI%2BfCgEaQpvgC3i4qjfk7O6pE3jklFQomA6K%2BakwmRsGaOfBtD4BdPAqYE0qgNnK1yZvN4kS6y5%2FJ%2FYsG324kuxBCjRaMmJir2BoRscOOhGVWyZoVNXxhgvtA%2Fo1aMgsGiJEUwAaDd7oCUCvNugMXTGxX7W%2FSjN90ldPw4t4bfrieoTy0K8xY2WRQuQXBMby0wpB9BdX0t0cl1lo3IlOPn5dq6aQiwSHoLeHKW6rekcP%2BdmOh9lpKkJEEWe6B71E65xI6dGoqT3ec5iHLM33bMcveMc6ErS3dZjOgs7B3vM7hTKV%2BhJDIG89%2BOBc8MSIwycglL5UORxV5Efw%2Bub3kCL8oeqw%2BMUHI1r4adeeye2xI5N4VnQqN7KYxuZmcMOKjycIGOqUBfvdSR0qZofPtE81Wv%2F96FqMP2b%2B92KnQksfPLbIPYQeLWXjctTqaYW9Pug3DwfkjUdUDpEkOocJMYSHRJVllzOoQyFndEyN1UOsom7XmF%2B7rL93bBx8J%2Bd5cAACIpOgotWfMoV1e%2FfrE4r1EaRTR2zYbZYqTHWhlx6Ua068Sk2oXIVo8CEWRkkohJ7m%2FojJ7WeklYaNFtYJkUO0qvMkqCcEPMQfZ&X-Amz-Signature=76f2391a663fbf3e4e7b37f1482499d131c61ed8931d56cecce13ed6b4e1a501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
