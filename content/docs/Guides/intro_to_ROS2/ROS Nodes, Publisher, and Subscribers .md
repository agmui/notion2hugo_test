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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=9508b635082587e2ba859bb138e8e590db0f773820e7fb544c91787ddec4d5f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=f6698ea8df3d9106934b4dabcfa8e4f556dd1dec6ae65e016f0e1d188084989e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=4ef97f0afbad37423055043aa5992f118d20349cd55570c2e4c2182ba5ca495c&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=d59f28fce9a67f3ddfdc9d31b8cc21a1c61bd317a735e92165659e998088ce25&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=80da6bcaf77ee6ebb9028c426cda35ef2c8d7420b038e91ff442973c6d9382de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=ddb203a14face51eca3b3a936d84c1b21b35b8ddf83f10bb3baf93ebe21a68bb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=a243a4fc372d67c560d5c87cb337943c06d1800d268b33a0e9d10ef4cd9d47c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3EIUSVJ%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T100839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCID9AKgkVy44Y%2FnOXS70lknW3FfZh%2BjgUSygeQnvK3P1lAiAim7iFZLa%2F2Pku3IPmd86QOqY1UQo%2F4jXIEl8k0ODzhCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMml5ct4fcFHbcXJP0KtwDVmBTSTddeLaaKG%2B%2BJeuzG64hheXy63sEt0zr4te3ydXmZFxVTfldzenvncJebDs%2FLDYnnQ43hACI6khEs1Vv9r%2BJygIfIkcxfUOH5sBHLcQ1H3YSCbWgfKfqBAq7p%2FfCZupsmHhQlV%2B7I9n6Os9XrDcXLgYQevrdhcB4a671KNwttNxLDx0q91eP1xLEwXDRnRhibkhI5%2F%2FKXwnbs%2FeqtxvpV0l22Zmqb32993y9j%2FEl%2FM%2BA3f%2BsF81dTkQwf8maR2vVvyVJyeVkgi267%2Bkjkqa%2Bd9Tssbwg2x2SCvSxrv4HAePwTs7lOZifC3ZQesTaoLEqto2%2F3UsussKvO2smI5FsTf%2Fr1aZosb%2Bd%2FmlYXs2EkLvoNRiXDynPuf9xzdeMzdZvzjtnN1xtKEx68h7279Yh8wlbpyijH%2B56PZwcbYXe%2BCtHO1dyory6nqsU4B3hdZjPS9vQp8KQu%2FHA1aPRZNuepj7iP0mm117vupXOqiviH7%2FALRf%2F%2Fqhs0BArXkY91QqmuyS%2Bo3eXqmMrVsaTWVmJJpIygqljeufMJ9SJ91cFumg7vWK0GegMUe4C6VUqwm6pA8odW7LfQqgA56zgMv9NafY83SxdjAolYmGSAx1J9B%2BRJXhBKeZBT30w7PbkvgY6pgFiXXfqD8Jzb44D4RSdfkuDPpMFMExsaZm%2FGkpZdz2wqpTE7fciYSjIPZ6aL8OuwrIRF58Ci5MJ3E0iGc%2FGpWR1HE1vhSe9WI3ANx3o53aYMu6%2FIuV3FMPqdVczX0XXY7400NVdlOC2giChcU8QgpNMlv%2FC612OSJAZ0dCO1Gd831oVSSxeYcD3J%2BzpZ9h%2BBKf27fAVZN0oPrRrvkYJ13ZVuum0ya5J&X-Amz-Signature=5b78140d79f7ea0905bbd39b03d5c17a14690e9554a133c8282b44d69cf39af2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
