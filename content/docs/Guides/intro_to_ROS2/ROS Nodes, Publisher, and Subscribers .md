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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=1c56bf29f31f71f409006875ede563d72b4b1470e56559e560c07662b9bba405&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=e761134091c93ddc50aa1da2eb790f83ce238dee4757a4e21551da3997cf32cb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=619aa73f4c85c081831a67c80bc9ff648c6f5c3fe3306a216f37fbd1901febcf&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=a67e568bc06d3d9e82b07a792137180ea2989c5e423aa57d642d5c77265c48d4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=68f86402ba1d57a56b36dcddb75a002e543b9e238d2d2c215a9df8619a600b18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=728ca0f2386999b187666d2e6d0d4943299d100f874018a876b3edf9b58c8bf8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=178f677f65825646421441acc493264bb75817f3ee730d8249272b9064319a8c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STM36HF%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdYs753K4FcoZHWYHEfAfQs7gdC3fRdIA7pfStWhIDrAiEA%2B9p3WatVu2vxXX3OioLSIfkpt5EdIedl26WZuPNRfyAq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKn3snoUrSTdP7cWyrcAwU6WloG3weuGZdBReJBVIen4%2Fe03ZF61f%2BGtTJjkQD4rO%2FojbG9MgFSc6LEaqr8iV5Jlwquauvxowh5xC1GnqdAyQ7Z0CK7EhJQh2HSejG63fhws0y3POSJ6JLZIynfFczn2EC4%2FP6ZzJDTDV1Js5xffKGGObKM9%2BK4JUG811MEl5kEyHxj%2FzdCtyugisUowE3AtCqkcpgpnA5Gsd5EeyRFoYwqy8M%2FnjvMmo8FJ2rKrdVBCVpYPpS23F3d2bq3H%2BGxE23F9lQWnN8uHebWsIdfbmIUj4xo0JrL3ZUfGeVDz%2B2aM6PSTsljdKlzvlqyeLeOuq6yJwNHcJGPTCo1%2BwujSLQWJAiJiBUsxX5aznl%2FJLnsBnLxvlvS8Rgyb90syAZjQvpl0aWFbXIiOIsWonMgzIioBo6AMAlUt0Q8oObpbp2%2BWiqKDzZ5aU44Tg4RhFShoO7uHDWxSjeWzHUF6EP54sBnavvkFDI1V352v6Dxgx%2ByaqYOhh6jX1V9VNwzDtFprw1%2B2t2NeEusDyq8uvLufo4kHjYIlbdda08uc1y5s6VufmEw7Kf3hzYdRiCdq8wxFSX1d68PK7NFlnSo3LNZfKoaMJkCCNpqbaVIa%2B%2FmPvrjZR958cWb6YpMMMjAyL8GOqUBNoq%2BrsuFnQ9Ex9Ipg68WBroFFchAd5Yu%2BwSvj1M9R8Ij1EMTQW24aZkyhQwDmXUPDToQT%2BJDVvqxDSN0Db4biGSyIZFfHN%2FF93%2BtgrwbAx%2FTfLBnyHzdcUrBcdFId6E1z6Oslsh2ifQOgBb9ts75jRrBVesjgwbQnmjkP0oHzM1YyXr%2FbCjFu5JB%2F5h6TEKqwKnMZN8oNOFjcvHruUCSBKDERSPZ&X-Amz-Signature=1c852f8960267d63d82d8d5b14d193bb8306a5255a1549270c9f07b2084f52d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
