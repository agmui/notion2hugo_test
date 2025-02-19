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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=f58edac417a898e5e3376a0d546db853dd9e7fde44f40b40ae40c4c63f9e578b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=ee19c95c13bc1ed1777729c2b9e779c9bc0890769f093fc1baeb746f5a4e6897&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=ee09bb5d7239316af6ca8ffd1c49d41bd218046398b617463c7ebc9748270b39&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=5977a871333e849f4ad5d23fd216c5f30c7786c8ac23d07e0271fb57a59f0e09&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=874c25b535f0e04e15d6cfde593cda9f71828ba19162a4da8f9278300c8b6764&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=4c9642825a94f1a730fe8adebaf3c983f2d4cc2b3efffd54535b3120244f1935&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=e7af6a871830d2096ed15ddbc8e0b51cab196f181debcfd7e7490dbd0a20d02e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUUTYAZM%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDMEsVzYHyaqDqqEvU3eSVM02Y%2BdU8J1ik29k6%2BdWj0WgIgIeFr5wclWjOwN2IDkFFflb2N96gJN38B08c1KdcwAeEqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJmayMPWq8Lnd%2F81iCrcA89IuxdWoHtBm37p6dCl8etWAGwWbTJdqIYQA662Hz7wjZlhm%2F3BJVvmC2Icl0mHvekPz2Jho01%2BI5qx9xt8R3xndzO6yCrTKqMx7%2B1ao6YvJVal4I0pZ05EUIpljQlzxW4ACIO%2B6k4GikhE46WqUbzkAaX2T9lfT01KLqLXfn9SOARX%2Bk5zitDfIvwuiAaRQ3h2yg3lavC0e6MiyCbCU4dGBdZNQfYiHv1wS6CEISdmAPs8e28JjNAUjyn9X6MTBCdPNKzKb8poeHNtRox6MypfyeQ%2BNGavFDJU%2FfSNOvK8t7MHFyYq%2FbHGrwz1FqYOeT%2BA8oLUWbXugg752ooO0c24bXNOc56Ikx%2FRsAn0vWeLC2xGtMF8ifOcqik4X2Ad2V8fCtFNs2At9PlyuwQ902%2B67l8vTd%2Bphg5UP8T6e%2B%2BJnP6hVqAk%2Fm21me4aA3ui8yKIfn44DnASh51OZGhhB3aPFMOJxOmFq4QqzJVQdsA8dRtSa568VLgUQrJ%2BE1LKvWQDQyOVIAGpxCnWt7XNVAzBZbUxY9gR3hPUgG1jICJLc5M8QjsumVPYJpiZpdW2Yhd1BAzxGyCWl0867q%2BQRSHbQYuFZzPYX%2BWTyUbj9EENC6L0xivetfF4xTZIMIv71r0GOqUBM8kw%2B2LfJf0qoVoqOE60irDEfJTnN6VfUyK1QhviAKybXeHx4X67Riqx%2BWQMRQKSbtFPXIGEVYVmPL2g20t7bwWiTTHBjf3jcj04oq2SK1%2FsJ9nYVsdXgplbDnqCQ7NKaUA3jCyJRukVC%2FnX7yAgEaVMXJFY3tbbb0ljmhZFh40LSlFq%2F60FlFeBHVz4hMsKZTirN45a%2B1XstV76i4%2FucJKssHPC&X-Amz-Signature=4e383f76521f882a4c6f8a9eef3f92b3e7c15a46691d8423585fc2c7390f3055&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
