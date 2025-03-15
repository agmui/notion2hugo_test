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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=f403b66cffc1d97b1def5d6dbfdb431c644d64f5682847c9af8e1ebdac5f4dd8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=1e928e53dec275a59fe86ebd3666f644d1dfe0eeb77a937d5d3e72b33317b0e6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=00bd95d78ad6d5d4069d77d49ceceec99d37916cd63fb273aeef3963407f1c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=1631f8b2f9c731ea833692036d23f39a6bd018b1359fc6fb89305a85a46c43ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=943d5060d68c4809ef13adf3bb6e54d2eb6d841f798a759e771f0c1fdbfeab78&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=a2e1f83687e3efa28c3234547607147bbc2d01f49005a9b738a540f43228924a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=5e0a3aefdf13401029a92d5b51eae5aa90676e6ca69970947d07c651801f2b16&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VP4D4NGW%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T230700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDc1acbHH5RsgeMrGm8I4DFhMJvOYOIaXfp2W%2FXMBSJWQIhALUFmrrtfmy4eiEAOl8UvcBUJOgK4QI7bgPgQNbnzH%2BAKv8DCCAQABoMNjM3NDIzMTgzODA1IgyVMby3KSYByIMKS5Iq3AMVEySIUfOosJWF7vqY1Vn7pc3YVkZqlZZqtTPsi1Dy%2BjSM%2BUbx%2FaD4ml0ZbSC9ur4DnS8YvTa8CtWLRjinrGINIJw94xC2wTWIwCNMfmQxbAJ1MZnYP7aQEpZW0YIebPouKfv9nhGR9DL7R01y%2FYLRhesiORnfCO1CmQj4mE7fv8qf7pJNy5X9AG0QvdJrj7ZJf8eXORfwLsihKpFICHhbZPEp0aF2xJgM%2Bw0enQ%2FIMVzg4YBPKxYqYQg33K4kLQ4SCRTJA1APDyT4N8JBtPEADG4lZRviOnVJmu%2F6kmXJc4p%2BkQyWUyWnyyelj%2Ft5DPHVJnmPrMrVB0aRJ4GlAJz2S1GqVyoV5bFNGvWoFRs4CAhOOGV7NjCNi%2FwLkHczQLp2mDGNYVxj4N9aQiNR2TWMaFQfv11Pwy2Q7060gB88xoB6MkneOBRbAvMiAry40LnnoixwWgY5wITB8xw8q2ighiHnAMQEzP8l7bvieS%2BfDSpAwaW5BliELbVBKEdzMIqMKAenT1YJ2lK8eIFiBvA%2F5uEPeLA4eyuH6Brdv9HyRJeahMi6boN3O1%2FpNtwn8tnGSCC%2FBg0JRf9ovdHAuluJFZiY%2F7xZMV16ufaVxfPNn3ZaMODvr63pI4n1djCAgti%2BBjqkAR5dMTVKl9YkpcoZ%2BwkXl8yL%2BM9Wh5uqsYFw1GQaObEKn7To0nVim6tV811GNJvC3kezDbYOEYe9U9pgGz2AiIFRoT6vUHEC%2FE2JLKjK2Bpa9%2By9bSf2mG6j9wIHtzqUKvILGYMGgc8WzlyqBqMVVU46KKhSp0MKecPqQein7aGjq1u%2FGG5tCz1uwcuIM2YtmKl2HryAeYijt%2Fj9Hs5vrRM4x4Xc&X-Amz-Signature=cf9d709b9e6fd395fdf068474d596463ec025502cd1638b92bfde59166735b82&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
