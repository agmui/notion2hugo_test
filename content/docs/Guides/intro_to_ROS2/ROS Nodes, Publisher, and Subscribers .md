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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=5983c11cfb9e3382e04fb28026f1b3692e8caaf2b9150617c5a398d9d4727590&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=ab72b2d33880457795451521f456434fc4b0e87ce30d0833e63103dd773845a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=04667424b52a5980dde87465614b45a6a85b1c20d873c66639288cdbf971d672&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=2eab672dfebc34a28c841ef140381e3fce558e1373bf35be1ee12d4a1b0b6726&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=980f0fc9c35834d15aa63dc54239fceaee38c156ecba8fbb93db018375681953&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=9535173bb40e15f28c230dee43ac0b3c2fa318abc8ec63de9256723250ec172d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=12a7d6232375332efaf984f20fb1674763cfc6442069b3abb48826377bf9b3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OKRBLR%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCICj4LRZ4Ie6OvZ1Fezw%2FYrCcBIdjjQjOEPVSe86HI%2FPpAiEAypVIKFznAUa1LesDYMhO4C1bqLxFg7wZeLyDsmDNSGYqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPXXQ4QsJfj76HrOCCrcA6OeH3%2BSsUNcEqqPlmNG%2BDackDPhgK7qFVP0aNpuNmkt1FL8ekfBJB6Imbw3xoXHI0W2Dyoit9Qt2BZrkok9K4DSayJGX8rL8ovxnWdMSaffSufHP%2F235ROFEWA%2BBYUzSLY4bT5qRIPb6554RdAmJeeUcS0nn6umESVG6zvfSs2k0Aue3UkNPpvpz15fhxHAUJ4pd4EEZ3Wf%2F2A4gbbjJB47NnCDtXKD0k2MAPAEvOLYmMKtizmzZICYmqDHBctEWE6Nm5wA7gu4Q%2B4yDPdqg47a3W97AforcglJ2tbjGJ0uakmcQlSrBwqrrec10ipSnP6%2Bn0mTfX%2Bxdy9TkSfBOhUPzJJsnzYIJd89Pkk0SpCHe9kk36wtMhDp3MRxgirmMmh5aYWaShm4qecjEVIWPmEenO1qGxlVbZY3%2BxcgRXFKU7HdACHWXpKMv%2FaV7K3IseDS0ozc9mX%2B1mOILUEf10uMOOs46XjRm%2F0jW3K6IE6TAryZDvM7VdPlPhyxWsb3XR65tzBedugbotoKyRiuc2RrXLiHVXp4DnucMHzD0CDK6Q%2BCDb17BnKHn6qftEXC%2F9j4qEoaVSXikmzhZMLsI%2BYaIvlQv3sVD%2BRGn%2FQz7Ttl%2Bn0VLaPuGfxurzGKMI%2Fb070GOqUBl88nJdEfHnT7INkh5j7VTRvXLYNTN%2Bd%2F%2FNrceO4vFg%2BqBCT%2Bk%2BWaDCss03liNu17LOTE5aNVXCePcUMnyoNTyARz%2BjxsGBlPHy0AswVeTsnlgA5FFXHicWPY6CPn7Af1clPVGfUgiXn1FZUL1z4j2p1i8qf1gvvJ6jYpqK0ivnZR0cVm8ioTk%2Brocu9D%2Fr6Zg%2FBuqQM6QaF62G3cEmV7qnQi%2FAJb&X-Amz-Signature=b62df2b4c4fcb576439a27589429710e32be832ea5cb82c4a7162e3a57993176&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
