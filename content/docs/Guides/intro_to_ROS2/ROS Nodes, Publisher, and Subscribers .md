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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=ef5b3af83383919c16a11fa63f2deae21b8120ab23fa6caf23447d251e4cd96e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=8cb23083cadbf512a26ddffeaf5ad4dfaa04b28fbb9f7fd83718fba783063246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=214138a6cef8f80ec29aed87e4c0485e0fe1ebc0cbd35e07765f1de6cb002776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=35bde86e4cd77106d87e14353a224ec1d124ca5791ec71ef911bfef3507664e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=f152815d480200c4cedfd22c1990e7d68d1e37a6a62ce8106d6c74e93dccc9db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=0a2b1ab568e69afe488474876c90a78b9884dff6ab3c84d947cfcd8411c4718c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=290b70fd9f533f82d5454dc2f4c53ea6a4330fd9340824906d997afef7d2c6ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LLVD66C%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyafkI%2FgMjllkY8WuHIp6nmBQX7wO1M9ga%2FDaA%2FoezdAIhAMV3Mh4zwOCUNcordW124msX5ZWJY4c%2BEPwPwACHkcToKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwV07a3iABJjITUdUQq3APNdgXuYrB1YpqutQEU56lf4KvPpCDuCXKZzykASDUoR9AZ7RmCB3P03kjvvzYTpRGjFyZjkzti0VIQ7u2zLQD2wII9TQ3kzi6gFW4Eed0%2BYgIXCoYOTBe9fGwW1RXeQnhVZGb%2B6WTONRW7vyjS%2FokGlIhw6gJvLM0Ywy%2BZsmFphpaMn9aRXMQsCx%2FkeSMUFZIq9lHFFbov90kFDIm%2F2uz%2F78um2JAc9fRWu2NlA4KNCtk9mYdLa2eUpd5p5H%2FB8EeaVMgh%2BszB0dh49WWk7a1aTOyJs%2BDRAmV37mNHlMeK9onOOjw3UUEMiRRITPXAAoy1RV2DG3ONTCly1KudsqZzJ0l1JGa57YgOfsWOCYxKr3g3M0k7QCzF2CEprN%2FbSECKpCy2spuCr9YlMoS9GnvoZA7521P49HPkcEoN2Vv%2BT7dZvgrr4unoVBYS7y8LCIXmb26LCSMMUQRTyYh9ElfiyzzE%2BQZaT4HbAJNBtG9nXoybMzSTiAyuAy6HCBJk6YhBiEsR3tRZPQDNAlVNkymD%2B5kFAbHdN2xvJHvYCo%2BbSgmNVaTakeIqnGgFUeBYlDp6Wbgpj3QM7Nljbi5rB3qiXKciuOlx%2FDRCh8z4%2Fl4RrBfX8cG%2B0xLk0t%2BQfTCo6rnDBjqkAW0PnPEMdZeC8aCcc5sfNZH3P3V7z6%2FSUpp09KN5KxHdi3wJrCNccqrWaw7LZ%2FLve9KFBR5Y5SIfiTnXOY4jz2XjZLDlswi%2BNTxvg6sk3TcHyOr5wSiEVk3CZvrK4VE12F8RW2%2FFO1DzWIQGtrv2Ge4yEdASbEAaN6gKdMdEMUdkMZAXJnp4uhQanFGkIIKapbn59QI7H8RV15gxafE5R00KKbmp&X-Amz-Signature=d3cc52ab02b0cfdc0ef9c56bcff7ba739d74c0794b51760467cde7adc84a6259&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
