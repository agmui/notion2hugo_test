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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=bd2221ac84b745873a00ae74eb9725260271c4037ac3603c5e8625ef238c81bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=fcf312d36a1baac22961c93742f0310c4577d6f9e2ec9931933430f3db060758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=b83c873685cdb7c6ba1694089ace2cd345a2bb37f22c74ece14cf8b7f4db5ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=1d00de3125821034b54e1b2d66dc22fd68ef697b381a37fb1e1a2541cf25a302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=f248775182230bb6868c68a3c2cf6815c6fe0c0828d36100f900bd6529c3f98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=d581199daee0d8b8b696c70d642a9adf4c5c6abdce7c933de85bcc1a9cabe00a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=dff876ca3d5246ba403e46f18459bbb1fff9ed5984899d4af3ebcc0fe987ac49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJ4VW5OZ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDXv5%2BIr6KjIpvBoqHluSKlk6VuG5zKX8eiLbtiBsfS2AIgd1O%2FpK0l6%2Bcph3gL%2FuBFV6hgdqbldFp%2FUoYcyDx788EqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTGaSPW43AuH3ImGyrcA6e18hY09oY3rYCCjb2j12txrxlx0ZOFe1YSx7l%2BR16kr%2B4DcvPgLTGjFOoCj9UOFeoQHp21qVeSf3Wn0g8PYhR%2Bf7SJci%2F91y8bwGtWvDpLvzLIZ4b2sIJVNUihx%2FyWoC0NBuOuBi%2FX%2B5wPqNW6wOfvikpwpR3%2B%2BN42zYj5fXJd%2BQ4wFAere2TUADwHsO00LF6rc5URI%2FFNUciauDhD7GutT%2BTe6lx75l1ow3kcPOIL%2BKwsIuLcnsP0wac36j8hV3%2Fw8Wwzytma7FL%2BPLkamv2yUQ05CDqzeFPhO6OAF7uzESDprVivWAFcw5%2B9eB8wP0%2Fig%2Fd2b7JvMQiBGDPeF3dxQdiguqiaMqkQaD9%2BVjIX3Met9C15GEDAUG4MimnAlHnJ%2Bv9cF92ofNodNVN0X0w6nPT3HuQaV0t9Wxww5VTO6m0j63jJEUQ2zdRiK3EcBISuRXDTqmS1WIVvKKouWyuZYDZ0DDnV1v4DR6%2FW63IGVksYuadxjsluehxSGlMWBj%2FVZmL%2FaGMZAytv4zMj4I%2Bcn5%2Bi6IsOirbmeq%2FXDVS7FeRdGR7gVyiUHYsEeAmJ5Z7cRzViu7CgTRR6CCFB4WhKTpmJjrMeORF8eaaHLIxDWY8nZITXwl1QiQUmMI%2BU4cIGOqUBvkIpzUFAVuP%2BVAq%2B6qIlSiLeaEzF%2B5gFBB%2FR6Ivr4%2Bio868JlreTDTzu8LyPZOrzA5lIPJZDfKnwcOWypzehtBcI%2FCEZMGAvj318Lgb9ogBo2r2m8xDC98bI18TSEr7BXZZ5qJUlJyxcUqOZftRPWx43vZJ475gKMNggqVag7ZbdKWQRBLakP%2FItPuHY3JO5VJexgXETdGai78tvsDbdW23ZgRVf&X-Amz-Signature=52b9652858491b9fb80b4c9f58b8d21a3ac5b3686d9168b9e490e860789b5f4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
