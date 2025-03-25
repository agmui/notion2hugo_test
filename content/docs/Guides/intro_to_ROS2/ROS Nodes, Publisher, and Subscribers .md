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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=ba51c5a9e43cf426c4900a76175de923946baba216de37477b02f765675b38bf&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=7724a69cf61b1f2e8a399cdd807909e97b97757426a9f8cdcfa5e3fb5f47ed0a&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=c8f4a4d80d579936fc2d10d3f53ed711d288cccca8e3734f263d778d0122b850&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=66a5cc72366cd4bd1598ee52d076a824356fbc48649b003ee54078c63fb57f18&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=3831eabc05e59b7b53a9329cb6591a2b489ca8f8f388b1d1d639800e46ad0202&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=3d8609e8673219de0ac4b9caee88116c1f4a5831e0ca6d15a16ec60e2b6e8602&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=0dcc95afa402e1c59f7538148d8b136affc50916950bee85a272f4c842939e55&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDAWBGB4%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLFZp0QUFB%2F0gefEGz23cWKx8j6X5PRFsiEqSbkv9miAiBKiwK%2Bk%2B1Ii0z1nJtGW%2F58WGDN0WEDbTBy0h3DDVRx%2Fir%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMxcoYamOKZe%2BVN8jRKtwDK4qaMgPBjx%2FKlNVGf%2BwVRxxWcwbuJdj0cSSrAL9IcLAgt9kBaLdKX%2B1Ra9sFZnxh1TdwHDcR6iy%2BMrX5lM58tz6Mz%2BAgn1Ux9%2Bc0lpk0VLTLZsbx6oMVLltPJVduOZkRIGgyZCNnNQRTXSXUMJzDnGbFoJAtxDY9i%2BbX%2BsBMB%2FGs%2F7CrCV3Nfeum5zgMH%2BtnuKzQpc2tshg%2B%2BdC3zHMLu%2B1Fbo9pMid29KsqeTSuiJKYmtnVQaRbJUg2aBagTH9POcU56P%2BY2gFHNHtCQMhvYWY3eNWF2T461PY%2FvVobWPUmLxXyQurxRI5VtU8g%2FpGgsJ457mpK%2FvN0Tbl93XH5eVdSaxLetU%2Bha8Qrd89v%2FOG9cZyogURWs0UwrHrMm6rxm1jqxJuPsm%2BvsuKhtuoNyZ1BBgB4YyIFhME7%2B8UZEasu2OAF8iQndeJxIpXetktT%2BkPk2bAprG%2FkJyh8x2mPXinwdvs%2B7%2B4gvZNlHbIjqpVwg3FHtv9O98VOUXFZs5MYR69EkE5PwoBfhD%2FIzqMggc%2FbUBRn2mzCQnvdmwqDUak%2FWuAB8kkdBbBt2F1uzUO7HpVv32hw54CXp0zaI42xdVw7ySTSSRO8zhCJ0OsF9LoKzj0B55%2BhW%2F0TLPow78yJvwY6pgHb9x11hcWWOlvY3oWZ03ItVfAMDKdnMYiL5PBoV0C93kHk1jue26Rzob8wTa0Z5tVeNrZbZimM0lzBFc9UkMntgaNhjdENbLx%2BBWQXZRZz%2BzXV%2F3gOAiHXpUJv0PvMOzwh9Gxl4LwM0Qk4K4AS9JCNHh1Ez%2BJl0%2B4e5GE%2FQq872lSKyv0NbuFrMBxe56xoCGlo4OWPI4PjAuHj%2Bpa3Sg%2BbFRtXusun&X-Amz-Signature=39d2d525e49ddc531db638e9ad6fff44dc9e9bbc2a9e96e940545f2e9a9a8471&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
