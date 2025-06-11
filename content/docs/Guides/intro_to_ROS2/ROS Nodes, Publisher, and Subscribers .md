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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=627891093d0ffd9dc1dcfc4ece0ba539b89ff660dc33750121b7f7ce4a6bcb0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=746d663cd1e88f99cdfdbcc2afc8309c83bf24f0d698a28acc1655caacda6b82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=43203f57feee0ff1e361408d3b2e94d067387ff6553fbc9d4308a3ee58e6ebb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=fc762a2d73eed7ab67904b2bb6dca6145451ab9ce3871dad902134ae6b3ed934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=4c7b9f127c36021fe54e0a6bfd50c125f9dbdb8c9486577ca0cd59f8603f4745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=25dade2680dfb06d34d2e26ba583e62fa9395a2f7f7097408899c61bd82500f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=4282125bd21a95ef829602e761f3727db2a4057b84446f83f9dccde336cb345e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIC4L4E%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T023919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBrNFWeeFQzQTGkJka7Glh1KWVxHjWf%2BX3M%2FW69bvKnRAiEAsFr8C4Wu%2Bg%2Fd7yl8OYgFB4C%2BozcEroUx4UKqEwgrLLoqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIN4070soOJeTABnBircA9Y3e3VAf%2FfCFCPnxlSpNhzTfXBESgxdMtEuEqk1RhLArpMeL0eC5t66fkp5AQzdhbP1fQm5AuC2MxZHc4acDo8ae%2FplTZ8q4fWpmoAGsYEskV87E9%2FwvTToYuwi%2Bjk1iba%2FO2F5dYohMgCZK1wsyAzW%2BjuVgfZ%2BKgGesxPtcEq379atUU5Nn5069JLm6U2eXvzupoW487p2pP6uSsuNKuOUzrz%2BEiEOnyr0ZXg8gD91flfJxSHI82keNRI1l3qgLCeTAjYqF9gl8FaTEjGz%2FcpSxVTe743RGVTz%2B0oN8GNhaJzfhGt0muVOMmFMTX7qsYfoJNAsqvN8lkPQCHbIlGYSE8hPJ3yWZh2Apyq9MkxQ%2FPcrNGl4vkeUxO%2FFHTamODQ3VBjWs9WxdFdWufDw3JXknV7AtpnwUDxQBozkSTSS%2FPyFsivmAzxE4WBpohX4S2Ym%2Fzlx4jdB9%2FY4uINM8xlBKT60Cm8koGBaNw374PuTiFPmJ8cp63UhyA4b4yO9C9gR5ONwZgvHqEmsnU5NaD7FzyB9uD4Nkl2sOEmRgxci62EJYnD7LoVeQns%2BcljpCMroaENaKccvyaC6hnvyFCWG9ckQxWY80XQA4aoXzgEV0xjuzA%2BcfWoFiN3TMIDNo8IGOqUB6lj8dPoiDSaxToO82v83FRB6Xab7DC%2FyMwxHPu7SM1n6uJKHd%2Bc5rUqeavNmpd3PeNTqbGYRZO3f6fiRXzudTAyWwW%2BUE0Y7fVQZd3QNSOHtxsO%2FnLw7Y7OsaLiwpGiajEdkBH6Rc6RWUeMMNLth1c5OwUgRT%2FukdF5RLP36sXuOSLMjXZMUcDpyDzNwM%2BEbZqWJZvpecyNjaezJrsDpsAjjKcIg&X-Amz-Signature=a719f10ffbcce75faf363e237354db68a76534fc2e8d4f9d4da1bd9df790b211&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
