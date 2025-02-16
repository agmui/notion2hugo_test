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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=cb128101be23c5ef92ba850a0a45d94ab608d292ef72836aceed93b46a526fe4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=141fc27f58a83cf95990498322291af9a173650e7edbcbffb1a8cb1f4179c155&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=6f44385f971f32127435ad159b9ff0258e1ba74bf3f6d659f3d0657f42000dc1&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=394bc250378b2a297ab8bd9e5b6cc15c55cfa961433adfefbb718a9c0916b478&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=6481e17980504f6e8896d514a9f07b2f8a9b0a76782f254571c0f94288db1ee3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=2dfb1359cf65cfcf5f6b071439e316ff43efe8fdda7b76903437a070198924ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=a815b1a441e228163c248e2eb8086f93edcd056ee33f4c90389fbf241ab2b4ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IKXYVES%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQD6kr71AyFgLD%2BuPkB9r1pgx3KtJ8Q4TTV5ZCEI0jF0uwIhAK0g6OoYtNGi7a3osh9OCH2hpSAWSlFH%2FCfeinyq%2FVUGKv8DCFQQABoMNjM3NDIzMTgzODA1Igyd8pF0GxNwnYWkAN4q3AOTAPnycA7imLLumPfjE4mCpar%2FLR99ee9WSb7oU3y%2FzBbhZEWA3ZQMLX65AmmZ7lMcI9F87cO3wtxw%2BRHkl7gaOhA3A6jSQi4E%2FeVp1Enigxigdn061IuFDGUcACyQCYA184sesNGq4nfXOianV2iV9U4Ue%2BNcLnixNuOXMVtTvXEXCxOUcmtGVuBixmH%2F5LsavFGAU2m4P5ESRQBWIVZlwQRw3OB5dpEdYZBywRYOWDJRryEQ3jP8iaXsmUJW4a9gNNvO6fnk06pkJjmT%2BGdifnxIBHbDHlrrs2pOeieDQuvuW55JgwFVADPrTM0euwdRqMNtJeqrG9IsuxJvK4emDbNi8q5RBVTbplJO6tmshvL2c2bVW4BGJnUTmd2FzNclPpxPx7pTPrul0K4aFACPyW9or4E3vSRORiBL1X7WuQUjzwNO9DhtUmt%2FOiAk71NeKE%2FDWHuuzZQbtE8U6vddBjHvVoO%2B10TDirF6mu7VtM0WSTNBJ1s7qcZiIWfj05Cldyl21eQLxuvOH2I%2BwtYCOFKUPH2NG7wtl2CSeeiS2AmbY8MhA6dGcrF6XC4Tbup%2BB1iPfHr1jEww8IvOVrEBLCrebH7q9bNppDRSeUWytZxSbqzN7bIyvCMqtTD3qcW9BjqkAZNoxd4bx151S4melS6O6FlsaL8LyKlkrrw%2FFtE91wJ%2Bc9FpomxAnjVq0IbCsFMmE9Z4cAFYPtWEeMZZZfRz51wqcQyfYagM8yHdzz3XJnG0uLKs0tNWoFCTwxGV32fbec36%2FHstYF3h0Mv91HMR7nLnSkYFKVe5nZmVz%2B45QnxEtfxtDmWhBzMmb95%2BT8Cb3Sa0AjGfSTu00%2FzZ%2FTe7%2FOcJjGCe&X-Amz-Signature=f50bdb9baebe3a19057b0d70a630b5b214687b5573041dafb71ed33ed3929821&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
