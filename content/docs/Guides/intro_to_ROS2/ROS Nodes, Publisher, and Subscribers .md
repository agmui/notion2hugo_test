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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=f954c6d18885ef45bcddca5b6d2f22585460252355b399a19f4b5f70948dfa50&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=ec83713d6be22c2ef3fb55e0b2f5f57c4cc23a01f71b495692654607b7b49e19&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=f318ba6b9ebca3ee91f18ee275754e6b0ab4445dcb35305453899fada9f416cb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=79979c8b3f80187bb339a220589c7c5e9bf9830d91900cf4a2753d91200db408&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=eeb8068c93cfafe1c4778e5e67be9c333a8d40d3c3f2b7d35cda6f456a78586e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=2c0165b3c8d02d8418b6f1e53fd2f3f96edea7bf0b6f5f848530a79e6f64bb34&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=d44881b667b9e29adbf73f7a5e4774b0c279ba3df5e7d6d526e5c52368cce96a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WI5DZYQQ%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIBxAnFzbf4O%2BILkwVcPdY4l36X%2F9RzlrzPh%2FqOE14CmzAiEAsFbUzI3xCNSlZw58MRmas8it8vlzp4O5Ia1Wr078kpQqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPweGL6MYEC0nCk1PSrcA1nBI4z6XoN5CBCuczEV3ye6k2%2BuxFJFZQj7hrBbGfPehkxfeAQsmhSwVRX3JD0%2BYcKhe67Ugo%2FbAreM1Xt4orr5Bx8fT4DDryzOT%2Fg%2BCs7k%2B5YhAEN7vS6gFhFx6LnFQm9x%2Bk8sXiYEHFlFxhJe0vdECt79lD%2BMePnKNVyS0Gb7e68QmM8DmWSZH8gPHr%2B%2BlwAhLynNFYmzHxw4CsaZCt7CyvKmVErfdR3UZlXF5A2ozxEOL2omg7Vo96Xd9pvmrNlOuTJwpdJVB4yQLBipwX3Eaudrr7liaef%2FiCC%2B0z1REiN0BSxa5mtWAdNHryIsdXOoGz%2FzjvrQBkKhd71roH%2FwzhHqkEJJv4LeD4%2FtH7DI7YvKDcOXILlrK5fjiXnxrcnQuwB5dwtQdfcKXvHccaj6DCU695iQN22%2BiMzRe0PEWE7kVJp13YHg8lWrg5MrDnFxUO4fC%2FfRCkimdgBICtL6ZCbdVGgmMAF6wn6JE867cMH2QLn3eV0gVCwk4t1eMhJl6nVZHjZr5K4KvRufMR9unnzOJ%2BO2CG8BB3byOeQv2%2FMlP%2BDk4RnB%2B5YNUkvGUYBJ1KaR8vLkPdw8p5HBihgaNKzxjHV3PKrhJbJpvchTzI8ETgO3nweGWm%2B%2BMIXz%2Fr4GOqUBRLxj%2BU90LtES0Oo6v0YJkZb89tOjFMLThtUp0z1dzv%2FL5nJV1NXWcxPay7lBhtS26X9F6wWRMIprN9rtufaSHc7LIyq9%2BCVubMFDysqcQmspUqk0CkmtoN%2Bg37LnoRqwp77TDH1Wfg4cMsH9DxDz%2BaWf5cbhTV7wf7PKzoMy%2B3QLm4ORcmsvz68tXQWmiYWB%2FDh2dBLS%2F4WFAKbEVC7jEmdUFTQ%2B&X-Amz-Signature=fd54e2bcc611dd52cbec0bd5120af246771eb59afb88c321f66358f7b40b06e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
