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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=3df0671a191f02a90766fc463682aef102b3e9445ea2160e7bcb69776e5d25e1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=a4dd883721464b7326a310fc59e2b8e5a41ac44e736f82fcd285a6d698ba6fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=771e6abf0f993fdc65510851a44e81571a512f4fc4f7c46d9374145e4b77cda8&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=1bebfc8478a28c9f4455581cd68b3fd8425f336e20dec414b3c7bbf7c60d34e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=df63c805e90d70aa9deac029919606fceb042595a2d0897a7a3ad8577cfd026a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=45ccf394495e263e758dfecac2ecd84eb30625cc9809a5926670e415667001e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=46d2e938b58fa7eaf578c8e65237706390a20cbbe6b5975bde31a45779e080c7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SHSMMG3%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T181245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJHMEUCIQCn4bJY%2FBAm52l1sTei90ItJ0uxvhLvdnwV5LctuC%2BzYgIgY8PHmbckguZ0FS7k2%2F9t5KMPqIcPxoO%2BbiPYJpLfjA8q%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDEmZhThfAbTjREIYZSrcA2caG%2BQsP5P4zOPPUfyfOJ%2FVBXzPIUjZS%2BUvr7cUDkMKdzhyyOGWZkSJnuQbvf6wU7b7PaMfGRW8kXmJq3F81x11NbYrOdpaHnKmS3%2BUEJdOtjsfynO3nR6xKJYezLB1OvPa0hMtBOCaYbMcmXA0NFtNWH5yb4NIXVXwhWldMQIp20q8KMjqtyZetbi3qfOzYRZm4AGh%2F1FW3%2F4dlnNIL8jBBGvRDhJ1tLEbc30gR%2BAakUn1VbN8BoUmMm3OZ0Emm0%2FIftt7YISjmNnJxy23VS70ngFPQSloxJohhUa8CVxt4nwP85i2tFWt2%2BhW7x4WnpVIJbK8PpyVqWie0ZpF5lmvWpp%2FyzFmkhq7%2BDkxY1AgzdSnWESI5B0pKtIs2qzLMOnU8A2y2rJAQOuPiI8z289CPdr1uDsmwQYHnkqcbgW8vNz5HCOic4UUSZHg5VjC0SfbETZPujG1zQZCUWf%2FOjo3bBLmXJERKx0BF77ewbp%2Fm78VNM%2B%2Ba4Ffqj%2BNA49wuGjh66AhB2pYCHmPPVVMuFv3AZWpkg2ytKp1Cf84hiltRdZup36udolpZH4Ig2ujGETXkX4U9uIHM%2F%2B3RK3NfqJRaVZKJ2Aos9b3LVrZ9ssKwgW2lTzMoL70JLBZMJDS%2FMEGOqUBfr265iTQKMubb2z9eYdx0MoK4FnxN357ksHcg5WNSK1fzAYT1UnR5q6ek8acflXaweeLzbTH1PsIJOsK3sH1McD0UohZxtq%2F%2BBZkwip46ArRef6oRRjlqDGnGV1BC6t%2BcE%2Bgct77sW%2BsczmG5tK4uFtOHwPC1BVCtCxSCZVKjx6lJtoi6U9TFtlL8zKATIIcocfxADDwyvfmkMlqxcxp6S1D95O1&X-Amz-Signature=ca3fe9834b4a0816ba5c0bdca7da2178cd65f36271de06e3ab36c475ede01aba&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
