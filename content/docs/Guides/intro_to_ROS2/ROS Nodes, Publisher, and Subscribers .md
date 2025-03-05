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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=f4e8720d900a18cf5e14e849b2a9143340583bd90851e06b3c4eb25186514fbc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=b2b730d0f8a7ace08d8e7c4ce8e869a5e33a58f9f4acdc3b67ac1c37e9e1fb1b&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=300ee40744a5d163007466b578c81a30300d278485bb044e14d53427473470d7&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=0bbf832f503232d564b9cecd23209ad6ac1d806f680815772288687dfc22457c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=e989f579fa103cbf44a4e38a786bb08f67fad4c14e561b0e26e331324ba453fd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=a9a707936c506a222201976925369c03f3392fcf4f40f43df1cbc6857c0383a0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=b974d48eb1fcfc9a969c3895c06ef440b49a4d76c376520bf2b68d977c44f0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZPFTN5EU%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T070826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI3d4LD43BzSRsqBTonah69znm992%2Bb1js1bUUrokaJwIhAMScC5T9N4pcETuW1TjV%2FBU7LjEVBwa%2Bl7emydkwluyVKv8DCBAQABoMNjM3NDIzMTgzODA1IgyzSMispQcRIjmyVtYq3AMmU21f7Cv1bHWmqbKG3KTz0MeOs56lhKDhiKo5zN4fJ%2FBAQoAfsZPsnCLQtWYg%2B8COLIAha5NYZaw4NwkxLEK6eAuTRq8Jwyoo%2F9mTlDKrbyVjEWQ%2FlVGpvEtstxLEjpp%2BEWFegxYSxviGeumqwPS5cslX5ZB4EVWTlXVhEvdcfFOBXusXD4aUWf%2FBJV%2BXOTnc364fj7f8aWLu3mYoCvYVW3Di1fixQDXH0wJ6Imn2im6FjOSa8QGoPlnmRpmmjyLAlCtQ2O2%2BdOULzQwKNxXffZJHqh8B8cAlS1GXFbMhGIxHSvzAxUsghiwhD2%2BYdDIHkMALRj%2FU%2F%2FjtQLDoO4ZT3xPH3p5YYv5k620GUjbP5qj8IljMd3Ml1tiKLnOLo9NSqmGp3b7HLPuxpc%2Bh61RtLq8D9iIGxP1mit8jIFibqNlsyxJ4IiDQ6k1LpZoAwZGNlFk0LOIUywYPzok1TKqnRrJUBu6a5cMWiAFcCZ%2FCqyjCmk9NcEsnJ%2FzcMM7xj6Rff8bCU73plUTtmapQczvahpFhMppO%2F7n36MHIyx0GqOr68fcHd1DCfqJQd5U6P54TdQ8OgDJnWM9mgzVcf4ABdHfwipfKMz0VvXwsNp3jW7G%2FhMvP9U6%2FuMrIuzD66Z%2B%2BBjqkAYTAk2ZRnzgrQE6XSuqPjRCdzZCBRY4kAmtz%2BryZP55saSk78GA6td3N8Qm3EXx4QesP7w1jSl%2Fd%2Be6SULsFwQ1UMxmXHutA4UvqZ3rgQ%2FYVNYEo4roHw9l9i7FsAbac09nEeeunAo9YAMhUTdp1Yu3cP3TVtmY1oqgDxQsCkt2dFlFgZANOimv6hKk%2BElec8cvqk4g%2BEJ1RhLzme3GoCLVK76n9&X-Amz-Signature=7c2470271d162fe07fbcc971ed7220612badc515dfd9935180e235175b52f384&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
