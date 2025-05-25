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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=07d6571f64cb08b34cd886d350ee7caef0d62a0bcbc326847a95befdeb8f64d4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=f2b2e0af7a44ee9247e469facb3f9354e8d551142403f8c981d1afba6537995c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=83dff8b7c37ebe4dedf51aef7e965709e240e8ad9bb04e0cfc05af8a0da16cc4&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=3895a5b90edfe8c0d5dd4865451a61f3564ff22439cdef4fb9cc6ddd83dbb9f0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=2d366160fcdcaf71a5ba756829a9dd066dfea2030cd29933d5b3296b04b1541b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=30193341ffb0ee9f0427ec0377a164ec521000f931d11389ee395d525f387981&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=31b9892740ee6113018c35f76e0a212829af6606f16097a1fd16db6dc28b2de5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2D3FY53%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDNoPb2RwwZ0XFgCIZ0Ro7bL1tPG6tn5ASzZBOH%2BoLMLgIhALTVTLUjETTKP0tsG6%2BTa8CcYuZrBJJ1NDDIk%2BlA6ukeKv8DCDEQABoMNjM3NDIzMTgzODA1IgwfX2n1zuVsDv0QGtQq3AOrfv1OHE9%2FCFC%2Fl5ErG%2BxfM5XRUKEhBJ5uTmn6AoxSZ5eWZpkuo8bh6DYv9p0VwZg6E4tAM7NJDZnMBxAth6yUkvqYW5n8L%2FVWA69mCJ6sqVEs%2BZZ0p%2BeSfDFB1aLHydRwz9kbU8qC3PIP7v1iOu2168tjrNJ3WdE3iOW2A3oSCCdqZeICIZlYZk17iK7GwhnwkvNiBDtOSjEiDHAT6f8p9FvCB2ovVmN%2B0birnQ39U99Rd%2BqpzKWqTG3hisnwC29okSzW01JGcZCEPjxKT%2B5ZkPYojdygSOyWFfYROcCjlzQzbGsR2XPnWyjtzGgFJn%2FjeB%2BS9JDucTrHM6QYo5xxxcdPeMgJkHZ1hc84ruYJ4t409olnr%2BbCo1hJeKOfXOBlDEd3fX3CmyHD9sphubFHNrH80TtuOIIdvLpZymlc2QCohaQAxHyhnT8PNlOpCEtxu%2Bq7pfeDhawTtqBQ5h8vCCNPFSnVmBK5VHEWTys7TnPW6Cb1Epo40fLgEy3CwW2I2Z3YLfeqZZoX4KvurV88uLnBTIyWiJEa5Y3r2Z7ZpZv3P2oIkkpwMLPRfpEkch59WPxM%2FF4GI5UC5nGnDTFX723Je3%2FkEjNyDCeA4yXbW0puleicl2%2BXMsRuQTDg%2FszBBjqkAZV8rRdlWs%2BdJCL7c6YXxu7EdRsycVPaQMLGRL21lOYDQkB9RoNaQAgdBthf7LwtyaxHC0AT%2FTRH4RhzZj67FkL3RLU0cQPexvzyHmmBIq93QKfKpv6twv3xWudk9vwcGi8zN9M6UPD28x2P8ttqXb1LHuZZJk6CndGY9g2kafTNadz33c6HvjV%2B1cA3V4TwCawKP5fq%2BedUkTAm7Ov4VrupU8nO&X-Amz-Signature=a327ba31077f2c29bf0dfb23e4ede137a246f647bae377dbacf0eca52d421948&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
