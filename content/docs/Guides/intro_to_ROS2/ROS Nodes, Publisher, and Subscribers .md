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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=b3566f90a2723d02afce02faf0ce559cb25f424478b1061b6ae024b37dfe494e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=f75cebd412dd1c25b8afc1e8a27517aeb4caa20f698b8dd6d298a7f53d1d2bdb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=aa19ef714b1bd0c31950f8c587cde12e2c4a247a77bf018aa0efedb0b58a0a38&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=07fa58b934c44b1b8c92ba8686d6f291bb1d0d015745947f4e5d3e00948c1714&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=deb2469f6291f9b9a0dbcd89247cc70fa7ec360fee835c3cdeead3430d482fd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=17312fcff0d12118131811bdcf16fa0be9a9c7f906300619fa36e5f0255d8409&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=e6832ef848a015e629b72f9a7acd8497d923356224fc6f8d284d75492ea91cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QEMYLRJ7%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T070808Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbDfqBX7A0psT7rKaxEm7Gn3nhZ9rRpnZZ%2B6nQ77vRewIhAKWv4tyxY9%2F3KLSMmT%2Fm7akl661apfGnHR7MnpubLOarKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyW7RKbe1JWCXfCuaMq3AMQ8cVkts4vOmplaJD4wq2pXzHzBvu30chhMKsqzJUumSkmFHvxAsiNL3O2o5qWgjJBT6Hbr2lUnmfyLlK9vqhmFFJx6CJV%2FsSGMZ8tN3GCCfmxhrN0lSJLnyfjvYOM6iN8br8S2MLVEY0DQbLh1ABhKluTlKszP4W7SoHbJwTnWYY7eIiD0U2spsrztRELPFLOcUbJdirCfXC%2B5RO8X%2BGvlJ%2FHKUi0DN9DMeVRjdJXdQDwfNcfoFPfySYS5DBDzRh1ORp4eaSkYDzAWu06gomVSbV3pWAHd%2BRZU6Q9LPiZqJNPLJ%2FfwI9kYIZpbZNmRfd0BIkh0D%2FLK9YTiV0nEm7Dnw5SWODCFk5asfCAiLSIc5bAG0advSW8tGcK2Do6Z77qDCfJpMJO4P%2Fi23IMmONNaiiwMhwrFedcadIWIbt%2BKPI%2FiCW05vvsMBey38hLijcTiiGNM5SpsSsEWmQpe1CKy9ywiz0zXlyEHOJ5Dm%2BdWVrB8lmxAw1D3tjyMPLVV%2Bz690GuTT7NG8qrn9ZjbeX56AiVfUE0%2BI9L1BIrTU1ZXU0aeByX3E22baEzIlgpp%2BIALgFai%2BooBsQPK5ONsUzvfl47HsBPrcHe%2BGXtAhY88ppNKHHNXMttkozaAzDX7q%2B9BjqkATFxKJN%2BueQGhqRqPuIivZdFsOtDfK36Gcw3xWoKNTICrZnJhQUVYsvyT0jbtImOcD1GStKeh%2FpURwZ9HWq7oVHg1jlQIF3YNmYLVNh3GRMP5gUN06uLvnV7a7RHEkkL%2BAkr2kB%2Fw8226kTJyQ3F0hXNDY0ywK9uuPYAZukjYj%2F2XjKOgRjN1fqVwcHmTySRMfguKdKau2L6f2kEQl26890z7OS0&X-Amz-Signature=c86c1be03e496ae6c23a6c7620055de8dcce7022f01b3d60feafb8e5850744a6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
