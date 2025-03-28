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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=a3bac7fc30d2e9c2708e9edf07bc94433d857184ce24ad68284e739be385d657&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=cc68c2a73603f77ecf847f9061fc28b4262224353d433e5de0c414d287608a99&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=fff39524cb3d43596a8075a495765d837435925ebe7b6eccbf488040fa291b53&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=f9d48706b68e4a1eeeb10f838e952862ce498716aa852376a4f1b2c53b832fa2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=e1e199ca4fe3d2a3f40309a2f73afb2ffafbdbdfae7e7c997e296c115a144315&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=97e56df87725c06857622e377a8975f4065a2bf603613544058ddac142b1ce3b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=dd4fa4f200c2474aa144688a87e85b8666fe99422b20b083c7b0d2b4c0b54ae6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664LDI54BO%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE51NDwqp0vLuPeMOTX0A83XmYgyvWwAR0iq26D83BdIAiBGLw8NqrpXDgP92tILt2MJ7ZeiBn1KjmyOas55hTdC%2Fyr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIM6Pmqw%2Bg%2FvnS8EG6IKtwDQelXkbi64gBhkA8oCl3f6HCGGZLIrARQ2DQ5EbMYfx9ZImbR3gzFe9YsWitHVZoqZGZMSYyEqxqc%2BnME9RD5lp4JdxgeePnT4EhiWSyk9ZcoRVm8dsdoi1BTTKKvQL19yXp4YJSDZYyEI3YnTRgNstGwhLlFL1ksjEYxn9um4KQ0jFjornUrh%2BvLdLpz1%2FO5HzjfD%2BducBIIubRAmjTXsbBIxeeqIwI80mNDawSQheGRVq85PPtNHXByAnKTO06F%2FgeF8KwisAzFD1z%2BxtgPm0mNSrYWiCYNk90241bPhDt6ZvMNU00hbRhnOWmztfcAKugfv0BBlEZv%2BURWQYYm%2F2eVE2d7FriRUs6ssRXHiVWz%2BKdITrVwBvf0a421kMsW4vxKasJ5sr6i1xfN7RMAsqEfwKctTEXN2UoToNumEgqhYBnLtdNG2N%2BF8wMhVOft9b7WaXsAdD8R%2BV2be3YpSs7D%2BBJdsXaP6wRq60e2XUdcxEjjJDJiccGlwciFJ%2FJgpVl%2Fz1RFX0tCDBFq5XK0G4QFr%2BQm1QfrsmgzKwvmYiZG8hmLwGGzN5BkoEODlr4bz8gnB1xxlPN32M%2BxgyG2dV13aZQlWj7D%2BXNYy2dasgUEuv910%2BTff0hFGoAwt6WbvwY6pgEufojfpZGJ1N2P1rloTdStyX%2BuyuCHG6Gsci5sg0lS2xfDkxMccdFvet42WQI1VrSe0jpb3gjagcgFuq8GKQOrqANHBnc0IPpzpcAX1LmJ3GYXQZL3T%2Fa5H2uc3tQHG66xtnZTl3LAg6l2goaQOmuNqmNUi1C8fc6fB69OPxUBtxjglAwbVwYR1vi7tJtD1HURMk5lVb19ibltoxTJvOAKl4v4CKal&X-Amz-Signature=18052a8c406e4101be48c938b8bda49438e3e4d9d5ec041af75fb3af3f5ee64c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
