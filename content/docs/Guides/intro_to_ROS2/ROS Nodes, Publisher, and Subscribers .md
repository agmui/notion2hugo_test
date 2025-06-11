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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=578324fef81eaebacab9b67cd02d425dfc725794a61cb9c24b16d981eef22930&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=72dccb13bc876bb1e6b7dbd90e9fd821180187ba85c58f43cf6e36817d5cb4da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=4bbc5f6d6ded5b2c8fb2a170e18fe2b9244339c0de2231010283e959caeef183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=22c3df119633d35ca68351d7192b39923793161d7ce56061eccee523d9ebb554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=25722181bbd4ddf3a442949349322d101f84337eef506e967ad39bb83b2453bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=2fd33d70c32b00d9d18a9f1fc30ece9bb110bcff174e1891054fd83502600742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=3ece03e917d15412f422688348d33880038c3921608c90ee4dad490de70111ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WUJX7PS%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbZENCh%2BMAjuPNeCcbGln7qbIXMcmn2zV6uZ5o9AAx9wIhAKdn8C8Y341V%2B6HAhD6lPRCnXcRDolsKgJYeNuyRqvgkKogECNX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXF9fuY7Lkc5pBjaQq3AMPHaFUaJt%2B052ot2CQE6ggD%2B%2BK169yqBqS1EZaYgYDpNM2KXeA0trmpPlskk3Xbxz3c5oIGGW2pGpzIBmof71euJw2%2BaY4DyuY2P9url%2Fr8cDoZyHdLaq81WD8AopIU%2Fg%2BZKhNuUaxRAeR5XlMzr171RIm8%2FFESdJCt%2B9IyPAwMPoM8XStbCqdR6jlGxgyUpP94ccSE8VjdLXrxVRfwAiuQ8on40TaqgkbadMLOhtoVZ8smBlauMxwub%2B%2Bi2Y%2Bf2cijKeJ7RCM1WmaiAQGLX0Ld13wPxaAHdl3Qo4JhggkIfgMcqSMawu%2Bn4KQIYKWEcr3Xo7i%2BG3cSLORPSLcuq1dvFEmljypqSD7sR0Hto2y0ARkR7osPyfsKn2%2B71uVCgppz5CGgEgS5zCVx%2FcVXS0XxP4AjlxJVcHH9B8DsMKs4HVlN5J64fLzWkABf7chO7MGeUe%2FfEQioWjVI0u661bN7LTMHFPeQAqca9ciGIhuVLyl8UweNMcFieQXvNWeyq7MZbnCaDEYacNqKCVITki8h77Dd0d1lkqV8xhxBw3JkCp6lwBHLJU3wvj2CPwm%2FQAWUxiqOOQGWJpN2lZRYA9h4v8CWBqG%2FayuADqJsvfa8PFbym8WYgBJH3MeJTCE5qXCBjqkAbXszUQsN8qSaRO51zt6M81PVMAmQDhKue5dwyx9IkpDMaRSK7xff%2B84SnG8ZmMazCysms6LcYbfSemllS5V8JYcwTsT0PzlH4FMN5LXlANbgjEok4weAiPCTqAGA3U77Bbzxx%2BgDLBMuAM4SJVupK4FaGeQ0LMRx6oZfvkcSze5E1I7XVa%2Bwm1HiNqxshkIhSTN%2FQjQ%2BNa8OJCtT5Y7INki7XIt&X-Amz-Signature=d190da3fec3f0e5ce45d4701ee732f1d0198ea1c03c231e54ea2fe054dddc2d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
