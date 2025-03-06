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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=4b8e0d94732c61122f1168e95ce4fb50763ffe69d35284fe15e53c2e75289e82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=945149c2d3e7e4c2faa167d9f21e3f0132ea1ecf690e89988d5c4b5bd6b73d39&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=b99fd613166de2992d398c5c22f8d900f7ec913a5f195512d141992b056e84f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=d5d0d18ccc5e01b638de9c8303e3053f63f3da7ccbdd00db0a3c4e8824512549&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=2cce159cfddf27adbc5fbec8e77024c2548c547cdb639f1afdbe0064629bd25d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=e5b9d76d2569b58f0c4ad7f23830cd0f03bf6c10927ddd89f8e6ae337acc4707&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=3a477c88557ce62b0af63d7050ca6cb93e8fac8a80f7a35a478b8fae85bc2739&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGLJ6OWQ%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T021454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbiEsmwiBn%2Bghd%2FpsgIiunQ3qba4Amh3ADEwi89JgdiAiBM0Nb3g5QIqPs48j%2BY0ZhhUH%2Fu%2BKKf5YcebRto0kReRyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIM7zjHwFXbzLm44EF7KtwDs%2BAGHxvr1DofzZzYffCDkGwELi9L8ejqX%2FwYiACb9wmqMqwxNX4Wju8rMzD5NrPmDorGcELE1eM5TDjmbEAEOtDnGUfrjKUVD4evIcTJJhnUZ%2FfFcz5o0KHMImtN4AYlkwFomN7GU580x3jQGK82TJ4ggoN2juFzmQTY%2BPVjRoDkAR32dpFWI3%2B%2FO3TSna6wHs6%2FYRSOWCgoMFfb7pRB7zOqBm6rJG8gDwilbfOhaFVV5kkDAoJ28vZ1MUt2fChUXufljQWpU16CBT%2FnjYIy9%2BmL67uhneVjZneK07D4H1ySZVsHgHvAVHJn%2Bg1uxGrS50EsfLY2HanRfPqFQTvU2jdTOmeOO6iv4VYMOoNKAQcEQjAcW5x4R5Vz1S8l7RAwzoKTtXdvCTRwDiX9%2By6cNJKHrXgb6uaAPzuORIrIc183%2Bzm0BHM%2FVeXZwRWi9pTFZxqXhZespEd2b4F5iNbFpOntni70%2F6x2F9Cu6eIbbAwlC2piru2cNJdugk1iJSXLWjkDCBbcm2109yuDE63xbKUbilFS8tBPjikbYB3f8yn56OTagloiSRzzH2Yg5aF09xxmUCUZ3ORN581No0Sg4%2By3kxbs0Bqm%2BsVTamcpcWDllJkEQfNr0MMu%2B%2FcwpeejvgY6pgFxWjEtl0fRnvGb54pkOoLBIkFok1B1uMiBhXYaF0%2FN4YIWFV0VJvn7%2FnTKfWDhymKpDW299%2B5jjjVgM3%2BaEPNReAuHZO9tXz9XxF6Ql0MPWyOt69%2FKv6Xkp2hU9nyUAQVxxAJpDAvp8MGKJQNdX6vrLHdRePassM%2BiwyOtI1P8v0pwIXZqn3apNdZHM2rR5zcw%2By1Fs%2BY3dLEHqZCiSZduAsnpUh8A&X-Amz-Signature=d51ae2b9e30d4a52ca93bdbe4fff7313eca58c66e080a227a4d42e75a503e8e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
