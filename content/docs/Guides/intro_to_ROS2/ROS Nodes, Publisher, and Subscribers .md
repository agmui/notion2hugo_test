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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=3d32b4e5351190e320df95532da6a0f2b9509376b0b3cdf25bfe972839ad4ade&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=a95415308874fda3f47dbd56c78ec68d5242ebae794322273b9eb714b18e1abf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=cc69ce93c705d60f7691cb1b85db26d93dc3f386fbd20bead8a785e458b30355&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=844e266d28e35cb116dba31154057258e57c1d5caa7230e6518c753bd04a0d6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=6a679ef00a59c8c8387cb0339915e107e0288e7976550c288b427e06cd13a046&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=b09ca3fa3286ca42d8cf05e9451ab5d6956b483abe79d9eb33110bd00657ef73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=988f3012c63db2ecd8b9b088f02eb8b157b48ce54c3d778d647c440110614694&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363VWIYN%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T132115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA21Yrzx1b2DpT5FMuzVoK819vDmhbOVO1oWsdojUyP%2BAiEAjizNZwYXBX4KO2CFk4i2%2FQy7E5Xmmx9EOyGC9VHmCHAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDDhyAt5OpwKR8NK3nCrcAxGxm26ewVIQjQ0caRquX3pO5sGbM1dhVLwtiN2ve01n5HNM7Bm6x5%2FTsGbl5O7aHE9PwkcMslYhSWQgMl3DkISd%2Bbu4UG7nu5aSFSBuHh4fOubyugSh6ju3FXeuEFS3pxqST6HR7BkZA8WW4bDI5%2BgYl%2B0chYRXwh1bBLBkAHmTj4HMu46NXXJnGtgqtRY28DQszcLLWL4XNnYlaw1SX4stcV2vL0hEf3h6r3lzF3hfyf%2F4Z0a8DUpvV5bQIljXj9I%2B9wfsVZvbwnPfCeiL2nOg5fmUf%2B3ITKyj6mCL9SkD9SbmmXlV2HEOse72zxoojxLKR%2BHHYTjwXwri%2BfIyWAXB1rDaXOgj7y6GLsQ3jgH4stKoArYTCIjpbR3ICkd%2BR9rr%2FAlF8cVezHbE5b7lK45mUYlag%2FN2gOpVXh8EogV1dBXGYyeXFVJFLFMMNOLhsGEN%2B916kNIgEFt7%2FFR%2BNiytlDpjek6vs4Tu3KCQWUgn17BeQmlm67iBFDEYv0zXT0eKiYDirh6Qi5904Ajv8hGtm3i2Ryj4gk%2BrwnKibH4LXUUGLxXd6gR3KyIrmk7jec4nUCyLV9YcLxIj83Qvn%2BCfe2w20%2Fs02MCPOR7ZMrKO0ZkmpEbj9A61%2BisnMNWO9L8GOqUBCA0hnxp0GNvPfN26bBI4Uco%2F%2B%2FK%2B%2FZtN57h8Z%2B9p%2FHN1bipf74AFiPYgnuHoPswXfcUX5viETqU6LrT%2BDEAdr64ZlRrAffbSq5zC9GJELX8QWjKFQpqQJPw89CT%2BxhmVOC7Qar1g%2FJTpBugOuNhrFx3aHNe1%2FaeoGzW63m6XXfsKsrGcfuzQLlpJV1qLxrZI8uABnmrT1D6S%2FyVV8yd8lo7A8%2Bu1&X-Amz-Signature=0a8ea4db10b59833c98e174fe2d939967fd3d5c03fbe88da18fa776a76a90162&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
