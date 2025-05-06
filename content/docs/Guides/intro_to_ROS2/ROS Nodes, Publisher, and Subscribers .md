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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=747dd3beebc5f244437b1651f68be750a0cf5a1610e5e9e1d683999be19ec2e0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=752292f7d73d66ba55de86de2466588e9cbcd3fb013fb01b9b444dae6e7fe631&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=c89e7c613307bc6e5b67bf40d628ed3e6b6f8b99a4b57480a137c23a8880f1af&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=cabfbf2b802f675306708c79742b1d8413dc253edeeec0f5742df6197d42dd8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=5cd518fcc9b3f428e5b749d7cc5a8640a21e7df58be4f51833ce5f0866f49351&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=8cbc9af799fe6c9baec96e33c7e5976cc3ee799048321f4b4b41dba4540663fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=e28a5de86ceb053ae50c232e75d125d8eba591694f1161acb7dd5284f5f5f8f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7DLJL37%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9hINDSoGb4ID4o4%2BLMKmCPq4dEgHY12ShPDLD7NrhBAIhAKokulrWrV0x0qg4MyUounktXJewyLONQHVrtWpZ%2BDKFKv8DCEYQABoMNjM3NDIzMTgzODA1IgyO7kMckUf3Pb22Jzkq3AMWuayqeoS2oER1kw3Zn80yqn%2BqCjT2JBxWyrUYy0C9PIjGFP0EmdlHuvI1PV0XstsKeIE8HP3ZYATzyZIw%2B3n6JA9u9xV5vEIU%2FhlL8ytz7VSyQYUrDnlVN2h1fvbh9%2FPyUf%2F8y6Wnl0Ki%2Fe%2FfgJigr76BtKePreVH2eVjgnbPgtcmGl2vsfPoTh6GtOS1pMuupONjRtZaNRiTe3LyiVAn1YLSSuvS1XiHcfgoOpj%2FZ9EWhvS4gh%2Bm5M6%2FeFBhHAnj78uce53fQiFKBpxefK%2BW6%2B4syd4HucWo0KZTHlUicH%2FI986mpSZn%2FTRsk6dWmpLNFrBtsG8MJjaOt3QIReLOSqtQc%2FnGYU4tanrApTJStkEzPov8KCarbcvT3PLsPhQTCemZ3nbeJzhiEXTGQeEPrAUnCiagAW4onuAJXYZLyLiTT1O3UjoHdnoVAVsSL9Ey8Da%2FeKd1lAM0c4PQ1Gr3fJCpFIaQpzSZbeSukm5q%2FaLI3opjTtr2uJK4QeID2ptlXIwKphVWEpIVEm1P8Ns6B2Fnoo2HOwwbY4QvLTa171GgBrfxNrNxYl6biBcVbxGGXoFjedI7qQAYcoR8EkaMHyrgrCUo1cHmFKstaXmAKNRhGtA6511xNBvlxDDdl%2BjABjqkATPfRTPf2%2FwLfdlpYH4IN12Fo76I4YiT%2FcTyXs7QBPdJlEIo0aqGGLJ0nUlQeBpfvf6NWBKg9oFq1De%2BW8rreVlaPEPneQQomJyHr6y1aNF9bxAt2O5I%2B97Lm5i%2FkH9adApxK0OebbDCcdUG1CTMkbusTekJvvVvoRuUOF%2BJ3NajCQJBcUO9S%2BmFlFMcEDWNTxyckedjdatSlJ4%2FeQ1ZAhOG%2B%2BfF&X-Amz-Signature=057455c2e075162a029dbf51e3dc818f6aa2a537ed6f9cb3c2ec7aba9f5d5bad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
