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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=72a76c2aa54dfb014492bd6847eba7ae22c11907dc3d8b60466ee6def18a92da&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=f07c4666fe4a76a02eadf07bb23e748f4129a813fcee2b293a1f8881376ec224&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=61a86c0cc532091af309ee8b8c07171ebe8fe2951d17a96cf8fc84a8fe20fded&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=d6174fbb3ba26866351768a137153fc05dbeff1c01cd474050c05394f4fcc67d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=b9ca31005780a293129972e14be59ed2b3db028cd274fc3740a58368d6f77db9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=a0c90dc249101f823477dacfac63e431a9769e21638f3d24d31ee6ab6028a384&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=700c09d3c93d475b4dc6606f774c5618f630d84a95154e07294c01efd7a46702&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNMP5IIH%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T150154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCynXHrdhuAJzp27YGqlj5QeEqwD5e6xl8El9XlMDtzpwIgDKpmUKT8QIp9iKU2lUFqXF9Ckv3UGUGp5N6BOtaveF0qiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP44M%2Bo%2F84ukFsLiKircAwF98FoqbftwP1nW5Wp3Y1YeO6Y34i9bFzuh8wonXDBW%2Fo8ek%2Bqu9XOK5OtAm%2FBNGqPkHj12yM5x%2FWRIdO%2BsQlQJDdKxolKU5fvVZHZ45eHeqGmJy5rJDooinqJ3RMteab%2BULblMfHZnkk8Fj2btfIFEyR7mUkuU9hqTZTMfHFOLqcvYT%2FfPK9tF08tWq%2Bf61EKE5hxqxH0HUUBoPe63WVsog7vsHlpU5jfr4sYg63NNBsQfYUrtlnEe5aFplS%2Fqln5c6SYzrPn882pfbKDSb1RuGxSu0tmcKoZJbqTaZae3DZvbJagVML0SxYH9NmubHBJ25WlAEAjikXSF7%2FAe7gL2kKEDAP1%2Brjxah0fNgwRW72Xh35JpnBYoPxYrKToo9QEI3K64%2BcZm8B8pcAQGQ7y2O16pNs%2BpcX94n0VQAdTLCDEB15Iw7LgIS%2B1B1NWJrXYYHjZcWjNkeqPvZx7znSCXKScZp9LkBuMcL1K%2B82YC0KB%2Fz9KReg3BFAONi0aYrzNt%2FTmlRPS6DSsgCAi0CGX1ymlTui6DDl4zIeL9hVumkUR%2BJqSL6am5NFp8TTrd4DD%2FD8JZ%2BKUixn1wgrLWyOD4PdudzILFLfQrNG2CPypwMfXrkgVZfzjLYJI2MInN%2F74GOqUBaxNFy9%2BXapGnXwn4QNcRIfWUVrhyTfMfiZwFKGl02SQmWkRiqRtfG%2F92i56iLgdDzKwsyVDDMzOuo6JSkzTGiXgDKuBNNTZeljqaHHUaH8ggjsNkhwm5gw%2BncFJ9z70TSPh1OKpERSNGuT6LR5yIwAmvG%2BE3wjXEErHDEKTMl47TDQ6Xo95Q1zwxZqZWqYrsiDayuIKgcSELe2PETAjt6unRBE8i&X-Amz-Signature=53c7d3eaffeb9fd7dd372ef256be600c3806beedffa3dc6efe6be8a43a1e9622&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
