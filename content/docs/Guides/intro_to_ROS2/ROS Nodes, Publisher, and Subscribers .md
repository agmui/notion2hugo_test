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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=4ad9a10a1c4e0c77ae6ce0239e8dcc9e0e20fd6210685058680374cae05ed873&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=cc1003b7f3759d277c87f4c8a925cec2789081109fc98c4e6b75dbd72d66e930&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=2feb9db110ed93364affc844d05b541d04c31774540ab650049dfae33612eef6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=ac0ec64f783ad7f405bbb270ed35abd15d128c43f20aa22e3ed9f9b199b42629&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=e6ac01b168a171303796684b8ea973270de07a3ce16938b86531a5415797049c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=bf8ed46b6377aa724e8ec76b2430c31ae03375237390ae624cb8cc2f686fbe6f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=4e80f27c303ac39ea50ab52131ea56a57bc5306322ee755234ab38c6cc2ace22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMG65DD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T070245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChE8xe4k2WXquPD3ODTeOiMjea3JJK91K7%2FWBslciUMAIhAMpq0JMMcdBSE7GFqM5ZzZSc6kytVkp0YWHrjbrfrW1aKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweIW9VjlrSQZ0mEm0q3AOet%2FkeAbMk4MFPj7Lr3c22a%2BSpxfM%2FdSmdVsA9GdT7tRkWTnUGdobHenw10YggyI4PbtKv%2FzdzVw51qb3SAYDsu1A2egtB2bOxVKbSdbMKbWXWdj5Y8fNmh5195O%2FWeFvFWT7I1UQ%2BD3ahfyWE51e%2B25Ha7Z9Z0PN6tsxv2secWTrHSRQ4v66pQjQQUpQP7qryF8rlZ%2FZXBgy649eZi8cpwucaLm7LgCo9%2F2LZODO5XCI%2BFA7fp9JgkeX3%2BNk810uk0UoQFebH%2BUxpSY8v%2Bx%2BlxVGNMNg0XinO%2FPSB3CY34vdzgXhRZoSZrBOIJ4fHJFnRd%2FGDuu29jB8R845HfQgWWtQ8zXZyFbU2e2LX%2BFTMZSvNA10SSsYohQaqQ9ijVC6cQjMA6Ycwv2DiwrM0ipzSXApInlYkXYkSM%2FmL0jomAL%2Biv0yxpNbnfLF%2BDNMGGa5NzTV%2FbSgi2duoEo%2FdbRFDWsFeFLFpfI%2B2XsznBgNhQ2lSigKdFtdQRVvq2J0Hw7im4ouLEQj4GtdYP2g4Q330e8%2BRYaZfUevd%2FOyC32hAwIff8NLYUsiKkI7unMB4fIwTAi27AceMQYqPkGDt0F%2F8zKvSCLqAKNuQPuy3p1AbfVVH%2F%2BxWDYbGiNOFazCKgaG9BjqkAWCT6nk9aJ0wzANaE6NTeu1cyE5LOz4PRVmu9IYM2%2FZAEXikstFrthuJGOUzXJ9ntqJZ2yD8ftfM6w3nSYzTgFeoT6uHshDpF70rXba3OSXcCCg7fVGEpj7bo%2B38YcqgdHkEuvWoG0x58zpYXj1daT4%2BBE%2BJ1t%2FEaZxLVxYEMp8DBNNBfFyoWR5FbJArcQqA50ux4y9m18aM2ae2SlPeIJrT%2BVv%2B&X-Amz-Signature=3775732d83352bebad23dea99696a23b8d4f8cc071f4a6d58dc71674c1d0d90f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
