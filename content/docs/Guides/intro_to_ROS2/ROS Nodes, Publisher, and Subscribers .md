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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=d22bf4e22e2ad4e2b3901663f37c650bf1fe42a12b4a3783265ae655c1de7ca5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=2b0b72751992a30bdec2529a37162b0cb8347cff50fb2bd636c901d314030006&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=cee53578a8417d830e3cca1344c9e098423347f57ca19f5b8a34f85a37760a4f&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=66efa3e6b0d7dbd4de21567cbb85b90610638553335c9a405a83183bc92cbbd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=f6d5ba35fe97082bf10b48364a3b8351e5c30e2bcbe9c542bb5646ef25576c96&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=12fa356176feee7ace40961e7f2dad387efe704ae64b77ee482d8833a7ccf5ac&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=105b639a3fbab582fa73250ee26ba56307d05766f0a64d2cb919031babc6a28f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZTK6FP%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIH1D0opIKacalzTErnznoayaLmDTXhDag4NUaMLcEEd8AiAzYTDc%2BdHkxRCIDQQfHv4fzAIzSmkpTfmkToGouox5EiqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHZqsvSFhBQkF%2Fl7bKtwDUmTetjjVhzVQavPSmTZuItZRBRrQ01BIVaf2L7sH7ndbasZZE9y6mGKdnDfUcx94JJh%2BEslIlSe1a2T64yoailFNUv4dKRVMs0c%2FN4zwcFxH3h89Mq%2FdwOR26e1JDT9mTswre7U%2FkqBhSOlmZCEVhw8fN%2B2g1A6i1llgV20G7tFroQ4z%2FsYXoHEMk0Z6dvTV6YIH2LlwcDi71z60CzNGcIehL8kJf2s36lSyUAcE372tEyO4I34guXafzR6NohCj9H0xOQGxx0NigZ%2FIbSQ6o7W5NOCLPZHTVaiwfT6bDrKV7Tl4UYaADZw4wCDwGg7lbLawrzFgSePN%2BjMG1cQk%2FEn4Rjx8Wh2QxEG56%2BCX0yKtwZ7mq0shWNl9D4OWm0q4%2BNRAnBuuoaQ1VtOP99YENP9qWHVmwaiS6OtydoeAzC3u4WDb7z5CamflK1D5nYfVtRXcHplLTjBgbVx5O7UFQmccFfR5mcdCREEpm4xBqUNuH5hDoykqur61HajaHYEFZ%2FIdBt7oMDRU0vUJ4T2vthBEjqy4y09nucEFbBYopDDfEBwfJnm1JO3HgNA4EDEyHT%2B8Q31s0ZZ3c95PzqPlLk7rbJjyUwkeHH7mLLBXC2u3nPckSL415NIFRl0w1664vwY6pgEDdUvcPmxlyaFVZ3EVjB8xDaetJKlkTDMJs%2FDgqqKlg9U%2B%2FGfcP2fuy2xteMwerRBpT5TgbhFhhAQ9M9adbXhkh2rIuM%2BEWzhtAIf9txYVsu60wzLNGe4U8jpdE9etq4fSbksmhAc4cO9apkIVDiS1YkD0jwN8%2BFiz17yJTX2q75VhUAH3yHqfqbfCWc6y7gFFTDmGJvoLnCMvUTrQ83cmwdeHQsT5&X-Amz-Signature=2252c0b6cf344e04d1b4d9e453ad6b71a50cfa42936309f7c0a378cfa113c1c1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
