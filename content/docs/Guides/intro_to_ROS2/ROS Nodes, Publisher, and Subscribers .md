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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=c3ef5e035ce8d026f1d1aecff5395c7e3bd63b9e036698cf7b30cfee73317259&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=4cd87b811d9fba4d36419321dac38ea6916fdc1c13e3a252da9fab40818c221e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=81f4b6c39cf2570fb97de570845b727deac7bc999662c08f39dcba6836b40489&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=020da259ae974fb11102140a1b3c3a1de817dda42d67981ad5155102e066cc28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=cacfb56d914f0a76d9f5b023c8122d334f0c66aad7fd399c9ae81d2ba7024fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=943e811d3db0f6bac04526fb292dfefafe84572010ac1b1a506f46c59861d994&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=59a1f7a9559a98fa067f839692204d9c211859fc8b4c6d10a76828b6b628c835&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466574IAY4Z%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T121602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFJotMcT6ue7V9FegYd5LEU%2BLqLXkCOqAl9sg2QvSNU4AiBMAk0D%2BpEpwJhPemby0%2BGKJNfTMluNYqshkL3RlHjqyCr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMAsx%2BwqBFeTIZSigKKtwDDw6K8QKCU%2FHIy92%2Bpv7hWTggrihIpYfcBt96DvZyv31noO5SBG9eRsReyDznCjtNyE21sgO9MC8u%2FQbvAa%2BoeViW1oKh7%2BjSmHoBv2imH5jZnGjTV1CunOl5Bujy4jS07n87N2C705xa0jMSe2H4JlBP596Gn7A90wgC97JDoj3l9GeKo75fyp%2ByzqUIAKZg5xiq7aG%2F1esriyn%2Bk0gw%2B3bkCex9ACcy9DZnmWjHpDVWElX2FRTLTKiTfll%2FZF3U63TYKUs2N93ELUN92hf1sYOWRcr7%2F6V1LOBGVlvvgUkL9LW9G3s1P0p1tgsKKSKvAw2vFuup5mgppavN1SLDVBAriKTom3TzulNLUyf3z0oaJK065sF%2BTcnFu%2BAGFwlDxioFPsghgND8IcrMkdHiKCzi50wG8xJq8BIaW3jV3XYVrP4nMHqXDHbL6NF4MKmzjD0Dzvg0SMmCdrDMG9ljln0Naey8g9zbEgmwFazN2vrMZnrvAMFJWCexKTiRY69JmPBuYiAKBvBa2oF2h0JSbqaLYSMZXnOqjU4W5224580RJX4ZqXP0q4lwpF50f9jNZvRJeL3AC9Lq9IRF4G1AwLLcIX9jMVG89R8%2BSTo9rCWXLUGzLjor22og9kEwidTWwQY6pgHr1jNA2f7NmO%2FZAGvFRYUSYfzv45y4pTkwCoViKRTiilg9998f1brkvDboS4aaPi2the3Dd2PBy44Cz0ItnC0TZ%2BiMP1n6UjAVn3nzp5qLGYQ8OdTwjcwZBo5Rdewkio%2BH11zuusLRFlirQuPmfiTCdjGZzDvJmUHXQqdnSpFDmgt0NyfXJjeVLDRNNOgC8IiZnK%2FGFAEG3u7Ok4WAsEDfz%2BtvmiEb&X-Amz-Signature=644f854bf4aaa7c4975ce1b569be0fe0c6a1a1bac5c2dbce04cebe38ffa53fd8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
