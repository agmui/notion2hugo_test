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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=d7e65a3a16fd172c1b04742997a79e6f3c90f90301ece5a3fe37f79da02ba2c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=ad9df949578b63fe19ad7493e5eaac06eea941afe0a79e6855ca5401075ecee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=e15b775f2edda0b51096333eeac305b0c2065fa85ebcc6f72b2e7e1f811993dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=90704b05d77e8e00f3de141d91542934ea6e2ea6649e31ba0582d5e2d878306c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=a3c6cdfd8274269cdf92ddbbebe36ee9777c122f28de3ed04a75b62393ea33b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=e1f358b02e114a495a0ec3c95b6dcf647ee392da8936fadfecb062a8718235ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=5f76589a78ee933a464d3471305de89fa883fa36b7d00868308e4ae8b37e91f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAS3S5BU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T150831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFshw37Q6l3JHGsA2kcScAE%2FiqW33QRXXVAa38lVaJDSAiA0tZpTjnBuEOSGq8BEYCf6ePIrA2auMy17hKcarkMwdir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMHA4571CHAkla1dJFKtwDHNCtPTncx50OCVT9vZZmGYyufBxqNa1SqP0wVGS2uKMZHejwGVHrtqnFc2gt%2FfVyQgbDiUVk4welB2QbeyKNESdu5zAhpZ6xpL9W4PL5D9c39aICt7p0YRY%2BUiw1TfoSFnr2E2NE%2BElGGh3LDJNW1kqHi6DLCrtsFqV3%2BRI7TZyyuh1ngbI3jMid2J7DA5IAXoItoCCFWrND%2B7IowuY02KkNbQ9tfpKfFsdO53NyLlO%2Fymv7y0QVx3zTMY5TNGWqP9OxfQw5ZvLqknOluAG0p%2B6aK9TSFusrey9SCnAIpW9zzzx0Z6LVLgYdl62lxLIDyp69LoyTI63IZkEttn0gv4f9yExsKHNXDyhXX0qTxr81a1BONXo9DLpvKoeObIhX6%2BTjARm4HDg%2FuxY0Qr6P0Hi1rgtk9hCMXr8pIZe7kSWXCHD8rcXhg6BRfw1AlOGcExkSzzhJYZT4ZQSPj0RvEPKy9QuCzBXKg6Gl0PFtMxQH5DW%2BJ4yuMyORF5nhNmGqxV%2FwYoaEaJNxITP4b2YvTevuX%2F8aqFrFhpj7q%2BhBJ2SYessEFWJn7fGlL8Qu%2Bz8eNu9a8hVCZw9db0HrO6sWoBwf23K3g4OhAFeoDy6f%2FLrK92XkNQLO9qLqByMwit%2BXxAY6pgHjzlP3Q04dkXWNFCPJTTGk1OcKMmWqZ%2BTwPnICmWqG5TAO43eJf3s%2FFPCyCyLRsU4SgBrRo8HUKbEF6sQapFVE9SActDmgT2BnDRC89vmdZUVYDCZG1d45Nq7gB2OeGJl5ud%2FN%2FmXwLqsR2bGngYVRBIWB6Q%2BUnPvVB5CPwrGempE71BcxIKSx1YCGeOaiOQvmu%2BVVh38AzdAlltaP%2F7ZvoCyQVmYt&X-Amz-Signature=5fe278553a424be7ef020d80f7bd7ffc577ceb6543e71d6e64725f73905137ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
