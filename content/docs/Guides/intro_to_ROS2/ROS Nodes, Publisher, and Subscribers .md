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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=467bd1300462a00dea949a66aa4fbb80facec2b4300dae0fdba54c9eba4ea150&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=a92673ea13c93fee731a65c307a9950a7353372d2b8e0ef12af68707fe8d61d2&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=0d4714b981c7003eab696795149e7e8ffd23f13118e6075e0907f748b51c1044&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=9d8d0372318b73bcbbfde6e1bdb1a5b14c8d961a68019f4552fb5ee3432a0226&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=88a8945fc39ebcdfe9f9956f4694433f262e8b7e11686103cbbb66d4b40b0efa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=7c6ec27a31eec4d496e3510d9bd5b26d95b842bfcd374b304fdbb70725e3bf3a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=59a83b21486fbcf78d9ad39baedbcaa5381a70b1417131994715c249c6ef5afb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUY3E7PW%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T210120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQCYqfV%2B2cer6EdcXXYWHjFXWUp5eM215%2FNLEGJjZnV%2FUwIgPEOoKPPvaScNZs6Sn96ZvXV9rGWJ72Vwp%2BF6zykf5zQq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDC%2FjwCj%2FwQMwq9XnrircAzLBYBvdLaGfhB68sM%2F%2BQvSDHwDlSDtM4C52Fol%2BqDe5%2F0o%2Bqm00tWextc8KqyfA4PE40ErRODILPnKxEKjPvzJGwPTqwW7GwmVlz%2FAS78ts5vYdADdBw8Eai%2B%2FlBsyBUoA4hsal5H5s2RJRoEsq9d4KZy7Js34QDOSNmWJ2KuCbiTiVpJ%2FEUu2rwVVvxXKPG3ej4OTInWLpTa9KAr8RqNNyvf33lxaE6Gg8T9dHw8gULxUyi%2FD2HIRarB0UPU6kcft1w2dtUkjDa7Dv7QIdxxx4sSTYWK6L%2FlPWEPqEwh8sH2plGS13FFEGlvuXQlYjJDl3EuRD7PaEXsNIZLDBKk3l%2BTq5h1TusDbdS6onrHD2dGtaazt7iDOscE4Y1VZLprGnbrkOmmGhC%2BsVadwhs0wZmmK2jSCT60SIP6HAkvC9gQiHmW8sRvICshQd9HELS%2BB%2Baox4GAtJLk8PUCPu1KqkzpNk7C2HkuMI3y78tuNQOAKgACL8Rv8%2F%2BPEnMyg9JeREs3wPJuhB7CIGKacH%2BZyE5tEMr0OErTrQrNPtc3mCgfQDbmZY%2F3F4gBa7fSQs5sRk24b9QPeeJD%2FUeU10AwH21nuUp%2FwTUBoNEQzj4JSsndAuqwsZmuIMXzZsMK%2Bgrb4GOqUB5o440uHobdPth%2FVT3c7OJmW6s38YIXrmNd6Ozx4vsjkNuSOySuj2B5HOM3K4MJGdAb2nVVeq9slkbBuVWrxZ8uxHJPOWX%2FAV1Z%2FihysmKRXL4GUwQxd8x3wIc0wlWv%2BEN3qbzv7JHT%2F4rCu%2BwTbJK3JhudFMeTVZk2%2FxKV9nTesbQ%2Fl1og31K6yt%2BlVQlJxv9y07GLUyaqtxYAdebhXDXYhr8e5Y&X-Amz-Signature=f56167421fe6b8350e3a015c693b915f66fc2e6aeaae541d88e8ce05f10337ad&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
