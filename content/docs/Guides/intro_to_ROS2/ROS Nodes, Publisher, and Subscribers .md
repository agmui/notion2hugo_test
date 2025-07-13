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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=a8a6b404b26be2badd2779cb6a23d4e9bf704de5b266ac779d490f9a7d75c9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=09cbc5d5eb48671f66300dad194be81de024147adb8a89225b9c6382beee1bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=807016bbb139e3f4967c58c3c254728d7737b4455f1a54942118340943acdf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=a5045224971629d26c08f3f49183174a1b72aa99540866a27394590461c4c350&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=8caeaa28c664eef7732a151e4ecc4947287b51c750320b51d3228750ede6947d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=a2a739d41c95ffcedfb5ef54d5c5f4f6452b6ac2788214e9590a9a9adc21cc79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=bb9d57332767c63b5d9ef5a6fc4099257bb325d82fc9ff21c998254a57f376c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMVKMEEW%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCT4SobOJbLQSvjMQhjtmVoPTL43p564VVYPupPKP8XFQIgQMKFxshtfo5yqopHEZkUAT1cR6dI%2B6vvWh4CRv2TEKcq%2FwMIHRAAGgw2Mzc0MjMxODM4MDUiDEGE06qI8JZmSBR%2BYCrcAzQU4KdRjYsN4W0tVuusMQBQLrRFHKy3sokfNR85%2FaO3ZFBI5RSPZiWLnyehIPLsulB3s0BrCsAnGAL000BqL6ZTAD8q4upJNsjOgQWTfoFhJxZso%2FAv0FfWxy1agT5JrqvTKekTdxZVAEASANo8tSW5wEeCDqvI8g1k48eZsrhLKADrtvtwuyf9yswOLDHeaAz8BymQ1Vf2KsLJf%2FtlQZsox8vC%2B01WsswaLmSjNUQyx1Zxx3%2BIRGDYSRWRUG42u46lVhffRE1DfrCUjx9G8al0%2FvHDPdZ%2Bx9EH%2FWDomz7i%2FlVrzQl7wHzAMdJXVugBgD30CJARZ8XMxK2y%2FosKC82xpBOfgQ1OSeEaol4cZlIDKahscqUCtA%2FQn%2BurqYdI3A4L4DRji5F9uRcLzyQ8kcFhO7CaOEyzGIkOKqGtV%2BwZI%2BVA%2BPjA7vmgv%2B6MiyDymq5S1Oc%2Bgr%2Fn6X%2Byh1Y%2FuxMzMVOoh%2FtAZieNAfw%2BM8GbOtFXt6Vif6mTbOS16wqWQCS7Cpn21B9TTbZxRGHOJgQlNZTUqkQX052VyPZwtnUi4y6FRyPLVOMNBhlJj81v1YgeMNvuytVsqpISiiMI2NwMGmIw5srfHSHyUgaptUl72QFK0E%2Ff5lfQFGquMNiQ0MMGOqUBumM%2BfquJV9QlEFttHArh%2BsDezLqOJ8iHJd4iWzj7P%2B5y84rriWMvfEh6jK64%2FOfTpz6czMQxP9xq7WQS5N2B73r7oNQ4dhQg6yflDJa1u6HzjjzZZBfndjihPTYuiPhHv3SzqJDcXwei73v5isvCzABWma3wBNGhRHxvYow9BTKsPi6a2wUvG7mbwnlasVt%2Bp71AuQCzPZEFmu9I2qvf%2FHL0KlJx&X-Amz-Signature=26415b3b0bed2b588d67f5ad68f0b3eaa7ad3294747776755976dd47c95b17bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
