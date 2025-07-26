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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=1ee2339e610b9fe071c6109820c906effb0b87bdd72b735d69e19a89abcb8d08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=515078f9f17ec240c6a31cdc42f781dc9360f6cf741a8528a1384308691182ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=d7d03c3dc22c8ea364552bf0616a22fb2d737247f1f388227047028634ba31df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=19d32480ec3bf15649a82d5de329e5164ac996cd86b124578d50489726e06f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=0d11028bd8f429cbcd5d12ccfe2062a43a409fa272531d0a9e253723fa04ec5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=8dfabd2b3cdb2cf579c01f6d65186d6b59d0f352c787f98e615b5393f2a0bad2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=f5219d57949c45c505e440b0eaaf11263ac915a5ba65e221e8552b1d20a210de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VS3J54TA%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T160955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIERPVu8etCPxJA6su5019y47rtrRZ14nfqjne7sazG2GAiEA0GOQ91VtOA15z9feqzugx0Xumd325budET0ixTYJazQq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDCCcOgj%2BxwdUG7i21CrcA7VDK%2FK9iz%2F7uL0kTRvEpshkClf5E60dK7Ct5mTwZuD3n9KSep7FH2YtdT8UOVww7t0%2FV%2BVETCt%2BnM9ZUfST1Jkth6RCdpj9dDCGG1xEDsOFPBuwswqrV0PTcTVUzhKMp8fChVThjpQMhTAsoKzEG3C68uPAJ%2BNztMqMToChFzt4SQEti1AZky8FX7bG6hJYJrYsKJh8owJtGgVQ1eLvDyB6WCfIlflr2ApMaGmsXO7syL%2FXYeU3oOrZ4NvdO9AEK6HZ6mpZNqCjEFlY5tCkfld3CWeihyo0CYnq4W%2FyuLs3j%2BLrdVg0t3WeXVnrZW5T0q80CZ2EVN4ixkNcyN7I7uBdXbnpqTQfJtXZNtf9sJ2OGHx96lykJPSnFthbiZa%2BhCMJ5Wsahou0PSHfBB5pM%2BhrEv4j42a9ioRIolEmwGDtxhT8i5AUQngcnynqFbDV3ci70ry5XP%2FlbqvtptFKzjPqNXu2VaP4Rux5NgJW3E5BoNSbhvxCSzc5bgHiCBtr05X735%2Bb3ohbBCQwB18gqovF5TyTpLyQ4v8dBnhUty6XsNcCtsYVW1v0T4eFhzgYG%2FNrK9W0D%2BrPYG%2BOIDM3b5ZB%2BAxSEFB4GlrmfF6YCENl%2Bv0JQad%2FsGT5wMy6MMrBk8QGOqUB2gLQjb%2BgZtJJ66gG5%2FCoeey6OWsEzYkuNzuII3klKh%2Fse77UXqgY7NBLRgFtIfj2Dg7uAZ%2FlRgDPSov8VcGAUf4Ea9cNbuEliC0LX3HnDZlOG7Xs7OQOB89pGx3JdcJE3KT7x%2BUOtw73cl0uCgeI9d6LVhy01Ml77Ir6UpO97vnrcrwkwMFTcRMF%2B3tiVeD%2FxcXqTm0yq7B0EwNVqG1c58b23zE5&X-Amz-Signature=27121b60f879bf4ef94e8e5a922ad7f552bd9f5a87c27f5a57b24d3356c7d2f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
