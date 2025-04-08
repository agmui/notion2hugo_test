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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=3d8c9108ed09e88f42adbcfe7d0e946dabc8a792ba0b3a96eff914720fab675a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=1cab4e176e3c4266b5e043a05b9d68e5969b29d5431cfbf1b8d2b03342d7074f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=0b073bf10fd46de93611eaddbe8ff0a11acb6eb12de768e1c473907275869cd0&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=6224b8e46aded7e8d2a100a7bbf958a4c473b931a3ed8da736d9c526627f60c2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=38a081eee8a38bd3744688257198070605cb09402aacec58d7e508885dce3af1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=8b6d803cfc0b538369e66d0ed9322e2919019114721f183a96cdf5dccb62a957&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=5e37022b4d7ecc4c0f391209c310215d6d7b5d33f7b83d9d95a5e2fad16a114a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UEJWGQBV%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwRIuohAVi07D8G38FlHtTsNlkZKKGjDS9iovN6z3gXgIhAP6JoKPq1VHjpdKDCpxs6Tpz8eXolvTTnHrxAaGVbke6Kv8DCHMQABoMNjM3NDIzMTgzODA1IgwUs0GiUYh%2F82O71Csq3AO0SPfTvBpoMMvnx1MRXsaxTk4hvDfKgda%2FeKhxLpuauCkgZ6M7zdCZuGk5wYcnBgTRxEFvYLWWSP%2BFWrZ9r6tXbvKNMzQaaD1egBCJoPxNsSi4a%2BiuZ2kd7W9UDGVAHhvt1fvDolA2zlgosuj6UHX4kNpyI4ji61QrltHoIgXJDYujNYFzOqSV36FbwvJe3NmwwaZodXONRZDDWLjDYVfhCQzd6FJ7hLP%2FPUTjyP9OnsPZPQyXmx7sow0f8XX9UWa1JBlGXBeOzdQ%2F%2B%2BG%2FG5rFa1v8Ldzl5XCnWBjMezwzF6go%2FBv0NV7EEjlyebVCUyrEROTWtSdsqVMnThFzTYGqO1uERNSSOggMA4oQFNrBB7PIO2zZeJ6lKP2%2F5ZftyE5UhKl73BilPg4vhddVFDs3OLG5IwpF3RjgQGsXtbU9JMaMers9NyCHzp%2FWhpdN4Mn%2BHTzIqjCLmxNGZ1JCGedL76WEjWu7ho2asIQHGROOUWU%2FZtD3TGxhRfgEZ%2FXniP7OuEQH4PRuqNkB1Xg90PxY%2FAoahL0n%2BdwSTSRfH90juBNwPuU8NqgxZyW40h1hXnIgi95yMWNaGeWw3D%2BY%2BDIWbbmpcVl%2FtWtumazoPfntK1jHuhHL19a%2FZsMCmDCJ8dO%2FBjqkAWKwKXVudhuCfakvhwL5hPIVMSfbmq8KC3Pc3zMbFwLZYgZ%2BCyJ9wI4C5gVcTfbBjpQ74L5zpm7pk8LE7wsJcvJxZrPdqvpa6r8USlkm5qGUSFcAx3keIA9rI5VrToLQxs1%2BqZ5P6XgDC4B%2BX8CLgsu3daxCqrU%2FnOeg6eX8kQURRYqIwncQV19hkwzBOsFh5AdFt6oSh5sckPaULJjGA%2BYd34XV&X-Amz-Signature=d68160d05ce095349a442b4b9ee45e1966a2892ccb95253884f116c5010c094c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
