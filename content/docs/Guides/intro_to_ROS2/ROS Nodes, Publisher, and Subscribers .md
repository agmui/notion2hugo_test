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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=e33985ccaf4271c353a22a88d190c85dc586f651972e2dcdbd09645a45c0fe00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=f52e235d710ca8a3c69432235569daf97d89ab183befe99972015350a494ce62&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=3b2e2fee6d504169d16953bc6008c0bb52dcea04e2b78ca1f22af83fd664898d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=acb53659b18d5e8c619de3bf6c0e8c27b0cacfdc05f37dd6cf2fdce7c299bb07&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=e4f62011cf8480fa59da69326460f6b27a311b645cd398ab36253c9194f6be1a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=8acc8ae21096aa672a673a572b9c3be24c834cef9cd86f30ee770ff2ea994768&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=d23c9f9c06516b773728e7e85eafbbf8e4c2a8ca6b5908ed0bbd25822c73244d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673JBO5QW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T140844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQD1udZm6COiATP47kd5dg%2FPWJOyLcoARI5A7d0Sht1nvQIhAKb0zSQ8q%2FuwKJ%2Fhrip04%2BCS6foD8EoL37cIGuQLpPHuKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxueUbA2HcdfwEEW8q3AORXK9yFVeTzwfiGCQ1RT4FOyF5UHKfvJn1%2FII8qlSRbW297g5mPygmifZzzv2N9oUIviD9mItLGWiu0GC9YpUoxLBKjREX6FyUxeiSpRT45DweOG2jgoHOeNS6w37%2BjJSe2CVNqY%2FGXn7xpc1ghcRYbnKhG7s1Den1NzZgbt1BA4lXDjTj2Ozf%2FCpYmsgyIbadIcXVXMLyF5j6FI049S5k8uhtzb0VZgE7FymH1LiTmjP1JoULxxYDIlSs8D4MtxR%2BWBrt8vaAeKN97hFub8NtFpogjzowKsIXJHnMqucCZgub60OBDPlsi8Hoq5lutn%2FeKsZvKJJ%2Bh35oy2MZgmYwicB3DLvSJjE%2Fdgca8CsfDsMpGr4%2FtOW96sUF3f20youx%2BZlE6JCY3xEIlT4B8VuA3Ukk9270eIEH042IKmc%2Bz%2FEkfFXxp9rbt3YfDBa7Beiraa4a4xEHozpI1tvD3%2FiyY%2BxEFeLduofJQrH3IKUWAtBHF61O4Eevn%2FzlbeZWeY8AoEdFONuTJSG1mJE4E%2B3L6sATYkEZAZNIWwkTZ8P84MD6vRoiuMW%2FduhJuDXl5GoF6hTIQfNQ4KR%2F5qBNe4YPpTcS2qyTnE%2BJcQaf83x68BBUojYomRD9R1xjfzDcoqq%2FBjqkAdtoiVP7U8%2Fw1hCtt64PPoysXzCbhG8RdeUJm5GUGcJoxsagn6WNt4Hn5w2GdPfcYhs4I2E0ub0WrHYL0DEwOKi5nzXOwrqowC4%2FLf0p5Co5VTO5GkTuXv9AaPYILgEM3cBStMOYbnJ7FnGtFJD854X4kEv%2BGSL1ZNe9GuFP%2BA44vpKXhYHp1pZdQ8oWBqiEqVUgRMojKXWyNedm2LniszmLrKan&X-Amz-Signature=366d11457b76509c0732361d5b843b48a51b33bc73ed37352bd1c6dd981d1169&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
