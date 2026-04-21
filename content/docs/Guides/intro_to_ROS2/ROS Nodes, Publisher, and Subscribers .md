---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=dfe347f400e867d25f01f8ed5f6d4a5e9c66bd29507ccca9cd6863c96580b635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=74cf9933c5cb08353b40e7e11e9b15e3f920a1a896016b39a9b0dcdbc5d10568&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=8afd4fe51d6922541844b195abafeadcaa651e8ef1bbf5dcd76f8cf93d1b506b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=36bb83e36cb9ead56a52067754ae91bc9215650ffac07389458b4267723200d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=3a330bac299449038723292c63bd62a764fa1db4a8ce302f91a5276a68ea81df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=a3563204b1919cb28cde61cf7a15b168544ceab872c384e0e9b8ded0a2ca82f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=268e35364150d63c0f323aa699e22db56ee47d66ff20bffc6961fc37f6e40e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STARCV2D%2F20260421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260421T023851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIGKKvpzXNVedaoHZI%2F%2FvAElW2nslBYbE7dttBaBX%2FcQRAiAir9WZwGRSImasmvC3PW9pwfBXD2X%2BYe%2BuiJA%2FQlyCCyr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1wVHC8do0pb9YfX6KtwD%2FaYjQV1aannBrxOtywOq65uXWijEDT3B5zgF%2FCb20amGueGYg9Qrg4U86a7osTCe5x6cSFgKqzGawkknCiPrgOuB4K2SphR8L0t%2Fpj%2B8BsnUbxP%2BlMMPg5g%2Ffvr3kL2azOwdHeknXrvWfC%2B6%2BFFo9i5fC22oZDxrGhFJGIXO08I4ih7fK8tABS1iXvoSSDjVpSCmp85ad%2BWsdpkRSE6ubrSQjJprDqXS%2BWAq%2FspH1pvzZGdpcaLgRwMuliLkFH60rYX2%2FPNAe5UH7jToNCm0Vk6BuT2P9Gzo8plbT1DyUvGHDqTGLYZtJ9o%2BVe58F2VH6sMzjaLfLtxWHP5U3YvW%2BZPtD07XqSB%2Bf0qXmjKUL0PUeHO0NN5dN34uBZzdScpATdDeh%2BThpWASDkoD0gnPP7fslNqsSlV54ERIbuPz77QdUoK73vjnTbTscmJJEUGuVCdzKsVTHp3vdFkZ8DMeCZgf5p6VvFHcDCkDxJqcImVu05Btgn4KEA4hYAQhIC37oXzVYEYynYjbsUsqm1JkO2JFjBZhA%2BD1ls8XDqyvqxc%2FwTyeczedMwszkZO9ibDhfeOHbFahSqWhcjmjMQ3Wmd0cXFVmVd9l3vNFz3gEL3TTyWHVNl5RqjW0g3kwjqqbzwY6pgEag5PiwjKLxPgaksdX2394LCsYaO5ZqMiRHKTzXCFzH28ad5%2BeqG5B6hGnFY8VeoHT8PK5mQYOVVfx7blcsxJWL6Yi9CVMyzTob8kKlx%2BRcywRwE4ujW6EnEDY5NDxAO5BDBvGW4bl890WhL6BUvHc%2BlbsJYIzLtcfnod3G1RgggAa5LH6Y4yFoTlKTc0qovdmRbjcCruttjK8y%2BqCPj5YkKqtRq9m&X-Amz-Signature=88f6863e9c28e51682937f5d14946ec098f06a09afe706c620c2accd30429ddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
