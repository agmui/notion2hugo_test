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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=c5567306dbfd1b2cfc8107881d2c5e317059cd2e4cd6e1fbe24b7fcad65f5f0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=903158b6de552bec5656a1b824f9dd345f20b07305b6c119f8e04c7a558eb456&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=414286e86442a58c9298a2ea8ee158ceca974b535bf8b9f75f61b753f01f5658&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=fb813b5995283e44f8727b4bcceed30f264078f4c0bf69b755610a1a5cea182c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181034Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=f026afc4e4f45b086acbe6f7dd7567d2071738031609878781b3df343227c2f3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=1c78ba3e90bde3638c2dfedaba61622cd637506677b53b81d4fc7e7e50e0dec4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=0997cb41933845096038bf565ec509a887af7f40dac7c2cd637b6c97e9e5adae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NU3IB2G%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T181033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6wi78FZV15GK5W57RY1byxoADK%2FH7jBglJjYynqUsJAIgXTuOi%2BZBbjVTFjJutK2yvLMdm1Zm89uS7THzoGDqXBIq%2FwMIGxAAGgw2Mzc0MjMxODM4MDUiDJrcVHqNbXygGfhDaircA5OAIZ8aErpPfxTHGkBOOhPyNQxR4uGbgcI441mu9WFMf4FK1s4DYWqBxmr01lsHrCOUr%2FWkiui2uEv7XPgLt%2Bsc9IgqtsXZGO7oLUFngPLn86HUDzZg0q6McvdY8KTanxgetv4XNEauCQqMGmxdnFvtHFMsFQI9mzGMqAh1RVIWIrzpziBbBTkHjPksc3XjB%2Fmnbv8iI9ZS9biPe6xKFjggxV6w7GaTyHeY9tj2exbhkGqa8xZhFG%2BX8Eb27mbtxpK7c4xvHRRgyjsd7eYWUThRqhPD0sru55QRhKE7LWFVKur4nr6urBgVc7myHpAheYAZLwKFZ5%2FZJW1uvU5v5OhnhrcE5ZPKKPzGNeh2NI235NNYL1AhsUbccAe3cZcl09QUD9mEtHEpO98qkAkhfRk1c0aEdyn29cZNJHShGsysPHKV6GJzTsUlBehCLPl%2FN4gWiHArAqcaV%2Fbnor04KQF3Zqgep9pZv%2FTuPb4TSvTMFt3H4vtMmN9PrrVPXQmniqORuDATPQxJExeFgN8p1Xc8zcSdTcgrhWbcFEjD1%2BGr%2FRYXOR3QcQTU8SI9Dh62JlrkQLw4TLYQGOqY2VOOEFvFivEgFUBywKxh21okX%2B0Dc8qAYggs%2FhSjX7s9MKXguL0GOqUB%2BFp%2BaNApvFfQyw95Gguwhi10WfdEvlaHMXeNU6RG1XmZVgtmJT4OwnlcWyl%2FxUF%2FtHU1azOr3dpiQqiQzr50N4rnCksPDH%2BAqeb3cXbYWHf4YrZjruR2YNctcWBJ%2Fdlq7SUrJBv6w9jw%2F4O6Cawam83fwxDNmpzUoob82mDoEaqqnA2Jgt6snyhNWGKHRqko0eecVbccBOQdtK1V90EbCNmUFC3l&X-Amz-Signature=5a6279d1e9a7984dc2ce0d9ec9b07a1ec48de058c03d4f0e3ad17f310ab6a8e4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
