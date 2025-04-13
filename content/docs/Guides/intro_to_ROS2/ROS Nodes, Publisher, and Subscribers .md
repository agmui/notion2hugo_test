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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=9fe5854239bb10b915e0ad63a29d910ea003c35a3038f4f2ac6d3b1aea7db955&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=0103da3ce37f316109e40f277b3f64f70cf0c60d913708cf8dd560c4c68f01df&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=32c107882d433f60665ea7ebb00552690de1a5c9ccdcd3ae8dcd75c6e85d6800&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=501fc4422543ff61560173c1c9575e63fd58cc72ec3513a97170f1463d06737b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=e40f9ab5be07e7ae7d5bd34f7ec54995601bf0c26144acb0aa35c003db7e9461&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=861a27b5d5e1aa03d2344c79a47b072efe6de196bfa9ec982b1002b03e0fbdf6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=f4815871098ea01934c9e915aa748a640c1ee07a0a8a7a21c34e58be01fe5119&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHR3GYBJ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCkUdE9YwQlkOsDMz5Gy3gX8hcC8ybLXuTDGMLT0iMn4gIhAIvdaj2QDcgDmn1vYZT9H4ZhPydCKURPWvLMlqtVpG7lKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzWX2NO7JfnCwsT1FIq3AMAb5%2FXwyGXbmw9mUPLFOdLIq2na7ETDu7wStPLPkPBwXeXFUodBlcqJBxYsHC1sfcuwuEyhOkP8buTisXZngc5cxHAp0vCRsk40A6EBOJdV%2BkJwBbot%2Br%2FdQKnsnjVER5U%2FGt0KqW%2Fd9d9jHhvRfoUW2Oue4K1cRPQuqdj59ifxhCMvl7AAvPEC%2BF7gVQuSwfstZ0nXBu2xnehuDA5u%2FKFQ4uNfd7xabsXry6%2BRBtpmSjSIOEBvL%2BpQNh91IH3UxjmPbWSBpyanRjBk7d6UCqxVUAK%2FhKFTeYGftz5dvbEo%2BcCaFR30a7FJdw8U4E3Q7jkKOYCjgv2hjrX53kSI3q2DTYdHraT12PIutAAIkW3RVqeF9k6QRlxzkiPKONwX8CiwOGpXn1hNxLjpPEFYSQ15W92wjWqfyAPpZ81NQkhjeGmOF1vqN%2BIk2NJ%2BcOTq3ifE3RYiNvRjWUW%2BhmKUcXtvQuA5vZ6mHTLOZgZXH8eXlhplXfqiTgI%2BIR7lbQD%2FmTX74L90Pnu%2F3qWcr98RSyWx14ZSdRS0RPp4Dof7AzMLTJuXblbr8a1lRNpJn39sh1%2B77A34gG24CgylytJ0TrsCjK38pPrV%2BuQb2YZAZDoLxiNTtTPLgiTqCA3zjDKzey%2FBjqkAfxCIajjgQoebLB169Eu9%2FxHtd%2ByykxhV7BcHvyQJ92EqLaN1eAVP5147d5fDIoW5Hzz1%2FF3%2F9tx3hBXdg0ObQ3UYcSjAsdx3uYpRNDZ0U6VyuM%2FpwkfcmtYTcnP%2B7WoJnI0oYVA30ZFqAXog9USdmkSdTAZdPKnBEWqhOlmTxT2ZGTSt4LdBUvPBOmDC6FgNH2rmhPnswV28NLmkSeeeeDZ6a1K&X-Amz-Signature=2569513d514a6f724d48c42f2d377b093b76691ac99afd5e549d838fc937c9c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
