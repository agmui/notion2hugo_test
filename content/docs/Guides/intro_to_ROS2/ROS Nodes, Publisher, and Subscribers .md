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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=6bfe91c6488170d64b4b267ece92001cea002714470012f31886d792dcbe43a2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=8843fef5aaac5fef41e1ffbd7fe3d42fb8d77aa654e3b7417744a66671f778b4&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=10a44f9c8924bae85de62b48838783f34b23803b28f5b14ccebcbbf6ff76eae5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=1c068d24a52d4a035aeb1d525046da010e8b0a0fad6682ddb4e5009a6a5fa489&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=e7197e17a4b9edd8be9f2b94d039dca046add23ee6a06ea6c911e92da1b290dc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=9cf8ac9a0cfec97232b4807d87d4fd8df0f18d1b10765e753daa92beba19a979&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=069a74e065626e27691d847d62dffa075e0a77f8dff458f59957e890c787c335&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647NOBXLW%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T220651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQCFTHK93iLQZPgj87FyhTshOMrvdY8%2F0Evp0gLPVUNmbwIhALbqL6Bc49e4Z3nA%2FEP%2Ba%2Boj7X6QWu%2BxOiWVKrWM9rguKv8DCH8QABoMNjM3NDIzMTgzODA1IgwW4bWxgDAfJ9UJrvUq3AO42xblRspZ%2FQzgOgLyuAT71QI5AzfhKnHZLpzNPIYoRFKwoJxXwAD41afyQHd6d747jjFZnTMMDlDyzb2ChSFjmhsv7oMdxVKKsw2w3NeiO9%2FnjyhuO8PDqjF8WbmK4k%2BCqiWMw4qd46GDlc8v9j3SPJOhbFK%2FM%2Fw1dnQTHpcoYK2h1Wg6U%2FCoyfZpdaevdLRD5fYyJ8gjCxhqsFy23PmKuZEbth0gZnqsuak%2F%2BxYDTiyEg8TQVE0vtUC%2FFKkI3SGN9JUSZNgHBu1oSQ8uUmccfMZCbc9UdGLhHoqS%2FJ4hCgbCSXpj9FYLzK7VQZMPEELsEZwo1B9bHznLLFgeK2sdeAjikslyPHQwpPF9EQa6gGBZOd33mRYiGPnyOeMtg9JDhtJkf4S5oYDOKn93lNqmlNPGaz%2B0BLp17WoGNM4MOxlKqp51s9rlKh5FA7JQ6rhxciqYjhPehnGlHXUe5eYBeSU%2BvcvZOFb5x1F9%2F1jPzjZ6D4l80f%2BHz2hQX6DeU33Nzmr535%2BHy1BagZsq6qKXhp%2FPRm8Yx50lowcqNEMLLscOCgNwZ2uc8zaiim%2FPiWEj205%2B%2F6FUPNVlJn7GGVUja%2BQproe8JIsS%2Ff0ZZqFmoZO067QicKPEcktGAjC8%2F5m9BjqkAbmRebq6NPIYbjGk29Vilc9QFJ%2FGP%2FPjSvzE9M%2FkZe8CLzVYFlyDmCMKY9R0687FG%2BiSnmGmlZmoNqnBSPWzO9s9PLKPiijEo9v0ze6JNNq1e4qnMtLRzhjJGzD4K5wryZR2r4hnhTASXQTjzKMsD9V5zLrEsA8TAUH7VeENA8jty1bJy3xIC%2B4rp%2FiJM3Aelq%2FcwUzGbzZbSCTx9NSrEudxa1N3&X-Amz-Signature=3a6d9dc8f6b0c17228e673182576d001bfb88fd8215244af4bd32066eab9c728&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
