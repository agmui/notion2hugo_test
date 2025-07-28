---
sys:
  pageId: "7fea9eb5-2ed9-4e73-b6d6-5e093b833dbb"
  createdTime: "2024-08-21T00:28:00.000Z"
  lastEditedTime: "2025-07-06T21:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/ROS Packages.md"
title: "ROS Packages"
date: "2025-07-06T21:53:00.000Z"
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
  </details>

First, we need to create a ROS workspace.

We do this by making 2 folders one inside another. I am calling my workspace `ros_ws` and the folder inside it `src`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVX3KMT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDso0ERZyvUCkrYHTSQJttyNSh1O1Alkf4vd%2BncV4vcPgIgMFmMV1i2qB6dAIuWLJ6TMjqbwavU3R%2BVEcimfKIg9zMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FcaOWE986n%2BsIjCrcA96nTkKlVeCjFk6nfqadV2%2F5L3d7hmJh3xugLIpcT22UE1qhcvOpGMqJjH0NumTjMigT5AlqEKeiVKW1avxAd3rxdvPhonHqi6lmwgrDc8wLp%2BemxrmYcDBN4Mdi2ok5fLBxKACqnT0iJWzbKS5RTddji4WOXUhmUNaoICMDgwqt4s33jm4nMK7r5RB%2BEVcOQv%2BcetYRDDMvceMmw3hSPFkrON6mdlkySwbEl%2BBHuhhT0dO5AdfAPalkERIsyi%2FVPWPqxK2WrVlPpw9Syd1Al5wcFkvsHlCusdHl22wzMok8rL0EbrMlzokuAfgozFHDCQgGo0IV51t7F6HFvZkrvDnGWAbb276WzKA9WSWf%2BHdGves1DneS%2B7FXHxOcz%2FWRPvkh%2BRmcsEjp0zY%2Bywusyelm8ndjJn%2BP%2Fv80XGQwCS4Ir0TXnYBJS%2Bs2DddpxrislfPc7533JKrfoN97J7sc5LGlk3BSA25Cxx3z5p5BPLmiS2Vo2Fy8fwM%2B3hHSn942oI40MEJON0CYBkO4%2Fw%2B0QCn8aLU0R0bHwBsQz1Hb6fRpUuwS3c1lA2FXxJfEtPdU0HsKU5HUDzgqRZd1HZwlwyAHOZbzmmdFkFV4oakABTWqi9qj6yOTDI1%2BT%2FczMLXumsQGOqUB%2Byqf22nK6d9EOTA%2Be%2B9efiZUUksduL8kCqjA4XWSBozCkkvHcstZdTbwKd58QuSJGp3FXuM8NEuRK%2FWP2HaZXqaGkQIWPFSNjHwRocM57pNKOHiqtJPjEYJvpaWxeNaSiv%2BPSEC92g1KwOVgoyLxon%2FMozpz%2FvmLxHfdV43zXnol4bMO7z%2BqXddKXmsWZyw9pR6q6Awnoj%2FkS%2Bu%2BiCmOFYbASfDj&X-Amz-Signature=4429b8fbff02c41f38734530327d1e9b860204898c4e04198db84167ec426c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVX3KMT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDso0ERZyvUCkrYHTSQJttyNSh1O1Alkf4vd%2BncV4vcPgIgMFmMV1i2qB6dAIuWLJ6TMjqbwavU3R%2BVEcimfKIg9zMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FcaOWE986n%2BsIjCrcA96nTkKlVeCjFk6nfqadV2%2F5L3d7hmJh3xugLIpcT22UE1qhcvOpGMqJjH0NumTjMigT5AlqEKeiVKW1avxAd3rxdvPhonHqi6lmwgrDc8wLp%2BemxrmYcDBN4Mdi2ok5fLBxKACqnT0iJWzbKS5RTddji4WOXUhmUNaoICMDgwqt4s33jm4nMK7r5RB%2BEVcOQv%2BcetYRDDMvceMmw3hSPFkrON6mdlkySwbEl%2BBHuhhT0dO5AdfAPalkERIsyi%2FVPWPqxK2WrVlPpw9Syd1Al5wcFkvsHlCusdHl22wzMok8rL0EbrMlzokuAfgozFHDCQgGo0IV51t7F6HFvZkrvDnGWAbb276WzKA9WSWf%2BHdGves1DneS%2B7FXHxOcz%2FWRPvkh%2BRmcsEjp0zY%2Bywusyelm8ndjJn%2BP%2Fv80XGQwCS4Ir0TXnYBJS%2Bs2DddpxrislfPc7533JKrfoN97J7sc5LGlk3BSA25Cxx3z5p5BPLmiS2Vo2Fy8fwM%2B3hHSn942oI40MEJON0CYBkO4%2Fw%2B0QCn8aLU0R0bHwBsQz1Hb6fRpUuwS3c1lA2FXxJfEtPdU0HsKU5HUDzgqRZd1HZwlwyAHOZbzmmdFkFV4oakABTWqi9qj6yOTDI1%2BT%2FczMLXumsQGOqUB%2Byqf22nK6d9EOTA%2Be%2B9efiZUUksduL8kCqjA4XWSBozCkkvHcstZdTbwKd58QuSJGp3FXuM8NEuRK%2FWP2HaZXqaGkQIWPFSNjHwRocM57pNKOHiqtJPjEYJvpaWxeNaSiv%2BPSEC92g1KwOVgoyLxon%2FMozpz%2FvmLxHfdV43zXnol4bMO7z%2BqXddKXmsWZyw9pR6q6Awnoj%2FkS%2Bu%2BiCmOFYbASfDj&X-Amz-Signature=e639d26d42b3af0d0f606fb2f02151433cc7ddef27d22aa71dc1d50e46d8eccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVX3KMT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDso0ERZyvUCkrYHTSQJttyNSh1O1Alkf4vd%2BncV4vcPgIgMFmMV1i2qB6dAIuWLJ6TMjqbwavU3R%2BVEcimfKIg9zMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FcaOWE986n%2BsIjCrcA96nTkKlVeCjFk6nfqadV2%2F5L3d7hmJh3xugLIpcT22UE1qhcvOpGMqJjH0NumTjMigT5AlqEKeiVKW1avxAd3rxdvPhonHqi6lmwgrDc8wLp%2BemxrmYcDBN4Mdi2ok5fLBxKACqnT0iJWzbKS5RTddji4WOXUhmUNaoICMDgwqt4s33jm4nMK7r5RB%2BEVcOQv%2BcetYRDDMvceMmw3hSPFkrON6mdlkySwbEl%2BBHuhhT0dO5AdfAPalkERIsyi%2FVPWPqxK2WrVlPpw9Syd1Al5wcFkvsHlCusdHl22wzMok8rL0EbrMlzokuAfgozFHDCQgGo0IV51t7F6HFvZkrvDnGWAbb276WzKA9WSWf%2BHdGves1DneS%2B7FXHxOcz%2FWRPvkh%2BRmcsEjp0zY%2Bywusyelm8ndjJn%2BP%2Fv80XGQwCS4Ir0TXnYBJS%2Bs2DddpxrislfPc7533JKrfoN97J7sc5LGlk3BSA25Cxx3z5p5BPLmiS2Vo2Fy8fwM%2B3hHSn942oI40MEJON0CYBkO4%2Fw%2B0QCn8aLU0R0bHwBsQz1Hb6fRpUuwS3c1lA2FXxJfEtPdU0HsKU5HUDzgqRZd1HZwlwyAHOZbzmmdFkFV4oakABTWqi9qj6yOTDI1%2BT%2FczMLXumsQGOqUB%2Byqf22nK6d9EOTA%2Be%2B9efiZUUksduL8kCqjA4XWSBozCkkvHcstZdTbwKd58QuSJGp3FXuM8NEuRK%2FWP2HaZXqaGkQIWPFSNjHwRocM57pNKOHiqtJPjEYJvpaWxeNaSiv%2BPSEC92g1KwOVgoyLxon%2FMozpz%2FvmLxHfdV43zXnol4bMO7z%2BqXddKXmsWZyw9pR6q6Awnoj%2FkS%2Bu%2BiCmOFYbASfDj&X-Amz-Signature=f26a9515022e8fdf54d504c54879c06979f98a2e207f468a1c77a88fc5e01109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVX3KMT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDso0ERZyvUCkrYHTSQJttyNSh1O1Alkf4vd%2BncV4vcPgIgMFmMV1i2qB6dAIuWLJ6TMjqbwavU3R%2BVEcimfKIg9zMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FcaOWE986n%2BsIjCrcA96nTkKlVeCjFk6nfqadV2%2F5L3d7hmJh3xugLIpcT22UE1qhcvOpGMqJjH0NumTjMigT5AlqEKeiVKW1avxAd3rxdvPhonHqi6lmwgrDc8wLp%2BemxrmYcDBN4Mdi2ok5fLBxKACqnT0iJWzbKS5RTddji4WOXUhmUNaoICMDgwqt4s33jm4nMK7r5RB%2BEVcOQv%2BcetYRDDMvceMmw3hSPFkrON6mdlkySwbEl%2BBHuhhT0dO5AdfAPalkERIsyi%2FVPWPqxK2WrVlPpw9Syd1Al5wcFkvsHlCusdHl22wzMok8rL0EbrMlzokuAfgozFHDCQgGo0IV51t7F6HFvZkrvDnGWAbb276WzKA9WSWf%2BHdGves1DneS%2B7FXHxOcz%2FWRPvkh%2BRmcsEjp0zY%2Bywusyelm8ndjJn%2BP%2Fv80XGQwCS4Ir0TXnYBJS%2Bs2DddpxrislfPc7533JKrfoN97J7sc5LGlk3BSA25Cxx3z5p5BPLmiS2Vo2Fy8fwM%2B3hHSn942oI40MEJON0CYBkO4%2Fw%2B0QCn8aLU0R0bHwBsQz1Hb6fRpUuwS3c1lA2FXxJfEtPdU0HsKU5HUDzgqRZd1HZwlwyAHOZbzmmdFkFV4oakABTWqi9qj6yOTDI1%2BT%2FczMLXumsQGOqUB%2Byqf22nK6d9EOTA%2Be%2B9efiZUUksduL8kCqjA4XWSBozCkkvHcstZdTbwKd58QuSJGp3FXuM8NEuRK%2FWP2HaZXqaGkQIWPFSNjHwRocM57pNKOHiqtJPjEYJvpaWxeNaSiv%2BPSEC92g1KwOVgoyLxon%2FMozpz%2FvmLxHfdV43zXnol4bMO7z%2BqXddKXmsWZyw9pR6q6Awnoj%2FkS%2Bu%2BiCmOFYbASfDj&X-Amz-Signature=7c28a0f2c501bcd2944dce01e620794a0d91de282ed1741334663fb54a5391f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVX3KMT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDso0ERZyvUCkrYHTSQJttyNSh1O1Alkf4vd%2BncV4vcPgIgMFmMV1i2qB6dAIuWLJ6TMjqbwavU3R%2BVEcimfKIg9zMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FcaOWE986n%2BsIjCrcA96nTkKlVeCjFk6nfqadV2%2F5L3d7hmJh3xugLIpcT22UE1qhcvOpGMqJjH0NumTjMigT5AlqEKeiVKW1avxAd3rxdvPhonHqi6lmwgrDc8wLp%2BemxrmYcDBN4Mdi2ok5fLBxKACqnT0iJWzbKS5RTddji4WOXUhmUNaoICMDgwqt4s33jm4nMK7r5RB%2BEVcOQv%2BcetYRDDMvceMmw3hSPFkrON6mdlkySwbEl%2BBHuhhT0dO5AdfAPalkERIsyi%2FVPWPqxK2WrVlPpw9Syd1Al5wcFkvsHlCusdHl22wzMok8rL0EbrMlzokuAfgozFHDCQgGo0IV51t7F6HFvZkrvDnGWAbb276WzKA9WSWf%2BHdGves1DneS%2B7FXHxOcz%2FWRPvkh%2BRmcsEjp0zY%2Bywusyelm8ndjJn%2BP%2Fv80XGQwCS4Ir0TXnYBJS%2Bs2DddpxrislfPc7533JKrfoN97J7sc5LGlk3BSA25Cxx3z5p5BPLmiS2Vo2Fy8fwM%2B3hHSn942oI40MEJON0CYBkO4%2Fw%2B0QCn8aLU0R0bHwBsQz1Hb6fRpUuwS3c1lA2FXxJfEtPdU0HsKU5HUDzgqRZd1HZwlwyAHOZbzmmdFkFV4oakABTWqi9qj6yOTDI1%2BT%2FczMLXumsQGOqUB%2Byqf22nK6d9EOTA%2Be%2B9efiZUUksduL8kCqjA4XWSBozCkkvHcstZdTbwKd58QuSJGp3FXuM8NEuRK%2FWP2HaZXqaGkQIWPFSNjHwRocM57pNKOHiqtJPjEYJvpaWxeNaSiv%2BPSEC92g1KwOVgoyLxon%2FMozpz%2FvmLxHfdV43zXnol4bMO7z%2BqXddKXmsWZyw9pR6q6Awnoj%2FkS%2Bu%2BiCmOFYbASfDj&X-Amz-Signature=9c1059b8f5e26ab5fc9932200caa9bb0dbf0b2fbf869aaf921ff3a1968805fe5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVX3KMT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDso0ERZyvUCkrYHTSQJttyNSh1O1Alkf4vd%2BncV4vcPgIgMFmMV1i2qB6dAIuWLJ6TMjqbwavU3R%2BVEcimfKIg9zMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FcaOWE986n%2BsIjCrcA96nTkKlVeCjFk6nfqadV2%2F5L3d7hmJh3xugLIpcT22UE1qhcvOpGMqJjH0NumTjMigT5AlqEKeiVKW1avxAd3rxdvPhonHqi6lmwgrDc8wLp%2BemxrmYcDBN4Mdi2ok5fLBxKACqnT0iJWzbKS5RTddji4WOXUhmUNaoICMDgwqt4s33jm4nMK7r5RB%2BEVcOQv%2BcetYRDDMvceMmw3hSPFkrON6mdlkySwbEl%2BBHuhhT0dO5AdfAPalkERIsyi%2FVPWPqxK2WrVlPpw9Syd1Al5wcFkvsHlCusdHl22wzMok8rL0EbrMlzokuAfgozFHDCQgGo0IV51t7F6HFvZkrvDnGWAbb276WzKA9WSWf%2BHdGves1DneS%2B7FXHxOcz%2FWRPvkh%2BRmcsEjp0zY%2Bywusyelm8ndjJn%2BP%2Fv80XGQwCS4Ir0TXnYBJS%2Bs2DddpxrislfPc7533JKrfoN97J7sc5LGlk3BSA25Cxx3z5p5BPLmiS2Vo2Fy8fwM%2B3hHSn942oI40MEJON0CYBkO4%2Fw%2B0QCn8aLU0R0bHwBsQz1Hb6fRpUuwS3c1lA2FXxJfEtPdU0HsKU5HUDzgqRZd1HZwlwyAHOZbzmmdFkFV4oakABTWqi9qj6yOTDI1%2BT%2FczMLXumsQGOqUB%2Byqf22nK6d9EOTA%2Be%2B9efiZUUksduL8kCqjA4XWSBozCkkvHcstZdTbwKd58QuSJGp3FXuM8NEuRK%2FWP2HaZXqaGkQIWPFSNjHwRocM57pNKOHiqtJPjEYJvpaWxeNaSiv%2BPSEC92g1KwOVgoyLxon%2FMozpz%2FvmLxHfdV43zXnol4bMO7z%2BqXddKXmsWZyw9pR6q6Awnoj%2FkS%2Bu%2BiCmOFYbASfDj&X-Amz-Signature=1b56b6359d003396081a7656a16c5365d9ef70968caec63aa8281c83f26ef741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAVX3KMT%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T005051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIQDso0ERZyvUCkrYHTSQJttyNSh1O1Alkf4vd%2BncV4vcPgIgMFmMV1i2qB6dAIuWLJ6TMjqbwavU3R%2BVEcimfKIg9zMqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPo%2FcaOWE986n%2BsIjCrcA96nTkKlVeCjFk6nfqadV2%2F5L3d7hmJh3xugLIpcT22UE1qhcvOpGMqJjH0NumTjMigT5AlqEKeiVKW1avxAd3rxdvPhonHqi6lmwgrDc8wLp%2BemxrmYcDBN4Mdi2ok5fLBxKACqnT0iJWzbKS5RTddji4WOXUhmUNaoICMDgwqt4s33jm4nMK7r5RB%2BEVcOQv%2BcetYRDDMvceMmw3hSPFkrON6mdlkySwbEl%2BBHuhhT0dO5AdfAPalkERIsyi%2FVPWPqxK2WrVlPpw9Syd1Al5wcFkvsHlCusdHl22wzMok8rL0EbrMlzokuAfgozFHDCQgGo0IV51t7F6HFvZkrvDnGWAbb276WzKA9WSWf%2BHdGves1DneS%2B7FXHxOcz%2FWRPvkh%2BRmcsEjp0zY%2Bywusyelm8ndjJn%2BP%2Fv80XGQwCS4Ir0TXnYBJS%2Bs2DddpxrislfPc7533JKrfoN97J7sc5LGlk3BSA25Cxx3z5p5BPLmiS2Vo2Fy8fwM%2B3hHSn942oI40MEJON0CYBkO4%2Fw%2B0QCn8aLU0R0bHwBsQz1Hb6fRpUuwS3c1lA2FXxJfEtPdU0HsKU5HUDzgqRZd1HZwlwyAHOZbzmmdFkFV4oakABTWqi9qj6yOTDI1%2BT%2FczMLXumsQGOqUB%2Byqf22nK6d9EOTA%2Be%2B9efiZUUksduL8kCqjA4XWSBozCkkvHcstZdTbwKd58QuSJGp3FXuM8NEuRK%2FWP2HaZXqaGkQIWPFSNjHwRocM57pNKOHiqtJPjEYJvpaWxeNaSiv%2BPSEC92g1KwOVgoyLxon%2FMozpz%2FvmLxHfdV43zXnol4bMO7z%2BqXddKXmsWZyw9pR6q6Awnoj%2FkS%2Bu%2BiCmOFYbASfDj&X-Amz-Signature=5e21f1b3e931a343e83894d4ad3cd69c3f5f9cd8fa0bd4a1f6e6eea621334a2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
