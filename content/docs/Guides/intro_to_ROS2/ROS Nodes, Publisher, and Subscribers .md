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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=f6354da1afbcfc508ae54b96d01dfe9eafc1def22a3560bb7789d9dda1e3f5e7&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=563fcc02a1d85ccb51b1758485801df580c4dba2a588ee5e108ed2579689286f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=202e88a750771b8a198f6e032e442aa12022d73c2c2c66875e665ec7e3af92eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=8a8c378e7b27fe868961122954ee0062e077a114b55e1cf8bb9c8e828a3ad623&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=e7f0a7828e6e4fffa85fa5152a0cf7c559ba5a7432cb7334d19beaff19330de5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=85fb5afd96b6dfc1eac59cbbac428d8076c3a418b70225587c2b8179f19ee934&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=8f3833277b864c72afe705be347abe869a0867aac1c051a48c2c0b7d69ba3a38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKUBOSM4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmklyt0sMZBvvNyRDioYcmPaDs1QWHwZJEr3rcm1s1SQIgPMPYFyVkQv0kkE96UcEMlPz3y5M9%2FRTRDNNfygRU8wQq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDInTq9DUemR1xafP1ircA1NMywpwVIL8EBXZPGcuUsZD%2B9jGHTK%2FyH8GbcGylMyW6eAzRqt6gZFZK6GWtxTQbrs%2BJv3M4WLcktznxHKR%2B2PHRk8q5%2Bg84Yu61Rb8km1T1YzJPkt6c4Hb3gBOxBb%2FvAPmtDAjdbhornwF9fPm57vEQStGQrRggooSyE%2B3CcdDw7etoy1KlTIybmCA303kDXuQB%2BIP47uzzGaFzyFiDBnyUMfNQAz2r24k7DGtnPvDLYu%2Fz2%2FUgtosxAqst%2FcUs7nUopXtQvBrpLL2OerlBGpz26VG8fhiip8RrZPCXaB1YIjGl5Nv%2FLa8S3OJsqdMqU4isdFYu7UzZgGkBpH3YcOpnRA4bpgujkv5Bc2DZ55h7jQCPfpa3xk3jgmD8bZIGFdBfEVK41%2FlqdCZT38Ti3Pi9IysVGceqsohjHifUfDsIHOeAEtLwgnSIeIycKSymcJSNY7IzsKtLPnWPqyJkKxjKsqN1NtFwM7O6pL4ju80a6vfyg096CWO%2B6N8j0qQumUIgchtx%2BWddWJ5ub%2FdlBQBA7lpqUwJFyQw9kfIkCORiaAYel8IBjgqV7Mic%2FBawxFg5H7eZcFjww0AdmaPL%2FHkRWPMjDdHQJXRsSd36hwh%2FklF3YMJBSUHLZauMMLW8b0GOqUBh0a6hgQZjBy2MEv4mlKW2h%2FtHSS1cM%2ByEidW0EHpdyMaLx%2F0SlMhAcoi07iCmpk%2FJ1zZphzdl0ZipadYSwDz1XRGgEcZJKkTaXoHF9mxgWMF%2Fh6QDWtXuJ0dYu%2F5%2B2YdJGyGCpZiYT%2Br832%2F%2F9qtq%2Beteasa82NmW8CVWvU0%2BiZSvIA0gthdN2yADZv9Eo4yY3fTn9m4GapaZoG%2F76cFKlbZlHPL&X-Amz-Signature=439430e41cb69fac53627f61a04530d9413dd43a0f5fc24c7576ca62638aeb4b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
