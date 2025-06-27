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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=40cd50749e98d93994de1302dcc9c8fa59b77e1d6db6fd146bcfbf0246b8de2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=f90cd25ca11782fbac570680e8ac93dfb2345994b6b0b49d3c33457067ea49ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=a80d4ed819298f0aea0e8f6b0f87114bf2671d8061701645646635cc8b3192d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=ff157c41b9927b24798fb6c74db1cff3d3dab491d1ef6949ecad80fd26aa4b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=88e917822690ada8c866636d6fd84bd48f2409ab02167b6f30eb08d612720b03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=8624cc3987ff4413eaea1c4b56e8205a5170d2d4ba2eb052172cf3fc0366eaaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=203bec64a47d2b01e68b5d7cf63e53e4d2ec8f4b5bb3dedb68e4f939fb8ddb8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633AALEGQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T024133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCjlas2hUfmsjwbTAMUvzo1kVwMIRX46F9lFiEpyLX2FwIgWYIihSd%2Fp8cnHRommss%2FKS4JFVHcbQHvROk5WJKgCKoq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDLdfYsUPgsNCuT5o4yrcA9B6obY4qCl%2BqKEpq%2BPGvJLG1Ctl0i0dgXqj0uKeM8E77vvgHjq9%2FO81aBzgbdasn7K9YdD6hvEbL2pXyzxPTAa8m%2BXAOy3poQYINpZcrDU5cAIrKOJ2JqC17ofMCT01DZ8tYxqU6ZFPNWPQQ%2BcgZwQKLMiykng8OeW6QJQHGbN6JKmPQrjvM3XCxBOKYcjj4UTxu68NmC77K6m1Pkm7MWMk2%2FHvL15zThmH%2Bh7koLt0UKKO6CPcRa8AlFwcVduff2TqzBLW9RbVKafwP%2BWD%2F3nzVHPn%2FFQuq6gDq624ApKFskBfpqZpMtJsZMjfJEvqTHHLlaKWrXDOhQaxQAQUWPqcxfnFqepSEW8jv4hbD86Sz8%2BkyNM%2FNfaD9TzkXMJgXzwr2W8OrZdB5MlkySPfMw8tunkamsGSmeSIfdDIhxd31t3CxfvWRrVdYewxyZALnivcuGbKh5Is2prj%2FuV1ERf0zZmQW2wui91HuAYYsVKAS98NMcyouOZra%2Fb9qECOj%2FtMVJWMYYhMLkQX9vvr1Ebfo23BOZxHZHB9AX0x%2BeqvX3suzQHLj9aagyAfeX0iApRzkb51Adp6K46V%2B0C3g7yzg1zAc3XEDIzJRP%2FThZO0aFvha%2BHgpItZzxqoMJ7298IGOqUBsCm6gobtiG1RpgtruouNDYhxmh95M18TZe%2FfupJE27BS2NLRXs1b58cEmxm0ERplQKIlA974svTCIyQT0fHPEBRuGI54PRsGb69NTRx7X5S5PYJWFhS9uL4IERoO%2FF2OJIjhrfVF32bWpZN9Ad7e447id1ErwAYNKbbFHQClsB9H9y%2FEZXRapDKNdUxvymr6G6fTOstYXmh4WTDxjhSw8jX5O9jl&X-Amz-Signature=c6f72b5d195e98de250e52c44cb9ee85d9ce31280566a5cc79ec283a39beaa58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
