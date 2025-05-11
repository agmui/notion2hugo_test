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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=b4d9b7020c8f317259033c52123b8ef7ebf9dd5b27216a4cdf3df41ea2d227bb&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=1c4cf4b8f2b5a51048edc5c7e126463f6b6c4dc9de2e9453f3c47ca25b831578&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=e2793545fe4168e0eb00bd4375d2221b3b228ffc0f90f863b59ab7c274975f41&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=fe2bcbbb5fcee5bb0b996abf66d3c6380b586de2b6e376f92bb5a2b0ba264a7d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=683dd9beceeda4a71640dd7ff31aa8f848e2d3315f2c9bae40d29e8f243a1e0f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=ac83ad18ede1c629ac13c73267823e9ce360cfb8be05a9797f88753e43e5ae44&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=3c6254b840ddb75205c582b72ee6540939d844f621c0322a61eac0add0c18ab0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVN5BSRP%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T170201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCoK%2Fs5SqDLnkvu7cW%2BRpww%2B4SzxYJia9Shk1LYFkipzgIgTrk3G829zOOIkKKP7T3685auf7qjU0cegW9MwyUPRJgqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNn%2FZONBx4FWjFn9CircA6P9SG9YVIBLyysun2iSHBh0XiMMxxLfnUjgVvVnm9IClMngAKPILqEONU053Exb5AaDcWMEZXOGeG1YguQiN%2BcWEtyV1dffdjfOqp78nloOkTZQ0VRU%2B2OuapeC05u758ta%2F652nDjH1z2Sy4bF4YjzUSGJ%2FH07PLdrvfV2UmmYDVeuqmvLbUWi8%2B0AZGo5oFmW3JCJZqf4JXH7gYYPzUk8LyywZcnSAQhTgc%2BwCm9ng6GgRGAgKckJ4zY9JJ8ORBSFs6AUuqEZ1fFItCOCrX9CF3r24qx0EFF7uWZzDGqEmllRV2Ix5djDiUlqAQgUZA9Z%2F3Qf7U4wxLVGL24d%2BU48hgrWy80Bipv%2BNbGHwTPSo3b%2FK2KTxvU1woIM3RV4mnG18RzT6UQljRbAwxZ3kJk53oM1kiD%2Br6%2FliSOjx7yqjIcnw0NkLT69rtstsqF%2BaqyNcM8En1aezsNX38x5z5QV4GbCKgJYW5x3SmwzfFr%2FOXnCy7hpTrLnQAHxr9YRKqyfk3hwMCqXcSFdav%2B0XM%2FvpYFxWlx7g3xE7Pd6FfoX3AVsdGglHwPl9Ibk1EBhXLTz%2Blb9NPmacNlYTI1b6Rwy2RRI7VtrGkX5zf1%2FJS%2BTR5jcwn7uG%2B%2BRMguyMMKhg8EGOqUBqM8DlhrobeyjG1WB6%2FhrqLIWMgaOqmPdtk8rER%2F8upVlsub0FiSU6DjC6vP2pywCf531vQX9dP6qv3L70X2sFIAJaj4uhmjvOPLpi%2FGmI8%2B3i98zQuvey5gSw3%2BOOeF%2BUSI%2B9CdGSAyUz9CXd2bGpERTWucX6MCXbBwQ1udBupqaCFNv%2BOtXNvDlIAGZPrdK1KTo23jukmRRK34mj1%2FMnAM%2F53Fz&X-Amz-Signature=f6c013825b7ae0439329995323d0316edf4d8fa6a4792879406315c1d5a598e7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
