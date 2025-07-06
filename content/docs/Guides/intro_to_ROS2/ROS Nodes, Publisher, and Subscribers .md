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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=77b8d30c80ccc3d283ae1a94f00e4513c428eb597722cf0461f9445d3a6b45ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=bb9ab6a199207a0ba994f7cbec30953b47daa91b1f66b3a7d015757815e89c4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=f8884522645e940e8b68ad9c518efc87a0235adbd21b14696c8a413fbeb9cf30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=0ea8ac6aec998a00fd1458da0f59d73d535c5325f293626b3408d4cf2e3fa55a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=22feb81672e7ad68de58253c1083ba3bf2396508468edf20ffc00355b5a4433f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=bb301573602c8a3560eef0e265f3f39ec1835ec8e806df181a3cf37645cc5020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=194b668eddab80db479ba4166ebdbd2c59c15f68e62de7a9294e8ec3299d1d4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AEA66QZ%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T210742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCuChHsfSi8WYNIxOlyoQLISuL6fA5lMoM2DOYGeihgTgIgWOf4QB5RavzxO7eR96yRkSq3Q92AJJVayLxmVqEv11sq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDBmgKZLwAeOUfi0SdircAyWsrlFmvKZyY95L8wllZX9IAn05fO3WBXa5kF0qHBMZ4%2FYsxtr%2BD8rmncYlmCNGMOsb9rg3RrpX%2FpueFcpNtc7xLw%2BjU4IouMb19xADHuC0chZSttoyQyThFLoiIpcZpQkIwiPg4D2QmtqsX%2FNuX9nC8d%2Fue8ikWVmJClBI54W9P3QSSbytFFtFIAic15fLSCGAbk8D5%2BLwvg3kyf8XXGF7VcRRvXyq7ELEFQMY67xM7aBrov9zDwTvQBX5gkju7c8EvBDx6eY928VIlUYsj5oJbUKKmJcdyC60FQZOD%2FuQRXC4AJt9FAg8u7gerQOMWeJYC%2FABSAccVqTish3I%2Bvw2%2BsAIFhWGzmXRp7seod%2BTPa0LzQJxXjQLZO77MP6LNPTiuDyBQ1DJ24bAVaKS74pQuzAy7CenuIzgrh%2BilvHabb2FlV7Dri5qryFvNuNcR%2FgBREJFevAhez7F%2F0QgPYFNp1PNOi6TRYggjPHDrcCOOZ6KDVsg7Z%2BoF1O2V1bTrtQPfp80mf9UcGxmYv8Fi%2B3tLHIJLU5NC3usUH8l%2FM4jdu2Rg5w4m%2BKDeih5zC0dIxefOh5C8Qz6Ui4jOE3x7qWltHVCoOChAD0OSeOMtmTvw8bPI7TABdIBdUrVMM%2F0qsMGOqUBTt6nDwNYzDQVKyKOH4t7Vab%2BYx7s%2BJquHQNf%2Bb7gZxCA6%2FrIXyugVEAjVO8yvfgWy4VcSUGo7GB50HHAJfH5f8O3hIH1wC48MOYIwXEcRY5AabtlOajY26%2BMAhs0oKLqVJwzbMU3fJsybsiNyC8%2F6kF2UR7BFz7PinNuxlmiuBVNk2rddC%2BHPsmd%2B3bDsMdwuIM52tTpQQBfhmwDEkzCCXzxiWv%2B&X-Amz-Signature=480b8675a477cb4b0b472e9005acd4ce2a2bf9b6ea7aef65ef0b77b8d4532fa3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
