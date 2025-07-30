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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=9d81757e67788d69392af3902f6669aa9d742d873c8b3fb8f401210f5656d099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=54e57e28a1eb449731fbf481f0cc147f223461d00743ff18626936e29e445c92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=8ccf2912a893d803137638a5a70183c65240514b00b7d42272de8b8404a8fb1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=f1381c068af641e0224fef8df43029ce33256b3024e55b1c7ffb6b4a70d6e346&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=a67077500e938af2824b019593ef05168d48e4e942c8c64681b62b3d69bedf75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=63498f852a906b22cc5d95df74f019c483701cb3050fb38af2f72a7f968d07c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=2b5cac4a1c400ee4763d6eb212783e3d7fe2ee4ee31e79d7820a9ce948215252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI5522OV%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoPWGVbeAR1ICCEt9mSiu98ECfQXDNdk63gACmuwdzIwIhAOcusRQYDFL9Xwt85QkGfUKuDP7lidVT9HtH586W9LGtKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxtpJltJza61uFIVR8q3AO3aoBxxhDI2t5suqBoDmQEum1W37n2SpbRLfbOpG3ejSaiAqdVxjP%2Fk2WpMpZ9p%2BHQiKR3naKiYXZAjJM326Ou6t%2BHMYqyUK7juXQI32sUkEK0WA8Fc%2BMZjBDTi%2FxuK4OUNYiJs39Hst5q2alRO9VEXLdPTQSXgZxW%2F4q%2F%2Fswv8RS03L9Uy2m3HYlwh2pfz9MWWrEsy0Y85bUp%2BREZk0MwQy9IyFN%2BdfOc7Ag%2Bm6kJePiNTeX%2FeCFV6%2FKSP%2FkjuGeQxF1NNr24qkPWS2RLeIM6nZ2pRrjHHEk2ku7xnpbYnmBtZmZ3dCVFFbd6JTXiG4udhCK0cwMxvXoFP%2B0807KSdVxyRLlaRdVLholz26C3%2FRJCGBdy9utSRQtEMmm045vIbCqSYsXKmbWQ2u7lyIhbQyaCV9%2ByJXiJtUvJVfGF6%2F77Hl1WDesGDj0i58Y6oNxL2kKkG7GCZIynVioPx0ftwRawLu6HGNia9RkJTB24w60oAEaESNQoOh65i3U2FJrR178tYEJVRnNc43DLhOBKK2fE%2B4kRzsJx14%2FKZPSOpfAxhIbCzQaw1fZt8k93k80Y0TEmzu%2FfEcAtnEzqdakLqSm1FkWZDGHa6NwlkHse%2FH27W6hSq0vn6QVFLzDe2abEBjqkAZmQJFTV%2BUzGXTVLEtlENljSgmnSK5sjJmwrvsaIzQ8iQnNGa93rw5K%2BWUHvkYQP%2FUMgBkv4%2FE%2FKbAF%2F8WaeLqjIZ%2FaASOWlfkQFTlsX6FOwISrCyplpvsi9eW03SVtR8c2OZSj69Ri%2FqaSagmu0fFdd%2FBqcf0CNfuW4LPn%2F8t0aY1oNRyCxavCFJLxa5nCyV7ixJeOhRfGxoCIqCVKCa6IOT5jY&X-Amz-Signature=d35a6694950e7e4585562f9e2eb967fe426edf407a20f0b801f14d598db41a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
