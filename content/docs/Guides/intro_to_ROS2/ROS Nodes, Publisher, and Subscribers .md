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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=a3e6593134687d95560455c77ff16a070cad4a3ff8184405096ba739ffd25fc8&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=f02ff7e738253d2fa8b5f24ebe5449d3fee0b44f5a01a2902a0bfbb69d345c08&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=836372506a2d8673eee09df780621da51560e1fe3d398a74d098453bf51806f3&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=05b59072f83e7d9fa85c6b5e47be3f7f5d178fd9a229f4519a22c664abffb9be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=95fb38886bb30ed170db9ff96cb2cd8113c3bcda6bed2c0769e38878e8e06700&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=2430d1e91c3232e06e920b121c0d9394bd660d2e6b7a5f792a2d707b4dc75fa4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=c370b60470a3a74cb1c93ca78959c2615af0a2caed1c66ee6065213052065bfd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632T2BHJP%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T150830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDeV4uwUQwuj9%2B4oL%2BmpA%2FIVdhcMt%2FoEfYLskKhx3mTzgIhAMniRlWrxgJrdCPURj3tWedAH5j2gTa6Axw6cUQTZU90KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0mnAvz4Nd%2BbMs1nYq3APnbc%2Fj2419efBFa7fnzSJf2G5gP6VbeSK52BhI9dGN3tdLQXgSUQGIkcVmvWbm8UrogWZXPbeecKKfGrdHdVnqwWY4a9CW0GFkxY58uMD3YEZcg3Yd9Na6yo1m3YVvd%2Fod0T4lljFDybrvbw3fxRcFs%2BRlhn%2FjQR%2FSeH%2FIQyV006fmXLMlMuhZL%2FL8GVhvkp2Cw3dO0ydZQW6LvFW7qZO4N60RKsJffKWnlY1S2kIRtsqMUio0HLG%2F3m8WgZrpTIx6fYdGZO%2F8EMsw31YLvMLGPQH2RfNavuop1qfAMKLH%2F6Zj3FT%2BxZE0%2BmTlb6u7nR%2BAaB36cN8LIknRNjFYc4BCOsj1FyqEceI3O2j7e7gT9B03%2BIKYnSkcSEoRlzPBPM%2F52l3cHPG36ueKHanLW28BJoyuOhXHDbDgfU8w0MmhG%2FMofzKMGBDIG3MUvjfM4OnmYfpkc0OPoXHmR4cCUcb%2B0X24GupzcMwbIKZe%2FwmyvOrsA4NFXEvhXqVYb9ZG3p2ZI0xCHxyF%2BA4ydmD7IzuLV1uA8l490TCCm4fth0R0J%2FCkIRPn3Vz7feMZ%2BIF5DxzJ1NkatSEyWhIi24%2FwzVeCjn1nsJbdFktxbhTgAVlqf3XlmRl%2F8cbLI3pmzjDO%2B%2FW%2BBjqkAVYfcBCVBAfgZdvABTqAiTI1qUgzdqwvALaN5B1ytEzNghx0iR%2FBkQwRH9PDn6cWrSHIO8N%2F7R1L41Phpfcdt9SdE4ozHndl0TSJ65P8g4PBZRiB6LhD81Q4ivMCkRdHLFAnDRbqEBjlZAyC9FT0FuZbaZBJXrWl%2BGDFUMAl71g2QCze7D8UpAwzdGdxULNrsdOOMU9o4IvwxhXk973OQIP%2FBXNf&X-Amz-Signature=ae6c8017b3960e1cbb65bcec7d57d951204777f148b183a45485ea5c6f450280&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
