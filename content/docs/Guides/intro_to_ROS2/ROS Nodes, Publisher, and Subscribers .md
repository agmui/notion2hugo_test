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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=1d6938d99bb569d44412c64920b0b2e91b74fe120b407fcee1424feaaa73327f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=8c961167509f23e2a687ac463df8911a089de1091ad7f0b791854fac145fdfed&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=11a742534818b69c763c969cacc75d8b50794f74a9b8cb8fa1c1b6b0b47003d5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=93809e4445759acf9cd7f8776ac3c465da099745d619ff131f9549bb4cf4ccb8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=a651c956d00ec86c208d26b6518496794b2c30ac3d54d1abffa197eece73e31c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=ec47cd774c6a87cb0bb56c3bfbaf7faa276d0b2252f14009a31a3400d59bf9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=983ca86cb64902e79f3b307385fa2b066be03fb30998cced6d94a64594dc1844&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUWXJOI6%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T150934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD8ZLeTY9Mltt6ODl8gsAM0CrYbF1q1mssPLq3E5gv78AIhALJAbvDtTZ1SAsJDMg5cIZBoy3z%2Bot41zVqjHz9M%2FDsSKv8DCEcQABoMNjM3NDIzMTgzODA1Igx0LrTuZker41Ckl1cq3AOYUjULewD6OHZWk2SiqvrMIss5o4StczkVXtFF1j%2FV1kEMVj41zEijapteDXbF2uPLVALdCWFsZysVuXoYoI6sLuGT71vf12GHcNvS%2FQoYAMSxcg%2B3mbMUm9hfmVVdBb7%2BBbr0w9FvDk%2B0LjrOhZhSQa%2BYljoPIEU1nIVgOpJbm1HnGSkIEkw0dRYxhde1o8HOeAsGew466pYza7pPYAfTtsB1NJB5NB1253%2B2y9R52NrUATUdvmDJt%2BvyTSWs%2FC8vq9vXsAp6LYB%2F6ZeHoYJN7wxF6q5gvaA8MEPeJfVyucOQFrfYzEjd5IfR5F41xfg8xE7VsbF%2FCreml%2FCrRFiV3c89BVOgQS80aorhvHex9XSWiTMTe5lUmVIsm0MtY4oTxh44uQS%2FKeuktg5QQufiLnU6iFlchdrU4vdFP4c5tCpKBDS3NV%2BC8y%2FdQweXk4qJF6aAxmMRdyl6sCuNyzSqZ8JrUGnH9f2da02er6Y2r9nV3an5%2FV7nXp4rKFmhUfTgHUDfc219BULp0p5Mvjdj%2FWoeLZaZHKjdkpQweVgAIzEPyJVRzZT5N19mI6Y%2F2akcGMn1EkrOjdtEE5rOpZ92ix7MF5%2FODkfwTk2XTYZn9t39s88dbd41IHR7XzCWxIbCBjqkAW9omKQGsHVuyiuY430kyKKN4XdA8baGr89LXb%2BgMFCdIeAg2LCQYADyYv9%2B2jdEkpIPwgUDAepT2bPsZetsF%2FG%2BFfNwZLTWdVLupVCgZdShI3p83KBG%2B8UQcbZjqJXahZaD6I5PVdg4kZPDjSiE0%2BWmSS5hXOv%2Bfa8wMbFqnpfj1fpG86%2FZPBQrDyJ4wXdno9WqBA9tHJs0unnn28I0UDnQjdwR&X-Amz-Signature=b45078681a01c06679a59b3ca3e0a299bef056cea8d6328be7ca7934be664f5f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
