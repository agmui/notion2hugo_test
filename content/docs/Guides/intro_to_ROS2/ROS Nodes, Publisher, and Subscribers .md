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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=62c12c40c58591c1ed76564125d9f4675f2fa08ec6d1e0a33e1003a732cbcca6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=ee545bdd3b2f129c79f5c847f267cad7ff0da364ba5e18b3a24ee2c2ea003a18&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=d585a9e649675a2a0612ef8730a080731b008603ca3e90c50970de18cf924b4e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=d367ccc959156611676051a0fca9a4e3f762ef983e7c5fbcf795df95fe17fad5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=15e522b729cba23f2746f84addc20c1fcc8d4d7c239c36a4528ff412a6f0006b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=b451f3fd77999bce989b9a147de9e6084f6ffa3f1b9d4720ab52b8bc51ec9921&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=10e9381a4da8df5cda5d6515bc74b95c956a2c9c03f2840d75649a27b3ea5d08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH6R7X4C%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T140724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQC61jmhT2eyCwiQ70rG%2BDwWVzIc7VsK30rb5cOrRvqQhgIhAKALZswFD1j7m37EmUoA7C0UBgohTmHwnuwgnZDuKL0cKogECNb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwl0j0GYrJU4%2BTQQeEq3AOk35DmUB3rXvO0S4YgdOQ47KGZnKAx36aOu0naHOE4hoErAR7zKr6sgntAELbVKe%2F72I4jGjyG8lE6xY2ytx3dSpcnsNKuoKmu1H%2FMG%2Fh7FrfL4h4XP2YfwpH6VUlF2vU00WLE7p1CKAfuiyAKE4QF%2FC9NOqm3yZLhuo5JAdKtyngPGBeu%2FD5GGaQpggTIQDmBbc7Y0dIB6KNjr5qKLsLuRXVktvNagogd9m0tPGHKkRZUcTltPKf7rq2lGn9UER%2Fx%2BjQGnyFnsgOEm6ICeTv3krR7obDpdUsGk6fSuK%2BHOXhDelvN%2FTNuxQqHmk9sUon8hehsjFa5BuL%2FS5cl7oGKZSfGPHAxTfat%2BmIWnowmPG9NPzWsAb%2BjuxLpwW%2BHBQZxrUPubxTuE8SYjoLHmqDwvK8lkXoSR9fC8P8dWLooU8f6LlJBEurQxrmK2MuA1NdKNRc3eKXA4vKFhcPE6vnzRoTKis48xTyP5YZVcIMaYueOKUFtY1KD6rraZKsxb%2FvRZB7i8DWXL8xNCvHQo9KUx9rY4LVhjbP5taAROn4EKNzrhO5AEigZzOhKgYkOzKYxdzlmQeEWVGnrWs6XgeeiLHytj0nn0SKN2X%2BzZU9%2FavPaM4%2BuEshTiPrlojDEp%2FHBBjqkAaD4XX6KThTKFZiHT%2FhDUbfKYaV25HL2Wx551m9M0VOGIpoPpORIC%2FQ9PSr0pDhR9TiqDGUsfJjTKwnlJdCvvOzjVCjNJIbtY7s2tjrSjgLpqSA3zIfBKu8WsaBCtAaPEnw1QQr2FYNQZCUY63t%2BCg8IHGFj4F2abaPVt2UopGI4ysqlTIvddI4ICf6JVVQmd4AwuXFOBhsW%2Bylroi92iH4nVuhP&X-Amz-Signature=748d61d41c33ce5676f560b4b185480b748a3a6ee9f843df8f973abad8887ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
