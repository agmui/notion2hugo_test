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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=35c5239acd5654510f8669b0d74aa6ae00069c16224df8afda3f28162d471ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=acc6befcaeb6ffe32ef005d76810438913bbae37bb17aedfe5e1be0b13a173ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=78a8ff3627437f1259cd6f485792806ee0c3f66c9ce12b5e7a4c3a64269f6d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=b5853e18900759ed180975f340385397f708a2e7cfbdf2ecf2fe98d823809240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=d0bbf46c9d0fc87a397719068d56a503dbf587fa765892ca51b08698e0b0688e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=e35e3f78b1c39cb7c91d1041d567d16d6371bc16299ab3a09aed8cfabc663887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=ea9933631e09b8f1603a470a90800a51a00bf3f7e1ff87314316e0635e343891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5FGWT3O%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDjE2lZvqEI4ks3ZRZmpARwrjE11vF0mNIerxaT%2FbCtMgIgKnrkRcyoKHzKtP236ahcW2vQMp6PolAcJWOPtURXBwAq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDDgyMcvMq29aS%2FeMOircA%2B4nlrC0J9V1YyllRY7jHG07IsQKcikQgX%2FYyvBvE%2Bu08nzsTXDGJm2dVkqWJiMoyFGC0M%2BPC6WXk%2Bxm%2BixkK4Fcs0ZVqkzfOHP2ZAMnIgBTdSQmtqCaXc0Y%2FfaQo4fEHqGl0cXhEs23k%2BLAnKt2XeQnHQ%2Bt4OPjdKxJz2QpvEmeih56J4Wh9LwxKbiRdigzMUKAWqSejb9b7HDGjWuauByiBeHfhiPVliYPO0SQG7WCwak5CWqwZCUmmSfISuprzH5cKPgc2VXt0EHYXZ6AQeLIhEnAQ9E7Ti5JumjZu64qetak4I6KeHVNkGGEOJ%2BHfmwcmlQXdToLd33bY2rOR986IzZgDvNd3FjAv6N2jDlRc1aDiaZS85AF5MelQ12yokOqQnzljoF1a1d15bG79jrmeBGnJeEbNW40wOyNrKyNwsV3odnDaaAGREzrrduZc6mslzp0ad8vXjs3gv5vbKHLPuJLMMbWUEBBNHT5vjy2ZlEa5W9CkuIW1mcNeP2eEsoy9ORlFB7nNOQZnNVk0dV2HabWChxZ9So4pm2y9DZS9ExyJZHty0s1b6EgPWUpdKAz7EhSVrG2HOHVv%2FAZZ6YO6WtHbeo9wFFALdelL62vUmQNFVVkDVr0mM1RMP726MIGOqUBP7rDwRSxBgyc6bQAXW91KIgjW8OEXLA6X8E7NYQN%2B%2FZ%2B2u1thrtWTx43R8bdXoFW9KQAoZbdkHuSRgYH%2BxHVHjbFlN7rIvKObaYZCkNDFOes2r3MgNoDHg8vihXWfALnJeKdcYZ8%2BQ5auT1eU7ne5y3mS1zCNvfVWup%2BQwrcXb2vZY%2FvGSKWCwN2el%2FW3T0f%2FTbyFPHn9MeTEPqNsH6A%2FrtOYhTl&X-Amz-Signature=597097252fb5aba4d6cc1ff274afb0bec148153d627b1fac3cea5430fc8b19c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
