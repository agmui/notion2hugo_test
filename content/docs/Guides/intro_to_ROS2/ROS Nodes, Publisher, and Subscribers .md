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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=4d228b96d8891f84f811296de99aadc3064089b02ba023677ac1b7423be5ca35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=7a0b660433a905b8602f3dbf24bba0af96650ac66e8b6258e3cc497c0612153f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=761f4f8daacb35ed6cad251b7eeb8a40474570b830441143eda47f428dd1945c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=d05e3681ea7031fd0a58a4dace53b8ad6eec5e8d58591ebb7ad1b2629bc8785d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=e6e02a6baba9d5639a2365eb074883a44a98e67363f7a3c206d5d3873a8d0127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=c70fd7e8a4c8572211469358ca9767effc31540f4eb78effba3de98494f67af9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=f3d2fac67544409075165dcabe23bbab7fc374949f6ad03c6503168936ff724f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LRRXFZB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDD2l%2FOrIZCZvXH4da36Ru%2FXcZOnaTKxQ%2FUVNTwkDh0LAIgC%2Ff5V4%2Bcc8%2Bn%2Bs1zJ69jXOLPP7ix%2Fdsx04SHO6prqGoqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNREm3aRJczt4DNodircAwqYbZb4Blfxt%2BBm1zfh0F5r9z5IaSkxxOe2N2%2BvEZbjDsokae%2BVqubr3s9otnIGgA59W2fHbF7smc1NWZv32J8Ki91%2FyO0aFbIiTJPpSpM4zjRFhlhu3jirvCMRr1sD3QBFqAGNmzcM%2FMlz73SzRW3ohKA0Oy2cfYJpxf5YYoqQfWZIuHCDgMYyornUCyvVqJb1SD3%2BZRqwUaTycaiFEswO7M86pch6OANb6IOybz6HXWPQrZE2gym156VDnhayT4xKnfJZY6PEd7%2FSqe9JIgrzP3g8OauvBduYimd1m3dTBIJmobota2TJwbHgMWikOrUXv52wBgIFdkhkwRZWRAh%2BklepvCPZptwt%2FS23OL05ghLloEuw6FpjcZMwfz8vroQIQNSLpOIVHOElgjU3px6xVP%2FTJcpY49D3%2FlEPjUwa2p33aCrsIhT616h3YhAxPd4y%2FOUkcQmKCNow9Fjqy6CcjEpCXZKcKJgUbiLbGdaQaDnFpEWgMYZUCUC%2BeNAVLXmZ69BZKiOP7H%2FgzJi9WNXwgpbifAZVg9ZXGawnua5HPP3noxOFIIMyqGUA99Nx8odaBDqqMorieA4vd%2FT9xxZqQakywV3eo4S3ZcOLo1UYeOrjQ5H4Jl3fd6%2BWMP64rcIGOqUBXQx8QPySQgJcjzsxR2w1RKpmBn4jD6%2FFq0sgiZGeBj%2BlxwN0RIaUUgKAaayrB1MQt%2Fxcfzgvuac4xtBZRsy41wQKalrlkL7hvU%2FH%2BhvANldq4Z4%2BYnvCJs5atfynyAQVmIwxWKbDZZ%2FQvEsmFAPvk5ni%2Bu1fN4vTDyUrmBVw1mGUb2tJho8GbdV2zLoyjTZ%2FpmU1R%2Fg54Sbu4MZZOiIA0ccWtv8w&X-Amz-Signature=e4be2510bbb660acb27de59071784a2755bf94c6591cf590ffd28fd0bd775e88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
