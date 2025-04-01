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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN5R6TP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkLNyxutHv3dBC%2FRqY5RBo1FwyJXsRsBMbZPJqbMFuxgIgbZgazhvX4MU4%2F8dj%2BBhqBOF%2ByLZXW3QH9bnqC3MnErgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUUk3LMMYp9M%2BXVzCrcA8HV6igqHWoRSVN0DbkXFb3oOv0%2Bbl6ZMs3NVZz4R55elvpMY3NhqN2yIeoFmt3E7%2BVubq8AiBRgcc37eruhdsbIlJhILCRBpXL2r9ZahXgCpyECb%2F4abFbBCRT2h9%2BfziEGgZTpkowZfE2E5XDYs0zfX7XJAPlh8MKS6dgoiGi%2FprOUJd9GQ5wcDDtqaM%2BGNfEmer4l1h0Uk0bZuKJGy54VciTpRaxEYhtMozDdpMtaUqnoaYcHYwaiCXGYjB8TEzCtGWESHZn1vYSpoIRtVicSJXZD%2FupyNLeYcDrNTrI4VaaQ3nXS1nEZSPpkkYfpy6Ka%2Fd7QlSgiD6xY4a3WEIk2xlVLB2nfMxi%2BH4hiPbkMIuJI1Mvg3wHXPul7vQ3V4r6WB7aZiOVmF2t4fvHW5y4VXAY%2BwNP6Qiew2PZUCFLIs6m5wG%2FGZXi%2BFoHFz2uLxC8rVV1SDcRvLxqFMaSFvJZEPsP%2BqInOrSdCqLEXARJSpcX%2FiAahDXLn4Elu3KQ8KIkeHoLPON2E7PUHVX4u%2FtaNTYhwSxrTUUEVJMfvK6hgcr23nP8fwUAr4z8dinK6nRBYaGlHjYo5O%2FJvU35rqHJFXpPazlYh8Vo1UebriM1FpWwhwu4FeEjtGR6tMP%2FVrL8GOqUBssoPi6kYkMoNtHeAXcVHaSF0eLuwlHvljL6BpzRYEkIANlI5w7o%2FulZV81SIpJsNhv3ywLPQQ397a5jbi%2F6nozqMKxEpAaFgd1UQD1Y%2Fxok3720jsn0hBDo18zPTiSxQR4eJaqphOnF6ubu06lcvATkkIduXKOrffc4agH7LC0JJHg%2FzAXt5O8QfUFsQga7r79FB1rdWnf8pPRKhddr4J1djiZNT&X-Amz-Signature=ad350b7a9c52432cb173fa3ce1524e8c15e1b386e935c837646420157286860f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN5R6TP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkLNyxutHv3dBC%2FRqY5RBo1FwyJXsRsBMbZPJqbMFuxgIgbZgazhvX4MU4%2F8dj%2BBhqBOF%2ByLZXW3QH9bnqC3MnErgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUUk3LMMYp9M%2BXVzCrcA8HV6igqHWoRSVN0DbkXFb3oOv0%2Bbl6ZMs3NVZz4R55elvpMY3NhqN2yIeoFmt3E7%2BVubq8AiBRgcc37eruhdsbIlJhILCRBpXL2r9ZahXgCpyECb%2F4abFbBCRT2h9%2BfziEGgZTpkowZfE2E5XDYs0zfX7XJAPlh8MKS6dgoiGi%2FprOUJd9GQ5wcDDtqaM%2BGNfEmer4l1h0Uk0bZuKJGy54VciTpRaxEYhtMozDdpMtaUqnoaYcHYwaiCXGYjB8TEzCtGWESHZn1vYSpoIRtVicSJXZD%2FupyNLeYcDrNTrI4VaaQ3nXS1nEZSPpkkYfpy6Ka%2Fd7QlSgiD6xY4a3WEIk2xlVLB2nfMxi%2BH4hiPbkMIuJI1Mvg3wHXPul7vQ3V4r6WB7aZiOVmF2t4fvHW5y4VXAY%2BwNP6Qiew2PZUCFLIs6m5wG%2FGZXi%2BFoHFz2uLxC8rVV1SDcRvLxqFMaSFvJZEPsP%2BqInOrSdCqLEXARJSpcX%2FiAahDXLn4Elu3KQ8KIkeHoLPON2E7PUHVX4u%2FtaNTYhwSxrTUUEVJMfvK6hgcr23nP8fwUAr4z8dinK6nRBYaGlHjYo5O%2FJvU35rqHJFXpPazlYh8Vo1UebriM1FpWwhwu4FeEjtGR6tMP%2FVrL8GOqUBssoPi6kYkMoNtHeAXcVHaSF0eLuwlHvljL6BpzRYEkIANlI5w7o%2FulZV81SIpJsNhv3ywLPQQ397a5jbi%2F6nozqMKxEpAaFgd1UQD1Y%2Fxok3720jsn0hBDo18zPTiSxQR4eJaqphOnF6ubu06lcvATkkIduXKOrffc4agH7LC0JJHg%2FzAXt5O8QfUFsQga7r79FB1rdWnf8pPRKhddr4J1djiZNT&X-Amz-Signature=d29db70312d4fe365ff62796eba23a791e84e3ae0c743f97e720ce8d73228266&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN5R6TP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkLNyxutHv3dBC%2FRqY5RBo1FwyJXsRsBMbZPJqbMFuxgIgbZgazhvX4MU4%2F8dj%2BBhqBOF%2ByLZXW3QH9bnqC3MnErgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUUk3LMMYp9M%2BXVzCrcA8HV6igqHWoRSVN0DbkXFb3oOv0%2Bbl6ZMs3NVZz4R55elvpMY3NhqN2yIeoFmt3E7%2BVubq8AiBRgcc37eruhdsbIlJhILCRBpXL2r9ZahXgCpyECb%2F4abFbBCRT2h9%2BfziEGgZTpkowZfE2E5XDYs0zfX7XJAPlh8MKS6dgoiGi%2FprOUJd9GQ5wcDDtqaM%2BGNfEmer4l1h0Uk0bZuKJGy54VciTpRaxEYhtMozDdpMtaUqnoaYcHYwaiCXGYjB8TEzCtGWESHZn1vYSpoIRtVicSJXZD%2FupyNLeYcDrNTrI4VaaQ3nXS1nEZSPpkkYfpy6Ka%2Fd7QlSgiD6xY4a3WEIk2xlVLB2nfMxi%2BH4hiPbkMIuJI1Mvg3wHXPul7vQ3V4r6WB7aZiOVmF2t4fvHW5y4VXAY%2BwNP6Qiew2PZUCFLIs6m5wG%2FGZXi%2BFoHFz2uLxC8rVV1SDcRvLxqFMaSFvJZEPsP%2BqInOrSdCqLEXARJSpcX%2FiAahDXLn4Elu3KQ8KIkeHoLPON2E7PUHVX4u%2FtaNTYhwSxrTUUEVJMfvK6hgcr23nP8fwUAr4z8dinK6nRBYaGlHjYo5O%2FJvU35rqHJFXpPazlYh8Vo1UebriM1FpWwhwu4FeEjtGR6tMP%2FVrL8GOqUBssoPi6kYkMoNtHeAXcVHaSF0eLuwlHvljL6BpzRYEkIANlI5w7o%2FulZV81SIpJsNhv3ywLPQQ397a5jbi%2F6nozqMKxEpAaFgd1UQD1Y%2Fxok3720jsn0hBDo18zPTiSxQR4eJaqphOnF6ubu06lcvATkkIduXKOrffc4agH7LC0JJHg%2FzAXt5O8QfUFsQga7r79FB1rdWnf8pPRKhddr4J1djiZNT&X-Amz-Signature=1551bbb726da862268becf78a85684790ecc78dcc78806f0a3dae2d848e1015d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN5R6TP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkLNyxutHv3dBC%2FRqY5RBo1FwyJXsRsBMbZPJqbMFuxgIgbZgazhvX4MU4%2F8dj%2BBhqBOF%2ByLZXW3QH9bnqC3MnErgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUUk3LMMYp9M%2BXVzCrcA8HV6igqHWoRSVN0DbkXFb3oOv0%2Bbl6ZMs3NVZz4R55elvpMY3NhqN2yIeoFmt3E7%2BVubq8AiBRgcc37eruhdsbIlJhILCRBpXL2r9ZahXgCpyECb%2F4abFbBCRT2h9%2BfziEGgZTpkowZfE2E5XDYs0zfX7XJAPlh8MKS6dgoiGi%2FprOUJd9GQ5wcDDtqaM%2BGNfEmer4l1h0Uk0bZuKJGy54VciTpRaxEYhtMozDdpMtaUqnoaYcHYwaiCXGYjB8TEzCtGWESHZn1vYSpoIRtVicSJXZD%2FupyNLeYcDrNTrI4VaaQ3nXS1nEZSPpkkYfpy6Ka%2Fd7QlSgiD6xY4a3WEIk2xlVLB2nfMxi%2BH4hiPbkMIuJI1Mvg3wHXPul7vQ3V4r6WB7aZiOVmF2t4fvHW5y4VXAY%2BwNP6Qiew2PZUCFLIs6m5wG%2FGZXi%2BFoHFz2uLxC8rVV1SDcRvLxqFMaSFvJZEPsP%2BqInOrSdCqLEXARJSpcX%2FiAahDXLn4Elu3KQ8KIkeHoLPON2E7PUHVX4u%2FtaNTYhwSxrTUUEVJMfvK6hgcr23nP8fwUAr4z8dinK6nRBYaGlHjYo5O%2FJvU35rqHJFXpPazlYh8Vo1UebriM1FpWwhwu4FeEjtGR6tMP%2FVrL8GOqUBssoPi6kYkMoNtHeAXcVHaSF0eLuwlHvljL6BpzRYEkIANlI5w7o%2FulZV81SIpJsNhv3ywLPQQ397a5jbi%2F6nozqMKxEpAaFgd1UQD1Y%2Fxok3720jsn0hBDo18zPTiSxQR4eJaqphOnF6ubu06lcvATkkIduXKOrffc4agH7LC0JJHg%2FzAXt5O8QfUFsQga7r79FB1rdWnf8pPRKhddr4J1djiZNT&X-Amz-Signature=2be0bc6dd04f8dbf2bf9bb3e7432e71d5b215a335a814a137bf6a5a400dd86db&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN5R6TP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkLNyxutHv3dBC%2FRqY5RBo1FwyJXsRsBMbZPJqbMFuxgIgbZgazhvX4MU4%2F8dj%2BBhqBOF%2ByLZXW3QH9bnqC3MnErgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUUk3LMMYp9M%2BXVzCrcA8HV6igqHWoRSVN0DbkXFb3oOv0%2Bbl6ZMs3NVZz4R55elvpMY3NhqN2yIeoFmt3E7%2BVubq8AiBRgcc37eruhdsbIlJhILCRBpXL2r9ZahXgCpyECb%2F4abFbBCRT2h9%2BfziEGgZTpkowZfE2E5XDYs0zfX7XJAPlh8MKS6dgoiGi%2FprOUJd9GQ5wcDDtqaM%2BGNfEmer4l1h0Uk0bZuKJGy54VciTpRaxEYhtMozDdpMtaUqnoaYcHYwaiCXGYjB8TEzCtGWESHZn1vYSpoIRtVicSJXZD%2FupyNLeYcDrNTrI4VaaQ3nXS1nEZSPpkkYfpy6Ka%2Fd7QlSgiD6xY4a3WEIk2xlVLB2nfMxi%2BH4hiPbkMIuJI1Mvg3wHXPul7vQ3V4r6WB7aZiOVmF2t4fvHW5y4VXAY%2BwNP6Qiew2PZUCFLIs6m5wG%2FGZXi%2BFoHFz2uLxC8rVV1SDcRvLxqFMaSFvJZEPsP%2BqInOrSdCqLEXARJSpcX%2FiAahDXLn4Elu3KQ8KIkeHoLPON2E7PUHVX4u%2FtaNTYhwSxrTUUEVJMfvK6hgcr23nP8fwUAr4z8dinK6nRBYaGlHjYo5O%2FJvU35rqHJFXpPazlYh8Vo1UebriM1FpWwhwu4FeEjtGR6tMP%2FVrL8GOqUBssoPi6kYkMoNtHeAXcVHaSF0eLuwlHvljL6BpzRYEkIANlI5w7o%2FulZV81SIpJsNhv3ywLPQQ397a5jbi%2F6nozqMKxEpAaFgd1UQD1Y%2Fxok3720jsn0hBDo18zPTiSxQR4eJaqphOnF6ubu06lcvATkkIduXKOrffc4agH7LC0JJHg%2FzAXt5O8QfUFsQga7r79FB1rdWnf8pPRKhddr4J1djiZNT&X-Amz-Signature=0f12680ad2d6808ea87fda040fcb704c43ff2b03961d08f0264a3a3c0baeaf67&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN5R6TP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkLNyxutHv3dBC%2FRqY5RBo1FwyJXsRsBMbZPJqbMFuxgIgbZgazhvX4MU4%2F8dj%2BBhqBOF%2ByLZXW3QH9bnqC3MnErgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUUk3LMMYp9M%2BXVzCrcA8HV6igqHWoRSVN0DbkXFb3oOv0%2Bbl6ZMs3NVZz4R55elvpMY3NhqN2yIeoFmt3E7%2BVubq8AiBRgcc37eruhdsbIlJhILCRBpXL2r9ZahXgCpyECb%2F4abFbBCRT2h9%2BfziEGgZTpkowZfE2E5XDYs0zfX7XJAPlh8MKS6dgoiGi%2FprOUJd9GQ5wcDDtqaM%2BGNfEmer4l1h0Uk0bZuKJGy54VciTpRaxEYhtMozDdpMtaUqnoaYcHYwaiCXGYjB8TEzCtGWESHZn1vYSpoIRtVicSJXZD%2FupyNLeYcDrNTrI4VaaQ3nXS1nEZSPpkkYfpy6Ka%2Fd7QlSgiD6xY4a3WEIk2xlVLB2nfMxi%2BH4hiPbkMIuJI1Mvg3wHXPul7vQ3V4r6WB7aZiOVmF2t4fvHW5y4VXAY%2BwNP6Qiew2PZUCFLIs6m5wG%2FGZXi%2BFoHFz2uLxC8rVV1SDcRvLxqFMaSFvJZEPsP%2BqInOrSdCqLEXARJSpcX%2FiAahDXLn4Elu3KQ8KIkeHoLPON2E7PUHVX4u%2FtaNTYhwSxrTUUEVJMfvK6hgcr23nP8fwUAr4z8dinK6nRBYaGlHjYo5O%2FJvU35rqHJFXpPazlYh8Vo1UebriM1FpWwhwu4FeEjtGR6tMP%2FVrL8GOqUBssoPi6kYkMoNtHeAXcVHaSF0eLuwlHvljL6BpzRYEkIANlI5w7o%2FulZV81SIpJsNhv3ywLPQQ397a5jbi%2F6nozqMKxEpAaFgd1UQD1Y%2Fxok3720jsn0hBDo18zPTiSxQR4eJaqphOnF6ubu06lcvATkkIduXKOrffc4agH7LC0JJHg%2FzAXt5O8QfUFsQga7r79FB1rdWnf8pPRKhddr4J1djiZNT&X-Amz-Signature=fa85d8e25a3ee619f36ae2db4d93c02c0e756911f6aa8dc0f331f4585d1cc66f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN5R6TP%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T004446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCkLNyxutHv3dBC%2FRqY5RBo1FwyJXsRsBMbZPJqbMFuxgIgbZgazhvX4MU4%2F8dj%2BBhqBOF%2ByLZXW3QH9bnqC3MnErgqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIUUk3LMMYp9M%2BXVzCrcA8HV6igqHWoRSVN0DbkXFb3oOv0%2Bbl6ZMs3NVZz4R55elvpMY3NhqN2yIeoFmt3E7%2BVubq8AiBRgcc37eruhdsbIlJhILCRBpXL2r9ZahXgCpyECb%2F4abFbBCRT2h9%2BfziEGgZTpkowZfE2E5XDYs0zfX7XJAPlh8MKS6dgoiGi%2FprOUJd9GQ5wcDDtqaM%2BGNfEmer4l1h0Uk0bZuKJGy54VciTpRaxEYhtMozDdpMtaUqnoaYcHYwaiCXGYjB8TEzCtGWESHZn1vYSpoIRtVicSJXZD%2FupyNLeYcDrNTrI4VaaQ3nXS1nEZSPpkkYfpy6Ka%2Fd7QlSgiD6xY4a3WEIk2xlVLB2nfMxi%2BH4hiPbkMIuJI1Mvg3wHXPul7vQ3V4r6WB7aZiOVmF2t4fvHW5y4VXAY%2BwNP6Qiew2PZUCFLIs6m5wG%2FGZXi%2BFoHFz2uLxC8rVV1SDcRvLxqFMaSFvJZEPsP%2BqInOrSdCqLEXARJSpcX%2FiAahDXLn4Elu3KQ8KIkeHoLPON2E7PUHVX4u%2FtaNTYhwSxrTUUEVJMfvK6hgcr23nP8fwUAr4z8dinK6nRBYaGlHjYo5O%2FJvU35rqHJFXpPazlYh8Vo1UebriM1FpWwhwu4FeEjtGR6tMP%2FVrL8GOqUBssoPi6kYkMoNtHeAXcVHaSF0eLuwlHvljL6BpzRYEkIANlI5w7o%2FulZV81SIpJsNhv3ywLPQQ397a5jbi%2F6nozqMKxEpAaFgd1UQD1Y%2Fxok3720jsn0hBDo18zPTiSxQR4eJaqphOnF6ubu06lcvATkkIduXKOrffc4agH7LC0JJHg%2FzAXt5O8QfUFsQga7r79FB1rdWnf8pPRKhddr4J1djiZNT&X-Amz-Signature=b9432dd5aa3fa0e3910622fbeb785a17f8137b503cfa74e1ccd8025946e3a666&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
