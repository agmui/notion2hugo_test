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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=9fb99c576764ea7b367cb8cac774dbaf61e1a444fb64262cc1a2e035941f1ec3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=30f9d5ac489a73213368d0ef7766dd61cc209022026ece2aa039ca4bc18ffe34&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=bf457e2a3af09ebc46442493b6b9424c3f105ca32fb2fdd7e240f34e5c0b4a20&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=f4851001215994a4f48c95263e5be0565a0b411971575fe6b8b117ff6a8ebc74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=b7e21cb2aeafdd9977a9d3643374e2f3e68934499e80f1dcae6fa24779d3ffdf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=a8e0c27686fdb0c225dd76dd26592c21ccb957376d29531820400e299405b333&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=8cd847e0ad63a0943c4d45591d09cbcfaf43163698a930f036934cf89ead2269&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNCEHLPQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T100949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAOv1%2FF5HGKQcbGnSyp8zBU%2FjmNAEjioaxJoEAeKkZdMAiEArRUiURb7yqLieURJ25CN8vJ7p2DbDK7ho0ipgU3%2FTWAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD5aCfBqZKM34cHUEircA1t25E6XhtfA73a4cQZ2BcKjnqqlZ3nVqos9TDh%2Fme8Lx1JvfKDwIqi8k594hNVUgO7NZgRrOwx6qGbxivSbe5rXxShX%2FQSQfrdODOKV%2BeSm0D3DQO1cphRimP8SrB9RxcNTMceAy5q5ogDgeSYQepWEqE6oODCsZLrKnxNA8QmSmFY5NHcaqeYvxeh2EkRkTj4pUco5qke04LqhSNQYl6CUvrGDc8IDOpqkKc%2BhFzkDJjYM%2BV8Dmjoe1Pew2WHfp8psuKE1NTGKgD%2BkreKiaWp341pu8Xzb2u3gZCzIs4CIQqeawRgzKKg39%2BLs6Y7JP%2FNefR47n8IhKNwcP%2FjDkgp5jEJ3z0ooWKIiOrY0IwXweueIKKAeY1aV7seLBbLe9B9d2kKOZgFCn%2FgOea9DaxxcaEIP7B%2BsV9E7bbMHlv7F9jy%2FtuZBw1oBbY7pDEPap9oK4iFGT8vUe2GtJrLuVHUM%2BrGCB1sur87MCq0tpiHP3BsRwmt2jsZLsg0LSh7YW1Mj2Ag6ncE8uAO1cKNUhRR6t0oAF0EkMaP7F0DQSTbkNxK7sbYvzlV3QuiLVi30JNYbpb5fvcRBfYoitlkFETMHWF5L6Y3i7%2FjFOujvWT0b60ecxx3l5SjNvKMRMKKTscEGOqUBW7PAeDEct9Fswi%2Bb0KTtDuW06a%2FWoW2mXZDpNeXYNf2f5%2FOWUtMKARf3E%2F%2B5ylNlqmFXv14CHQqaCAp4VCJfSTGj7y2ZWuSUQCMfVQ8hbD8oAbcn6mJ8l9DBQ5OT9tnF9VXywqxYw8g1ASSSRGhMU1DVrmDZ3kW%2FWna90Fc4Votb%2FPV04TmJsa2LLkM%2FnKH93cQXdx50nw5%2BMPyutySKV6CjF8Is&X-Amz-Signature=795081fe8221297b3fed46f924675a73bd35fbead8edc02948c4247897532d93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
