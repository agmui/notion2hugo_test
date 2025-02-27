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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=4c34e14c39531d1ffd413d81aa5d9d3d2ada789cb0c0e93d2bda0d7ee06f89d5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=e25180968814e292ee2031116365ca5773165feb19abbab1ca1b890bd71d0b52&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=47cdcfa14e1c0953af3f99541ee2d75ac93714412e2bf52596293e92511c003c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=5a48a40d4bc5cb3b739376119720b097d3a59feddd83d31d30733bfa96f4ac72&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=736189a0553939dfc520cf1e8291d78c8445b9c250a167c4bbdc321cdc701546&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=0f8cf9b1e32f02775c6614e68f2cb7a5dd27fc7ad7cfb4ba74946f6639eee34c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=820c418bddb416eb54d66e187280d08845f9049b95383be3643f8590dd7cd3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVTVIK54%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIHPKnFsMw0Ra%2BFSxCHnazqq5mOF2vuYay746czE1PWLuAiA9qtsdpvH%2FPx3nrq%2F03FR59zJvkm0q9wiF%2BlmWFxTAUCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM86Egd2dfDimvRBBhKtwDstF5OQnd4KMthYW7UJN%2BZWgnl%2Bp8CtsAB3DrZSVCjrfEIxqQ0YzjjKRIQd%2FWaW2AP5NkMqKElwcpWFPGFJM%2BaTURawvRZ70soEfFHCLQq008hr02UGDyVftRbC3Z9ilK3A4jOxqXPBLbN26gA%2BADHeuhcEJFCxAN%2ByhYHmjp7YKEgLJ%2BolmgDoTO1B5Qqtgp06PdvIFMfNJmLL%2F8H%2BoWJVZt45VsZo7gr3RCk%2BZTpZEv80z26YhzdrVX4LGa8W3vFKNwITKhXE0cNMSjCehqneUbsG%2FyzgeR9TORuNK7SsEWdGztK681eNOe%2F8HgAVi9sG5S9EjeZJdlVY7IpBzVdHp8pZD%2B7fVdYZxyVrc5qpmXQSJaxbsdFgpasepRiLXDUc%2Fy%2FJo%2FzumU2AHDC%2BcA5u61yvJIP96DpMrLnvddX%2B6HX1hYbQLrPvY%2FtHIVd1fO%2BIPUHqdc5KWLHiYKqINAnGBIlSSAVaNWDfHE8FQ2Z6lWTCFdq2tPKloSk0Ao8xYrhWnvFZT8DH%2BQe0ZhSOcxIzUALmbocspD%2FmTxKwLLkTOj8b5L6SYd0kFEk5sdfe8hsTwifGZrpaVp0CCD6xgezChmcAVm%2FeGmuRWAXcbh2My6UGWag1ci6jDfhrcwttGAvgY6pgHo32DnBMIqoJ%2FJv1I8lrpqrzw%2BfE3NtxiKqxpY6eqZdyHt%2BKQOlqpUWy%2BZMWqCRBbQtw2Q0k%2FjWZPzqBLXP%2Bwjvpdk7t1SOx9%2BJugR151dDsr3RJwZciy97sJgMYNpw%2FVEpdg0u4F%2BUbaCl9ZfXaqtl9cgduh0wfE5bDFCHMcI9lwIXtZcipxc1si8wDDPZ4L7xUI9JKj%2F8Rpos7gzo05MYpApZlsK&X-Amz-Signature=719263435f9cfff7b3c5246b32038623846aaea1af03d29d88e6899cae14de26&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
