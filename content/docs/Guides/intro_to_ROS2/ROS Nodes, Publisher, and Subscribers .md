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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=f7141e697f1facdde2f9d21c2fe144baac81d45e5e2bd731565e4df54cc0acb2&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=cfdacb602700631e33c71a90004b5527b4e1d9746c39926861d159fa01aaa07c&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=747fad0c207cac879121760400e2081a06cbef68f2a4ed6427ac40909eaa348b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=8598a0d18cd1acb34b5774928e9036631219f547675df6477843f565b24695ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=fee4a8e5fdc9120bb5847d835bee01c23561a2326d3ecb5bd736e8766a95480a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=6b9ebd555c7c31973932f479a923e4b573b2de94982b0bd52b448a9576e8669c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=73ab8459d413663888a9ec923556d5337a057b4388a519086df54026f526a518&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6CFWHW%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T070757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAyhFn%2BTBRQRrAI4b92lcBG7pThFbCXLywQ8P09oyDEcAiEA1wVnddenN%2BNYTy5DmDcgC9eFgH2GgQzK9gm57Vuocxgq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDFxNLLn%2BmN50dArvdCrcA0lywE7stcaGru5s%2BQeEwHroUka7pd4JueAqzOwlwXFfk2V0%2Fy3YBzQgLOAETTKDBxOif%2BsjsmrxQZwfsxNT%2Fg1zwF3SRUqdnEUUY%2BARYcGXpilNH83gbt52Yqx245yXIjXKkhHSP37507STOI9Qg8t8XNX%2BgTXqB7lYGbFWjO5hzRgrJRcEarF3DyJJcQsPsQP4oUBgpTNWr%2Bm8XamLJt1XQEhOFW2EHWM0THrP4EMdm6SVYt10IHvuWExH0oL7gSfpPwwMhd0EZ9eFqBh4mnAnLXMCaqy6UytHgLDJ%2BCqE7JU21uYqdNNtwCZYj%2FMoC%2Fxh4V%2BY%2BB82GOxiMAV8qnN%2BiwmH5T9DYoOWswA%2BkGgkoL35r8g6E%2FA6zwKaV9ccFAHLr%2FbmoAyvnVOySO0EWx1dZxptxovLeB%2FW5Rmw0s0atTEul1sduyI42X%2FtLFc4Ca6bK%2BKlnAMo0tMvPsHT9koRcVPeNJvyWj4iTxpNRTRV207kjjH0CQ5cLJLsRW%2BcRxQ4cp1OXvl4XOz5YcmvQNhYtY5awWNcD%2Ba3veZw4asSLOpBxq0Sq9xxGN7V%2B88jj3Z3IOWDt%2BwlvS6LQdoIM0zZV2RYOuqmyaOpGEPb3IU1CWzCl9OW%2F8wWBH%2FbMIS5ysEGOqUB8bC0SQWhvYT0Iy8WKadhRjmfdh%2BXJe%2FvKRCBvs01WIgN94j5yJCMjm0Eg9b5svi1JuOkh%2F6GTnE8uvrlrIQVs94U%2B2Qh6bKlhjFcw7AiSjPRDoX6n53AgKbKGpc4OWFGFx87xFzJ0fBPtAyPbGuHjwT1lOPvudnMdhABIcYwy%2FfdC7hwkVewwEYptlZ8kJOPtJp5hF%2FDA3V4rvLQ3ACuP%2F3YoSHW&X-Amz-Signature=f86099605e2a968b23fe06d3cdc32d89a17c5279f548949e04896d29c5b47aac&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
