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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=e82fe18a7e0e88e92ed4283cf1d1020d249dc3a9aa4b6b313c9646c4f4b729ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=85f388536eba5697c08584273945cdd2218e6050a577d021b766804ff33a7cb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=b1b6929b8e6e5d743f49ad69a4461fc2f2ec51d9a47e700a072179fa90532b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=7c57578922551c61780af2c81361b824e56df6c08395413d6a9467bd152a8481&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=9288ffec3585a51f5c96d94de810937001805653e855e808594e364701bb4101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=971344a3afde9faab7d4f9ad0a235d7688825c3a740157e94c4c978df4184d06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=853b1aa11805031b3c29ff74e9e8e564f8c974ba0248787a1785f3fd89fd2ed2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
