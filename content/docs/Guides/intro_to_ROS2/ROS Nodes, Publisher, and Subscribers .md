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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=4332ecd872b2931a5c65a954cc32a5fdac049798d29b916e883e4c0a02742263&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=312c1a9fb1f63ca151d14c29e6f667959f7d785862661251368572c20629a221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=378c1e568d4e81729962e5e4b397c6ad3e4818c06a2ea83bcf930f703d753b93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=8680ec82338f8fc9fe276cbe7242d64f3de3733edcc00cd188217658e5a92ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=f4ef5a77f74476a57242877480acc6ff21fec226f93024747d1e29386397ff0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=9a34b9b1b5621a37166a21ec4294e0cca63b4d4a25af9e80f3ce840d706b272d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=0e9fe79f93a8f6d29f68e5cb3397f9e579f4eeefc1033b44a3dfbe2e866b072d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SA4IS5R%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T081353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHOGWpUy%2FSkS2gdSGixAfSxtfa%2Fvb8hDjUc8tw%2Bzo4P7AiEAtFdB0GbB4lnj15l%2Bu7T65JEt6WYaLDHGf8fs4qZdtesqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxUhj1oZ2vkvplcdSrcA%2F1Tbq5%2FShsLsGAlLXmYut2nfJgOWcsN%2FED9zKEpnMlhfWDwV3Es1GbMWlemq1dbWBr%2B%2BelNnyTKnOil9G05JQxW2oIypjNd4NVTLbmGLCuX8t1UQB5qVdsBI%2ByKECAwrWGdF8B790H5PFnUi59RrFKoEfa9EAgfIeH%2BZAjpDV1Q0D895isojIeWGn32a%2FTCXZ%2FBtQRfr%2BEChqIrupfin2zaKAGgGoK1Bv0hgIo6RSfxTWrvCyYFRUB0mGt9OUl%2Fx23iHaDkVNQFD5W0MGVyEIJXivtI7Udkttbn%2BLPBikGC7kc0MM9YlInuLS9xYjbFuZz3Dzn4MyLuV%2BbqcFbk68If8Qx0nwQvtnRpWOnWUfaxMPuzIE1B%2BzOZl45HoFVhrokDZ1DPoDV%2FREODJmT4xVK6TnSVssQk0ZRSpiQ7vd4N4Cu8jlIqpaW1SHsVD7jGINC4UwENteQrOPrdFXCQrBj8hhERWFmm5D1Ly%2BjeO%2FeDu24NLKzOOyZKJqpTzidTWB31h3iISb0gLEbXVNVgqe%2BZs4KqL51hwEta2hqYgO22LF59JCdgg%2Be7lc1UsjZBQJ1mg0N6WT6PJHwsxO%2FcDVxugiRnO5pGczfHFB8nLQZ1RIWO8IwGFhsWnUOOMLLrscQGOqUBK6PJ%2BTV9LCxP0i%2FFYTU%2FLO4BT3YFQaMmY5D56%2BkT0ogzC72TidWSjwxbQtCLILRJ6TehcLNu%2F72JarG3CK4x78D02Wgk6lYIuSh5HweahFssuG0G06HQ9%2B71YPb6qMcRdNQR4%2FJFmv2dmp3YoVfMMeTgXkhoCo69DRfUXPwR8p%2F2x0Jq2azARF2JYA%2B8Mfdgw56UCRtsCwy9vsuNb6Zu9pPZ5UpM&X-Amz-Signature=c22c70bd1386bdea5d157cf785b6486b7952ba1a703f5c9fa0b81355f1298de7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
