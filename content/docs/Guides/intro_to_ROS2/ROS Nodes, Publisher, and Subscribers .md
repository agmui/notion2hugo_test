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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=0ac3040c44194d47d4d2027c1f9d29a560cabe22a69e01984b7a92bd2864eb0e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=e67e3ca422269b9fa4690c4f9c177a2b01fc36fc697e6bf5ac64703734f66aec&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=61f32473641744798c8324ca2ae453ca19871d93d117cd3e878225a3ba0a4e20&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=679532b515eb4dc9bddf5cd9dd99255cb5afd51e7e2d8ab9a501dea1231e44a8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=78956054604211a6965f2f3adb21730e44b18742bc635b0ee0f8b60f8f70a6e9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=ed72f38721fe10539351979a761a3148c92509fd53bab96c96b2a1b2ddf37110&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=627918e1095d2d513371810c0809670c75985ab96a2cc4e60a57f64bf6d60960&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LTGKUHM%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T040953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAllAzGG%2BVioZrkfFIyCHxJ7Nsmp6UpgnZJnYhLOZ8ELAiEA21QSfFsFfybWUIv7EUld1dwVCQpcSpLCFxL4n7qGkMoqiAQI%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLesJwlYidNeXyRy4yrcAz4qrMF%2FqJIYziejduRbigLt4ruS9GvDO1qfI7T9N2ox40G3y9lJFqTm4%2FIO4mD%2FWcRixZO7gB9y%2BGF%2BqGx4YpUFE8NX534at4cTipkWeRNSXh%2F0WL7%2Fw%2FJFRESlnPevwkSM60UrlcnXmmgvLxfYTAEAOTTZniPMj7jPwyLZgWyWC%2F0rT5uLfPiHGk3Z%2BFa%2FYsyTIE8ayPmNMzGWR3ycOpCqsRgOAFUe7ze9wf2CB2eVwn%2Bwne9WcrYZ6MQMflHb4cSnDrcJilG7K4cqf2dWcNS8W6ol3GXGqqTLSBEgPusrQy9vDp6Fm06WI7lUGZ2CVKJvmNLXoY%2BLvk7n3Jr28kZgA8qGWEQMNfAkjRDs9R4AbAAGU92WgGi169KUi04qDqpdK8ZVwQORHSLjO%2Bxn%2Bf%2FDfkMjLW3XWG5fQ3QlM%2FbLnYrCIZW7VJhLkYUbgBDUwRzwsbu50zHsa0t3bTEm8O0aSvWqIkBnz3bfq6QUD0pDAu%2FNT6NNM5Bkt7LncPPIJfN%2BKQp%2FqBtJO67AMzUxRX6nKk5bIhxTo7hbhPHEsbQWwHKQv1W0OxNvCNai%2FjlkSQtdkHgbkqcIKkM1JmFare2hlLU8GiHhH4V1MILHOl3%2BTC02eBSYteTtWcTaMJ2Ytb0GOqUBaWgy2V%2FjHzrSoA9q8133flQD4Sb1tqR3mlo9jbUpd%2BA0Tad8xzDeeky993r035%2F%2Bi7RBeJaiZY%2BvkUq3jp8rwSVz1Eb%2BqOkFZoQFTZycD8RjucskZSOBwFcIbz7WJFfLL%2BekhQXaeLJIaP%2BrBsIm0%2BFEEouwuxCkEYNtcbeJTFcYXrI7oRczDH27870HuXjMzbfygWlME96QT%2F7FyEbtZBhSH1rD&X-Amz-Signature=43aea4cde520be52af1654dd354cf4442fb7094ca0c4209166c2757ff63ab19b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
