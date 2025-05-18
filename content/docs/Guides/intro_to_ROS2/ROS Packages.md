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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7TLANX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO6U%2Fufv%2FqCw29pnAX6NsffKqIs4jXBPZ0WgZxu1dK4AIgaQwBjg1535YKaK1riTlNfVbEEtgYpeJTV16jSc91pbQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFNcBdFHgGR8HybJyCrcA7DWkMWyTqoI13g1T%2Bd2lZg%2BRYZengu0JwJ9AG5bhz2323TZxehEoSowMEVRnyavmhju8bpZ40TTTCefaj3%2FvAvzjrnZ5ymQoNU1RkSBR7b6w7BdmyzI5C2DHIsQGdXz%2BlE7DNFL11Gc4b0PRkWuGmLt0Hd5sNPktegVzjP942SvncsKbiEinHGSg1OhFI2aHMOTvEyg1MuZgAkAy2G%2FfNVfgqZem0Am5qfsW3xUOX4riGk%2BlbdUCz0CytzBaDX4UGXB6J4yDfDdExcrBlqFnw6tQ9OjOWbXjIZ7ZNiw60iiDUMJc0JjPVAhH8oExGjsQr4ZrQ4ymrUsAu6ltjJkPhOMjSvHBuCbXwhMhFKD1ZMoWEhYKmBoC0IdRVk%2FiCpbf45dv2XoZWCWy115dAOlG4h8Hsm8a615GRFaL3A3p7rLLW%2Bg1ZBfOu72Xaayb5GgEFCi%2FRFiXbxcPJ16wVN%2Bo6lRcQPVdyzxtYwBoCgMBoT2gkJ3vLIKExdWFLHDdmUtD9qUNYkg1CANVC9slJSV%2FLNms%2BI4pxIHIyrrVxhwJC3tjx3Spm0AEk48%2F%2B58jhAwtZ2QNEzEOxb9SouiT811UTLToGqrprI8GlXNRI1FCGCQdOxoCFEu%2FGyGDEqsMNf1pcEGOqUBmdgDQWu7X9N2vL37mq49TBE813FqS0GW4k70hLGiLKg1kcqLm45a%2FjDm0c%2Bt%2BJZcg8yD5IjYwnVd%2B%2FkbxI4GxY970h9lusFy7jYgDFdicXh7ug6GWcBu46os6ZPZ8gajbCN0%2BnEp%2F2AMTeVWXn4fwNuEVO2aaWFuQjJgg3wsaFQ65CaxNpn6GXRecf5VvR%2BqzYI%2FzOjOQZzka8QIRj3AkTvKfTn1&X-Amz-Signature=c1a69604e2415d1f64f4357541a3012c4d36547ecaaf2d6100cd23d69d4d585c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7TLANX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO6U%2Fufv%2FqCw29pnAX6NsffKqIs4jXBPZ0WgZxu1dK4AIgaQwBjg1535YKaK1riTlNfVbEEtgYpeJTV16jSc91pbQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFNcBdFHgGR8HybJyCrcA7DWkMWyTqoI13g1T%2Bd2lZg%2BRYZengu0JwJ9AG5bhz2323TZxehEoSowMEVRnyavmhju8bpZ40TTTCefaj3%2FvAvzjrnZ5ymQoNU1RkSBR7b6w7BdmyzI5C2DHIsQGdXz%2BlE7DNFL11Gc4b0PRkWuGmLt0Hd5sNPktegVzjP942SvncsKbiEinHGSg1OhFI2aHMOTvEyg1MuZgAkAy2G%2FfNVfgqZem0Am5qfsW3xUOX4riGk%2BlbdUCz0CytzBaDX4UGXB6J4yDfDdExcrBlqFnw6tQ9OjOWbXjIZ7ZNiw60iiDUMJc0JjPVAhH8oExGjsQr4ZrQ4ymrUsAu6ltjJkPhOMjSvHBuCbXwhMhFKD1ZMoWEhYKmBoC0IdRVk%2FiCpbf45dv2XoZWCWy115dAOlG4h8Hsm8a615GRFaL3A3p7rLLW%2Bg1ZBfOu72Xaayb5GgEFCi%2FRFiXbxcPJ16wVN%2Bo6lRcQPVdyzxtYwBoCgMBoT2gkJ3vLIKExdWFLHDdmUtD9qUNYkg1CANVC9slJSV%2FLNms%2BI4pxIHIyrrVxhwJC3tjx3Spm0AEk48%2F%2B58jhAwtZ2QNEzEOxb9SouiT811UTLToGqrprI8GlXNRI1FCGCQdOxoCFEu%2FGyGDEqsMNf1pcEGOqUBmdgDQWu7X9N2vL37mq49TBE813FqS0GW4k70hLGiLKg1kcqLm45a%2FjDm0c%2Bt%2BJZcg8yD5IjYwnVd%2B%2FkbxI4GxY970h9lusFy7jYgDFdicXh7ug6GWcBu46os6ZPZ8gajbCN0%2BnEp%2F2AMTeVWXn4fwNuEVO2aaWFuQjJgg3wsaFQ65CaxNpn6GXRecf5VvR%2BqzYI%2FzOjOQZzka8QIRj3AkTvKfTn1&X-Amz-Signature=0b7f9372416dc18cd470828d7a9b4fd82417b50fe4af911cf1db81f71d004281&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7TLANX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO6U%2Fufv%2FqCw29pnAX6NsffKqIs4jXBPZ0WgZxu1dK4AIgaQwBjg1535YKaK1riTlNfVbEEtgYpeJTV16jSc91pbQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFNcBdFHgGR8HybJyCrcA7DWkMWyTqoI13g1T%2Bd2lZg%2BRYZengu0JwJ9AG5bhz2323TZxehEoSowMEVRnyavmhju8bpZ40TTTCefaj3%2FvAvzjrnZ5ymQoNU1RkSBR7b6w7BdmyzI5C2DHIsQGdXz%2BlE7DNFL11Gc4b0PRkWuGmLt0Hd5sNPktegVzjP942SvncsKbiEinHGSg1OhFI2aHMOTvEyg1MuZgAkAy2G%2FfNVfgqZem0Am5qfsW3xUOX4riGk%2BlbdUCz0CytzBaDX4UGXB6J4yDfDdExcrBlqFnw6tQ9OjOWbXjIZ7ZNiw60iiDUMJc0JjPVAhH8oExGjsQr4ZrQ4ymrUsAu6ltjJkPhOMjSvHBuCbXwhMhFKD1ZMoWEhYKmBoC0IdRVk%2FiCpbf45dv2XoZWCWy115dAOlG4h8Hsm8a615GRFaL3A3p7rLLW%2Bg1ZBfOu72Xaayb5GgEFCi%2FRFiXbxcPJ16wVN%2Bo6lRcQPVdyzxtYwBoCgMBoT2gkJ3vLIKExdWFLHDdmUtD9qUNYkg1CANVC9slJSV%2FLNms%2BI4pxIHIyrrVxhwJC3tjx3Spm0AEk48%2F%2B58jhAwtZ2QNEzEOxb9SouiT811UTLToGqrprI8GlXNRI1FCGCQdOxoCFEu%2FGyGDEqsMNf1pcEGOqUBmdgDQWu7X9N2vL37mq49TBE813FqS0GW4k70hLGiLKg1kcqLm45a%2FjDm0c%2Bt%2BJZcg8yD5IjYwnVd%2B%2FkbxI4GxY970h9lusFy7jYgDFdicXh7ug6GWcBu46os6ZPZ8gajbCN0%2BnEp%2F2AMTeVWXn4fwNuEVO2aaWFuQjJgg3wsaFQ65CaxNpn6GXRecf5VvR%2BqzYI%2FzOjOQZzka8QIRj3AkTvKfTn1&X-Amz-Signature=c4e9b3addb6ab52b80c45d40ed0c9fce0093b585392dca8f16b35ab1b336cdf4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7TLANX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO6U%2Fufv%2FqCw29pnAX6NsffKqIs4jXBPZ0WgZxu1dK4AIgaQwBjg1535YKaK1riTlNfVbEEtgYpeJTV16jSc91pbQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFNcBdFHgGR8HybJyCrcA7DWkMWyTqoI13g1T%2Bd2lZg%2BRYZengu0JwJ9AG5bhz2323TZxehEoSowMEVRnyavmhju8bpZ40TTTCefaj3%2FvAvzjrnZ5ymQoNU1RkSBR7b6w7BdmyzI5C2DHIsQGdXz%2BlE7DNFL11Gc4b0PRkWuGmLt0Hd5sNPktegVzjP942SvncsKbiEinHGSg1OhFI2aHMOTvEyg1MuZgAkAy2G%2FfNVfgqZem0Am5qfsW3xUOX4riGk%2BlbdUCz0CytzBaDX4UGXB6J4yDfDdExcrBlqFnw6tQ9OjOWbXjIZ7ZNiw60iiDUMJc0JjPVAhH8oExGjsQr4ZrQ4ymrUsAu6ltjJkPhOMjSvHBuCbXwhMhFKD1ZMoWEhYKmBoC0IdRVk%2FiCpbf45dv2XoZWCWy115dAOlG4h8Hsm8a615GRFaL3A3p7rLLW%2Bg1ZBfOu72Xaayb5GgEFCi%2FRFiXbxcPJ16wVN%2Bo6lRcQPVdyzxtYwBoCgMBoT2gkJ3vLIKExdWFLHDdmUtD9qUNYkg1CANVC9slJSV%2FLNms%2BI4pxIHIyrrVxhwJC3tjx3Spm0AEk48%2F%2B58jhAwtZ2QNEzEOxb9SouiT811UTLToGqrprI8GlXNRI1FCGCQdOxoCFEu%2FGyGDEqsMNf1pcEGOqUBmdgDQWu7X9N2vL37mq49TBE813FqS0GW4k70hLGiLKg1kcqLm45a%2FjDm0c%2Bt%2BJZcg8yD5IjYwnVd%2B%2FkbxI4GxY970h9lusFy7jYgDFdicXh7ug6GWcBu46os6ZPZ8gajbCN0%2BnEp%2F2AMTeVWXn4fwNuEVO2aaWFuQjJgg3wsaFQ65CaxNpn6GXRecf5VvR%2BqzYI%2FzOjOQZzka8QIRj3AkTvKfTn1&X-Amz-Signature=e8e4ec4d61411399265af5703b7a7ec3930c871fb280b54d2cbebc5927c38d11&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7TLANX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO6U%2Fufv%2FqCw29pnAX6NsffKqIs4jXBPZ0WgZxu1dK4AIgaQwBjg1535YKaK1riTlNfVbEEtgYpeJTV16jSc91pbQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFNcBdFHgGR8HybJyCrcA7DWkMWyTqoI13g1T%2Bd2lZg%2BRYZengu0JwJ9AG5bhz2323TZxehEoSowMEVRnyavmhju8bpZ40TTTCefaj3%2FvAvzjrnZ5ymQoNU1RkSBR7b6w7BdmyzI5C2DHIsQGdXz%2BlE7DNFL11Gc4b0PRkWuGmLt0Hd5sNPktegVzjP942SvncsKbiEinHGSg1OhFI2aHMOTvEyg1MuZgAkAy2G%2FfNVfgqZem0Am5qfsW3xUOX4riGk%2BlbdUCz0CytzBaDX4UGXB6J4yDfDdExcrBlqFnw6tQ9OjOWbXjIZ7ZNiw60iiDUMJc0JjPVAhH8oExGjsQr4ZrQ4ymrUsAu6ltjJkPhOMjSvHBuCbXwhMhFKD1ZMoWEhYKmBoC0IdRVk%2FiCpbf45dv2XoZWCWy115dAOlG4h8Hsm8a615GRFaL3A3p7rLLW%2Bg1ZBfOu72Xaayb5GgEFCi%2FRFiXbxcPJ16wVN%2Bo6lRcQPVdyzxtYwBoCgMBoT2gkJ3vLIKExdWFLHDdmUtD9qUNYkg1CANVC9slJSV%2FLNms%2BI4pxIHIyrrVxhwJC3tjx3Spm0AEk48%2F%2B58jhAwtZ2QNEzEOxb9SouiT811UTLToGqrprI8GlXNRI1FCGCQdOxoCFEu%2FGyGDEqsMNf1pcEGOqUBmdgDQWu7X9N2vL37mq49TBE813FqS0GW4k70hLGiLKg1kcqLm45a%2FjDm0c%2Bt%2BJZcg8yD5IjYwnVd%2B%2FkbxI4GxY970h9lusFy7jYgDFdicXh7ug6GWcBu46os6ZPZ8gajbCN0%2BnEp%2F2AMTeVWXn4fwNuEVO2aaWFuQjJgg3wsaFQ65CaxNpn6GXRecf5VvR%2BqzYI%2FzOjOQZzka8QIRj3AkTvKfTn1&X-Amz-Signature=839a8958be738870db21c1284aeebffd8eaffd14aa712ee8b0c9918160d67883&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7TLANX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO6U%2Fufv%2FqCw29pnAX6NsffKqIs4jXBPZ0WgZxu1dK4AIgaQwBjg1535YKaK1riTlNfVbEEtgYpeJTV16jSc91pbQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFNcBdFHgGR8HybJyCrcA7DWkMWyTqoI13g1T%2Bd2lZg%2BRYZengu0JwJ9AG5bhz2323TZxehEoSowMEVRnyavmhju8bpZ40TTTCefaj3%2FvAvzjrnZ5ymQoNU1RkSBR7b6w7BdmyzI5C2DHIsQGdXz%2BlE7DNFL11Gc4b0PRkWuGmLt0Hd5sNPktegVzjP942SvncsKbiEinHGSg1OhFI2aHMOTvEyg1MuZgAkAy2G%2FfNVfgqZem0Am5qfsW3xUOX4riGk%2BlbdUCz0CytzBaDX4UGXB6J4yDfDdExcrBlqFnw6tQ9OjOWbXjIZ7ZNiw60iiDUMJc0JjPVAhH8oExGjsQr4ZrQ4ymrUsAu6ltjJkPhOMjSvHBuCbXwhMhFKD1ZMoWEhYKmBoC0IdRVk%2FiCpbf45dv2XoZWCWy115dAOlG4h8Hsm8a615GRFaL3A3p7rLLW%2Bg1ZBfOu72Xaayb5GgEFCi%2FRFiXbxcPJ16wVN%2Bo6lRcQPVdyzxtYwBoCgMBoT2gkJ3vLIKExdWFLHDdmUtD9qUNYkg1CANVC9slJSV%2FLNms%2BI4pxIHIyrrVxhwJC3tjx3Spm0AEk48%2F%2B58jhAwtZ2QNEzEOxb9SouiT811UTLToGqrprI8GlXNRI1FCGCQdOxoCFEu%2FGyGDEqsMNf1pcEGOqUBmdgDQWu7X9N2vL37mq49TBE813FqS0GW4k70hLGiLKg1kcqLm45a%2FjDm0c%2Bt%2BJZcg8yD5IjYwnVd%2B%2FkbxI4GxY970h9lusFy7jYgDFdicXh7ug6GWcBu46os6ZPZ8gajbCN0%2BnEp%2F2AMTeVWXn4fwNuEVO2aaWFuQjJgg3wsaFQ65CaxNpn6GXRecf5VvR%2BqzYI%2FzOjOQZzka8QIRj3AkTvKfTn1&X-Amz-Signature=8cc32ccf77054fe474ff94e7535814cccdf4f49835dbc8a51b78a978fd405a3c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QS7TLANX%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T081032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDO6U%2Fufv%2FqCw29pnAX6NsffKqIs4jXBPZ0WgZxu1dK4AIgaQwBjg1535YKaK1riTlNfVbEEtgYpeJTV16jSc91pbQq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFNcBdFHgGR8HybJyCrcA7DWkMWyTqoI13g1T%2Bd2lZg%2BRYZengu0JwJ9AG5bhz2323TZxehEoSowMEVRnyavmhju8bpZ40TTTCefaj3%2FvAvzjrnZ5ymQoNU1RkSBR7b6w7BdmyzI5C2DHIsQGdXz%2BlE7DNFL11Gc4b0PRkWuGmLt0Hd5sNPktegVzjP942SvncsKbiEinHGSg1OhFI2aHMOTvEyg1MuZgAkAy2G%2FfNVfgqZem0Am5qfsW3xUOX4riGk%2BlbdUCz0CytzBaDX4UGXB6J4yDfDdExcrBlqFnw6tQ9OjOWbXjIZ7ZNiw60iiDUMJc0JjPVAhH8oExGjsQr4ZrQ4ymrUsAu6ltjJkPhOMjSvHBuCbXwhMhFKD1ZMoWEhYKmBoC0IdRVk%2FiCpbf45dv2XoZWCWy115dAOlG4h8Hsm8a615GRFaL3A3p7rLLW%2Bg1ZBfOu72Xaayb5GgEFCi%2FRFiXbxcPJ16wVN%2Bo6lRcQPVdyzxtYwBoCgMBoT2gkJ3vLIKExdWFLHDdmUtD9qUNYkg1CANVC9slJSV%2FLNms%2BI4pxIHIyrrVxhwJC3tjx3Spm0AEk48%2F%2B58jhAwtZ2QNEzEOxb9SouiT811UTLToGqrprI8GlXNRI1FCGCQdOxoCFEu%2FGyGDEqsMNf1pcEGOqUBmdgDQWu7X9N2vL37mq49TBE813FqS0GW4k70hLGiLKg1kcqLm45a%2FjDm0c%2Bt%2BJZcg8yD5IjYwnVd%2B%2FkbxI4GxY970h9lusFy7jYgDFdicXh7ug6GWcBu46os6ZPZ8gajbCN0%2BnEp%2F2AMTeVWXn4fwNuEVO2aaWFuQjJgg3wsaFQ65CaxNpn6GXRecf5VvR%2BqzYI%2FzOjOQZzka8QIRj3AkTvKfTn1&X-Amz-Signature=123132af09663314d29c2828729dbe04eea4e71a0f353b25022274c4d9a31913&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
