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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=277f69a38b51844137c632709aa751ef7a4ff268b08c0117afab72fd105ea579&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=cc6c34fb40c23f93bdf6b63476c456cfd35a5a395bb8b182b8126e4b5f5e121b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=4615a808cff1106e49ff0d9c6035f0a55ed43f6c1f6c2695505138d938e602e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=8a90f65b6299243bae0f45c0ae99d6d1e7dfdec611a5f21d7878cdbb556380ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=9720d8a15162f6ca3a95d3183044ed965cbec065d6b4bc41ea3f7b5ee60e0d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=4d29974acff1491ce6bcf768a3dd915fcba52c8bcaa2f92d1b83517735a523aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=3f81e6b4eab45e7133cac26da093c5682c767bb580db2291740ec2a51ef3c7f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUG77ZI7%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T132527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBy1fcnaqALCu%2F%2BtfolRevzmhRCJbCtJ0MQLEdxaOXrhAiAs3rouqGXc6ouF4%2FFIaCAabS6hj36zNKl5ig2U%2FhhBrCqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXBaPOsQQdhC7HvlDKtwD0QfWFoy599PjyYzm%2FLjUlTq4ZLpSuYd2JXMyuyTtLCQ9uzAaNWqTARzLQD9WWhdhi0I9U0YRYzdLCfRqYLzH3bsN77UZRucC%2FtUnpW0cCzG9oU2dsLjVtRfmVVVVLRD1HR4G3WZfxFEzv35k2fAVc2AJAA0id20BwYdgcCppaynsv5Zdcf%2By%2FgYYGCzcHMrulQ6IuIumr10UB17M1zWt52JLYsBB1j2yLFt1E2MehUqxupyPpr4PCgYwPWMqVzQJKE6vU5npYvzN9i9VyWr0Pudxy%2BR7LcvWPRfAYCbvFAr7Xi1RosTcDS%2FAS%2Fm5urxQuNEs8IS0mvKOdiKk%2B1pocNRSOYzetWWzcTOBdYBIwZNGkTsID9ewMMj29nbFRrFmDp2xMHeV3udW6pb%2FBXZY8rmQeh%2Bie9vPrKeuIiPs7D%2FmTOuYOnGgOTWCqKzvSUPm8VpezRGxHxnFSoWv9sNAs3cAY250LUjR3xvP8nVEEH5AcaQJMYY6%2FvvfLu%2BDnm1OBK0naQyh9X8Is1ZKZAxC5aBIHBjB9ddPJi4sKh2TyS%2B%2FCwC18SftO0ICZ%2FiYGErV9eSURIr%2FXoCuktM4AeM5xYlE8K6q1iunBySqH0TzuIqlriA%2Fg4yhv9Sds9cwm6PDwAY6pgGZ84TVe4n3%2FXOzMp98XaL%2B%2Biz%2BnBnmT2JKOVypHQ3TpJCTdOi1gw3vjrfYXqnaSZeO6JiFDhtdlaN4TIdPOJAu6C8BVNnn9dmVajXnijhs7X8BUtmNHHilYrx9%2FfZCodX5O9A8JDEdn5QdCNLEWL%2BWWrA6Lb14gzjWeL%2Bckw1Ypb8tCFYMWPHporB87A3ajTh4FsHt7%2F5Kf2BioXkzWwFufpHgDjDA&X-Amz-Signature=d10f4c4e2895cca61b7cd2a6c768e4fe4a50ec6f0775bca178e6affbff2ded05&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
