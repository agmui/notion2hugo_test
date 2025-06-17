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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=d4fae1c5426a9e73b1ee0681ab0190d92f244556d910095538a92ce15c36eac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=3b488f9e43b036d82ed0638f2e1490f7e626a67233d60b7b5911a0505bb2a5b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=c6852988dfcaaa3464e76e292bc5329aa9ab74f1ff3774bed8bed70e86f72c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=7333ecfe941920828e4f015c426720b4aed90c5c33bf07a84765119409eedc7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=881358d285953e404d0fae07e4423a6b0bdccf0cb45b6996a1dd83eca0d3f314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=af979fd283779d8ec8a97d86a6314b425754aa8a97f581fe4fbe26729406e681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=0d0663df5da12fbbb089dcc9c6f6c6795efb01a1c520a1015fa1833eef8fbbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PGQDE7N%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T220829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICKJjJa6aflTJoay%2F2O6IUmijtqgnWnCgBYuwnAlD561AiEAoUGxc3n4xDclOFOtTOYamqDUD7Ys1qlbUs2Lv1ddhFAq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDOgziYGraxAiv31LOyrcA%2BOJWThIT6PU65RoKllvjyHa8pqS5jJdDbm%2B0Coq%2BUAB7Zv8qvuopigV16u00kVYuLui3YycYxH%2FlZeuxUeaqIaLj4jyQIqP7MK0iE6eTZ6f0AcG8tRSP66ewVEVQGiqfZWWsPHSp4sQNU2qKeT7ZZdFnbdve3UoyA3puYMkB1YL7if83G5uuKugEfylYYh12%2Bvv283wBm%2BjlF2cCoLhOm4tR%2BuQKWa%2Fi1mScfREx81CQoXtXHz%2B5PpWPnn%2Fi4QgBIhDFOwyF673zu6ApDJazR%2FvYWpQdm0FAQMryvFJtIcs1NdhB7ecObDrrvKMXwoCOMykJRaPPb3VweRFCUupqrTJG7jNI%2B6w7Th4OXW0mBEM%2Bpj2LRMv7Fnp6Nxq9fNSLJ8NouY43URH1cqWEtp7mCHmB9dWnic7xDGjFm%2FB7Y6TSEQUSuPsoR4ikHEuWKF9wo1Q28moxEmmx80Iq1xINwGluCNVaBOA6aUU8898PewQDEObEElvt%2Fe8u51XPMR%2BDveQfOrXWxASiNav7xSHe9jWRku4zdzjyIdmTTm5lswJnEKCa%2FCutfIEqHcKTUvXNUtuoojRyznKt6IkPSmf8nXS7C%2FOhCj8ilG6IMcV%2FRiYv7fd7hhbu6OI8JIkMN6Ix8IGOqUB0EPoFvcpLah6ok8zzcU2bywVCyv0VE0PbsWqFC5xyPASgvJeUCx3qzAv3IzD%2BvXdMIevcmup4Odi1AL7ZhxXiT8s8An9uU5eWTlp0KNKJCY4vLzHYXJSu5yKJuXRbQUI0parYO561xazq8RSlDP2RTrM66VlkAKmeTwRv4xka%2FupKvmPtH2Stvu9H%2BaLfaKzDorJZIHkMsNLsDN29edRj5EXJ949&X-Amz-Signature=5567510a7a013d327258c79119b9c2e49b6a5a6e329484391e7ec99c89ed8d33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
