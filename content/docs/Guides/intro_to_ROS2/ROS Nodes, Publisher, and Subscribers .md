---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=71e0a1486bd294a373f62ea267fa0896cd2b27d261e72b732f9f23d5d7bce0c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=263e3afcc40cd49a1098b8f53106231f9aaac5ac480e92db039640af593a5f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=48a50b216617490aa2d92236bd711747ed57e37d439ebca52f8e90a86747982c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=58b4203661fdcca3e033b993d23f0b35e29fafed28c087d50f9dd37aa176d1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=b902296a9b2d1ddf6f63e996b22fa5ba706025b7096d55d6927ecbf8d0f5c366&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=4280b84520f501b3a7ebb3bf167135b3c4e466ede50bca03fc7d4db2a7f3fafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=85eca0486707373c43838aa77694a6089963f40fb4d752c6ecdc72e0f3a5ce3c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63OYRN%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIFKmDr%2FJr5vCLO%2FjTyXUWPZ%2FIGcsppwNHYAcN7HlLemYAiEA0bb%2BwbFtjo78iaUOXTG6BRWQIjOBDMec7Rtc2A9HpDoq%2FwMIChAAGgw2Mzc0MjMxODM4MDUiDOYT4LkVmWvKv24LEircAwRLcKkuyAVeXohnRSbRpNfK73GNP0%2BMIbkgqQQ11ofBrVGWV3ncKmtYDduUNtgj%2FMmqsaauQWD%2BWRZ%2F0lSV%2BXom9zXr%2F6K5scarSQgSZ50WoB4xnyEW96bLowds4W4cUumC%2BLenyZrjuOObZwq2m9QaOnG5QKIWtJRz9GwAwXRWuCjdQwClGWZwpxzm4xMxP1hbKKlUat06uLRmU%2B030Pdo2eftkFYcAeI2FAVRnto5n3BezejMEcUHTrFIfANoAQWvN767ny8vUjgS55m36DxUjYpLyk1zvxJDicwt%2BBRr6vgPJQq83g1DLMH6aeJqaodhNtgKrD%2FyiUL95pNJiOVxCoZCu8QQFkysvlLZGU8QWspl4kw%2F4AD%2FW%2FEMN9Y6%2FzkFAkEqi7U3MxWBu3F%2BYW1yMlWBBoU3y2FF2t8%2FMWCUmMKAjBvFHyh2ApFAbL5kI4esU8wl92nrvmXWng9KOIVoQgf%2BoRbndY3IEznQ3i4aKiFok1L4G56BQkqiw7c97ZcV19nkirTTqmo270a7uHVIh%2FlpPLKbq%2FLRgi%2BfEaF%2FnPJ%2F2HBQQa56n2S8rIiX78azeweHR86EXJV8%2Fwz57eMXFv%2FzipxeLeG%2FhblySLqZ06WabKtybKI9e7%2B5MIeds80GOqUBD8eBOWkyjF%2BR3%2Bq5ne2NQnJTSLY1VUb8OEsdrSGmL0OAPFY3gqiVMj4aoqH%2F8wgo16m72OpdMX0WBa16qAyYKu52MAJItPg5Fc817vscAyS2GfoX7rKvQtC1I%2BsU5rN3wxGQMimmliugAnykmRDWiPgOa%2FcTxSTU8TulSGlPPTkGsSzM8SIMNlwZkhrqmCgjkfWLRda7gk1RBzDa5xJuSxqM415l&X-Amz-Signature=801d9371346e4b17c98232413e433a9ebf520394e8d5c02519f6a0f16791eacb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
