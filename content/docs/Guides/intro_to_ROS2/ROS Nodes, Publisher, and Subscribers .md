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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=024e25ac90d824e8a33fac800ee2448e9cd5413765116680d677bd47dcf56a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=6eccf69779adebc274d311fe3119173811f2397fa2b1d816cc000683eb12b3e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=141edd0bb13103d6922080d94f88710f1da7c78cc3964d9afbd652aa9edba9d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=80ca7fe8ee4d9e785d214a650028073b51ffec243b7120716bb5504fbf3108f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=a6568f9fb9677b1e201a489438661d475e389ad6f6525ddb1f7d8ce7fb8bdc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=38c9c93bc8f975a321e6ff9c34c4f90e02a0acedee058c9c9511e47e27506c89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=84a953cf74c2f89c04272634752140b90afd7082ad8ee36293c40d05a3191698&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFQBQKTH%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T051107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIHS%2BdzGbKHYNrkJ3%2B1CHFVsZiqqAiQUuihUmKA%2F2ngbJAiAYwV%2FmbGc%2B0IsQCOQvPSs9KxvkX%2Fa6uNX9ldFtBgwLgSr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMheuiw29QcVvDscn5KtwD46r1osxXY346nnb%2B2In7U0M0wPKArXxQjzrOCqx6GHN2rhUURJuFOrFXw60vJa%2BkZMGEpu2%2FimocTMnXfA3y9OiAYE%2BWTnkiYB0SyOBIFIVh%2Ff8xgfyxqi9QPslc6s9sjc4wId89FuCO%2F2vGEHifQSSb%2Bf17Xg6i45xgINrCiJVzR%2FuXw%2FEQhYHWYkCjfPyIG7jVoi29zRgBK41Pyj%2FMudh1FDUZeylwz0%2FJShoB7FBDQGBv3iUn4LLiw6T60ZpwpHFYFIrMkZ6BWyqCEkgTfxD76DUmWhCYVJc1CCzdNnOQP8VA%2FWUjPG9fqUQNp4pHZMXJd1eso%2BVGiqAPp2sOug1fClm%2Fwt191W5mBuORmCtFk9eSEf9nBkok5MHK3laRydPd5p7hka3E0qgVPIBOEO22j%2BqWsJ7iPh5831XccuO5gR9xbKmvGYorqFLx5flNhcZdhEbuVB6NS5NHWLyNUrCUAO27hs4JReSTBiL9xmv5BTbh0lfi5weuq%2FXtedWWTdULw9V0JWBnXfcjwguq%2F5UxiQR5ZUAS4m666UG9LGxEoQkcmzcPiaQS4htghigFzS0g8w0%2F%2B2EwRLTcWywcA%2FmQ1R0kakMRPd%2Bo0fJPGlQOLNlFcvaedc2TKeMw4aL6xAY6pgGPHY8aUAY6emy27r9mzAb3%2BxeoC0%2FkwxprrCaUQsjYuYltJNmXUii%2FqHjvN2UgqvW3LRezjMExrNUEQkzRsr4qSSHit%2BWh3V4Ef4saIfuKqDzja7J6pxMKA89BLiIv5jtCHMHdK6Hz9BehX8rAxemzkYTNlY48HwS1m8EFiT7WsxXNndWGZmG%2Fxdlttwaegyvk3%2FPKuRUMNaVPC0XnOrpO5914E2%2FB&X-Amz-Signature=4c249fad1a1533ee1aa755712d1d9b283bc898b2e9055f2a55eeed7fc3622225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
