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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=026e58b3cb83257322d0ccfb13277adaf2339684b6718c4aa1c156fe9f322683&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=54d7ea7ff6405aae780d294b205d17fe05598a9af4380f5e14cd9441ab4f93bb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=2880e6205ac4897ca801af121614332f69d5bf6b8be05ee1827e9bbf720a68a9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=68e17f2934314513db005f498ffb4d7e80982afc144491e44af4568c9e342436&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=322af93e866fef6ee48f885ca75f3b82cdc3c73eb0bc7a36a97aa17a00a90cdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=8854b3ba33769851ab6fb4ffe372dd6335048bf33cb42f82b5385df0398418d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=78b9d54db66a0ac8f94ac1f1cf7f4a5adfaca64dd8f7e7e78ae240247290b925&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSIFNES%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrTq9LoMTEVBzVanNxX18W9cFfsEvSBl%2BzZm46%2FyKt4gIhAIocmhXwIOA0oYFSmZMxY4zIEvHQVDih%2FBJevTpEXmdRKv8DCBoQABoMNjM3NDIzMTgzODA1IgyqIsgTqi%2BhTJsArxYq3ANR53kzYZ7SWU3xXPKD9FoT5Gt1mkOpCAGVkPZSGyu%2FCHE2ZJmob0UqMolDIqAbpjTJNJ%2FI5YRirxJrlzmNDIYVGQ9mOnGIH7cgT%2B0owLgcyQEoBRqKmwjh3dbETFAIokZfGnOZV56%2FHXSz2MWU1CPOGdzbN%2FUcWjrm3tU9fgzvx1UAiOZdcijBub3FBviz4r1RZ6Rh7ACzZJIUNvUYeGgiJ5RfxsGyNiBZIIo4ma3z6%2FX4ae89BLldhtbYKLrzS%2B9VpacKWIIFstr0y0Zr1cZiT2ehUI9yeOEzgdfT97YCBn3bA0%2FiCF6vpCTshE4%2BEmBwjmIWDlv%2FNuPN1garZnY8d8mh0T5pNhoplVJSjKeys5U%2BVBuRJNJ8JakLkTbZTOQDJZJGA1RnTZvEEF%2F%2FJH8i%2BfUU14lhuUN0BFAwA5DbXwA9Kvrh9z6eJW7nD9fDrKSAgLtP69uq92hnFInx2i7gEBhrPJGVCGqDtIibkyCZ9T3zXG3LY28BKKu59a7hkfM5lco2VFlGbgWwsS5JJHvqpuMlEuhUCOAvbyWMdPBnDuFzAAqoB14eT2NN3yd9KINoswQl65ecfb%2FvIf6tDw2KGVXDpzjeaGh811W4yM%2Bky69GGAUZ%2FHO4nSCi1jCVxIu%2FBjqkAZDi8vOlZP0kknPuf10%2BGwD%2B96mfb2Ih9AArvzuVukr0uY3qPq%2BL4h4o827yyYZBuYNhAyoJOsB28SdwrEc3xIpssCRZavqmFv7s55EiL8uSiyfWzWsalMWk95FBe4QsyiP6XI3ZNxwbSz1dbArJkwuKVOzCQ44ZE%2BWFdaQ%2F%2BwVTTn9CUNsSrwDJa1sRnhbme70KtkERvhwdJYfKHopitCexkPUT&X-Amz-Signature=6ee66fd911a996f1d3a8f6ebf1a9a8c3ff5c4f90396b1d985e49320fb190bab4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
