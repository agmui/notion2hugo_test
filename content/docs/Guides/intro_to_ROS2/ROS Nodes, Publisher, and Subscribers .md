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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=60724f87102eb6d843f1102fc00c374aa7a8f2efd090d4e124a1f8c2a7ed1f51&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=a842f36100b10b799f214dd787b25ee7d839e8842636ddf240b3f86dd1f43f28&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=2b0b5011a5230f55b0079d91fc0b7e8badb3b7141509a3ad374a5c96eab17938&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=a6563ff879a38b19d5460f3cff3eea969375f306041138a2d9c260000da25640&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=8fd50a65a933f79c259c647df7633a1e7bfbc5c2d1868f31bba1ed7b97290748&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=a04ad127f93f4b5187f3e317ed3a56f557b68b0bff48de8228af27d0f792b962&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=6fc668f1ebe880c8f2f7df467b40218fa1d6da93862dc9fd87fa41a01c4f24bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN6PMVC%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T110753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVq2B5pkN%2FHu8Z41eyvA7jZndAfTR1NVMLobQkVHMlsgIhAJoSk7uHnb5htk2BuD%2BypV7EL90EjvvtKalsRviawHziKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzaUM%2FMQqmzVVXyC%2Fsq3APGSIKPAsjN77WbQ3Gt2Tf4hu1LF2L%2BZJtmDQ1aQERmKrm5e0jZf7VFnXcj52zGkkPOuWWPqOIn01LsIt6ShaGKXY7uw5%2FOyfmZqj0kr6j6SCA4irwfXNwfifRYDlbwPLphykuVMroai7mE%2BwMXxmWblLE0vEEjcD%2BH34hcAon2ZLiAyVc8DzW1sVBsZuzjLTJoyHNUL5dTWiil613yimtplMBIWxD7WY29Kef%2BTg%2Bq4xH5ARhLqNMGyMS%2FEnUXIpTukz7v8%2FSMpxgSS7ojOXQzOpS3QWt8X06poO6B6cSfYmMIKnJKeDtF%2BzsruUfy6wn4aLXVTLYIZVXks8ugR4vFjkH8R30tVv7DO8U1BErEU4TI948CI5WWqVgYNbGlM%2Ffox4JZ8%2B2J7%2FNELyAE%2FgH0cvjPu3%2B%2FIQXq5%2Bd6H75tmKbpGAm1kDH1vI9LT6QQXZsDTvapepwONEZ9BRXDNaVroQg5RKRRPbhBaz%2FnjM2ROTiA%2BAiXpWEtlj9lOmrWk00JIczL7C6S5Zyw12t1b3SU7uwJrHtkvUcPvball8ISkauoHYYl%2BpmtlgaG5OMTxGWL54MajsI9a926vxDkFZCloFb8a5ZBg1zWtQ%2BWYl1iAhAhH54pKJFc3xEfHDDu2%2BDBBjqkASrhcc6NCypbOqlxATFvevavavrl1giQ87hBkgY%2B%2B1MgGKb4KrFnHEuKeX0QVbA2tFg5xWm%2B6X6qibcZWiZO26zcEZMvRspfEdnTGuIq91PwKSieEJ71%2B%2BfYrGTIXxEygChghrlEUw9Nhrnk4pnWhdVNnQqyVBigXv9kwN28HUT5I65mu7qi%2FsRMNat39zKNx8IZuUwqVQU3xG5zdi8YKQ9TV1eY&X-Amz-Signature=3056bcec80695eef84c1215e87ee3f693ac0987c1ab17ee985f94e418258d18b&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
