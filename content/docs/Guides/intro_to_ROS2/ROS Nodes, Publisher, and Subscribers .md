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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=a92b8adb742affd4aa1d0da0fa4cb2bd4b46dd36aeb6d225508f820a76e8cd1b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=c715d9816b9f25d3f98f7c112a616076774213fe4471652200925a58663339d1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=58dba2ccee68b309fe3632078da8c02d9336f5d3eaf022e98a852ce587dd9196&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=7e7ad9de6107e0b7d5d4036dc106f03a4c5adbbad3306270c6d90f0aa663f9cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=6bee2b54e2b196f0a88bece34914527a0f19764e5308669e49efc89f83d84e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=99b60c7059cc13bd03462f9052b7a09dc5333d80924834fab89e3feed928a3c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=ff8badc8536feda8995a893e9d36a83fced086eefe1b717ee8f1ddec36097a42&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKFTDNB%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T230716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpFnEdb8iFh3JgiTxS5q7C2fRDUd%2Bribx71tQoUK3S8wIgHE86Cgk3GWLqw6gjaUbPPw2yiKg4KVivJwysXMre1mAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDF0okJI4ORZS8BLzZCrcA9517tV9c96dYIyk1vco%2FdhqFjkIgmlke1xJq3qWRfqVOwjt%2BSwFKrAVenVtFnIGxbDh1GCFXiS6GyuOQrxRaD%2BK5iLwROiuGEQLDYa0X149fryarPkxcaKN6qZGMRWNEbjFQNvrIyxCs2FycEJuA73eDse9IuxhnZUlqvDT%2Fpo63JoGPPDCT8BiCxYaRJavOKO5rvzX6zU%2FAwRq3dmKF1D1aooAa6nvrJY6kpN07QxkdzLmYbS3GnBJ3HLjGEa3C7yhI3ps58s9JqmsljIBm8uGyrNuOBfl8U0Pk9nlqxGBTePjSCC4wNSNLxgINQoOinlD3KvJZsqgZ0lQF3u9sBYAiFykJcJOoZZLiFXLyJ3aaJxkIWvdzu8OV68VOhbyNzhCNfmboLY%2BiueX26d8qHx9v9jTK67itcLK%2FiACNE4CZeFTwH%2B0Mgt0Vq4Z%2Bpbho1vBG31NpyLhrrWUNDsitrvlmkYWfPcQiSKavatXaSODBjS5fLp1PaECiMmoB%2FKPP6j%2FUnAEyf5lHrcKcbf9QMUkOOG%2BOvELxlB98XEp7I0Gl2sG4e94HaLBWdEIqg0TSSflPBCJfK4UeeI2mfCPldPqjqTWO6fdFL9MPUzNsGZ9Q2Mn9UWNWSkJaIgwMKqd3b4GOqUB7Z9K6ZE0jQtp%2BSqL3V0SbpMOSZiaJyW3fkVClfGTE8fGeqliJHEWuqKL6twsEatdA6BcXqVhWH0aYsFeqbzNoPa5JXbKWvR2QRZna8jxslNi6Jku%2BvkckvYhZK1Gvb3XYbWrsVSJRzAGRF%2BdoSV3P%2BD5M9PzjiyP0%2F%2Bfl5eJtXjf8K%2FJzeXNtp0NLRUaojJ27fXjUhCKjKIBzlLgfMGVBJl0nayI&X-Amz-Signature=4cbabd8960f1e065e5a97036388d8b8857bb956e13e4275d8400e486cd561e20&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
