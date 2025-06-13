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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=02fd49307919e40977357eb9634ecf0063d1a74e01cd03a73aecac31069c0389&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=bb142c6753c80f00f89b20ecfb7d9ed4b20439affaea7c3f464355f43e61a2ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=bec3f75eb8535454367c675ded95f3323b05de3da524d9a9de14a0e41a739a51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=128290aad117e7c10fb3b3640fe74431769bd1148d3e6451569301b4bf49cb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=07a4c68935bf05a439bd57508f43aa27efe21fb0f41ab394acca3b238681bcca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=157a3e2712966606aa07c16f7c6c51e036d514b82d98b7d3e76f11c9970d9fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=68ba5d5588e21f8bb925ed90c423537c3a8b3a1c501d140f3e75be74893f8c33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMPDSMZ6%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIQD8PQ36STacYYzrBbsOZG2naSL5KmKiBaBpmjzmTYVtBQIgafbzH88YG1x6B9t8ZE7Y%2FzE%2FkC2erSbAqhaEq5ozD50q%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDN%2BII7eKnSboKAdtJircA721hDJGdf9Kgs2RtZnoCRhRxanz9AM7DpyZhnogStfGqHJbCfpGWIFrqbnX1hufuCM1x7on9dAO6A7kJiXpA13Bwzjw2YsA%2FuThvt1maZCO4Awk7NgHNGl5TvNvguKChp4%2F4gLWTrSRCBa07kp60Eg5aD4ME9TWcwsZbOmD8fag%2BAmhav0sZgxzdTbko45%2Boe2GzL7voE5VoXoG4KPkWo88fjAT9VQjrY1cSuD8lqNoTAqlfM0tPba8CtoG3bzt1cHEmrkvicoti9MUf2JB4oaRk21zEQ5AjE6mTiz0BvOh6vkZpmi3wUOkJ8rdOA7xH4jSlKL0HNNQg405Wn3eUMCc88BGapMj%2B7w3wLV8w8AZSteO4xozC75dDRXSS6%2FutPDjj53dnoXdmVXXJdrbn5fnFhF8X7h83FzF4lYzBcbe7jsZ9axscRPFtp%2FaB%2BHW7WDPXt4YJGn1cpgyg8bnfQaM5JCvNLnwdY%2FAeH5NrkJtG2TWvgVoWcdrlIkjkw569YxiecSUEvmeJdlWwALyN%2FwkHcmpeGAG%2FzDaLSnjwSRbLms3XWPW1vT5LtiGzlpztLapvi5fE5jPqfGAuw8zrG2BURBZuqaB8LuwH70lt7QENq%2BGFJdZr7rJtEjkMKLSscIGOqUBVSXdSq%2FsGkQYDa8MOV98iSV%2F2wEEJAoUx3skg5LYhsObinuPT3rKorW9zLhXhBU8ajoBDEi0YIaGtt4m6EZ82xof2unKnf6kkV86FtEALnDNdheDaJswJ0ys5i3YgujEjheU%2Bhy6iJNU%2BwYNyfHmEKSN5CvxYrnAOva8YUug3nB83fRDaCCFFdJ6L8M2HHf1NpIrsWyyi6Q0vlZrwtP62jvelnFN&X-Amz-Signature=b776f4a2f3bdb7c04b12d784e0e507350d64b0ebc59bdd7eeae7b5acd396eb16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
