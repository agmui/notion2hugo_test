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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=8eb2327a5c1d1451aaf1cba0d02cbf526e57cd1fb7ae2e27e3a31954b5fc1a75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=4ac3a89a5828a8518ec15eff9e3ac3e712f0d0a88762596c7f573a7ea2e272dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=a6d3f7e29fd3b7f962f27a7d2eb66f0c85e13bba316c0460f0605a79635bdce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=fe722de7e34061ea0e2a6a4e5414c7a95db9c85bf17ac5e341fb927de3fcae6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=dbbb23ddc9da6a38cb64468049fda856dd9c1121d39bc77c4bf18cb656081c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=7819a31975be25ce9250d049c136e2b937b05fca1ffdc8cd9032fb1c4a2e46fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=64d61e8178211694e781eb8465258feeefb098315a0589c9dc6e33eb41d2a5db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXPONWHH%2F20260614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260614T040732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCID19AVL3FPPWZrdc4o92p9nP3Dv6ey4GiAiCCyzKcTjSAiAOHVbPkF9%2Bpe6dAEcYMilxsND3sNyME8igXLVIiPJjoCr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMsdxXf0QTN9t1HvOYKtwDPmA4sgCMOIx363mXDXz2f8i0k0YoykoZpLaBhZtVHxqeSqtvziZIp5zHsJChCJALvG0ywHC6UJEG1gbWeH04Izkw7RY72aPJIEYpGviBQl4tzpgfm6p6CfRkfsLZTXJKdiTY90ZyYbalYRok1SrTaL90QOkCBMS%2BD%2FvYUlQx3q%2BY%2B6HX5E%2Be8bY4UtWSQTMKglsMLdWw6qNDGmYzEd7tOglbxWMiucXVYos63cievIYU0jyu7v8ifBNupkJ6piX9fPKLEsiIZ66tYm4RUQI%2FCNQBy%2FvEYNCV%2F0VwgmvXgRpzD7Jp%2B7U9ANZ%2FWhD0KgvzH55rIqMoNCnfLLDE2bwTmxTll%2B5J08oqZrcnmJTo1uiGUJosoKFlGYVh6rocMEdetaTFxNYwKI0Em5XLBjN6xNSwoL2Ppc0Ih3r8U4LPD0oagTtjND37hfr1dv7NBoAObtT0yAf%2B0Rc%2FXiW40fx4%2FjVOaU9kcygPok1JN%2FQBo9JINwZo8kkgJdPdLEPebWlIQ3C6ePEOUaTJEnnGveg3s4uOAzJWu%2FdEijoYuZ4I3HAwrQ5wjPy6b9bBY%2FpaBWT92XzPe4EHMG5p56fJAuWpo7KNUqTgR8MXhnw1aX0cRU6Jt0enKeCYTpyhesMwppy40QY6pgGCTT2zUgY2P2CxCgbMvOva3DwMSC5S9td7QwhtRcdmvQ3c5BLjxiwSY4YQ8OC7pRQNb2t42%2BwkNvL7kVT3E4QsbRzRltOV1g8IOVtU8CTQITyjtsE3ZC%2B1sQrFAUcg1XxjZ16NlXHepolJlkgcgAaXWpjKDiJfKe%2BWCrcqhdwHRRJCJvNQdwQsvOwdlGWdCFceBjgg%2FsLk4uuU5aHN6lJhaBkhvOW%2F&X-Amz-Signature=8ffd0baaf5c993c1b173263629aa1e034abe493bf2f14922cc77cc1e478f43f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
