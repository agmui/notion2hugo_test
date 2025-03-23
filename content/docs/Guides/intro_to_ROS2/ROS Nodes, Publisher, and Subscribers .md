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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=a481e8b2ac83612359fa0f04f7460f25e22c13810c9637031a89298e5a4eb9e2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=4eff442e8712336fb60d18a0a4a29da00b0ee8a71db0ff37b2005159464bd72f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=7ebf2ea18bb54f862c820cdd839c81c5b18a3015b95c8854fb213fa3ece74892&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=55b15fdeeba1d9b0c9bc40609ad8ff15c8668ee54d72f2f51cffe90d127ed4fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=b75aa50ceea3f45c66eb08455ee9fc5a2de48517899f9db8f4d5731ffd9db10b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=42b40bfe1aa885e5126b934526c470e64396c5ca7b7515947f8e2a820a81defe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=822149ade06de3e2973dc2b009efb05f0896e2e1d03251232a8f93a6c37386b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AO3SWET%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T004201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDhKM5TGy%2BXDB3Ms597SKvN1DL%2FtCIe513Z58HGcwXXbgIhAKCvO6xWUhRBq4wtWlQFU1xd7U8wNsQri8OVE7s5mHMEKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1llB%2FiJmHM%2BGAd5wq3AP8cIzBTxW0Eu7BSMxJWmGi1GoSc5UIreyLmDu4U8KI2ik%2BPFlrhiBiBVWdxKObcxIT%2F%2B7DVB5GXaFrxNDffwfeocOMebGkPODMrbrlMpj%2BdYWC0B8qWqOvmp%2Fqg%2FUnLyRghHVF43OIu4dZTBzeVffUWwlElapPUVymeyT1inla2K11bCZEObw9Y3noaP1eJhutwmyXgqdcKsexfzKhAty%2Bx6MD7gMitER4VPNATdyYrFzQehpje2FxLrP%2Byg%2F2I9G0dNrMqLg8N%2FhJwGafx2QCMZ2xtrZckewHmb%2B8%2Ba8xZUusKcCCsZvHddj4ANpZlI9E%2BLw5QMQZthINwbIEUmf7AuAY5rcPE%2B6TkyoCbJCYyjgocMiDLxfNnDo7vimi9YkOMDq4vhGHEapQv%2FifUBOEdJ6Xb7yi%2BfPAg5ptSkK%2F6sV7IC88UyYBoolgwNhayKctopuxu32Y9Ohv%2BeccUkzP2prX%2F006qYDcVuhxBK95Peki2s3b5ymt2dWAXR4OUNNseL0BhK4zQvvhXLkDhV7P%2BJEjdCgUqtNzw%2Fh8p1tkHSQuYvSWb0KelpPkC4HxgfYET%2BiTBtA31NXlKue28GWtHr%2FVx%2BB0AY7GSoGmnc4Kd%2FXevlgIv%2FJ7UmtCODCktvy%2BBjqkASYUH3TzZXFVpaKMLZRg3khEN0gNSTnOdE58BWgJoiBmj5ofjxTQ3YEeEDEcixdt89i4eTJ0hVbg786fpQzn2OTXyekWb9QfvRcHALRd85m7lhycXWXEGCD%2F1I4vYgBITz6EYBFhJPaIYtr1nzZxvK9gQmVuGOoq2c1cgPX7Abckfki1muAd7UkzKrXK3nEtdJHjbjGJcUacNGxHVINbt3NVcn0X&X-Amz-Signature=16e0be1c94b6e8e4400b9db94d08aca01b8ede17d4c78adac227c0270c2b93aa&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
