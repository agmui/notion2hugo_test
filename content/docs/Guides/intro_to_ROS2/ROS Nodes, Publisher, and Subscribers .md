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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=daec791b29662178c4f0315012f01f99d32743728353aa79839e6a3b44b5dc85&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=878c7f76e0e0ceac8f7e890f4dc9917d692d87cf75caaedf3fe80a03a5654709&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=8f7f83f1a364318ec846a62af7f7802efbab8359e7f34479ae30b29a8239d485&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=b8d1a30811a9b12fc3c4b74b45fe1db0f712c2cb730e5f901e31b10883c94c95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=9361fedd2ec0c96c62e9d335634c24ed99ab01b5dbd96eb9d74dd3ff26bc9607&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=19a2af75fb90fb6555ede3d15101fe3fa63863097053cb546bd11bcd8274cbf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=9e3c3f53b77d1d40132c02d9a9a5a6e12f075b1b6ba6960a08248c7c3c4e3064&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHNWQ3TY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T020844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQtx7D2AtnBmjx%2FCoIwQ%2ByZOzmWLyLSMcMZg6BJqdiQQIgFoeImX9aQQK5emSJhymOBXGreBVWxsnq5SyqsszWuUwqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHFvqIar%2BNGhbrCirCrcA%2FzqScBRKYFWh7sdYCbj22CbE74DF%2Brb7957cwoa3VruxkMKZCXn80ZLs2NHox6TX9Ka1amkN7bK%2Bt26tCIXYou2qvFoJyQoJlG%2BVR%2FbyoeI1yD%2Bz5xvAo%2BCafau6JCFW8UzZTGytR2xZmMRpgldq19WGr2V3IqpYDzG6nrApm7aMefMSgXpazmyHG%2FH4bS59VbHM2U6F034V5q9NKL6t0Lj8TJYxO8im1yLXHE%2BkSlgLg6jbQChtY2WTB9kYGaP9SlHt4fJnARLD2NyLMX2FbN8CcruCHK5JoAwLiHRC%2BzwicA38PI4B5nz76ayvbH%2Fx%2Ff7f93cBm3d6i8sQlrdmAfgB1VPenGfKKy0vz0pPLY%2BEs11%2F5j5CX6R%2Fr3oKjgs5OXeW3fLfPsL0RSM4EnDqvHAHgTG3ECkiOsCd5JUndlhQyFnUgCmZ0x60vNirz8nPVrBoBmIAJg9jX2tfx%2BCEMsYyfm7CXzgUrRdUgdDu3bnb8l%2FgL0SQHVrvn%2BVRuPw8ml%2BE%2BKX3%2B%2F%2FDgWgfzfL7wT6qlsJxvRkJv5oewhCGtw0YWeZIMtKCcjKuZeLx%2Fpt8O5Crpj3iq7znFCU%2FHwBrWOa%2BSXaj8A8a1VYi5s4p5hScXyw5g4Y5TWoAz4XMNXqr70GOqUBDR9sQmp3%2BCdY0XoV9YydzsKpTPnAoMLMZ5A%2Fjk1eL26syZGevvhlv9w1hW1s5iTqsML1EhX9qQJlZaMTR1uiPDXKvBlfmviNEtxqWbpqs24%2BJbadvNibIVIhdZ4ucqgYlhIbIGxi0EkVfPmsZnZeJ2fidjWMaDse0uIJLg7F2GA%2FqqscHLc2b1vlPkzc%2FNaDO0QGIpbTcqeAYjq6wqV8ycpnp8D1&X-Amz-Signature=61dbd42d5e9f501252884284ab03b98066b412aab101604e66486d7d92234f0c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
