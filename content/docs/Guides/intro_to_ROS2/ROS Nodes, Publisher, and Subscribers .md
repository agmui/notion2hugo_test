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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=b131939ad5222d09c6a753e57e31f9d9f36a1f8f4ad6d7dbc750230fc83db918&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=55611eaadfa9226fb1ad24895d57dbe71e7bbad63d4c85bcd16d9b9d6d9338ed&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=12f1a48b79cea817d5fbbd864129dfd38781bef058b41914a975a4b35c2b72e1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=cc84d27399a8886c5ac9e852b14e21b7f118fc1fb2ea1b0dfc67cc7105c2e741&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=91686999419bf324a9d3826a19b95930f5432c32bce58c275ef9fbca56a02c80&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=362ad2b6b2d98e50b2024b95fa4677b2071e132cc6f241233366c43df8894c8b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=ea002110f229293fb69239de9b3dce77e24f28c6647cd52ab6b0ef6944f6eec6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UVOA7OF%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T190126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDQMvNRRn5IrgNYlqJj9C4ygp71eXLVpqREPBjtS7hgXQIhAJxcI2Gg9DhUckROh%2F9cXvRFGAqgWgudkrqLbwxiOAyxKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2FmYGcq4FeSySN9%2FUq3ANsFZW9z0YxViY2%2F0tEGYK4c5rhjDiBcq9o8krF038aMMMIVPwQXrfsWilQMeLyknUXdT9aiQAWX9Vu%2B6Z8v0%2Fqxfg8z3RPGy0Hk18d4MWsmZnRp1kyQEDB0pD0FX0J9Uvvp%2BiMNOKv%2FmNZH0EIOoYglBg2Xs0VoMZEDhR%2FJ%2B9UilhxzCcsRAcqTbFqidA7u0%2F5rv%2FwIYsHZvxY5egGyZgMsTQkUEqFedmbGoWbKgvrjqa12jSbPY0DDFu8EtIgCW9d9ZrTaggH7Cg%2FfZAhlOCrYwgPnanGxRtCnLSbKfCPTgsK2PtMxod3IocwlRQAFTB7nj9ITJGEK2UlSmou340TkPCrSn1fVSX4AtYEAm1xKMS7gwKDrEET7L%2FpK1k3r1J%2BBdUNqqzI6%2B2fIYbnzYE7jDJN1o%2BOtBQFm0Xge5nmZf4%2FoXtAWO3AKEQ7o4xVsdopD0ptfmJaI1az7L6KXt5gH5f4pHna6FsNwyoDQg8bQ4oxDRZrRG3QT%2B%2BFxSQuxCBStxCRmvKGHZUdj1uosM8oJSRoZJjV8iymQ7r1e2q2%2BZBwBC1BpSU0RvRkIVDwy%2FPJWkMYnbcwjXXYkoda%2Bw%2Bfh6EALwdiJoyksiy5Fgjl%2FK%2FSOtebobObo9errDCixc3BBjqkAZsQ1rWc0Rh%2F6Lz0UZ0l63HWUeM%2BH2Xi%2BuskeR6WbSzZbA7SgN94JxztZ1JI8DqUtrWQS7SQJ7vSSkVT0e%2BkECqfjKzu7GLudCTDpIU2aZ%2BoFMEGFLFa1cEqORlzl6%2FGWDEHcCnbFinmUXaaBKXBxsw%2Ft1JffC%2FVGC8AjwBxsQBqweTGuxFMF0kCsqqXMpLB%2FrJkd9MzQZlQU0SSRtF31QEoZieM&X-Amz-Signature=fdb2257acd92f5dced3ee8168582e68e7b27271b5d5b5701ef0dcbf1b761249d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
