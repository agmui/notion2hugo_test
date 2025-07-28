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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=063d479faaf0140781d663f25363ba1e2d7b9037af3d3db26ecf2f11c9c7885d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=d133eec0af9c0de9425600eb05df3344f8c9d90c31e5ec7b59ce1fcb999e3a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=726e0a17d4985d2eb1b454435ee2906dcf8adfe786d02ab69c63996a410e5432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=922e3c7302b33ce38739245c9b96f39c9ae9bef97bd969b3e0d7ef7f824f6276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=4891a2d60e866e2c3f21eb433407560b4b0af1e15cccc81f865119790ab01b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=5c5713d333b1745f0865150973a0bfb7e242cbee461bd85e2cb785fe30a32540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=30d6462c32beefc5063e965b7dab0a738c9ae1a3586b312d17d8e6a197e43f7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHM4FKTA%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T210856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIC098j9TYiGQWjgMXHTg30OAEajEn6yBFYlsz%2BGa5hHTAiEAqJIMbkHuC%2FAxPFtpoKm2kQ0WyN9pajgMmoPvDoXQ0zgqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGPpPl4cHyw%2BXNM%2BVircA64XdIT0Zi8COAjy0zHFTeIl7ugTAKyOYOrq6C3VmHx2Kan1KHXhEL7qa0eX7p9QuXfyDKg7dwa5mdIbwxsVZQCjI2yAjekFXfI%2FMMAOSgPBWgjvNMi6ekOdHpwrUbrNYxVRTW2AweDaZJuhbW2EfN0cTn3ydKkpWX%2BtURzEMTadllaLCAP6V%2BFAOh7mmJU%2FmDM3aTOv%2FCZNbohbrCzk5ib%2F8RyVBLJVTZVTY3JK6q5fC7aQYL9bZQcmOOcIU%2BUDZV6xQlRANM0lzPyICqW2RbJZrOGdKyRK4rdta4Ky%2FuDboKaTyQkGfv%2FT%2BFQ9VrUF04ZaKUjdhW%2BmiVA4WfL91M1TXIzk8RYoM5ALYIBm667yk9RxRpOOGx4qW7gMZwiXdUbt1VPOi5pa9CWO2AwLGbewnOUkJNsPSynbgyu113k1sZvpX8H7pVtxEKMGcKGJ8nPtKktnWoIJ9mB8p7ALUIrlxWzVuy6zvF%2BCcJf1rXQH%2B4KyQSn7rSU%2Fd7%2B%2BVO54cc0fle5zJ3yxIMGeYEDBfds9P19UjCTUEuk637M%2F6M%2F843AcCo1C3eQB4VA1nTSE0m4l9%2B13GRZsQiptWJxgPihD5MNkmk6WHFMLbgmhtZuWfuN1YsdjnuAOusIQMIO6n8QGOqUBy%2FVnkJagW2KpuiEHy9CZ9yAWoA0xttILLhxUDOipTA1AXMkl%2BWSqD%2FlXzFKXKrd0F7q6Am31ALuXmNosjiaUuLvw25qoPIbVwKUG%2Fg5GHjsuaO1x2Viv%2FW7Xf3ZznmadR7YJg1GkHrke0Cuc%2BPOjnWr937he%2BHBH6jrPUE8eVypUcyPL8UkV0xwxgC%2B86edZDrBWF%2F8zObbFEPMLNHGGvr1IRTHp&X-Amz-Signature=948bf527d34a01e78ddca78dfb06b5e429fd077cf77cc911261862736f14d4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
