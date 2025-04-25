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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=1948050260aa929f684b8c1b76d656efa5e5d1374e96f170e340b0973e0b1493&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=ea8bea88be02eaa5d5cfa0da685a63e33e3f476758e4eb056935a759ca90245b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=e7b6acbc2861da53434072a3118473d5c4f5674fd2db3aa6216165fa5086273e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=1f016c0f4ee86c6dc6d1964ac5cf6e61ad9dce9973c2d44e61eae5c9ecef016a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=da5b0aa75d6f4ed8665c3c904c95ac64dcb9dc465b50fd5a4d4348864b505190&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=d9a3935fbb3ae625b139c775ab9987a57c9dad9411036676b0f1a81c961117ca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=f742a8845e6de8646657402fd86c8ca88581de6e5fd354fd1fa0e7c625a7681a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM33F2WC%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiHcIy3JI4YKxP0Af4BRANOT8VB96GDUGnpjOJoB%2FHGAIhAMctYqKIbiXyaccAFem54na9bCKIRX7c0F0CrXYDZpMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgzhDsoiIrVALw69vigq3AOrBqcSQmeAO3iUex6kISj1ZVhSFaAsl%2F74j7XNk6xusbq4XSqKP%2FMyHfG6lVlMYsqh17KocIUs3Af7ap4izgcZY5jdMCP4ksUNF1Hq6vnWG7NmNR8FcpSwF85l0HlQfVfzMb%2Bf6%2BfiCq3L0smBI1pveCFZgeR9NTeieM08zX8nYfUh52zvS9UPBlBqlm8puMxw2JD7hYH5jwalaxXBPnaphHDkptRiFR8dgXcIv30zNpWfG7ZKCidoA%2F3fbyxUxn6uLduuq%2Bi7ovmZ8eFNBlrpBvboK66jpTBFN%2FGXKfF9ed2dv1nRmZ1ETORCxfKWopXsUhc4gOMIX%2BKwc%2Fq%2BlCYos9QXFbzw8J27lwfxVy7XVv4oHqs7zFr2T7J8ZzOzljq%2BMlzOIqhiZvl4HmUtdklISePAc9PSb4ZYbukUngz%2F4y1H6y6yqXyqzFXR35osC2OzHS48i%2FGTmIzaBBBD19%2Fb0CQUX6%2Fk4kNIKwbxa2u6S9hWA1uZ1zWYmLL7zP9QR5h6bTu2W6gQzYxFo8FzuHnCkb0kxRtNChXyTcqUwmh6GVQ8SiBCvimj9ATyPkTjM4uBQgfzWyFIYSx7Sx%2BXQLqZHgdD91cG0%2FVLJG60sLPv%2BNlnuJt2f0G8yhFbQjDv567ABjqkAXgydovpmQ%2BqZSvxF6mInke4kKRNExAzUl85g4ahz9mzDlE5zNOYlnnzi5kzfgxOjDh%2FcYhQVHiasmeOvl1%2Blu8jgfu0hmf2uAZJVuw2wosYphbPeoSJyy5X4EeKF5z%2BDbGtZn7CnMYvq98l47o8tSLVnzuStHAkFALhtb2KlFHmsmLHcolc9KHyGbwsDQGUA9OA24slqybFeDNC6n2%2BjM3qNj9X&X-Amz-Signature=77b8f20d3e36e308a5702b47f3c562385fd4f9746635fcc034f2998d2d5eab67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
