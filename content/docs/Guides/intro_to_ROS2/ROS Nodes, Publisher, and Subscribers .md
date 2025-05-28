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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=88d68ec7e1edae185db3f5ded29523f8c9dc1c84ac71e67ef1b8d86dc2440eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=760732785430ece262a68ba3949a29a1d8a618a07da00b36f61638e914ff7181&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=8387b01381cc215b20f299ada3c03cc17a368fd625d162bf9967295dc0cb1488&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=e36d4c7cbaf319da0860121b781cf37896f15e6ed44a3f7c05859faf97397f92&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=bb858fc4191597aecbb5f2e9c08e5f8112513b941f3ced7bf8680aafe1ce6751&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=a8533da30ac89cc7f3a2be93ee64ad4eaca0cbf042c1521fd92d0228f8248bba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=9fcaf4ba6dd4afb659ab36ac3e4b1bed7712cdf0d890443fec5b23c91a9c3192&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJ6BOH4U%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T041341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDB46l9E61mBaEqzEoGuMpDeGa%2FH55PExsyFYGNPlbiTgIhAJXAew6q%2FVEZieGQvyQza7kB%2Bia349f9ehYkMcpxsrtAKv8DCG0QABoMNjM3NDIzMTgzODA1IgxR7e6CmyLZFnqsznwq3ANA2thqGhR1UQPNX7km677JsXfZkgZCM%2BccVHzjIk1af6tLjh50leBQHMUugoW8EaXc0SJRhCXobuqK4MyOySOyCrXB4gqAuvLGXKti5JizM%2FFHii7nBChPJrHCSIA8rrs1fBxWrH0fONgLPs91oXFWFAwj3kgXtH8hL%2BZg23jZRU8maB9VuH0%2BzqmVhIWuiBnLtEc6GLZiRgGbBCSCwxDHGWLW4rX05RmoJpZQQt1s41QBEP%2FEqj62T%2Fbe0F8r3nBRiDEcRtJ775XXH51QyXvr4oGsXhjrTZzgvOLvHCaoVr5eQ6GgIMcuwxkovIGRCIrAD5bpCxGi5R90VTJVz4%2FBn8PdA9e5hzN06d7%2F0xV1fzyYswzLCeGEkptiWRI6zFDYzXNQL4LESFX5yU%2BUS7XL1sQH4kp32iTkGqcK0Vbhza15BIJ%2F6gknIGJeqLaf8u1lVlCWYwHz0izGt4CNFKqpHEW%2BL%2FSPLsTDlnHe2AcRdRAqFDBqgDmLnotDa%2FGK0OH%2F6I6X6eQlX6nSv7ocraK4JmMaNdRt%2F28lbNchvFztde6jBrVKp2ESWHizyhNpAg7MFXX0E4Xg5hYkqbl09BL1GeAN7oH90F%2FwkF0pUhhSiOxmP8oaficCrNWFiTD7mNrBBjqkAU6yLRp0433rtTz3OOn9IcoXVF%2FEMMh5bIW2h4qAQXG6lwrUvZrZN0KZzO%2F0OyOVSqvfBIey28RFAS3IjkKSoE4shFBrDm3l4IWH0U7LkUQiaUf%2BRt7ylgGdKvcxU5FfCYqIBMtF08vMtESAtwJBEZdcdrcjLLX%2BuGlxh5uQwyUXHHWnY6iOE3fU0J%2Bn2sYt6jehLe1INBqCjrpT%2FN264s3mPCyb&X-Amz-Signature=a1a0977b9a7c2215f1721635852ae983621a030f2e378bdd95eb53cc8e151350&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
