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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=315dcfe684ebe154efa34b56124431d355b0f708ae917b2f7dfe37325ec49f0d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=8c030b960dfdc133bcf63cc1debf4fde1b89c68b1953feb29188317bbaf4a2c1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=22bc7d57fec61eb35b2127a989d95bf4c24213e6e5342b891f3391689d22a451&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=3b0c9a925380829265d4f852c89b4b11554073472424f48ee2dc29e7914d0775&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=8f127a2f8c43dedaf8bcc329e0c1baab262ec12359cc8d051dbf92373696ea25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=213cf30a9eb9ab5093eba25f81d8cc4ae2cbc11f8e83785c81a10fdaedfb546c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=89cb29e711718c88a12c8806e1d1c9a7e1b69bb884b992583e28c9728878f7e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEC6XDFK%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T210810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIBTdPxISJUorHLSaWULJ9NR51pLwYufBDAwkvsslgW7NAiEAoE%2F%2Fy7eGP6db5vgi53zMdZpLOmoO09av8YyljPZNGKAqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBni%2F0Ns0wscFnirNCrcA2NjO7X0%2BoGEc9j8MMvNdXGqTjSxR1RsDGstHZ%2FhAq59a7R5ecearrOoSlG0Gz91aZCxgsK2R8m3bcBljpFDR2XK8P82OtqeinWx%2FEYkWanlK1qDjhDjjvhS8c1AtdrtqtQoOCim7PeUg58fF3G%2FCZCZ%2Bw8wUjV%2BFFqs4QvmdN7ghhJYgYBN%2FMElH4mHy8eSiTw%2FZGsAqF334ZYpqgpP95dy0%2FfsAubSi0KnvCd1f%2FEcalpFRBz1YLbh4OEm3vK6tAEcv74RTqr6hwdNEMNahShe5n7I0MHj1gnX11PaDiwZU3EipNy6XAxfxuGKbt2jjcFj2GY3ZUSwg%2Fc%2BhDnvL384htqA4G0V8037Obnvb2rTsfjgttFyxmszxAdXJx2vLhyJbI6RhMMJYQ89vLGH%2F5kPSWs6l1dmRfzLxLWfW3gDyr2TcwHSEnFjYEKlzicxBnRBuj5O4B4%2BKKMwZL8b1Tr6lc%2BPygn3ZRKirQL5bc9D7xwqP2kOlaq7Q45sydyRh44nmnetIaCEGBU0PxDG4hiQTD55505fM%2Bn7ANQ4Era5q%2BBK4mFGVoKdw%2BgCeJVH9qkvVuowkJdL4hVhFOLg8EsJFabNlofnnT27uGjsPEeOBQW37%2BZmj%2F3nlNe9MNGNpcAGOqUB9Gpk6aDKKeawlkAxtLlwbmPw%2BpUAzkp2Yt2tCFho9ctjhpEColmjU%2FEz3LZEWK%2Fz%2FmUX4y1N%2FIGFfFdZOHPqPTAUdP5AdbDdGyK8FyExRYtrQPFUaKMNmu0Q5BCQWKZGzZBqFGM3QFqxG2qlJs4E2xl2S3qIlLlNc5zZfSV6VomAqaqSTKdJc3h4R2RvoxFCwxyuL5UMQJ8GMbHs%2BQl2OKdZOutb&X-Amz-Signature=bca2cac85017daa3d5157e09ede5a5fa0e9b1949720948dfb4125ade0fee94f3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
