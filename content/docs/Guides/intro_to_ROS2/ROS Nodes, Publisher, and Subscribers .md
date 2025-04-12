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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=daa826ea4b790a9bfc843fd6d504b772b913e603bf78a13c3b278bfad4f29cd1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=31a73a53047df9ad941c2cae2a8f61bf8a2c0f7d180b496b0224e0e7385b19b3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=a00b31520d4dd96ba7db9e5df504433669fbd975fb97270c908fa49190f55846&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=0b520d8d6958516a458cbb2b4318667d7299a3ea9647618193e8f29ab17d5aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=8b1d53c7b7d20699523186dbf815ca26257c7104feb756a359a86517ca089ae8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=2bc77552f6c6e05592fe545f7b5782868309d1c1b5a85f37c77726005e051e6c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=12377c0ceaaf3537c8971e9e30ed87efdad9318b59c499cca4e328f555ab23bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YW3MC7YH%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQC2slKZ3DeK6N0e42d9cSg5gltl6nhyosPrqeJLi55nNQIhALMln8%2F14gBYQ9QcViwE1ZdCNNaAfJ8IzWEvqB0DBbLmKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNttCgFX2oOibcP60q3APAc28s7Z5pM%2BCgTsLWE5qcvP6etkgQeVLEQvxdF12LVHGu8PlnHgTVa8b%2BqZsrVz6%2BmhkDlO4g7HfZAeKvuGbUjuMcaZhTJpUcY33JYY18hn3sHJj7jIlKT90ld%2BrmP%2FRth60H5vWU3%2BLFuKCcsuWJ1Jpd2hCZPoGBNeJF3rjVEikbiOSNsGWc98aWaWAZcdlpU6VQwE1i8wSA%2BMnvd3wYJQ4JLIXRD8mNXGqictHobNeet5voRuOx5MMWDjwBiI9aQeV9%2F4TZvWdIvbtHTgCdQRIdar%2Btxm8HvL4sBZCFvIlSJajlE%2BK9AuNxKPUer%2B3WQqZhWPCyfclu9yAvTlFiPQpmn3r%2BQM1IlDVaZ62Nfe6T8CQwh9ySFnwUXKPliGjjelKGAi5VWtQvfyqrkD%2Bc8zRE5SBFCPWdk5l%2Ffy9eVvkh7wpndBxZ6GG5iHLyuT%2FqCG1rFEar%2BDvit9cZ65HIZYfbhjFj%2FnHNiTwitjYQljRmLrlFJVlu1ZKlrEPzOY15GRJ2j4e6Rtc7aH%2FFiKESYds%2FPlC%2FC8if%2FRA0woBSf6lkta%2BXx2BfK0%2BxYQFo8rKF%2BjBI4i7V%2F56s3hmrE%2BMsv8OKydRX%2FYstNaiR3yrjEZRZFNiz%2BwY8Fn7UczCNqOi%2FBjqkAbSDPm8QrFfybur3EXIKdBklop3grNLog%2BPR9RQGIhyzohu3JeId9OdASnfa97%2Fded1Baq%2FnKgC1i8HOtb9Yrcd3wJP5A3LeMXCRGPKyaN3GjZIbepBiOqAJC3%2B0dBH1w4mbh71VjTJZVhaA7JSKFnDlhNOMez%2FQEv4RJstw3IlioPSfShN6ySDR4YNOrbxIgb%2FdexWYgbTcDjaawKaumfhHa2il&X-Amz-Signature=6eca7100daffc2cf0a8c1fe3a46fe459ac782182f61330435419393b4cf1049c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
