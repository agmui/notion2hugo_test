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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=d080af8fac10d8e30dd0d82ecaa9f36607702c89f96381d7c5e870c4fa0aa78c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=6b90d045ebb8413b3c85eed9b15b92679d107166a669842a9f0e5c28986d83d3&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=0aabf0f515f78b564fc70a95974c42db4222ae00a67f2ece142c77e6dea00e50&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=584fd142ee98d560048673fe535e58fe7b4d2b9b290e71391d9e75a813890546&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=ba006394d98cb7c7b4bb90c72f6b3df5e08a32fbc2b25dfd17ae8cf782d02cf1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=c6dbdf6d0d042cdb75a9a12c69c312e6bede88466d7e4fc9d14f37f614ec84c0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=c3534f14451b6491c9ec9d2d1c54fb2100fa5e84243add690426519f9900624d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWPCMARZ%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIE2O3u492rHNZ8qkOZI3U%2FxwTZEpjXic0d3njX5%2F2cz9AiEAjNhbsQCWFdh1xYa5bqSoDEF9Ie1Mj4SOHuJNdO6niwwqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEq%2BeycLujprfUufRircA2Y0EKI4RoXgcwFzi6duzhlbhfJyPZKJtkagV%2B3gIcy8JtLUeC8jxJAaTv3Re%2Fs6a5pXiPvrGjmxF4sSqdjsWMPJ9YSg7RgrJBu9kwsb2zHIJVlNVRWC0rfdDZ5zq8GUfrUhoRA%2BFkcL5KwVLf7OocfQEs%2Bt4N7zeaX5qlH1YIJBNzPBUZLsDfjuuFwGD%2FJPbF7OtHGcW4nhi3KEyRxvsy%2Fj2%2BfEQ4eDWD5RLJi40u53rjU7lb9fAZaGMFwbOzpyGqxcdzuZ96f7oRc17VpcXvjG%2B2x9ATkpKRliINHAzXAETAjbVujhnVyGEtEqf5h%2F2EUbI79udZqZOqhIRk%2FrhUqXdCeJV7LIfT3YuZP5urOXXFCa6B%2BCUJZw%2FJEW1VpDEmDTY3axRmoClP9t6hM7n3GOWHivIf9zBGk%2FuOnY2PQq6CzCmXLxHnzGKrYwhNwWZwSp5SqQKRDWUx%2F7f3BBMa1T5AiMqsYoV%2F7dHP0rAPth9zs862nUhuUEaRc4kObw3bPhtiDoBbZ%2FGmsODrAzVXBbNWOPMsvYBRlfVJEQNHWR1%2FZXP7UjJmMog45Zt64OkNp%2BTS8kLHC38diXLOk%2BA4sI4r6XGKqXB2p1XXmIktLSE6XY7A84PAzdsy4nMMnegMEGOqUBQHkZxivWLx5iQUPK622WG3H5euEE3Or0OGB%2FjZlUlGbZNhO%2FbxS%2B%2BsuMx8D73cCPgyqIJnIC2FGbdcsib1rl%2FjRVcIb5hfjIZkccL22ZbMtZecw%2BTzfj95kgx7m8N%2FdNcrQYUNt8FQX%2BJmd3%2Fh9VAS5io8rv9Og0YR%2Boqcwi80dv9Lx5uxP60QioFR2v9jLexveJX6T77z8aMQWhuvJU8wZLp4sr&X-Amz-Signature=094d5118eddac7148fd39c2c0a513fa675ad2d0eb29bdc315a2774e21d10411c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
