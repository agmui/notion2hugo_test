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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=87db5241d7e22c5d9c62f881e1b16c835db9771e190c910421fc7f5e1e1a9a82&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=e14b52dde7c580c668aa9798eef006a0cdbb6512f3c98d3c9b71b4158067e98f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=f8dcaf62aeaea4c6b278a738056d2a7ccc5357c2a59b8c5bd77a6dfe50a1315a&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=769adf74dd4223975d5c9dc68125fc44aa24e52d117575e08aa0e2af8014ebd3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=cd49dda4cc018440bf55365cf916e7a64819ad64809ad8d913c9b0ac6c97a52e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=5669281de6ae44bbc0b58cbdf44f833029ed0a669e00bdc0aa162397b429cd4a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=d914fc0b00cdd35bfcf2b3483a7350bb0fb347b9b3fc0f1bea4553041975cd54&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPWP2JXG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZY%2Bmk8vhYYJE3WoNi6wv1O1cmQ%2FSivVHEdpBAow7E4gIgWHnzx1Q%2ByCuYDWDAEg4Oo5TiMvBjLumfzv3zXqFyFI4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDM%2BMZLgsAQpJN8XnxircA%2FJsWjVZfgxHR2m19FXzb3dt0no1b9rIxzfXmyzqftYNGODnzdgd98rAqoxrlEI3xNRpCRjGlIYNaudeKPFQWbHuHzCTMweejxFoF9j7%2Bdk6pbh7IUrcsmBnwkqNC1WXD%2BD03YdU1oiV3c8oNBwVygjho38JJwRs73aZ8PdiwPNTg0NJryLR1OfGDCCiDb91daTl6HXUWi8d2xCj3A4lu%2FV3Ak%2Fk3nc5WvL%2BBDtnfrj9kuVx1qMJFSvJqzAp8cWtP47kJ%2FqWkaKC2Q95B51BkQ2MwI3ylBwG1njgzHfzBsoEqiwdrGJWXS1eK1asjtECRoMh0gyMsoA3BxzOZ9KY8eXIe2hVNLEFbqrEH8bEnqjOVExwr1fsZBa4ch1%2BKhaxArIo8iesImu2QnnTyCgepAjH7HUq3dHeSNJw49CYvdc1w0Wg%2F%2BztmTYNzwqW4LG55RDQ0%2BXPjljUQ9yEvQK2FIiaaQF9rHmBQcGJ%2BTNJ1H%2BBnYy8IOD9gwNyFmJPPeL24tbhVZsnQ5Zi7tFckizgMtD4dF9295MXPNrVOvICS0HDBUsnsTJpx9EJjFcpAhyiNXCfaiWlYdGGps13gPuHDFPJVUUFBIH7x20s%2FzvDOb2nCKXJPIadf1RNjxFVMOju%2B78GOqUB%2FMcBn4OXip9bvn3Ps9t%2BFegO%2FWOQiHd2RM9RIloETPAXRylfrYI%2FucIlJvN%2FuP4dzOE8%2FWYQ%2BmFh75snhmMrwSOpNmq2%2B695N5Po2wEqsWie6zCimJ2zFdeLzQ59bqmXn6jqbTlqgdgo%2B7bQkwFvYmIOQ4FyS2Zp8PdcG3PzwmHIER1EZNeiWMPrwMgkQn9iE1zi%2BSbDNAL%2Fi6xRIGc%2FicaM7oHs&X-Amz-Signature=a2f6ee7029a03b123be72bfd9504b0eb9b44c380415a967b55c25ab2dd0de9b0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
