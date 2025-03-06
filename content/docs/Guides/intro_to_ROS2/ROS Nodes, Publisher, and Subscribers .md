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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=ff3a950811ac34971df160ff502a4a060cb253de7b6d72e8eb6e790651d1f970&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=5df523df1b24512fa8190ffbc3012e27d6db0139e90b8eadd12b8ec3d628391b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=47b31dcd0117ece6e990d6dc5182bea59e134d66e6cbcbd04decbdbfec93558f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=4dd7262553d133930712369d9660a51b1cefb6f5d39c004aa9b1699dd1fc6ebd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=51545cb1e81a7bf5f36aedcff54fd2f4d806a82882e4e00064cc3952c2424282&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=44357bf0d7e629c262fbb4dd37eef29f6819cb0205c5529c2653ebe384d28fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=fc6df706c75fe6c1ef5802f2fba0f6c2829c663e403f0089c162fbf959618c08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GYJLUXU%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T061146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClyivHMWw9DKEy%2F5RFaztwSiMv%2FzYhTCBCUWOCqhShjAIhAKqiagEzoWBwQTtewaeeRpEknZma6Xk6b3Wz3FtNAB8iKv8DCCcQABoMNjM3NDIzMTgzODA1IgxF8ZqaV9H6V7%2Bhi4Iq3AMoD7UAc9QNJKiJ%2B2YgGJuWrptOSmIxGcFIyPFDk91RJlbMPeV4vlmIHR9XMnDhxwng9nj%2BkehHOzSkeIs4Cn0UmyOBtLe%2FD44rBL20AXhJtc%2BIX07LEUJwHTGo0AUcNGzOtFvnvGhp9BVs%2BU0T%2BhQZiLaf7j%2BFt4lG5hfITp19qH4xxBUputKHymAut6i%2By%2F73LtdrGH3xHT%2FUujLB56JQ95bXuknyr2BY4OnzMUXjl4G4xE7%2BEHEfJkyt7KSXLZPeQ6%2F5XY45gMUJu2LglMZAH1pd5Ao1cB4qoigVCjlpvCerRYV5BF25qtSJKw7s1yfJ291rEDLG7%2FvNa6V9X5GZj0hDNX%2Fl4SiPpsapnA%2FoZibfPmB1t9W4fSyrFJG24qNxSpkcJjZM%2BndglNB0Daj3hn%2BE4Av3m6lit1D7aYGOWW2%2F0Q0wf8TAJSGVEO19dd%2BD4lHZenEKFXU%2FCKBHjB76iCY9cXtWo%2BOzLqTVUihxlidiVysVbj6lC5CW8dAMVPijTcmDew%2B6X3gm0WN%2BfXNTZmrMmeavlraidNmnfinkyYlZYa6pLOVXTjFgQmCEcnwUXToC%2BQjFDx41jaX6%2FG7v1lkXS8xk6zQTlswXfEBKIE3M78QJ%2Fdm%2FR8BWmTDD96S%2BBjqkAWBZ5ELSV6CCc63fOIgwSTCDzSqVUNgb1SpFQcYm2mxi%2BJg7hURDaNFvL%2Fzw%2BuoXCIwaco%2BKGemYRhlrs9GtgST91hlNNh5DyZLqP%2BPMyyfEUOzvxRUb0hmOcx7DGahzJ58jomGL0HdxFor7sAnM9K4YbcvQ7aj%2B9oRFg4DAcjWEu7bTgHq%2FCqORmCpE7qh9TqW1h4oBgGu8JzcZma7craBMnC%2BQ&X-Amz-Signature=4110f2070516656c0d5982dd3b45a947e3ec62384d4c27695ead9d4707e620c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
