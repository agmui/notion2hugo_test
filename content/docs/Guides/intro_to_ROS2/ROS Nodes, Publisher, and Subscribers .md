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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=4fbfab09381d94135b3d32785de3d4846962c94bf0de8f136c71c9e0e052507a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=1ed13ff623945ba763b7bbce388312144f88d1b1827efec82fa634a4887576cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=7c6cf2039fb643bf8e26ce79a634a767ab10b62f9c18d76cc890bec11eda08f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=34114213d95485331f8ee454607932a04487557eeb3497a55d90a1a09ba2e006&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=7fa31ec9df0c5acb05bb20023e035a537d75d4a382008e90ec33d314518604f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=498644229cd7448e1491d5e816aed4417f76524a86d38758d1d98f9bef570eed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=6b03f4979f7f0cd2686d004c47262acc60e0243316d3cab00052a15ecbb28f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2QTZCEQ%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T140906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF2%2FMAuDJknpWJr0qC4kIAXA10U%2FCGI8lylBddQWvC6bAiBLyXaw%2Bf4G9luh1SnyRr2n8UlSkjmjT26HU8NXdE3A%2Fyr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMJv1bggdpZrupMWUDKtwD5PcjsbIjoqYvX%2BLCC15zaY7WFrb4JqbIWhy7w48NSIBNrevYyuGc59VbQ9cAQG9ps1u0RYaJX8P9WVxFDXhLqSBcDt7ajxLcFghHOvJ4HPPc5W52bnm%2FxyS4LI0sdJlTZihBDNBb1HRQ0tVAZZS60X196ZP%2B88JOZ1RnwzQEh8ZJbeXM3DzeWQLdmYafiaH7%2F6Mn3j%2F7nPszi9cqwJTVcPhP3ZmUugSSJhp7vP1Lsy8FkrxlMUN24pTr02ysvG0nWpjZafub2JHo2NmnmAyvUfXiLFyFVtWFoIF1fY1pZy%2BUnp1Xl%2F2N3%2B7Qdsrei416UbKSXmwfegef9pZOqkid54NulXZ3U%2FFhP7lZW2RTb4YzF8cw6meBldyzRM%2BhcugdzVwJfjwyBWK3d11%2Bn%2FWwGMq%2B75Zt4xVHM27dK4YSxm%2Fe6hKdUd0cVVrHSm%2BxqXLAmZKkYISpeaQBNRbKYFrpL%2Fh7sajzaSxFoZ%2BjEonLpNUOq6xELtSXZFHKlfehLYzAS9ISiUh0AgIYows2D611UBXhxHTdCxlDbbrkTe1dJujuVsTABRHH5ej0knkM2ovGnDagzg312dS3URKBexx6Lx9%2FvccspVDJDn%2B7IfM8FGR5w7Jkh31ay69Q684w5aX6wgY6pgH7NC5BoHJ3JbwF1IZlMOMjsbO4s3UozINQY80nGvmPg77eZoOwmyVITGFg3x98uDgRf1xf352oQnL8YMHpHnpWBDg0yeNgKPMs3dJS%2F67UNpfrRMej7Y0LhwW291nmj%2FIxb82gzzZLw3W1V%2BsSzzWoBvuS7hg%2BwVfflchg40Q9HzdWri87zlzeFzUzCYY5mRwjhu2bZfzvvZoWa5Y6os5AKeEt%2FpzA&X-Amz-Signature=a9deb98398cb4a27cc56f9627e6cc4fd831d71e52bf59ad19dacf8c3a94d4dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
