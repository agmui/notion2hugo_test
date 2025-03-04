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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=8731314e83692c031c26e7789e8f9fc305ee759f3b8924cce7d7da5c2a5d619d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=1e5531187f6d305fa13a4dacd51430a6267a8588767e4c8e0d5201b4acb312b2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=6773b1708ccff5eeb8186adf047bc944d29f5c1909b94bc21f8cb734f390d0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=e8876a66fceb4edddc2c4bbaae871187e3de35ab835da8c25ededfe7c2bc6eae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=77a8abe4a15bba7761c3b8ebf3242229d4772599be26a086ca0907b3d1c44c25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=88e44858dcbd208816d98a332eb20d55c6165b1131f9893479e91adabeb5aaf9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=06a890f557bca980fd9e249ea5c8826ebc0e71f27064220a7f0a90e487f49238&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EAN7C4G%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG2ytSILO%2BE6vk19WP7out5q6%2BSFvBz6W2GADaS8%2BvagAiBd%2B0a%2BHRw7seGvx1kMumqE9RhqX%2FJYSwW5KvokjVwhOyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk6vfJqXXTm1BGtLKtwDYzv%2F2g0tusIonVa33UK6hZvLjlMp7F0Y1QEt4gue1XJDgjFlO2D2x354R5EoPuVm%2FZ%2B5CYgCMgKfn%2BkmzCPUnsNsVuLjeN%2B0YYIykvseVhMuLYBkvTa6aPGaKLjoFzHimln4Zd6ziezZq2hlacNUv9zOsk%2FTOI9e317lcfEmUN58alW1thdJ5zDsJDMhqbAwuVt6QcLbxQ9WPPKr53AV54IEtrNqdoOmgPYcVaaUYTo1b4uT5jzUG3XudwBg0cOhHE2m0pMKmdfXjuWqmFYvVCEzLx3DVlieqbtvEX5%2BTG1GIdeu97gw4F%2FurqflTIjEVmABUoirpAEdpcO0R685LC7RHJdCFgyC%2FXk5zMPsNTv5TIrGu753JJXFccNkKg9nKekMDskJqCXXqqGEJv7eWwHBNPGV0RTsfRZ47AGCni2148zEapnRNnqbmgEM2JWP%2FJ%2BLyTEbUa9XMgvgKuIFpndI0uyp8wzEHICiLi9WvVhnrt7oJs3%2B80xeWGTv1AW3uxLqFEjabl8PQQWd1d1GNJ%2Ftkky8Fd5yuQd9ng8GD8lZlYi1O9MNf18wFGOCcZPXVOIMeh1oE8jkpVNRIAl8aqMyd%2B2i%2FSyvMooI8%2BsfpQkUfjn9U3dDh9seVYowjLqdvgY6pgHIigSmoY4%2FaQVh24%2FQKQXRy4ha7uiPMugRS0dWzhuMhxetExwidaGtgVHB5hVvhLocQRYI7KjCXXOt17WKMajSxV%2FqETSvJ4oPkFXypQDmviUBcY336hV%2BAXryooKcgb5PcllnWcts%2Fun%2BRAFlntmC268VMxg3OCBKIOmuk4pL5xF4drxfx9swY9RFCrdMqBxe5ZCCEcvUklteQ5og7ZoW7BmausfY&X-Amz-Signature=88498c1ebb3b8dcfc7360e819b005a685a2e0bd7ed8611b4df3515e0984308c3&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
