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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=eeefc85e0e619d603cfb19ba81eafef355000191b30489128bd2a63e2f757765&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=71da4fdd1291e8ce3b1d9b3de324f3f39b0dd8d6f4e14d8958a8dae28906e46e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=cbaefd501610cb1eec633168d93deea7721dc0f369f0fac1061a4f15b293b512&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=66290531d9b8e0f93c7dd2e9c2ace23cf34a02b630c6fe95bf21afd8ac1c1fae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=a4c47766d54ebca17f5928484ed624bed6085059534f635cb159e93108f11e44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=ae64da63632811cee4af65caa990cb61003ee364eca0ea4cabe31b1f264c6555&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=4737c1fe39345ab9fcf1cba67c377e3c1c21ad2788e25915436a2b17d7a0200c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BJOOHTN%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T021037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxKb4xQoM2VqmotsWzjuNWdwDNJPIUAeJHR%2FbKi0SNQIgNLZkk1HhLmX2cMt5qEhu6BgmgguRGo5yEoNhIpZkdm8qiAQIyf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIU8ydAvQ32%2B7zODCrcA62ZL8rfW0luyngVag7XN%2BWpf25xiwmsNKUcecDoUl00XIi0RNUJjkwDYe4Z%2Bo0WHNn5%2BEtyhb08%2BgdExYixydZaOx7T5UyDtMw%2BxjFmi5vmk0MwvvACCsfhfPnsNrjLvioBAaVG1nhICgUz5PPoVwPgmWk39%2Fb5pdKTMXKBLdw%2FEl%2FBsJlc3Llu%2B3agmz9SnPUV04avXyZhZFpmj65ynMiZ3VJfIrDeW54yWRyFEWScgqfejORqE%2Fh0m8uYz3pgU4N%2BWfuzC%2FNn2mDhHA0YijLVqEtDd9U8C6GSvby2FPZeq1upICkmn0qz1jYd6FJthJ0LVOA0p%2BEyB6prMASoGUPz8iAQw7p%2FrKld5%2F%2BymQ1etwLMFR64puud1LbzwkldpC0kQg4eqOr6OiaptY%2BRC3MlrRexLdVWB%2B6IqPjL0H1r1SymPYjdvtP5nbGrg4ybND156bQaWqHGyx6fQPWu4%2B8mr6GvXDK8rC5b%2FmnxX%2B4Uriiu8t22O4NAsjcguZJoUoqvGkfR0oDj4PABuiXx3KtQ3gcRl3DEeUwaUjqszjgJ6384hVkXfptCVAn4XqwcDBza0Sb2XNpqboRdg53mTVF6JaewT6tl4jyRo9pUkY%2Bydw7w%2BCjVGjINsR46MIOE370GOqUBuKv6dlPOB827Uetl8jF3iAoZjHPHSalGak6F9aGFNfXZhoQv4224%2BWjDltD8dcyU1Syhd%2BBsKDhHxxjlUGREUvenSjDl5%2FHSi3D%2F6EviWikRSyyUPF7w4eRNe0J3U4T4SrAoJ%2Fd6%2FAzH%2F%2BF5tiey97fYdD9%2BPMHJWr1EJBjbI84AaSPXf0YwvWKm5tcR7uqFbC09uqmNRGrRKJcV8gqyAZqdjeX2&X-Amz-Signature=3dcceab6e0c407b8beaeed0e9e4644ca9ed77d3a0139e72cb3da0112ecf56716&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
