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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=90e1b155275a845bbd06ecbb3e4e0594f43a19de6fc32d63ceb3732587cf7755&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=22c93e099a8a240f539f9299ef955786c4016ae7a97be1bd865a1417f40ae8c6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=e61d07dccac5e7a018e1c2bdaca95189fe4f220f3f1d7a67b3ea17d39f98f57c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=02b7e33e8a058a1c1b0ed7e32db8f01cfffe08f67753d5369e7dde181810df00&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=b8b7442e295e142209db11651d32e02298b05a995831e989c0a287b4cfaf3a2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=bbd5f916fc373647c3c8ac412e3cc039b346e1649df3148074eb9e4f9e2ea95b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=366b2aaa6ddfc6077a9a09b9628423802bb60fd736c5935b283bd1314834f64e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFBR5QB3%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T031816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaih6wsWCk3vZhUmcBsbJ5dTd%2FP9Aoks8jrTsPY%2BcDPAIgBgRPWJDRod9noWIMJ1psEMaRMBWe%2BW91gAOh9G9IzugqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKV3v4pQ1NmVnpvA0ircA9UP4MkylkXucewwchNTf3TQsXBIMlbnX4cUy%2BUS4Ulwvm%2BafuSLl4DiqCw6QvYQxe2aqcBFWmsTmPv9UH4vaujPUy2wLArzdkva7REnkulsEcNrRLQ8kUf7gywhYPkgNoN1EL6qShzGDHvAtnytetM7g1FGIl0EM2wCvun1sU8p4hRSJf2jDpLnNS%2BA1xTMUw7wtuQAKVb38%2FQTe4Q4sbUR3%2Frx%2BHBweFf4qCv5NVDNwVyhecLrFmsR0EqELLJkrBEz7aIEZhLOeEArYfCpJIXRXi8WGPVy8wuHjKOGte4KLXpNOXylgRuHrxKXQ1yW7m1Hrs2azKumCDn3hBGkdqtNxkX%2B8YdO5qYOyGvbfseV2XFZw8svrHCW6DENKkiFcjcLEW%2F6xNxQi%2FkpFvpUl3p3NEWj%2BzkNkUsAZWYGjqwqUQVr8LlV6eLhZ5RoSVKqsYm4YwBlGF6rFxjASoA9kHjG4ygArOweU5Nqe7J%2Bs0DtnKhk1LX3Yvbhgz9nqbizbd1CEWNaYvzG8vzwKESeVINPP1IcjC58tNNoIfGBrS3sTXzpx0%2Bxg%2Fu0OB34fGFOsiIEoegbZGoiMlPaDtMYk%2BnAqrhSNurMl3y0apsdDnjN1QwqijM323YaFeHVMJzmnr4GOqUBUXJq2iBKdiuUdn4sBJ5UAsHOrXKdoQ9yWFBfEfgdOytRhN2Yg2Y2x4F7XDfiAKdVAlcXXh7gg61IpYwIaMcy5s4Q%2BRkOnu7NrCIqk%2FOZmX6d1vR%2FvFI6udZWJ3hdEjqObNsLGACiZpEGU4pNuefVPZfUeWOAMJp9JdPanv3I426flNVpDpwG3govHFcGZ0zYQeUfT7w5dHYBwItD9FWU5KoLYo2P&X-Amz-Signature=b814233bcff5309a7d5881b5e0b6a8accfc8b4c81261ab03b731edbca76dd360&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
