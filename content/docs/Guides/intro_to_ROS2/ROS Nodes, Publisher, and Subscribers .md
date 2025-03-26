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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=0c168f154a8f76700542c0b5ed9beeeafda5017c5c6177dc90489effeb84d89b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=bc81e32f008d367d8a23e19448cb1621e9f87b62c79ef3c94ec722527b364d1e&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=fc0504c3f362890c013b32ff697dfda824c1586cde827755fa195593adac3b13&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=596f0cb6633fa79194ea6ffc3d7dab1c70f7bacf8a1073657ccb06df8498cbf6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=bc712dbd6717a3840b84220c3bf4ae7aa788fff22bbee5d806ab3c6fdda6ae15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=7d7d52f33751072ff4188a23d07796d389235b7c7f6f75087ad6d50ed63d24d3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=2435246f9c0edd27b845808ad115db92e74604306447cbed43e652329710aa96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXZFUJWP%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCclg%2FUOOrhEo9qrUjq7iQyviOGwZhZ25KwZl5y2Yx92gIhANXLD0sKQJ89OGfiHLox36iy%2FZ0N02uxqA9CryF53Zm8Kv8DCDYQABoMNjM3NDIzMTgzODA1IgwD9V8TVb%2BrNWMoi8Yq3APJoDZXW0hnbzShv9X58cVZ1fB87qXpE%2BsF3RZqt7WLhuerwfYFgsvRitxVgDtVkNlwQn73pVhzCP4H4w4NAiAB81404PODNgiOwS9lEd87zDLd2rCbSumeBJ0PhZShMzVf%2F%2Bto6ShZ4wQbYaay0FksdvztrKMr5199aHqk%2FDV2pcb65m3Y603%2Fl8Jf7eOQIY4KCFgmrkRd1yOBJxNY%2B1MJK2Ph2BFCnp%2BepVFz3YQix7b%2BKZFd8VWOmEsPCFj%2FimAkUTJd9O91DTt9ZlIZER5AB6K14tgtMtUWOK5yks1uflwOWZmx%2Fbo0eABaups9t7ZZUBQw8NHEO6Jro0ZZX%2FzkuoieIA0iSoTFEG43aqXEmJtnSEk%2B8BHku1efMazgm0J9eQLKkEZy7RsDag85p4OvzKvAeN2ravhLt%2FMFy4TJvKf5qVnhZg4FpuJ6Kl8dZWy3qiSMZdVHyfpmeBSredNrlIDjlMEkqkCmmRNkAYqwC1DvN6tgUxJok1q8ucU7WVaWfwsQNxUQUU8k8jFQTro3GpbT5ycBo5JuPIWtvZ2NY0E%2FvDTvs0b5WdLr%2BdciFvdwdlTjGw%2F5MXCxGIDK1IEoZPgMZ4%2BDLzWU7mcimj7NOBZj5KUPTEUNRJWrNzCI05G%2FBjqkAV7uJV8OH22aLd1DVCSco%2BCMez8Ca%2BWLGIS7CDs9JdS0YYEtlOPB%2F5gJ%2FG3bElkhx5SMXYPaNyx2UNBYZQ63owSULd8br7CS4umKgK2h0qvZ1ljtybwDsLylLaSbjxpyHpsnjABcUOICc2t%2FtTBiMaqKafHXuylpxt1ZaKFZbPYKL5%2F4gjNNVghwQdKBmrrtksgZi%2FJTm2SHl%2B2v3PfiBThw4eH%2B&X-Amz-Signature=763823cd4e3f331d40392fe6923c7e87d04e35477b185c8c6df7c66e9700f5f0&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
