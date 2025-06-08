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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=ac38f9027b0e8f08e757b7d4082d259612e58580ddb79d036b4bdf81669a9de4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=735ab9f73fe3d5f31f6a3d7c200e074c3599f17dd22b7514bb4f0496e09078d5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=4cca1fc64f65137497bcd4c0536041737de71408a2b29b467991af3bca438264&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=72045ed144b42beff92455857f62a6482865818eb24e22dad3522ed75109c2cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=adae810fc42e764e2ea3344bc6e6c76964b82d3046fe427788f441ea06cfc5a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=0e0ef323a0a1cebb90ac55a5aef0f43866f1190b43044474746451decde3ce65&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=30db7b1074d45a274171c87b124412ec5c0049f95dc02f9c3735ed1f26b6a7c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJZXAE%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T121401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHsF2QOjz9vcyr7%2BFioA%2BJTUxBd%2FI%2FyyesagrmCkr2PQIhAOqU3RGLkXfVbeiQl4n931zPd8NkndKEoQvH2hOPjc02KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTmsRhLza97FMHp7wq3ANKV8M%2Bd63aNpvRH4yAttQZp%2BgMXWzE%2Foj1DfZs46KSaBYw4X4zsqNDM4YdmOGLpJt%2FgFWQHGQBdYzsKZ1Q5KMZqwp%2FFk82pjc1hGAx491VfuGXh9kkn%2B4L8otA%2Fsv6ub66VKokXa679IOR6qH28jQpoQWY%2Bx2b2A21GwjCHNxzbocEOTrysJTXdOUYPg4gW66IMn15V2WR17t%2BvvqmQ0YJMmth8Q2w%2BjLfdctmGb1f2svDswruxuq084D9s3EgxWSa6Kt8geNziNdjrQUqjjt8nl4c1nXbyMxkzDzpzKVX%2B9fmnSsoRI1nfM%2BOpkmRxEpAoitCSv%2Bec1xlvk6W9hSMacoOteqpIpgEuKMaY%2BVMlQI2jZNtL7ezwe8ZY2ZRaoXZ73J84op68zIkAI3TauKK3oV6d01bnVAl0LD38uGSHMdzfgzfOUz2%2Bgx9vf21WX2F1iQ2hUGNBhPJg0Ba51KTxeycr6pQ0UWTOVOoDqWebVsHYef1wouezP6c%2BiBEpWDYf8VIE42w2e2TpUb74JXGzaDivW56lqQys0w%2F98aBccnjuI6PBqRKPedqwt87gdsP49Lg5PfCmkiUqVnXvRJL19mAmtAehTmfWr%2BGFRJayv9sypMKq1uEYD0e2DCpppXCBjqkAYXcW9ae3FYFMvAFwHGO8WrlXmh1jfwRUEByHOV4obHFWcO3fa8xMOI5IW3PLLEhHdkK%2BjDVc%2FAwQj1ycD2rpiuHxkVSKUSPm2bEgaSNxcGjcbS4SrD0cTEbtXrWG7xi7XdsagWkzJUEcdAbt5qdA2TY5SlL%2BHkIK3LiCWNPiHHxIsvRIbIc7EMNtplaLIbgi%2BYUhPJQ9CLb39onJsZWKBrzhn%2FZ&X-Amz-Signature=8a2552278248a076c7e685d92197032ecf556aded41bdb33c1588307d1b893ac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
