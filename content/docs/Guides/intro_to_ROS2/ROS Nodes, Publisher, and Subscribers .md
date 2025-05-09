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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=937f1ae2662471e68f4223208b4d67cf7677cdcca9ac6c41eb7b16680e22882e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=fb3dac605ded36e33852035358de1f0fb009ac18a2781c418a1a559c255c1491&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=e0263f8e444be2d6c291f7cbdea3e6701e3a3480a4f374600aa32353b021273b&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=4b7f3b8d62ba495087d14fb1076a8521a9f5c48f5098016ac9c82c0945197ede&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=be5bfd3ade77457471efe94115b13ef73b7db964f601917c190b5532cef30b41&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=e4a1ba38a1d7813d2d5d5a70cb1b94de01d590e1833b88a7d5edda16afb886ee&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=0f868a4d8cb93d0dcb149f496c9582f7a288e68ee5e0ff6d5e3afb7d5c6abf24&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UQ7WGWC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T170743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwQx1fIUrVClpfo9kBMNztT70pssEsklJE6WqqJS7ZOAiEAtbkbkUaQJkZ0HFX9wRGgcDP5cy4VVtuVM95u27LC6moqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJC46nhlyTOEvnNmBCrcA5SxbToA0d4yRgKgyifssDr8zgHrneXiRAqwBRgxxBElDTGLyamGjnRg2dWv%2B%2F96Qm3AHpBUFwJzCvdERxkZRFVY9%2Fk1kCMrliKNcGisb%2BcVzONVlLfrr5QJoIa5ssqnYcoeivapc8npZiGpj42kK2W1Rub2ygiiEh1cGXfg1VALp%2BSjBRdL4H5mChBbufhaMqxVsqWIotxZUQjqfE%2BwllS%2BVBV%2FCJRQR4tWBFLCZExYp1%2BG%2BPWcjaZfld8sr7TKUbVjlcj5HV%2BYY15V5o9Q%2B6IhyEVCivhStlILCgEO0WJzvSOnbzOmD3HVdWLqgY2VDrcV15j2QGh0sgtG9bch44P7IMJsmuBo1pNaMr9koJuv40UeRvWBaGTrseCg3RTsDqoyVb%2F8ztDHqb5HF0AYpSx3TwJw9AUSwWHORZeldi99wtFtRWPs3BY44yoEX4nrwpCmNgVvWYC%2BcBD7pn8BSBJ0MPB%2FxZ4UvAdGd9BhjhthrW0DU5U6lznRlOknGTSpyGdOkYT8J%2BvhtZygUZ1zNLlEQo0w1FZq%2Box62ySSKKZsuvAkI38qWhscoLBEbVRteUMhpwb1ooLctLBelCZDEqUZr%2FTNj1rDqg8yqr0FnqWIDGIjRg8J0wrPbvXYMJHY%2BMAGOqUB%2BTzWsHPi3tqghnj8uWDCFOqQgU4bcbHg4SW8nGHIIN%2FH4YMOaLW%2BY86uv6BbRri%2FxWdPnQQ8LS6vGMbQzhg2hlRISiFxPAxAGST3gvl6PWgjMygAGqQ3LGn7SbUqP7ig%2F%2FG7%2BlzmZ2v0K4KgJLJP3o9%2FeISq1mdluoAcQpJpEHB5YpdRAM6LW5WnTS2TsFTgAi8wdfyT%2FFWBRbUbUcdAi3sdVV0K&X-Amz-Signature=16a0caa9ad9165da93385bfb5d3520c027f3c0596137e37890eb4a97af9fe62f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
