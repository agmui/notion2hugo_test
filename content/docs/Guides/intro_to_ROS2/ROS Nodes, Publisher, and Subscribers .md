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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=bacb69191688908777a3380b619f107a5748b7d723e98c29ae0c93f1a1eaec57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=e9e434fe34ffae29a5bc1712dfb884ac2632046911cd1b584e61bde4507cefc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=d050be3289800c6b0ad28dc7341c98a33401f9e273e1155ca1154e7adb57b6cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=04be67a0a16a4a0359f2ede916b5aca9986a1f5676cf1aab9516ef5e2b0de564&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=47740c51f4f75a1c0861b1736ccecb3c671060516844a79f91cefca41d8ae289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=63523d69af91f255514ae6155af0df8f9c1de08312d85663a33c2f22db0c74ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=22a14389c2edc8be4051e9b27ec4a655327fe8c638037401d0a85530be091c31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FLAOJAJ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCMPar5irQb4melhlhVDqMqg6BBLzbeoHVpHNtf2nBkEgIhAO0Tdbd1%2F%2BEvo4LYR1JsRNv56Gn8TiUVuadQNMAbmqi8Kv8DCGIQABoMNjM3NDIzMTgzODA1IgwWcwuyrjaanmPU2ikq3AN%2BL5jtU0abFT%2FE8tbGB8n%2FOodMg%2FqUFGHjFR3DAKHCV4Yw46yjycuifqifqQvb%2BCj3jYkk5hKZ5XJWUjGMxVW%2B85iL%2Bnw69l4Fc7TbxEi2%2F7JIf%2BBC6SaborcpctpeWrAnx6hUywkkwuwDomFaMLjhG3dk21I2Zn4kUw5alW467ZNbq9833nx4pME01BEI5jtVb8ouuL6me7A9Qpc0C7GpMNvfQ%2BZWjIviHQiy3cZ6peQZj%2FTG7Kl%2BORZdo7Ge6gR2DC9%2BbNDlISULi8xSunhacyoqc58tGY2hW9q%2FJ5U6YqRNpOj3CKIodqYVSKJ2U8%2BdXvdmitpfhOVkdHJuA%2FqlFwOU2ctrYDsMV8MRrJtiHYEJ1kIsQ6on3XHY%2FILi1kRhQFD2GPXb3KR0LyITfvNilUKm7BfGtoW%2FnBRavmWCo3YrVLn1lY1agAzM6kRU%2FZhGLgYvpbV3B09ds1XUm5o%2F9AljLlyEOgJw1AS0EzyE6l3yRP3JiipUyA0LCN4%2FfqJYhX6zEw2vJyuEu6wt3ciw0%2BDxnBeLU1eIPz4AOL53m4ajWSPumkLqykzEOihgG29lbYcXrcrLUGWrBOMVX3EL424A8ppyzbwcqq30gOQWBP%2B26ig%2F9joszDD4NjCVhPbCBjqkAYNdRNReasp6W6wJTFMXq%2F4s5OdEjzNHW035hB8H9p1uIj4i69TUcbK%2BQ66PtuYmk9OkHLQp%2Fd898Zf6cX7c70UQSFaQU5u9hiaiJKeMcaMvZWCwLBOj%2BHuh7JvL6TaboHd6fGVCg%2Fbyzk1Db5luBtudsr5QejCCv19e09P8p6IcfLFDEG9TSdzp%2FbNg4s%2BUofF7ADGo4qYDYLedeoaLJ4TNiO9S&X-Amz-Signature=03deee7709e718fe54b550ebea59db1e248b1705d1d9d2050d69ae182ea4764c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
