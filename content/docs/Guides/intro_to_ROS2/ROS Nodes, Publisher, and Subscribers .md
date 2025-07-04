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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=36866b4e7900b506f24ecf00bad75126e8508ea46f245fd55663379658ba4356&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=38745dacee27f1800bd88ec875648cfdfbfd9a575bfcff1e05bdc5c38017a6ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=5107d2d85204529acea13c668fe87bb0a02aace84bcbeaa1687007819d6ad600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=d2d42e394901b92441d228a7d694dcb48cbb730b98339083fe728ee13cdb254e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=06230cbbd1c5f4bacfa6b7076be056b78dd6c4e0a8ae7d9668b12731e1cbb731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=9d9a5532733a58077faea5eeffc4b615162d8aa7c0f80c35cbe6db0c580ab5de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=d70b37ea468f1c9e866d0e26ddf10d958e055086fe7af8b5bc0eea7b803efae3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVPKFAJ3%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T091029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCoIh6j%2BXG80qbr6RHTPKGr6rXs%2FbATWHDpW%2BrLmQP72AIhAJ%2BSmeabzZO2KVXO49BxP5f81cKUuiCbGi8Zx7fWYxa0Kv8DCCkQABoMNjM3NDIzMTgzODA1Igx7c%2Fu0PAo5c09Csf0q3AOI0GKOguPT0Dmv3QhO7ydsbGYRwAQWtvR4wmQzPafVb7tGXnqqJVHQGDLm6OV7CRTsfgAkgss%2B9%2FbF%2Bi5aJoSxRplwCp%2FEYnpSqhlUPHN28OiIZ5SYMmWCHQb0JepN%2FoKrk4672BfYiLgf4SQ3S9Ixp7EhiA0lADILTK%2BYNKVZknUxAl7%2BPMhTX8%2FUc3PxMHRTPZPtXIhNphoGrG5k039%2BN4nkFvZl8Xr7lxS86J11%2FqXTe0COqNMISWnmOp7ynWZbfyMW3rAYZzvmZ05ZGVCdqeS2hVRtCKCKRJnHS3u5Jbrdcg6lVMahGiWilCsSVk5%2FDzfssZHiqsX4ypZGyyti%2FNdFs7jYut29a%2BcV7xCyowScPRo6Mb9%2FmHufQBudHCWs5CQzZTbXXQNoKegsfBAY1j%2FFutwXZwZWzPYO4Y9w07n21LtfldRXGLW8A%2F%2FWV%2F3Usk%2B0cQTf2hPBegDrVeV5CA4Uma7DFNnqhftLAo3inlUvnfShf368Th%2FjnEXQAUVuMGh5Kw6bT0Eyrm%2Bf0E7ZqW26znaEBMRKRLID4oH9aKhxSqNTAcNP%2FKpnhvZQi1RGXGeKGN0xYfFe4Okgc0SUoWJXO%2FtdiC8HhGIlF1RhA9I5%2F3NAv8l8DVkrSzCcjZ7DBjqkAWX1aA8CaJ4WOEPbZY%2F%2B%2BR2tS17mKheXFoSXN1gaAhI%2F4BlmzVQjNKiPFFNn%2BFpNVpFcH1iYc0pBp1lVaTN8cEkQEkquSs%2BKkJ5MHi%2FCu0SOzMHNqPyUFDRk1zud9AUTafPzlAqHM%2BOXymtR6T%2FIgPvYhKQ1gKxMJUeeC%2FAACxQkoXM%2BTBl6tjlJoUjWOCsV2pAFeOCslqGBe%2BXXcHpLCoWH1rqV&X-Amz-Signature=563ae60ce99816ec66b535f68687cc0bae13e7af40e2340d687e22c856c2740e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
