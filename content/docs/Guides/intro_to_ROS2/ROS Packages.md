---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-01-12T15:12:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-01-12T15:12:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 145
toc: false
icon: ""
---

**official guide:** [https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html](https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/Colcon-Tutorial.html)

So far we have made multiple files and our folder is getting messy.

Let's structure our project by using ROS Packages.

<details>

<summary>What are ROS Packages?</summary>

ROS Packages are, as the name implies, packages of code that are highly sharable between ROS developers.

They consist of a folder, `package.xml` file, and source code

```python
      cpp_package_1/
		      ... imagine much code files here ..
          package.xml
```

</details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWDNUV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9yJIUqSxNIBLHUPL54kMvBNDxdZiLKOre4tMxBxTGpgIgS5DuUYIRnYH0S6EpyxtAPjs6BPjRr4Gl7YD9m%2F3Sl70q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNO6CLmhj7loQPpgiCrcAyfN8zCi%2B801%2Bh350793SXx0EVNKBFIuFB5H%2FMWIgczNqtKoShsQ49L2FmV0cS%2B1XksfTX4HaBejSW%2Bf1i9s%2BVStMyZqsZfWWY%2F9QJ2reJktQ6bGd0WLlCZX0s4CEX2j2BDpOzv2Mr%2BEm9rDtzC4n8snWsU1T6BRslklkDXcaEIjeYLPUoU9ykgM6Se2rksG9Yzj4OeJNplKhLWpYrlxcOW%2F3CT6UJ1aE%2BTg7n8vJECq7oqVELEVb0DcP2lvbOyYgG4QVcRMvyLgpu%2FRPEFdZw9dhFdVIQ0KeiUeG5l3RfSQhmb17ExAifceHubUwfzN9xCYqrxVitaJkVqNfWk05aosXZZ1%2BNF47zJNXnPuUSdp4aGlr7iavzLDgwGEyPcefqX7f8PrAy%2F3%2BlqCA21i68sDbYNi7ERGKkCWXXn%2FEa0nJSRP6EtjhNu9HnvV3BPHgn3wPeHq%2BlpdocwsQRaSiUONXKn4d8ag08SYNtav2hRyvD%2B083eTSpRhp5APSskFRau0B4e%2B3NVcMW3m17h0CkKyKlPKttslpoRZZcoGvCjUpLAJ7b%2Bzb%2B4iq2uBPPo1vDsm3RWx2Ds0JMVQUrfyUtoFE1wXu6ad%2BGXjhuWDk1siuMu%2ByvyZPpgeQ4qgMJX6jsIGOqUBXON8McMF%2FtRKiCahuJyhL5qSMItmgJAkV1g6ly3m86JcvyAJ54mwLhexQkNt9gIBzKFuBEQdiXp3XVWlJ4oh4FhGl39Rt5KHIXIMUYmAeDuFisuLdadZsr7hfMiBQjxMuQzLjawSttGs8CldktmrKzRnFr%2BfwJfehVygVT2tZQdYRuRxPuFcEGsN4vn4Run6ptAyrulqU5RqVzpOrz9AmBMYPcQ8&X-Amz-Signature=d1abcd4bd74723243ea30687723b70d010882dde1a7e5ded5e898d259e3057d9&X-Amz-SignedHeaders=host&x-id=GetObject)

Then inside this `src` folder is where we put all of our packages.

```python
ros_ws/
    src/
      cpp_package_1/
		      ...
          package.xml

      py_package_1/
		      ...
          package.xml

      ...
      cpp_package_n/
		      ...
          package.xml

```

<details>

<summary>package types</summary>

packages can be either `C++` or python.

the intern file structure is different for each but for this guide we will stick to creating python packages

</details>

# Creating a package

Let's go to the `src` folder to create the package

```bash
cd ros2_ws/src
```

to create a package we use this command:

```bash
ros2 pkg create --build-type ament_python --license Apache-2.0 --node-name my_node my_package
```

a bunch of text should have been printed out but the result should look something like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWDNUV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9yJIUqSxNIBLHUPL54kMvBNDxdZiLKOre4tMxBxTGpgIgS5DuUYIRnYH0S6EpyxtAPjs6BPjRr4Gl7YD9m%2F3Sl70q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNO6CLmhj7loQPpgiCrcAyfN8zCi%2B801%2Bh350793SXx0EVNKBFIuFB5H%2FMWIgczNqtKoShsQ49L2FmV0cS%2B1XksfTX4HaBejSW%2Bf1i9s%2BVStMyZqsZfWWY%2F9QJ2reJktQ6bGd0WLlCZX0s4CEX2j2BDpOzv2Mr%2BEm9rDtzC4n8snWsU1T6BRslklkDXcaEIjeYLPUoU9ykgM6Se2rksG9Yzj4OeJNplKhLWpYrlxcOW%2F3CT6UJ1aE%2BTg7n8vJECq7oqVELEVb0DcP2lvbOyYgG4QVcRMvyLgpu%2FRPEFdZw9dhFdVIQ0KeiUeG5l3RfSQhmb17ExAifceHubUwfzN9xCYqrxVitaJkVqNfWk05aosXZZ1%2BNF47zJNXnPuUSdp4aGlr7iavzLDgwGEyPcefqX7f8PrAy%2F3%2BlqCA21i68sDbYNi7ERGKkCWXXn%2FEa0nJSRP6EtjhNu9HnvV3BPHgn3wPeHq%2BlpdocwsQRaSiUONXKn4d8ag08SYNtav2hRyvD%2B083eTSpRhp5APSskFRau0B4e%2B3NVcMW3m17h0CkKyKlPKttslpoRZZcoGvCjUpLAJ7b%2Bzb%2B4iq2uBPPo1vDsm3RWx2Ds0JMVQUrfyUtoFE1wXu6ad%2BGXjhuWDk1siuMu%2ByvyZPpgeQ4qgMJX6jsIGOqUBXON8McMF%2FtRKiCahuJyhL5qSMItmgJAkV1g6ly3m86JcvyAJ54mwLhexQkNt9gIBzKFuBEQdiXp3XVWlJ4oh4FhGl39Rt5KHIXIMUYmAeDuFisuLdadZsr7hfMiBQjxMuQzLjawSttGs8CldktmrKzRnFr%2BfwJfehVygVT2tZQdYRuRxPuFcEGsN4vn4Run6ptAyrulqU5RqVzpOrz9AmBMYPcQ8&X-Amz-Signature=38f3b3568a7e0fea7c51005781e5a11f33b9a8d231f7262ba4a235c51e43e203&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWDNUV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9yJIUqSxNIBLHUPL54kMvBNDxdZiLKOre4tMxBxTGpgIgS5DuUYIRnYH0S6EpyxtAPjs6BPjRr4Gl7YD9m%2F3Sl70q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNO6CLmhj7loQPpgiCrcAyfN8zCi%2B801%2Bh350793SXx0EVNKBFIuFB5H%2FMWIgczNqtKoShsQ49L2FmV0cS%2B1XksfTX4HaBejSW%2Bf1i9s%2BVStMyZqsZfWWY%2F9QJ2reJktQ6bGd0WLlCZX0s4CEX2j2BDpOzv2Mr%2BEm9rDtzC4n8snWsU1T6BRslklkDXcaEIjeYLPUoU9ykgM6Se2rksG9Yzj4OeJNplKhLWpYrlxcOW%2F3CT6UJ1aE%2BTg7n8vJECq7oqVELEVb0DcP2lvbOyYgG4QVcRMvyLgpu%2FRPEFdZw9dhFdVIQ0KeiUeG5l3RfSQhmb17ExAifceHubUwfzN9xCYqrxVitaJkVqNfWk05aosXZZ1%2BNF47zJNXnPuUSdp4aGlr7iavzLDgwGEyPcefqX7f8PrAy%2F3%2BlqCA21i68sDbYNi7ERGKkCWXXn%2FEa0nJSRP6EtjhNu9HnvV3BPHgn3wPeHq%2BlpdocwsQRaSiUONXKn4d8ag08SYNtav2hRyvD%2B083eTSpRhp5APSskFRau0B4e%2B3NVcMW3m17h0CkKyKlPKttslpoRZZcoGvCjUpLAJ7b%2Bzb%2B4iq2uBPPo1vDsm3RWx2Ds0JMVQUrfyUtoFE1wXu6ad%2BGXjhuWDk1siuMu%2ByvyZPpgeQ4qgMJX6jsIGOqUBXON8McMF%2FtRKiCahuJyhL5qSMItmgJAkV1g6ly3m86JcvyAJ54mwLhexQkNt9gIBzKFuBEQdiXp3XVWlJ4oh4FhGl39Rt5KHIXIMUYmAeDuFisuLdadZsr7hfMiBQjxMuQzLjawSttGs8CldktmrKzRnFr%2BfwJfehVygVT2tZQdYRuRxPuFcEGsN4vn4Run6ptAyrulqU5RqVzpOrz9AmBMYPcQ8&X-Amz-Signature=d2fe1280531ae32ffb839516692fbe667f764ba8fcc2bf13be66a5c13f4a13c5&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWDNUV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9yJIUqSxNIBLHUPL54kMvBNDxdZiLKOre4tMxBxTGpgIgS5DuUYIRnYH0S6EpyxtAPjs6BPjRr4Gl7YD9m%2F3Sl70q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNO6CLmhj7loQPpgiCrcAyfN8zCi%2B801%2Bh350793SXx0EVNKBFIuFB5H%2FMWIgczNqtKoShsQ49L2FmV0cS%2B1XksfTX4HaBejSW%2Bf1i9s%2BVStMyZqsZfWWY%2F9QJ2reJktQ6bGd0WLlCZX0s4CEX2j2BDpOzv2Mr%2BEm9rDtzC4n8snWsU1T6BRslklkDXcaEIjeYLPUoU9ykgM6Se2rksG9Yzj4OeJNplKhLWpYrlxcOW%2F3CT6UJ1aE%2BTg7n8vJECq7oqVELEVb0DcP2lvbOyYgG4QVcRMvyLgpu%2FRPEFdZw9dhFdVIQ0KeiUeG5l3RfSQhmb17ExAifceHubUwfzN9xCYqrxVitaJkVqNfWk05aosXZZ1%2BNF47zJNXnPuUSdp4aGlr7iavzLDgwGEyPcefqX7f8PrAy%2F3%2BlqCA21i68sDbYNi7ERGKkCWXXn%2FEa0nJSRP6EtjhNu9HnvV3BPHgn3wPeHq%2BlpdocwsQRaSiUONXKn4d8ag08SYNtav2hRyvD%2B083eTSpRhp5APSskFRau0B4e%2B3NVcMW3m17h0CkKyKlPKttslpoRZZcoGvCjUpLAJ7b%2Bzb%2B4iq2uBPPo1vDsm3RWx2Ds0JMVQUrfyUtoFE1wXu6ad%2BGXjhuWDk1siuMu%2ByvyZPpgeQ4qgMJX6jsIGOqUBXON8McMF%2FtRKiCahuJyhL5qSMItmgJAkV1g6ly3m86JcvyAJ54mwLhexQkNt9gIBzKFuBEQdiXp3XVWlJ4oh4FhGl39Rt5KHIXIMUYmAeDuFisuLdadZsr7hfMiBQjxMuQzLjawSttGs8CldktmrKzRnFr%2BfwJfehVygVT2tZQdYRuRxPuFcEGsN4vn4Run6ptAyrulqU5RqVzpOrz9AmBMYPcQ8&X-Amz-Signature=bb18c89c6e55b326d9caeb42a5a405c4a054961d2b874b1a905c8e2ca1dfbb0e&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWDNUV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9yJIUqSxNIBLHUPL54kMvBNDxdZiLKOre4tMxBxTGpgIgS5DuUYIRnYH0S6EpyxtAPjs6BPjRr4Gl7YD9m%2F3Sl70q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNO6CLmhj7loQPpgiCrcAyfN8zCi%2B801%2Bh350793SXx0EVNKBFIuFB5H%2FMWIgczNqtKoShsQ49L2FmV0cS%2B1XksfTX4HaBejSW%2Bf1i9s%2BVStMyZqsZfWWY%2F9QJ2reJktQ6bGd0WLlCZX0s4CEX2j2BDpOzv2Mr%2BEm9rDtzC4n8snWsU1T6BRslklkDXcaEIjeYLPUoU9ykgM6Se2rksG9Yzj4OeJNplKhLWpYrlxcOW%2F3CT6UJ1aE%2BTg7n8vJECq7oqVELEVb0DcP2lvbOyYgG4QVcRMvyLgpu%2FRPEFdZw9dhFdVIQ0KeiUeG5l3RfSQhmb17ExAifceHubUwfzN9xCYqrxVitaJkVqNfWk05aosXZZ1%2BNF47zJNXnPuUSdp4aGlr7iavzLDgwGEyPcefqX7f8PrAy%2F3%2BlqCA21i68sDbYNi7ERGKkCWXXn%2FEa0nJSRP6EtjhNu9HnvV3BPHgn3wPeHq%2BlpdocwsQRaSiUONXKn4d8ag08SYNtav2hRyvD%2B083eTSpRhp5APSskFRau0B4e%2B3NVcMW3m17h0CkKyKlPKttslpoRZZcoGvCjUpLAJ7b%2Bzb%2B4iq2uBPPo1vDsm3RWx2Ds0JMVQUrfyUtoFE1wXu6ad%2BGXjhuWDk1siuMu%2ByvyZPpgeQ4qgMJX6jsIGOqUBXON8McMF%2FtRKiCahuJyhL5qSMItmgJAkV1g6ly3m86JcvyAJ54mwLhexQkNt9gIBzKFuBEQdiXp3XVWlJ4oh4FhGl39Rt5KHIXIMUYmAeDuFisuLdadZsr7hfMiBQjxMuQzLjawSttGs8CldktmrKzRnFr%2BfwJfehVygVT2tZQdYRuRxPuFcEGsN4vn4Run6ptAyrulqU5RqVzpOrz9AmBMYPcQ8&X-Amz-Signature=3f437791eefa659959da700d98663aec559a1f95375e83fbe8b7dc51cd5677af&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWDNUV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9yJIUqSxNIBLHUPL54kMvBNDxdZiLKOre4tMxBxTGpgIgS5DuUYIRnYH0S6EpyxtAPjs6BPjRr4Gl7YD9m%2F3Sl70q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNO6CLmhj7loQPpgiCrcAyfN8zCi%2B801%2Bh350793SXx0EVNKBFIuFB5H%2FMWIgczNqtKoShsQ49L2FmV0cS%2B1XksfTX4HaBejSW%2Bf1i9s%2BVStMyZqsZfWWY%2F9QJ2reJktQ6bGd0WLlCZX0s4CEX2j2BDpOzv2Mr%2BEm9rDtzC4n8snWsU1T6BRslklkDXcaEIjeYLPUoU9ykgM6Se2rksG9Yzj4OeJNplKhLWpYrlxcOW%2F3CT6UJ1aE%2BTg7n8vJECq7oqVELEVb0DcP2lvbOyYgG4QVcRMvyLgpu%2FRPEFdZw9dhFdVIQ0KeiUeG5l3RfSQhmb17ExAifceHubUwfzN9xCYqrxVitaJkVqNfWk05aosXZZ1%2BNF47zJNXnPuUSdp4aGlr7iavzLDgwGEyPcefqX7f8PrAy%2F3%2BlqCA21i68sDbYNi7ERGKkCWXXn%2FEa0nJSRP6EtjhNu9HnvV3BPHgn3wPeHq%2BlpdocwsQRaSiUONXKn4d8ag08SYNtav2hRyvD%2B083eTSpRhp5APSskFRau0B4e%2B3NVcMW3m17h0CkKyKlPKttslpoRZZcoGvCjUpLAJ7b%2Bzb%2B4iq2uBPPo1vDsm3RWx2Ds0JMVQUrfyUtoFE1wXu6ad%2BGXjhuWDk1siuMu%2ByvyZPpgeQ4qgMJX6jsIGOqUBXON8McMF%2FtRKiCahuJyhL5qSMItmgJAkV1g6ly3m86JcvyAJ54mwLhexQkNt9gIBzKFuBEQdiXp3XVWlJ4oh4FhGl39Rt5KHIXIMUYmAeDuFisuLdadZsr7hfMiBQjxMuQzLjawSttGs8CldktmrKzRnFr%2BfwJfehVygVT2tZQdYRuRxPuFcEGsN4vn4Run6ptAyrulqU5RqVzpOrz9AmBMYPcQ8&X-Amz-Signature=5dcf4c5d46aa6070d19085a8165ac1ffbd7508686104263c0e4646349bb47e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZWDNUV%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9yJIUqSxNIBLHUPL54kMvBNDxdZiLKOre4tMxBxTGpgIgS5DuUYIRnYH0S6EpyxtAPjs6BPjRr4Gl7YD9m%2F3Sl70q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNO6CLmhj7loQPpgiCrcAyfN8zCi%2B801%2Bh350793SXx0EVNKBFIuFB5H%2FMWIgczNqtKoShsQ49L2FmV0cS%2B1XksfTX4HaBejSW%2Bf1i9s%2BVStMyZqsZfWWY%2F9QJ2reJktQ6bGd0WLlCZX0s4CEX2j2BDpOzv2Mr%2BEm9rDtzC4n8snWsU1T6BRslklkDXcaEIjeYLPUoU9ykgM6Se2rksG9Yzj4OeJNplKhLWpYrlxcOW%2F3CT6UJ1aE%2BTg7n8vJECq7oqVELEVb0DcP2lvbOyYgG4QVcRMvyLgpu%2FRPEFdZw9dhFdVIQ0KeiUeG5l3RfSQhmb17ExAifceHubUwfzN9xCYqrxVitaJkVqNfWk05aosXZZ1%2BNF47zJNXnPuUSdp4aGlr7iavzLDgwGEyPcefqX7f8PrAy%2F3%2BlqCA21i68sDbYNi7ERGKkCWXXn%2FEa0nJSRP6EtjhNu9HnvV3BPHgn3wPeHq%2BlpdocwsQRaSiUONXKn4d8ag08SYNtav2hRyvD%2B083eTSpRhp5APSskFRau0B4e%2B3NVcMW3m17h0CkKyKlPKttslpoRZZcoGvCjUpLAJ7b%2Bzb%2B4iq2uBPPo1vDsm3RWx2Ds0JMVQUrfyUtoFE1wXu6ad%2BGXjhuWDk1siuMu%2ByvyZPpgeQ4qgMJX6jsIGOqUBXON8McMF%2FtRKiCahuJyhL5qSMItmgJAkV1g6ly3m86JcvyAJ54mwLhexQkNt9gIBzKFuBEQdiXp3XVWlJ4oh4FhGl39Rt5KHIXIMUYmAeDuFisuLdadZsr7hfMiBQjxMuQzLjawSttGs8CldktmrKzRnFr%2BfwJfehVygVT2tZQdYRuRxPuFcEGsN4vn4Run6ptAyrulqU5RqVzpOrz9AmBMYPcQ8&X-Amz-Signature=ed7913a8ade62bf8cb012a62ecc1c97777c56eccd6e1fec7ae1ca19d6d949ea1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
