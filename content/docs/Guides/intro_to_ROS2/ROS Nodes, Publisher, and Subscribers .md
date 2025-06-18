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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=eee569b96264936c8c54e6f5cb78162d8a0ccad4326a881ee1c7248650dc3071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=c53764d6bf65f46f68e2a09e5de149105208f6e6d7b775db0f462d00ba757480&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=9ed0038cb3dbe3982af9656668d6d57ec14870364b6bc4fad428fe4ca735e92e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=8ff8468df429166fce99fbcb6d23f514c558cbc70caf87fbc8cecee5fa1136ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=539ac99be0ab06a2726c24cefeb16bd90710894d325f75f3a89e820e9a279776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=d5c1d6eaa60d668af5e0ee5e196180ec639c1ca184b1257d83e95c076f77d53a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=601b469b272b17125b05bec6f9387013624edb76473efae07ab2940d7dca486a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RDS6F7S%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T171031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFq3GvIEiyxlS5papSU9k0NnT4uBvnj3HNpHM7vqhZ8iAiBpZeVz2w7AiRpw2f10O5j6ELYzIuJ8du22EkrYJzelZyqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhYpQhI0IV9fF4y2%2FKtwDGsvF8tjhjNrCKSnU48TqrnDDlXB0LwzrBP5AqRDR%2FiszBTUjyqZus8UCqTKTqT8BaWLC6we7CO%2FFIxzGnBllcUbrBUoMPNI9GXYwY47MxvLvEEL0ifdZuDb3eXaOK9sVYs4ifjr5redT%2B6Macenx0TWv1CyOD0iEJNJHNOuIqRWjlycjoiXQC8dsJT34zQsYl1ZHQ%2BW46%2BSJVIRjHaF47aJlFNKLmSui4pBBvOLZ%2BozZOhlQZ2XHMoMz2S%2BiOd9moxaRb7ZOPA1USqHrDssnkrwc5jfcm8m2E1gQ5t902eLaqfjsuE8Vs3dHd0QjJXte3Y5b20JvqFRn3Ldrp4BdCEbDD8mThj6XW6VAr41JRlmVNyQRj5ehrqxuODNRMrEcquFotWz8k%2FTLHRaT3my0cKqgB6juMNESpBbedWu%2FUqyqJXYLFY4%2BmPvqi6qLZkamz1dUdFvB%2FjkVEaSiuK7e0Rk2qoAOuB3I1Fngz%2FFP7o%2BBWwaNq7unBg%2BRfYNa30R85b5txgnHCbc3IluKfuP5UJkAQhrYtjp%2BmqDwtjc6i4EGwMtXVzRrissBBwpntHjdMtw7c8MfgkMzcgELGwvSun7HXhuIwkMbNdtTYE8hj04K56wZlOvvsh2relgw3vTKwgY6pgE6bBsEHXGUO%2FXDkWWweoTIB8CBzyTp%2FgiglR%2FwvIbK6rELNT2ZlIyQbcyuLyymyRz57Zc8BiHMO2QsjYdfQqZH3NwP55WgN4cKOAOIOAIMEqtbj30n6I8l0Z6TRLGNTOc7We1md3W5YRy6VWKfE%2BYdBRATvHK4o2YGxW0pksB7h1rt%2F6ftbtMmQQAt%2B0n%2FQS8g3NvPuM7nI9Y6JDZMnytYwoxuv0vN&X-Amz-Signature=13ca2e262e757c979279854c1394ec8596a69905e40685c801d44242630b0677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
