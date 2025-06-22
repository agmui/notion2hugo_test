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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=a292e260872dbef8c240ff9f33ca502168d02d0ff33b09a308cfe0b3c24aa3f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=c3e3cde1106db8c82f2b1ca64b12fc9aaf7d52726b321c5884bbba3d0658bdae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=88fb09f3c3ac2fb622ff6edf399c94289e8272b7539950c81b8276fbdd18d1d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=42825b08972ab6bd25e9d02fcd85ad980b66b04ba7e4c5b90c857589dce25369&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=1c1d36540d45bb1644be1fd3922a6864baa0dd9516553fffc77e1217c42e46f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=8745505aaa53c92729c5fd3246f8697eef1ccd778e3ac55d5e844fee7da54173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=6b91de3cf0b6e492516e2fd32adc638e51267192e179dc60292d294e016b01cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SAJDN54%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T034638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCucl15EVWMRXXcqoSrlRkLX3Q%2Fq39ozz4XqSStiDT%2BagIhAP9bECsOeOof8jfcSgn86%2Ff%2BA5w3W9EMRh2%2FWi1xlv91KogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXHyYj86JedFT0Vt8q3AMxrEv%2BX4qNRO8vU3iFb01RLlB%2B77QNQeLnn%2FFLUWzWVWu1acM%2FpiFXv%2BZNgFMcHqnjzEcRIhPK%2FkpwFdElNiHiY9dkY3Ma1KUXmV9KZ3msyeT26KwwnRDR4qkI1IX3mywXXaOzHqmBmQkuVCKqVyoa7m6n5IaCtlq7JBBJc2GJJwiPtht5BwsSqKwD7aBxAM23spgFzyfTDE2trgLjAb%2Bg4Zrc%2Fv7kBNWyIMhbHqzYQWUD1%2B1XTvSgv77ON7F%2FHBZBGl71qXyHYLONHh1lSW1Cd3hZ7sW2GNhQJqgYzSiRf0%2F5Nx%2BdLwciORwYkEKqUqMtjrH2tVYGi9dcekhLao%2B1kPm0jdxtxNXEhYg2xGJNkLKji0q054%2FIQryXpl6amE%2FpUpTj7djFCC%2BE3ZMiMURJWF1rlvKOBvD%2FpQ7GiNLkr8ycEkO7cwvXEEJpk57RDUX7d8kjpw1aDxruTsrmzHfPXs3oO4e9yp%2FqH3fmSt3dP0QqiReDB%2FZtW0HTEYMIl5FJTqQa%2FhPy5wJUDKZndVF4pT9R4OLad1clxcHtc%2BF%2BlCAGkJnDGNbzmzi%2FTB2wlUzTngFdp%2FdyVXJq%2FExGZScFBEx%2Bj2NyP644poScKYpgjcN1BGYLPXGRhaWEQTDV093CBjqkAa5mVXyVdH05WP%2FoBa2pBNu39l%2BCYebWjhZJzpRjlKM6ts6QaX6cpWVr3ZjxzK4aUKAmEJ295Qj%2B0m57p5KkyhkLGmv6OwN%2Fkjtkxs7RfkHHQZg4dLx0g3rXFxypZBII62TzTWogea6OyUeSVfkoIfnSo84lzlLReXEEEf2sb%2BcvApIzie3v35wNKyK7A7O5zem9x4MrE%2BOoZwOh0GGnnGja7%2BCE&X-Amz-Signature=a853938e82431334fc4074115acc2e8131a8d575624a4e5adc4d4be09833b13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
