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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=bb80984f1f59a92ff070c20b79a3b6b584224657888adcb096e1f51285306efc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=130112fed4383c17a30e57d304d82f732893dff88962435cbb112370b115df53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=39d262491a010aa6a87bfef818595f7fd475b2dbb176d8cb138140cee61db3ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=7ff408dadea03cb039f88eba254a0c74dde7fc8044b7e1e71b06fe2e408b2bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=a7763850e9492edbf2705818188ef439279d033e07e10e8e0e8b5c479cd50e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=905413dd2f35a12322a177369928ea4a3f08a731014bd37c5fbb73988b8e42c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=3de0e30ab759eae0c20ea675537d21174923612f56b09fa3ebc79e191f8d5a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CBX3YES%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIHIIDHyPv6nVXjFiI%2BbIclf4b9cMZ%2FvarkVWm%2BdQWaohAiEA9IXqZV4wW%2BfuwCyoB0wp10c48BxDrRZPn%2FE9iwBIhnYq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDK8qq3yjVsfFwmwLCSrcA4OkgBQ8d4TZq5UAWrpX4OmbxN9VGKBisFVmtrze%2FIXWXMdNrSDVh5bZR5F0RwW%2BYh0T2ibPhlV%2BtTLkbUXyMq%2F3Mys2e0sLJuH8lrjvgUYJ5EhULUBOSYHZ%2B5ngUJkL2r3nYpOjA2m9gwLxTS1UXzvVl8JLOttpbcJg5nYzqo2qUJTxIUimg2%2BDYhRUFyqQdUhZqodPsHsR%2FwXUDYfVsBT6maBnc3sb69y7QVoZgmUVQgBnoiNX8xA%2FL2TiksMkrDYKc%2FVnz7mIE1h06j01FVzWEBwqz616ucfGi4sNc7ca6XpfOM6B4QXLAS4vYFlsSqXoF32E0eMw3mgPOrqvB3Dj9BzEUM7OPaS1plGOJ2woP1UYKYCybz2fHWqS3myUxKJFrADF%2BxWXzxNh9lOugZBEzRvcgAV3ATCg5XSzyoJ82KihxaoXHdzMeciGbvAWZwEwJ34nt2SB4Q%2FCtXgZDiGem8lOTUOK8iXFn3CXTmpwagFTSJ4LhWzHowQQjW8FeBNPHul2OHfsNVeh0ifIqZ2BUbIwzmqeZswy%2B6S9XN%2BIeHNHsnkdmrs0AXsqjwJG3G%2FNKRZ90aqOomqV%2FCpNaNIOoFzLAdeofD0wv1xoFteP70kMSkHlHk6tZ6qtMNfZiMQGOqUBQRoBtu5PgllODs2lLW5F825T1CPXM%2B9sBc7LqLEO%2BGp%2Bzxno5fwT3Y6zPAIRh33D2uGiIT7IEFRfL5BUX9rjJKZvlbCAlU384RYBL01IFpzBqdib6sivwxEScTL7wdpx%2Flb7iEX4dnHQi2dT6IgFxZ7%2BZSnN5nz01A%2BxQ2J3MyGQQUQkK71lNLmgq1%2FYffORpcuXUliDdGg9YbO%2FEdB47R6eq3EY&X-Amz-Signature=912021fce2366bdb3809a6ee6eb6d903a88627c7b014e744addd13e9398938c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
