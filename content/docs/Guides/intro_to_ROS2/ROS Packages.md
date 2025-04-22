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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ONZ7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIARN0NqetnoQW7uclbA%2FpukHTilEt2KQUEUSyK1LkpL4AiEAqwB65CuPVlW25gcNMW6oLzzvX4X43dTQVAeRY3ZT7PIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdbbQz2535evS4D7CrcA2W7wdf8hi9j0onaaXbFuH3sF%2FhtKTyYCijWkbqoH1%2B%2F9kjgbfZ%2BTt%2FydChArpgzNch%2BYteqpqY0qnHmUbJsflOZQITu1Kr%2Fc4H14vpFC3yrspVquQAuYMEtMK1hrz7nZjW2vrKk%2BZEo0px0Ab%2F%2F5yzqvwm0eXjbtA%2Bt6lfcSwsiVIBEINn2DRt0Mm2DWTvDWtBisG5tcacVcaKC16sc1S5lOP3mP7kF5oSWEGeYbPuTjXovwge5HlGNINefcL0jp7TmPV6dyg72b%2Be56Kmk8mydr9%2F6Oqh28tbzBRE85bYETDizr9i8rGhmEAvtAhbefRejeI2H1uNVPgdhMVzPkLEFS6GvaDyyit4%2FV%2BSaAB3nvPW%2Bv5HfwbujDZi0LcbgecZpsHSm8HC5%2FYOq%2BUw5A6JQi1qI7Suu7xWrjNrjhR0Ujc5xBJzABSYEJnP9KHhCTlJtq4NHoeC%2BJEbZYWr8w0GtsQMT4i1ViHk0%2FuwQrMoxX3r%2FIm3S0r2nMl%2Bl3S70PcB8ldoxkosAOhxGW53zQ9ZmTz3Gu9eqQ75pBUiAFmP0VBKIK%2Fq5zBhIh%2FVxyIZiR5VZbMIbXPitiiE5x9npezz%2Ff4EJHIeOpQqGqG5O%2BEpkqx66%2FXYvb%2FEGtVQmMJHxm8AGOqUBLtAFLxx%2FhSOicmVTgYEkl3gVeck2ggU8EZ5F160w6BlaEmQuJ8MN36x8Rx%2FtU9rev9lP8rbAVUdS6UDJUiSmFbEjp0FO6LBH1QJodSPQw687PF8Gb2s9ybMgQ9wCmqvAZgMq13LkMRMY62Sse4YhTYqawHtZQ%2BznARnQw3t9QxKD05S%2FaFn37N%2Fb19NNooYHvEgPc%2Bw3HOvTUwfNHY4YTdhFntJ7&X-Amz-Signature=5c6d6c3d9289dc59321db26677aceb6a701fefd62beb01f3d3a8c54f27a1c1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ONZ7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIARN0NqetnoQW7uclbA%2FpukHTilEt2KQUEUSyK1LkpL4AiEAqwB65CuPVlW25gcNMW6oLzzvX4X43dTQVAeRY3ZT7PIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdbbQz2535evS4D7CrcA2W7wdf8hi9j0onaaXbFuH3sF%2FhtKTyYCijWkbqoH1%2B%2F9kjgbfZ%2BTt%2FydChArpgzNch%2BYteqpqY0qnHmUbJsflOZQITu1Kr%2Fc4H14vpFC3yrspVquQAuYMEtMK1hrz7nZjW2vrKk%2BZEo0px0Ab%2F%2F5yzqvwm0eXjbtA%2Bt6lfcSwsiVIBEINn2DRt0Mm2DWTvDWtBisG5tcacVcaKC16sc1S5lOP3mP7kF5oSWEGeYbPuTjXovwge5HlGNINefcL0jp7TmPV6dyg72b%2Be56Kmk8mydr9%2F6Oqh28tbzBRE85bYETDizr9i8rGhmEAvtAhbefRejeI2H1uNVPgdhMVzPkLEFS6GvaDyyit4%2FV%2BSaAB3nvPW%2Bv5HfwbujDZi0LcbgecZpsHSm8HC5%2FYOq%2BUw5A6JQi1qI7Suu7xWrjNrjhR0Ujc5xBJzABSYEJnP9KHhCTlJtq4NHoeC%2BJEbZYWr8w0GtsQMT4i1ViHk0%2FuwQrMoxX3r%2FIm3S0r2nMl%2Bl3S70PcB8ldoxkosAOhxGW53zQ9ZmTz3Gu9eqQ75pBUiAFmP0VBKIK%2Fq5zBhIh%2FVxyIZiR5VZbMIbXPitiiE5x9npezz%2Ff4EJHIeOpQqGqG5O%2BEpkqx66%2FXYvb%2FEGtVQmMJHxm8AGOqUBLtAFLxx%2FhSOicmVTgYEkl3gVeck2ggU8EZ5F160w6BlaEmQuJ8MN36x8Rx%2FtU9rev9lP8rbAVUdS6UDJUiSmFbEjp0FO6LBH1QJodSPQw687PF8Gb2s9ybMgQ9wCmqvAZgMq13LkMRMY62Sse4YhTYqawHtZQ%2BznARnQw3t9QxKD05S%2FaFn37N%2Fb19NNooYHvEgPc%2Bw3HOvTUwfNHY4YTdhFntJ7&X-Amz-Signature=5e6e5162680b5c0bd5dc5ff85f3b7aadb6199255aec2764e71d57936e814f45b&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ONZ7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIARN0NqetnoQW7uclbA%2FpukHTilEt2KQUEUSyK1LkpL4AiEAqwB65CuPVlW25gcNMW6oLzzvX4X43dTQVAeRY3ZT7PIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdbbQz2535evS4D7CrcA2W7wdf8hi9j0onaaXbFuH3sF%2FhtKTyYCijWkbqoH1%2B%2F9kjgbfZ%2BTt%2FydChArpgzNch%2BYteqpqY0qnHmUbJsflOZQITu1Kr%2Fc4H14vpFC3yrspVquQAuYMEtMK1hrz7nZjW2vrKk%2BZEo0px0Ab%2F%2F5yzqvwm0eXjbtA%2Bt6lfcSwsiVIBEINn2DRt0Mm2DWTvDWtBisG5tcacVcaKC16sc1S5lOP3mP7kF5oSWEGeYbPuTjXovwge5HlGNINefcL0jp7TmPV6dyg72b%2Be56Kmk8mydr9%2F6Oqh28tbzBRE85bYETDizr9i8rGhmEAvtAhbefRejeI2H1uNVPgdhMVzPkLEFS6GvaDyyit4%2FV%2BSaAB3nvPW%2Bv5HfwbujDZi0LcbgecZpsHSm8HC5%2FYOq%2BUw5A6JQi1qI7Suu7xWrjNrjhR0Ujc5xBJzABSYEJnP9KHhCTlJtq4NHoeC%2BJEbZYWr8w0GtsQMT4i1ViHk0%2FuwQrMoxX3r%2FIm3S0r2nMl%2Bl3S70PcB8ldoxkosAOhxGW53zQ9ZmTz3Gu9eqQ75pBUiAFmP0VBKIK%2Fq5zBhIh%2FVxyIZiR5VZbMIbXPitiiE5x9npezz%2Ff4EJHIeOpQqGqG5O%2BEpkqx66%2FXYvb%2FEGtVQmMJHxm8AGOqUBLtAFLxx%2FhSOicmVTgYEkl3gVeck2ggU8EZ5F160w6BlaEmQuJ8MN36x8Rx%2FtU9rev9lP8rbAVUdS6UDJUiSmFbEjp0FO6LBH1QJodSPQw687PF8Gb2s9ybMgQ9wCmqvAZgMq13LkMRMY62Sse4YhTYqawHtZQ%2BznARnQw3t9QxKD05S%2FaFn37N%2Fb19NNooYHvEgPc%2Bw3HOvTUwfNHY4YTdhFntJ7&X-Amz-Signature=0e51db94457f9e630a2883e74688f25dd3053f3daacf0d07f56a8abdaf246453&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ONZ7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIARN0NqetnoQW7uclbA%2FpukHTilEt2KQUEUSyK1LkpL4AiEAqwB65CuPVlW25gcNMW6oLzzvX4X43dTQVAeRY3ZT7PIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdbbQz2535evS4D7CrcA2W7wdf8hi9j0onaaXbFuH3sF%2FhtKTyYCijWkbqoH1%2B%2F9kjgbfZ%2BTt%2FydChArpgzNch%2BYteqpqY0qnHmUbJsflOZQITu1Kr%2Fc4H14vpFC3yrspVquQAuYMEtMK1hrz7nZjW2vrKk%2BZEo0px0Ab%2F%2F5yzqvwm0eXjbtA%2Bt6lfcSwsiVIBEINn2DRt0Mm2DWTvDWtBisG5tcacVcaKC16sc1S5lOP3mP7kF5oSWEGeYbPuTjXovwge5HlGNINefcL0jp7TmPV6dyg72b%2Be56Kmk8mydr9%2F6Oqh28tbzBRE85bYETDizr9i8rGhmEAvtAhbefRejeI2H1uNVPgdhMVzPkLEFS6GvaDyyit4%2FV%2BSaAB3nvPW%2Bv5HfwbujDZi0LcbgecZpsHSm8HC5%2FYOq%2BUw5A6JQi1qI7Suu7xWrjNrjhR0Ujc5xBJzABSYEJnP9KHhCTlJtq4NHoeC%2BJEbZYWr8w0GtsQMT4i1ViHk0%2FuwQrMoxX3r%2FIm3S0r2nMl%2Bl3S70PcB8ldoxkosAOhxGW53zQ9ZmTz3Gu9eqQ75pBUiAFmP0VBKIK%2Fq5zBhIh%2FVxyIZiR5VZbMIbXPitiiE5x9npezz%2Ff4EJHIeOpQqGqG5O%2BEpkqx66%2FXYvb%2FEGtVQmMJHxm8AGOqUBLtAFLxx%2FhSOicmVTgYEkl3gVeck2ggU8EZ5F160w6BlaEmQuJ8MN36x8Rx%2FtU9rev9lP8rbAVUdS6UDJUiSmFbEjp0FO6LBH1QJodSPQw687PF8Gb2s9ybMgQ9wCmqvAZgMq13LkMRMY62Sse4YhTYqawHtZQ%2BznARnQw3t9QxKD05S%2FaFn37N%2Fb19NNooYHvEgPc%2Bw3HOvTUwfNHY4YTdhFntJ7&X-Amz-Signature=27aa0a7208dd94c03a9ab7a5fdccd69a611b3985c2683af5f7f6a469ceffe9a6&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ONZ7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIARN0NqetnoQW7uclbA%2FpukHTilEt2KQUEUSyK1LkpL4AiEAqwB65CuPVlW25gcNMW6oLzzvX4X43dTQVAeRY3ZT7PIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdbbQz2535evS4D7CrcA2W7wdf8hi9j0onaaXbFuH3sF%2FhtKTyYCijWkbqoH1%2B%2F9kjgbfZ%2BTt%2FydChArpgzNch%2BYteqpqY0qnHmUbJsflOZQITu1Kr%2Fc4H14vpFC3yrspVquQAuYMEtMK1hrz7nZjW2vrKk%2BZEo0px0Ab%2F%2F5yzqvwm0eXjbtA%2Bt6lfcSwsiVIBEINn2DRt0Mm2DWTvDWtBisG5tcacVcaKC16sc1S5lOP3mP7kF5oSWEGeYbPuTjXovwge5HlGNINefcL0jp7TmPV6dyg72b%2Be56Kmk8mydr9%2F6Oqh28tbzBRE85bYETDizr9i8rGhmEAvtAhbefRejeI2H1uNVPgdhMVzPkLEFS6GvaDyyit4%2FV%2BSaAB3nvPW%2Bv5HfwbujDZi0LcbgecZpsHSm8HC5%2FYOq%2BUw5A6JQi1qI7Suu7xWrjNrjhR0Ujc5xBJzABSYEJnP9KHhCTlJtq4NHoeC%2BJEbZYWr8w0GtsQMT4i1ViHk0%2FuwQrMoxX3r%2FIm3S0r2nMl%2Bl3S70PcB8ldoxkosAOhxGW53zQ9ZmTz3Gu9eqQ75pBUiAFmP0VBKIK%2Fq5zBhIh%2FVxyIZiR5VZbMIbXPitiiE5x9npezz%2Ff4EJHIeOpQqGqG5O%2BEpkqx66%2FXYvb%2FEGtVQmMJHxm8AGOqUBLtAFLxx%2FhSOicmVTgYEkl3gVeck2ggU8EZ5F160w6BlaEmQuJ8MN36x8Rx%2FtU9rev9lP8rbAVUdS6UDJUiSmFbEjp0FO6LBH1QJodSPQw687PF8Gb2s9ybMgQ9wCmqvAZgMq13LkMRMY62Sse4YhTYqawHtZQ%2BznARnQw3t9QxKD05S%2FaFn37N%2Fb19NNooYHvEgPc%2Bw3HOvTUwfNHY4YTdhFntJ7&X-Amz-Signature=614b95a3b3d7c1fbab3ef82d6af691ac8a1914e67c0d3d3e2ad8f36cc47d2156&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ONZ7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIARN0NqetnoQW7uclbA%2FpukHTilEt2KQUEUSyK1LkpL4AiEAqwB65CuPVlW25gcNMW6oLzzvX4X43dTQVAeRY3ZT7PIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdbbQz2535evS4D7CrcA2W7wdf8hi9j0onaaXbFuH3sF%2FhtKTyYCijWkbqoH1%2B%2F9kjgbfZ%2BTt%2FydChArpgzNch%2BYteqpqY0qnHmUbJsflOZQITu1Kr%2Fc4H14vpFC3yrspVquQAuYMEtMK1hrz7nZjW2vrKk%2BZEo0px0Ab%2F%2F5yzqvwm0eXjbtA%2Bt6lfcSwsiVIBEINn2DRt0Mm2DWTvDWtBisG5tcacVcaKC16sc1S5lOP3mP7kF5oSWEGeYbPuTjXovwge5HlGNINefcL0jp7TmPV6dyg72b%2Be56Kmk8mydr9%2F6Oqh28tbzBRE85bYETDizr9i8rGhmEAvtAhbefRejeI2H1uNVPgdhMVzPkLEFS6GvaDyyit4%2FV%2BSaAB3nvPW%2Bv5HfwbujDZi0LcbgecZpsHSm8HC5%2FYOq%2BUw5A6JQi1qI7Suu7xWrjNrjhR0Ujc5xBJzABSYEJnP9KHhCTlJtq4NHoeC%2BJEbZYWr8w0GtsQMT4i1ViHk0%2FuwQrMoxX3r%2FIm3S0r2nMl%2Bl3S70PcB8ldoxkosAOhxGW53zQ9ZmTz3Gu9eqQ75pBUiAFmP0VBKIK%2Fq5zBhIh%2FVxyIZiR5VZbMIbXPitiiE5x9npezz%2Ff4EJHIeOpQqGqG5O%2BEpkqx66%2FXYvb%2FEGtVQmMJHxm8AGOqUBLtAFLxx%2FhSOicmVTgYEkl3gVeck2ggU8EZ5F160w6BlaEmQuJ8MN36x8Rx%2FtU9rev9lP8rbAVUdS6UDJUiSmFbEjp0FO6LBH1QJodSPQw687PF8Gb2s9ybMgQ9wCmqvAZgMq13LkMRMY62Sse4YhTYqawHtZQ%2BznARnQw3t9QxKD05S%2FaFn37N%2Fb19NNooYHvEgPc%2Bw3HOvTUwfNHY4YTdhFntJ7&X-Amz-Signature=5e37f3efe154ff2f75d7707a5f717c80b81ad55f62c59813f9800f2f5678b42a&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR5ONZ7Z%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T022124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJHMEUCIARN0NqetnoQW7uclbA%2FpukHTilEt2KQUEUSyK1LkpL4AiEAqwB65CuPVlW25gcNMW6oLzzvX4X43dTQVAeRY3ZT7PIqiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdbbQz2535evS4D7CrcA2W7wdf8hi9j0onaaXbFuH3sF%2FhtKTyYCijWkbqoH1%2B%2F9kjgbfZ%2BTt%2FydChArpgzNch%2BYteqpqY0qnHmUbJsflOZQITu1Kr%2Fc4H14vpFC3yrspVquQAuYMEtMK1hrz7nZjW2vrKk%2BZEo0px0Ab%2F%2F5yzqvwm0eXjbtA%2Bt6lfcSwsiVIBEINn2DRt0Mm2DWTvDWtBisG5tcacVcaKC16sc1S5lOP3mP7kF5oSWEGeYbPuTjXovwge5HlGNINefcL0jp7TmPV6dyg72b%2Be56Kmk8mydr9%2F6Oqh28tbzBRE85bYETDizr9i8rGhmEAvtAhbefRejeI2H1uNVPgdhMVzPkLEFS6GvaDyyit4%2FV%2BSaAB3nvPW%2Bv5HfwbujDZi0LcbgecZpsHSm8HC5%2FYOq%2BUw5A6JQi1qI7Suu7xWrjNrjhR0Ujc5xBJzABSYEJnP9KHhCTlJtq4NHoeC%2BJEbZYWr8w0GtsQMT4i1ViHk0%2FuwQrMoxX3r%2FIm3S0r2nMl%2Bl3S70PcB8ldoxkosAOhxGW53zQ9ZmTz3Gu9eqQ75pBUiAFmP0VBKIK%2Fq5zBhIh%2FVxyIZiR5VZbMIbXPitiiE5x9npezz%2Ff4EJHIeOpQqGqG5O%2BEpkqx66%2FXYvb%2FEGtVQmMJHxm8AGOqUBLtAFLxx%2FhSOicmVTgYEkl3gVeck2ggU8EZ5F160w6BlaEmQuJ8MN36x8Rx%2FtU9rev9lP8rbAVUdS6UDJUiSmFbEjp0FO6LBH1QJodSPQw687PF8Gb2s9ybMgQ9wCmqvAZgMq13LkMRMY62Sse4YhTYqawHtZQ%2BznARnQw3t9QxKD05S%2FaFn37N%2Fb19NNooYHvEgPc%2Bw3HOvTUwfNHY4YTdhFntJ7&X-Amz-Signature=784028629f75fdd7b03099c34b92d073a99f47a0314b950fe768b5242737be77&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
