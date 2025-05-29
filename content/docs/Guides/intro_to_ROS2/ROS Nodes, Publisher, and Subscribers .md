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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=ddae4236e84e20c85d26ab0f08f01f4ec6ab7476d150688192f5686bb79b3330&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=fe8115d6630bd8d6d7bb7b60af4084ca96a44b72c41e5fbb2e85f8aa667cdce5&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=d93b3ea526c6551b4f0d5dcd7caf384d02bc3f3fc03297c0a489b605150f9ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=a69ef62ca0aab9fcce6d7e0c457f657c046c1089b389f90068bb2a3c416ef79c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=d6539b9d0eee1a0147cca1368dde900acd5367dc8adce6be3bc78b89a9c11776&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=7d0a679cdc11567cf9c584e0687a3dea453c08d515be8be3cbf89ad455b0485a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=e9138858f37a89c782616f4ef69c7c3b26e4d9ae99d5c95b32f5b330dd8e23bc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2ARVB35%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T041436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYFmA2bnxR5KlpiFfr1fk5LJeDXPDn8%2BRoPQ9k8HkW8AiA94GJg61j4ecGM80tQvces2ScSuE6mAhsinJA3c3IMfyqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMue0q7Mf9PPDmxao5KtwDGAkN20dKgZQod7Umw4jSBJvKnPHjbrzqe3l9pts2lOcwK3Lu4vAtQR2Gk7fc6NpUadS1DJejuyoGLqomNxGvhK5Af3v5RGHDs6vVQKlolW6C%2BiBel%2BqbUl%2BG%2FO%2Bn9olhbL7G3zDTWcduTBjdwvMW%2Fad5phXReh6Mn%2FzBAiKpaUJk%2Bf%2BULmJ7D4TenAZ1jJD4udM2X7cbMusyJiEzA48YLgm09WVq%2FtzySLK0Aozda%2FAzNuwc%2Fk9YCoHxevKEZJubiam399aoSExSuWitXzGRh7qnVJwYOx7oJJCyn7WyohTaa%2FKqAYwNmTNj7c0w7w8K1pOnrI%2BKkphsEMELiN5pOe%2BiQz1hrVlyyCw1%2FIaFQ3ItR6vIQ7Lha87t7SDbFocEeLUzKeusMtJrkvYbFaeiFOUmyd4O85J4Kl7F6YfGMOS96NE%2B%2BVhi%2By8viltuxfH%2BcHeF63ZOWTmvhubEws8Ri9bhKKG%2B%2FrWnwW56b8bIbgTZULXf49e2J0u9EDlU%2BbJZMeTQXN7KDrCTnDqjzI5R%2B7t7XGf8wmwBk%2F5trVRbU5TxKf9WDr3mj9uJZnR7Aev4vZ1lkZbkOuZMIlMEiABapWARQhKlPrk0IHrGYrQIISRfxavB2Htn8%2BVbJX8wgLDfwQY6pgF4tVroGe8aMUd3D6cijwtYOafzvXgmzFG%2F1xWjbs33wJmsjGBLPRA4Y1HjvF5RL5Fp47CcZ6f3U7uJU82Osxn9HcXUX4y91D2Szv5rr2CqaJgceihW0PFs7UckOxE7rb0G31Sv5YMxhk3aSXMbQAN01JUDBPzmowvt4M9bE5Qfphva8botvCy71VsvXAFKljBap8e9KzF5HG4VVxolojbYumsES6Re&X-Amz-Signature=173727847d20f9f58421ec010fe64d1edd4b0176661bfe23a26ba01115f271e2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
