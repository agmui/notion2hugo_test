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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=a7bfdef22c40d68c51291de5ac48fadd23db771116b573b806401d9518c8e063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=c6af91584b64eb57e5f28ccf812d7d6d456de260c9af8d69bc6f7f21c8305c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=33945070b42bdfd261b7539debfffe0053fe69a0a21957096bad75846a3d4eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=9fbdd82f8415daaef0662f72a4e78a8cb09a87c1ac766862461e664e48252f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=73bf8b8d37e735c7ea90d2844fff406df110c57ebb6efefbcee77b6a8ceefab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=70c2c9abd7971048103d50f1c66088568243d485f60ca0a0506e7ebf38932832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=af753015196f292675979788fcddbdaf4c8db57859cc83190c9d1f30b9bd8373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BRFASDH%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T041928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC%2Bmb4L0Q6D6KocwsvpWrKhuqu%2Bl%2FOHUqgoLz%2BZicdaSAIhAPXv6oSBE6kzIJwsO9bq78mPqveoKEQUmqiZrxZTmPK%2FKv8DCCUQABoMNjM3NDIzMTgzODA1Igwv8KuT7KEtLBn7598q3AMfmUb50EnCH6CZK6yf4HqY1HR7kxu5xDv54oJDlona4vI7hCDTneOD490p5ifnLbVDlKTDgKJhrUQjpvf82HIvBh7REGjnVGBBj%2BhlGWXMwJuV9cpeNHvxrQ5ccvdiI8QqtsG1ehHThCZxYEUvZ0eSe%2BhPHR%2BZGzJGJn5uS2xOasyKKM9jBx%2BijyXGg%2BEd%2BbFny81xdOKXTHQSZuf7GzKI0pu1AO9Qice8XscBwnxZ4Hw5uJm1bCVaZiBY7diz3YeVoKNy16cOy%2BKoGjf0OMHPoRzaKBBCX78KhNh4G1ARKUhHpz%2F5enCL8%2Fo6mezotX1xBGir4ou75skGuNhmtLtJDQ39tnxl%2FQpDTkTTHY%2F1RXw%2FiwPkYmqKbZcdYcmTHw96gxS87CulvcynSx0ay4JpfVq6t9d%2BAXvSFsouWMcJnqJQEDEj2Uo9DUYqRLXefz2WWqBX5y3M51F%2FJUv%2BVcZZbtVjkkmBOPCyZPAdC2rJwxtsoUAQyrdxgB9OPRKuTH16Bw%2F2w%2F2SwD%2FSbJJAeEKVDKWvVKF6ntUdLmnZj4It39mX%2FP20VStgP%2F%2F2Mu6hOOTWAN9kIw6uttcJPUL2MKeu51AXnZ9TP%2F9CLaDfup9tN4RE%2FZq%2BTSxfIgMOITCtzejCBjqkAW6oISZ0GNjziGgnPh148GoXj9wVhG3Tn4tGIIuZsgw3J06qh2MJj44ONZGdW9xbjloCJ4WcgyVTJpliSGQsCx0uXlgRdHGAFYAo%2BF%2Fs77A3im7hCXM5FuNkiq53PI53op%2F5ejle820gNW3dWKBjtcvqhQf3Xnk0kkPGy%2F0pt34bK%2BAq9VOYNfUCCcwMXgaESsvAmyBzUr635zoZps9XMvxOjVUS&X-Amz-Signature=c80af6c3881d94743bbc2d5a4b7871d5d29be63aaff6d2f10a93cdccc3702333&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
