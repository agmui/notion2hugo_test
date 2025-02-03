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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=73cd4ef55b4ed6d6d72000dbb8656ee06b38f0645db38577d3e6dfcf0fe96eff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=6daf52946f71db8c860c169c7313accf15035da737fe6551aa85b21b11527670&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=dce117abc469981891dbcd4a1303c4503510a0c2ba34af1ec1acb147be4b8a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=e5f3b6ea7bf759bcdde7b595ca850dea2158765e7929b7d2b3dae4f339b11717&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=d3aa859adda51a2e4a3b0b18e56ab14392fa8dc88db0470e075756cddde42b77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=3897b5f7f555cdb0d6e13405a7225654b6a9260686d67e52a4fc1b40eae84007&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=e4b77e50872373ac53624fb303cc68baf57825391c13e371304cead746b0c2d1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4IRWPA%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6Fio6bE%2B9MfPJCuqPwMYc1ZagRwqmAVGf0ygSSYOiFAIhAI31z3YJVpVjWLFB7LlRoC1OwKJGQ24n8uHSN6kzmjDbKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwvm0bfpKiPIleYGQIq3APqaBRkWK%2B6FURtl3ZyNw8QNNkcHPl%2FS8rJ6zVFM%2FMZz91dvUZzPd1CNw9IvdmzdFmZXEHS0iR7RczYaprDbqXFNQ4X%2BCRM5WbaC%2Bfg2hF40YMA7Ojr0kyFur5ulMhw6M1ifSH3PDrcIoonJLaLQxM1%2Ffl6ZZ1kz8wPNgDyyR690K4AmFwL9zVufLY8JbmQmLk5FdFGTFHWTjc8RdWoQTZMLKAW8E9x%2BIcmGtgoxp7O%2FBxhJl5ViceyrOfsU0Gg9V57kPJyg1gcAH%2FuHeICgRmfj5A4QUDK5q2EGxV2oyABxMCPclGftNcGvF4XSqCUCeJUHpL2AJ5GiHrCEs3NHT%2BN4mLckpPhonihdM7HRsJoikCY4P0QRBk6vAPtuV%2F7Bm0AYd3O4e5eWp7zz%2BZyRsrv%2Bd1mVPSxI9oUap7YFrGCdFrw91eHJ7r21FAPefieVj60HldSfkskMd3A2aHnu%2F8eXbJtNaid%2BYQdUfuigK9ROeznOoj5%2FCErRFAjIFmgv%2BKfMtGhMwc75FaaFVnb4YLADkww9M758hMdZyuDDTVQu2ibwUfKEDQ%2BFDgdFnyMtJ0Zt8VjT%2Bpu8BgTiM42r%2BJCK%2BCwkETWlYbLtNGUD8VtxTihte5tXFBqG2NPNzCe5v%2B8BjqkARfuPXxsWq9toMLGdzajjYx66lg0WhOrdoV1wTVuuWDELunJGnVPxGCSTSE%2F%2BhxNGG5jlcm3gaMSmps9HALyHzAUE0%2BvZjOEFAfMjD2ZC%2FLsyabBGkInOLTrwKyprQbe%2BGrXzPR7c32POgBEQ7l3uG9teqWTNoiBK0fjj0RWGJqssn6d8fGx6eJ8uveobXxztNQXWkNEqyVhreUQy58x%2BcEjBVZY&X-Amz-Signature=2271a55dbe4bc38024441820cd75e79725e4d280e1a493fa01358075e2803dbf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
