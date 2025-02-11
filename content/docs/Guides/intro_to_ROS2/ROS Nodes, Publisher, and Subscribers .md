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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=09381c0beb9ffe1045bff6bf5588826f2166525085691b1f3971044544129d6d&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=fa734e70a2fafad0604695dc2d44b57da04876518298b6a7f08426390ae657d8&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=862aed5f0cc3f5165ef37ec120b226416780e6a7e44cc46e4f9f8ed8ccbbdc15&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=2a63bcaa38ce3477db35afa9f7d6dd10a47fe25165580e2dde4896a6cc7c5b52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=97c41f673e2e2eadadd2331514225fc00047a300c10accb1db2358b0f38b34d0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=e10e5bd174adcfa23daf815471d0137d3ec061b9608f96e6a45678cc2e7582f4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=bd78dc6cf74b7805ba67d4b5cd4a093242f0782b22b8506296781067dbb55f5d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKNPYV6W%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCVjuEHVsO2GpMcSceL4QUUyU0gebZ2wnS1xEjQFqjYfAIgYvE%2BUdCr5u32SewOouArzKrWJ5LID4y1Ezg8yQa2uzMqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO7JQBjlnpBD0cxHTyrcA8%2FccUXygbMScQZocjEZ%2FuUKo3jjdZ7pvvXzPAJGlwQnqebqtUYBgFSk%2FfRrvu7yFVxC8jrB75oXtaiW9uJjMOUxhKumYr5K5X1wCRCtrUvB4AP%2BJDOAiVtPTuMIObEHEhMaxaIOdFNGN5TW2HNo0Koq%2FS6A1UN5Lqpv%2BBpmargnFRxLppcE4fAFgIbOqxGx%2BwuaRDeFQncCHU55J4VZ2ozP1qsjlITLGAsfK%2F1HU%2Fx9eHdUek172KzGlWagIFl81DssHbquyIeTyZfW9GDtz4KzoRGZoclTQETYjs04DSYahTgebDFkgc7zp%2BlUmyMyIqpeJVeY7fqEo6IrsxUSMvi9nGbYAJVXO16k4XCTtdqwm5qo1hyNTGsGlEJIabIkKVHgW5XWBsGw35Fp9ygQw%2FzD%2FTm275K67Yeb91%2Bq0ZErzZjTRXrs86z2Vfn4HMZzIHhO77rpypPlWMyd02bEj0HFMEUFTsK%2Bd9zLJ9jXbDMOC%2BpqHl44Evu5PSATrWNadq3SsfLTE%2BJStakB1aQrlcu%2FtMEBuRmAM6w2WQomqtfemQeYGDR7KjhdlX3HooJhmYoq7zAeFngkjKdt04vUSRPT%2BCsTNPNvBsPuBo64sWXASRqK5vqwFoMnuVPTMMOBrL0GOqUBuIfU04IiC2ZmEsohc80aW2cJs16zq%2F1lovjn3PuSopM%2FThDC5tlaqRzswSgqhkezyfGOtnEPJbPPxkN6eZVmEJ6Et0atqFZqOdxUCrJNX9fRdVnG9IMxLMrp4PkOGYETrGugjrMYhjwn%2FnYo08EO9vOz5VtUYFz%2BqbHa2UJy7kPuMtrm6%2F6YlJuCsC2Fe0qvrAIqcQwiRs06roAzgjL8YbcDQp8R&X-Amz-Signature=021042c4a84be23ca7e42a8be2d209de08cc07a3e522af402522d664ef6d0fbf&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
