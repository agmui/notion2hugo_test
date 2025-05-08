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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=e1b34a7a2356eef3fa781ed197bddcf8a34106233e65f5788b65487c27b4af31&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=952cf804e432ccd93ad87a5c46e4d46c2dc014a453dd2e48c4d3fa42867e9403&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=b7caf3dabad053539031b33868aab788cdda6915793aa5b8fa75a4c8a480c88b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=89ebaea34fff98d6882747c84750ec1df07aa20c838f7c3977081407829b3a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=875d6e9a4a17810eeb30a51ce097e29923f66a723f766e9e1ca7712a86b7530f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=7042fa7d68c48ff9e17c1d22aa965966884a94911e2e46558256cbb0dba7f899&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=d20cbf258c3a4837c40ab33edc71a32235d0dda8727991e1b9e0b0368911767c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBCKULNJ%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T190711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEmhkBz6h9%2FXQCgI9w0FNexPd5cL%2FwC2PQY%2BhHB%2FrMiCAiEArAMJNOu77ZRd1kzH4vKvGU2o%2B2%2BRsr9UU99sdJPklV0q%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDKdI5mErfawk0RY12SrcA9Gpnh51Ldensldfq5Xea6w6VGsPxvhjCEpradkN5YeAkswjwAVwsxY7AIRMSwYXtQc4e468%2Bm%2Bw2T%2BhYViBcrtp6%2FbaVtyIx43zxwmP2Hr0a69sTT%2FXqL99HgEvYHqVtRNi%2B%2FmXyotY%2BkoHdO2je2q7lTty5JQ8AYLWte5bSnwrL0zOp%2FD8jzCyChDfTO8uqefv0YPpCr2Y25eIBtMcWg6N5AtAzL%2FgNgZrzUKktRTvAGkxpc8PDHY13i4qzRPa8aryFwWRX75q1vcTZA9yfNMZZuRFt3%2BqrUqsCmWUdkmsKnDcsbDqIE%2BKMAkIcMszycf9a48kJRXpmopsOwr7iA89a3nSshPVjDx%2FZMiElnrY5ZjkvNHWWu%2BrgBD2Rqm3iXiW1tTt%2Bt53Jw3k8qIXPIZooCBE5LD6hUt4Na24Gts4wfqI2nvc4vYhqmYGVyc%2FJipSa4RFureWHbuAkbFA8uEUQUzl5D3YEp4uD0L0LWlHK7iYJiiZzE0hxD3MYtTwQc4xRx4kEkxMPDg9qA%2BsjJ3kzMLefIaWaq4WGKisvVMt8WbumkG6msoM%2FsNrhufqYZlVyCdbOS9bhdRs2rW8NzRKD3OSDR%2BvdRhckP37e7X6wumuavTYdW4LG8KSMLX%2F88AGOqUBqZkkmZSuH33HkFQ3FfWMZP8hr9YLG4af4NiPGSAawC6kqcgZY4dFzFbSGEp01yGAsJcMhLTQEWv46GHIK%2FyFmgeFr%2B4Zy5JvaG3LN%2FL%2FFUj6M1r%2FPUr%2FdcfWoL5%2BZDS8If2QkUMLZKjtR%2BZOQcXDZlza3LOid9RUOJVNn5P3qXyrq3H%2BkEJmqfwd%2FhuP%2B0atsjuaigGTD8GalJ3Dn0BeLWcR6Y7Q&X-Amz-Signature=5cdb2a8b0a440e3629489999651db01179bad0ad863aa75e131a8ea0d90ac67f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
