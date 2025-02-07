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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=93c051d8d59085c1f6be91c2254afeb9ba336f7d84b53e10c2e2c27c05b55c2b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=1ac775d70a59fe697a4a74b7a529f2ebbcc24c072380e8282b2af57900e84107&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=7bad975e4e73fd955918b26f9255cc421a4d2f153af5fa94a21005e1c76b7800&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=60b51d4a8e88946f7dc3bbfe59954ab66589df419bc9911d35996ccb65fed96f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=77a5b460ff859298f0c191dd2148d4c4de5069b1946683c3a1be45c3fd0dbb36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=3c4e23ece8302864f96df85f7112280de888660d1717f19100beb8e93aed74e8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=1c06d5a69d268bb83f4db299368b1e7e7b37c8d54b3fd4f59c82c8fe8462156b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMPH6KWX%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCIGwAGulJuUtRCEHF4x6MDEVhXH%2FuVGbra0hwOpVBLioWAiAGsDcL%2By1bdsV%2F6p7RHDDl%2FKYiC6J0fqB9X2Ibir5dHCr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM9G7c9wGmHuxYCOgZKtwD9iPrXBR8NpRui8miKvxO8peqHd9f1dyPmNgSF2aRy4%2FfLvOXtLDIS35lry%2FTxl6aeydRkJyjSUACKRS%2FkQKvhHGivpkrUz%2BuvP12QNPr8iRmjVK2kglHJtp6O04uc5hBZ1sfdLe6XVdIhMWz%2BlkNi5fewNGqRHLOIW9sJnGQE0CAsD1%2BCS%2FOwYcKa%2F93sGIqEKwTh8sK1%2BPDXGxGrRgcU23l%2BF%2FoUGlL%2BsgySfPChbvJRxkV6J%2BS06KuIXklmeqhgwIPjs8nNxtidgDCDlWxOWZplbXB6A85Rg854ZZbOAiT8Lb4e%2Fjf1bBoqpuRIEAhZfXc%2F1yPBDwKPRGnoQsbvemJlMJVUe029h6CU6R4%2Bg17ETPHE50YkTZWLipEHIoSBGIIMJjhVUt%2BZyb6T6YBFrDSkz6B67WyzGaiIlY95ebsQU7tBxQBA6gBLRdm2z7ZiBJrX%2FY0sJrfbJwvkx1ncZUCBhIDTbKdT88JLdJNBkvr1VzNd22dDPWaldkZ%2BXNNm55BdhN7WqLh3o388achA%2F801pI8Y%2BuUfTjC%2FJtx2B7s8%2BTTuWp6EzQFA2pP7lc8f%2BRmcgrSCU8eh3ZpP4IcVhTxDBP%2F5Tc%2FK36FKZhEjBYkcfjJY4DaXopYNNww5puVvQY6pgF4AurIDHHkjklmyxd9SdqTPnDyy93IDK26cQ%2B715FJeqLTzbc%2FoUnzTwzhlA43%2FV3hn99y93NMYXPuruVZS7kU3IF4IqqR6FiEjyuko8z7ASnNjuzTHrUpUCRsH%2BtbPpeo2m9iLyHhGGnezroE%2BKLHnDOD8j2SEXXteU3MiAGU33LP2fGevRB4pOLmfSY%2BxsCVNFf61HrF6J%2BSOfz7EjzzQPiestr8&X-Amz-Signature=e61d19d5a768c144f5b3d775528fbd9b5cd4ec5e3c2b4a9944a464d8e7d15c8c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
