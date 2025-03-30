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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=c140b87fbe747724896e4b1e2281d5fc91f7bc3b0bfc2e188505d0931e9c1cc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=67a0267e538b961c93b2d2c1ab6a070f529b24ef5d45a8bc354109b49330330e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=78e3810c835c355f040c084cef4f98a02bd81b3d5de94cbe0dae76d85b820404&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=da45489a38746cdf19a57e21c29daad34209832bbcd56a1e3d1a881db9a2ee29&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=fe4c6025fd84762ccb1b71bed98dc30c376e9b74d84c099b86c6ac35d30c352b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=a014f7250291c778000a85ecf316ad28dd72cb7ec8a9ef66979aa70c65e1965d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=ff9e284bf6293691b62f3c18eb02c6dfd1c1e3ed2b7bb0b983c3838bf7a5f84b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUKUAJVM%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T110152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJGMEQCIChWDKP3mbS8QK3jJkkMS%2Fg%2FC8r3p8oadjy9Ld2OQQ9iAiAtN%2F1GPVcfWEFiHgZGNZSX5Ww1ZLCvSJVwiNcRYrP%2FTSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFSkOU4AtXCEVqcZKtwDIRZbtvTHd3%2F0Qve4eOp6%2BJAreKlVSBQPUiQ0lZ%2FvR2Smt3YNaE5dai61q2odn4S7A6cu5Luq4pE%2BmQ0LOY1bavftzBaL94OHhJ4oujNOIpr%2F688LdP%2F09DXLXT3uAPMzewEZT2rLfsJ4H0GWoAVthi0VTiOMuMs2SeU99%2BH6NlzZijd2WIUu%2Fm3ZVBulaeLGjseM%2B4uuGJW1s4pzRrCc9YTaawq0S3vMhl5a4IhAoNnqWiun9FBXu%2BrwZCN5xH97lyzvoLxAR8QX1rZO42kheTLsjFrodr%2BFyLXH10ZdTF6j1AoJbO3aY47ClFSHeuZgCfBAZ5dBjxpaT09efBPUeq%2BUTbvyWBvvLtV%2B9dEQQUlKSw07z1HtmYwod%2FYFe%2FMmuBq2waKiVzj2sY0vGgHPHqVd1xLxCqBhfgSH9Sr7c1YecNYotW6C8efDT6Uy1h3CnaDoXGsR6HnytjJ05fo23b5%2F9WcMWcUyjfyFnJ8ib2q5HyRCUk9lSNYZZLGu%2Fs7HoVu3d%2FbOwJf%2BZcZaETo2wt2jU2Wd5F13ixOYi4qOVmTGcMqK%2F358IukmzhwSyn9jqQ%2B0LLHjNKYBk2dCz0Izz1%2FgN%2Fmyb8%2BK1NyzLwvrvRoHnbo1S%2BJMevl0d00w2u%2BjvwY6pgEK3T9kxo25QMhMpJPgcD8UEfZEK8ER5Drq3iTo2sl%2FZjYtc3IkPjHeZSKjpccPU4qcQV%2FzFjhPwU73A5nT%2FlE%2BCBnZXjNyR32KuliuMJ0SvPHCTCYffc8v%2BRKmFQ1na95%2Fj6lK%2FV%2BzcuZztbKrij%2FbejewHS0fOL9n69bVqJpbpNd%2FkksGGNENZ%2F6uRxbZCt1ILy2Ii5VFakKNf4Zy7RPdx84NUN1S&X-Amz-Signature=1b7c4422399a549ceb1dad8cb42212ce333f38e83a92ff5cdd21e27998809038&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
