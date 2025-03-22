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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=859a875b5f40b50824a2d6ea50e666a6ba4ef08ce1f6b7b94b3c578c90aebf37&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=71c2d04d694b669907208416e035c6b7651799c25f650cc6da08ea5c836c9a51&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=b2268d25fcd9cee4adc9a66393d29149d37815e7ab8e611501bc53db4191d632&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=14ff1f92d010297b823ee72d8ea96d4a80769bcf9a19e3426b4126d55ec20c86&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=8d7b9f63fedd4c43b86091dafda53a9a6fd89ea2ce51afe9d99ba9f4c691600e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=ee16a38bd1e7765224b0f9cb6aa89643e050106bb82ec8e6d80e3bbe938551e7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=c9c27fa3819a7b3469d7dc1b6fa287ca14f5594c9f90d2b4300089b1ee5f9a3f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWARXTG6%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T220200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBXCDAooUx0dGV6GOFwb%2FiU9uIz2RrI04Frtozm2uG8vAiA6xZjTZVzHuWO%2BoxhdDggk%2FVKCNKCCr%2F86FNjJqhW9UiqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3wpmpxJXAZlKgeYfKtwDlndTQlGCXd22Uoa1Ip9kTkj5xEy2QfDxpTLUAmlb9plB1u9GewBwFX2mIjmDl%2BjpDoEzl%2B8snWeV4jsGtQ0KISM665xwHqywk97HIt3ZvaH49V0xG87OlSOwro2QmjE14bjzpFFiwCPwmcdA5uSRUsIlolzBOLfbCMZpYiYi%2BVbM5vRNvL1fpsY%2BTTrVBSYe7EoKW5iUs4d6r3vLdcX6UFaTveQCpt8VuiPbdKsrrAKbmJu1tH1hcUXysr6GzekolSGDFOvCAgBkZwBh%2FoX2hOJgDm2pQnUXj0aqA2B61EqDbTwLA13yehUsyke0Ie4vSM3%2FffM76Gn28Gacwvk%2Be81o8LW2sTuW4iKxp6m4eswlLX3YqM%2BKc6DZOraOZbEJpe1aoDV5r4Omv%2FObwoubTjLvg%2FsUjfLgh32CVQXMCgLAiucBwLEVqfyN1RxyV1TbQvVAsNdMOXe335Rde%2FfS6KfC47KH2y06E53DCQov%2FISTktoMWqviQoOq%2BoFY%2Fpjbj2MIxhhQeXVvv9wwMl4hKoKJXBIdFPG%2BzoHOlZsSNTbcvh7Q%2B529tIFq%2BVVQF9l72PYYGu8Gw2l2Ba%2B0OjYsJSC1dBee47%2F3dZwTQIuwi8y7yGXXhGr6fnxqxoswlrb8vgY6pgEZMgHkl0MQZ09zHuH4dmP0pZjECCoq33795M8%2B6d%2FDT4uBaQz7H5CDskuKY2zr%2FPbY5PV%2Bgx67tApTvUGqY1B9NkGEffhPScUrv5ijp1FUdWZykFz4ldkDCihMz78YnFp%2FsYfy3BL7lgdIaIaUPZ%2BefSkhhkPuaeLJuYNe%2BEEpO%2FYTiZGzCDhCzyfYCmLDzEeCO9Ten%2Fga9KbPtFrigtIged79Aj39&X-Amz-Signature=11417d2a3f2020aa65e097ade2cdc0f9ca02c4d708c7149228398091d0cfbd64&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
