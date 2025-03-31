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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=a66722af2fc30f1f4d6c7911eb08011d6d061eb2c1425ea5046dc79b10f661fe&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=199a4b7d39fb23a5c47c3b1d86ff5ee8651f1126ba24a2f3895eea86e6601549&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=5c4d7432d585cfbb444ea2fc6773a62f3a9f662e86b42a24711761f6a6b5bd1d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=7ac252094452b9e037ea5333898c00a2c734a7611b1f0f9eacc4c04f1205f5ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=46f58443414f7903a1fc45ec72a32b31f548aa25a4f23f3488184f4be950b5b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=785b2e09ce1ef98c960f7e18e87265a042e8394854787fbbc6e555ddb416774c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=c00b42a3353195fa3f2328a8c09ea51185ed2a87a64e6ae98ab8fcdff2dfb96d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN3S6SEY%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T170728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQDrgadz%2F8OnnKim0pQFGHW%2FLTfVTPu7bkJt8N%2Ff6mWCpAIgLbIXOeBgdhukGaiyk%2Bv5VCRQkcxkudT%2BF9IeCcrcVfsqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIFsgN1QA55w5flwiSrcA%2FEhCTcvgx4gtN8iAUHrEus6iYW%2F9TWRE%2F7y1SH%2BNsfr%2BScJSMX%2FAwHS5cqCSDt%2BPrnxHmTaYGlGN1eTXcjeGYvoMoRlHbIUSjEBJTiZgvTb%2Fj5pKO8H%2BVHK20VtnUpqHysgv9YRIh0UoOdDAlCsfr5xUBvp1WUbGrvIVWU23OQXnZLEW5GrTSzLEHdkGFSiZ%2Bzqy5KA1dWFi9zWBHRdsk5hKYbBwMKQ0lL61U71PJ9FLOgrxXSDb9apByk8egI451P9JvlJoWsnBkww69RWCz4C%2BmOTnwK52Hw7wQ81wm9Gkc7GPh2aacTohhAjDhhincvPa42zNoi9nWUwhtovKuE5RGnn4fSnDPKbPrekKPQKlGDHvaijVnln8AI3m5PKnDOvW6CuJcurZmUxTcGUsakRnRHHnIHWYkHQvI5HVA0IxJYI68NujDcggb%2BQ1OTbzMVsQeRFTd5V1ewBcUeEiCBfVeYln31ywGfb6CxVw9%2Bg7m13G1JFQ3kCG9A%2BEAyjWdyPTIBnLFzksGLFOiReQScv6laagjbkk89Klgxv17TgKpYpKb9dRCurCIa7ZnurdnlPQDfDk5uL39KDoIsYuXMn9yMZ5ZbkmnxVAREwB%2Ff1XaThLPviaoAfBOBAMM2Bq78GOqUBBWjl9vdTkxaZfFZ%2F23QHL6cbXeRg0DkaHgaLky7E9xsqnAML2294DWNCfZEPqSX6D160l0z5T42LsnId3m%2B17Q%2BztiT4ly38IFNaKOFKI1Yxaq8aAifGkep13%2Bc7FMPgFQIXcOX1v7y6GrTFKiVbkXaya%2BY5nVvzVslGoqJ5SC%2BJSO8ypJuC6d6LVUfdAlejzoL8gcjh0zGisRE7HsLjTp%2BjgH2y&X-Amz-Signature=b035d0515d4d8fd1ccf7af411e2084503efb08260f916add6531955dfef1b243&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
