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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=3b5df9acd28aeecb54dde1b90ddd54009bc0c19a84b7cf0168179093b159db79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=979447bf6d23903ab1bdddb2b110a2426046142eb31d476db62885a5ffa13ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=faaa2d44da706638ba41313dce8f2c6781cb878980efd6c4e846943282affc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=92ad0ef315fb7eebcd2cae9753b07829f722b3e094c566494ad63da3c1d0eefe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=3807d7332a3f0fc73126402ae14e190b2bb5745af7c9b4dc0be14bfaf81e6921&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=54c82e3ae8b5fb91f629b0d2dc926b686608cd488d741f2ab30f3693f7d32f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=11fb7645ee061684f4b30aa237d84d9682cc8ab3b283b35c006b48df35f12648&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUSKHLP2%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T100843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDgErysI76gF4iEKHVUqDpEELWJICfDz084nALrL2ZMjQIgDoJmiwZEcjPz7ZnULr%2FylaakZMUrbM0vbfynIA2kbngqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHjhgtGck4MeNcbS0SrcA7QAPORuLXZ1%2BvrwCprLjumCbPmKAphBfBaERnKomfICeRbn6HS5%2FKvJna2%2FDQDM2C%2B6pIpDamjZmqfUvcmBLEDQd7CGpwUpddSL00md1zRzH1tLXmuK5ybegXYusj7djI5g3ug9tf6L4FZsQ7NS55eqhpU%2F8A1i6ZSKtr9crr5qKPtlKY44b%2BMDlSLbf0TWqY2MrWSojPXH20lDqQ2jNh278dR84eoRoEfcB9OVTbWc22FqW3Q0mNhWHW8F1sXh8uUfRQxll3sts1txdJRYchh2YluFC4PL8R%2BzJ0tWGeB8WPM2CDDrOyD8oumKkru6Oor2H31lVjSWGYXmBIf2rK3jLtprS%2FJzQaWUE3Amasg2nt7Hq8vd1B3FDbNuBzVMVEozxvN0BwlZY9PC0RC7icWjrnvRlBChE7oB4ViIM2YBIP1U3%2FX7FIKRznoX6Xb56Q0C9P5UwvCxkuMNwXjLc2oEQrkzMUvgfkF9BBn1e7Jos3s1nxuubibWBO2hnddcTga%2FAUEz4XBAAgVZ1VP6rovkcOMjs3oxipiKrS3IgLJFrb3lHJyKSJtZRwHyCvRAmGA2Jk5OYcGqyEQUjKmMIHt844fxCJqv5qpkuQ2x5Mx5GwrpHNvourMthumSMPnE28QGOqUBZ05zWPzbA2wlXrz%2F8ZeoW6wzlI8nT15v8rf7%2F7SvsXXQQL%2Fy4oNRlR2i0K6W%2BiAoC83rbYvhIP7vicW2LliIwzGDSWK8P2LCbYq5vhl3dUAdhzIYWO4YZ%2Fq814tvaogBf3UffLl72rSWLkAhgGIG4rsVgVUBQCW4%2BUrSQ344wj2rBT64FBbGQcJRxsLggng%2Frlrf4Oaynm%2FKhXr%2BjAf3xOVMLOyP&X-Amz-Signature=b8eca25a96cc512af8eb215b3b5802007f10c2affd468efb03d9e7385cd154b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
