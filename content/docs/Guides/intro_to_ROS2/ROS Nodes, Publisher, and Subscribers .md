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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=172ad0a7253c20aa7987f511eab2cd869e0604c3c7b737253c3208cbaf8ee68c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=ad2a2cace948d4e87134a54e8d092a08b5906004d62f4521fb80c3a71e198c62&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=4eb361b7d9cda893564e50c48c3a5fdc78e55272feffc177ad59432fbeb48169&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=b678496427d37392b89f2d210df81641b1e8e6432567c73b9998fa793576f02e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=72c838ce7a24f2fb28169d479b2ee9639808536c39f9983f4fe35e2c2ecb7781&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=2c062faa842ddb3e4f88a5ce54fc40b16fa468936114e7bd188aafe85e13a40d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=dcaa3fd040fe2e8f95abaffe4d6641f96ee9e1d76afcb0142e997d1acbc70213&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQF7ERD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T121340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICaNNd5IcxutXPtaBY1PQDHZLReAZzRil6OQNItPsvyEAiBcGWjvmrWnSUWdTUOqEZV60SwHeRBZ8V0NaRuiIT6XKCr%2FAwgVEAAaDDYzNzQyMzE4MzgwNSIMD1BIYC84OwGfj6cYKtwDDMc7P%2Bfd2Xw4WYRbNF1h663ilXKM%2FzYEgU6CEhLT5fmxaVlv%2Bj1csXa%2B%2FygfSOvdFWyZCwEPHVkJ0mmd%2BpumasniDUfgmVT2hGD2wUogxa4oWvE3qh1yXB%2F9SFFwkRwCZjoA%2Ffgr03GvS%2FPRySKQvGrzT7B9OzjgWk2zr%2FEx3wF1p8H62Lua%2By0Y6ESXthjasJE%2Fl6p8I3hIs6Wb9b3uuISSfzrEkdVnPH%2FSHEbOblq7Hp8m448kpPJ6otlr1s2aLVcYiG8nk2qIRK1VnLJtsCTyrgOJhde0ocmg7RjguKYm80QLPsfxN9Kd%2B%2FGWjUzUtpw0eaiq7R2m%2FS1XIf4JKyYc5Nh0u4ikFJ0tw6zXOfh%2Bc7uWe1AIgMphlSmk%2BlnFH%2F81MEikXJs63HRXKjA8QWI7nR46KI1I8Qq26DC0xRzVsPHGHeXQUxIi50cYILnB50%2FOI5RWHEorXnA9vVIXIheIjoDNxW3KfLul5dpp0IusdoQ7RZUeMBQAKuBCDXiBMb17feVH3vkTER0BORkndFHC4h646Yf6p7WfnPMv%2BhoBVLxc%2BhGQnb37%2BRMhT9wmkBSEdM3vT293eAVzgViOGnvHgrUVMtK%2FKNEnavgzHutWMakDGrELb3ii8qowx9SCvQY6pgG%2F%2FJvGn6ZiCVG4y%2FmmSEx6CQFUpRSoPhvmetPz%2BdX44YukekkwxDEfszJ3lr%2B%2Bb93W2aNyjVoPx6CdbwD2aEAXwr1le9BHnHjWD%2BmsQLbV2%2FGjAhE8e2WKI%2F05hUjr1jIVhhXeTwULq2bdZ5wEa0LKhxWlocQWRERfbRXi8QvhPWg3n6v5BOW0H2d2RplxXP5nHMuIIv0DhAZpvhG5oDANiwxmPMIL&X-Amz-Signature=1fc8485f002fb1c24f60217489320059e5a6ba6f06f1cdaeccf6dfc329dfe0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
