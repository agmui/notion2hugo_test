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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=49f8d04ef3b7f63edcd0cbe6dfcca00894859376706371400db6b8c9102036ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=8a37ef3e38a09d57ab162b23b0a8e8cdc4fbfe7e859f3255a6e76b2d94834f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=17745efa6706464f315a0cb0ce5663f594601adad70548509ec910ab13fe83e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=0d5f8b0bdb74965d3ba0bba13be69bed679f425d3284e0d3682bf0a125178cbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=63fc3565fc6d69b0e6e3300ed8077de83ada31dccb114b242858bad6f185308f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=15e8d1e1c94ba3516013867f02144793ab506b989214389ccc1610d944399f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=53a2e22175f4b36cd0bc184a3b21e49dbc2e88e126658af6d79379a8b04046d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTL3UURU%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T190120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJIMEYCIQDI6QJxbDQ%2B93xaqlSZw%2FyKoHFiiDfsKc80c0zizQhuDwIhAKqcLXrU8E8tCznLs9YWXFIPLx58G%2BVfuLZi4P1dsKbgKogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxB3ZhDBSuM5X3xh9wq3AOd7rrXYQLlFAZ7HuogC9sFFyCFNRn0KMLSjlll4EeGl%2Bx5S7bSIDZmfJBnqx6z4yDElNtAu1kE%2FUi2ESMkD0PxL04hyUrhNq9LfuPuYx2elqUGrI6D77oiuNMzMCkr6O72gpBdJwlxKXht6y1ldYJZce%2FHWwYwIbKhvuDbFQGNfwxKakE9oPg8ASNdfsSN2yO2WI4S9Xw3HrYUwPlRo2iyTJEqy1MIx7tvgI0lRdvEHwMNUsnkBIgt0NIBkFOwqjJL8L97995rvRLT9tz3O3pwKSx9tN9SkhZxayCYGL%2BKx79OCEc4hi1kz75ySUVxcKMN9qQ7wbfJcgS80k42AlAnLO%2FSiM7VgYvLMeUjL0JUqPuRtQdYUPw%2B3ee7ala8AeD7dFVGrIRsMBbn7h%2FuVuV0ObjQzLksiwziSIBxFwTB2CXkAqAPPUPeZnqLjq76pTnBGoxo6NsXMKcAr1dXLGX0lJbvqIrqa9AHl%2FSVfzlk3MQHvhAwzEVdMn99hopeJQTbUkdWuI%2BWt2qpoIwI2BTAcVxPwTGP3%2FAgZ%2F5%2BSiauaIKQF1LHbAjHK0n7ZmH0%2FodNmIttA3gxdfyt7Bg3NvcLgIzNBs1zayjFRdwqP8ZumNYRFdM%2BcNJqBz7MZDCWmqfCBjqkAR8ssvtEqNkw4lLlFQn0RTq60Q62hp%2FVuCKf7Q59P8vAVeRlj1wRJdLlhh82j46MPJ1EdLNj%2FeHk2aN4S7oq5OBvoFJ8Xv6tjRYopfeGQ62qQdfjZW%2BMktlhiYTGuFdZwvOn68kkX%2FpwZ3vTqOEff9CcWLQ33xFLXcqawW7NCnsW8cRmCzDRFONenJP9FXtPy6DCXqFaXan6JlSOPkutQPnHEuQF&X-Amz-Signature=ebf5b9348a192af4a2ec85c7d3f60c06bfc37c5d06ffdf506d88151e179718bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
