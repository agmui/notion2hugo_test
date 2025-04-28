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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=3630ab95ba5ea25fa39e95cbac13e78a7300599d27220681e780ffc37699a3f7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=30ae2d4a1aedfd08ada0a24df181317bd249c664edb7096e24a15c3fa78fc650&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=7f91bb05c51c9adf27d886a66ea5920e24db357e29ef009ed2f003949edb4395&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=f8959d249f38799aa9677ba2ac496a0742e6318015e409ce50751c4e7aec9e56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=7dbc2063e7eb09004f31de059759b34c327bfc35facf6ea4fa4fa83b17d63ace&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=b39fbfd66bf1ef5cbd782d6ed3dd8d0ddd38dfdfb1c37060657810c79cdde1a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=efacc65b43520c248c6a74c42fe3347be7fd40260b8f2e46260a08f424a29e2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3V5D3VY%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T004230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAFjOHvyozdkfsPk%2Bnw7g%2BnQNjLoRVbSAZNx%2FSZXo4vAAiEA7kIwjyUEYHaVZdDZCosx%2Bqy5ltjb1TS36yHCu%2Bbfot4q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDCJoWvvCgVmwd1DkGCrcA2fN4saWfYNnCUcckSF4h9dkk7%2BzUxHB1Cexl%2FZNHFSvn2A8hbhXsa3A7Gbe8d7o4AC7%2BEmLfmXD%2BrVmljSS6oS1bVPzymkd9%2F8ilFwvy7m4Oiv9SAendk6nhvZXXb0Gm2zX8sNgvkpRMCzyUhw5egqMGBpho%2BEqWnJn2NkQtSEVgPdqn0DtYZv93knpi%2BwAfIggCcGvt8nlSRvTE%2Byha0NMT%2BgmMCT%2Bb%2F%2BwAusInY6GD4FRZYIvvBfDM3wxKAVfTHYWLO4%2BadnkNoH0gD7x7MtmIroEYYwKe5EXdKQ%2F%2BCWHleSZXwCzvXzI3mbE8m4tzv5cKEg6hQJzUCKbVTs42UEbqw2YMlGF4DdjLD2E8cwH1X5sRJvG7aFzISqO5N1G1rO8Ut653%2FpLEaZlKs5F1yL9zBJ0dCQJB%2Bz0lQdok%2FlRrn9IbuCxRdjXujwBV976vetBWtgnRsfmroqv3Ekn5fTfT8cshEgkqFJNPa1wIPpRXshE%2FR0PfA1kYdiymczmRUOpJVtdWMbivaHnpjgxrbubIRaYPQaWpo%2B%2BUDfgA9lJIzxoqMznjAi6MyUkGEsheh1Py%2FAbGPAp30UISg7ExnEvLi7W3W5Q2et%2FcVibMpetwhwVVPCyDgfuF%2FSHMOqOu8AGOqUB3N%2FPjoqzkAqABG7wKgHe0YPzffmDedUS7t%2FzUA%2FRnm68wQ88Em3TQh0pTS1mdhq6NENTtLAHKR4NecS%2FQ5FpU%2F7ldm3NBNNL21g3YjxjT%2FjvApmruWEfr4SwlGkkiKxmuy9WnHVkys9WZi7WO6Do9K%2FRA1jY5abjKJuIM6yvxq38JfS2iJfJLgBmiki6cIkR3TOS4m2tIglkDCQazMJqJmX2iCtE&X-Amz-Signature=51f3559f4edcfc13b4434a7244ec42010e3a7cf6e7a3c52475aaeb1dce46141a&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
