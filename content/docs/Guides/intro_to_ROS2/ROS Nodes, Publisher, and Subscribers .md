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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=3001ec59993e094170d20409bf0e95043e24641e590be2dca26623f88252f39e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=c783fd75503b0b93237efbcb1a5df63d4d4649909841bfdcc1df637f8c36491b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=6eb0985ff7a43faaf8bd79f093a673a1ea6ed9b8e9f2148ed0e2a0c3c354f477&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=ce4f0c586a34e9b855129af167b98a5ef4109cfbdbe829ae1c8159c77ab7df56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=bc35004e555d450302dee9fff4e8f741df0b840af459f8f39a092f9b12a11ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=3c4f4091ec79cccd687d6a1cdb4f6b3c8285fe0aa0ef9e709471503bd40072e2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=b18338e866f404232762b4bd8921cca9538fda7c9538ce79fff54598707b249e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LHPAL2L%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T160835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJIMEYCIQDX4KJnJGrRqPdvOy6k5RNyXyFyO5y0ABIyabJTZBEiOwIhAJgktGAKb%2ByYLacAe47L5ANCEcJ8%2FM%2FNPaywfL4B9j%2BMKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzOzr%2Fab0DYiaF9fc4q3AMTV5%2Brbak8HqO4wXbpFhHUBrZaVKmDPnFxa4a9DVm0wpoZ1f7dVyFYxC9m298HTKu2lpDJv3aONLMmNLfKidIDUGVptmJXXrCAYPpF7oUrWntOyQPSLUB%2BqfjtuEQ2%2FE0vQh3D3zX%2FOOxM6nZvUGmhuu2A%2FeWZviJa5oYSRndicaGKiqivgnfYle6qb%2BucpYUXf%2FVoqmoyzcJSPN8bvP5JxcSAM6ewe8O9XumLSTslOYYELdVeR0HJMGKgxQVLTQTS7FIssaSRa0T5nms3%2BvQfmX38TBxw2Ydf%2Fhmw2elWMhLILRwv%2BZCD9k%2FdMVpgWW8C8Ffhm9C7JkgCTriGv2BO2Gd3T7nMYpR9rSKDuOFHaEnNaothAtfmFszExsv48SHhCZ0FeBlpbbeFD1W9W0etWgHIYjhrFhK5k%2FNZY0hnH9dBcHkAdX%2BSESr08CDfE5neSdv6yUp5s7g5NMDtGAYMXxJfGZ8e8Qv19Lg6uYMNsuG8sscG7HLt1XNbJpkcKF2VEAS8bIC9N68APZyPrY0EZY3ftnOugpYytbN7WE9B%2FaovMd37R20YXBduH5fBMpm52U3CbF7XeWPhxYfhAK1jUqEIyZasIsPOJEdDVGV61d8fIN7gPboaz0%2BFqzCWi7y%2BBjqkAWuQOLy1F864Ra4aaZOWYkOUC14xlaOE1BrN4KSfix8xS1WY9nUNbpFoQA3exLSu563b%2FWaLZM3onLPg%2BswR12r2qchZhm6M0Qec04wWcmvV0v9khuhl%2FwkEfYkOtKXlehAKOYvTraMLy1i3wiQh4jeGMA2vpYo3jqK0rxQhFQqiaZJBANq96WqBOYsi9uan1hOVpEIG%2FMXXHahqYm28qV7ntFfw&X-Amz-Signature=ddf6f3ec439bcad4a49dbfcbce2331570aa71311b81b66d23f61341a0e50b5fc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
