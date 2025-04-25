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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=385474d03ae29599de94bb798a60d0f60a324dc4d4c1a5a6eb6753dddf109e9c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=0ec16a76d1a01146e454c5577095cc16fa9ba960e2a10170189c0ee40235facb&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=47bf15bf8aef768ddc9bef47eb3982ab6184bf010218f67b2d32f928648bc820&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=446dfee4e7521b1a97fb9c8ccee85aac4bba38d91b01161cb730c8436e62cd62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=ed2b619c99b4704211176d3f6f01aa5f0092f1b15c3c18226e3d3e8f9e423502&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=1bbab8cf0b2f8375e5357e8c30266748dc0a15202a8f6757b706bb1f6d0e6bab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=eb33e59e5420108c334a5c767a95df763ed4ca2a0968056ad6caacb343a28679&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR3SBY2Q%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC7MwsJz%2Brn9FWtjRZd5U4k8y%2BBuqvyfgKystCztmo83wIhAPkjYKMktkws3pRqIDVgpwN%2FKYHCTmlTW%2FyzbG8Lo01wKv8DCDYQABoMNjM3NDIzMTgzODA1Igzjp%2Fa5CAdkyOshcigq3APiCTET0j9EZUMdkHQuCKokT0Ws536oWF2Gw5MfHX7pa0xzia9QjMK7C4Inl0aLyZplJCIDTAvkhwfbSMIRKdswH1VknjwPW4lzzRoZdCqh%2BRzvAVKmU4K5p4dmIulxEOTAqwFDeXRtuo1sfR780dftiJd%2BR7UeKoU6xksFgHVLY4Qawi5NNymR3wzlfjstB0t391bNln827LRl3qwO4kHaWcnAiPtAXCI6YXW7%2Fvhp7ovKaiET22lQcY1Rf5%2FJ1wSK4qegaXPlOfKDWSUoeEkb0zW8YlFoRtuMgDa%2FMnafu82DDt1iLUKw%2BhjvVLKuSi0Yl5btOSXpOxTdEgUK6h%2FdEY8e%2FkWxT6EwvnWzYIEwYywB9bmaVXWfuXXlcgHQPoTtr9hkPoIuY9ivKl2ifcycM9YI%2FgaVtMYoS1oGsfkimIAx8El0gv9JZWtmPMIXJsZSdCEtVAdi1au3S9VpJtQKloG1ywIGhlxrC5sJQO71ppt76cBTsulJ%2B5uzGGlFtKYY7IlyyKnvkkWesK9bZ%2BWeVaZTVyt%2FeTMxyX6PBhMp6sxPfh9xta6zYVk774e8NDnaEJUf0JipBP4iExsq4yIEYXrZatFZ4D2aXcQhVnskB2VH0yNHFIR%2FtshgBzCW7K%2FABjqkAYqveuGGcZRvZ7Rjwchu%2F2sVRJFicZFXzyGg7P%2FrYzkgLYM%2BHtagoVQHT3LQr5F5Q6m4TRumGdf299OY5VJxCk449DlpEh2zyljIs0S2X2Uw0foi6Wz5Oc1XOL7DZgZLIXb2dDHtjrplGmzNXIQc69KADlXsD6A%2BDawAZ5xTALpYM8IiE795YePbOh%2F4k2OISC82QQHNeSUmo3AXmghkEQwI3PcM&X-Amz-Signature=56ef7846d8172b789308e9e64aeb3096140be5855991d1946fdd75af24181c16&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
