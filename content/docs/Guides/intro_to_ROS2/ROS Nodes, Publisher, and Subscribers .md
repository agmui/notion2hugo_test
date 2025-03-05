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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=1d5b4fa0687ba7c7eb06e60d20632d2447f9442d82deb5d6237286f48720f4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=f935b5e13e030c8494a2a81685b874abe5b470abd06b2d3d1701a85c71cac18d&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=3b2ac5ea36505398081fe3bc6930507962fe9e7e0861f066d07ee1d9b6ece53c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=20b1f0bc7998b7aadfa50122ff2ccf47faefdb65fb7297f13d5b9b261d445e2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=f24637b66f8ade88c24aede4d12d949031ba9f43e22c19a4a4d1c6d5533c2766&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=829ed70aa08862ab5a8757dc51325e26410a5ba87858f407088f0977a5af4513&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=0de4360da4cf1476cabdd6dce9167f1e637f5ab9cae371570053cd24f8df56b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XXHPKE4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T181141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGXEPqrVyrlX8LxTgqvxQrjaHm%2F3x7TeaBfUu270wIO%2FAiEAjQmG80BfV3CGlo7Lj3IkIctvISwLVutFzAt1eUdBFZoq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDGWo14vTFHghetJPdyrcAx%2FcoAe852zLCVILGNQZ1Kck%2Bxr4TwI74W5NpirtFxa7knXTb6WdLMrFjegqjHWxR1zEN84QjqrbzTxc8GsGQZrPcQUbjLuOjzjXZfMzggiCSmZ%2FpIpbTD6vJLUQ9u0TbPUoJ%2BULLUN5kK2DQ65RqvBjbUBN%2Bdd0cOLkhrby7%2FJETOidCUBdxZoWBePfD6%2FBCZ6RdWOfrFgSYXAWyPT%2FiLgAOGRl%2BoKOioKyHxV6XrVqayk0jY%2FRpvyFiOyRGehdsYiTZKyABA0QxI%2BiUCHWbPz6dA%2FoXkwrLkDaiitPoDpWv2Gn8HH%2FuA6Fo1qmW8CoSnVbp1C51LH3oC%2F3JqCFWEf%2BumGtKg5KGhn7th%2BAoQczgbjgPL7RvuKu6Y2S57Hf5B8zf33JgzhZkKPp%2FMwjkQMjpgof1fhxUvh8wIu2q77TcLrfDLcP45PHrdG5TdNbw2iW2V%2Bv%2B0GmBNiO21rW6EXWgLpKhPD6iXom7r2%2FP5Vy84NGSbfIzHT4OByJadFHKaOGQhowEpNHS6X0dSQtDgD0ks%2B%2FXZtJC3XDvI%2FCnno682DYLRtCIOE1gfjTcWx%2BqiwxHtqBBi9uy1vFn13t4e3iAeXDAgpijPYse5c9TkVTJsMzHHJgElh4G8QaMMiDor4GOqUB6ECzrDAggc5qgVIWwGcjfjgzaFT%2Brp%2FTDiR1NSS6BzJFvMnDqFoWPGbvhJCWrel53LVznf%2FWMa9VvSi9KVYcC8uE8tagKsiBQCjS3D1JnbIn7RoLFXs2uoyUhjqfazqriUg%2BH2ecQVqJlOh5LMAdKgMTNOFLoWC3V8xd%2BDD4oqO1VTYYtfvkbX3yWEuvfjz2xxHTuz6GwNLCwhUvQbGjUNQWaYMw&X-Amz-Signature=f05a7fdf3ee25d5a83274d3bd590f0a0e9a40a8736faec64e35772ba3ba3ed09&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
