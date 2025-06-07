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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=8fa64fad10cfac996292b3d3e6fa6dd58ebe8d679bd2d2f72946fac7ca52ac32&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=0085dff290fee7ed06b46bb0c716c2ae91a0fa25e39c507bb96c43bbec66e848&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=84765dcc63aa23e8664eefcda060e2756ee0aa014f288cea6e76e1d30773c407&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=1a5672e709b248d6d37628d6a03fc55d40f627b64b2d498833a3215f3e9fab0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=ae9a94f73bc8054b837b4513da096a40d3e28fafdfd426e3439ce44dd8d69078&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=23ff9c37945e7705a2da189daeaf8ac42beb3af4b4f650320e4ba6670f47b0cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=ec395e0a73c59391aab27389eeef65747c8f8a1c1844b7d9f6231c04716007b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z4G64W5%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGH5J4ytJ7oVnfKIGF4PiITOPNE26OLwhrwmvt42tCNpAiEAy9IDamu%2BuPozaGl2yq8lvkXKNZvzvOCLRt9Cp6mJzk8q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDuQwEkSq5%2BIlB5ZFCrcA0NRpdoaRVnLoGPQ7%2F5Ex4j25sn2%2FTC14JRnQzwQjtIj9RWTLE8nZeYCxt9%2B2emga%2FvGxSU9wxsPaZPkrfcPUnyWyNl%2Fk8JtTsyMlEd0i6o32lNK9LPS2jMZGAvrm8as%2BjUlIvvCwb9%2Bs9N4YkMiU9P700448DZOa0YIthqJP22EFJqa9bau5EvdWMA55u6FEjlAYbgDoMXDkeDBby%2BwlKe1tVHF7H1LFZfYtJcGsbyPlNrKo1LRegMYt3Zif32hb%2FA73LR16CuLM0TDc2PLxAQVTHL5sZjqgxZxc4bnABHpMPxWMN8sVnpQ2wXu6lmG5y9CoBrAjHMBDOcPMLSO5HBvpIoeFJODJKvfY9cA11yO90dYG6QalaE058W6ySXKHpd1dQx5wPrlpABJ6O1dopCxLhAcCoch9fqcqBZNADTWyojuWlMZAhkgR6FXLrqaJx2The1QJJNvGotYTiu5QY6pPwGdtvm36MHyRyantbJXXtHW9mBtja51i236AF8eFDBe2%2Br%2Flcfj3E6pED%2BOTcCwu57CTfkINIFtgZtSGpYhIgfx1hvrE50kr4MKdMOWUD0s4VyDf2S%2F6JwvmvgR2Zhi8yOCTmak69JkTgeOSunzuZeD1XdrQsXXV8RnMOOIjsIGOqUB5MJRAooKscG8shYXEydmVTISCJz%2FZ2B4DhFRjV3iqm9VEhOPUKZzRz2I3TYfN6ws%2B01OM4vF06pyI4K44KHMGT2bhBXeHBRyt3zppVUsCYkytlfxB3Hu1L2SP%2FA8uWpl1XHYttc4IPhbcGJ057Jrd1tbp5yRBExU5gdXOV1itsYqQChRwGomKqQQNWIFkU4vx1l0U8UT4oCuADvMazNFd8Vyt32L&X-Amz-Signature=b4870dca6f5a544888af3395ad88ef5e8a155a725fe4362149d426df8f255aaf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
