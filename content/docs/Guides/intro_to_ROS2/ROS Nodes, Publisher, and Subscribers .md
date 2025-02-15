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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=12515e470b5ff0b72ca58518d94729e836b1a06ac4e3df9dfe673ea18ea2b6ff&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=0a306945b5f1cc4a89d2a6226f01475aae46341f24800f6c1419d2b1b0328fa8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=9a7e44ead15d75629f6811d885c7ca626300fa66d048b7b7ad8b911ff0080786&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=76705efafbdc7866e51fb1d6c3bcae1f1cde6c37b256233fda86811370e43e35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=143b49fb3b73317b4dd6b808eb88993302c0e59337261983be615acbd280a335&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=a8c8b2f165058343aaa1cd68d8f664f303d734d4b900896edac535f46f10718b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=2f940f344df821a06bc493b645374a5b196a9e028e70cff39707a8f43033ea01&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDDSTVZ%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T131016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDXmcAYsy1ZhowmM%2FiWQlPWFZDKxZuIKAQe%2BSI7qyqE%2BgIgCGLiiDjPqC3aBK1Bllq2tMTHiF1mznlJPZUHjJYxme0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDBrnl%2FTwb%2F6gbuLOfCrcAzfm%2Fh0%2BqWK2AyeqjcStCzLMV8PzkTG5%2BYucQTYtzjqnrHRqjRUTcHH5VyvZxcbSFoM3xa3%2FbDGxejtwpZ4F%2BXK4FsyqtDjDDAbyDE7a%2FaNhIL1%2FSIoXqxoDpGYMvNOaT3E4Ozxnz70yqe%2FCvXvV8cdi%2Bz%2Fojz76X0hpRP01TGX%2BOyyRG%2FzvAQSddIY8KF4tzAd7QSKvfCbToIC4GuJAesF4Mw1JsD3stEtqrT%2BBpV5haEN6TCtYCXVCtTiBMkd9Bvfe5QLav2muimOaYldJ1maL9okF46tnujgXsYp57OLamF3SP2OzJNvUsRAsE6n9PL9Iy3iOwwjb1ypMvUcoayw3SoawDtl7PSzsCEZAUHy3rVfbIwn0axikGHdMlVyGW69zcfLdIORob%2FlLuXT4Coxv%2BdM3H9v%2BDWnjhoCkm2YaVAE9OcV0w6Opi2a77NTCHxT4p3v8v%2BYfjJ5vkrBIR7p%2FZATCobAQAJBHhcxawfYWmR4zB%2Bl3GbZi3vFIxlyUijlsXqC%2BpHMYIL2kD%2FI9CRw4kSTlUDytk7nPMkUZH%2BP2WQCKr8Kvs4o2qZzgb8cjQJc%2FWz1aEuhhN8Pvrmo6jDw1mrnb6Bx5SpAFao7ZQZlc210hmOk8w%2Fp54iQjMN3swb0GOqUBKolAdhmtRE5G8UZtB3GZKa4FuIERV05MbjezXMtg2joyylp76wcFHfYFhhgnw90GEcZ6Q1d%2Fo4Km8Sg%2BNbFu7TFp4t7jDm7TZB7Y3ndcLAk59kUso1e39W6uTM6entVuNn1E8wh5IjNTub9Bvvzmo6RU50w6Y78dJkALmmCG3cusin0NQVnIGvpP1N7gX4QHScGn6qkv0nG6ij8yGqt2iXRCPe%2Fm&X-Amz-Signature=64e5045ed473b8bdfb87bd2708f37aece37969b4ada985faf7ab79bf5923942d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
