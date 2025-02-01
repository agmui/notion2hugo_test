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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=45543b5b4eaa243b031d692bf3214011078367bbcabbfb7a2162fef24aa78f5a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=50fb946f0774bda10498ffb18dc37b7896ec34d66af6b28329a466875a3064e5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=41b64938da38b4f59e0ae7086fcabd8a0a6e1af2a5a272be8a7b49283ab75e4c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=a552645ae36319739ec59e836555ad019fda88500bc895375fb13c72cc80e7b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=dc9e00592e761f217a0d3a9fafcc7784f8b9776f05da3f0eaaa959f514b3fcde&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=0cc610e8ee0948c33f42adf6839057a6dd038078ac238f36f0699eee8e9a68d9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=38741a196037df0746ad8d803bd0b4091a2a4a8b9e7868585faa61875210b036&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXBYNDQS%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH2uqPqCXr1Es5BV0OZlOa7ZefooejL37TJmAQrMLuESAiEApCIyjFWmRDXWfeWLuDEAwnZhQ544qcZR8Fwr9o7k2n8qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMLRuRQF%2B0rmf8uSJSrcA8gRalKEtuMl7Qd6SfaN29LVCc76Pk5fg9lSSU%2FiQje4gysME3ju3Ny7%2BENhUWCnGpj7HH0uCU9T8KupdW1v3uoh8hu%2Fc%2B%2BnFRuR4iumzNQqPILVrf29gKKvRAZO7VMAbCsqr5k099%2Bcj1nj9OepYZcdiWJ7YLbvTgY5URFpMY9FBJVuguViRUYj3anHA4MD8jvH61HlAIRWQZSRXhJMgjz9Y4KHhUtAr%2FnmFi%2FneWay7T290nNU3AAILcRRHRj7je%2Bn4Ws3lepKRz6f3UUqkpdV8Bm6DhPZ4Tog2Sfl9Q0eGmxPhXL5QdOw7MGsZAxfFxVZyIOLvhfhYGLWz3S3bKsN1U%2B%2FMjYOGDqa2ak1MFX1aVij1oHOD2K0CyO874jTwWeyceep8r3S932zo9P0ruwdjF%2Fj9ioYy436iQrw3%2Bi4lGH2qNRk5K8vxFBYYz77a7DnZrHf4IA8hoTP41JV447jSPQQdXvSbzCGMByuidHwT%2FXBxjhoeR%2BvYqBHm2nWe%2B2K7wl1roZ8YtucCQRzpH7eaSI9YDg4tOHXr%2BF%2BVuqzITG66%2BKqge7xvfJMOZtb4ktAAqrvqHhWbodqDOy8ghhKV6HC5CgaXk9%2Be2A3MmE0mhe26dCbQKJuQJuRMKLG%2BLwGOqUBggIw5NOFC3%2FiPkPzOlPNC3TAiPhOm4nbdoKdt0C8VyjYiqFTVvCKBkN%2BqJI2YMvVTtRaRT8hQ4op%2FBzFg%2BJ6gdm3iyvI2zk8qDeHGP%2B0CvbBNC9hPs3L8F0E1i1n8VOZYMKsFkondNibIos6%2FJHYrRD%2FcGQFYJt6bxFeiC3UtnDLVudFHzGdVJGva2YDTX6kQ2kD6Rc2Sxm3Tri5ZVR9pg39swJI&X-Amz-Signature=26e32bdd20f9814b99eb1b624ef49f674d744415049bfd937d81d927a7ca2918&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
