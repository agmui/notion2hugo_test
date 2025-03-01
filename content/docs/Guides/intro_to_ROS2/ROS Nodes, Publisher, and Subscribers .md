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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=d5e08e70e6446fb08e370b8653c0b532d05233451581b9df32244153d6bb4e89&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=af2d05b7f4a13d1b36e5e3695a9430a33f3fe4b69741d502e580d9561ea50152&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=30181298664a70c8a35e31ad3c62b03dbe841fef756be64bbb9f48b0ca741eb9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=5c3be2708dd74b657cbb0608bf142ca797c094ac2957699e5affd42389307dcb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=34c423f1453ac4ae500fc2c387fb1391bbf17e0156cc7ac74ca18e733e355173&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=fd2b7fb5fbe3cf320a279765e2fc424407ec83407cf9e8744655091bb4e623a4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=a641136949e028d3f3011c7c695ee5729d651806bc777b427fecee5e7b192d64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZNBAFVD%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T004017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDQgZmR%2BjUcgHVEwId2FgnCcUGIKUp1ivdspTyj9uaL9AIhAJzBLy35vBI1VnAmnRmHI6NU%2B%2Fz4LphzzdOXVOu6LAAIKogECJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8QH59y4%2B%2FLYYrrJQq3ANUtEnVX6yV%2B2L5X9xRCLPT1FL%2B8mvha20%2BKw3EcG%2FGtm7oK3PLDIp%2B%2FrOV16Sxf5e6mdiMS4zvikGvRvSvLCMWt3BnEQ%2F8WsWEAG5MfuVDc9qxq7xSIdFGxXTMRP4%2FpTc8KFF7LDz5j6mepzH2vXp4Rtkwfr8qMHh1ZoBm2RW31Xt8lHj%2BGGSnjwQm4CPHNf08Lt%2BTK1eoQe7MLhIdSNRFICOw1Sy8rkq%2B%2B%2FCkADucLKm%2BC4fVqD%2FUxr8EENbDNF96l1M27ju%2FZrZTQtvq%2Fp3jL%2FOUbMRbJyfSdUxr8qi5R7msEJVm3kpdRqzO7SVYflpLlp%2F86luBtCXqaKP1FARSTVaC1tmSggRoxK8uh3rcwj3fKzuKvyvtFoZ0G3LnR5d3X%2FFJxV0z7cggzyizNL2p3ZbWasO1KiPlN6qAEivmGwUb1ItVVjvq3lIV6tRXCP%2FfREpUdMsrWQbjPL%2Br50ZOG8uJ622jpavL15aPnDDJdy6fdJ6HsSecEU4rrHq%2B4rJUSRsUUBiT5KTjeC20CR9Fp0CFpZaKSIqnHdrAhrCP9HumC41Kc5QkBhnyVgIqDQax55r5hqK%2BJbzL8jhyNkxHlI%2FC%2B837TEOJEhoTJfr3fboZPbXMZwgN0I83bDClhYm%2BBjqkAfnHj1kZtXa5n%2Fph3Z4ffGPA13Ihv2Hx78qDGqBtrVW5qFkUgYpG%2Br7JQEkmuLMOnQT48KAjMNRdHhY2J8S0a%2F%2BWtLLuR4uplLIdblEfW2S8gIFOpqPmjc%2BnhwmL7dJQwvr5Omb1Nwh5RGKWqjWL8iADquZVoDGjQxVeXl3OuFXYSude%2Fmuoyo1lpi%2BiCaJ%2BVIOCuP%2BI32q2xPP%2BlOOgY24dQfpE&X-Amz-Signature=b8fe245c7c8c724a41324abde7a7f5a674238b803b8a5bae028760f79a49f7b5&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
