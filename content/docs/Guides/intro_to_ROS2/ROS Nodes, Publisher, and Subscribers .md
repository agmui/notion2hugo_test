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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=bfa35f669d7d4803c49ca6e6adfe89c4c4cb57c903087d44638ac8add7b47486&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=1958e08c50ba289ffa80b2018b8a26927c602454de3e8ebb0cbf2ffe75c115a2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=e755bfeaa412014f50ce6b7a4178234a53ad88628ab615854185593cfa7f3957&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=a2273a836c37e91c523e6930f6e5de21ef5e65526a058ecccd1d6dc6bcb5a4c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=627018cbc5a94b897082b405a0dd87b68d4487ec2491db3586648a4d98c3efe1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=890152b9dfc71378a3b57d12a43e6aed20bda73b56cb76de32765261fe93abb5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=2ca2b5aaa8622644ed18b327c084d34c2e6e6346a99417d395e90a45a79d434d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB2OIFQE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T181107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICDaf9Oc8QhiND62iNCpBM%2FCb4JVEABCGzOGssN%2BXpmhAiEA%2B7HRwMrYNd%2FmbX3MunioXvAS6Cxzd%2B4BYviYOae9Xicq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBH3U6zr7HXMLhhnyyrcA7jOKPqGnBEMnw88FKCB%2FogowvuNjWReqA%2BWS3NG6bj%2F9b2ZSekfICMGzgjzzG9dtN24SW%2BFVD5ByV6B4HWG%2F6gj49JaGAb97g3o571sIw8Wb17W5q6jxgMmf2JLhSVm9qVtQp5gMFj5yRuSE%2FxfkV42V%2FqQB09gsNGKoQ1b%2BZ4HzS0z%2BERHIUbZhlEIStdo4pokbFgX0gJtE8v%2F%2FWuCSTkY6nJEtUnS5o02baBE4IeH24M%2B4MJod%2BF6PQNpoDvIbekvh%2BXL1Aud%2F8c%2BBnwHXy9x3tR%2Fk1cleKuPpJer702BAYhpFkqrJtT%2BTENohsCpZablOprH4rTPCgG6OUZ3sfpu111m1%2F9XcPnHvRc%2FCqtjrNluPhXbyrg4B%2FBWIiKzugHjepC53oFXDNAZbwnDI9RAS5XjWGIPvCIR35HRqdFOXi4%2BZEVBfAzrwWratLhtAQAk5mb74RE2xa5%2Bmf2m%2BXxLXUNh66ZzzzMvuRJ2d%2BWBOvqZoBGOzp5q82i7IklxaWGIRe38e4CWSp%2FaekcORx6kuDkG%2B1j2xMJ9hFO3Y9AGTEHoln6XMY4vBgrK0B1%2Fuik0UDP9CUrRO8J6cRlK1c22eeNXoISGPGqgnnHAKhAum7TWpCyGqfsqcUbAMNyTisAGOqUBYTMyhNV3XrKFp4AGJXGuT3iCI4lxjPCwjjEpbxwgmgZNlDLuQzVhn5pgTzeQyBq38sPuInlqIIIql7IZwAYzQs8J1aq784owgzITem0hN%2B9XHI3Mxa1G6qch3eOKG%2BxyTZ1%2BB8snHkiJXB3gJnE8Ra2rzd9WHBFrE8LNWBTbELhGlUCsOK1D97NhwjewT5bpZPY0EKcS2SWGTeb0uHIHtAV%2BxCNp&X-Amz-Signature=f73210ab4be16620eac7b9c71073597fe81ef4ffa60c403ebb717957c3ef8f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
