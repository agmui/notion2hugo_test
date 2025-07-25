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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=05aee9f4c27743e35f4b3b2c840b7c5a54a57ed91a30086c1d27e18914fe161a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=1c1fda60a8b5a0b0b3216ef08c8b984ea8f1e6ad92182e5881fb2ce6d6b7f06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=cbed26463048a0878d35d326b102603de83b1be55c19e689ba762f2746c59cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=5a74976fdf3781804f0ce8c831b6d664091cccd9bd9ebe850deeedf27630bbf2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=4afa90f14206287015a0ed2835f27bbe7413277b4deab82fef6865b4799c4d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=d86a4b2c44e01d0c8f9e5c1eea61c0781295c6afe67a104f90acb10a8567ca39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=737991d79c1f24d9876e86879d77c765a5a935eaaa33a5cbc5adf584c9ae324a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMKM5XFP%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCZJV1lJ48Pk63ugczPnET5OgaDui2KWZ9ewJ7bJYbidQIhAIQy5GHZFWH745JVT8dsaWdn2A2eJkB0ABHacUpAqkh7Kv8DCEYQABoMNjM3NDIzMTgzODA1IgwVphKxmrtolVIEJmUq3AMgrEZI%2Fe%2FRN7QGKwhmNH8%2F4Jthc7DvGmNRq6O8HhpRZUHVV2cHsJtW14mNS7bWVqFx2MT8VmfCNKjsthUsqQ68H2NHdJsDP3wtUqC5DySBNzk8XhALqSdX6lWUOsFGhsbo0YDP20DrCtj5Rz2DNo%2FugBfgz8aXbL20Z6CTO8U%2BuNoXOAHvuxlhNB99BT%2BMYOYh5OQPr%2Fr%2B7q0Ak7uiHrdSfw%2FrJSN08AXoIgIx4DDEuZB3ye%2F4I47IivDxeoagU%2FddtBmlNx85ZoshAdgDsWwasE9lYnpKqQAuQnRSoCsxfQ%2BJ4Fd%2Ff4cME%2B%2BavkkTymPaTuQ9wWe%2Fybv3q9eKtURDnGcQoNp88f4WUApwIQoirOXY3bi9WckyeICShzNNN%2FKM2V7C6FIOZ3HHXDyDfPV%2FSUUILrYNbDPhyIolB5RzY5NzrnT3w3pcnqOSiEMaOLgvH0EM%2BJ%2BkNePoM7%2BPXznLj1kpopvUQziVpixpqaBy9Q%2BQHVFKrWEgkyjQGLOKgI2%2FgEu6iUNqbTrZXr1HTTDGG2ZgqpE0UXk4jXWrN17yihDIRLRQ0jjvg2R27%2FV1Nz8wztqEWJJegzYNZ8bxP%2ByGqzGoiAl1SDa9ZEGeohhh%2Frj98XDMMZabVAZZWDDyho7EBjqkAcRo6cwPR%2FlFU9dnH8vVr4XObSUePPQ3Jyp3f4xLROrTmQBprF6hwDT7NuTtbyWQbjiugy6xOnfmBcsWqX%2BtWL297jaHuTFfRphOo932%2FiWFXL45MdTxCnhSLwyQxdzUSax%2FeulN6AuK2hwH77LVbJgL32X38MeNUxrXkTsoGeDTZ3OpVTPJhJHl46ZhFtWCyq7s%2F8XJjt%2BXsmRE9BGAbF7sHxmW&X-Amz-Signature=902c4ba3beb763b4af7b963349be2d30715fffe667dbb68a4d5fbbe1af4ccf68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
