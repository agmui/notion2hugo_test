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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=2a8c0ece484d4aeee14d72d8cd49eed4c8ea951e2ce28da2d80dcd6034cac9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=6c06b9a84836b4bff6fc6d43f633bb9a0eed2c034b36f5794e429952eca16e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=01af419db81b0133d9199bb5b70124195d8e83c3d640ee1d93322e3d0c1c1c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=aba7323a84bb4bcf10e59886b015e2b7bd907a6465680879f7d4553fb41c0639&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=05a8ef96c39dd37fe2dbb58ef501e97fe9e06439e2eeeb7061aaa29994dbe1fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=f0cff5ef61a7fa51f322fde94ea6326a4e5e90e9514f385b929cbffbc2bcfb39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=85facc50af9368c80b045e3c6765deb32cf13a0eb043c3767533df26034f3d02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VD7P4FBU%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T004345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQD%2Fy3%2Fh8mRoOu%2Fi3B1Oo5CwVJivg0Fyg1qxvnE4LroQjAIhALCiccOWROkosO1eH5JsZmtqRue%2FekKsoie5kqEJuTffKv8DCGoQABoMNjM3NDIzMTgzODA1IgxFu6ENi8xMvLwTenoq3ANctXj81zlDsOp0qAPcxkwH9lO4PV1dwNFOUi%2BZByL%2FumbuUX3kLQiJmNiGWsOJEh5azneNcEVRgi%2BTLJoHyHkAXteZybk8r9HLj33X0LnIAHL1sI%2Bf1uES8yQFZ3yVBdHnpd3VkN3CukBmiSS%2BADmEENDNFekkkfWcrEv%2B%2B%2BPqg%2F3Jzn6zZy3DJQZHh%2FQDjgpzNtN0z5gV98oJ8CaLfj%2FFfJsOCwKkks22YCpD1qG0iG%2FMyrTHL8TD2aXvL%2BcsK32cjLMsS7Sn%2ByVxbFo95m2u%2BDxLsllzUzEnD0DWF3yTN82ayRALgTaQgBLpYJGvMDek8af4MLWv5jY3bLJ8qc3W3DiNfGObaG3gYCNu4T6ZfffIikgL%2B2JI09fLd3a7KVI6U1PDqfksfuABE7VVdXx4VyYb%2BXiOHjVa5mSNTcWzV9cKc5caY28%2FebGN8zmJjfpgj6NQEcSKd6iWEqYhkQowWrTVClGUuuSVmuE%2BrdrZG%2BLUMhUrgSL3uu87xIhk3bfWzYX7yo2EEeEyfXRsdcQkXaUeO6y9b60%2FT3sfTDsDPL6fyBnLbl6ccKWfyIjhIlVk428ixn3IBgWOSDQSQKR7f4GVcVHw9IlRJcATf6ab1AlwP3r1N0Q8LeMnlTDWy%2FfCBjqkAYu1LF7kuS1Xf5f49bYIxB%2FePUj5Ejwy3VAXsuT33YXyGjv1B3wVymOSHdJNvmJ1F%2FSGX96A1pAi55Z3QwzoN0ZKRvibKeMm9HUcM4GuJep%2FWPobG%2FxC3wAiawhhPXkIluSzDhCApa8QsGj%2Fs5vqe6zvVM2KNKiT8WPuLPtoDdMmsSXq5K9gJvfViPDE9au6X1FhCvovb29l%2Bx6nUZi2MroiJOPW&X-Amz-Signature=152cb2687c9b6ee12a7fb1384135f4c1bf3f4daf9eddadd9227ae2941578e261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
