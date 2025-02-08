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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=27acb0db2002aa347f957d622a0fb81d0c92399626c88cae552454a43746285c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=7bf4341e491d525acbb11624adca64f3bd4bb41e6939bf8238811978ed3131dd&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=00ef3f6ef68a2445db75fd386b93a71fdcb2b0bc691d5a781d4478f4aa1e101e&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=f335bb2751d651b55c46b7ae3b47a7fd900b282b15c46337cc71f5b0b50f8f7a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=4318b9c024a47dad80b74e233c9268069f42831d8bdc8be7ff73aabd79a18903&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=4dc5521a64d3b4cee9a9839b151a3c511f110955655cbc027e48f948b8a18e77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=f974c036ddecf20c85857fe337e383bf38caa94ed5d68212b7ac01a094a082ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GVWL65E%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T140122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBCGs75%2BfMK6E0VgZjPkvTi3oy6%2F37JMXz2jLkm5BqSsAiEA5qp7oGe5pKJ1Vb7eshFbdA0pkXPRICRafis3E0tNxtwqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFghkXbHPwNnDOxiqSrcAy6DxRMWmUtZNJEaJFZNOO85bonZOzCC5RymiEGbLsXtntQiYB%2FNHUwjauV8vjKrbYCilspznvoFAwcYpOy7IRUHNtRxJMTAjLJW82gC5u3yyV0zugRlOgKl%2FThdrga0lJ1feylI1Cr2fDSto%2F%2FMw54fs5oHHReFeKwqo6BS3HU7yRDqhQkjuTSgu0hVsSBrrDcJtgH6HkQV09TyaM3ramVApQ%2FlD9CqGWNvwUBSpMBy%2FOdXV5Xi4sJKiv06f9WTmVff3wD33Ur%2FT6913K%2FOraW7HX7cDac%2FIyjssKjTY%2BRZEaeirInQytSwMbH73qkuQG26%2Bp7OocinxPA4ZtfmoqYWG%2FKYPC1x4MKVxx%2BZANv6nGJ4JCcrKaM%2BnxBVIsfMSXCyBRBXSdI%2FdE5Js5QL3a4oF%2BnOlQnVgWNPUly4P8SakwW1%2FU7japMKQR9jtcQY8crUBjy%2B24tVxtdNW4bNDIq0Gkl5g66xpcLhWS6%2Bau0SuRxujeGEzT4xfElv2Ur%2B7WnyXS5au4QZTfPcaHKH%2BfzhFPsGhNLWSG0lXFr0KN8RerblSzWkpP8OaBG0VLjTjL2b74SGlFUmXPIMWO%2FCgnv3jCDTNd2l7axg3GLLlHYZ175ebcpTn5NbyzNnMMqGnb0GOqUBtPjeDJHQNAARLrMk%2FdeHYrMtFvtJ8rpwMD532GyapMklc9pF7Jo%2BQQp60c74eUAzu%2B9Y%2B%2BhhFYxDi%2B%2BWWZq%2BdPQsNVVCvOru%2F8bD59YmKx0y0s6DXXuZgk6ygc8yLCFPytJVZsWIXcZCyVsqvegEVYPR5gXI6PAdDY8cSVV3O%2Fn%2B7G7eDCn0eBnLvsN9HD%2FHjL4AmLYWKbH0X1JiMR9pGM%2Bhpr8F&X-Amz-Signature=e29c3cb9dbab257bee043b7eca579d2241383d41befd0940f893d2b83e72c214&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
