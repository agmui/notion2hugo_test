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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=ca586d5a6be976b0cc2d502c298675cf474c46ace8941d0e046d4c3c5daab972&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=f5c06b5e635de7346641048c96a382f9b38c1e0cafc088eead3608b971791708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=55b09febde0b4d14594f170a8ee1bee90c0e609a7af0116d87bd9f50be040a60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=bce8ff249e6e5d7a8527449e7d37ff52fa3932afeb26ed1a68c0af180c3e70bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=66cc40559409b7166836a643a86a7e7edeb30ca6aefc99398b03dc20408b81a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=763e214cc5baef7ee585f160d87ad9719033e9a6827401a73cc6c7fddc83b719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=1db22aa37c4549bee339fbc4059ca66d6b6d0f14452534908c6c48319d6c3867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOVAV2HH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIAGcxt33zr8dQbsbrPv%2FMuwBg93YAzl8cJhc8N6VZZOtAiEAoJS4MTsZZ6QZY1i4k6g0kgCj5VaSLg3v6qkdMThaL%2Fkq%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDJWvI%2F%2Bmbhj8yPElVircA4rJm4wHB4USZy0u%2BCmNGlyh5O%2FXuMj5KUr6L6v5lifyUgz0Ftdfqa%2FZZ%2FBV3kHxZxn%2FbPZZgSt5MogP%2FpjbKxei0Om9er18W8sdZnW%2BQov3QMQprc7oZ3x84M3LxWy1YY%2FvlZ3lmpD10EbD0qw%2BTMSqv10vhUtkrEvnfX%2FD0HEyFmHHwSqTppyDh%2BSaWhZobYXqG5ibgHV3zAWdlhMIdmHc36YiO%2FjVvQkb8UcqXqr5uSAmQCxPJzcxo7TKOrf4C%2F2c8sSChDKYOuqLCjbx%2BiKdFPdjGCF4EElypO5HGF4bC%2FaTFyAqogsGl8AbVVjL67o%2FuSoez%2B7u2U0tc7vUFHv6VFAJVq4SM8LEv49CthnL5hpYKVyNrdlL2WfDwdG1HbUHj7DEyzkFmCp3Q9h6f1GnmH0M7Em7Gs8rvf1%2BqCuBNd4NGYLBgnfmrPihYOMziexNjKv91l0qNtalF%2B5wgxbmW0bbV3BV66SF8jYpu%2B2%2Bd%2Bs68KxuiKvwWBewE9Q9SIyiL3guteqV6yKrzJLI1dBWMJ4jgiZJJEK6F%2BFvAmdBrFFx%2Bm5TZuv5nVQbnrqQHcMELTFO5Z%2F2O%2BXnTOWUMKqPCHF%2BCicSWc0zCBgIATf9NhJF6HLnIzGVyrUmMIKHksQGOqUBJMGl1%2FHwI71ALGyqZNeoqwNB7xVPcDPNIsbFMLNxQl7BoAbXY9AmhVcvCgtmkfKHvWY%2BCwxq4c8OagPzUxeWk9wl3Uam2sKeajQ%2FInx29MLzVdl%2FnWYaXjBLUOez2DthlnEwkZXfX%2Bb3w9YT%2FCkDaJ%2Bz%2B6AzoS8ZvGv%2F8t20yW3JENGvlBxlBgKEurl5LTonxvbOdV5KG5GciFaExb9HYyiHAVYh&X-Amz-Signature=e57530db6cd4a8dfaf1c66d0aa262700b53e79d00daaeac50440afa460a42962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
