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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=8a13f0bae8fda9c5a13fd5219a98b62d0e846cb06f998cfa753d03839ad964d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=adb440d92b41d014687f9ba7ab7ea52342e9e5aa316f495287aa973debc0c102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=9cd0103bb57dae84fe7387e16298d6e51d38230837f1696ae3b548b5cf3e6fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=a19b0ac0c498dc12152690eca9ef16536c99121b6080a2679a04557633020d14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=d71b664f75f67e1b1b123bcd3feaa67e7723ea9df89a6a4bdade390ae6d3b048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=71ca8f8e3a0edec030ee3614ea00499e670814d0cac0d97c216086edc5c9a446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=c99aa635a30dcce970098e6f623e3d518aaee309f7cf3708e5675003fb6b120a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMHXIR2W%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFY%2Fx5vAG%2BRP%2FJdsjy1njAndghYSM6metPxjAUGSxTohAiBKCF5ktvlNrWUZMV0k5sKGegG2%2BVy2w6iLILD8digghyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGxXHEdG7IP%2ByhamFKtwDs%2BnJ8aXz3Z7Fo8wgPM3dYt1uIM9OX4NZSZ5i7ixpLs%2BwrozDE1fZyXmYAza3r0UE607zZIcrbRRAtcMbldBKiittkEtrnYWyGPgVRKnOYEAOiGi6gdlDWdqevMbK8w0o6WYxGJTrcLq0baE8CNjcLgZUwtGEWE3RdDc3XwKcopyCeMgRLNkDIqy0P5W9iN%2BMmjJYr36gCA75%2FzDX4AsW2c6yZRV4ZtxNHpqU822rZxR7Q7VY20fvGOC6NMl7VVjUVVGPpK6kdgPQFtLAGiJtGGCL5DMYVLZx4Gm8pwcovm2qRKE7eEweUbppej9AppkHFKLadVJdjM8Y%2FvRLHuvSdmo%2BPvL%2BqX9wV6dAGZ0aELrJkY9Sy1G%2FeDYQOxepX2YXUw6lowzGY1WdEC33KIoDov4WBqxQpKezZI5zdF1ehNr66H0gNOFFGUKG77LPzFaIcDKt%2Bgoplie%2FYtYRFZGTDL8q7dgWgmkYQww1rftfZz8zNKgX3ko8U5NS9uYD3%2BmFLyaf3dwyTW%2F7txJm4oesf%2F9WQebErQYwgFpdGBBny1wjLu2UsXTSCLLf%2FE%2Bbz5i5OW5BFeZ2%2BJp9myo0CX1G5exxMxsGRABfY6gGtevvGihbx%2FAyDkGjidKImpwwp9L9wgY6pgErHLN1rhrU0ETCeyBK1lQRxjbnIURrHlLrqtteMME8ZCvOynPIAq6pdGer2tNtDpdvzi7rooKdAleHQMQFZXOfKnN3K52RHoVCmd6xqFJF6nLCPNCOEE9fqMD4bvmxc%2FN4PoS4x5sWIelsZNh%2F7PXu%2BxTU6laNDVV4ALRECU%2B4Sdo2Cjhk8bLMxWNLm3XAZfsd9q5DJ2tf%2BclpboyfmcloFGy4fr9K&X-Amz-Signature=6ff42815715613726b81714edc87b5d7b152af08dd2a1e29a59c1e459cda0414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
