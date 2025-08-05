---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=3fa60049213dba016d7f50d7a2af02c1f840505a11eefe1302b958940620e098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=17c48e5104b353882ef2e43d3e60dda5c21a4a931812b95bbbb3338052c25327&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=bd2cf50e4cd9d73a77334cb73c111c794d8be22b6a111947ee9fede5aabd5640&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=9bf7be3df88b78366b08bf9097f736d68518ee63014e03460e91ce0260f26b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=9416696b920b8967d4fea0f1d303b87d866ceadecae38b9a61b3d9f8382324d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=0a4bb9bde7347bc92117fdca21eb682b46d5d2e7ea9d0eb5c34d67e4a77cb781&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=581739ff73aaef00bb3fdf13549366dd799a66b5050161ae31d5844485069a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKA7Q3JO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T004755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJGMEQCIDnkqFs2X0Y7gw32Jpfo4g9ScMnW09TLfWvGpidmkTZOAiBPuus80qMDdcfqpqbAIPEdE4gKh1BaVaAKztZ24R05oSr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMoed6lgfwfX1A6rGkKtwDBovD%2FPi0%2Boqeah5cfKX1MzXSLWsCmd2ozXhphDtPeWtAx8pkhrxDiXLdNcS6QlEWbRr4URS7AwEFgvQPyhu3NRq3fbuV2LQQE%2B0YZPiWekXT6MeRYZ28fWugnLcdG7RtrYGvIhXlbzMz5kUmUwTZa499TnNr8U6Oed%2BvE9G8vfKgGzg%2ByGSuEVds2h9sI5LpYs3o9JxMWMBCPnpmPArgYv2ogy5FiiDVTMPS1nyA4QnUpvomm%2F5VNf0KIqF7pOAOkSQLr9vMIumDLa9b58Mf90gbAhnc3unrXVHTHgdOsInv42BrJKxtKAwq0vfIuSvb98swqdLykG5%2FyCdbijimyCAGhJzH0H3hFDPoHZmMSFgIq14%2FsGnj0guMz2uGb%2B3RJXkwiYuRg1WOX1ElFLP9e5%2FFq3sIykC6SwF4%2FWY%2FvsSskJvymzKKkyb3I4DlzGdeZbxcW%2Bw5qQqcOYLnQCwYtOkhlPk5dTa3wn4Qi5xSgl3GvLLCjY7GJZP6Uex8G%2BBFXd0kT%2BE7yraIl3V5DGzeuNLX5rlGTnPZRh8FtmkUkmTlbdJfjNLXfU1pFiN3Fi9a2q5KtA5z1Fnh9mDQpeqEedeS%2Bij%2BRC19jvbhdN84hu4h6KNiRvM%2F3emPQGQwl%2FTExAY6pgGBxrTCnS%2F37Dp7%2By6en8QxTl34GVBKpN5eQlb5VfeojEvXapZnEXkxVp6ddrvqDGENth4M03wPcMfZ7fTN9M3SXs1oJLFHkgRcJiadHpeE4OphWNuyfbiECsITrkXRpZic8oiu5UIFGVQL3YEFVscqYRlRL%2BC1Ek4DTygjW5c5qac9DEsr4X60v3quGQXqFvGrODT4L20FW5c4PE%2F46%2BU5nbmqgMj2&X-Amz-Signature=512575ba35f0f044ed77ed48bf8f7b8aaceb22057055199410389d20a451c531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
