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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=1448311afc0400abd641fc07cac73dc856997d67ea8a77b3ea4a7311624692bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=e468e6413916ff23684ff182d4b2aee8c6fa524ed66a14fee9276b6bac85edc6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=ced9f361708cef8a6f3644068ea2e76b9f2ff4fca8aaf8e3c95b7f6dbb8dbbe9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=2e36e82fdfa63ac79c7dcf2b11cd60a6920cf6ed8bbd45f6393dee8c458a9763&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=e64a3af974fb1e4feb5804199e2ce232787dd3abce00686a865596a3edb749c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=95e9072fdd8fc8386b99a95c0dde8c66070a28e5f766e518878e59113b44523e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=a9b552926737175a07ed5c3ea2f910be898a4371c8f5fc058bb0b9e2a925e6b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46624U4DY6Q%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T040950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDeExX%2Bk1R0ZSPbiasYEfaPweYZxui133E9b0HRz3fHgwIgO5s2nsr3EHymy1lJq0U%2FPjVCy7vlFJddeG%2FRckV%2BICQqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAW4MU%2B56%2FS7xymk7SrcA36qpGC7lTrXVVf7kMnN8Gl2vw5vHkYVSVL6KOK%2F%2BUvQ1bKJZ72LskxSdyEdXc5XU6KmOgVc8TDfQZAHDEQMJVpprVlN4TFivIMeOuY6HD2IyS5fqjdGyV2bWZlojwRt6smFm1LHS2CW9BKmOskR92LmnLMohOnLN71Mqe5dbPTvkdMkUmDUT%2B63lfYaKqEuZaipgOlSTDIwmkessO8q7bogj4d8FABVvfJfqOzxLDKG459UhqnccgYkvMSDTKaLbmh8hkU2IpQQSls0aj13Wh%2Fyw10%2B0NiYG%2FPolNzmMeWBLj5mQFdYnnajjnrTTa1YCEbFl0P1ryFuLSJEDr2FOEPi6Bo%2Bfbk36NVx49ncFxO3epWq6Rz5%2Bk40jkyznLZa%2BuQy31%2FEOlLf1hXMkrFzrRUkXfQTjw7D9e7uGg2hgVhknjoHRuQC49CnKUixPAppN092AbK9%2FJ%2BOM24PzD3LNg%2ByKua0%2BK1Z%2BeIQLwwNqccu8e2QQEj%2BKQtHqzm%2BMaJqYBXf1znNWeN2L4AqGsjx5E8zbX9pSVK9HePu3Ek7P8GAugYMPHXth4Px9TXQFBjhekhhIb7yM89rkgq6cyTMJfJYw%2FwQUAnZ%2Fmg2ZTi8Mkv7YKaK9gvSG658xAeEMPPr67wGOqUB93UVZDIAzupcEODfTMi2aK8zyPjf4oKXA%2FfowkiThiZEJ3Jgc%2BubQG9AN29Q548BBmgS6N%2FgSdZnsM1x2caeD3qlkXBEJqWYHpywwjpfMLLErdIxtnCTJds8SdU9DXYkEgl2BCUcHWFR3CowGGPieOB9Iik%2B9c3FPkR02W%2Bw4UuKKdX2jlJqLkRn3c2YVA2eidCfpZj7k74J1wXqD1DT94VtTDN4&X-Amz-Signature=42235896fa31bae392f23aad400d690b587c4e5b999b6087f4243f186cc0441d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
