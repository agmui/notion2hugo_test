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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=a186c0f7979d3662e16bfcf135db95ca12a176e25c18104fd527862cffe6bb98&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=57b1ff61c2df217e7d1ca251fc1abf0a4690ced3610bc3a1ac7aa38caae4271e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=b19836fe26e461afded0d231212884fa6f5d30150c63fdc0587dcd98e23f15ef&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=000e064bc5656954cb495c69d88168b59a6b69492c6890fe1ff21f305f76fcfb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=c4c9cc589ea2fbd585d228aa17987803f6c69ec06325afd27c84bf833a8b00bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=9574324a4df6567c1e2c2c0875b3a5beb97772e384b6a719633145d094fb79d5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=df0f9c470cc7cd61708f163c375288658ed4c5c586454a2a79cc539dafbcc9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IAZMHCS%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T181001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMTsHIUiGcvPVwrh7HuwE8CqrY%2BECM4g7dSeH9jCBT0AIhAKAOjrXhNzRa6Y9F%2FxRpSaQGchFbQGR5aPL5EBZCXtwxKv8DCGMQABoMNjM3NDIzMTgzODA1IgyLhvOVvhbW3TYxVAwq3APcmlwPCbFy7WFp06XOf2n79%2FnNzOhkyDQeYPTPWpzp%2BqlWJEK40%2B8aXTkVnOShJedePZdLRa%2BujVQzOATa3IJVsqNMFSkY%2FRJTZQi6kizFYiaTFMttc1FtDwAoEWbh3lpvZURcRcSwHJKpwUZHUNAIemqE3g0pwyovZLhr5TpIg6oRO3BBx0quc%2FOaXdJyPgo9nlSDLu71wfVlF%2FQ%2BHHujPPfcS90WNVtlWvpTQdvJrI0zCjqLQ9yQJ%2F6F6Ghr6FvQAoE6Q6kOIAq7KBu%2BfBtZY9VNEE4JJLkq%2BGST61dPvBrHsV7s7RnQG5SEObEgw0uloLCBtddXTuTyoUrKmNFj6d%2BLwGN5RwLtUT637sK7zQB4IgIv4rb6GzyV%2FTZbCgJlA2ujt220jrz8fKILB9jXCHa7hrIoGhOzMH2BoKqjWG6gzfeb2aMrkZiyQuRkX6NffahU5VJxAtmUZUwnZNOg5Aucbhbgc0KT7Tq%2FlsV8Ok2zMKc3DmXnosLpNfO7oG57qgZ5Awh6ww4MhOfv0S1IwBuEGMTgNyoSP39wSUB7oeF5WkRQKmR73hho5E%2BuiVdsELjWbuuPM8TmE93gNaev8sx%2Fb4qWhAUi1KETtO6Pl1gPdYQZmxqE2StzCzDi3bnABjqkAQ0qAqPuAi72u6Z%2FGG6DTcsj9chQPILdISI5hzA15FtHSGWiI0N1COaE2ctcOGKYtup7%2FWjThYjisyYsf09nvA4iJPiUpQKZIZX7n17wiz6UQlSOZgkWFWwHOrbsRpeGYInBMyPp9xLeYxtejIFl6qFvD2J9uQ%2F4UhLvUJ4kEpn61bI2MKEkeP%2BYy7JSFEFzIresE20bTFX0wNHkH2ObPNhexDI4&X-Amz-Signature=c96f4c4769082b4ad3fbc489abc28fe9cec4a09957577d6f0490dc1f12ccdb04&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
