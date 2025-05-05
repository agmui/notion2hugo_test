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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=b85195c6d323dd5df62d853f71787ee83771ac475842a3266040f36624dafa90&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=a2fb2a89d66896f04a8101c9ba944c140cb3190fb69de4ef3444df4ed3faddee&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=0260614131f19b02e3413429bb630d443b29576cc7026ab3010da6f2fe8a3598&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=0947f9f59f067b843c61769a4cf43f059af919d2e28df7436bd35ad1e53b2a88&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=bdf95c29b1d47ed75a27f06caaacad46ab85ef3773451eaa3205e80f54661565&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=9d88c417bcaac55795add3db615f01038c2cecdfaee73faca2b9c7f00216cbe3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=372ab993c650d53843b2b2b136e3e77c9c3c8ea6382e7a8204ee769166f16315&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WQDQEJ6%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T210740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDltEWMCvuNBTjNmHzwyJ40QwWRIsQQp3mPj5KjsVEMEAIhAIGE76CVRgHZcKV2wYP3tjrJwScFquqdUO37yUI6G3WqKv8DCDYQABoMNjM3NDIzMTgzODA1Igzm6wEbErG%2FwexCoHIq3ANgrZQbZGdRPLXsHSxKES24R2l2rcC1ZPZJf4XEDKjJZzSQoHjcUzG1rP6oTGjM3uEE%2Btkj0%2FerMD6DGRaCRhfk%2FCClHbSZmDQnpJ9gUsa0TxYzVej9d40%2BFc2GWsqgKvY%2BvLBZ8tOrFqMPnYazb%2Ft%2FLp6ew%2F0Me5ozZMAr2VITMH9OA3P%2BRqI%2BjjnhCws6qg6%2B1fyyYZ%2FEH5C7ttVFwhT3VHAer%2BfjH3BAQno3z7%2FVp0sazgctSV%2BBd5ZPLkbSK8EcoOqzk2BATu7LDqYTTZwLZx23BAsr4bWI0%2FS3A65mPDZdi2uFWKXxP0GNNSkHTjcGpHEoiKj1LBVEnkN4l7YZF6cOkk%2FA69w4CzQLhIDRAQMR%2Fvj3C0ufbq%2B3Slx5uOFRB0ntn1Pw5He4YAWZnOzu2lRLtVf455YChDkxpDAB4d47tuTl5mEXj1X6yfsrZsdXASX9fm0JDI4XuxNaRIhPvGqbB6hNvyGUczY6S1DqUzxHyu8RZneTjPpOjJ0BpSMhX2Xic2m9NmlTW1q8vX9EjMT6qKQHS6xB4kjf%2BlqXPSBNSwvthCzpxyAAOJOgAqEZg2EQtnVR1J3D3rnXm2Ko2uhFq%2ByTILEENzipWZGKoNzyYdRojmzxsSS%2FxzDOzOTABjqkAcMxvd7r7i%2BKmdgtmBOjSOl8eyFVzdJeVdDhTuQuoTuIOUpdPK1gxBeWzVZ9b52YSLV%2BEzr21rK96c4No%2B1%2BGYhTgPBBoDjH2OokNlYn%2BmgOs0TSuEeekyXUF0XqP17mRFz%2BhP%2BOABi%2FayA2ep%2B6yeFCrj13a5GEZ%2F6chrLHeIMgHR69zrFOqL%2Bp4%2FAj00eQ%2FKGngmPwh52bZbSAyXDm7zqf6msl&X-Amz-Signature=2f287a64d45f7f045ff09f93c784dce52b2ea1e5598676cd7d42545a145acff9&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
