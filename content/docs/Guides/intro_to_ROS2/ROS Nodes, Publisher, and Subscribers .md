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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=b3f55bc2c06849e203887998845806f7d935366c42a639f7281d933bfed8fd94&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=36da2ea6076173b08235a91ae1626d780e066bc36d10e6eddf901854314d61b6&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=0afef0eff632e070f8e6c515922a18247fbedb7845a88869a0b759c279cbe118&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=1b4d327b135dfc4b295380253ead367e7354fd3ca3d253ede4f3a793a8d8a589&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=9425358ba75cd7877e4747f070d80433defe975165e861e41d8c842b4a7039c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=795df040b8036545e3d139ec64ce720b97aa9c4346323f5f15a40a2051d33cd4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=77b46ac5c38479a201e30ce71ef5f1e1db61eded78ec96e1e02638032f12a356&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGEMJ7NI%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQC4wf0iDgMWCJeqEZ3FWR5C7AMn%2BpBH08t35mYqlY1ngAIgRIJ9607CiVuW%2FiFWO%2FhrhnzjmiE%2BLq7Ng8PLR%2FR9zLgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv%2F5MeG82SXrMQ%2BQircA%2F%2F930%2Fv9ZhoIEozp1XzdKrwKFWyJBJtyqyS9nQjincviuwVcs3EyzVdswId6GT0wSvwWffVdrKrn4nNTlHPSrwSRL76HIKBa7dJ2kvFqKDxBOcarZsXhptrkjUFC6BMFmWXhG%2Fd47Kplonx4odGNgfCwc1WSNY2EZ9xMtLYAjXCKjzGUMQ6OybL7WpTECtNTzHMr1UiT0jl3Ck1g7%2FGVRInZfwJlTheN%2FxkIyzUiyyI2RilcAksVlB6loMsht%2F09Y2O8ldP4rVvEe58yaE%2BZyMx9OZXH0IAkOv19vdA%2FqlNkrnVfSD%2B9tESs6DRdSakZq%2FjYcEdjy0UtryHG2Ws1zZsNboDScffZUEB32fRtTjTcHhzGm%2Fzlafwi5Uc89UAX6bJyUgGv8ooOFmyLpRpaovsav1mACcitt9Oqp%2FgnnwVtcK%2BZiudgm20xUnuGd0227APiB6%2Fo9v%2FhOVKNc9nSDyiyJ1k7RItyRW6h%2Fg0r7Nx43%2FzFcWV1MNpbhQMQzAWma7nOJql1Ysy%2BC0SUJjsOK11yaPfQRQDmVKSCMvYtfosoH8IUL%2B0RnfphgObOn95FGlSVvaLDwgaNtvUwp1NeOC5XV1QEcxGd9u7djcznjc%2FOwIgJGGyTBnZ%2BJnmMIDptb8GOqUBE8iD5nsKOF2w3fJqNtW8SUlwo8ZYK4%2Bhk1GNfsslaCJ5cpuwOADCWYq1SvKh6FjJzbwAj25OKV8yxg7wjp%2B2P6u13b0xOxsZLfWVK4SRcQKMWPtpQ7xssTvSVKeKNMl7a5DpDwKKBRGqIzsGW49sRwZpQ5N9etTb388SqHhz1ZUYxoJkD0eNmfUyFzOEgs58mcbhQ3gc%2F7rJeFW3%2Fjdp4jGKehGs&X-Amz-Signature=67365430d0c02c3a596ce4b01a929dae0ca34225fd2f3c8db0609f7eb6d5c60b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
