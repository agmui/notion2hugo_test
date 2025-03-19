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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=4dd937807c5d1ee738267c7d83564d97e8172ad9c60249971afe99ed1c22bb99&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=c79de9d40d06c435580b7b6e284d13ce833b588ba104da029cb4ae089cd23356&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=004509b7a59f94a0fa1c4cfcea47ffc772542cc295ce7f954e53c6d6586faa4b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=45ba47da42c23ad157853fcde71793f2c16e7a821b5e7e28c8253dfd1bc70005&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=83c89607ffb16bc3f139ca5b9cb6ffe6687cce98edf0d6b1a6cc139469a5555c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=c9b987d2e541cd8696f02a346033cf80c1135f46458cbd92bdbc6bc069ed61aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=772341e660aad3f6f984a2fa6e7d4f501c1605901a7e4a703f26ac27fa931206&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RJUTT2LZ%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T160952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEvbORlfqe6AlrAr7%2FGQolcU5k%2FPkigbud1U%2BK3QPXa5AiEAuqhbNYGICGVGAL9S2nGoYwXdB%2FkmboMAqlk%2FsF0MSmoq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDAlzD7JN7U1ckYxVcircAyhlqb6bJNif7UGqAyNVD5dDhCc2s3PvJCrStolhEY%2BVtiSazIcpjUZvGHpA59Gxzo6qLxVmXyf2nJ4931iKv9v4YbtnVBJxgXnM0%2FUnHRn0px8BmlkxfklqpIlRKfjcl8Z107tCH8SCsoGfda9D3i8%2Fn%2FVJkmdJ3xm5G3Fpm%2F7dO7ut3F704PE3E26a6D9Ybhw%2BfiE42kfrbmYIQgQVzIfd4cDuTVLZQ8HxS%2Fop5CjUCE3GdGlnJl5%2F5bdCquckQUc1sYWW6ZmjasJTQ6S0yUnpewkIjBIbyYcmTNA4mv5eAJHB5x5JdUn8CSIcScPVn%2Fs85Kt3DQmW1hdKNmC1qOMMTFBAbIA6n%2B1H87huTqWcTzQTE56dZIy6oLhaZdKhBPGPwl%2FOMAiIpm%2FgdF%2BEE4kqGD054YaJ68cBe0qLnwW0O5k1XLMW6qNM795fX4I7RQNy9TItFUzYNkqK7jdFX%2BAmbBQj5xCGKSyPLrnP%2BjRD9kRPeLUs7FA8L7%2FoAbkyXGen7PGqOn4W6iED72z9F1Uj6qQy4b4Jh6lUcMtmuntWzDOqtMgP5pCd%2FP20MAizAtegKUw7NxUQdLKWWaOmC4wYJvVi8YzJ95NQQPlC0ZHeZdv%2FY8683KChJKkDMPi8674GOqUB6x8kukkdTKZ20Fws%2B%2BgkIcIpy7DsJznAlUgynxDCK40N4cJ5BZr5MWU2Oan7SVzz62YsE27E1bQdE%2FmzImK3tKBIIF5iz1sC%2F9c2SVEuXvCIk%2F6w%2Bv5QQhU4CYH%2BjyarQCyxJ3FC0JpO%2BTol7a8eG2THCASN7Cfe7hHe4uXX5o0BZKQX93tkQCOKhfBd4LJO67rZ%2BMjyOpaoTZVRITK2p4MzatxG&X-Amz-Signature=e99e5314fb288a3dbba1f60e75a6d4eb9bb49b6f4d106b86b0a7323f3d090bc6&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
