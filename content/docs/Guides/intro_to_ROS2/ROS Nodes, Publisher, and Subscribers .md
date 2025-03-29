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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=34ab96f0f3c4d4ef17ca53248c57202bb42a0f0517ee23bcd7409f81dbfaf0a0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=1bfb3da0d1fa58c546f7cbbf11148f97d002b2cdd34ec5c4cc0c55f041ac8c00&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=dd3cfc135bd813a014969da088533acb5f3fe70209f43ea29912f0f89184b07e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=0f128102797a39c79349b0fd94270f0e9d4e14fdad900d0e42e50db51be87bb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=eeb3b6febe83b59a0bbc765c5568ba7d02af9a0520dd8f15966573858da81a82&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=887164ed05baea6d564df350fa2b8516b5c35144d6fb7231cc8c5472585cf57e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=4aa74110f84a166a7edb2945b5dcfb85d83baea53e6779280f623a4146d328f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6DXRU6S%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T210239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIAR90rEsMHZTfKAeK30nvJ1gr6V6n%2BN8Dcy4M7fGpB%2FiAiBYh5ZJL9Is9xbVTG1aaOfqaR95UDVIDoVQuwdG5Y6KGCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM8Nw0x9PfvhjmYKtZKtwDrwwfgBUxk4sigag8f8ZuklH0MGF4w9AOydxKoZcmJxydm8DF1E3ow20drRSIIhlT5qyyfWvYwOOEZNw8WqTWqYZBy%2Fy6OGE4zawcamaJ1ULzpYeK7e%2BahFHXbs7S6FPFlLdUowQPlS38Yc2Cui7JxQ%2FXnHByPShjTKAfzcorstH8Hovd%2FAv338YfL%2BCl%2FIU3qUlWE0UWYkkl35KLouBJ3dZaxfjZnqKRvazGhg7ghz1v9OL%2BtsR58l28VoCaFdT2gQljVKh6N%2BQIdlUOPLZAiBo533hX0uCwTzMV12X0Q3o2DF6VLM8ZnNepTH1B%2FuOis%2FcEUEEXqmzyGR1HRPStdgOBC1xHaA1dZrA4uv9D1XhZFj3e53CyTgGUCY1S0osZLYrZ5GtL8LRSr76WaWgfsyiUD9lBvKwDX8QY484LK3MFqcLAC%2F9YY5ACq%2FW1HGaLvG6q%2Fq0fUmiho53R2FT1h0fQ2j%2BSQso2bOWUIbY7vyCsEVFQxDI61MYCZ5h%2BlCq8%2B7cay264LUpt258ktAoKBXSToDLhTxm4UZV1cmXGHm%2Fngt9cysH3JRac0p7rRugjEp21VdeVSbwxT%2BDoxUNr7kG3i3s8X10yUFWBunvZJzGG5T0ENvPUrp%2BL3z0w6aehvwY6pgFLKwPcB%2F7d7ehArYKbONLwLMf35VXh5zQY4uk2NY4Czo8iJMzLkNOBgrgJEf7Boah2%2BrDjDlK3aifg5TwlhKt1F0twpZJRrZuAmebno6SO33yZ5O2rnHlMm5xBtnWNWcyFoM1PNnDEoY1DSxjSlyEXOkWkt%2Fb5U%2FhMDt2es4pVLwFTfwXOd5hvixHBBtxgQ6GnMqg7Na7uMoriFnZQ7ALoha%2FPFlun&X-Amz-Signature=81e6d87986bc27a85e55052f4b97440287b64d3a07b1e1f5e0060916ba415781&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
