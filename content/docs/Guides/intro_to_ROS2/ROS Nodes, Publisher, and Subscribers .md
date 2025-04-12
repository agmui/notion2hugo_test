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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=dc25ce31accd0ebfa1ba1f08d9b8fc233f086311f8ef0ab978e0cc6489cc210c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=4879e73d493610695835ce6835596b0a70a74105671f6aa80506be37311a9973&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=7eabbdc6fed889a31831a9bd4df104987866367caad6aa46d7784aa589976c22&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=c756e56023a841b1d19f5f3630b06b04539a4e289fa82c368c2496d5462200e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=804e3e402ed4634365fae843d0ffd228780aebbe7b590c0fda846cdb41ae3c41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=153bef8337a49c70e5675df0bff23f663807f87812afee38b809a692cfec207c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=be460d8395a994bba671b93f053195ac941ea035b2afbbce4ad5e36dcc326ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U4QODPL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAnrSXMm5Q9WhlmkkbnSMvix4dv2aM7VAmQiaY37Nz4ZAiBfwUuGw8yp5mi3lXJBWBCV9vGXHMz%2B1zEE4O5V3xRo8SqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMM%2BI9lOVGTfGyIROBKtwDb54fM2wNPYWCVKVt%2BO7uXcPgLt3Jt26Ukw%2FtOlmKDM%2BFWuG4pi6ZPVEPqBv%2BssG%2FzNGgZ0vchBrshandbchnp%2FfD8KSIGg5MRZsa1g6vydtBeKg0jOAJvyGXW5W5beDrb%2BhjP6P9MIGdVMDNMkM6TK2NEmVVDBXKda5VEmYjkE2JsUYFtcApfliNCBuV2Kq5kUJ5EHS4Q72MjXj%2BSFvJ%2F0Fv%2FTX0mPo3haBCximvOALv6iEUENbC7SivbQOZ6dLjzOjgkDNfTbVL4a5Y25kEpx7qT8%2FRbowhuY9mr10UzpL2aBWLOEKtRFMuvQqUOsF6QGstYVurooymthPkU1GmX5XfwgVLaqUrJkqEzvAgOJQVFJYSE9Osdl9yZENMbDsIot67%2BY2IBy%2BiljanlQgT33n4pKSaYCRQKTmylVUOe9qkPivB%2B5eE04X2xD8iPAlku6dFGOPR%2BqmjXLK%2BPwhYa70zQ1jHh5TolBdJgynMkNcBy%2Fjyyl3T961Ts3CqIueFhQ7sXETFtOKDBmL5ZdlEoWgjGrml5FaMuJOCjGUYjc86nD9zBgJbudScvOiAhglJBD5woLvjaCplCMDwloT6F2OKTdL7me0iRxwEk1Abn4O5bq2uIQjYldlwCucwg6fovwY6pgHPq%2BVFhTGuF5Ym1C9vS8ECFgo2Vnxy65JxYzoL4RTGif57m2bu9kSebYNWfa3Bw3DSPki6P7XrH%2FYeXFAX4FScj9wA0tw1tzfQKeAOoATaY9iS%2FwuPdy5CHE6KjwYCT9I3Zru%2FgR6lb5pRyc%2FTcLAF50Eb2jWf1X%2F9sUGwXVM9vLeINmg%2BrqmLzEpTSAGvL5E7prTCdZQGPQ%2BVc6pZcZHf02hBN8jy&X-Amz-Signature=461e0ac2c59c5c48e455e9f7b087c85adf58734ed39fb8cddd25509a86e8af0e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
