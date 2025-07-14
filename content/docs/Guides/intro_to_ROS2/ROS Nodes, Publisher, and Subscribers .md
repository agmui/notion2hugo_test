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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=c0b5331cbc41d1a81448481785b2e9f81caffd4d01088e18667027ea0af0739a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=7047950be9f49822eb2d2758bd29e0ddddf4784feb2ac08a50dc5b17f1d7167b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=2eb23e0c31d474b4bd9d8f839634439dad7ae00e3559295817c98fe45966740c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=541564fb28d86393250eef8b8bb28153f172789346dbee1edcc286fa1c8804c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=4a6845adb0c32de8d7ff00b8806ef005dcb04ad7289a2581c689e21977d50cf5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=5ad4fcd4b58afb92c51609ae41c12b8bb1dbe917161c8110ccc45b719ad5cde6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=faf7730e39ab4ceb5581281fed42a205f8de01ed8ff70bb72f168293306a0e84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKEJXVGK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T091655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCICSIMkhp9zpsWzZK%2FeRknRsm3cO%2FRQvQHImS5jHurjI3AiEAtG2vvQR9OilNJ0B4EtkzXoHbo6H1GRhhdOJCLZ1Keukq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKVmTPBybFMP6EjPMircAwuHInB3RCdptqrEXwpMOrnsMxrViieb10rHCPNP3Fb99eTvkb94Htpaxs7sfPS0KZlAqbdMpzcVEAphfperkSh8M4PX8ihBFZSz3FVeJFUjhzASi06vIp%2BHgD%2FBoYAJTVmeOKDQrt7e7tBaBNSCpRWMitlXYQT%2F1tSLKb7By3D3uYTCQwA%2Bd5wHUY6jKL7OcvbwLYdL0RV9hc6L%2BY%2BJ7P0OlQ2Mw3JHQOg4ZtR4I4gsCi43gucXPgG6VoBhIJ6%2FQ9YPv%2Fdg24BM7J0tl6vyAPfRNSDLcpDC8asGqwpelP027vG%2FLoxBIDwZRZKYdOxOzOLV%2BoqStar%2BNfWU1gobbh0GKx9MopT0KPl2NxhJta1WpW83BHsmalr6AshCwae4WmH0eup6IjLxGS6izdkhUemAU2WdfiRfQdAL7Q7S7l70TpdkzVRBB8a7X685G0msiItiXQqS26b%2Bn7Vt5%2BeTbdBXD2BpxcqUdn9n%2FjvMv%2Bg3Hgj0vw2EK9OZNaU3zRDnGgLbhBzWg08bwPwUivVRrXY2w0%2Fpg%2Ff5YObC27sAgi66l4j6KkZ7M8ty%2BF5LjIA1juu7xNXOV3YmjXOASPFP124QgnxS4F7nKrwv4RYnBtHCpH2O4auEEcLkPwKUMKWI08MGOqUBiDALfYFDJUzeta%2BAo4o9P4pqpVoh0WZrjiqn%2B70SHwAbVvupVAVOwssgwVXD3FLPvIIqb99Uh1V1oCtt2qKWIngcR%2BxPaHsb5BwljMGTbtUOgcwsPfud7vUSbVwjT%2FSxW2vWG5vtouclTTLZ0cs7SC76d5vqcdEn2Zogk1MIK03%2Bi%2BP%2FNATjXvoxyRBvjOoliV%2FxRPMUalgPz9eKpmVb75%2FVAqFz&X-Amz-Signature=d6607ab6e1fe903720314ab73fb31238923d298148ab7a272fa4bc78847c1b61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
