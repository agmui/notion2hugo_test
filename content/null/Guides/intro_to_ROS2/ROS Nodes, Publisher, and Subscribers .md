---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-01-28T20:43:00.000Z"
  propFilepath: "null/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=ed58f55693bddf87439bd2b769b20215dce33f5a18c040d10da34c6469e0316b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=3149c64593019c1aa308d10a672487f11ee301566f0c50c9ddae181019936114&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=fabe7ad890f2fd52a5530beaf1170f198636ac7ce86b9a53e1545bf70f9bba58&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=8eb259471ea4e2c026d45d9b407233cb0ee73ceae82ee9caddfb10b713f2a708&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=4b90b7ab29ce1425a9186ed510908dc91fc5918f3f60d4de21a9ef3a3fa1d654&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=911a1ac6a450423fff2b79f95c533125ff509f541620c33a8eced904929c968d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=4dbb6386dffb0dd0a608fee4b78793cc0e1d897c78f72fcdb714ff8754a33b30&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZQYCHLQ%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJIMEYCIQCi%2BdJeuSVjcy3JeJuWBFqj9bQ0rWK4RrgCA7LC%2FUXwgQIhAO1Rmu5%2B%2F3y3xGdCnQXHpp6O%2F%2F7siDjFyA8Fo9iMaF9VKv8DCDkQABoMNjM3NDIzMTgzODA1Igwrt8QUm%2B4NdOFvQrsq3AODZfJJLnvr6IgU5SMuCe2rhazWw0sah1OF5tpoxDAFvBghCW%2FwA4nKj%2FhFM2syEM6YweMgNLTiVyvkVviPSXV7NTPX1qw2FAS41PgTrJ0LqKe%2FdQ4v4NHyK3fJWeD0ui1a3olTD1eGCBoNKErsn1t0EiOok6OA1PKrDz%2B9yGsfOwkdu6W3oQxe5UrW7WE5VZzzrr2Bb0tAE4R1rREnxRBu0AClfwBnRxSQKDVrE9CWW2TZEM2nx3lCWxmrZXT58jWI8ylv0Ml0GgyjJLZl2Wttc8v8wp6fTVr1bxQDcPYXwd886izXQRE%2B2D5YeiwasHWy5wxGK2j7V83g9xyhOiRtIIzUviuTQRvpK1P5gf0CEpaN1ZQrLnYYVaxpJW6lkGoQD635EWhfwEtXbSPytBuoEXcNcOaqlu%2BTSdMDmcyifZnWLY8fVy51CHa0DZy4FS9v2D1l5sGZiOna3m2aKWMF88RhQHkBFIc108vWU%2Fzv3canSvrvrC3iuHZWjygSKjUgT2Rt1dHkW2x9oicutvZAxk6vnf0u6nP0IY74iU5X4b1TwGDwrtiOsuw%2Bfe4pef6CynJ91%2BreZmwjSMex0Z06RQsX1C4B6%2FVUJOVZ1JssWQV0vG%2Fb%2F%2FaO3X8n1jDVz4q9BjqkAT1kHEKuFws2gUeIHvjWElUtpmmQFEogAtM0%2FCNpAeOicsanJ3wKS4ye8wBEUUU8g%2BAWNiZyFMrHvSzhklkV292I5DPo8I%2F3o5YiS3vvIBW4OBrzCBT%2BLJcZ9QI%2FaB2z1%2B0WonsS%2FlBBIAh6B00GI2kvQ5ZmRuRTV7wTzM09hB0Menaqzx4Ox%2BFHpdn508TXk5%2F65EsOgmzqwlWAprogZlc95Udy&X-Amz-Signature=c53d34c982e548527cb339c353d8d64aa20f91d0f976031df26b472fb2a3246b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
