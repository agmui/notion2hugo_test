---
sys:
  pageId: "3c4c951f-252b-4cf8-b94d-4a657bc62f9b"
  createdTime: "2024-08-21T00:24:00.000Z"
  lastEditedTime: "2025-07-31T22:52:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Nodes, Publisher, and Subscribers .md"
title: "ROS Nodes, Publisher, and Subscribers "
date: "2025-07-31T22:52:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=62da45d3c3ac7020f58283b9219b1f99999185f9d5ea9332918ac128ab2396ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=1ecfbf737cc5628d4aefe0647aa84f65d14209e0022972dce511bc3474e3f308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=961ea2603ed87e233728a529be0cec28e9c1c7bf2a23022a5f2a1f1dc085ff16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=25df632b9c818174c4663b4bc869656816748f00f7fdb6382a0cd2446612a818&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=e390222904a8f76710eb3c79804fc51010342c07af91e480128c728e8bcbd28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=c6a85a4f24ec959f2e97060b236d727549225f284fa245cc65c29e279f05f360&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=9caa4db85787a40523c772f829c62667a19cdc9c800ebe54d787ed3db995a7c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDEEOFU%2F20251213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251213T013849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQD%2FanfEi4k6waosbjiS8IxQ6BajjDAR2WRFz4cjSOjP8AIgIFcB4coBrZLcaUEC0cGL%2BtgzvNBtvwUacv0cluou%2BAEq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDIylONJ0S8FAVuR1VircAwvRcgH3X%2FrRNdDqj8dlplZICVh6V586qq1YMIuywwnBN5SHfnXHsPJBgnnxeAmwZqOgua98uN1WmZ0CaWvaU7raEMryG7JsQhYHAw9OHx3QGP3PJF99GXJWSUaHpjplNzP9xIm3S79rO4QZTBCc6gCWXbSoLGY%2F38Tlw7iojKEJZgWxlHaLwkfMFFtp5DoxKS8%2FkXsA12i0s93t1tz8LiVIxlNu5zrsXH2TveZIHYJmmp33K7qFUn3fvBjO1bspgzktPuOpomLXa0VKEuzn%2BTLbruJXroqDYd48IgWi3NodrV11rZPM95CQFqxtSNKYiMj%2Fklb6tREKnXygOwc9E38W3PbokmPOeQpmvfH9f7RS3%2FrZfTMozdMYc3Wis5jLniAN5IlOKFExYyX85TyQMTAe5uUh4dJQ2Xcww1GKLAC%2BtLQRjunHJXTatD%2F%2FikCRQzEiupVt%2F4s4wmBzrtdUkk2%2Fr%2FNVSvtW6EwgeXmqdGBsMifKGqtuc41Q8WGKZa6MBIP8ED7OLi%2FtWWDozhsYmY3FoV5f6qkZi1JIhqr9GKXdIhTYETGOGdzVsfa4rMC0vhwu87YA1%2Bp8tgSD7qJusElkoN60%2BRcRD61kb3B5HnZjJNWBZvajw25RxJPmMK708skGOqUBtUjtTbLZxEuCOfY5Ry%2BG8e9wjUkatBfQM6B%2FWma71t%2BTnVZ5%2BksIo4s%2F%2FK4VxU6tt%2BgFhdY1RS8IiLyD2KlZ5MRj7nwHrcnFKGPR%2Fd%2FEQygGJhpsMXRwTOXpi%2Bmi%2BpE%2BGgWvaikPWEON45zP47YXhdDm3%2BpNH%2B%2Feepg4cbn2vW%2BJZBfdgqNEmyHDU2xr5tGRr8UjL280JVld3FuVtwzwoSGIWAYF&X-Amz-Signature=ed6f0382d5ab617f6ec849bc237eae12c90d925e341709ffeaa87fc8b8ceae6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
