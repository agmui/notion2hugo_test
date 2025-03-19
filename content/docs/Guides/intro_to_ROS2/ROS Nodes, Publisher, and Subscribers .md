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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=7850ab97a3203a1739f43cc9da7cac6132aaf4b7aaac5c95e7bcb9b3fa6d48d0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=484c26cad89d3dae772343eecbb953959cf8faf840e9815f933c36a22f88b222&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=9057b505f3b7effda54b8eb22e4d377a8ee64598ff82e763755895e4238f2344&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=c23bfc99f8b693bd2f82f6185e6f9ce4eddf0de6c4be606861adb970eb8c084f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=c8127db66174b8c91b2df51735274ea5b9d9b410201e03e21ac1a90faf6ba8f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=5146442f5b10e47c72751e597e45f6e5a241425658390d5130b1d1d822cdfbd5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=dbc0fa890283fdbea660b3805f7059ae3c0f369de1afb1d097367c43bdf736b2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3E4J5EA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T170807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDZG3wP5r2jl%2BumNpF4KW9t74ZQnSuDGqHRNtoLVNpZ9QIgeElPjfA%2Bgb0hExTCdJOg%2B%2FwQ3uTnl5iEVvfcL3nR%2B4oq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDsF0OFOnlPJp%2FEUKyrcA0mYbupr63oeynesIxt1hDjO7gUYgYtq8G7BNCAqPojqU9yZHgvG4sQAzkV%2FiV%2FiosvbCnYJO9mUrV%2FQ5rAc%2FzEPd2t5pIsz5q3yYaqWJf%2BiyNtijUZYy%2Fn0PYRiPzqA1SZQwVkPeBCcC3c%2B7Ho6j2DwrDPhNB4052VTf0UYZ3%2B3JiNUmNH6ijbun6SKUsr4dUVJGsBeiZoSHIDdNX%2B6ViJ83Q%2FPYgPeIl%2F%2BElksxvLNDYe5xeNMlWZkXrTs%2Fel9BES6DfnN2RnfA%2FqXwjw43HrCwxXglVfS6D1dzoOP8f3JIh%2FkX89BZQ5fBZUaU5uFfe0T%2Fa%2BPVNpCrYlMhLwZBZspl4FhOdUus8HnLA26jJuRP3OuuvhcJN2sA7WB9jTT4JYLiSZii1qXLJkow4wmZrKmlf4%2FZeP%2FwGXpa%2F5av9Wlaj83731pfRXTBmWIi0Etbzl2kWp0qvYSZk0lxHwAcGS7F6WB7Kqp8f1e8xyL5zd%2FFDT%2F9rInrUaOO%2FKdB2G0ZzUuPKA4Wb%2FZmjkqnS1%2FrUpuNmQ5Q2nu6xAjHbe4m0KU0UKO1MDX%2BGY2e91TTPcO0EmHD%2BF%2B8ovevPzHKWoe6WKF2QcWtl039%2B5eMBikVJzE5byonmZw9D%2FIB67TMKG9674GOqUBNr7jAraUKMbpdy5f5zwVGHhbsD1gyKnwZyhV1HSA78obBztBUKqyYSr86vuMPvMhAmg%2B%2FGJ5u%2F0zrh6gAHmIc084MfzMxXFg%2BOUh%2BhTh%2BSydaTO8jlckNrxju3CtJq2gqitg6jaJlS%2BpLEnEb0MJXs8CZRTnNh5mf84Et8SaRLMZrwPH2SYSkdDR7MEbmNwGYiWUVSZQ8IPK8uHf1PCw6lZIiTB2&X-Amz-Signature=8d0b091e304ba1ce969c0b4f328fd0c339a2a7a1e2d1ccd12e63af292796c5d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
