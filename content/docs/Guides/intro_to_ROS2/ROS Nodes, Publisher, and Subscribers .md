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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=353f378cdf0383862da0c2c96d83c9d75e85dea3abcf66e6c27823e39a77a448&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=2e813b6fb116c54fdcaf2c692466234b64f759798f780444e70af2cd0bb2aa75&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=0adab20bef128393ef45f631191aad8d0452bc9885ad5ddc2bf4dc95a18cef3d&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=185b7fa8754782ab5da24dbd4c7443aa8c5d68a2163ce2dca286b59504eb08c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=ce6699f1983244631d6a8cf01427d0f6c7121c98692b57cebc0ab6138a2c95b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=c549fbe582faabe507f47cc123b644ac863349b083a0f7a23aef75490c481fbd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=6240aaa5ec4ce75f91b5141c69bdc6d8698bc5ed9b24e9428389c80c92b8c4c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGQDIFH3%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T210834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICFH%2FKjOKhZilJ0eZjUhXiN68VrwnCc5AaztqVKFjtH2AiEAm5sGlYWtYYFFyCm%2F4uo6AWvZNmy3jN1Xo5lCNn9iPxQqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9lbuxzo2bBuN28%2FircA3qnO380HOcR5y4nWEx8bvsAMEzLnLrzajGolp7PwpQNodgMmlGfqzWbEnoqsjx%2FMs0V52uwQ3vC04nQ2gwPQJ8eYIAv0xqnRUklxOa2Pi0xlr3TYuY6v0vFxmpQSwYSaPd7djFXWqEMFxS%2BZKFbc6cMYLrlBUXuDUjrg4FekSF5CjBO1UXjWZfdISQ2zGfAgTNOVwO6DIxzVIpYeMTQXWZPUs2ESszXFr5BvwU3QWcKNL6J6Dnfjp5V%2ByGhynD9nVSdRBddHKJiuNnpq0z4rM%2B1aB9OFkHxjIFQFxq6wHLZpOvYynUMdReejj%2FBvo8tJpT3ODqy0ftKErStW5twcEHqsQz8v1mYdnLOeJd1cJncIf4elVAhYlEOeUjsUX7h5ANPCWwgtPmoVd8hEBJLaX%2FT80NirjzadXjJ4nqZxW1d%2FqIO%2B2U5rw3n0xwd%2Bj839qpDZSrPMeEa8Q1Y7ZUiVIrIahpufXJ%2Fx2rDKf4Fw0hT46dNzdgp4j39pFrq6RTnOBFXFsV%2BtcaW78yMwShZjfL8wQhfrP4BSI7yPZFx7IR0aJ8eZCI5XakuIjKQU2jbsFE5UDNwkWS2sTAa8NZKS2CSQQISwXxzjM14xRzK9%2BT3pku4LhdNFWplvTg8MJGT%2BMEGOqUBW0VE9amiRFehx%2FMmxDWQGKVfLidI1OiZW5ucWwN11bmZiE81SjTcMUnJQ%2FqefSHmTVhu9GhFB8KB4d8BiIqA2iHcNmvdGA5nFb%2BvlkdDV3k3n36Uih%2BJTMAzEL5hI3njOEvY1%2B2I7njUV7355PXtZi4aBxpQ%2FK9kCRG%2FT%2FVt7i5XtEXN2mh4efU7rurjssea9U1EDzJX%2F0g9FioDGcbTnC55fHuY&X-Amz-Signature=bffa9ae25902f08698190b76824a014581ae1ec65ebb6099dcaa27cafdd8fa1c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
