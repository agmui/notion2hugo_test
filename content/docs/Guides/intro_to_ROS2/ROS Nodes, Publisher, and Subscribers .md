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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=e7d1cd753364c7e1b36d507115dee97bdb3447c95c2659ddb9ea40e5c98c13f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=5b0cdf3c833ffe38a86a88cc71f6ef082cd68d42982e06e17473af9b317ef072&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=99e156a119eacdd1a10c8c434d6c3c3f220852193d3085d35de663fe3d162011&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=4edc0e1295d552b26d0a6bbeecfc285464f377b3fcaf38e8a89a530325b5589c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=7f0ba839b19fb50b4d9b3d95ce6b23aff6bfb1358be89999c04564e8b8d59d14&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=4e6915808dca7808b6ccb195838f61b522eb4667084b33fb0a5fe2cf0e32a46b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=5dcb74a4d8717ab006c264a47b6978b5fa3fae3883c680771edb707dccfc8e03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LFGPYGF%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T003841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIEkKjrt56Fopox4kwVy3qSIK%2BHRk3lGaPXIIiX1D0QMWAiEAnY779uySPuU7kCgTRLfXBlrzy8KgfE4Ya0DHqEyd%2BgAqiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA3qkchH1puyp5DDKCrcA9rr7RORrFVfbePfwYoe%2Bh7Gd8SGQML%2Ft2d828HZuFZxHb9BF9BoU9JG1DWhHqUYp5XcIf%2F8OWkjOvu59pnDU7Guq0TYOf0P0qV9SSCWtVTMnqKrJVC2fFpUVspw8%2FRh3bZab1wvIV%2FvZ1XbSTw0eB7dTGg1%2FSVhtKJEa5%2FxAZf8iZXZkxv%2FURJ5wO1DKoqwW61i8D4F9HqRwUVFveVTYJjvjdMmDS9xrxFBFFCeLm44Ivl2X2UJrQzJJIRkpV7Ezk9iE68FWy2BMpmlFkRwYxGwhnJ7Ylvb4AAm7%2BGTCwDx4t3TWR1AEAJ%2F8GwzcxXcrR9ip76tAvelMkPF4i3uv%2FM6QBsbFxWTWhAugVdtCE3C72X82uw%2BixSMbUJDaFKdyDzlfX9R7vGJ083HZ8aMrvMcLOFE0hgwrwJmcWG%2Fo66NEy4LmVm%2BfxT70hcjYyqarsKOZs9osfUQJhDGhJOyvWD85HK13mgrlv43ZqQ0vWLI0jFSsZy89td%2F3xpbQzF05W3AkQk2Ejm%2FdynRcmh2%2BO9lrJg8dyuHybvAKLXfOQRaWRaHq2VJIA4dCG%2Fu9eyMo7EKTdm2dMPGoS3pcIpVf7cBN94bmN8ZqXSNNHizlGfsKmqSvX2PKtTyMAl%2FMKavt78GOqUBefbvOjNuHCwqjmatnLExajkn4RFro5FCW1vVAtVCrECFrCQUWErSNiXCOIW2F4y72APmWPL5pBlij80XOXIBny2fAMt5LEPRKDNLYG%2Bl7htynr1R8Z6tWARGhvbjB59rhNuA%2FR9OZa%2BoK28nMI4vYprmTfRFLducngKQaPcLQvVIyjYmSCdDWXMOXR4ntsYBW2usoGh%2FXGf2J96I1tXKKE2kWolU&X-Amz-Signature=f7081c15e3220f9ff711b306a5043a71127d593b6fd51b88245d758ba9466f37&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
