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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=4ea11f079e09b8c743e61b96bfc717c868386b4f5504b54ea032001145258878&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=699028cb5ded4bf11d9d8ec5d4996487dd7add1292df7a8129b0c954158e02a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=f05127361eb575f0658f159c76ab6bcd820dab751cc5643588f08cf0c81d0a79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=53b585562e0783a52f0c4818dc0be1f77603be86910436a59190a20adde8d5c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=87fb20d90bb796a7f7cae935df0b394e4083af115d372885c306af1efe77b8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=45da5d25687a01cbd29f32185499b8247a6d1cb399c75a2762deb38488e4390a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=ea59a4f29885e1fc7799083ea3f71bc2a8cf34d29a81c7a299ac5e457f8e7010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2PKADQO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQClt3jnoDi2GpzptmMMP%2FUFVdVcDvyvY2cuU8X%2F2EV%2FCgIgcQUlj6npxSACFd3UbBu0TqwwI%2BKSTsGNX%2Frh8pEztNMqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAPabbM3LkGetaRjiSrcA3DNFPvMHXmwGNT%2FNf4Tc7w0Gyr7WXDM0aJI0nvDjJIvbpR7X8n8jrqYF2JqcuydFkcmiloFc4txAkhr6pMG3Ounb9pL8ygAi07Fe4WYare4p6a5xFu1uu4MhN6rvAeFunGQeJcHOHY6GozG0eKp7MR4042fmw1d9H%2FHllh1u1c9PbJPfIDOZwnB7l3v4I%2F%2BD9WDI2y69LJwEtUHK6Xit9C1Tjs22839uNlHCmzBeuKfLHHZKW6ETDXQEQ%2FktXSLUWuOZiy4qSdKj%2Fkwaww5CZBSOC5aovFBxhD%2BTIaPbloKzSGH02Q5s8B%2Bj7pU7AN1f%2FcR%2BXFLEzOXp58%2BkOnSMOO%2BbKXx0Skmdt%2BrfmNT1tZPmyerrFiY7lt6EWPCZC%2F1oHKsYCJ6ShJ5xqYeELK38RrsdIeDeyliKnh7D5J%2Bz%2B3BtH%2FXORi51JvNugGiqSrLTMODnZwILhzesIjTirxv9%2BGfnNPNckiW0s5YLqKlaJSBR%2BQ2wvdOauUFBEDRDgnZ3xRrseDvC0OpP75jEaKenvKqVLgZo34o%2FwLaExMWVlH0dvKODV75dRbqUq8C%2B2CKQu6sPwS%2ButsZQRbsrdzukxB1zcXOHQyqKMwXUPkNM7e16Gft1kXf4IMFgu0QMNOeoMQGOqUBhZQvNMiQ4ZhSl7AxRGx%2BKOQU4BqzL4jLrGe%2FZukuVB%2Fm%2FV2y79aPBcGV5E8Wij7ImWM819XXG5sT4Sh2rSrEv6TmpS1SGAu%2FRT1BSmAYv6EfC5HVaDsxCt2iCXs6j%2F2Hct44vnqBt15ZmdXcCxEm9jxpAVBZmwwAnLIidnnHYES8fWZIO9xxzmd0dCKZYGcxOCXwP%2Btx1k%2FeoQ6QpFcZxpL2f6sH&X-Amz-Signature=98d57ec293f609e07c89c96861edbe78fab70e05cb091be60f45d073e8295dfa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
