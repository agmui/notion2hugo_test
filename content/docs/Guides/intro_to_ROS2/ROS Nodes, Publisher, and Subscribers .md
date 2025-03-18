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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=8ed8771502c81c238c7321c180d61d3451a1872cef33937e0018b22ea3b9cd7d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=97155781ced25ad1d904ecdb2fd81b14c4464a803cae9676ead0acfb3f8bb930&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=4d298fd838595327ae488595049b44591b8153632d1d7c0a9f2650f1e29aeccb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=da83ec8926deab3ee044c1b94b02fd4c23334c42d379c243c5c2a977deb051ec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=ff267d6489e0f5516b8e109029ad8855147c2fff9478857bdfda3d50b53abe41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=cdacd07d0062dfc8e004aacb84ecc8b751204331e2cf2bdc77a0d48cc9d18fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=8de76bf1cfb274673bfbe700811434ab12b09232ee39006472a2d2f3f1bfb672&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2HUGA2X%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T131851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFPxjjXcekf232GZnYCpG25fujCvdBQb7EJvBOQ%2B9lnjAiEAxNM5QGhUdkBx3vitNcS1e1v9nqYuOq7uhzKIcQZtG7kq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDBAZKV8lpFwGkGxBzircA%2FF0HHGvVR8JhplWuEslrf%2Bbqsspcdyk07eeNQ6Mc0dwdjErDbLM%2BNx0jtyt6r8G21XFuwX5mBecDO%2BR5C81t315UY1Uj7pwxsR2hznwpugJuMYqelRURPG7P12voN6hkiH0kjaEvjA6OA%2ByRUorgHD7uKzoOYhaxRKOCWIciWPeg9x60lmYrVwu4JwR8KuawCeio97vafNZgxaSRRx6ZA2ZtVVLTchUtwi8%2FgMS8wUc7lTvaSrYnPf6MRjHE%2FYxTn6ov4PjPp73xFphIRoenfCa%2FKCWdiGrl%2B3v%2BGSgcOfDtwbGL9VY6KByZOumghnk28TgiubvrZtaFw%2BHzJxbCqHTdI%2BfpG0AA98QnkdbP1B2pGdU1zt22tYzqVVhriPUOtei7RppRYqXGpsuLNxOVmhUszF%2BXUlSBXDxXBLkI3lBzo1ftISaT04zzcSsIXJF%2BiezeWzPAIimy%2FmAEQYTAexCKxi%2Fgb0OiY%2F52Q4J4aKJbMFRc3affciaOnHvbTPcoliMBfhedCGmrsowkfLJjLTE4onbb9O0kyHORX9BLUF0x3RK6zdAV518pZ889ZdGN%2FFBJmBD%2FIH96hCgsSynpFO5zV0%2FGhAKZAMu5AAn9gQ5vxKcxHy4WqypmrhcMIfW5b4GOqUB7VPl0v%2FtHgn2mOmmwLO9%2Bawzr72NueoDjeeOeNfvF6tHu88bXOFH5Z9G8F7Vz56646sT21ovgMePrqgTsbll7cQbX0vUggBkOMDxbo4H%2F14Hs2ERgwSfQ4pF9jur4oxQ%2BA1F9Z%2Fhznt3oo6cQEFnipYO3Ey0sdvVlqaO5hYpAzpTsblFedGt9jMT3EE7XrvYPfgcMqeEF%2FKqGV1rX%2FcxQLOLJIMs&X-Amz-Signature=a380d5528796931a73e3e7bcd24e9b5c28778abfe59625b193343bfcec843a23&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
