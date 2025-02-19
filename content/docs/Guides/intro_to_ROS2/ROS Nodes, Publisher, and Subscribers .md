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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=77394b9d62b807ee8e7ea38da3b2bfc24bf6864b6298e01af3c3e92c3052a9cc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=359d3062d8ee4cf61e7eae55393bb1dec38672ee847ad8997505bb5133f7e251&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=9458783267b074716cf00e5c82efc1f6d3fbd75f7b5960469e8d417a994a1f2c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=d0d6dbfc9c5d03f4a1279fd5606599691d35ce3d3f4065ddd4bb170094b4cb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=bed081f4ced676a5124e51c92a660c80b51065f062a3f33eef68989e81542094&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=3860d08f0a4329bfa0c082b8b7026f5af0e0843ac523110e05c219786b0cf828&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=3238d48baf10285b824a5705a8d626e2823cfe3107ce107e8d17d3ad1aa38f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3FQPHGO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDb0exo4vCuReUBqb9OOiTHZGqR7v2I3Xe%2FbnUNY%2B4EfQIgPUK%2BrJec19Tr91iNeBMQByj9HThw3xBfQmZItHmIy%2FcqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK2%2Bt06jpTX815I6uircA8Yey1XBv20%2Fn3UL%2BeXWyP%2FQdOTNofQQFcXcDWw275EvIvbi3kjHdLcEAXtwwW2P7Tzaol%2Fmy4JSl682inPnlEfLy0Zg07Uw9%2F6%2BkIrGKvvZY7OeTVcq7ue5RObYj%2FQ7Kn8UXKypSSEgqZC6sjbSSGI8wgWfEnn7IZZobTJxL56R24wHd5O3EFBEtM6MuJjG5BG41r70EdosJ8o8TucJ4e2%2Bh89a2%2FWz4A4JZjn9VD4toFfH4bU%2BxOBhSaGn1T8XmYJNptg6uEuErqvAfTvDs%2FvwFAiSlhJM8zlu6xCh9XPmgutX66qGFKtitUASbTfBs7fV0BZ50AZ8y5pL5jyWrHZ8b7Wf7dgH9usiLYZp8doVFA293aUQgDyGBclOhyCCIKA0wNBKtOr%2F2er8DIXCeCAmqF0fiymi0O3tn%2Fj9xvbEquOenRnPIlA%2FyPFNYQ9d5FCD9pBu%2BmSyypQwqX7UBT8WNDp3w5ALVk%2BIyrMH4%2BJu7aWDSIwJFspv7SgmZqCQ4dxEA%2BA7qM0AldRVeYK8TtTAZtztn1CSk3guuXbWnpJn%2FdgLqaetowq0Vp4eFDjftGqIKwilF%2FZDqluFWC5RBJgp7r43UPBjm4OZ9m7CSKvDXLKsclZUTfYhDxM%2BML3c1r0GOqUBAoIvrd1Aan0ImkW81Qf9emAwOchQKhkTZjyYJoHZFtQcBMhblLGggtcHUmoXD%2BRbqlLtQxT%2Fz3NZG5l21BWJpa51gQMPmKX7873RGXrzUe40YRb%2FZn5q6IJIsjWmFfGY4rC2tjSLkd8KqRMNQlXGxQe8aiDdBjhPRt8jMJDg9HPbKiZTyyAqa8jASatqX4dhD1xIETXXuj5VW3cp8Wna8cPWNKyf&X-Amz-Signature=37ecaa999c831a4dae1117173edae0e4114246a980a1b10d0e1b6cc03d2aa794&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
