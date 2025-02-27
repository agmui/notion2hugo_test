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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=0f6378f71d1af108d128a6e75342487f8f62b75667629d4f53ed5fe9b7f858a9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=0ab269246bcc69c06a842063cd26e294d09368a5d7cad6fe8e10290a588f7f49&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=8c9e9f549d8c592ec026e382e365f586ec8186893462fd5acc0a140fcada5879&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=a5880bf6570f816afa9f82a2de658ed21b4dfaa0a8b4b0b6e67b089905306d2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=cbb474fd4564f89e389ab1b2255d20ad671f4841fcd0e7125ec2f5af2ba1df73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=b8ac34b5e8da71fb8fb900bf3a3d80b54c5ab0852d25e7120c7f05380c44cb29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=ecdd5866e79056c6e81cce8dc33fb4455a675e640799809e18c06460454307f2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YM3MZNCE%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T161007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQDrl5UvBdXpEgkrrdYzlhhCzr9%2Fl3qa%2FXyYob0Tq2IUjAIgHd589igOf2nMcWVGVyZaeAUDn3HCNxLRv9SG9cwWv%2B4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDJqYMKwVMygrty1HMyrcA7kijrjJw%2FSal%2BUGUyRFjhmZsW%2BQlbD4sP1Dlb4oBLIwZYrNs0b%2BhLwoXfr4hGbZcAE4PcYAIB7pTWNa%2F9AdM3GKzhJjkbodcHCMXQErR9w4vTzI17o7L3uJIVf%2BCf7Xa8lTlCj%2FQNtlT2bjQYm6NjXJaT9Z65VZtgVVdUwdkuX2vTLGfba4UN6nxH8MVajh4tHiPmC78AglyT94%2FrJ%2BqlSLFdStOos1vtSuetFXARiGpNzAn0wwQOoY5lgDLeLJnpIu9dW21tgH9thC6SNVQ0ghEgkSuDssmEdzAflxjKAz0qSMBoitw7WdxCk8vAdl9sNDZEH16CffevXfWM5LS6mAeW2dJgj08Rc%2FxefxAlP%2BNCsqHLUslR88ejtWpiQhKjsyYjXfPOgO%2B72DmR4LaCcz3EyuGD1eFowC5j12jTohTWjp1N2AvYavYz%2FwO3obHmz0vRRmalY38zHfr6ZrYT1AfVfEIOE5N4NQcDxBGI%2FnyNdBZX7C3J8uXglUc2L49xyPtXSjPIx7OLaeB6hdw7%2BaPUme%2B3VyAKNAg3ZZuBG9YM%2FNmkPdPMA7n8%2FmMhZn8z6lTaJGC0B06SdH31YLIktSJAp8m1avJ53ROu5qM078CzUIk2fePF0c%2FVJKMKONgr4GOqUB8%2BEGXDzFaMqkL9PSfRSs3Sgw0agQdY9OEucG5xB34SfdwWgte4%2BcvEI22pUHfie8ZT0ugtjuhyvYmbNE%2Fd9cft0A3dxAiKfUsFH1zaV0lZjWnQdndl12%2BB13BQ9T2ruu46syznZEfQMyG4nt5wR8vxi22VRYy7q8LWVxD1k2%2BqMNEPMHBIKevVhf0bxSuQt3Qg701HqA0821cI0k%2F97U8zcbIfza&X-Amz-Signature=fc9900f9480087dea7afa119357129708567ef3bf9e0347aab14d770d766e056&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
