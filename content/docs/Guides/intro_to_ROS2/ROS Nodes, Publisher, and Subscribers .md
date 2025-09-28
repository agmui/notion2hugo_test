---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=0e483bc64699923387dfe886b026938ff1c7a55668c35af230bada7d006eccda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=272dc9f670fb9a7a4530bf94bd03486e3ce82adbdfa8274efb1c5cff3ffda887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=e11faff4f38410c19460128f8aa553b887c2dedfb68c39b365d5d6d636a3066f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=3a5b972d910d3c0844bbd5b6bc1e8a146ac2e1a441ebab9656cf9535e905aa9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=09ecc0f370a503e61020f222fb9dd6c4aed29c0872e8955aa079a44a84404769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=ec97779d987aed18b6e6152a5f54997dd3f122ddb78c93dabdd4df8ac2057ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=c0e55a09e8221c46ff4b47cafb0fe6b407d20ce5577141de1e6ca0775948d058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4AEK4FM%2F20250928%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250928T013925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIAaRwxSgDTBRHb36UTxouBcJWyojUmRi86bAt%2FjzRJFIAiEA7pEsQCVh2UY4hoy5X5y9iBX0xHMDdWrHkulW8UKxJPYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL0%2Fw7pdG34xEPuiiyrcA6EehXTKnDPnXeBdNlwdgksCg5rmqN78UVZ%2BLIWAIKE3vL2fib24B0vcxgFHH4CJ6tXMGuxEWnfH5MMbWM9bIyipLVRYcZXf%2FrYx%2By6TF1Qs8R0qQ%2BPYOu3HPi4bI%2B%2FvC%2Fg%2Bk4PdT51DSSW5xrioH%2FvTn4zm9XBwrdwf%2BLOfy4dw%2BbY5ffPQHOXLo1ttUMh9lWJnNbRGyK57a%2Fz0eqPRjGUhQs3RCORz3SUe%2FvHZ1QtxUYIFF7N4hM4wtsOpOVTrGzLp%2BjWbR8AZZk6V%2BdQflqzL6oENEm1qw8SIgEz%2Fg%2B7LONIicWSEdCaBMwQJjUw9U2Vi78KWu7hiSc20gFhSLgV1Y1tpb2rKCAETWwBbpfd6UujYJVsjLbPQOGqlMvyvX4aCFbPX8oYtnwQ47ftQjzpYXDXsDpd6ta%2B0%2BgOYBDQnfQ1VxvdqX4JpYdiaRVoVOIuclCiU98VHTSoa6iq6Hwkb9FH7NlCI6Ii2qYLLhKP4pnqH5FGA1TiHDn4B%2FTzISnCF%2FsKWfBcznDTOccM7FLVCf9DaOo7bPGL7M8S15yQgB1X7wiapNDiov7%2FB2ScKo0tegxjpp0KvilHNWLn8aELEDboxbl%2FHV7YcwUEr%2BzFS7Y64T1qhUNV4d8HcMKm%2F4cYGOqUBlLB5SkK1HH2u0k5gj10rqWWMuwGKJfQ9wbpvFzlWTMoRw1XZascZ%2BNN5LkTAnS3p5FoM%2FRFl7S%2BqGBsyiC%2BQfxRTVnPZeMcw9pp56%2BS8IM2fvKcXHBefSxE%2BOqAmND6j2gW4OtQcpci9adJPJ7Us0PJJU7OqnQfX0Vlao%2BHO%2BAZL%2FBKWtXIt8D26j5VOwhWJGyxYmhOXjC2Hqvl66Lwx%2FxByl31y&X-Amz-Signature=a433fe45b9fff828b60c605e33389165f7df9dc71acb8d0d68909b7781c2e2af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
