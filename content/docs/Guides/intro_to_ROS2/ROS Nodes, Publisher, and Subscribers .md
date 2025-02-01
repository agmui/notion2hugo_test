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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=885a7e4af7d2a8b50f7bb48b95584ff143219729552210ce9e48f51f9a3e3193&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=31ec98b997b0a1ab57c558a700fe3af045dd7df510369f78ab730a2de9bae719&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=382915d698ff16b29cc2181d48e8f2969625f0734b2bde266d4d675e983ce2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=6862df0253c606a334e845cfcfcf6adc9b5f2949e9e3406ba070067d47934ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=04f5aaf46a1662918e92bd7636f0b3ccd73f94f2a7628d7a80ed14ec36cff16b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=0bf645e61796eda757a7e95294d7c1962f38fd141ad294704a8f03324ba4deba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=28c841bbfb6f15d37e6d43821ef4f63cb6f3a25011f377f2c07f1f8bc2746bf2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O2V54E7%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T220114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHaK8%2BFvLP4eQSaqwpUjSvjUH0YXWmHyr%2FamEQJT3YcgAiBd2wKBCdu%2BSKJCCod0fvQ96laXZu8FssPZOZ%2BCKgP%2FSiqIBAjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZy6L5qxTssuwSyslKtwD%2F%2Fp18NiiTiPcqpQD2JeS7h1Qce8f%2FamBJGL4Q28wUz2DyacOhprfihF2HfryoNs4Hp8C4JAAcBkAFabRWaSV2QGpU1L4OpkOd17q4D0ZjFLpBbkrDchPTDq4h%2BJRIYvCsH5QzXc%2BP9wNByi7Ose27O%2BoxrOnE%2BEZbcmQqCmgv%2Bqoo1cE%2BhC%2BoSYHzIEHhfCTyuWIgN%2BsLcWNR6uSP00t0Mzd7SY7B%2BT7NkFGVqg21CCt8vEXMaiyMjQmRCZVwNYXQxPwYzTabNwACgwJ12soKq%2FrDz%2BqdSM1nQjxb8ZI1dQM3PhcKCr9KATPWZnx0SUqC%2FmjA5ixSfpHQko6jfaaOVhk1WF1cLD3FF7FrVSDe%2BV3tSEgsZBsquFGxSXmOvvkdl5fmtMBYKT1ZrWLdn4XuR7J4NV90MYglAYioBlrggubKvBf6FLhs1w0lBo5UC83CD3wzQ4jal3wdQLt4YfYCFHl1vOVbvtqj3Q49WH8CRcwWVNf732fOX0CUVhqCL4vvSMFfTjke%2FpyMdmdTVEKABULEEObt796fVq6NQfiAh4RTiOIgswicMZtynWOYffDw2t4o8Wlnw4KmG1kI6kHSiB9W6g7pnht0RcJNULghrCco4bfYA%2Fnc%2FxYcWownbL6vAY6pgG4ZohIDhCMC3Cq7hgrAbN7WxCtQAwl0iwrK%2BwFKWTklx8HV9O5%2Bmu5XD9XfM6%2BrOeccK2NcGAL11WVuuvYm8nprnEXmM6DoW0L4wd7nGBh91gX61wlNd1JwEFKL5Z%2BCJuBJld2vw1aM6XiySKQUvfzINfDgBCy0vRvhe%2FYpaYtLT8TsmcXiubMclqkeknamwr%2BNZG96m%2BOdu4ycsQOyeJrtVyaaR7s&X-Amz-Signature=4e84a8d8619bc3cedee5b23e866024b94d1007cf67efc8217ed01a3e72872308&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
