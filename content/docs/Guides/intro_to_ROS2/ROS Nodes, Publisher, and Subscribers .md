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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=ae9fdd11a023909390722902212d0442de442100096562e7a82d1ee5bc548c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=6578c1d18a0e01f33edfc3f5384b9a882d186bfa594b70f65e709e308f4d9072&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=aca3d13f2335c9168036631e772c23a3bf59d13ec90803277967e25aab086059&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=548102145aa65574ec0176bbe27c1db47a1079724e646c66ff6b07af887cf7dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=6beaf191bf3e3e8668cbb92e62b2e6d6b7d9bb789ffa71a12ab3653248710e9a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=a3df1b0003c95d9024992ebf5084303e7abdf792dd399ece3f97c00beb32f06d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=6d99df62c1f9395d02d33fa1f626a4fa3e60d16f5e89705d541bf68078249e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GBR6E5X%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCO%2BGMEDFdP%2BE5JJoo0DSooQJSWFP0CWVIIP6TiA21zXAIhALasi6NoeeJ%2BE9DcoLWGq9h7jBHDkH2JB%2F3gcpDZpfI5Kv8DCDUQABoMNjM3NDIzMTgzODA1Igx56k81AMz2ouXc9b0q3APtlClr7OsHTktVQkLOgLKmkD3U9inVM4x7Fh0upuuiA5grwaTSDb9sRcjwOuvIzQqOKAJBZeseG0tE6Qz89%2BuRpCGpe%2F2brmiXWnXP%2BRYcch%2FXK%2BlF6orZ9XM%2B587Q006ABI9ZPGarnIipZdv%2B8A%2FLcvgI7le4Fy%2FSx18g4afpvleBXQCsW1lSgAGldFjoXPydV4GVqOEF5nBZpONQalcb4IpOSKzrlZcis0PHyxtbpEm%2FpDFc5wVh03a7u7Gv09LSMnqz6uScWU3uaFyV3oU3v7bffZXaEFPMIG0tRql7Tr4kDgUZQdJmqSIYA7dac9daKlPqZxVTvfgTqvbZMBVVVi8izAyOD36vsVXJGFzq3bqnJqyVBP5pSMKEMc4DDA65lQht22h08LpzCHA9OLCfRPN7RUsW%2B%2Fdq4DpUN51VVYl%2Fe7E7YiMXvJcnvPKdCy0RguSmZH93DBQjgbByXDkp%2FIEX7IjlsyJUfso3X17itSnfNu9G7iKFWFrHgIjz056YvUAW7hNRnPbOEMUC1LZu%2Bu5eEgZKYp2IpowSmEbpZ%2Flx1tzcI%2BGDmk9UcwB6YanZ46N6EwkYImwlTyURIJary9SSRFS%2F%2FRdRy3qCqB4S9uUKMxsfGjMSYJGIoTDXksa%2FBjqkAQhGXShWXxAbxl0OtiLKr4Xwg0A1%2FS7muptFp2JZ3XzHQOZWTgkdAbfwaNrF5i0qtIfYbj5my04DCrt%2FMUQ2Zo2HuzapihAO51bsrkqx9DNdnSGJisX86sXZwRtwrshulbEtWLmQjHCO4i6pR2%2FxJHcWa1IkpMgs%2FDfeKG3Cn0VCyXf18CApkp57yfDgPLnYwAeq22tsJzogGmO9Sz0nX8WREpOQ&X-Amz-Signature=bc2bbde1462119f3ade294ba9f6e075604a8ae0ab912d5f9563332092f7b3050&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
