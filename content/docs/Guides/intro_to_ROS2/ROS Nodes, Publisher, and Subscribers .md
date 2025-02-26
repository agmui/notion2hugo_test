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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=86fb279accd428c7318619076c8fd5ceb854901d3649306d8a107b1334787161&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=7409afdd23d99a97ceeb8f0e84ba9d763b939531e0780d072af4e7447a661212&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=5724df8baf2cda11111dc78b5f066ab0c429b07ec87fd47c1d7a08169e1d6ce4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=3a34cd90f5d52eeeb69a265fff56e59694bd4eace5c8f7b98d58accdc1ec739b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=895926506553ddbcf5c51b100e25b397e5450d0c09c1e386a7e45beedf2f1fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=13a4c131cdbf7cab79ac1ab13dd838b28cf023db45d2f870f159de757d292776&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=ed5f85c37ebba931c30063a4774378f8a467d0253a7bec5c208fbcae3dc67f91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXG3GKYQ%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T121426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJGMEQCIFzgEJxQh4n4BkWJtZIl23MruVk3VahfLGMrT5OOQ9X1AiBQvVkODtnHwVLp7%2Brow703cH1lBwDNsdhs6cI9lSgVCSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMnkoD4upD2GEQ2NISKtwDVfpxae1Cotm7A4jlAey2PLn668zCHJ%2FKdhFzMTeEcjeb01WmV5Ub7GdxhfwkAriqArvbges8HpODX78fY%2BVA4im2W865shVN1QLGrZxsBEgfv%2Byyq%2FhOhdbRKPZZifloK1t1oYfCu9D0aBlbmYpI%2FetEMIlo%2BBWy4ExdwkpEDWxo7kSb%2FDJJIzF0qEHW5jfia0bFtJMxjyrsttVoUTx2ew0aKY3cJoCpty0JrDwyOx4nF4rwZCaTGqX%2FDoS4kJLSZ0CjpilmRHETLHkJDs5T%2FdS7mjzAQ8TgMHLD26RAGQqVde79jpHck6npEIw69Ya5Nt%2FrKC03KIrCEAhu3HtItxlmUgAkWSkp2EubIaIAugPC0MRWDIZz1biiRWXTuN3oPe%2B%2FIxkXP3uVwKIizq0ja2UkJ0yfgqGOyfZx3Ak7gbSLwSgnSLcDQK06%2F7bx14rPUsFb0pMZd2419oAqwA0%2FcxecCKfP8F5SImJoGyNiDVfSt6ZDQ9nU0XUCrMLLQGX92QHLzwDQ8%2BJ3c3sDt79MAipgSsaIVKqlhVmTCv89YR8SF8pM6ou6i%2B8gAR%2FAs7HX8NrppFXv4cuexzsZX3ErqpzoUGdFIvCNInRjrQL14Kc2C8DfnosjZIk87iUw5of8vQY6pgGqpEeU2nqPCjkkx%2F9u93i0GOuknaY2%2FIryEg8TMfN2eG7%2F4p3eIPvzf7Oz91EPtjZpi0xk2hiXnZsknRKnJSjWKQy%2FNNHTQx05w7AR46deh%2FRSoBjGvIf%2FomiIqxr5aX7BjcToUEfqemDPHxDf5vz4CXArtlO2rOw3Il1yl0Fkhc3ZnXmBmwv0xXt8RSl%2BPggimROmtv8UoA7bGQtVZGwwstrCV0hN&X-Amz-Signature=a81fdd15e368c56fa3e9586ce3d98277fc24b52a37999a0fda866ddfacce1182&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
