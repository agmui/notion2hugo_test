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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=fb476f0c2ec4075708a657f2e26e48e5c19d2355bbeee9a25e215fa782aabea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=60d63ba39504c782f3725bee1d70e121cd0350ae1af3f9f83a5956ed14c238c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=c0b5de4e96918f7dfd6f1151bbc2dd31fc314eb81f592c7907a87c31b020d103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=f911e9e1f78fb39d7d8e436025e27f1db15a71155f69de981e3b646d501571e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=dfe21653c3821be435b94e4e8c55c850ff3dd232dac693c65c013c74b242aff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=c9b5720763041b9e9cfd2c4f2c4771d9aac5e37fe549a0934ea5936b5a2c2352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=7ffb270a9a567a7dc067913ccababa87f8f1ea1247c87687dfc11cd726487936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BLXDKES%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCzzIi5PlF9QGdktJo01gqHL0hl8IffBDDUohtpZyw5VAIhAN0Hfd4QR5x6aGjb41fGe37ddzdUPAIhpJfKKmuCbwa6Kv8DCB0QABoMNjM3NDIzMTgzODA1IgxEf5y%2BSGXSQ6eYS0cq3AMYtW1J5yzwhmrXn3Zab9rwJeMf2WsXy9GTkjKcwgECsyG%2FgKaoXohWEmaJb0mWYPyiiiX05K4Twelu9Bp43eRDLphDxURLP%2BbE4rHgU3vIiMIZe9jrO77cJRmmWZfRMvT6U3BZDDuLJD%2BKcVi8oSoU0TC0E%2BJbydfni7i8gemIKf%2BcbECOOF2GpgCC5jt6PEz4e5gRyY4N4wrn590ahH6z%2BU9TxjU7bQAYFJ7JKrf5XAowa298RF4r5Jmb38HM0GozyNqb2XHjkbjEYgarW7NXksajzQCZqdgJwQtmRtVwa%2BxA38FU5o4yLgy3dHOFfwFXm%2BWRWmxDI3KPWjsZHVb%2FjLu%2F2fNgwfjgQUc%2BuKaBwxzOleUTSYLyTmTyPtcAk5C3ut4v%2FISNsF9dyGsAyFvPG07TlQnnGSvRY6ktKpP%2BR5UOWWIVGop4%2BsdPZq7bWPjGvUV6dLnkVJyzvlxWelc2MlvwD5Rar5uphEOM4ME%2BCvY%2Bpgo4rFh1ZABpqHjeptJwDwnCaPeuUmXbQkjTd9IFFbXgYn5wmpv35b3wMO9tKeHWkb6iq39J1XeFVO7PnALpl4YUniaQktrzc9NEO7YvG0k4Ya%2B2tJsew77ENIzmj32%2FxDbHhcQu29IpJjD97ebCBjqkAWOMerkWlgKmw5JEhvG4wFp3cW%2FvDlZQwx6GMz692u%2FzmiWbZX9d7IdaYEOhNCTH%2BlaPBnDbG90YnRvlWgFsgx4zYjwg9oW%2FnJfrkRmFzebpYYxXP%2FLU4ETBKtYaFJiHyIIFW8WRoX5NxRl0CE%2BpqFCivlW0tr8vUEOq1Sm%2F2T47IVV9Bs7QcExJpE4RNBadGo%2FJHzYnvjbJAzajoI5y98xxzHzK&X-Amz-Signature=4183dffdd43c1aa37fe48fe472fd1f4f57aa4919bd73388188a4444853c8b3b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
