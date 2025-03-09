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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=ef1ef26753f6d916816f725dd9aaecbd20a7fbd84e9c52ace42e49376e01b558&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=7e5d1b884a34fdfd3d7f54b649170e3b44697b362aab5340683a2889e38e881b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=4278363a132361db74040510b00a8f6bb372432cedf76706b0fadbd8c101250f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=cc0fa58be4036f682ab36bdff73aca487ce84817af0a813d882ca39589ebd67f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=5ae6b081a32de67041bee94f38b100c2cf161ec760551638c336d54f6258c644&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=3d2154b99696cf06ae32a6e8a36d4971b2cc69f85295ad2d935121c09683a051&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=5b9e8ef7d5a32a0d7bf69ebfd8597725b9729363a6cd13c81022fd000858ec75&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673G3LUFY%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T230137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJIMEYCIQCAHbR0XWhrFvtWCGUQ%2F3YE3kUslMnQ3awjqMAW9bbe0AIhAMsFp5OfqrgWaJuVpnECx3JQRLqs1b3eW9eVFnLr1b8qKv8DCH0QABoMNjM3NDIzMTgzODA1IgyA%2FLP%2FPF50kKTD1ukq3AMf3%2BSel8dujCPEwHpbhI%2B0jeUciiYvjTT%2FzkUrPBJv%2Fm919nC6Y%2FY7qotsSAQ6siq3FoUYaiXzoT97ZiweuzXefY8ZRZdEDw0l1uTY7A6Ox%2FHz%2BDS88h629Oz%2F525DHm84SS4r4sh8aO2NDApphTyExK6oWvVpiNCf17GR63lkXkt5hg9lZyXcavpaQt7iiYG5%2BZYJdv%2BvDqywXsQp3biCegZ35IZQIgHRiZ665la6TD9nNO%2Ff0OplwQv7H11FO1Z285WCZmMg%2BLjhj4lwdXAqXyGvb1LFp148U%2FnE5jo3oirAygyEVoeXJfIYzcGsoHiKIwQavWzgnrknVTrmTgBrqSGLRIvPmsYCR6KCdMtt4u86A4tpll9gFqrbfdJ1iX5epTO3noiPSqPmshBL0GzcrAvUaSbZ%2FeYZEKBcYtDrncmbUC0Oa1RmyLDS4Kf5NrS3l7fYjLZuUdvyn51E9p0FLyiiOPm7cG1pvsA4j1CeowVM6Y%2FRTalPQD5B8nD3TS8Z8xBx%2Bxp5QLyQxePargWbkK8ZNMMTFu1Cj43aijnRjglF%2FVAoUQiplMCBOLr7hCYwZKr3i5gjkeZeM%2BsOGmYkGK5iPkIDTJ60MTEZQJOieTZ9Kb9N8y9h%2BoQhKTDP4Le%2BBjqkATup%2F%2FqP0sjZ9iMrp1mqgD9%2BkHGZ1zGpvLLPtUcJpxRKvx%2BJ0v48CBW26gx5D01y2XdTh92RDTLyYQfGZZwx23Ih9ScCGDuwL5q%2FG3vdi9BfW%2Bzsp%2Ba3i2z8VEW9DE%2BvGZA5YmTdxOLRvmV%2BBMkjeIZmbzOsETBnSkuzWOHl8STQqxhSV5b1IggDwk3PBKymvlKSk4SyjBcPeGoQXrCEljIreDYX&X-Amz-Signature=d686c3b350fab81705b1e25500579abb0fb7e4e647e5c8de333a3059d7b361df&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
