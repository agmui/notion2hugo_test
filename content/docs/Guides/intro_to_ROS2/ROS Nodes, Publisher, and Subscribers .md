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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=8c75e3b2801b999b7c28cf04003724d2961d379706f34de004370768ee7011b0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=38b0c4dfd8bb738e17c1b72c252836e4adb5efff167cb352c3e47e04d37f1bbf&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=a5f424a7546ec8331029526da8bb58a57182e6bcd9380f2fa8c3cfa0d9416349&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=f081cdc27b796912427dd7f04a18ae75c8c2f093f4129eb50212575c09bc17c4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=d97b0ee9c8767e62d0be6cdfcea28a0f30fbe44c9b87626bcde7e82076b3f6dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=728559b7b8ceebebe7adb02f498afb54ae7b0fbcb12780a6f0eb1009bcb6990e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=4c551d484e9a8902de8a12e39e129044f9e6555250cee9d7fb8b9812583e3ffd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G6ZLCLD%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T100500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcGrohjnTQ5E7axjFOa9PFPTRmyLZhCrasGfHlxCrSzAiEA1zSaShYTSbk%2BuNZlhOLzob4whTuNs2b70ir9cP69q6oqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAoYmzNR5%2B46CXU6ZSrcAxCBK1GkO6Td4oniDDI7crqq%2FKdpQLHmolzfouN87SU4M1jooegrxR4una%2F3SWjgBG2cF%2FeiA5xxZe5AjiPHZYT9X5I77sscrzcePTKc2dbueSaGcMM2qI6JLj13UtLlzJODSlxYm4gx9yyBeT5ahEBbhDoCsWDbk%2F4wiv%2FRS6I8Sgfa8ItKoiFPUlssDM8dVglR%2BxRxPrCMdH5dAOShDOnAR87HXFnn1Fy60WCzBpqtRpLalbBxtGJc2ECjPF8t0Mdlq2TGlnhlxPQ5OAppCZxSIK%2Bi6e1rilylTnBgVUwnLmdigu8H9U6BW4n7d3XeaclrYp36AQtlUUHhHLWslILm8mgJt8JwTDathAApX1RoycRTGUXoG%2Bh6Iq6pqnCWKNXEpuhrD5GqJ%2FpCPiMWUmAWrdOqa%2B%2Fu6aF45WlCwCGr5MXFnmG6m0P%2Fz2JynOypugSvfF0lM1GM%2BIJxST8%2BaHwf%2FXLG5Kcpf%2FdPrdSFMI0oRPh%2Fko1ZjOmQFkXSALoETqHUoGh9%2FdqFhS%2FOXtgOLB%2B6kiyPRcj1AiWNQls4ilybkQbwSfC96KXnLeVQXFDWkVrUfJLjSaGTlhXD1eAJIna4yFDIzQ%2BlL9I3cgL13ecyT1attfNrRrSimseLMMTkob0GOqUBY%2F5cFedYBvNHcQwdQDlmdEPOGtiLFhVs1Tx4CGIVHVeWO%2B6JFQKtJYBX2QJ8q2ReR79x33FCTlaDAQXSEXAdj5447FgB3wKQsYwt4TEgWv7KS%2BuI7r%2B4dIh%2FFjd9RZTEjaDKv3ALrBY88T1XYfPju%2F3FCyKAvT3rhpOF94X02hYRxger%2FDvpydtl%2FAXuT5bbALNCpAVeb30%2F6bUl0phi4yLOZxyX&X-Amz-Signature=c556abdd58f10fdc2c6eaa476eb79d85ceec99cb76b725f8793b5290ffca95bf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
