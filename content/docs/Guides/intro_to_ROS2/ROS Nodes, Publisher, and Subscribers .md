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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=743faba9a5ee57f96db343c80a1ef85bf90795ca6c7ead4da0858c7bf4e41744&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=ad7c01fddb8f03ef51482960fd51ab8e993265efbb9fcaf4e41c84ef30c567e2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=5f0d162653b7e6a4a1125619eb4e1efd3419904f83b7149411df2878a266d399&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=69c33f053ea8db9d7023c151ba2b899a18af3797dd3f6df5c5975d258799d923&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=a132dffd990303731331e898ea616ca9869626c68dc5842508a5e185a80b2a0e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=3e0323dbe13e180ab12c2ae970c4704ea71890c1dedc6ca0c0c9a13edf2168b8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=447ae5072fac18b2cbe8e7d07ae8e1f9333a4b7718cde8ee40e16933fb6936f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y23EIXLI%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T161028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC4DNxD%2BrGPF418Pgqu%2F8N0B8OI9t6Kec8LVi9FBZOuDAiEAvrstho2Rg6xI%2Flm5jutNLtvTMyZtdMvwLdQaJXi1oloqiAQIjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJuZBAisyigSZV0UaSrcA3lEhvONWBVkdlI9umEGg5Xb8x9RxzJeZzQz4SqbQfX%2Bz98RxyUUm0iZlJE%2B6aQPfb31JmhhUJt05MVFdjDE4rQ3EhuOnwf7TcIHvVyVHtmjBoo%2BsOQPpV1fzvPfzTOf48sqMwCslVzdKo48KtVnonRy9QWIA%2FimpUorLWPm6OTU%2Fr5MeFnxtpYFzVZPiwhVa6w63AIkNVk7rLE74DR9Z86iEW7zUi82Kx0auMkOcPhsixlP2KIG5K1iJzSN3ft%2BgGEVg%2BcJJvtxQOW1yn7C4d%2FJgyesoN9cdjwHtMXg8fKLA9SSnblWFLrlqFkVc4be%2BHE0MzHw4ETpM8nWSP9E6rzR3DiFZgWunvLQh6%2BFnDsMPMhaWiZLL7pHm3615c22k6rzTw%2B0WD3qsYoTgd4GSaCdSUHTmuzYg0Fldu5x9%2B9b5XUoyqQoTEnO4Agboerxq6h4APYhWJ%2BoRWDRuze5wiJ7tTXguvmVc4UgPP%2B4HN0QUGjuFHXXKS0MHN%2FheSlM1m1LevlXro6lLQI5IWdrpXglaYZtrfM7ZIGV69NCPLMkqi3KoWfMrgmSo0Jv5LHk2wHuz1IZ%2FT0mYT5ipxKOrD70N%2FpkX21U%2FlgAvGO4RdQP6pxrtsSy5eViawn8MJiy4cEGOqUBctNQIqlhqzlVajWZ2M46EJ%2F0ndxUE%2BggyvOzHZj%2BUM8yEp6o398YVLMKqKc3pAvTiFLHz6yeyTO%2BcdR4UyyFICbpLRXiZc3aPCpu7uJ7b9UXDKpwEZpFFbbj2cyKq2QHAxgzcKrMzlRLGgfeNmZH8iyfUkJ3Z8iNQ%2BViKhOJg3uFsN2zfIv74yqRdM8MuOSrC5hsXXTzdh0wCmwZmwVoOG%2BrQpNw&X-Amz-Signature=76332f387e5336527f7113eb1c3c94268de516a2e087b5cdcc825d9a1355c031&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
