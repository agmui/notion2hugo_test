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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=59d80d8141898b94e2f9fed7d44c746c69216b0e17f43defdee743022dbd2161&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=021d8ed38ff50da70ef7df8360829cd2aa5aaa376c19076810b44d02c2bda8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=ed1b8cdd640455c1a4134cb09907a13c8412f5b691a756146d84cb75c83f7473&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=da24523d7c866f3cf0361076bc80fc53a9343cb9494cc1ac5f6a6fe04c1a05de&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=94d6026a18a06121b8ffbdeb60c0d3b77e64ee3ca1b18752dbe25f656459a075&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=ff1c2c75d6c5f753fb8a4b9bf8f8fe552112bd3fdff0fbbce404dee261404416&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=8bd0e64e750cacfbf52e0a1fad870e8eef19e25da408eeca929efcd1542a2fbe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVQPQZBP%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T032459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEy4uXN2DLDx5t9CxjIlF1v8l1Ok813ywZ2AfqSJzbarAiB1kqPAvM6l5JE8jFDdxnve%2Fr%2FD9I76zx5LHgXTpk0cPyr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMblBu2Pw6AVA1Y6TLKtwDQa68jCMjKEydCkmz9Dx9hjS9FFcy2%2B8RTYTJNNyVMfGZP%2BLu8H5QSqpxziGae9apDsm9aFsIFtb%2BogGyW6PZzfXJJ2roLeTqob0ggeO1%2BgdIpKt1AtlrxpU2mGbuxQ2bCWr%2FGLDIoxTYK1QMiQFqa6lv1eJt0GBQ8Uk15FfCnS1y6WOz8fUgudVc%2FCRWwjP%2FvcV4UZPpstPWNFDqg3xwnQ%2FEeNmnkwhonfN8WnGqIgXxbZICN9A0DNEyQj7SdtKzPqC4JL33UTB7dJITDWTN6x2CkwaWdcZB%2FAdLSLJDC7SeXq%2BdIHea8zvxi6vzKWAIGXQfkIu3WZQYpteX5lzPOfmFExt6dLoiIveAge2j44eESts%2Fp8omGv0Cl5la%2F6LZKRL9EDiHqgs9LbLPLKWvdIwx2rYzHnb1BMkiy%2F2XJ5l%2BW%2F6vfwb3arFOiF3dvLobQo8KRE%2FoF7alM7P6urjvvqHvKo%2BSNQGWoURVkxFOLIjJf1b634QH6kr3P6z%2BBe%2FHLFTP%2Bg11Y91riKYyD5goXDEQ4KtTfjGoUk1na2%2Fi2IoVb0uJTBdbSRb4yp4b%2F86pqSklqpaVz7yP2SN32YJ1FJTMcVDNTyaGM43nhYcFcapqDl5aehSlMeXnsAUwzp%2FSvwY6pgFex93pAasZ9bJ5T8SzxENb%2FU2mAWDaKe0J1NRq%2FSK%2F3N%2BB9DjNhkCGQ1218rwqoSGE%2Fl0TwkcF9xiCk5%2BtWQq5zLrdJSS3BJOmQNmSusnfM0d8O8uR%2Bz8v95udQ2eqf1%2FQmh8oVKyWwUWcJf7Oon3HpHnJ8b8N5NR%2BcL15a%2FRMg1NBTVlXDGcn1c0bLm%2F3JGKOAS2SYGzgzgVLKWsJjF%2FCk2IrH3DX&X-Amz-Signature=8b4815e4387fc4e2af3422c99d3662bcd7c9854872fb70e57e8f506be33aeb67&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
