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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=36f3270818ead54fdcbe84d2fcd53267b471bccf9d341d9a696b4bbf5b1db68f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=617a2811d910d4d0cb690d0e437a103686c076374783eaf96afdd0c36e10730e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=b399fafa7473253b73a0c19181e52fa950d6382e1882c8c65d983258644fa4cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=a97ecf8507c53d066f647d89832369d694247051c804ba92e4e950b064f10c32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=61e181faf77e3deb1ee331a46e0ce1a26b9249537f6e58aac3fa5ade50606f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=35cb5c574e088f32f5d1d2e48cd6b22c006be13f1f8d859ddd22387e3dd2ee7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=253e6e09fcf79536541d4ebe57201d65130016ce3ebe02853d33001b9315d5f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WXOVBFLM%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T140728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6CweFK7gR4hJ9Sdvr%2B4ZLl30w5CVmzpDKI76S1GLwEAIhAPp4iZ36fjheXuXo%2Be0gp8X3C2VrXWJhE1ggiih0sJoBKv8DCBUQABoMNjM3NDIzMTgzODA1IgwKIXRVWhuRzNdIeNYq3ANkS8f9kY6w%2FnTvdMCFd6anHbHKQtmrdV%2FyF4VDIdOZEfB32zdfzBES11jMGfd9we%2Bgwt5oOjwfQtYnXpv%2Fx7CJ6VJZPxTkDdqfNBh4M09ZyRYetdf4J6YI5wXJ3DrP7Iue8GqhMEJ3TD4M90AqCRsVhDweU5PLyhSDxmJS9amU7YXHqJ%2FhbM4ZdVP2eaYtRYmLn09QlrJEfWO8EfOGv7gH9wAF%2Fnb2iSQI2UsDfd89KV%2BYr1Q2cp%2BrfSkYvYMY4z78%2Bd8JzA0qM%2FUkyLuT25B69LW6GX3D5mV57Xhrq3QIS7QTY675tVytVx2xtcEG%2FisEBC3chFx7rByotgBWKkb5ulqog8%2FsRfbvKsgZ8DFPdo2PRnKEYGsnvOb1q0RVveLgfgT11PYO%2FC5ohHNu70yR5jYITZg%2BsoyA5V7NoR74Xn1m%2BeGHqmH72QkLadVb%2FoKUn9gnpkTvPAktNmNmLy3qokm4VPRtI96VQrZFkTaO0iLYkGJcE9wcz13fjn34L%2BS6lZzevSF8fgxWjI37%2BIuBzvL%2BKGjkJtmz7uFfxhdgnuvJ231WvKrm6uu579RD4r%2BZ7XBOdVxCNtiCNPheVpYo7Ciciy7NMQjfyvLtKgSRqJTApx20ePtiPfnWyTCvws7DBjqkAZa8dpBbk0cP9P67cIhngDBE8CYL2o8B5GpP%2FtXw3i%2FXQanbDqSLrNwZKJ%2BJrgAPWwWreXo6eMtGY5pF0lfVWHstI5O0557vhT3yxPx6mySyeo1UQUtXqOi1RFHadWiXxCve2r4pdEIoDMrt8DvLtLlcT5Hb91ZJtc7b%2FR6PDkUSa8vpOM1735NnoPgziSAnzOD5QZGNCY59fRQ4XJXjwuiHSZj5&X-Amz-Signature=84761e2cfe5e8de3fed627adeec3e9528ae0f227aacc812986e7afed95f6b236&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
