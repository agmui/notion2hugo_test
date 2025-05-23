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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9214accb-ad5b-44f1-a31c-b3167c59138b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=16128cebd681d0b464573bf40f292a6e7b0860685a7fffb8809f623c9f422a0f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/611fccf2-c738-4dbd-94e9-98f209092866/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=390cc2c823fccd8768b23aea7138ccbda26cb4388ed6cbf1598b8ccb1ef9ea2f&X-Amz-SignedHeaders=host&x-id=GetObject)

If both of your nodes are running you will see that the publisher and subscriber are communicating

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eea428b5-1cf0-43bb-a30b-81cbaf6c5c78/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=162c75b9941327ec8dfe19b2d26638d12987ede79df8e7246e312795315875c6&X-Amz-SignedHeaders=host&x-id=GetObject)

To view all the nodes run `rqt_graph` in a new terminal

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1d98e964-4318-4d62-b5c4-8c8f78368598/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=e8fda940b5fb670794e2a7014c07b9ff10eb621688e76f81ff315efa389a2d2b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 node list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/680ac8cf-e6d9-4164-9ece-5b9a6fccffee/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=065e99fde800e9efc7f3bbee9d90c2d0e0bd49fcd69e798e671af4ab0533fb50&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic list`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/eee2ebe1-27ef-4a4a-96fb-2ca54126fb29/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=085b876dbf87c56a47c1baef93ac361e536537849e3258c723cb3c288c380851&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic info /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6288ef12-cb9e-406f-b9eb-65feed3a9011/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=467326da4b32c67d5ac21612ddf2ad2a64bb916f447f324285cc0bf5ee82c2ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 topic echo /my_topic`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0a6fcb4d-422d-4a6c-a803-749ef4adf2c6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NAQBPOO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T110738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJHMEUCIQD0LCVcDNG%2FCo%2FQ4R90Ler6n3Zi4FtVJwmgj65hoRaWZwIge%2BYvkeKecsq6q187d8r3dSwmCG2ihgnKL0DS8xzc72QqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOjCzE6DzFnpLKPPdircA83rCy%2FF5D8mz%2BytIm3CNkE2j%2Fh4g2cc2tNFjSxM7M3Gw59fhTW6inLoMfOfAfqPiM%2FZOcy1Xm%2Fv%2FSkpFbyIM6Igz5lAgRa5hiJiXS7T8goCOkLKzIL2vFR6jJChRCR23ZEWO1fbv7J%2F9qf7GLOK4ejy%2FOvI60Qcq6zf8bHH%2FWIHN25GQSNuqdFmw92n5rFJGa0jIVS1zMlVmikatVj1vUov0iDMDjKXHBgq9uARJdghlUhRDtXlOU8tqI62PHciaeuROYWiW2%2BmF2DPGHjiJn%2B%2Fwhbod3HN05Kb1Y8cz3B7z3pzrsKBT2%2Bz2a3X4WJ1yDuvRq%2B5Zqf8NwJt45u1oS5HOhC07sdb%2FKBFT32B29y%2BDDVoOjlWt%2Bxgqu3%2BbH%2BsMz9N3kkfZ5R%2FciNd4vMEuGw9kcxl2Oh48Y2NWYCzsK2IFcwihihk7fhuA5cB5yXj29KM%2BwQgkAqfzS9DeNOTOiZP2JTjo3gRqgsAYaRPg2XcaEOS%2FqYsjFnwL5eEBorhzzpR8f%2BYATCvDx8vyMLpsV8V6L1TIGlTISJZaV3FDkC1d%2FW2NQzaESEk7fFfN5Hmu4aTDJzz14i0UVNXRJDF7egqfh8JpczsRJ7rXs26%2By4Hf8tEZEamTKJlz9REMLypwcEGOqUB%2FaJHCez1xXH%2BDIgasXfrhOYvSQ5HFOcVUyCHfZxTFGBhISFD9eBWhm1cg3xKUsh%2Fas4rkztcnKjGy6WPHwQM5DD442nmqMTXtVZsuSdg1H5CPyJeIvp1R0F9r3Dr5gaaQwQDDo4YWxluTv%2FwsJ2DE40Y4Yo9ibjdN%2B9KyvhtMY8XhTp0HHtNUX0ReZeAKcYbrPUVIrLx%2FjwvfnDBn3Qq1heRyqYe&X-Amz-Signature=c67dd47e10c6ce1c1ad46d4ffa850da4a6a76591c69f81e3d5216eec440db908&X-Amz-SignedHeaders=host&x-id=GetObject)

## Log ROS Messages:

```python
self.get_logger().info('I heard: "%s"' % 2)
```

# Exercise!!!! ( YAY :D )

- create 2 publishers and 1 subscriber where the 2 publishers are sending 1 number over each and the subscriber just adds together the result
- 
