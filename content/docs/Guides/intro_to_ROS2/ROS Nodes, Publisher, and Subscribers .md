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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=132f190726ec04751b5e2616745df6b2a6c2129fd68a990a212f0f3d6d343199&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=47fc487cd464c81dd67e6d6b7feb8f8d79d68661265f0b0c1054183cdf2bc48a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=04b1af042cea40b1101e66821c11538a6a82dade2d26a2dc4bf3be77897531a5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=1b7cc8347bdf2732dc4f5059e30e14821da21eff6138cdf3dbd2b0db733e80fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=1da92e875e413a7f380becb683bbe8e9ff0436540897a19bd8cbd4d00f18e174&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=783d324d77bf8c46010c593fd5fc3fcbe397dfebd6e8640df25d71ba4b1171cc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=2ac71ca5d75bf0c25e3ecc1c29941e130787f0506ab5795f37edf845d454f13d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637YHT6IF%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T090348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BuWpxAmYpa79MZxOoYKQ6tcVmBJAtJOE6ndh1OT7WSAiEAvOOCR%2FVHGeguOch1S75oeSHKQ2tERuKvpQik2qWLOI8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIfeljtZX6yX442%2F%2BSrcA%2FZav8R%2FK8M57r3IamfsVnYmqWIRgcXIXQGppgcbQBC%2BJ0TVh1lYdwZq9wMNPtvFAMbAaS7Gi1g7PcxyT%2FG0K8H37XJPJdD3eEw559MaQlOcJYEG7t8lXOKXuHwHXflKqtPQM2LiTn%2B3b4kacda2Q5tJ8SB%2BX5jILvXWj4YF7G9IykV3YHinXPLgy%2B7CzNApOzCZ7sYxro70JfiHGy%2BvoHsTVCxAT%2FiKEGvylmCA3eZW%2FQcjGFcYArIP1IlWSQxuEQnyVDd53KELocuLky28WGqgdspMmm0EKj2RuUEbCsNmjKjKyvFXjvy%2BAZfVcbTk1Cc%2BDua0WMK7Op2S3KulbJLQLCqE%2FUCr9o3hClrCDQWwilpIJ1ZWBdWpjV08UrQxOCkWOwmb%2BArw4kIs4azoHml5BCANXcXG%2Fx5br2qqzxsOyp%2FzmBfgunlrwYQ2y1N%2FbpkztCQQYghM3CE83R7Yr8n%2Ba2qdPgsL8jcayNH5L4upHkwtro0BboKKhS9FGh78LlazJMa3d%2FG%2FxQtiaB%2BrfTnzRG4CjaGmJm11ov%2FOLxkOKO0MUXVA0CNtn%2Fe6fCAG%2FvxZxROwyr5s5gJCz%2B%2FBKN3VtyFJvwNwTynsuQNDfIcJpHf268G5ew4D09Z3MPKd%2FLwGOqUBZ8%2Fkq9YxnOiQsQyuaUUluHK4nWtqPaeoRTEAQvo2Xn3oUhtMkwvGuGiqey8pG0YL4DMlyXk3DhyLoRBbFCMfbihP5PdvGLWtRD8HQROU%2F1Y81cmhwZfVliZqSUS3Q6gaD25avRXgSMm5R0IKHaMrM7wsqH3vugsyQd6RzyjxFZwKCQm1RiUstX1rhEMzoaaCcYlStGqCcPZ0S6pPRwjPeGjn9w32&X-Amz-Signature=88c5bd03660c4159ce0c85cdcb19a051710926aa33be5a70593112b8c1d61614&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
