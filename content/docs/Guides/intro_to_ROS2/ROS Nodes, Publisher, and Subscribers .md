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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=7c203fd9023a9a123ddd955b2feba04d1b0b5026421800b5b8c28fca3a147681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=c447b155b322eea497b4dd7ff2101e39da23ec2dc87f375660769801575a4c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=d51ab859b973077af8cb1ca9f791bb8d1dbdae7b632f53e5d5fe3f33f97438bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=2b32d8a11df1fc9233884fb40f7eb72a56817113fa329a6347f1a9fe31a912a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=d761e155695abfaf7b71ac8f5a7405f28b3358417f2db505c267a43a1a26dc07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=a4030b7ba8ba4e560eeea8e0d55eb86de9fc3155a791b54043ee4666c965580b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=81a5fbfd8ca3bfacb6210d29df8e461f0835aa9f8caed8132a4fd3f9b2e9a665&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TAEE3D%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T161315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCICJOD%2FQ%2BJLbNhkDcGnGtjtmHVLBAb9qVkMtaITkJtivlAiEAkZrLMW58oQ%2BTvBCdtyWN062vBd68%2FhoPCqj%2Ft2fyvUoqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKOKZNuuuBbJbPoIqCrcAz%2FSURg0FHOMao7gTxZBiRWY4%2FPFbp9dY11OHBQcHJbJVIM09qkAV4fOPr8xsiDFv%2B3c%2F2xNhkSjh3O2FKiW%2Bc6OsttaWqwEclNenRkZJNdmW1DTXfkmTh%2BbM9qx%2F%2FNOm1B%2Fd4Ss4SBE37Q7F7MR2Sx9TAfTM%2FQ85kY4qDq6PjgOjRc058jk1TmvcrXYEeAvlcpoeF3ZQilXaVzm7zdewW3EjEYu8ihM%2Fo4HkY%2FshgVB%2Fl4XcgxXnZoCnnvhgnTaDSgKlPA0fP1LAGjbyjIFCZyveFRwPJ7go0r%2Frhv6d3KQhDjisC%2FvbI6ImFUipAhC5LzbxA0Kcyczmp4SUOADfeXdY7gZ8euh9zPVSzXfqvgqeUN4tmprAcnJXv93fOEKkcTJqqMYkj9UUVRr930iY1qwIZ6OrEG1MC5lceVTr9chlKECXNmqNIc9lGDCH88Q0fqdiwWHFb860bIzbxWVA7LM%2BRfVP%2FzsIPWbIHqGLKVFYUoTgQ8XPF3iroUOOQWguQHZF3%2BKHVDa1RYTX4gfOHVjSkd1GhnkfcQy8d66wGf9DxeprKD8rsbNx4HbKlg%2BOHJaZDAGW%2BU07ErnTtPYQN6kWWVz7F5O3um9mA%2Fe49GrQkbBJ3Y7DUKKHo0HMN3P6MMGOqUBGxqVGodPYIJfaKKLvXjZE%2BEESugHy8iD8ssEq6HybDTDwmUdEMj3uISWdQ5Qo%2BKrhCrtzVb41Z1czekAcVqvRnFi1AXQla85pd4qr5nLHZKl6SWUdQsjiXWkkn5olrGdjO04UE%2Ft3kiupTUoJ9jQbY6cf3kGRQXqpWPAjPSFWfswWuvSWIecbA%2BVDlI5lx%2BVK7tuUzdlKHr5or5wnGYgb6sNhEFS&X-Amz-Signature=85a23b1c704833114ec244ae9be2d6387f112d5de17d2df8ea03e1722cc755db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
