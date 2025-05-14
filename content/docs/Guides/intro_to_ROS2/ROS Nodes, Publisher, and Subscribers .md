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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=638809459c2c93bfa763d22874824df8a13e087492fce005fbe4066fbbb3796c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=872532e4d082e0ea024a52bc2a5af7bd88af1a77d00bec8edc10e501cb73e424&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=1294a9f2ad61dff6f90f88873a2998a6dc9c72e7cdd3bbbc0a9616e9efbded15&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=06dfbfdf17ef5361f2fece71f915558742aa52c1729058ecda8aa83f33308826&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=be3fb4aa56329ba27a85e70f53e00e6ee29ad77dbf7e7116e52898cdc7e96379&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=da58cf8ca565eb9909ce9b0544878e10039d724ae544428d5518ba95aea7db95&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=736ef967d1270995979ed90b7e2858a86e43b59d39c2ca130d70c054e3129af9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWMPA4NZ%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDGoDbxjdBNr5oFKw%2FwlINRn9Blx8aeSjIMK%2FViLGL9QwIhAPMfBvJFVHArEikHQbQFCnnruZW8%2FPyPWPKwKsySP%2FNAKv8DCBEQABoMNjM3NDIzMTgzODA1Igzdn7FDCVWHm7Z2IsQq3AMk%2F5gHQQG%2FysHOm99bPnaYbIPGH3FMN8dsNyuTVDudovYFaM78HHQmITgy60FrW2YtIojqp4msNgN9wEjVKRImvSlyyvVhD7%2B%2Fg7MVNCzPmQgwfWffawQpWAGBLvLteLfTyZn1qYqqB%2Ftt52TiDFavDP1LTCUYK1VgnrCCXKo6rx6djqbm96Vx2vtBFGLwelgijSOTsrp4HnWa661zRc%2FWSflfzUsKloQGCM1y3tsq45qdtoF8HqQtL2q5j3aDv18MAMkVc9MT5IEKlNQsxDA9%2F29Rrtiq1viFFCIZmhy8ALnVXGFj6WleTfI4CBRKbZnxhQwyej2GuEcWA4X1MqSWWxpGxMXaStKo6B5pSXk%2BXaF5hIWVNGK3zUINgK5kqN0tOCX%2BFADJbK3uDV%2FJEDTpBhvhGFVUlmvhdp2CbJyNrFPq0jYlbI2ROfcUhEJDCYunuTrQ3rY%2BhSkHN0KeNeNS5Lbt44mltTLOKInl%2BOKTX%2BJKcCfyDDk7%2BggD9%2FPMIsF5CHs5C9E2iKs%2Fn8zD1RScVqyAUGHPqqF1vxsSKpZ9y23%2BPq%2BTbyT6I5z4uEbQm6DxIWKmOCPhLg%2BfdWRkTYbaUguaN5%2FnHR46Cp%2Bz%2FOosJmasWsjgT35s1MJUMTDFnZHBBjqkASsQE3rESCbevoFUv5Q45LNjmcd3HCfWL7s69hx%2FI%2FHIbwl3FlMQNlAgbNCwCCofR%2ByhXkHMQPdB7FB8bFwfy2PRrSqGh9yiEN0Av8rWdko9SYxSZCZHbmiKeivSsLQF9K2PDhxnhJzOLdD3Q%2FNjTGx9A8dZB85SrXblq4RQ9XDtTMeG4mLSnU5QVy9SWdg2TIY8U34byvJP9o4EN6gdbEFzwr2Y&X-Amz-Signature=ad3ef53575d800d1510f214974da778649f76b26481c50c01be1589116d66c32&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
