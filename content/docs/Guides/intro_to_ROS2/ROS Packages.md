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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GLPZK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAk0gicqPdZ%2FU%2BE8mj7J%2BBx0gZ%2FwEECEyd4ZhLombL41AiAL8NjchVgsxqGZPAEzsjibDGpT8bJtum9CJsyDxQoUFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2rlrT%2FTKA6BUmJWKtwDP6oaxBpctOIiCpfb%2Bgf0ESNT36aAUofpcE37QX%2FSnZfPs5lh%2BzSYXKAA6rdAub9fxHzIVAxVpP1eTLO0SAmWWcw9HqJN5YrPhAMTAORBXkflOANe%2B%2Fz4Fd1Rjyug0gUBunPJ2C%2FdxuojTDfXof%2Fyzqca0kGDyI6k6nc2jQndwg1esmR86ur1RERk8B7jVifxbfYUt0rqqCxM3%2FAH4G57aitoEJOoFG6HtYVIqa5nxI9HeRCwUS8PV%2Bh8VF6NKj%2F0Rfe3lbGIisVDnnkuvlOuxzwgmVzItH2BtczppoZyn5TvXTieTJbdmyGvrV0byu8iARX2wLHcSzvbab1bE7vl1lxJh2ToxbeyWkDCGTsUf0FZhk5kUXj%2Fe267Lauhujh%2Fo%2BXKqVmqEeDRCj9%2F9DFmxKPO02FJvEBn8KsJV9b8bIeiWHluyfSWw%2FAgwyJHM7NCVm84w09hszvtLAnd0%2FtnlWABMDC%2Fh5HBVY7%2F9T7k7i8wZdqWZBitWcUZoDmZJA%2B35QOeVl7sZXw%2F8OigXLRHA2C3PmYxsnaHWu4qHksAsOtw5BFVuHVpNPxgGPPqdgObKtTAXuNQx642NlxFpXyDBpXl0WhxXLK3K464cgivZXJoOuyn%2FCpqRe2H4NUwo%2BnAxAY6pgFV4jNsw1QuxcmqoHeHD24Gd%2Fv5zfCMf9zNfNe0Cs%2Bvj%2FtouaP0Ps56VVhsRbVCpC0Lt%2BL7aMaMmBCii8aH7Fjelf9qYR9m8WaxR15W%2FGRMu7JQoW1b6kk3eoLSMic89EvTIW08d8ZHLaxfvKO67Hpvi%2FaWfgVYd1EKMhnugwowP28DeCba7JwP8iQQcLIrl6gTNbCab0dWLrTES6s5rnA19N7uSadk&X-Amz-Signature=d934ce40e50d3caab2ed47bb874babb70d956ef8b6ea5349a154510f7cd943e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GLPZK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAk0gicqPdZ%2FU%2BE8mj7J%2BBx0gZ%2FwEECEyd4ZhLombL41AiAL8NjchVgsxqGZPAEzsjibDGpT8bJtum9CJsyDxQoUFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2rlrT%2FTKA6BUmJWKtwDP6oaxBpctOIiCpfb%2Bgf0ESNT36aAUofpcE37QX%2FSnZfPs5lh%2BzSYXKAA6rdAub9fxHzIVAxVpP1eTLO0SAmWWcw9HqJN5YrPhAMTAORBXkflOANe%2B%2Fz4Fd1Rjyug0gUBunPJ2C%2FdxuojTDfXof%2Fyzqca0kGDyI6k6nc2jQndwg1esmR86ur1RERk8B7jVifxbfYUt0rqqCxM3%2FAH4G57aitoEJOoFG6HtYVIqa5nxI9HeRCwUS8PV%2Bh8VF6NKj%2F0Rfe3lbGIisVDnnkuvlOuxzwgmVzItH2BtczppoZyn5TvXTieTJbdmyGvrV0byu8iARX2wLHcSzvbab1bE7vl1lxJh2ToxbeyWkDCGTsUf0FZhk5kUXj%2Fe267Lauhujh%2Fo%2BXKqVmqEeDRCj9%2F9DFmxKPO02FJvEBn8KsJV9b8bIeiWHluyfSWw%2FAgwyJHM7NCVm84w09hszvtLAnd0%2FtnlWABMDC%2Fh5HBVY7%2F9T7k7i8wZdqWZBitWcUZoDmZJA%2B35QOeVl7sZXw%2F8OigXLRHA2C3PmYxsnaHWu4qHksAsOtw5BFVuHVpNPxgGPPqdgObKtTAXuNQx642NlxFpXyDBpXl0WhxXLK3K464cgivZXJoOuyn%2FCpqRe2H4NUwo%2BnAxAY6pgFV4jNsw1QuxcmqoHeHD24Gd%2Fv5zfCMf9zNfNe0Cs%2Bvj%2FtouaP0Ps56VVhsRbVCpC0Lt%2BL7aMaMmBCii8aH7Fjelf9qYR9m8WaxR15W%2FGRMu7JQoW1b6kk3eoLSMic89EvTIW08d8ZHLaxfvKO67Hpvi%2FaWfgVYd1EKMhnugwowP28DeCba7JwP8iQQcLIrl6gTNbCab0dWLrTES6s5rnA19N7uSadk&X-Amz-Signature=b19050930e0da0e9f15688e89c5bf5ba8b192f19971cd0ff6003840d873100fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GLPZK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAk0gicqPdZ%2FU%2BE8mj7J%2BBx0gZ%2FwEECEyd4ZhLombL41AiAL8NjchVgsxqGZPAEzsjibDGpT8bJtum9CJsyDxQoUFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2rlrT%2FTKA6BUmJWKtwDP6oaxBpctOIiCpfb%2Bgf0ESNT36aAUofpcE37QX%2FSnZfPs5lh%2BzSYXKAA6rdAub9fxHzIVAxVpP1eTLO0SAmWWcw9HqJN5YrPhAMTAORBXkflOANe%2B%2Fz4Fd1Rjyug0gUBunPJ2C%2FdxuojTDfXof%2Fyzqca0kGDyI6k6nc2jQndwg1esmR86ur1RERk8B7jVifxbfYUt0rqqCxM3%2FAH4G57aitoEJOoFG6HtYVIqa5nxI9HeRCwUS8PV%2Bh8VF6NKj%2F0Rfe3lbGIisVDnnkuvlOuxzwgmVzItH2BtczppoZyn5TvXTieTJbdmyGvrV0byu8iARX2wLHcSzvbab1bE7vl1lxJh2ToxbeyWkDCGTsUf0FZhk5kUXj%2Fe267Lauhujh%2Fo%2BXKqVmqEeDRCj9%2F9DFmxKPO02FJvEBn8KsJV9b8bIeiWHluyfSWw%2FAgwyJHM7NCVm84w09hszvtLAnd0%2FtnlWABMDC%2Fh5HBVY7%2F9T7k7i8wZdqWZBitWcUZoDmZJA%2B35QOeVl7sZXw%2F8OigXLRHA2C3PmYxsnaHWu4qHksAsOtw5BFVuHVpNPxgGPPqdgObKtTAXuNQx642NlxFpXyDBpXl0WhxXLK3K464cgivZXJoOuyn%2FCpqRe2H4NUwo%2BnAxAY6pgFV4jNsw1QuxcmqoHeHD24Gd%2Fv5zfCMf9zNfNe0Cs%2Bvj%2FtouaP0Ps56VVhsRbVCpC0Lt%2BL7aMaMmBCii8aH7Fjelf9qYR9m8WaxR15W%2FGRMu7JQoW1b6kk3eoLSMic89EvTIW08d8ZHLaxfvKO67Hpvi%2FaWfgVYd1EKMhnugwowP28DeCba7JwP8iQQcLIrl6gTNbCab0dWLrTES6s5rnA19N7uSadk&X-Amz-Signature=75b0c6239c8b4d00efcf7cd5b837a831e15967b18f587f7c41674bfbb0f19391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GLPZK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAk0gicqPdZ%2FU%2BE8mj7J%2BBx0gZ%2FwEECEyd4ZhLombL41AiAL8NjchVgsxqGZPAEzsjibDGpT8bJtum9CJsyDxQoUFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2rlrT%2FTKA6BUmJWKtwDP6oaxBpctOIiCpfb%2Bgf0ESNT36aAUofpcE37QX%2FSnZfPs5lh%2BzSYXKAA6rdAub9fxHzIVAxVpP1eTLO0SAmWWcw9HqJN5YrPhAMTAORBXkflOANe%2B%2Fz4Fd1Rjyug0gUBunPJ2C%2FdxuojTDfXof%2Fyzqca0kGDyI6k6nc2jQndwg1esmR86ur1RERk8B7jVifxbfYUt0rqqCxM3%2FAH4G57aitoEJOoFG6HtYVIqa5nxI9HeRCwUS8PV%2Bh8VF6NKj%2F0Rfe3lbGIisVDnnkuvlOuxzwgmVzItH2BtczppoZyn5TvXTieTJbdmyGvrV0byu8iARX2wLHcSzvbab1bE7vl1lxJh2ToxbeyWkDCGTsUf0FZhk5kUXj%2Fe267Lauhujh%2Fo%2BXKqVmqEeDRCj9%2F9DFmxKPO02FJvEBn8KsJV9b8bIeiWHluyfSWw%2FAgwyJHM7NCVm84w09hszvtLAnd0%2FtnlWABMDC%2Fh5HBVY7%2F9T7k7i8wZdqWZBitWcUZoDmZJA%2B35QOeVl7sZXw%2F8OigXLRHA2C3PmYxsnaHWu4qHksAsOtw5BFVuHVpNPxgGPPqdgObKtTAXuNQx642NlxFpXyDBpXl0WhxXLK3K464cgivZXJoOuyn%2FCpqRe2H4NUwo%2BnAxAY6pgFV4jNsw1QuxcmqoHeHD24Gd%2Fv5zfCMf9zNfNe0Cs%2Bvj%2FtouaP0Ps56VVhsRbVCpC0Lt%2BL7aMaMmBCii8aH7Fjelf9qYR9m8WaxR15W%2FGRMu7JQoW1b6kk3eoLSMic89EvTIW08d8ZHLaxfvKO67Hpvi%2FaWfgVYd1EKMhnugwowP28DeCba7JwP8iQQcLIrl6gTNbCab0dWLrTES6s5rnA19N7uSadk&X-Amz-Signature=5e40ad21c43119d32de6ea43e31eb8d8a0679d8e96d91016e31fd978e5755cdf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GLPZK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAk0gicqPdZ%2FU%2BE8mj7J%2BBx0gZ%2FwEECEyd4ZhLombL41AiAL8NjchVgsxqGZPAEzsjibDGpT8bJtum9CJsyDxQoUFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2rlrT%2FTKA6BUmJWKtwDP6oaxBpctOIiCpfb%2Bgf0ESNT36aAUofpcE37QX%2FSnZfPs5lh%2BzSYXKAA6rdAub9fxHzIVAxVpP1eTLO0SAmWWcw9HqJN5YrPhAMTAORBXkflOANe%2B%2Fz4Fd1Rjyug0gUBunPJ2C%2FdxuojTDfXof%2Fyzqca0kGDyI6k6nc2jQndwg1esmR86ur1RERk8B7jVifxbfYUt0rqqCxM3%2FAH4G57aitoEJOoFG6HtYVIqa5nxI9HeRCwUS8PV%2Bh8VF6NKj%2F0Rfe3lbGIisVDnnkuvlOuxzwgmVzItH2BtczppoZyn5TvXTieTJbdmyGvrV0byu8iARX2wLHcSzvbab1bE7vl1lxJh2ToxbeyWkDCGTsUf0FZhk5kUXj%2Fe267Lauhujh%2Fo%2BXKqVmqEeDRCj9%2F9DFmxKPO02FJvEBn8KsJV9b8bIeiWHluyfSWw%2FAgwyJHM7NCVm84w09hszvtLAnd0%2FtnlWABMDC%2Fh5HBVY7%2F9T7k7i8wZdqWZBitWcUZoDmZJA%2B35QOeVl7sZXw%2F8OigXLRHA2C3PmYxsnaHWu4qHksAsOtw5BFVuHVpNPxgGPPqdgObKtTAXuNQx642NlxFpXyDBpXl0WhxXLK3K464cgivZXJoOuyn%2FCpqRe2H4NUwo%2BnAxAY6pgFV4jNsw1QuxcmqoHeHD24Gd%2Fv5zfCMf9zNfNe0Cs%2Bvj%2FtouaP0Ps56VVhsRbVCpC0Lt%2BL7aMaMmBCii8aH7Fjelf9qYR9m8WaxR15W%2FGRMu7JQoW1b6kk3eoLSMic89EvTIW08d8ZHLaxfvKO67Hpvi%2FaWfgVYd1EKMhnugwowP28DeCba7JwP8iQQcLIrl6gTNbCab0dWLrTES6s5rnA19N7uSadk&X-Amz-Signature=dc4cb91ac69163bc3e7e86fc33729b4e3467a6bcc5ea71180b64306921bd2386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GLPZK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAk0gicqPdZ%2FU%2BE8mj7J%2BBx0gZ%2FwEECEyd4ZhLombL41AiAL8NjchVgsxqGZPAEzsjibDGpT8bJtum9CJsyDxQoUFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2rlrT%2FTKA6BUmJWKtwDP6oaxBpctOIiCpfb%2Bgf0ESNT36aAUofpcE37QX%2FSnZfPs5lh%2BzSYXKAA6rdAub9fxHzIVAxVpP1eTLO0SAmWWcw9HqJN5YrPhAMTAORBXkflOANe%2B%2Fz4Fd1Rjyug0gUBunPJ2C%2FdxuojTDfXof%2Fyzqca0kGDyI6k6nc2jQndwg1esmR86ur1RERk8B7jVifxbfYUt0rqqCxM3%2FAH4G57aitoEJOoFG6HtYVIqa5nxI9HeRCwUS8PV%2Bh8VF6NKj%2F0Rfe3lbGIisVDnnkuvlOuxzwgmVzItH2BtczppoZyn5TvXTieTJbdmyGvrV0byu8iARX2wLHcSzvbab1bE7vl1lxJh2ToxbeyWkDCGTsUf0FZhk5kUXj%2Fe267Lauhujh%2Fo%2BXKqVmqEeDRCj9%2F9DFmxKPO02FJvEBn8KsJV9b8bIeiWHluyfSWw%2FAgwyJHM7NCVm84w09hszvtLAnd0%2FtnlWABMDC%2Fh5HBVY7%2F9T7k7i8wZdqWZBitWcUZoDmZJA%2B35QOeVl7sZXw%2F8OigXLRHA2C3PmYxsnaHWu4qHksAsOtw5BFVuHVpNPxgGPPqdgObKtTAXuNQx642NlxFpXyDBpXl0WhxXLK3K464cgivZXJoOuyn%2FCpqRe2H4NUwo%2BnAxAY6pgFV4jNsw1QuxcmqoHeHD24Gd%2Fv5zfCMf9zNfNe0Cs%2Bvj%2FtouaP0Ps56VVhsRbVCpC0Lt%2BL7aMaMmBCii8aH7Fjelf9qYR9m8WaxR15W%2FGRMu7JQoW1b6kk3eoLSMic89EvTIW08d8ZHLaxfvKO67Hpvi%2FaWfgVYd1EKMhnugwowP28DeCba7JwP8iQQcLIrl6gTNbCab0dWLrTES6s5rnA19N7uSadk&X-Amz-Signature=8bbdfc4ba6c58cd6bfd4ab1b8975b8d8b14d70ea36b59f4cc3b25ec477a31cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF5GLPZK%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIAk0gicqPdZ%2FU%2BE8mj7J%2BBx0gZ%2FwEECEyd4ZhLombL41AiAL8NjchVgsxqGZPAEzsjibDGpT8bJtum9CJsyDxQoUFCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMV2rlrT%2FTKA6BUmJWKtwDP6oaxBpctOIiCpfb%2Bgf0ESNT36aAUofpcE37QX%2FSnZfPs5lh%2BzSYXKAA6rdAub9fxHzIVAxVpP1eTLO0SAmWWcw9HqJN5YrPhAMTAORBXkflOANe%2B%2Fz4Fd1Rjyug0gUBunPJ2C%2FdxuojTDfXof%2Fyzqca0kGDyI6k6nc2jQndwg1esmR86ur1RERk8B7jVifxbfYUt0rqqCxM3%2FAH4G57aitoEJOoFG6HtYVIqa5nxI9HeRCwUS8PV%2Bh8VF6NKj%2F0Rfe3lbGIisVDnnkuvlOuxzwgmVzItH2BtczppoZyn5TvXTieTJbdmyGvrV0byu8iARX2wLHcSzvbab1bE7vl1lxJh2ToxbeyWkDCGTsUf0FZhk5kUXj%2Fe267Lauhujh%2Fo%2BXKqVmqEeDRCj9%2F9DFmxKPO02FJvEBn8KsJV9b8bIeiWHluyfSWw%2FAgwyJHM7NCVm84w09hszvtLAnd0%2FtnlWABMDC%2Fh5HBVY7%2F9T7k7i8wZdqWZBitWcUZoDmZJA%2B35QOeVl7sZXw%2F8OigXLRHA2C3PmYxsnaHWu4qHksAsOtw5BFVuHVpNPxgGPPqdgObKtTAXuNQx642NlxFpXyDBpXl0WhxXLK3K464cgivZXJoOuyn%2FCpqRe2H4NUwo%2BnAxAY6pgFV4jNsw1QuxcmqoHeHD24Gd%2Fv5zfCMf9zNfNe0Cs%2Bvj%2FtouaP0Ps56VVhsRbVCpC0Lt%2BL7aMaMmBCii8aH7Fjelf9qYR9m8WaxR15W%2FGRMu7JQoW1b6kk3eoLSMic89EvTIW08d8ZHLaxfvKO67Hpvi%2FaWfgVYd1EKMhnugwowP28DeCba7JwP8iQQcLIrl6gTNbCab0dWLrTES6s5rnA19N7uSadk&X-Amz-Signature=5a31e57d2a486c0031a8cf10851168122b9a9ea1eeb7187933d2fc52dafe90a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
