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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=e901f032678b0aeeecc343c690bc452fb095d03b0d464a3d1d4299d464c9e02c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=4656aef37f56dad933b3623ef2e3e977cdaa840e9a15b0edeab78b41600152b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=4109013006a6542c0d9f1193506e5c21c6d3303b6ab63ef08f9a4c9681011972&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=f0d8799f2dabda4d2f9a19fe356a29cf089c172cb257da55b08cdb88fcfcbac9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=a5349eb8e98800c571954985197971f92e28a589ee79815e79b8e162bbe378d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=0007c6d5ca9f02c3bb5ea900987085b7c2eec5c45761dac3bbdd89019e6387c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=9fac713d54583cb53437780d55908fe884704e6b3bc9207289e32bf2f6997ec0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q5DFALX%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T081347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDW52w7YxSjXwpvR4Qqfe6ci7jRFYEe5gh%2FcBQZ8q0euwIgXVTOxgfFdNu24YWFUAjZZ%2BY1yxRKSXGq0RMiRsNJiMoqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDuWLQKATf%2B4EYgxqircA3d1iWGN16o55lcE28Rn8jZ7qbdAQtD9nhd6LB%2BQ3FIa%2Bfy13PX6NgjzCiKxwdawMw%2BFhmjJmbeAy6xgRtRIUB%2BsaRsUCoF%2BdTooCgcMHh29bxHbP%2BfWUiwKwZumohVbExsDbsxPfAbnvCKsmxFIX%2BrE9KAGIXVEC8fepz5HgIDUo97C4cLMVN9mpTTjX9ZkodAIbbARVT7JGzOAOcUWR4%2BREqu6y8xrbLXazgoLpWD5TQF7%2B9%2BymlbIeBPeO5NppITp7S%2BX9pdVEiHK8V3EqP44kEgnuhW9zKodOQ1MnY8QLpwBWC1pkLJiD8OyrreSTzl7m%2BJBzb3deZQSXUwZHjCBWx7s3lDWjZCd5G6NMkCHYoVsWLMcU0dZKp9SSb0OH1KzBo4gbpy7OYu56%2BlUsHxuAsAnaKITklhK68IgQ0HvZhIHQbI%2BtlKCERpwqbRkn2OIXG0mIYvb4J719pCPxlIesbwoLE2raG%2Bi9Q3IHtwD1cHiE2CSw8cE4ZCRMn4UgJx9k77qRjnXZtFgC0709DGE9j6H2NayP99dHhwbzPIz3NH7QrgRbzDqV1oHwHlXazLW1EDGts1MCw%2Blw%2B%2BaCrO9SggBH3jaYYDcSG3vn%2BGO2naR0dZmTqSU9a4CMKGd9cEGOqUBlr6Tal8KFNryR8%2BeRumbG1xPFiyMv2G7tTe%2Bz3D3z46ubGvLxj7et22b9MrNAhvEOf8BC%2FeSS80o%2BePgzn1kXQVU%2BKMO10LrXJflccbX9OFRfo2qNXlEG%2FoYYyG%2BqqKw5NDcyNhSGXHGiuOjCI34vh0mM3NroUv8MOUT4mHLe0hA%2BH3gAMj3HekOgszxXjmpg9q8PW4JrS%2BFBIJITbLHmstHxwM4&X-Amz-Signature=15d80986d0b6f1bec1ff1a1c17d76ec2b1491a591bf6738537ce09e4c87f065f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
