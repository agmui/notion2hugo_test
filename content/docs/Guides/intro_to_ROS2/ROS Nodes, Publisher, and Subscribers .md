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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=4bef28f32f071f08e5dcb86928b0fae2ae3196c67e38c20a6d9fb3f78f62a9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=822a0f169b16fe529e35b81c49cdf73e5eee22106538d76c943d8dd726ab56de&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=7b06983c970efa2cbc5c8fe8b634b3df2d53a4da98c7ce190588261e10070857&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=da83aae44b2e4e41a63c7bc40d76a2813385135101479979ee48711c0d962293&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=4ab6784f78de896aea9b4a85cb51c96195c837b51d82a674ae59b6310c4399ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=813ed92bae2f4afedef0d7f0625aa6b4a2d759b3070a2cd35df5c61362534e11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=db76b758ccc8ce44f54920a2619c7cea11bac4afeeaa02e7ac1779bf2e7a05b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6W7ZTQ5%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVEiIjQGBnDUWlabjy11dPzDt%2B8a1oMjd3MegpDtopHgIgMm%2F9KMnr%2BQD5Sflo0vx%2FHzlLZieuZcwEkBokdNTicvIq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDK2QQWefFTrvmMdAfSrcA6p54BIUzHxNUXxJPOls2ZMygqjphEiJU4Bc8FhYyTiWLyfg%2FsZqwiUT%2BHpZSp8sE%2B6RBcF4BEGhB1AsEAIqQXok2J6Jo8Nh0Vlkn%2Fl71JAr8AmbqwriNKshTxdB8tqfLy%2BjROlq0f63tuTImjt9OQee0PSX6oXWWAKlFKn73xnsFGgl25k11%2B%2BrwF0E0cZl4d%2Fu1A4rY1INHIaXHD5cc5eB9bs9RK7TmaFQHgERTTYyM1crdPOArmCgZ5TyBNVWXmSNc5VB1jPAaFz4hO7D43MlTBAr2aSPvYhlbk7Tc%2FbNYi8vy%2Fe7gwnKgPf08uE01fZ%2BQn2MTWXgpeBAgnguKRMBSHmWtDy1mAm4Q34SNHXdMBOThVOWgmoEZWp0flNSK0JqUq1JYpnlXCIVW8sOQXffTabGVDb%2F0dvGx9i2Kja53rEITo%2FqHI51GfOL%2Fzbh%2FK6ALR2%2FOl0TA6OP7OtJi576NWQTB%2BhpdgY8fo76b9xsQ%2BsVe4VEVaz0I6aZTd9YlFfvtv1X%2BJKZacb5pWH7bmhbi10qwW1%2FJ1x7KMwp4WLJyVe3YcZ6o5uxMqTCPjwNwFGRrydncdFzJRiUlr6c3KwKY3Ckxj%2FpPrfGQoD2YrgTnLNOP8Ob5yvE7DsOMKq9hsAGOqUBSQlCGAX1lXYY7wLPQimAQOGLb%2BQh692wl8dS3lbsQGk5wck2kXm2i5zaMaj%2BPN1DPRdXg6Ns6VthoMOYceI%2FGNZ5CpTbUxTQk7GUNEkV%2BKKBqELKOqJWqQazEonF2ksDRlDvZs%2BcmuFzu872e8SklqSrND2rLUyaU0ty0ZHyqcPU%2Bs8S6vWTzKHXNMg24aYX1Zv5sBDA3YaWDyisQ7cAgw3Z%2FZeT&X-Amz-Signature=3629ec5ebfc9899f08371b407c5eb62ca136de0bcc04272c313d80d1a433ae41&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
