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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=a69a357604a245b04f0ac4d5631967aee9e0cceb2533f7f64151d955c26030b6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=a7561145289f4216d2f3a547b8c9dc6beab5056d247dd3fa0f348aba32cd8b4c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=6b55376518f0c916a7856f7adba7e827795dc5859f9f08159c48016782eb3d3a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=a90880fc3a9bd6c27d7a3ae3380c909ba0b0c9b57279e8935fdb60b32707b3ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=1e134b2bdd7aca67bf6278a5305a19f4fed3088a0390e9d166daf3377e852495&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=ae38deae63e433674ff3e77a64dd6ade8cf038e68964f0b02bb2e72d01cf6736&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=5f006139bab62cd7313f5c722562eddc20ce11e71230ef48329f392b7c4e4048&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNY65JHD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T100950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIApottIg4sTFh7y%2BhLAdsQDwP67%2BT4c55KLFIqwP6tnAAiEAmoRhxxBLoEbD1zzpeOSpB1W5X5fcgelEui%2BiCdD9PA8qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClG1qWdN6Vy3tgF9yrcA4d3EidYXb5h%2BuOH8nyFA8cbIn893sh1zAPeNVzeB2sIeZ2urU24XqWfGr6KFcog3d5zQzGuPZ%2FFMOSP53k8k8ookSYz6VjkuTiLBP0BoYfI7GYEQxbZrcGlQnY3EoImj%2B345%2F5FB4gEfLgFvKIbamGED4E2MkvkvVUqyb1RCCXAapZ8x7GTitQ1qpN9qQIBCiniR358QEoP1J3Gwoj9tnNYFQIyNoT%2FtJB0SLZzb5bSHKKpmLBxML67aBUt2xti9V6LYqCj22U7xQJX%2FF0RwxljdnA3tNohaWoWscJmgJqpi3UF%2FvPgdXLil8Tra%2BRlzU3ulFK3ifNFLBf6k8QskB7PFEVfuv8Zpk%2FcAFADLHVFgt7n0SLwMosMRmYA0lBnoegvZ%2Fd5sq76VIBsd26qQI%2FiEUN0QZuL%2BSRslKOKIuVB%2BqUNE5U3j3ph64f3KWI6KrOKpfCyCO4fu3qyaVkZq3ay35u6hFlk9hHROKcyVdBD0RS%2F9LTOu04NzPlyW9s%2Fr6RShDr%2B9u%2BhiK14kswosvP8vRcRcrOozsPNYQwFPKFL9jgJ9opYO%2BJY7bIVeNe9SP8q2omWKe0vB7KLrkZYGPbifnxDlZmDt4vgjRLVUlSjPDbt4LEStJuPGxC%2FMNvposAGOqUBwPTOgeehHtgGsagB%2BeF5lcJhUB7%2B0NV2351NwRDljD9sUydb27IkzYhBOUtARQZORB9qFB9nZT0WYAG1LgluXmkiqpZzytXLZ4yleVaGFoUAEtyMlm7%2FsHCUq6oHagsKMFxpNP8SaoVX%2FAN11U6BdOs%2BqxjHCAs%2BLRykB4dlzcnpv%2FgRIN5WOb2YHPSBmgWddJA5SSs8ygelSJ8EV8J9%2Fm7l3Auh&X-Amz-Signature=41cbb3772bf228e74acf4ef7688d143b134d2985d4c7b143a2412b1a7f9980d1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
