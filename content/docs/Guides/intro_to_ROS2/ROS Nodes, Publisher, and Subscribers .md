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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=232339631013879db9ee70f062207f45b7b91fc2a39be59a1388b77b613da09b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=b1d872abd23d8c63c701a9a3902ad27e49e2dff86f41293bf7f61d63981e404b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=abf4753c753150dde023be04e715e2f3d09fbc8e3d143a454cbebea75ed12f25&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=af61c153dac22b6d396c45c2a754cd2c88d1812dba860519eb3adcd612e0159f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=a4ad2687cb0dd01d0a5377c074d7a69edf88034c2bf63c9f188a333d4417ea47&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=fe6e5de5cc24f8fff2394cd10cadb37f7201ca0bd5337337e4b9aa4769a328e4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=b360f2c9af86074ee261ac31f933772f75d558ee9ec6222f88a3fe9d988834eb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXZSPHCM%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T090857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCICHnCMJeGA9SMtCtpUd2JNO8B4unj7K4mwCEscwrMbvzAiEAxoqugPyQcKVwhc9JxI5vSJCEVJHVCq8fx552DJ0YrHYq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDHa%2FHBMCEi2b8yZqkircA%2FGOrPiH83J6No25G5yY3%2F3tZcE7s1uXjUvJzY7EcrFu%2FIx6QJyZgDhcVLGaGMp%2BGRlgmmPl3oDodA%2BCrLwzJu21qZPYRN3rQ6uGqbC0L%2FoYeEd0TcBayhFLOwsgX1eRcbaUnBoxEfvhQy6SUvIDpzCNzhQXGYGSQMLq2scGd2esO%2FLfuxElrHdinKksyEeahvOEoIPRbCXGpmI0AiK8jAXmbx4Y7MZV7LvU%2Box02AGsZ20E%2FWjqy%2F9bFkb%2BKGuWXpVspHcQ7ZAqXAGhI7YmLj87AoY9UUWLtx2b2KiBQgmUnNCtpy9V%2Ba5%2F%2F8VENAI61O2vuZl3tOe1%2BuKn36DJQj2DaLycA2fvaIr%2FWJ7GJ8tugWuyiE1h9ZhbPEWTIddcN7rGuogFre946e1l0Tg3HmxeMTQ80Qvs4fLCipykEmLOVZrpmg1HQtAWAtsS6OUy%2BWC5%2BrsbZoFkygc%2B%2F59DG6t857xje386vb6OxsGhh1F2w3dKzsVFc0DcAmajN%2Fm%2Fwfjr1p8fT2HEgjaxMOAKTPzRUcRp%2BGCDfFVIMXmklIEY6aUvSB3VfIgcri7nVrD5DRBA%2FjZD%2Bcxhwnv19qHZAVfjB5A2KwwoDYKFbO%2B9yVa9kmknWbpvBHOrhsSLML3QjL0GOqUBY8%2FJgAkY51GwIqg4%2BZvSbAa0f8FFlReMli7XAou7EBdwiC6baqzPLnSmDr0KUVvEvl60ndiDKf7ZNTf%2FZ0S3PEDQ09GmIwJDVnDOEZH5NlfW9joqeFxyOx11PumgaGdDsoEJ0ooKYZPQuzV1bmbf8DcPdOT4Sw7X7oLCZkg0BJiKw4MfadLzpM3rQWsj0yZ%2BB5DHaRjJiD%2B1Ip%2FW%2FDqdg%2FUTzs0i&X-Amz-Signature=c36a850a4d65d6c65911f8779c0057158f3fa964bdbb44a6f365f3b6f134d6f6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
