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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=894b3d8f35ed18f47108c38154cfcfb06e1a8805af75c73f6bdf532a94d343a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=dd42e1b7f22535d3549886c2e39433faa0cd7157b5b48c75d95607740ed5aa25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=e6de9300792f4cfdfb38264ecec1967143b5b21f36cdf92d35223a880d915628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=aa9351d8172bc90879b6d4b1ebd1c73eaf308dc61935e91abead7e6b23e8d3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=29ddee685ba042e5ea2e2bf54504692c1c76cba94f1dca221b13679e724b6bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=83f89d904c3e57d49dc207b373eb66401596446ea60be9daab9b21fe35200ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=3c87844061ec3c393b453bbf86891d8dbddd76d351a6bb849220e99861084956&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCO457J4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDxTJRJ8gLkvqUI434PERalZRe6ReJv969kFdpfnIpsXwIgBMMSloH3BRuWk%2BG1q5ivv2iLofpHndkjZzPGv1XVOuoqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHncBmDAfAmpMGoXuircA4MIW1FMEM%2BzneEXtg2kj5AfmxNmGqz34mJRPBV9vEvCPiWrCRPD82uFNKhK5agucB%2BJqka%2Fl6iPra4dgMhK5U1SsZn09gcw1B2e6ZGo5r8MGjUXoxWuCveVrSX7PWS9BxlqLC%2BxS9K5RwP65wM1DZi3Q0JjJVheOyDW3RjNfes8kOK5Ffzzw9tpwfQ%2FJBMdyuBZlNQZ6o8iT5dkUl0q5QVR5sT1jJbMWVPYRl0qFOSv2c%2BU0y9k4TI1XghrH%2FHLOMFVqGHATbGNB9pBfOrSG%2BnIr99aV41nB8HniYOfe0AOgFwMRP8J%2Br9w4DAKnpYhkgqjhNTMPaKWbxVPWdMSjcwpEfp37pHq3OJozKOiR07r%2BK5qoHYYbp2NEHVlqJo9qIR8%2FEfT7n0depHcU0e0GVgs%2BR0SdJ8EhNNQ%2FBAKkW0cP12mdowXilyTAq1PzMVNMKIBOMQg2w4JiN%2F6odYHuEm03dXPWV1w3DoTi8H3NG48ANKlXoEclHhmGkNITK7aT2vJ1JolUG6jQrkIdAsgAxG7Ux%2BFjy7zZKqR7vIgqHRx6LOY97aiQhtX%2B3Kd2ZK7mt6el5JVFKm0GjRT7zKvfBmnoKS8QWsTPZmzDTgONAs31FUsP1QFY2tRtXp7MNu5n8QGOqUB7IHIu0DAauFGxRoDwq9PaXEikCtEdARkfWO73yab5DLfNq%2F0CCPIqezmzGh6R6hBHCkwJtaJXdDZLdmGZnAFASDWpY%2FeARuJnvbqcITKLe1BJeLHILc9Sk5JqtWRVQlXLsKSH6CdOwXqIbnug8wHIeAkj0GarB5WgI490lRvmSjGbaZUPRWjNdtOX%2FhnaBCID0kKAR4kXEukfGxQQBYNrt1Yvh%2Bj&X-Amz-Signature=aad1c1f497bb113db3f18a5d4b86852effad0d7b28ac236decb69f831777f2cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
