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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=d9fb0c0ff84dcec6b6c58f388e34c4f35698f18a1538458c7c050a3f515ff5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=fdaeb93f5f0cadef91c28313054ffcfa25808f755448158be103b3a28ba6d418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=4501659794fc8df85debe7930191ba10620c2934d0b74de10d955179555acbf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=c5c1590588a532d0066cc1021bbfffa7ac712a8cf8410eaf137a09fab2dc8348&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=60a5b5e610a17917db55daa57b6f9dafc533e3cdbbc1e79aa4978898920d515a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=c4d785b989626a0c5ea2667fd836161fc699e0f758b09a9b07ab26dc111f30bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=6e3d7b00e8e9482ef9f088ef053c4d07b5497ccd7c07b62b498aac8580fea862&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUFHF6J6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvn3o5tb8xC%2FsukgYIB4k6VMfKvJ6WjYoNhIbf5iMT8AIgJLMclFjv9OL5Dupkg3AF%2FSfrOqrCQY8hCM%2FnuLiV3WEqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPofthf2XtdU78a9FSrcA%2FKfbK%2BlAO22k%2FrpGdS0SiC0WqqoUD5Hy%2Bv7O1BAqSQOpt1Hfl%2Bhv1FJ%2BkX%2BzHWd9DxoXydDz5Ir%2F7MianPgWarPtZyeldnMOmAjTqdYHgT697xCsOmjgCTzLd8hu54rH5zN6abBI76%2B43gD%2FKfdO5%2FNTeUupWV%2FqtMHXykcf8ozPIsh8jTUkrF7qPPK38pfI12nmOvcNfok5IGvxfHTMe6XNgBl4P2w9vEQYbAk5HhC5%2BkynxG6aXkS6%2F1%2BySFKv0Vc3dL9kDG3waCisSwxnP5VnuQHZetJW2qeTuh%2FwmHshAwUmraOa3Pua14%2FIzo6qvLPffrpvt4P%2Bm6Ccwyr7HxaykT4hJmSb%2B6m5sJO%2BsSnPMSqdjEB78ohaXm%2B3OT00UuLnggD%2FmBypJWO802XgsECBDOBheZ2Rk8za%2BqynnOVDTh0EuUbNlXJDcT5M%2Feaxsb8osiWWSB8AX%2FhZ2B%2FJbT%2BN7cj9ZIfzmwjIItlnfUXAhXI3LadkYMYaICHjgxS52V9N5tVdV4eEjsMM6yoi4JTruArXz82%2FHdFOpTPHHbAJGFUEn5yvcKG%2BjrzNAjeV91y1DkSyVuYLYU4ZmPrLe1ZhZxK4JauMzNHllHCMfMlf9qcAmPi%2F4sgOE7aMJnx1MIGOqUBNiSFDz%2Fk1vG%2FygoFbEiyKauj2RptLNDH7dLh4U1FDsuiPpmuFHIPRdugwTqhto0vUtlYyq45pv9N2nst%2F17maisTy7SaQiurV5B8Nha8MOkP3eJQibxCb0zDfm75xDUbSX%2BkbmXR5645bcecCDznfMHPSZY%2F6zjGmu0xzFCbVj9S6HmJqfL10yJBUJUb7V3wz4oYBb6BAC%2BSe4qHFnyRJv5mFU%2BG&X-Amz-Signature=43920f71fd132bd6492c7ada3e7a0ebf3ebc82da914fba7c7bfb70c47f939927&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
