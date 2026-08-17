---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=6d35515b40a1e379383f4dfa9d5d3df90c3600504b76b9fea38c6926fcefed9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=192d4661c64978988f70f8419463e4f1866f4478796e9eccb174b3e046142cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=a1b341aa3c6a5892ebb04d4b98cabfcfd9077d2dbe64f823453d1ff8b91732d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=fdff3cdc0e4927fc03fbd8239a7cf7ed89d16076d53f71ffc7e106cc9706d7ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=272dcf0bc81542eae7737d101800f2c54e1601066a359f567bd3fbde0e3e31a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=92e41200ad7c4d47f661c2e9530572fd27780f7e7d0a06a3a5e3dde15128ae7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=ad2d7148dcad33ac717f4a418164c650e1abc0443845f9846ce6b68caae72e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQRSJGYP%2F20260817%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260817T011427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHVYW04T9MKc%2F4AZoJMyoZq%2FKkzAF7qv5%2B3nVUpGF4FbAiEAzjaj1asob14YEo3BEq3x%2F3%2Fpi5lHqLcV8vELC7eW5Y0q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDNZVnDC9QXUPg%2FZ5RSrcA7xES0hnBhjx52nooDl1RB72OrEwRLl3G7N5o8y7lp%2FEC8ed0OKhWCFrQ5trwvx1L%2BLGl%2F0Xsy3t5cFWvJvu86fcCXNrRRLw3jwVMcrvghsYu0MNOMpvii4BUNmndr0GbLecNGAcfhSBlVTejWL5WmaZWvWvPBZZnvkbwhj4K6ccVP3eB36M91agCDZFm451%2BgBAe1%2FfWOXWYdjuEFnw1ncAG14KOyM8tiDZABRnDraCA7sI3wPA7MJpgeRUiRlimShgULfd5HJch0zNtXzIQhef5Fc5U39ffmoGz5BIm7mgUKzTUsNm38cwucq2QtPK2eldPXAJNhU7ChI6LczxM7J8e68U4zpejXoGviHa7SSAj%2FbKksFngi5wPsQJKugoqP70BQPYaG%2BEHgpBb2Ww1k7u%2FyMKitFZw%2Fb4ReMDCD7rmSPRsMibfBXiNaZqL9WZ0xteBorLOMR1Ii%2BYKTTAnSUCwmqhYMJD%2BWFbIijH7tQe21BJ8rJ4ziWvegdGMqIQ3i1cZ%2BaqaoZ1nhpj%2FjznPP9yAJEBVdAe4%2FKUYFjyunQHbtwx%2BOUxoqIpiBWdml7qq%2F%2Brq371PYWHJrmP1x8wdYDelwEUs3on%2F05fXEhcJqYtrVCPygCdP4aOZp8RMKmridQGOqUBYdUpJd4IF%2FUbrkA1S2OAPg%2BIFmDpbphaccCoFczfzgE2aKksXKJVoAMke055Ti1qMbfJ5%2FreClRl8xdWSToDMEh%2BUwB9rtk%2BC9x%2FJDgdV0fX3i4SZUWnqyfbDlYTNSuiLYRcO7RXbnDUBgqX%2FUcnAlSyL0YM%2BTIdAACv%2FQxt95LhSqVAE%2BRRRqO%2BnQ3WN29STNGcJ4aRAnhhCufnV498MLbzP9Js&X-Amz-Signature=37e7dd4af2e9d69129972a50abec9571c6cce540f0aefd65b88e6e56005c95b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
