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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=ec62c14cb64561638b936979b334945ef89e171878fe4136162ed21931d3a87b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=38eeece33d6f5c2e99d8845f7e90d812c0957326379f1b7e85666c5b6488e724&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=3d3edb1376513fa4dd2f71e2138abaf4254f6aef4382de88f011d32085b6fd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=47803cbcd9eaaebbd7d8c01cb5101a98a80389f2cb22032a7ef70085b185bd1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=7e4f23ce4651604bc109d5ddb00a4c5f7e991f0c48e6709caa35a03873d6d866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=6597316fc1ad80f20988e20bfaaf9ce3f90840eba1eb78f20cc152fd26faba55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=7804faa9d454453b266a4315e1e83af0193f9a93cb448452e194007c9b995e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBBG2PF4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2F%2Fz3u23GESEJxtDDAeMVcjVJF0kNrOK22%2FfWOaKOJyAiA5ngH5OzHHPDzjNqXTD0BixhUnUUeRYuD2o%2BuQwUiukyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMItUA35%2BrhoLG49KhKtwDxfjrJOshSc%2FlUCydafW3kxCjqSGz1%2B1RjnkK4diLHwWUZc66YN5keQHHMeMKBYqTqj9o7m6xkG3axy1%2FLFGuzp2xjL29CB7RCrxRvEpys%2FU3LEgkj1VVLm4DkhQiCFte4aL8uke06zpOG2i3BwEQXmzm0trvs8CUtIb7zqNOqH59zbhxCzc8%2FI22yQV4D6GGeMpW%2BSxL7ig9Pi6LqkRSxiDQSUW5X%2FcnL29rHmYO3ha8ejYD057g3ONd2rzgxldyI6s%2Bl4648dCz2Zh5zwumDThj5n7yhzqbA6beW13Vjeh%2FdIUZh6q5hMJBZep%2BQDyKqWy%2BA1aZlN7mklsbCwlU2oiCRYDRYej9jy%2BEfM57E1%2BH2LEJic7xktYfacci96JJ76qv7oieOUmVNANEvb%2BQex3oRyUWRPE16LodWra5s%2BtlnUTb8iFS0yiEBuHj5rwUx6LYykG81ktMVzwHx5vG9TJTzk%2Bqhc97z5ikGCcdTsUK8y8FCcGLv6pY1Y5HLFSuLhN%2BByFoaWBpoChr1HpjQdu%2FLFFp72x99LTGilA2eZhsfVjugK9xENnnIihB4PkedjDIVchSDw4mN51yyAxBWPPnKgbqV%2FGVtEPILrhHFyEELgt7UlJFeuCO%2Bgow5qO4wwY6pgGlVYzw5ZhtHwL8UtbC3KW1QnzinVSSp4fEXKBz9LcUz5GsgkzoTGUwV0g9KX4M%2BI2pRVmdLQaTPgFhy22Hn%2BK7F7L%2FR0BdX7xp%2Fe%2BV7JHe7BpioH6v%2F9kJtYAK9bHamNlOl0JHI5qiTdVczh3NlkCTA%2FH%2Behk67ZICSc5DuOOFpxrGFD2O%2BvAzLQ1DSoQYpXFJWqeFtzv22xphI%2FwUnd7LkFzK64rw&X-Amz-Signature=e28817198adf1ea17f86842bf7abcbc77702e16c3e426e334ab6d0448e880258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
