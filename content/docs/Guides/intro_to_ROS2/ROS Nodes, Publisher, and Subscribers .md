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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=98e9d6988c4519fc7e3de4b0208893bb2d40c5703ff969a7fb012144b359599e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=b8da248df79f79e2e31ba6590fd0349de60af5c60b5b14544bdfc9844ed4d30f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=2cda99924bc41ccad54e417aee352d3d95af56779e344106d91a0e1477a09dc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=44ebf6336fb848abfca97d5184238e233c760c04605c625e9718196fcd0f762f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=8c07a5ac1725eeaec3d0c62e629aec58a87523b4f77d1d606f88a93075002c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=c021b23a15735a82a9804de4d86b381079f4fd93fdaa82657b72a9faf6810af8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=2dcc827570baae57b0d638148ad1ac63a5b44457404e57b21e4a1590006fd31d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ6N5BU5%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtiwhPv3IfSbjOhA5RvGfE8nyDwxX947bXaQ4vtyh2zAiAFvSOReN5v%2FwdVvCyf%2B7k576C8alY34%2F4GFRAA3deZgyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZx2QnBehpMMkObsoKtwDIZwdFY%2B4SLJD09MoU9DXNGmXkkly1zUtqTntCWJExjPdFhuFppyPPTLq5GOZs26oUSZFm2g4Qh%2BjyQ0RRbygcZz3XZoAA2U7MNmB7gGdUBlBnqXx9WufSn6HZMq7mKgYG3sDDE8erjDsmy1EAeZpDHE7Y4gUZOnH5mk7siULC%2F7pThWmXnnIGMPQjKWveqQnMhBNLCSkjRv%2B747Z8OJ8iPJZHxG%2F8kyhnAyv5yfGZtE1IUIyawAHi3atUDj6mJTEyC4MlXNGpvSNmxg34QiGwSB5FOkpkGKuQmxSsQequOo%2BJVrSahci6Kn7pAJI739IkNbDNcx54zsJK76DyaIczCqOgh7TX4H8TDRM%2BEv37ctJVsLNvKgxLWzYOfw9LuLpmZHplJfwungSz74NAMAqAc18vVjLu%2F5QTi7YivQSMEuPJTQ3hNxViPBuw1Puh4aBLBObXWE6GjyiIi%2BCNNIIT4D1%2FibngIo76JRIDPJs%2FoRn%2FIxwqLBeCw7j1DfU2RiaK%2BCMPBWOyfw%2B%2F8gsbVoW5ULs6Zl54DhlVdz3zveW6NEwLxlM4a7dxqEVj8oWGlpXS1190qlqr49nJN6EtDtIDO7EFWusW16EnN%2F7xXyiEWfCn9SIvZPggwglWHow7vXvwwY6pgG8mu9WVaFB7cOms8I0R2uyMiQUqar290W2ipwN2x3CC%2Bi5JhfoA%2FRTlZJREHHfbtp377CdBMnbX8%2FVhpdoRVwaITmpUYpHoXHg8Fsu%2BfZElqFDthpuGEn2WqE3IAXdVQAgwv0L0oAtToR%2BjC2Yh3AQkPLPDYr%2BoVqKqFup3otJiw4V3ge4qKY5pLKhBKrbVxhl0k6Xw9LeYulW%2BoPkDcclSmncjGmS&X-Amz-Signature=7071cf3f100221e6646942e8485b34665e622ab9edac706d47fb86eff980e28f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
