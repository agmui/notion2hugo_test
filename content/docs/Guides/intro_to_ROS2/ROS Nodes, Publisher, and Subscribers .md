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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=defcab6ff67439302a7384b513c1afdea364c1e40df89a818a1b16b5ab1707fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=b9165f5e5728a3e113ef43faf96c37183a7becf688911275751a6bca0b758ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=02d46f55c7e4eec67fa2eb1b7b234e0b93abd8016a6fa02cf1df3d134dc504a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=50768f3bdfba8b53b8fbb2a698d54387b5e0288b05e56165be8fdbebfb263712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=33b7e94292c3f8d96af1e29262fe1e2ff16904da4b2bdf9aa561f1ab8b68c947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=a571f72f9adead8a38e9f36589ee61b27ba621995126d6f22531c850b90c829c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=debe6a75a71da71ff77eac0aaac710d3bd04eafb2779569421274cf57ae6fb68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZKGK77%2F20260808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260808T013845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEJiUxviHNXprKcjc5REnU0VqH02GNdSfGbQG11uR0kAAiEA%2ByYr6LLpbivhgHYCHnp6u%2Bj%2FwE2VAsBMay8t43mHm5sq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDAWV5q1UbpXN9yUz3ircA2uKHlPzEEZlQGwRpweGmXzonmq%2BzPoSTbIcuETc93AgnuFi9jEnmxWK8mO%2FGgvszJ59l7vFoRtpvhZ8W6YFUMInzckxDbjf2d95O%2FIIF5Fln%2BR92YS0hlxkCrGtCI%2BaMqSf3d3319VNZf94dMsEpk6LSjZTd7%2FT8r1%2FrkjSVFCeguTlE8xihKR1cHxTklrMeFf1gYTlz%2BC7XmD8SmdOVJ0etkYtI%2F2w4e8pZ5e%2BVW0NtlqWVXC5He3WZUC7iND%2BE8r8calI2EPgDKuGKOR7r7tiWReTL7mUIM2SK7w%2FbUgv3ZHdR6IHPvO2jXwur3jxHg762a0CkjYbw%2FY%2F%2BqqFLoGMkktbtFwBEVNU%2BnR9R8axADQ3PsFm8JQ7yJ7ScEAbKE7PGwHR0rjIaAY3wsueoWv7MZkcaQMsinaCS8eHkOQ3uE9wacuHdL7%2FzXvSJb5VMJo8NGtT6X93qxwvHgOY7gGfqSN3S2yvvoVBUUVByfFnwe5WM0YpYtKz7bfNStt%2BpTVQWreBzr%2BvgB%2FH4u%2BJGa%2FmIzNuNSQv9nMtJkihALzToGRn7we1LPOqB1VvDLT4zLMAZDMHMiCnaqWT8aNHzP6aC8gt5Qg7PdX9gcddt6A1EhiENQSeEsqXjmFoMOjt2dMGOqUBjOzI6kZC3HEPWq0JQ2J1i%2FJsxTtggWbKElc9DnOb%2FIs%2FAmdiLehKEDVOnvzVIXXPEpLn7j4VOjzHhdBg6rhqKGbTmhERde4SD5MQLq07qQmXT36U6XIeWYP%2F0mnzjNGmrUE6Ry6AIeZ4EIFrB%2BUoMquRPjxF%2BH8bK5%2BusdzDHXJg3k9%2BxrQz5J7TbdFZbWV6RfgTrK8kwGDpX1xQW4istrUQAn4T&X-Amz-Signature=b27bee76ce933b1f075f491e614fcd05797fdb79464495cd277fc3f8887eb702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
