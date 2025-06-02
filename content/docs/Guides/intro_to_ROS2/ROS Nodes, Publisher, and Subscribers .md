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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=151e976c67c3fa21763f08605597af6809011d06f3c20bede116a864c039afc2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=b2591f927956ee90eafcb7a9775c87e95133868b95d40bb8d113d4214670bf79&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=445310e369160a654dbf852e1af326406c41a78e2ca6b8782ef7308851a5c6cc&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=8d8fdef9c74d570386dffe000d6f8884c7ee5fb36316b7b273cfc954502bb693&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=4b70d01085bd5e7c164b518b4f8d53c6cd4ff012bc17e2bfcd32fd3516c6b13f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=0c638a86fbd9eda82c750919b4b8199e37ddfee7933fdf612f0cdd80beb91066&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=fa76222fb0731cec8bacd6d834d2476fc693defa1770970b6892996dd2ae08be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O4LEBBY%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDifo7wrLMX13llmMl6CaL9tBLXEabL3vnDcyactsSooAIgbuE7E75QlUSz5yk%2BVzAGp0fHyAm4EmjpfDj0GcG99MUqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmP3yXMnblXLvq0bircAwyCQuqgfEEoVLSHMlu8HST0mzf6Gkv1gDmwB0IUnbNSpwWnPZmEnJiQzFfGXmI1MSGsjZj4CDgPuDtlGQ%2FrhZ4EDl0ocHsj%2FzonC9Crkdp6ZCocMxkpYhJL0XNaWrFqzDsfVmc0Y78gJ%2FwCnnchf9SgI6ty14Ylvez6s3eAren999Fnb%2BQS0vplU4%2FoneZQO%2F%2FoLgHgZDH5eGRspMCCgVbepPZ1zxiucUfsljKtaGz35TzHzKStcJQyM2kD7K3Tnwc%2Bh2I9o5vqSbhCjGeTvymjoNds3wYms%2BhZlJLhHTDFMqWiJ%2Ff4eRQP88g7JFkW3t5V8GULVvXe0JgvoSgb9UMGR2nDMHn4%2BYuM9syUjd1Pz%2B3u0m2Uw0SSMCuDPMr2qmZx7GfQYvG4rNYP%2FtuRUKr6Q2z3u85lEKaBi1X7DyRefzKU2R05qrHcg6Z9PcEOUpoEmdQMLs3v3lp36clF60d6BgBig8Il8%2BFj7KgaO3JmTeoHpxBIV5J8vJHIntwtnkPg1riQITPQWuD0RvlCWvpUpKzLLzIhhQrh0bPKW9lxybJf3oJMPlZDBhf5F8Zt58nI%2F6kKIk6bHAISafLgpxaL0qinicgo8%2B8uSOT4renh5rikE0DXcMs%2BG6jUMIzY9MEGOqUBhLeHEXGhcQH7mmiBO2Rc%2FyXEOkLtGmAqYy6L7oXZvEGTINegKsDuTfdI813svi7ylD9c7CEtDbBwJB8%2B0hpP4QXRwG1yD2wySLVl4t1LDBXcZIJaZJf2aBQWh57og9U9PDJhxpZII8uYKzFuUK9aLgTo1c8kMQ2aAvVTJKRJZQfhJ4j6VaRblknPL8UhjDjanWlgjAwOusQ8dYOPK8w94theyr3S&X-Amz-Signature=6abd7a1011041aaa7913f9f0a3acff609270d308e4b799389f820af59d3408b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
