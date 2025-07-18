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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=90197000675d1e19d152408e386cd084e71b5f1ba9cc6c7dddb3d3cf90411ea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=9554901b19fbd540f510a80b386f47f1ce01b983385864c4521313c87fb508ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=3ec838e1b5857d30690093f5ce554e457dd0c384febe6d3b4068290dd64647fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=3104d361855861b2be313e461b1e91a277d89fed65b705b8fd2ef878ab1f97e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=cf10babbcb923f72dddbf23a9eabdeac7524f071d2d566e5a3b32e19a130686b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=b96688fa743e404fda9b3619b6cead9e5d091381249e85e41a059ef454443016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=c42cc03e8bff1ee93c42a0f2e071934442e75634f782124787f74366bbdff964&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSOWECJR%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T091413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCHZp4A%2BapuIYaBg8WEwcGu4Z3KGurbB71o7OJzkGPSLgIhANZfm98P4lyAg5c%2FHtcyigaUTB6zzyfzkbYhe1fBILE1KogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgysvishwW9HmjBFDK0q3APfNQPSOu%2BqcVeNHywSfaZQ9ijuYOnD7AeDpn89Bf8y%2BSpWDs%2FfnJeWzULQ0HLD8WQ9IYm%2B8EguQQZpK%2Ffm2%2FaktNldm0QjxlJAPVZ8aZnxIVSY67t4K8oGAcTSe4YUk2A%2BNjyftmGkJQxnjdm71siuRqhOYMF60%2FhW8XuoqYCh8d7OEB2Jg4SDvqMxTco%2BsYkC9Az3NAa28Z1X8NB8i2qRO1mLoyQzDIIr7reLbyEZNu33nyFZgI6A2iE7whfEK9kZZbr5s77A94b%2BmLRiVbKd1VSAoqnNeSwqy7df4D2zDgvu%2Fgpmq60N7CQAmuzZqZ2TM05I%2FdNGtZJVyMhcFv0yVhQm3uvBAiqiUQ8EItzhWM4PMG3X%2BX4SWI%2Bi%2BBURHqIFAXclYieJqQetOiIJc4VgY23qEfIvmGhgtKC0%2BqrX3PlMC%2BOJ3%2Bkk%2BWs4NhwppVlCSV1OLQBGwtkNeSIB%2BtdBnSJ3K%2FyztQZqE6SUG65bZMy2T%2Bl95dG%2BxGq4L54ASfEXRLQKSqVfcpajQKVQ1ri0GBSqWOg1IvphLETa1WFMq4anxAfwa8jo3LC5sGMqRnUZ43FKgwIgiA4fWfCp%2F7iDXMK3Ectz%2BGw7fM0ErQMoCOHwSAo0eQNei9FcnDCX%2FefDBjqkAf3XO7Bmo3hzsPkS5MFvZ76%2BAKFYkpk0%2BFWLBWI%2BSa9XtGaGwiUKgg4oL3MUlNvxdc7LGVtq6rLcRmAYrR0LaiHSGreE9c9xiVoMYxRf8MZorHK64OmcuNpFoNYrIAI5gBJyP9zphYR%2BMKES6%2BvlDAyMHX0%2BLjwNZasv%2FnEySdH8duENWnXrFsRjB5cL897uGIqxm%2FntE0B7xS39pAQhSaWm60AR&X-Amz-Signature=43570fda47e49adfe0abe86feb1ad2511732ca298da74c445538f12bed7fa831&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
