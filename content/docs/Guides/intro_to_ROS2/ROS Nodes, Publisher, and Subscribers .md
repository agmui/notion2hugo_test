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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=83178339a0a53a023134edc70ad3ce2cda5e812da5763204642638fc9c3a0c75&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=801a5183af7ba732dc2446bb25c77526e02fafc633153511d27ea33793babf07&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=4d94ba56826413f23a47852f97be36261a5ad58b99704c035161d172854c890e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=240ed2950f65498889d17861691870a94863ba88ce1b0ddffd5e92eef8180e91&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=8b63579acbe3a1f2e6ab299af5e9340d59647a51f03a17dbd092068158b3f0d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=331eaae6887fad4d43526ae9576994be2913a79213c39bd742419e5dee3d9517&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=cc3c2a7aadbff96054cf21ecefdbd6b0bc76ed0160f6208ddc4a40e63bb6ff90&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YBDW6Z%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMB5%2BoZCi8hkRhy%2B%2F634cDfk40jVasZJPeysOm6faQQAIgDgRSXCeAZIoVA%2BXVVwGJe3%2BisDVTOEYx97920uwi%2BtwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNr0q7NijOC3mIGsBSrcA3GaYvUh3H5qaaa7n%2BDGEoJz0UcuKxBmIRWZc7zNeKA3rQhcA5H%2B2LjWLHtAXxcG0cH6lTDQ9xLA9jL4jNu49o2xJj3kiuq2HEcD20HBFQhO%2B%2FlbNvdTVROvvCzc9P0%2BXwGgpCcThvBLWvSTGRJa0nstoYAmWvcCorsEd6LjsOgge6ZU9x23o8dKxt9JExNo5pGcKmc%2FIsn0T2VZrf0uy4H2qPn87Q1ZHhpyjbX3mYPxqaa8DZPjzB0epr2R8UjDZ7S0X3wm9tnYSz6b99aeGpcoYq7oLDfMsuAwANYE%2B92iaQ92tlb4Un85UeIwXw4KZkgZSZyzZXkdBQbGxAEgDyOy83suvXIUnu%2FJqcT5hLFDKDDInD3NwBZ1McfBezeZagth%2BVMd%2BChhmnG0HSp%2B5Yz8iJthDsSrYIvy7AL1ibxvSq%2FS3DyZbhue90ssK92ls4roPbTIUqOP39ZfhO%2BXnxkkaQpahNofZtiam6XPGhPlQNl%2FlHe8hBslfPTu2fwfMWP7G3QTWb202pqd3Nh3fvQCHiPe7q8xv8ryCydGlcZSI0JObymM40WSwVkCF0Z4e2jZlqocJnOlcaKaN3JCU0jUFxuqAnoWnPjK6s7n4QSxNFSm1krgj5OMU8FYMKjGsMEGOqUBZiUAd5cggwflwUdfhK46YVfssYoTYVUXmheOxQNGwPuTU7x0CIvPv6aYwyxnYTYFxgt5VxDcyiUg4p9WhnGIxQ9Ygm2oxJF5iEHcDgqkV1hagqlvOhZbu3gnm6jS8UpHt8XTK5NkhFvs1zlRG%2BRhhAFyAMFyOhVODECZqwoU3DwJyeTqXYFgusDdFfD5%2BTGk66rk4CYt65Pzv0IQ1Lbmc0SyXAZY&X-Amz-Signature=c351ddb600d45ddef4298512378c88bb19129e25dd879c8f5b4b2061d9cc3852&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
