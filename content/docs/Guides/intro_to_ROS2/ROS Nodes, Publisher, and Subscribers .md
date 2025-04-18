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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=6b2d6a4bc4fe51351de61c4a8aaf9d0b0df2da784fa7f4660bfb1b0149cfd1e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=7de1d195bbc58313fb4ccb34cf32aac08a077bb295f96a24c3ecc673344334d7&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=bfb5cfdf6206da57ee51a6ff3f6988bd8d45028687737d15c4f1a1685142ca6f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=5f2755119fc76b621f3ef381837fa8ce0b57d431bd0b26b2adc302c55ba375fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=4784bc28347862d70f0018148a7df8f5512776d2688494551ac6f6cd02e78ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=4be33b107f14d46925f65fae7a026742e09441859db3a91993ae3c8f2883dd19&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=7dbd4f7e3a266712331d0aadee26c5d80b5343a86024ce5e099b62d73c821c1d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664G6NR5XU%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCp0Uhy%2BaMNIaesuJLwFzsl4tFhkhiAdPoFvZKOWQxc7wIhAOyW5f1wYtY0A4S64MX2v81O9hoLgZIM1%2BCzKNL2W7OZKv8DCHsQABoMNjM3NDIzMTgzODA1IgyGAktAm7mRk40f2noq3AO6W5AD0Hy8pIaYH8Ta6j7yiMWkQGNKMhVMCBLdc9I5XXxT%2FTQ3KUjWPVdfq7G0XGIvgPfabDwnYdOr8bneiJv8Unm6aNuiFFPXOaqNVoKymTTZWKOfaY5GSfKsC9%2BbYm9y63tf4qWk%2F%2BNdi5ziu8vvudYLsOui7c8pInGHANuqBqbEcaW%2FR7h0Ci7b26psGwLT8%2BoeNzcfuhSVlH7jvkbu0RAprCKzEudRCz%2FhRZ9fL73PRBo5LCj4OVE4lUtLWzhiOtVhksphBfezsRxxDVdmTZBquK3uzz%2FktZWg%2Fc0T51qhNH4mAVlu%2BV9WWJsUESh6M6zfwRQHZGMuNnOsMBmrEhqw8u8p0RO%2FOhlQcwtZ8PYUq21FNODqz9zRGyfXKqvSsDNs6fiR8jsgpd%2B%2FRIhSpmvyaiJlezAff%2F7s441u%2BGt2ZDaf1KCMzREx5WuyF5zVFFWaMldDngTey%2Buzbr2EBPOSzc5ShOKcRCQ7cYpCbZ%2BDdmoM3gYw7k2curZTbU%2Bp9BLkgQoiIruzd6LJLH9FJorLvCfHyYnJLMZH7VTkk8R8pB8jZOVt6G6LmMn6TtB7fHo05AykKDhN2hWAgqetaB%2Fm%2Beeshw9ra8q2ZpoNUe9tUYL%2B5iK6ci81wDDxr4rABjqkAePFBFdJ5kC0Ug9W%2BNGQapgIFDS4DzuB8wGnClx1jHb1tQJ4BkaHIsRgeGC7cQsf0L%2BR2PfAKWrMLIYOjISRL5U1dUNZOx1WN9OboUgFalubYKACOXgpgFKMJIu7kETaU%2Fly9GsY9HcheD0vMQa9W%2FM85JG4YZI%2F3KwIH2fI5b%2F3I%2FE8OIOcA0DWURmfc2vmm%2Bt3bF%2FNsyM3IblHA0scZbnPgUXr&X-Amz-Signature=243bcdf8407ea65966de9ba7e976c5db9e337bea51d6a0da5a385bbf4d3d3c34&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
