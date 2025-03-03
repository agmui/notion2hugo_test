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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=bf36d51898be595148f15cf011114c63902d3afa9f691b5936510efc2a69ed0a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=59cfc41ee7cce8ddce7686372fe1440ab9a4176a19c7225cfc7c393310fc3e69&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=73dc7bfdf7a0777359b12d6713854e97342a0a77f4f8b0f745b2e6be03deb165&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=13fb8f384e32b959663766d449392398fae33f4a6dce6899289f90ebb1afdeec&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=388de3c201ee360df35a4386165a8ecd405714ea6097ada81430ca7ce7b04035&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=81ee40e786a99520865e674875aa1eda6d3ae752c1f073729ebc0f87a20684af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=5a2408ea666064de6307fbb415873019ba6e31439a3234dbfb5fcecb75acbee6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4WGYH3B%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T050907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkrhpayzSsK%2BfpOPW88Wyse7oB%2Bb7dXS7J0E3PrCiiowIhAJDK16rXuIYx6252OLnaWsEPR%2BfKRZYt%2FGbv7zdJSfzvKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzHp3n7B6lMvE13VOcq3ANBkN3%2BDbzx3enkIpiRNwq3hI%2B3FcbDXfDjSbVGQKfxBi%2B1m0IDfriOPkjvI%2FgaN2NWoEvdhZOoKPM%2F3%2BY3TyaLmoqIUi5ubhW8lWxqyYqJyNR2lvz81ueONCew7u81X0jsRIMVNj7OuXk%2B2e%2FCoWCJ7JFEO%2F%2F2TTh%2F87eMKDLVzxxQcGlvENW2B8qhsTb4kSM0BL7mrR92Nd3AjtXvaVHN0s5wj7cfQQWcifYFe9%2BUroiCp4O277r%2BahEwztD4U4Kq0RvdFFCPy1a07%2FxtCYJA4mriY9onjy%2BtHgcAyTOMoe8ry4GqCbxWCwsb49xDcUupXYy%2Bu6NMVaq%2BC1V08MMLHadFNDFQswhKj%2F24aw5SkElGFum4VRWPtsd%2BJ11CuPm4moNA87VCjr7ikqFu%2F%2B5tUvmNeqU7h2RR6kfqXIuomDmI2RSE7pVCyFYSCJnfMJUepSiwbzy7RtHqMvhwLD88sYI6u6sCxb4qEMJUnyjtt1T%2FFSw4P0K%2F5E6ayij%2BjG8qhoSL5B4LQZOFKJZSJb0%2BbQkdGn672AfBy6iTq9Br2%2BOGKCZz7qgkMmKCSpelP3sUD3vbUA7bF4ByooV9UqXgdnriRjKYvrQRE23K2q9UQrWwmLobBviHR2QP3TCv2ZS%2BBjqkAUPVdEjzDKCqMU%2FVb9nXpl%2BAK8ybRo8fhSxgMk9OIIkbb5RqCJdf%2BgtfD8qSqJULyrLRP1E1uIqip76D3YPEk%2B%2Bnnj6UdsZgtcq%2FrNs9vHnLAMs5b4I8usyFW9L7J%2BAVZHKch2wVNxcMMU5SjKhcZ1ylT69HZupKbND%2BKqEB6fgo5D5xRz3yUhzug1phPwTQQz3E%2FJPvKTiBw1pPS%2BKWewB63kHQ&X-Amz-Signature=7411bbc6b4467c6bf56dff69c5b0889ac09e7b4ffa2a3628ccbe4427848de995&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
