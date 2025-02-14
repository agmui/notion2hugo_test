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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=812fe380a491b90d64d4b28f1bab15fddd983c0fcc72921093f425dee32f49e3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=d771d75aff5693a615211b06e55ce2bf72d47420791494603a6f3003a51f7243&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=833fc7ed11777caf6fc7b3f7dd19c3eb761d7a670f4f0f7fe840c6e882bcc7e7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=d9efbd2d0121c161a6e7e288dd0fca7302cab84d372001a3a6a4e40e50d33872&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=fbeb05034d407a75cbcead67f6fcba44f80285e926848d3fce04b89bc6344b6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=df2774813a83a785f30cd64c1f50d10004975783ef16fb3ec79198b1fc5f5455&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=6d330c32b5e59a62c69a2ad8a99f05c7ee5c0c128405607325304914a128cfc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVXM6RX3%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T100818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDgTcl6bsYJkLJSI4Hbnoq4fC9OPR8YaQxVk%2BMU3dAHaQIhAJML3tLpmTfU1SOTHlIr2Jle3PNfPV7r2%2F0pZ7quouPSKv8DCCoQABoMNjM3NDIzMTgzODA1IgyOyKfW3lv8C7WnygUq3APTIkSdqx08WeUC1XxsADy1W9LwLvXHR4%2F%2FDqQBmtUVt5cEGfydowhwk23wtOYhs9WlsWgWxNenW1dm2BjZlNny5W0tW7k%2FVJg5autV4Z%2BGbbkGf8XyI0Qx4R4tb3uvyiDrMbfEps8xQtltY9ITbBeU2MH7ZgxEV81g91LOYD4FzHCPIYF2wHzGK69N%2BgRuQoEyJyl6NYUYyvNelbzUEMCdqILtyWOyZT66mBrNJZJ%2FMdo59J4t8qRVT9cXMW0z4s%2B0dw2qvMO17ssJELRv9EdcjRuV4VtBPhL%2FmwTF03%2Fh1MXZOHnwdL%2BslIlfkJF9QDXMTEYTg8%2FipnGnNRTiXAoTgF0xONZipxrfU9WnkMaI9eZ5jhh6dV8uFwuSKpSGB8CZsGe6KaGoDJF3HxbmT85QMFT2BSMShlXvyRxJ7bUcrgnNfq37Q59Ja9Tpz576uRpEaPGDmGdo1jR02hr7fuFzpjC%2BDp8leFw%2FHPnJTE56vV0JBM%2BCHyrvN3ekbaD3jJc0O4uBqTY4jXDGKn8YOCg8Xw%2FBrIPvvI%2F4OXTm8OMMccJ0xrlqs91ChfemXxZtwgD4sav%2B1LXZflJ6v3g3w3wDmbqbE5ky3F6Waxe1ifkEeFEkpkfZAz16de9hTjCCk7y9BjqkAcmAb0MPi6GFXkEuY5vxWQJJTQuIdTKO4vWeUKjIiRekY5aLnXKJj%2Ftz6UpiwpikQLOtigtfd8QsINVf18u6%2FfhmoVq32R0HOiOjKxl4sNV6okN9Zep9kIdpARDfHUVT3RmkqyAgpuj%2FsFqz%2BDOvR21m%2FV%2BS10X4KBFfiSMMp1NNLiR%2F3oBROE3UTIORWIiXhsJpZNgY8ocwgMtUJoEIkY%2BNpGlR&X-Amz-Signature=9545873409d206a820a0f1ad3648b96ff74a0f7752750fc2c4a2e030cd71f4aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
