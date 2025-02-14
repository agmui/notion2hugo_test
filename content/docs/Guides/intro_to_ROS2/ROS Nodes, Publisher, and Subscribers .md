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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=235d33c3fff1f5486bfc91993878aecbf2c7ca7996e4ddfee434017908407cf9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=11c09c1cf9ee5576c60517acc1daf4c87a187318e790a16a4965dd3fb6cf2294&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=2408ff7da00491d2e4eb879596c3d0ee395a58bbdada0ad5489f3025f6aa1db9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=f48db1963ea79cc79396590b8429b40504f452f741f5ebb7034dc882895cdaef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=f22f6c517705534fec8855538608791b2870d80bd1632fec88b2fbdbe2323d43&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=87fdaeef3fc215836548a6e7221eae361edd3f8f07ecbbb4a1f7fab6d89c7a28&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=2bf0361b474d8ebe9079579592d7d7b8ad8cd2c165805d62d86c66307359232b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E6OOPWR%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6v2eX0dWsiDxouV%2BCNIcQZF39W2B%2FkkCkInOoxyLgwgIhALt3KvgI59AU3LD6oBv6yHd6fwL46NXInKnmRWVEsPAQKv8DCCcQABoMNjM3NDIzMTgzODA1Igx8ZYjUA07l3fHZRcsq3AOEc5jJYyiUabZQN71VerZjCj1jS%2Ff28NguX6FQG80N4bVEPHcwwTnce82%2F4xE3jEICwUJ9%2B5qjTelPUUv6ZdlgxSvisAXq0fTZ7VT6QmKHcPx2fdQngANKAYjE3HBvmwfL7nGVGH6bkSusiQkI6XvEQDhH%2F5R%2FuxPOspciI3IZsoSfETSbyvwvnryL4FbQG6iwDJlZ3lso%2BQl7EWW9SXt6SmMyScQvRZKV91z%2BAGzMznPDVggHzWVevk8rjuUBYdY1HPDrMezZkdrBTOAC4OjP%2FR6Rt6uFpHCeN%2F38iX%2Bq7y2fKBBhAF8SRhQZ8NLC9PYkKRmMXNZAxBGAsN1bF9FTRdSNcI602rwK0L6TokEU2O6YWFmdT5zWAoWVJwjdImnK9T956N5h6ThpApvDsJdOWXN8LpDopBNjHEpVfmDsAYFZYmsNQYmKEwbP3k3%2BXYgw4YZo5jfHxjjnWeYojmtaUAmxV4iy4vCq%2FLd%2Fc5bYkfso6Onl0OovN5P%2FheM9atLUqdwaNaiEOzw0kYO2TTm8Eq66dN2pzp%2F88NA7qB7aebo6nH0ZUrc%2F0yG7Hs9vpO4fKMYZp6D5qwTuYZj%2B4UW8856cO5LwnlHkm1H4xm47xhDGi0eAEAWAAk8GezDQwbu9BjqkAU0Z8ovLOZ2AM7%2FLNanoY6wARdRZ17vYCnZ6t78VJTcT7sS0AppJqvbtXc4uUqzbZdnj0XrpnQNajmK%2F4ztZY%2FX4RdJMyzZw8K4mBIbHS5N9D5Ut7ou%2FpttEGVC2tpk9o4zrGvyCCGluWhSaO6WtrWUAnzJGe5F5JrUtdBBv8jQ9wbYHrrbLkKx31XhM42tx6hm0gKx1KvMFFBON0SOwLcMgb5xH&X-Amz-Signature=7c0f02b4d58fc0f5a2a74dcd67cd1bdf8ec716ef97f1ff86f5eec4154de219b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
