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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=c633c69631158d28ab9b263d7eaa7767fc254c505fe9fdb26a06782307fcc621&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=ac093f7a73e5b5827d46640c14c943b531e49ba23d79af0f22844d967bce0f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=2be44bb564eefab464c834c36ee838a15459f49a35b34c783c45f1e74ca3aec9&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=6b9e7215e592707904f563856daa70a4a3e6d915fd2ff42da469a62bfb0be41a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=13c954da3a6bdaf71648fab6769e4c11cb238d4a920f14dce540aff93b5d8628&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=99a9d9db9d0658cbd2cb5fd5ad235f03f22ca43546e4a06cc25b884383dd9d02&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=0ee508a56dbe737ca6ce1e209a8e261156c791c4b954c898a0c61f6aad641f8e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLC2AZ7P%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T004127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJIMEYCIQDUSQjmj1ctxQb65z%2BjDWRXqrBbaHzq2RVRjU3iKkTsqwIhALZCgB0uiYmISVgBJHzdVYh0RUxgkhFk9z1D8ZGPwZl3KogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6XWOURcFaVCsmJ5kq3API2Tjot4hNGg9OrAhJLyGWgjJut4D6QL95SRDkBZcEq1RIoqVnk9HKL6p53LWtmIVpjT5bVHrpdScTBjCPhvAqI5d35UJ7MCD6acmPYykBBSKa2AMxyBV%2FsInrlcqKjxOz%2BqCXxeDT5zyTYZZDN2o7HGmBnXEClccN93BojpZz6nAsI5W0d8JUG9NSibpBzuVXJtJlkrMCRehRJQjUzTKETiJCL0tP3PhGgWMlJV4jbJ%2FKX0%2BAHWhLil56iceZK8ODMGebzuqGFZzUqcT6bLEDwtCTtk%2Fr0COzIfI9G9icyeAiimSFLnaHTJbXQPB4bYh62t5IboZQDiarKnvrKgU5nxtU4MTyGheF04pZBmQ3cReqUJZS0B%2FIHiQ7aLPHyL6%2BwsftpB%2FGYyh%2F%2FFRwor4SNmjJ0Nnj6V2KAeNct%2FdITEVsm8dojIbZ3i3d9DsbN8JPUhHdtxdyzAF9vlW%2B8xRwaYX%2FyyKqWxzPSHzwNEmEHZrAfvCO0q1f8X%2BvmeDRbBTKdAtRVKDXpjlc%2FSK2ajMrjglSSgQmfNkEGewWmeGzR3lAh05pjQCtx9yi64k7sjOy2yPoGkead4zR4y81Id1lIWBXhdSTJgWbPeNK%2BRMOJiIxavle91ANsjUmXDDIu7nBBjqkAeYfyB0rO7vin6%2Fhc3MoUbEoQLvfaZG2GDdnhHrjCJQf3WBTkHg4t%2Bf8YNQadsq0rVhIVfkMLBUp94qAmlp3%2FtO1Xad5dNZK1zcAGTxmcFbQCc5erBXc661L8A3vdDX5%2BBrX4WpYbSFPfx%2BgyiWJ9HWm2ecy4RWwM2m5hD1WaYOY%2BdXZbCMG24VatqymqZ4Vy43ctYsMl5D7HD35HHlItpmHd3cI&X-Amz-Signature=4d3877d76d1f4d02acda793cac0a39715b5274e042518a9ca5d81dc7ca98b8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
