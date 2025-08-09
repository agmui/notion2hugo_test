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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=7dff7bd4b749d1898151f791b9385e2a937bc6d341b4e30d14122774682368b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=3c52df00cfca418ffca81000a9969ecc689dcbb9e444b8d6a4e7bb697dd9d03a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=69ed7c141bae05a50080b8398faf929c313596ee3b4f87ab796d0082f46b93db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=48d3c77e119da1e0292744bd42b0602513e4e6107d9071c5adee3ca5e1702989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=53adb0fbeeb100d2767807ee9a36d016a58e4c0470a490eaf32d450b317c996b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=607561094bc4612a428a0aa2d4ed6293bd9e9e5bfdf62ba0f7f7d4313bca027f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=405c24c1006d8cd78b9a0e2c4b0d420e1f55bcf3846635c2c499cf77407dc584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644PDRKGD%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfMuwNYgFHDnjJzfOv5jweDvmHV%2Bba68dAXAcq%2BUVZ9AIgOhqWFjPdkPhxhvj9rm7avP2ZOdtu1HgETcQKf2nINC0qiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPs7JUyRzw9YJfpwJircAy1nh0G%2B%2BYkS0LIsAwjjW57Ob8rBcTOXslCo9VJ9B7ib8F4SfQ6ovpRRd2GahOVYG2OZa34IxXFEOxmYLog83y0pEjSACe%2BJNiOjQVn1H9vMFi08ewTT8ppD3aqdL2snb9LGrhzS8yacotLRpWMEyKYCMmAYcV6kjTbyKJuLyDc7rJvjpXYtFzkyaPwokAhCrV3tgT4jy%2FwsFJfAeMlXCbXfeTcbeJrsjOdP28aWU2Dq1ZIw%2F%2BZt6gzjbJ6osfWv5KrZP9JAeR7MfO7dX357Q5Em9SHOXPmPZXU8M2V1AGdhdSvl5YH3pLrTiaqzx4Exwv7rcToS%2FaGNp7kODRLcmbZxrU6dxw%2B2ID1zaEjshsszUH%2Ft2v8jx4x7nrAyyKuXNMULAMHsAD4sJhyy0htOmvytHMkXthjq0MUwZBYrPZxOWkVAuyndM66tBhfJHixTnlkNTvxIT0ahnmdGb%2Bay2vmMBsw8joQqvxbu%2FN9pqEJgngLwPmOPc4c91rRTVHpS9Z34ZFwKyQETjOgsxzwI9miiOxgvc%2BNxO6cVo8C7fpvo%2BAS0MApvYR8G4WrhjodZXjheMBDO%2F3dhkkCuY3ZeHMybyzh%2FCDuE7JtwzUuO3HZ%2BBdI8C3DysqwQ%2Fhr%2FMNKH3sQGOqUBv8pfC7yP34KAZoXt8UZZSh9tkHEDI18ygfwa%2BJFPMLM7y1rZ6rTXxxdE8aLNrHIax1AJPj6DKklglEc3iH2cg8toFeAR89sinwYQVHrHGov0ijcoNVkDkLU%2BXfgpoOSYpW3jN%2BwBz48xSdgCv8pP6NcEvWTJKpDODZYFWPUdK27Ebo4hcj7aeMgoS1le31tUu74jCOncaAInSqv9OF6ajZDl1wxE&X-Amz-Signature=ca6ac44157389095560374b2d94ff54ac2550392bdfcea70b41cf6839ca89d32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
