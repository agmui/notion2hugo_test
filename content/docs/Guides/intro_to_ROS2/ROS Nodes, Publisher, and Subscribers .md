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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=ac16c9a878968c4b672b156fdc4062ca9ce6eae4917ad7e3610ac6f3f01bf877&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=948a5f746040db380584d0cb7365bea76bc0b456e1311840f1e9c6ce6729cb32&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=644409544c2916a3107146d126224ec79f4e1869e28fe816af5bfb7168bdd105&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=4f96573cc09b0eafa0a5c4b918d2f997bfbd4b8dd15eb50bde41c29b4da96eac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=57c1ce91a16e11b2c362b93ce4b9d6b5d5f171f137739e746b5c659082698dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=2b44df11120dd27f1b0120e43953397986a6060022195724f108e28cc46024c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=38661cf1766b6a12ca71ed21558359358801e0d4e1119063f4a7e9044b2c3549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYAZNTUX%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBfYloZ6eEQ9xsdGplYeUtu7wfiUmrjF3VUbmKVcNaFhAiEAgkDjn5tKn5UNCM%2F4acks1TzhRlggca9eo1AifOQ9%2Fuoq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDL%2Bjq3G0CVW4IJurXSrcA5zMkrhh9XRHgLbHRe%2FEtCniL1bvZ1UtKI0QTgVnhQdf9CCwLv%2BktT8eAjgweTvl8JNFNRVdpRKvzUyCPgartaOdtp5PAvvrsFypkvp0teMmYkR%2B6BhZb9fNM8bOsl695zXADwBUKV7sd0X6D5rmi3D7qLhKP4zaMZTcGAHb1UbVUXRHZUVZ1oLxmVXCduEi9FQef7KkLCf5BfqUiLl2K1J8QMxKyXZyAaEeaa0O4WSREN4y3gmK2eRebBFWC1UaTLYMXYzzNqt8i2xD%2F3%2BVruvhunTd8ctRlL2VJnYUOr3lTmHaceb0H6pLq%2FwKs4YJ0%2FIak2cxdEkjaJ5ekTNJ9NqxJlZWpF4uGRCNuGOcw7%2F9BkhMUS6XSoojiInPg6iaum1IWwvGXUfjM%2FRx6rDZc%2BvYPuzJIEABJ1mGYTJwcrp6wPwJaN3D9OxxCuSEvSl38JrdQgvxdrHRDzNMJVwbYcCxvo1jkf7qxub%2BvhH5dLXcXS2K3704Y3%2BrZsQCLjcQ9pO5Qd0IIHVIuyHEbmJi5R0o7S95KbXDfqsPSdN6yXdDY%2F%2FhheeEolULc37ZuHupJe3u9d6vUEmeu3Hu3WKBuY6dQZwz%2FE1W4EgMC3P6A00b%2F98tOsUNl99iAh1CMKbUzr8GOqUBTIlwEoYjDYXvWgSIxnJTyBROfBAwNbYpjb43xJRnDwaR%2Bjo0NvjtrPMyhfY96yq9XsP57nR2PTYZoMyvhYVHzfqJqgx1NvmAKmzTX2aJr3N29mZ%2BtjC8It0Ldri4bsbm6B4CCOzAbIJm4lV0vkY1LP%2F%2FeSfu6JtR09BgbVve7WXWdCMN7J6hUFM7HA2n9Km09npL1aC5i3r1ZB2RvXe9b8AIat0y&X-Amz-Signature=79035db8aa64076416de99d90945eada9101e8e8392093c7f401c85a07a399f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
