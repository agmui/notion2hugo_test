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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=bacef5fb85f3f6af486a295f90a098d3c0755761fea14959eafd04dc310a2c6e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=06aa68034ef378a2d4a4b4d66a9f3b7c8d17e915ab71f225a912c7f103378727&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=96be997b07171e0fda27ea80a0e54ad06f11373dc343393dec283e643492871f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=fdfe32b73a52ad39bce0fd5a2b566c72a5e78526279e92f2f389746e5926157e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=d993de0e06bcd42c355f2bf01523aaa9c21aaf595bf0aef4a1bfee9732a0dd57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=3d4be81da4c4b9593fdb9245968bb4daf8d279352c3f7549fcbd086e1fe58114&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=47fda3351e29d7aadbe28d36dd813fcdfc4eccada897795b4d8fb7652e1ad061&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOTYVKXA%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCD2TJxrubJxJJJnxItEaRhNxQ0EKVsTnAjtQYHt%2Boj3AIgIWKhnFidscS5H61b1MMjMI74fOaq7zW2k7nH%2BvjhB1IqiAQIwP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOYrAmSECmTPpTknircAwI8kSabwsOcfYEDlCZjKP29MK%2FYMssTtUSsxsQNQaBc%2BtziohOYzKqNWf50ddGjuRGc3VmZmoseh4wxTjJ6xgWU7vEU5%2FYlWM2LB%2FzcYJIdWyYWH1vz6yjmjpwoIiUKF%2BZOk1arVVn0095eRMHrnn7GqCTkWqra%2FiJiwCRkzS8CgrjI455ZDm4Wt7moZklUKHSy5D4Gtw6O9o03AhNW6Ojl%2Faiw9vEzVvFldZFqPoHOMwlb03kqzfBZxl1aJiG6l9fbceNQV%2FP1NdWnQc4PlEszJlllhVJBs64wYBFngX%2FKgQkV7N0WI%2FUCzlyA%2FGTb7JLQ9nQgk8OeX6iFp2kJmV6E1EqQ%2F%2Bn8qTgXmZDMwMsKjCIF80Ifi8ZLTVOskz38SLGe8IJpqTAP%2F9wV4Z4nZHPmW%2FhFVpewiApEWfb1glniABPPhEaMM4NQG8W8LrDzlckgSrPt5ETek%2FeFyA7Ell2lgjZfL7C7x%2Bb55QCx9QqX2zbXdTv5XfcTU2armuAVXswxif4zd6jWyOIIANtO1%2FBlG3GsbCqHs%2BoKtZfZJ3tdwD6UpE3nM9KnoQQ6%2F7kvAF2fFGZlKKwoJBL4QLxZvkURik%2BZdXV2GjqL%2B8Kxgo6ctCqhxJdFckjwICGFMKLJ87wGOqUBLa8l79INzBFL7BATLF0FtA6ZUlEUZyR6g0OFvqqwxz%2FfxoW3DxJKZ7r3J56XCKK5y4W0CKOuJT5FafZFf1Oy5XaaFEy0MD3k9o4KoagtW%2BBEej6gsxVOudlivSgbkNmY6aA2pD%2BV6BqhUc4Uuy1t1Z%2BniJFlDzMF%2FaZ%2BKR9E9MDmvvbR9JnYUJlpNuEnjDKPAcGnS9C4re0jnmfQ6qM4zYWbIlgp&X-Amz-Signature=f8f1875bb8ec77e5e02c26aa2da6fef606d2c8260dd0f66833834fd4a860a7a1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
