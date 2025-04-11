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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=66bb13fd55d92d32f71246e5c21cdb7cb32a48f90cf54b997ecd3fc561fd9db5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=b72a0a1b93249c9f85749555f8a30c569604a9a85ccc95507bea0ef9722e3519&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=7180dcaf98cc1f91e381fb993f7f2607e61303b6bf328366f0aac98f50d13275&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=b4d3d894df33f5050cede1c8de9c5aab1f77ac5c0265ea09fd7890682082da46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=bf2ac2345f1c1a1908c4a304a66414f0eeea69b34c8390e45febd489e0fdde9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=5182744ee64deddbda9ad1c7a337e180a8e00df8a1a2ebf394aa43d6df93d255&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=454eaff26be063e978749cba1b6f4b5b8f648f620c4259147f8014c69b3fe070&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVFFV43%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIHTIqLTo7Ss8HUqAKnoC3GrjeRieV775EAAMlo78durAAiEA7hbmUqdS1XNgyiB8EMXrBHMNamhx1sGczzCKeFPOIWcqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9GBVKem5%2BwE9LCmircAwnUajrLGKzyalIkDOk9f72eGzMws8mPlYXFBZeJmGim%2Fll%2FS0MaxHXESTkTlXGKsxjuHXUQVOy%2Bz7zOBthCbu7k1D1xwpAb9WlqOjT%2FuQuE1J6vLqNPiDWfVLk5gxlS6Yq0Loiq8E0o%2BrVgK67vOPPKbcJeLjj7Y5t4npchBongVksoZRyq4uRhNJBZcJZ%2BsDAHD%2FQ4hxyhOTvTdB2xEpdTzGLDHOHc%2Fa5lS9QYYUS7G64OhTrY97ln0eABsi0sn%2FJ0OcaDtouxQZ21S%2B4P9W6Hz7k5W95hL%2Bxnqs1NSPgJUL5QQT1IFhPBWrICUEmOKcqimYFNT8zW3wfN%2F4tlYnC3kDLLRgskc9m%2BMw%2BaIEmrK3fJbZimHN9HyaNFqefnPUWQHB6KGN7SLYPmv1oZeJAEKmNZ2ezuBgCyi%2B8cRfQ0Q%2FoT%2FmjAs7VJHXJK%2FL%2BgjTUYVlXtw%2BS6kDVGSvebpu1fpAe9ngnm%2Bzuz9MnupsPUPAnAz9wCbFHdVwjBYF1MzY4JCukiLsAVJVCp2en%2BH8kbF3ipF%2F4EAP1T0nJB5ZXb2Nrl3GiJXWdnUvWIeFZsUu79zQIxA5F%2BnNcnmDsYJphjN1H4oEw7AyVO9yvRmwlKa7HYu%2Fpdrm5m50e5MK7D4r8GOqUB2Lxq8p5XCtrPkEQlxvnR2SMWJlDh1yMCBxdJSdlzcjw7AlwjLPuWre5m6jkeOXYCaL72mcAQGW9FMubpF9uDH22Ea%2FHb6l0bARDLy6RMZN7aEzmmRzEOtw5FBhgipX%2FyJECYVsfFc%2BwsKT4LUq%2FelZq%2BlCtLhCI8PxCTbwsWM48pDTNthvlOhCv7CL3eDnchf1N2VTk7DBF%2FVTVDce72oxvrvPmU&X-Amz-Signature=121e71b192f18e199de8097193f3665b07ff8c11cc208a8fe4a71c06db2fdbd8&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
