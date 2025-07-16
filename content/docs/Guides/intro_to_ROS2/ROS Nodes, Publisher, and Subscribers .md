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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=32971a87348cd38cef29f35f9ee7b4894e3f743b2ca73ee1151faf84731d0393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=cc41af604311f3bd40414c7d989fecdbf79d2ac9a0019bfcf9c502271d2aea99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=ade142d28648417c7f59376efd311ab6fafd45d6f2f3c930ed81ebd0b9fedb1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=cb2112777c55df24d7529a5073be02dcf33f7b2b662e7f7d524ea31c25e36c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=07db184fe100a6ea37e8f6f7e9b98c3e11fa71729ef84f85392e77bbcf7b7ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=dd530b292dd7ff96f778013bcc2ee2d00a9f31b667352980fa9de84a9253def1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=56be4deb9a188f0112d1dfd2dd19c6b9dc854947ab79a6c4fd94da4023b353e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RJNSJ7X%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGMNQIH8kzdLkd9gHeTTA6q3Nv%2FJR2M08bRKyOILD89rAiEA45RYWr1EtHoRQQj%2FCsruDkA0lJRGSknJzjlCsGov0Csq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDJtX8LGrFM%2BP9EWnXyrcAw6Y%2FgcokbxG90yKLX59Whzzm7DLErJIDZOlYqIfeBntb6FrdcnhLLxYFIg0hqzTG%2FIMkeIqvo9YenWK0lSmhMTqzkmnUVBBU4J7hBnD6OJRX7Z1UNACmmHWkx2bDW%2FnRc0HUfloPLodw0EwXMLHxwcn2E07eQYKacbSJRtfsxJVNYYG%2BFcUEjxQIntoxoufvoRZA01SsP0EV8qLZd96ec3X%2BupvIjWaA7rvjlzUoNQO5OagAHgd%2BURvc%2B2lud1cAMW1CAkPyOwKQNCopCMGLH%2Bd7wGhMRSOPAP9M2QOfmq8YB50Q3QVbl5QImW%2FJ85%2FHZmIScL7Zn3GBnBZ07%2FaLAwCKcFZZ1YCv2RKMoSRv0ht4OQOKXuvKpIGQQJ%2FTa%2BaPTBx7A%2Fl9eg%2FtYJbtQtv6LIMSPE2Dom0qnm7FxTG%2BzFFi3iSHVAY9DAJRH2b56FcXi9p4MZTGcNSKgt2G4wQ6pMewYqI4MkXsAe83crWLr23W%2FjHOYb9mCd8ITs%2F1BB3ofJoyXKxzNe4YOiPMv%2BJjB48Jjya%2B4xmrvwfWK6PW4jUiq%2Fa8%2BnY8Pjk55KTfFImplnAH6tzpfxGKQIYYOAJrn8lJUtFzIdiZ2Tl8RotBHN2ghp%2BCp2GTRdH6tJhMKKS3cMGOqUBVllc2thqtQ0Ar35gEwXc4FSnFmPxga4rMQ90itZxi%2Bn0UZ2vrjNTYcMJoEHwLmUDIbeYLIyhep%2BOHVSr%2Bq2MmUIE1%2FHCvbhaxXMw7%2FhdhvDogjlWQsKI15jRYaXOhI2G2T22OhGuKUa1XkcjI1wdRF333bsO5ZvKMTYc3wuz85aCVoVS9dla87npJnESxEoWXOTRkqLekibTHelPkkMT7CiQK2u2&X-Amz-Signature=bc8b9f25abe0edd10e12d5246def2663d4909b2a397249e6627ac28cd23a9f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
