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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=9da42d36890ff453c371b7505db33c822677a7ddef41f201cce770e87326f17b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=ea28965cf958e906ca28552c8e874024d16faae68cbfe322d57b047f83f26d22&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=a7df3e0a1a0a98171990ea7d1b8ab2ca04927e74d92427c0bade8a8fece6a1c4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=fe29df357df50091e1c52ef44ae834dee05b64d96b7bd135d5eeb5b4546619c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=076670e4b10d1223b161c448b79e4bed886c3ff01adc714b9d89f9d315c8bb11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=451d3de816d0081ed9dfac34acb0ad0cc266cd35f88bdeb4276e2009160894a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=f2821fbc0f5278d7b2b54b8ea96ea4f87c1bf05bba526cf4f38520671216e061&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB45LAGH%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIEXjeuEfn%2F%2BeCyw28MiD86Tb%2FtTp3vFDyyuJXkQZQdRjAiAtPyOYSMGXr6%2F1BDzV23yLFUPV1h%2BwHro09EYtYekAaSqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnneDCykPb7SVj1EYKtwDFTrRaxNSEO7XThs%2FHT7I%2BZis7BxSRueyQhOctIG053MHy4WQ1Dml97%2F1oovACxbi6UsU%2FEWpqwLjLTl2oO2bGAqvj6F6gK0UUQbyRNBZSi7cOHLRCKXkl3U%2BfBG4nlztKoX9z3j75yHPKqLMp9jEue62AL2%2FVyf05tcyKomdFnJ2t0tF%2FlMXgK%2BpWo03es2Z5%2BxuT9HWQz%2FRbxeO1OPEIy46AnnkOZuvIcEmIiJcLg3giB84hWrIyp5Q65%2BsbePdkafy2It%2FV1lOmE64M7GRc5TMy44Ny%2Fp3cOvQoAlUBmATSjsZauySaR%2FM304jEp45A2mY%2BosJFWDw13nlY27WWjpDvW9N0Vgy0e2HqlTwIbPjXtkN%2FR84io9bhEvc1Oh%2BizaM9EoLepbFXNVOrpAqt5ncFf0sRsAcawopG%2FLSSB23IbQcCjpPYyN34Z7D8s0IIx%2FEnNkV8q1YV%2Bhh6OrqzZn%2B4r7XrNocaXJKtity1FdFBtk%2Fu6cPm9Hc%2FkqSMjcYoLwlMSQkf%2BYdX2NB4Zj5PHstqLNVuJ%2FH8TqBcNhiKHrooUuxOL%2BjcpJf%2F1Kuy7JEt7j8Wi%2F0Oz7T9aNpQFACB8ohQMeXlthNVCsWvLCypBVTKOwipC%2Fk7TsMDmkw2qW2vwY6pgGIJHRwNUDi6OsRBtMUfDy5Zfw3vCPm0ix1GvoZHqTq3G8tRYvkFim1L0%2FvKeksHBnVaVEdEBNuPSkpRsFsJPbq7D07hwEmPSIiGARfQfoIqMYWNTn78jFMDGb90kDW05XdBNFl1ijlt%2FbCSUe193K2tPSRkUZ%2FhUPadHOvcUjC6Icr%2BpVBvGbYWh55zK6fuhvldDyEf7j2XfUgHc7TaH36MhEF9OXa&X-Amz-Signature=3b70e8209cdc923f7fae98720bca70fefed1c982735cd2c5895a38f6c8342382&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
