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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=e4a065cbafe77af2bf3447aa3a0b6a89865a6abc9e4ab210982cfee79ce7ed1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=5e6baf677cfb427828f5a0ddecfad9795af87cb9cf180f2c3414a96d49e725bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=a0205a43a835d7bb3451bc89faf1871a14c374f18a5941e552cec31dd32c1bda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=725e512ca8c31d2feb8f53e4f8203c6e8c658210c415e1e198616123e5282fcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=704b73a735b5f0a0644a337a042add8d21c1e963efd071a27493ba2719824f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=af035a66b06048d310ce8dc62fa0374536201ab70d4b245904397f26f0d6613f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=2677aac605dec6cf04c9ef5711f22c95996bbf26a4533f63e7ba9a061ee0e8d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XEQFOHJ%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T210852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF02QqdsfZcH5QElrw8zcPrD0cKaGf%2Bxn8KcybMBITPFAiEA8HZVWMmwZTqoXdqNx%2BE0%2BRmnkiLKA9YKbmcjOnsjhjEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKNfI%2FML3PJl%2BH7oyrcA0fj34JakOSNIAnsxiUq5zK%2F4KLwPUaa90ekeE3lMoY5eZ008owshjCnUiVIY89SUoQRzhBFZYu39XYm6TJ33iUy0H7Y6I30c%2FDoo4sRG6WYLn8XFRR8M0yPJ3teBJBICdmVuQ2XnoMNSOM2OVcIjJE2ptS25hXRD0WvAIRckSwAM2DO9sFVx8IZ2K2WXMqfQsE%2B80hH%2FMQ7c4uomGKO0r9ZyXZjv4WasELTCcQ8Y4D3pulynzsz0XG3thNJ%2FJ7gHooATqm2krDUfk%2Bn%2B7QF9D6VUOsmGur9pJ76WGj40i9o83D%2Bs%2FhYmFqB0%2BfVxwTkeu69kuVcbJzYNvqu2OREYRAsdVS83JB9oyXisFualtTWYZ5Vt50PqivDjuio4uGeUVVsUZFSkxuohpUYtW1l1so%2FqR0LIqtOjzTZTAuk7h22K3stxRYpVaAq3ot69zCGT8qWAzG49GgYOGrgwTTMXX9dguwU2IaKK0xS4r8cyPNijluctsjEq6IkMrBrHm%2BkrHYoGxfLXU%2BhrhABGW4i2mony2LIoGubZlpoasude9kgjQObtoslb1exSu3SfVw8QehrnOi5Wn2s64Vt9O9KyLUYmCpPsvS9gP%2FQdBOYJMZtovRt2K4fWSgtId9iMLiDtsMGOqUBlYr5rqakXc%2BC6manm2e1eM2g6%2F%2BNywArfAZ2CjhCs6%2BiyRbx%2BK4t5UvJxWMxisUIyLyudTgit7pvtLAQ1bHO7VLjRu%2BM70tTb95OBNFwwxHLP7atqE7WZFbzVPMJV9UerotqBgOVkALPOAe9lG53GK7vUnhCnOb5R630yhAdG4TAQdavahXCPKRnI2e8fomj1EiRjTTYDg9C6Sni17IY4pPTrQc6&X-Amz-Signature=f0825002844271e4105ee899f001e260713bccff4731a7bcd6c25a849d8e532c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
