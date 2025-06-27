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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=396a420fdd5bb490ad812ba328614a17194ff306d11d3d373dc11a7b48b1d194&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=54f5c6fff99f0155bd98adeadd859cc8d9006a71a93f7dfbe013c32d55861465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=c631d8fd76bff17b51ee8f1de2abe63ceb7b68dc37c7e138a33df9a7275627ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=ac0147956ec3a5e5ad5fe2cecd0f7c685c23c2245fed2edc79dc7a9f9132486a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=3d309ccd80f9338b053a907bc78d114b86e6acb5960723980f96eb4eee01c53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=6bb4fefa0ff27bd6e088d24e692a8bec4e07a82cb58612031c4373d22df5d93b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=7b66a1740d70b2252e983bf5e2b4237ebb4fa8f392ffd3c3ff98fe2169b93f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWOHKIOM%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGAzbPmZM5mxep0knO9hWzs6KjB9cuEgQVe5Qw4%2BEIVAiB9wBfCrvIJJx2KmFzK%2B88IN5YW%2B0O91JgqBaY4NEiyLSr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMPbWvvA6IA5AzbRetKtwDfqIgtcEj4Yj%2FDdSjirjzx369EK%2FAKpzan8TRIjwcmlJwZ36VKUR%2BERo3soEPYbl7%2BJXlNC1Exgo9Ip90yeXvT9nuZBZn3mKxmI2NDkGLQjyfF3zCzt6ZjnLhecgYiS%2B71zTFu22bg17Rsak%2BxW7b9x83zy%2FYtH8FJN%2BMrMOgAgL7BsYlUEb1BL7NM4anFSdWEEh4c05XjLGO3r3e2RI%2Bw3qamssVJbXzm4tN9FTkktd1kn5%2Fx0%2FJWE2wlNOkzG78qx5VYBMOwPXBFuz1eRCG80iqXL%2BC%2BJcNnqe4GUlTBSn%2BGBhVg3dy%2BDt4vaAeEO81AuttNwYLo6ukdG7gpkk9nisChTUKCUkWdNOKbMCVk3503l1WmXAEWJMRjBe9BI8Qu2HR4hald8c8cAyF7cyCRm5lWBDSwLOexQt%2FScChRUlFAEzsMmhWB6QUPPNnwxLT%2B%2B4glW1zkLKfRE2qZP2acm8tB58lr9U0ron%2BuEYdsP3KFKkP7Kx019xRyPYp6%2Fg%2BINvR%2FgefYg6zPSYRdUzSp%2BTPY%2B4el30QbcQkCx%2FR6wxXwZO1ONjkIh2%2Bm%2BFcYWove0F6oiIfonF2nqLEeswVJksKLrJeK7%2ByMgjEY%2BLBkMBGBOOvQzZOzq70wccwxff6wgY6pgGJGTYb4UGnUsf55R5ZnLqxoJUT8uVujR7tf2VTtkVp4fxcO2zM55ttZdUwQAt4t1SX6jXrnqZuDPTMH4kFpIihC%2FrUTWYa0fhcmt%2FThafUSdJUdpWhDTFZeFTVjW%2Fxx4nsWL5WPNWuybZNDxifdjedCLBw82Qh6MrvFWmbSwYstXZ%2BcIMVrPhULDM2HapGxRkDQeI8RMJ%2Bg7Lx%2FUU%2F5ewxglFH7iYe&X-Amz-Signature=35193a77aeff64935587eb5c547570d57c5b8328639042c3bf819cf77822bfa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
