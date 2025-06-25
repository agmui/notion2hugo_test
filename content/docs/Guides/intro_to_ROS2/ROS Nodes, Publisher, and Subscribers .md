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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=00ee5a61baea1107cf366306766846f1d70deae2507d86b84fc6b1f3c968bb01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=85d017d2d5df6948a2b320dc51787358b53c8c0b60c8b01b34030d2ed4f7a0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=1c6b45f117bc43c9d03e7ca3201fe10a4375049c45dd155bd14535870137a386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=a428b72fb890aa0c5f23174c5ee988b4cfd72eed9d220ff3e19756ee55ef2299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=7f345870f29afdb440c6f89bb387885a4b472f6242159167bd3582a09d35bd93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=6997d54c1f2998ddfeac584e96a3a821b6d8618a6357086ee7281a0114a24e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=7fbf5ec956a709538da085f951ea13ec9e57b241218f0d3cd569d7fc68dbf31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667MDITJQ4%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFk2Sm2Cb5XqenUIIePvNkMNjnlMUJP2%2BFH5cbnbugFSAiAN8zompaGRAdM9DTTqppAZrVbNywEDTazmPq64XgP7ryr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMCk4LRqPXvyAD41nVKtwD%2BgymeMg993jPNK6JsrDgar%2BggILSTVJSSJ1k4QFYoHMm7Z797WKNvHlmbBH5cc3%2F0Nwjead6qMh6xqiHvhq1vZ1ANREPxC04adWuJk5CNluRNMq1LuaJVxJNejOnRT%2FytsNYlt8yFbrpc4SGwcLt2WArf8lSS0hwd91lUYtHcoe1m9rs7PsFKbYBHwZP6gMFOqefqLNRGRcs9Z5PVVAfuBSGrKHu4ea9A1XNE2V97aBAd2qEuFFu%2F3Yvec6Ku%2BriFRSKm2v8m5kHoxhZ30SznFyI%2BOK7CgAJX9ej7GFdh9NaTsNGjkzMEpEBMLMmnnA6G2teaxiFv0esHnD0YQ%2B%2BwBc5QjUJM3YmIc96c47AtdJckncuwNKU5pvYdxup8jerhMMkyNO%2BK0LNTn%2Ftzs2Z8UjixUhVz0SnGqIMFGtmgZAS24ChvkBS%2FJEsvB3Zt8esGgPOHQM3Xjp9Fhb4ex5KbTAHQpPztf0gB30BHsRkGkgDq7g04492rpyJEI%2FFwEI5NdYb6czB%2F2mNoMQ1HOYcsfN0HGUcRNZ6i8t%2BsXW9UCgaqrfev2Js2Nb9j3V8RgUKguT7tdonQf1%2BYBRgJ1Djy3WaWlWO3R5WEg9igbNQqpEV3yzyyE4qODagIr8wvt7uwgY6pgHQf6P4Kt6WG32ERUTaVyDoGwTC7AqBPW722%2BKaHFD8QdMWul9b6kec9B1%2FXmkbdYfLqqAEDEKRixe28olhkaXLKeGQmgDUkcDNppLc6ONwwaBCAPpiwyZ%2F2VO3oMS78idgkPhbrKAWDjtG1VoWkt4zvdS1Kz3Opxe3pcClGN2qnaxNB9AFiOxTA9lEzpWtsGaLVeSlmGvdFkXddzhV8E16ik07Df4u&X-Amz-Signature=b3824306d8fa220c35d230d3c41a3293de674c45faa27f7f76239a223cd4ad8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
