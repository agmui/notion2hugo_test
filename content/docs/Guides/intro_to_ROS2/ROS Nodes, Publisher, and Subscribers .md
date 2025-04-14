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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=121eacac3a00cac31b6d8b72f2ac774b2ca845271a6d56ada7e733010ed6505a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=2293fe9c47e07d5b5cb21b8d661558a70e40987594a3a324dd148d7806940d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=5abe2241193fff6e7463ab6a0e27f3713acf8a237b60086c2626ba5f6711a77a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=7caca122235b0b65404047cd99a4e0a82ab477e7397d2126405885dfa2197255&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=4274db987c370171569a1f1d5084a1874893ea42747224c4e16a32c152c60109&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=d4b278f6f23eba052f2fc32090568856c8afeb1d4fa308796934ae61769301da&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=5bbf0a27d894efeb0966f14d86c0e394348514a53ab9a3afe4f8aefbbe3d18c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4C3FPB%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T210735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDUGOtUhjRkAPH2I6aTXSFSIkNnH71DEuRR40XjPCT6AgIgcdKC7pEnWADm%2BkAteinlLHA3uaG6z1rLec1Pq0ju62Iq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDIW1rxgUNyU8ssi7LCrcA8dNdCyP88p0h0cJq4RVKlV%2FGkMDRjshAHEskytqeBStG1wH687BX6G3Tekp2DR3qGUeZ5ziRJl1UlHGZCYK8Bh8H%2Blk59m0ae77rB9%2BS4FnFQG2ylFJk8ENfKDLKFQ1guqIfV6mzhEzpZcN2zCTy%2F8lhjYs23k%2FhaBzZfJBT%2F5B9j3P95EJALX6v19TgD51k4Hgxpn1nwA87A3cfPlwlNEd8oZN3oIDNsqK%2FvYz51Ny6XSG4DNUK9ExrN92196sZLLMDReruVu6XAWMFJfhLFv4gUaqxi7NXOFKAa6%2Frg%2B3OFJPtkmBAI2BF%2FDAVMo3CL5AhmK6D6ILYKOCLeehDSErUUAek2o7Qr67OndAB7YewUclcqNn1qcDWYs5yVBNb6g3w13BLyVSWHJ5uwOe6gkt80dXBThDZpX9WGXw9J66ZTemANbqlVrqYy5HCgaYKAOh6QPVU9BDSFfL%2BRgvdf1bHHqFgNcsXLoZ0IdfTNtLYFeG2kmzsUtLPD5zkunic8pzko5fpvXyG9qa5UKFw9DQk%2BIfDQonGXw1l4W5zNa%2BgBHVGoFzYHuarYh0BGqHskRPjxFS4Slk70Ly0Avb1fiFVP64Y65PjO0qzNWbVrboTMWWeOrH8ipuX5IqMKLr9b8GOqUBoARW8U%2Br5mEClZa3hgrTTgi78A88vfcHqdEBeKlKGyxJlI9U75ZY2ryQu%2BFW8wYVUrFv7jeOeh7%2Bltsx3w1tgDW7vn%2F7UzpQh4t4gQFdXo8QmrVaAeelF1f31JxnRuszkTAB118nrGnFLQ6wfn8zfGJD%2F7wv9RZ%2BlVPcCS0Skk0gREN3ppl5W4P8o66ydKXZBvSlKEB1NrmuyUDHpnAec%2FTCythU&X-Amz-Signature=b849a1601cd79e8537caabb5e08987e3d07ba6b6a47a8bcb1a1eb8829e15a88d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
