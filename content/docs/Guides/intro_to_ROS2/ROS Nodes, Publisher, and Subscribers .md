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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=82db8d3df4159d290a753e07d671c6592c49f9185c1b8781e64b712f3a33c1fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=4ac79eebd4a2af13ec74759f8ffe642e597f657cad8c31b07f1353d4de77635b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=3d5f8860d7cd2344988dc577c1ac645c95bed243cc86adc3e162501ffa68ff2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=cb330aeaadfb76544ba9b743746a6196684c67d450440cfa09d0fce5d1d07d35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=a21e873b5f73d83332245d2b3147968e3f51fe4a2149575cc62881c4535c0d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=07f3ed4961fd042a47f5dfb6943d519480020168b5559dccd8b2e06198055f11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=aa948590add14878b58a4e60cf0fd91d609164b55030769df47bca87eeb4bc75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEQ6W2K4%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T061442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIAQ5MF8KBK9st1319WZxq41DPJ%2FhoBDTzKmLJOcvoVERAiBEWL%2BWehBq%2BOmXrwj2nvrbWVFudky22685Zd3M6%2BjhPir%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMCENme%2Fva%2FndUDwMFKtwD06cptNVQzyiggIYazzeF6iQPinx%2FcR4DGhBm2dFe4gZzI5G3vYQcCM%2FG60xDI9zWMonpklV2RQ5UH3lyjuXOC6k%2BAqeLRKapGf3UU6cuk%2BPmiwI7BO7vdhkyTIfeuXHYdb9FSl%2FunCm5b4F2sRKPxgEzB2sZ1Qt7p11dHFFQ1anvK16o4P7Q6caCD2BqHgw3Qfg1c6C4gEeZ5ruMl8InSqu%2BYbeG5rVhx0g2AFzLI0yQhQsTpvp1oZH04wHkGN7vK4LI4AAUi2uz8BmjVmr4W4JH%2Ftp6fnqLFEGb63lryl4TiA0zzufRCt7Ga9es%2FfC2W1mYE8kqQHGjZ9mIuqLYTfaTH%2FfjLnsSa3QtjFD4wt9bFMMh3YwFMYjJdRfDoy5FBPg25SXshVL4WBRZtzhxZBcySz8zJJgZmO0s61inPPB%2FTNGB9hd0uX%2FC2G5IkkQUT3JhqS5IEKUN1ofv8blSP6ZJ292Y0h6OkMzSkH0vfIkZDNEnUeEfr0jBA7HRXkq9Jt%2BNwd%2Fvw%2FrlAW%2BGiFxthYQdOHT62fu4JmAqf5rwmolwTFJeiNrhANOn8gMNptGk8Mnd6lwGl9Hv5AYSXYH6JBj3jouyO8mKKKXMzwKTuveC22sTTfc%2FFaupoGMw35qtwwY6pgHwjunkzjsXPosshYZf50xANhh6as0i2For3jwjHILgziMxJAmUFBHQVKkUtR3m4%2FjxjFTbSRWaID5ujc2IYv8I3iWLPXfxgJu5x73pfrGf32fWBqaJjBW5DQQFZ5anD9wfd567rI7sd9Rgtz2dDaEvm9F3siPSG864%2FUL7tL5%2B9N%2FNL%2BGZzAo0yoTiib8w3Mniv1YMDdyfTzDxu0zp2NmR7EK1CWlL&X-Amz-Signature=62a75a2f01e3a9c16ec906dfc127e5a818c9fb5e3c79c1b1f3a5435a18c8753f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
