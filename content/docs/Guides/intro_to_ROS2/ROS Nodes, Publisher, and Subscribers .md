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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=2328f3b29d9dbc93f2187a9b69b5ce18ab7d9c471c871ee1db2eddf4b53cab6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=c1069997267b35a9e3526a664d3c26b53259b79636b106ab03b1eaf3ffdcf95c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=bf6d4126302e4a0f67340e26a1759686ec2c52976359fd32259781dbeb06139a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=ab8d30c659cebb52f186e819ab169b0136171c9eed0cf226398e1253b16bfad5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=49963060bfca57ee2ea5cbd217b83afd88d46734ab29bc7df6b69c2f7c152515&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=c9c50638704bf41fb62366ab3d9aef9bf3b161a64f9df9ac3ea821646f044c7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=66f039947b3e1cd6f73437c3999bfe0dbd5dfbbdb0b23b0861f0cd1cedfc9468&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662M6JC56I%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T190123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJFMEMCHziiZwDIWS2Bni3i4ZGKGrS5F9KQksVZb6UBB3OA8dkCIC0ZK%2B01UsCNWKiLo%2BvOTcrqEhfoaEtghhRlK3E3AxwQKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRbm%2BtWed0jQEg8Dkq3AO7DUls%2BYvL3b8n81rvPk8O0a2Dlx4G%2FyW3dNVpvwpPn9HTd%2F%2Fm%2F4va1ES3uYmK5N%2FzZEZRmxSscRgjqNyFG7J9IZ7BPAVyvLPi8WeUogJ%2F%2BkW5ws6ANE5nUU8KfQDAVriYjabxB7qFhuRjDcyoRJHc0Tfu3uV%2BF5BUyCU%2FujlVqGes2ITASka64SLbldPA%2FMd6FttWdy6JxjxfMvAG7Zkfgnk%2Bs8yI5SF4zAAw28X9gfNxWJmVg8%2FkouCRmcISp2jCaIN0rlWD3lytX6FqsQw0t3wxoM8dSiO4SoLsb2ig6TV1jzQnfdsOCMwHUp12%2FgKwBIsy%2F349eak6XD05IcMRbUKIhJ%2Bxr31oLdV1G0A1J4pQdyh5LThlxBUggnuOK%2BzXWlu%2BxOyNsj6HrlrapHgB7Xj51Lvw9TA5ucqnTN4KivsZvJhKekYOAb9hdON1VVUv3DZx8g5Bn6tEeRhkqOkbwnAmyzdhvI3kWGOfyfzuYsUXKGJjjukT1GRUOfpBtTAXOQkEAdSHIEgwo5u%2BpkC80cvnAW90uLK%2FaqEWw9k3KeZ6c2wU17%2F7EMM9eTK0zJd6pnME0Fs5et4ebnZgk5zhVE9sY%2FfUuWHRM589EmRjkMtPDfwymjYaynQpujDIm9O9BjqnAYAK2GW%2FK1SdOdenbwgHzUtPcsjjVVarYcXkS6QhVa0q%2BwfQhA6yS65vhq4iKcwiT3iZzf14dLy9Ca4qbUxiPTSYMEDnP2dyPNpaR2Uix0lK9C88kiVFOS%2F0jaB7nJRNJHSn8gT8d5jU25eJsYyVBF3EWwRmMpj%2BS%2BzlcceX41ww%2FiVAMO0Ikggd9D4p%2FFM9bMeGXAMNMBP%2B95uM%2FzpGLgwY%2FF%2FJ00y4&X-Amz-Signature=e30a4c76f2ce468b7a3a0204204c5beee49d650c26d4098b6f705c76f2399d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
