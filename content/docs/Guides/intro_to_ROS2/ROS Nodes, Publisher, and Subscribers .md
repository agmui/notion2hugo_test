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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=7a46796cc3b16c8bd8226b07d7c7356fb84e63cd4a8891705c4c759fec1304bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=2d7836e2a6a22376a07bd3edfd15b5061ceb1b4e6ce1a635bbbb20d975572dd2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=25ce7b33245d636d9b8746b761b87a0359d407d20f6d96c35d76ec484b5ac071&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=c86a205f2140bf80e3ec4a97ec47005e21ada4bfd36864aff751b8ac9abe841b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=4abf4cd6970ef9b1706c44c1fcf3954011e5a34e443ad290b40c0a1337ebb2f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=b4af68e20de6b11219ed4c0fa4800ced5e0cd0afda15f07b2c62766804f01df5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=1b15093ca31f426d3563ffbe03d788769d340fd94c2f7524f26f928c90e2fd47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663D6HUUMO%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T200840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJz0Q2%2F33MboWAJ6RoMnqsGKPo4iVY72hVVjOh7wg6CQIhALO3XmmF%2F1T5u1Qpk47Sb%2BY84Vpga2Iw8C4n0ksUhDhwKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw64ODSpZPWptRssFEq3AOttcys0Sc7g6XdyyyKnCBJxbLPo2Mg9XsscnztQJ7EthfvYmFO%2Bpx8AQ8FumhuGKbEsTmtfZkf5Bv4Fg3sng4e88qsOTiJW0zChfK0HChMslZh7RKhqSPChYv2JetC5CQ7WGza6hhiy%2B%2BJinzpNpKDnQbvvpGZWr4AEmrcLqk4u3SsCEBfJMTyc97RnuMSapHw5MlBh5CoH3IIEMcFrKJi2u4Fw%2F%2FnhQDuGKHBAr4Rr2B519eM99KtSExYlOZvgON%2F%2F74HugDrfNW6tIXFwZyrD0KBWsEYK9%2B8PoTsyd5Wp%2F7wHOwHeI4zRToyTdEMcOcldYJA1q4Copyvni3zElC1jPC0InxzZYWJmolUGg1CPqOaXFUMtGx%2FI%2BT6G1nDR4XHR8PpUhwxT8hcSDiYDkDTCLiM8EXVSbeDoegTaiIi%2FlpSrsOY5qgtUtOger8pkfcrb9X1ZGuwBLtwSpWvWBZNz%2BKS%2B7cc9fiUN6j7PZJ71B35jjjHcl7x%2F2IFCuICDe9UiJNWN6JtG8fKMTJ9tglXri9aoNxTdByg8wtOlf5eMxqmpclPcUcEmvOmvmZzqZvXxf31RA6YIWsCt6qNcNMtF1z0f6CWT2i73uLx32YOhGU3R%2F14Eh8O467sATDS1pfCBjqkAd%2FS409lu2wuGniBUTohtAa4u3Q%2BDdiy%2Fk8xAnpHH%2BX8qY3vPcSg8TvjcjV558kZBtDSirG0SUSW%2FFsXwe51Lu70jfeNMfSHyx0kA29uW4bj3nx9uL31f92jeIPZhQ%2BCQ16aDZZb6HDCKwNHqcdRBJ15m7Z%2F6l5zN%2Bxn7ajnHOL7gek%2FJBYvn5GOhgCiMzSiK6JMbpYIDSY1GetgoVwjNStbQstO&X-Amz-Signature=405c59844cb72d0a2ae6e2063bc72d0d38c56c4996b7122d7afbd27f01ca86c2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
