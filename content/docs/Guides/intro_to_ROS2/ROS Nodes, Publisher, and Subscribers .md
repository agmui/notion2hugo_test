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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=2120dbe5f00a5354751304d8ea60120789c173358cf5ea844b4bd8e465ad42a8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=f4bca70bb0ed66f3d2409ccd0d026e1e914f8c61409ea0403ff02f974c7a649a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=efd1fd5eb08e20871e8ab99e0ecae6c5ea066e4aaa8dbc9851f628b7dfce0073&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=843170efb67e393e32902d791f8050011f72b0c196fdd08808ba2cf01681788c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=d5da9b922a5cb550c355a75b5f52923d2311c330dff163c31ed0d36248bded62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=a1c220c0e11cf674e96b46ff7f69c31485ff8816cebc6e8528329d07a7271153&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=799f9570302fa24e10450f8c3ba23bf5ba02d3a0cc86688f230c6f8ac0758a9b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WCRMJKE2%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T022018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCIHTVh3SA50KJDSfehd%2B57CRjUOLi%2BYCLiif2v2X5W7n7AiBYugwT3vVCONR855DPXs0LyiYgvC%2F0HC%2FFzOdEt1hKJiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCaGn5imrKB0bbFA3KtwDF6AXVMGoSmHsk0h1Qoq3JHW%2BwHqjT6mIKZEvmiZPcwf03v9zapnRYDXxYCiKbwkXn89XCGgTxCILGBGG72fiXNUCQHCsKFuWAoR%2Blnj8UbXGMUFnZAIpRb0svfySaTCkcwS9gQV9KtQJB%2BoK0hd3xPA5guA0os9C5Osy0Yv5US1Q0PHIduAVU9UFdRqTWY3O3KjfSZaRGetNWqYHVaVjEhK4FOT47kxcwnQFHe7WAR8z%2FFvUTrwVlMce4GDq4PDG81lj%2FCkQ3XlSaZLyRE%2FGh9q0sqRVLY%2FInV2tXdUjEvUb5uwIIisuqs34s%2BMjoCiDhHTkq21Icxhw844Rcg%2F9jEs6x7DO52MwVdCcli7h4%2FhKhVhpt34C7TF7oYVBYVeegXZXwa5f0OAQCAIJwW%2BK32QjzpizdiNZ0S%2FxV9FX9fc4rb8xlfAUR%2Fk3R%2FGm28b%2FPYU9XVVmGkjyAb6ESzzW60un4DOTC11U6SadMUuhMl4V2EcNu9wANphritBEt4%2Bue4IeAeMWO%2FuKUYOEAX0vmo%2B7NGyM1SFIdjz8qH7fQK7RAkh%2F772hnbaSKuWFPX2keg8yYj0mT2rf4XwD%2BDjPRsdHDH7EVTcssLRpCEi8LtMFk0PjynEmidDsJlww%2Fd3hvwY6pgFrJOTDQmz2J8XK2LvCpZ9PobVSZzDrVbsAUzrvGbPPFXTFuSIaErmF3sBcUgxmLkxYKUSFv%2FyUTZ5NSAYwPX0UX%2B%2FG3eHRiz50rEr9tupfhg8DQmjpxm99FzQzqv2AuQ5INktR4S13KH1zMEwo6wkjMQV2pQAAfxTVQDQvcnIHyInhI%2BL9HR8Ej9kBu4dbZCkjtqAEmWhJzWJao3%2FkXVv53GcvpH83&X-Amz-Signature=0c1ccdbb1f949211c34f13a3d6a12d9184447f89bab8f02ab12edd8893eefba3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
