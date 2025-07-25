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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMFXUA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu6A65RxwJirEBTceReeRxKQ7MjmdLI4RWSUEMy3vjigIgP0eASREFnWkGxiSyPA0cx3HVAF0dIdwJENbNK4zxlf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEKJPs810Jn87E%2BSOyrcA4jzxB3taR8NjiZ7XF8G1V2%2ByKvNDzrZr%2FVzQkzol4TJFjlsGmMc4vS4ImqhZWm%2FuKZt%2BShmQHd1cqPLzzdl6bl17k1BhbP8O1goE%2Fa0%2F8M%2F3Exf9wqB2%2Fz0RGuU1BLFtsQjCh57ujRdzqzU2tvj%2BXupGxDF1r6zveaafIQiJXbXcxpSD8vFI2PMuyPzui2V2FArWIMH2POrqlvFGnUTOdXRHfUUI5vwJ%2FuUxP8PdSlQdu%2FO24h78Vo94VTQZwNPDCzlx9joJbzHQF5PiPKW8b%2BfgkmuWXZ7rA7HJrjDu6s%2BCQ3o13PV91Am2KAOA5zYJEV%2BT8299Ma8QY8HjqRrt%2BCPLWHIkLELg2jTXJAyCIfuvnvdpPyk6%2BX%2Biv%2Bzz%2BYMMpMM787XRonhMgUhWRafSEVdVi00N2TIHNCifdKaMNYNZ2lW3gQiomO4VyyuufbWMRWUy%2FVasMylgr1aRcn20W6DKLXW4roTJB1Kfa3E93slgTHowu5vnWP3JJ4et1azu4KJp9QuRdyXC7NciJRJ5R9oN%2BqpbRC0VIKPZdxPzArU0lteCS1OXKzoRGwSsPuWw9i9yTBVhIgp6q4e80rGd7eadGVsJ4nom96gMrbwf9re1AaHo72z4AQCob6qMPPTi8QGOqUBo2Pgs0LaqevmZM93Wo20DqYbIaGkcSpBYZbaz6vIeF5XQS36bw6BBCfRfW2hcNytnbM3%2FW5RlnkOr1OPNwxwKkfRrgDXAvaKUnwLjBydwPrZMZvoRKPwarNg3ozXxtnZIDI7xkzn5STE%2ByCE9JaK1EUDawzCHhQiqGn5BTZb4mr2ibNtQonUrqYinPMqNBd2by8LgXnb%2BVOqlEuwxm%2Bj48nZuYBO&X-Amz-Signature=6df34e541baab980e07615c4f466484eed18fef8ce018f4955581aa39476ffee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMFXUA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu6A65RxwJirEBTceReeRxKQ7MjmdLI4RWSUEMy3vjigIgP0eASREFnWkGxiSyPA0cx3HVAF0dIdwJENbNK4zxlf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEKJPs810Jn87E%2BSOyrcA4jzxB3taR8NjiZ7XF8G1V2%2ByKvNDzrZr%2FVzQkzol4TJFjlsGmMc4vS4ImqhZWm%2FuKZt%2BShmQHd1cqPLzzdl6bl17k1BhbP8O1goE%2Fa0%2F8M%2F3Exf9wqB2%2Fz0RGuU1BLFtsQjCh57ujRdzqzU2tvj%2BXupGxDF1r6zveaafIQiJXbXcxpSD8vFI2PMuyPzui2V2FArWIMH2POrqlvFGnUTOdXRHfUUI5vwJ%2FuUxP8PdSlQdu%2FO24h78Vo94VTQZwNPDCzlx9joJbzHQF5PiPKW8b%2BfgkmuWXZ7rA7HJrjDu6s%2BCQ3o13PV91Am2KAOA5zYJEV%2BT8299Ma8QY8HjqRrt%2BCPLWHIkLELg2jTXJAyCIfuvnvdpPyk6%2BX%2Biv%2Bzz%2BYMMpMM787XRonhMgUhWRafSEVdVi00N2TIHNCifdKaMNYNZ2lW3gQiomO4VyyuufbWMRWUy%2FVasMylgr1aRcn20W6DKLXW4roTJB1Kfa3E93slgTHowu5vnWP3JJ4et1azu4KJp9QuRdyXC7NciJRJ5R9oN%2BqpbRC0VIKPZdxPzArU0lteCS1OXKzoRGwSsPuWw9i9yTBVhIgp6q4e80rGd7eadGVsJ4nom96gMrbwf9re1AaHo72z4AQCob6qMPPTi8QGOqUBo2Pgs0LaqevmZM93Wo20DqYbIaGkcSpBYZbaz6vIeF5XQS36bw6BBCfRfW2hcNytnbM3%2FW5RlnkOr1OPNwxwKkfRrgDXAvaKUnwLjBydwPrZMZvoRKPwarNg3ozXxtnZIDI7xkzn5STE%2ByCE9JaK1EUDawzCHhQiqGn5BTZb4mr2ibNtQonUrqYinPMqNBd2by8LgXnb%2BVOqlEuwxm%2Bj48nZuYBO&X-Amz-Signature=77efcb552b39ad52bea1cee9c08f99befd8cbe8735335b7f8d9cbaa963caad6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMFXUA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu6A65RxwJirEBTceReeRxKQ7MjmdLI4RWSUEMy3vjigIgP0eASREFnWkGxiSyPA0cx3HVAF0dIdwJENbNK4zxlf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEKJPs810Jn87E%2BSOyrcA4jzxB3taR8NjiZ7XF8G1V2%2ByKvNDzrZr%2FVzQkzol4TJFjlsGmMc4vS4ImqhZWm%2FuKZt%2BShmQHd1cqPLzzdl6bl17k1BhbP8O1goE%2Fa0%2F8M%2F3Exf9wqB2%2Fz0RGuU1BLFtsQjCh57ujRdzqzU2tvj%2BXupGxDF1r6zveaafIQiJXbXcxpSD8vFI2PMuyPzui2V2FArWIMH2POrqlvFGnUTOdXRHfUUI5vwJ%2FuUxP8PdSlQdu%2FO24h78Vo94VTQZwNPDCzlx9joJbzHQF5PiPKW8b%2BfgkmuWXZ7rA7HJrjDu6s%2BCQ3o13PV91Am2KAOA5zYJEV%2BT8299Ma8QY8HjqRrt%2BCPLWHIkLELg2jTXJAyCIfuvnvdpPyk6%2BX%2Biv%2Bzz%2BYMMpMM787XRonhMgUhWRafSEVdVi00N2TIHNCifdKaMNYNZ2lW3gQiomO4VyyuufbWMRWUy%2FVasMylgr1aRcn20W6DKLXW4roTJB1Kfa3E93slgTHowu5vnWP3JJ4et1azu4KJp9QuRdyXC7NciJRJ5R9oN%2BqpbRC0VIKPZdxPzArU0lteCS1OXKzoRGwSsPuWw9i9yTBVhIgp6q4e80rGd7eadGVsJ4nom96gMrbwf9re1AaHo72z4AQCob6qMPPTi8QGOqUBo2Pgs0LaqevmZM93Wo20DqYbIaGkcSpBYZbaz6vIeF5XQS36bw6BBCfRfW2hcNytnbM3%2FW5RlnkOr1OPNwxwKkfRrgDXAvaKUnwLjBydwPrZMZvoRKPwarNg3ozXxtnZIDI7xkzn5STE%2ByCE9JaK1EUDawzCHhQiqGn5BTZb4mr2ibNtQonUrqYinPMqNBd2by8LgXnb%2BVOqlEuwxm%2Bj48nZuYBO&X-Amz-Signature=e2d8f7293041a7556b2b5662da3328efc30a93156e0967e55a768991c8e4b84f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMFXUA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu6A65RxwJirEBTceReeRxKQ7MjmdLI4RWSUEMy3vjigIgP0eASREFnWkGxiSyPA0cx3HVAF0dIdwJENbNK4zxlf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEKJPs810Jn87E%2BSOyrcA4jzxB3taR8NjiZ7XF8G1V2%2ByKvNDzrZr%2FVzQkzol4TJFjlsGmMc4vS4ImqhZWm%2FuKZt%2BShmQHd1cqPLzzdl6bl17k1BhbP8O1goE%2Fa0%2F8M%2F3Exf9wqB2%2Fz0RGuU1BLFtsQjCh57ujRdzqzU2tvj%2BXupGxDF1r6zveaafIQiJXbXcxpSD8vFI2PMuyPzui2V2FArWIMH2POrqlvFGnUTOdXRHfUUI5vwJ%2FuUxP8PdSlQdu%2FO24h78Vo94VTQZwNPDCzlx9joJbzHQF5PiPKW8b%2BfgkmuWXZ7rA7HJrjDu6s%2BCQ3o13PV91Am2KAOA5zYJEV%2BT8299Ma8QY8HjqRrt%2BCPLWHIkLELg2jTXJAyCIfuvnvdpPyk6%2BX%2Biv%2Bzz%2BYMMpMM787XRonhMgUhWRafSEVdVi00N2TIHNCifdKaMNYNZ2lW3gQiomO4VyyuufbWMRWUy%2FVasMylgr1aRcn20W6DKLXW4roTJB1Kfa3E93slgTHowu5vnWP3JJ4et1azu4KJp9QuRdyXC7NciJRJ5R9oN%2BqpbRC0VIKPZdxPzArU0lteCS1OXKzoRGwSsPuWw9i9yTBVhIgp6q4e80rGd7eadGVsJ4nom96gMrbwf9re1AaHo72z4AQCob6qMPPTi8QGOqUBo2Pgs0LaqevmZM93Wo20DqYbIaGkcSpBYZbaz6vIeF5XQS36bw6BBCfRfW2hcNytnbM3%2FW5RlnkOr1OPNwxwKkfRrgDXAvaKUnwLjBydwPrZMZvoRKPwarNg3ozXxtnZIDI7xkzn5STE%2ByCE9JaK1EUDawzCHhQiqGn5BTZb4mr2ibNtQonUrqYinPMqNBd2by8LgXnb%2BVOqlEuwxm%2Bj48nZuYBO&X-Amz-Signature=03502dbeb0b95c08987ebe75c516bfa346b75eb9c37ad27e4766a77fe49b1140&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMFXUA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu6A65RxwJirEBTceReeRxKQ7MjmdLI4RWSUEMy3vjigIgP0eASREFnWkGxiSyPA0cx3HVAF0dIdwJENbNK4zxlf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEKJPs810Jn87E%2BSOyrcA4jzxB3taR8NjiZ7XF8G1V2%2ByKvNDzrZr%2FVzQkzol4TJFjlsGmMc4vS4ImqhZWm%2FuKZt%2BShmQHd1cqPLzzdl6bl17k1BhbP8O1goE%2Fa0%2F8M%2F3Exf9wqB2%2Fz0RGuU1BLFtsQjCh57ujRdzqzU2tvj%2BXupGxDF1r6zveaafIQiJXbXcxpSD8vFI2PMuyPzui2V2FArWIMH2POrqlvFGnUTOdXRHfUUI5vwJ%2FuUxP8PdSlQdu%2FO24h78Vo94VTQZwNPDCzlx9joJbzHQF5PiPKW8b%2BfgkmuWXZ7rA7HJrjDu6s%2BCQ3o13PV91Am2KAOA5zYJEV%2BT8299Ma8QY8HjqRrt%2BCPLWHIkLELg2jTXJAyCIfuvnvdpPyk6%2BX%2Biv%2Bzz%2BYMMpMM787XRonhMgUhWRafSEVdVi00N2TIHNCifdKaMNYNZ2lW3gQiomO4VyyuufbWMRWUy%2FVasMylgr1aRcn20W6DKLXW4roTJB1Kfa3E93slgTHowu5vnWP3JJ4et1azu4KJp9QuRdyXC7NciJRJ5R9oN%2BqpbRC0VIKPZdxPzArU0lteCS1OXKzoRGwSsPuWw9i9yTBVhIgp6q4e80rGd7eadGVsJ4nom96gMrbwf9re1AaHo72z4AQCob6qMPPTi8QGOqUBo2Pgs0LaqevmZM93Wo20DqYbIaGkcSpBYZbaz6vIeF5XQS36bw6BBCfRfW2hcNytnbM3%2FW5RlnkOr1OPNwxwKkfRrgDXAvaKUnwLjBydwPrZMZvoRKPwarNg3ozXxtnZIDI7xkzn5STE%2ByCE9JaK1EUDawzCHhQiqGn5BTZb4mr2ibNtQonUrqYinPMqNBd2by8LgXnb%2BVOqlEuwxm%2Bj48nZuYBO&X-Amz-Signature=7d30812a997d48ba079c94252654ae87bc5748376c5158a99f721928a2ee6e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMFXUA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu6A65RxwJirEBTceReeRxKQ7MjmdLI4RWSUEMy3vjigIgP0eASREFnWkGxiSyPA0cx3HVAF0dIdwJENbNK4zxlf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEKJPs810Jn87E%2BSOyrcA4jzxB3taR8NjiZ7XF8G1V2%2ByKvNDzrZr%2FVzQkzol4TJFjlsGmMc4vS4ImqhZWm%2FuKZt%2BShmQHd1cqPLzzdl6bl17k1BhbP8O1goE%2Fa0%2F8M%2F3Exf9wqB2%2Fz0RGuU1BLFtsQjCh57ujRdzqzU2tvj%2BXupGxDF1r6zveaafIQiJXbXcxpSD8vFI2PMuyPzui2V2FArWIMH2POrqlvFGnUTOdXRHfUUI5vwJ%2FuUxP8PdSlQdu%2FO24h78Vo94VTQZwNPDCzlx9joJbzHQF5PiPKW8b%2BfgkmuWXZ7rA7HJrjDu6s%2BCQ3o13PV91Am2KAOA5zYJEV%2BT8299Ma8QY8HjqRrt%2BCPLWHIkLELg2jTXJAyCIfuvnvdpPyk6%2BX%2Biv%2Bzz%2BYMMpMM787XRonhMgUhWRafSEVdVi00N2TIHNCifdKaMNYNZ2lW3gQiomO4VyyuufbWMRWUy%2FVasMylgr1aRcn20W6DKLXW4roTJB1Kfa3E93slgTHowu5vnWP3JJ4et1azu4KJp9QuRdyXC7NciJRJ5R9oN%2BqpbRC0VIKPZdxPzArU0lteCS1OXKzoRGwSsPuWw9i9yTBVhIgp6q4e80rGd7eadGVsJ4nom96gMrbwf9re1AaHo72z4AQCob6qMPPTi8QGOqUBo2Pgs0LaqevmZM93Wo20DqYbIaGkcSpBYZbaz6vIeF5XQS36bw6BBCfRfW2hcNytnbM3%2FW5RlnkOr1OPNwxwKkfRrgDXAvaKUnwLjBydwPrZMZvoRKPwarNg3ozXxtnZIDI7xkzn5STE%2ByCE9JaK1EUDawzCHhQiqGn5BTZb4mr2ibNtQonUrqYinPMqNBd2by8LgXnb%2BVOqlEuwxm%2Bj48nZuYBO&X-Amz-Signature=945dc986efe0d8d0a16e38e58a8dc6fdd6f81efa855b5394f3aa7ea3505d41ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUMFXUA2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCu6A65RxwJirEBTceReeRxKQ7MjmdLI4RWSUEMy3vjigIgP0eASREFnWkGxiSyPA0cx3HVAF0dIdwJENbNK4zxlf8q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDEKJPs810Jn87E%2BSOyrcA4jzxB3taR8NjiZ7XF8G1V2%2ByKvNDzrZr%2FVzQkzol4TJFjlsGmMc4vS4ImqhZWm%2FuKZt%2BShmQHd1cqPLzzdl6bl17k1BhbP8O1goE%2Fa0%2F8M%2F3Exf9wqB2%2Fz0RGuU1BLFtsQjCh57ujRdzqzU2tvj%2BXupGxDF1r6zveaafIQiJXbXcxpSD8vFI2PMuyPzui2V2FArWIMH2POrqlvFGnUTOdXRHfUUI5vwJ%2FuUxP8PdSlQdu%2FO24h78Vo94VTQZwNPDCzlx9joJbzHQF5PiPKW8b%2BfgkmuWXZ7rA7HJrjDu6s%2BCQ3o13PV91Am2KAOA5zYJEV%2BT8299Ma8QY8HjqRrt%2BCPLWHIkLELg2jTXJAyCIfuvnvdpPyk6%2BX%2Biv%2Bzz%2BYMMpMM787XRonhMgUhWRafSEVdVi00N2TIHNCifdKaMNYNZ2lW3gQiomO4VyyuufbWMRWUy%2FVasMylgr1aRcn20W6DKLXW4roTJB1Kfa3E93slgTHowu5vnWP3JJ4et1azu4KJp9QuRdyXC7NciJRJ5R9oN%2BqpbRC0VIKPZdxPzArU0lteCS1OXKzoRGwSsPuWw9i9yTBVhIgp6q4e80rGd7eadGVsJ4nom96gMrbwf9re1AaHo72z4AQCob6qMPPTi8QGOqUBo2Pgs0LaqevmZM93Wo20DqYbIaGkcSpBYZbaz6vIeF5XQS36bw6BBCfRfW2hcNytnbM3%2FW5RlnkOr1OPNwxwKkfRrgDXAvaKUnwLjBydwPrZMZvoRKPwarNg3ozXxtnZIDI7xkzn5STE%2ByCE9JaK1EUDawzCHhQiqGn5BTZb4mr2ibNtQonUrqYinPMqNBd2by8LgXnb%2BVOqlEuwxm%2Bj48nZuYBO&X-Amz-Signature=0a30ec38372fb6ce1bc7590cfd2ceb469035d2e86e5c2b3d8f5f30aafcd256ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
