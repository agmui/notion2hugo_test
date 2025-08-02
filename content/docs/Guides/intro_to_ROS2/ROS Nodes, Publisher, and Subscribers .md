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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=292c7500c848a947143973ca246ffb62366e7945db9dfcc5b7f1c72270d73499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=17d6486575d847845d4ba783d4647607d5063b43f99daead4b5eede8ed339eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=9e4eee59ccae710a2ffd458e2751cb9dea21eec55c7540dda5cb9ab28fe7df3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=336a04004ca5f34c5d1b79b98bdae433b02e527e4609b22ca8c8c18a6c078e9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=a24831ee4091fdae96ade07c9963b4376c2e624e5e05c2b1955bab16b215c9ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=8fc3f65960368f2f116f502ba73e53c9f27ddee4973a4dd302b06e93589599c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=5808d945f48cfbf39476abfa549a4eb73e71feb199f2108daf675a7ecc6a05d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YMJITE7%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEC6m8zySM5h9Mac3GRImUGb0egrceIWqUOZ%2BEut2sLBAiBwm5Ng0JD2f3yjBzIjl1Hx8%2BnEqy7jLi%2B0WG5zmOJRByr%2FAwgWEAAaDDYzNzQyMzE4MzgwNSIM3s%2FeIS7sl%2Fc5j65HKtwDfoEALervTOiJKf8R0Ae4ArUVme1gXpMIxeLm%2B%2BkbQxNqTDML7oNE9XRrWSNvc9TjXbE%2F6W2OzZQ06%2B8phfqYYgZOLf85gpeHSb3NTyLvRZBmtLOp8FnAhkOF3OMV9rcg4fDMmAYjCKNe59Pf6yekyoU0z9FmVlDuK%2B7Pdy%2BUukfFDasJVAhaEBf0z25Xclupu%2FBHxEYxue%2BkSo9EMLwe5LbYxx6iIffx0SWtaG0pzFB3u8nRPac2OldX%2BgJgeMwrIw0OB9xIgnxiadjQ0CJy8sMhvlc570%2FDjzEkOQvjz0vBQpNz3c5M3CNAf7A2lLNBlyu1jJGHC%2FHAP8DTE5m%2BYfYhJxunXN2iUR79dRINPWeizFH22bop0%2Bm%2B2C1asGMUy6W4d69kbJWmIghu5Nv%2BhUkzLqFS7qq2OlOvqXcXMruCDN%2FhPLO7iGM5LKmmJX7jVUGsUoLUskCJNGyrna1elo1DGPcDASwyVX7aIJaXAoBVu7tYUvdu5PnXFYXcCsF%2FlShvgHDIiKhT%2FbuABAz9jkhGMqB7Z8wNnV%2BgfOgpMpK1J%2BL8utfK19nD6TEmvRggGGzheFiBVFkDHGE8xB8ddYhJlKggfM3zpwLyQDjKEfQ%2BST8ElK9nhVose%2BowxpW4xAY6pgEArFeUvzF0JBdpHoZ1P0msH8AeFCoGgaFO2UqQrXEeBM88RtgLAWP3BvU6%2FohaIgjzoK7mRgEo4aFPhmBZaFLnrG0yhq7FmTlz0XgC2auMnAw4geFZYHiYFKRETS84mfI7ttOG3PF8WzeVTQosuF9NILhSW%2Bwx6EFIILbzMsdYJ0hEdlwJNeaOGBR%2FmFJEWWoEQL0qfN11FMEJVZ%2FjnjxNOCwh3WN4&X-Amz-Signature=b2e0b25cd42c5785caa7d0a4d1abe438a053274f1375ecb5727bfb60006bb4ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
