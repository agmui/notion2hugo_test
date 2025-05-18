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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=82678c388103f5f08b9edb147dea51b776d0b7813c9ee3b46402a41b05efdcb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=53c33aeaed1383db196082b201833013dc35e7f4f0ae6a03d23389a5809d8aa9&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=d608535816b6a495fe6b3ab45213c705547ee44868ed6b9583f7283217ba6a06&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=ddc6cf6095417069e00e518d88555fe982b203e6e83a89055ce2559af3389f14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=1ec3ca96b45d71ee730c34045f3a31bb2ef3056d7cfb6883866f372cd7c5e065&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=fa435b96815e487920fd764201a810598903253d6ccd531120043276ddc3ad39&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=cd125f74e19da2b16d1384a3ea1a857a85de219c7664c40caf7377010d0f836e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVICLFOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDqFM1vsmJn%2BSznxzL7WH6nF6BUyFjabwi%2F6LQ3MEFUkAiEAs1RXsBGx6Sp4H8a74DcPwT4QcWYNCNp2pLo1H4HsYJsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDBt12XKpfaI5bB8gEircA2gCR2UMjE7JlMVjYwb1UNDbqNsKY0OuEyIIil3UIN%2FLKTMMgJLL9t9IVHTIZPFtNIxwsfsz9dyOs8POG3XkbEaq7ii0hi%2BCC%2BUchJ1%2BASu1V930pzguitcPsZCO4UePNrG7nLyElc%2F1BLznIWvRIZxFILxdNUXHk7Gvil9Dwx8M9jCt8IdeWDQ%2F8ZdxpE84s9Ak1QG%2Fyco6U8UmwBbFF8oHO%2F8XIxOmtB1a0406oFoGjuBEW1QzPzWvqxJmFYqNFJseCoIheqFwMEFO5%2FE5CJkoW21oOi1ItnGCcaodR2YbaNmfVLiBoM7EsOtYCi9XVhQ5aoo8dgYU1uw4FkMjv16aJqWhOOvVd1Xeh9TjTtbrD1mTQ9E8fXYAZsUD8R2Cl%2F1s4bW0%2BXBplSMpxYR2cZ1TUbwYBEhQW80trUAMWu9gXsqPBM9i%2Fms8ZH%2FH4wsdotS1UhWwgP0vIkOiaxOTf%2B%2FYCJBV0gJrAtbM1KUv257h6dozP47DRT%2FX3lH8UZDzxCyJtoalSjpADSwBuckcbvse8oDbxZNogoGGsQfMyKEHTLcBohjEHynWL2aCf6OBiZ4oLfyYGnAjf2g68x4OuKJV9%2B7hksexnDh3mSzFbEQbXT7knAK5haZkBNslMOPXpMEGOqUB2sC52s2dTZoDW%2BLnjG%2BF2ktQiVkLtchVolzCKtuCB2BFlXFZcTMf%2FKCzyMP2hsdKJkotnycp4PwMg5unF5sUSZYJB3x2HcTFBYbsU5uXXNgirrElD0frwX5EV%2BTkrsA8mJoQlfojQMR%2BP4rygFTubtG2XBEEHqxOeCuGcGvATUX9vD07H1W2cMTe35C67kqhbpF1LsK2MVpdGYEu3HCQcGMitJB8&X-Amz-Signature=50fd51e19b2c6625a2163fa18ea277ce9e0d2d8cf84b0d90fb937b029351e5e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
