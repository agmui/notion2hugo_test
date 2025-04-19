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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=99bc76abf7a3b233b4483a6368ad76df34a56af462a97afca3e9ecce26420ff0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=eb1d47f9fca386f135d57435d45342b313a7b415781933334a96a0bff315fc36&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=c4450311981f42d70505a47687af73e0e2a2a0b65726df2bb60e67301b88d0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=442a3fdcdf0d3320a503eba14e4046e52b76c5e7f9b66a47b29e6fe5d00a701e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=165e1de908cf7116aeae302597ba8921d141ea79f481ec70da89c9f5655e235e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=aa720c6dad35cbb9ff8bd1f2ade792ce6ede7203ea312d4f4af1bc5220cb2eff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=561caaaea79c17767d0a4bf8f35a4358a1b296b461784ad306bc192fadafa500&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHHNSEZW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T032148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsmyqCeeiurV0ssYscvfDFVcUjWlDxOxk2iBtYdcrI9AIgVEg5KtHy7lU7IduE53MqU7CmJsy0aaxTuiJIXKobOjcqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHY9v4JySJvd%2BByVoyrcA9jlE5qXpr2NDA8jq5oCtwQG%2FyPHtYJ93thY4fQXIj5tuUCYecf%2FpWaUUpYezA6bMuPMpGEIZEItXuay8MINRI0t3yrwaaADThcV0C1ZPvwrEGtHBZJhO37hYUgYtkpOawg%2FOmf68V9wu75zqARYAK%2F9PdxOxdqnA8Hu0f418OlZpxGGN6YmISo78xSLu2wusAcwIzNWOr5V%2FVwj5pAHNT9Uig%2BJNv2KPib3uftlyfESc6FoNFHz8nCJ%2BJyxf9i6ouV7B7UrQrwas3XyMCeJOJcfzF6TngV5fgswuWRCzmNxQWnj4qGwXTRXlOzRaLXfJkXrwhGHNjKdwkGn76ymcaHf1ao%2B4ub91m78UiNMgK5m82s7pmhq7sUB8YT1EE1bpeauAWKe%2BOshjUUZS7ClNYoktYVo9Tef8Pk9hiAPIB5F2uJ0dusLPhyWUOY2arh%2BtVR6ARXuDURwrRd0%2Bw9fAJGPgjLJPMBa9zhbdPeKg0rSVAqW5tSpOixoFLwIx33n3QoMwJsBEbnxj450hYc7u8ajJDmv73fdHhWwz8bkhWgQ4n9LSBHknGfXelKk8%2FT8A356RHjbSRp%2Bux9IiBG4UghDFhdNBAbmskbY28eAQBWqCgWsd%2FDu%2FpdKndFDMKyhjMAGOqUBKLjRvXPRBm2zi51qTCoTbV4MluGEZbuqe5xc5nb28EB%2FChI9Ud25Ojc7P09628tSyJ5xo7ZTW3f%2FcjE8yykoAwt0VvyW8%2BterKdoAojjwZnQZvceG2s4ciYkRD8sa%2Bde%2BK7m1F1uftGRGPkNKACpO1MRkbaBCLifScn0%2BoECocTqoQaDyFEnkP387YnM8vYB%2FPtrKDOF6VteWO15N7DjFz9WTE6j&X-Amz-Signature=f1a6c19d5d90385e07364c66dae45236e4f62381ce6bcd1e3736012585d319a2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
