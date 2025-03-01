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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=217391d087bd9bd45a5301d983fe397bc6c6ca8c96325e2486825cae78d058d6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=341a41eb72c7a5511b18a06ebc4fd7bc8afed127dddb131b0583bc6c5bef2414&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=fc5efe30c354893cb5c937d117a8692df4d5695a96394145cb0baed183a369f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=74b4fc987de70648f6b06e73a756f46b3e75849992cbabe7cce984b192728706&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=13fdc7c2e71b5e908a1005d1eec82ac9d8b7de698c120700dec88e2cfa60c515&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=790edfdf2739d77c0846f6b3935f8a1fb3d1e696f1d09243f0e791191893c219&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=37ab7bc12ef7fa960adf125d3c40bda152252c1c1ece4279094eb2aff94841c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUTITEVM%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T100731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIApGQKemLG1NgRj3UzZ72jRzrMgUNE3zgxG27TwLuMBrAiABEBAW1cLtlJ8jUlB%2BH9vqBkCLAmPKvIQLM2mxBhoGryqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGdH%2B34zs0aW3F9k%2BKtwDfJHh%2FiO3war3wr5UqlDTQBhjqWin7Sp6j6UzZb1uSuNdtcJ%2FIn5z7vom307jRBvQj85%2BCz%2F6rWRAKWthq0AewVB6k5eJK9LDs%2B2Rd%2Bp10QtH5LW1sCu0jnhg8jgkK6Y43vMzJmpalZYA5uNNi253fFiSbAA10sZpPVfR9WcXAqOKZMyMp9l2ygGJ6AwuEeDCIvVen8g0ySn1LoBxMMC%2BNJRTupNCwT3bbHa7LE4wWGGxQ6sbyUyK6S%2F8XthRipvezOt%2FPSrZjBDCOUU7a4%2FiZEQyohTm0Nko0D%2Fk0pQW0yvd%2FcAO7IaM%2FTR2xPuI1IO9GQFxWDv5dkuNL6Pb0GRLQM2r5twFwRWw%2Bx7fJbYlT4iIL3Yxuy9HF88911f4qbnabRzJmuA2ArYpBD1N4QgexRb67GzKBRNicSW57DSRHpdg3S9ccapG4eouZxV7iZ3OmSlH2UJEXiWO9N0i5W4%2BmS9x2VTGWBzZPBRamf2vQciI7FDbLxAIZMb2Ga5AmGDO22qyvZVChHeJ9ogsuXtuLfXpxG%2BLhexletDaZjOk3LB4ezV4%2FJ3Ju%2B4fRn10lVbz3bwMkG7Mz5X7wzF2U7Xvj50vdZ29JmQI1mHePVx3QtT6A2swO5GYPn00IfIwzq2LvgY6pgEd1%2FGfpZA1w5ID2pTriBweIOBbQguE4oB53hPOqOWjsJhZD1Yh1jQvHAX%2FtnsPFMFC7dgBAu%2BTn%2F%2FWRnJFuLOmAaXENnLDCvovTWPfEVOQWfltKnzQ0tPZP27PJQi7y8tX6cPE4V0dZwTE10JLMVuPJw%2BuUZf9RgHrFMdJ2S15y4z8mn7X1nulgxuY%2B7Dc4y12dXbTnu59N57hDU3snZpq87PJi%2FGu&X-Amz-Signature=bc3a1c1eda5cf42eb4d9d86372544c4fecb84ec554d34dcc26f1ed089be51e88&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
