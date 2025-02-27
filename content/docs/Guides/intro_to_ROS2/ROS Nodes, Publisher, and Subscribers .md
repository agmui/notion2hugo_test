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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=75b814655cc8ff379499b203d4daafa1370506b5b8e4538fb55a9f5ad7f092f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=bf94922c9288762355adca07e44e34280afd7f19618648f1ec6743f2dfb1e0fc&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=a23e952681490d1a0ac9898c21c148e1651f659a50f5cf43c6ee16e2473b9ad6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=e9727b3744f99a6bd2657a48797f1021c034db67d3e5d35cefdb4faaaeb38d7f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=3d05051ee5cf0c63ae4380962063fe226b2101db999c0954920a7887d2dd22a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=14d88ef4e0573ae96b9b769550706b07b7f8ce085ee20ce09bed4d4d7047723e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=a847302ee808a511cd61ec669da555fe4b43652b4997183ed1d21dd8f755e41a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLKKBWJ%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIBwS743GkHC3BRoqKYgSH%2FdzLI74i21FpvqusYNxfDniAiByIhaBUeSRdQF0TK2JypcOqm%2BIFSjcAARbjS4UA94uDir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXsSpLHPfGilcu3buKtwDwByr53Xl9rA4q2o1UdcP4c2%2FOZi2YmrJlTsWzukv2ayw62iLbgGfrtmkbvGpNM%2B8JcqIhzOiqAtgmn11dtK7dvMmFyNQ1JDN%2BpwvB4MT8xrTxsTUuE4IBkcvtKA3N9EUI0hWGivZPZVY3opEPqL%2BP1UGs5i%2FndOa%2F6wWXYmDfnC6EfmJZjxzxMVQbS0t4mNpNyv5w0%2FAFwn%2Bu8ytI5FDDtY5wMPWPfxZXGr2BcowjZM%2BH9N%2F0cij6yKK04DuHuH9XkclD8Vu8aO8UsqruCtvOMOJC%2F8PbdVZjEM17okuupPBWig4yMBwYdT8Wn%2BhbJ0NUzar4i7OAVh2CPT6yXCM5rtr0iMbeBBLziT0N7qvDHrVbznEIOPWYoGgW%2F9UWEocWLSPO5IV5OqbdmKUxCKG9ZEFUiaiQyfLi18CK1NIPkL9x6umobbNGKA0TINHqes0%2BR%2FVj4b6T9%2FDfKXvSWEzgwIbjrBMZMhAdMis1T3ruHzaZYcMumkvJo%2FH6A1owGPQ6HRGRgxk0vjucU72%2BxyV9ONv7townky%2BGtmM0V2KMFA%2F7LA%2Bq6eGMOZ4qA43j6ygdIKHq3%2BLSPNXkBNFGq%2FfnJ%2BN3c1JBvB%2FVEbafV1oH2N%2Ffx%2F8syWe1k8NZsgwjdKAvgY6pgFH9uCDE5iLp4BxkmERqCYD2oP%2F1g9nySHACI8SF6r8iYsVX%2FehnKe8bCuEShgXAUmyRpvQo4Et82j3idlDmEBBkZlV0DM2Dsqkg7cyfVTXFyzk3W8OTu7im8NC8ZwhZTRTYU3ytESl1%2BsUTP%2BFaSikjCvBLXQhhtjxzTAHs082u2V0%2BiqqNqXMF1URM4%2F%2ByY69cN3eLFhLUkCj3MOmT5ZkT27wadIu&X-Amz-Signature=c210ef3dc0208a1627309e5c54d2d755e3eaf6fb4a92df0ced00b5a7cb82107c&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
