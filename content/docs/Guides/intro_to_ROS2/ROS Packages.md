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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH2VFGL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVMRbQd3XSdS%2FAqvx5DWMulo5koYY3HHNjQvfPuypA2QIhAMqUXoNwU7jQi%2BWDS8EF9ECyVHyWbAGR3jUuIepHL%2FdrKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuRB%2BhgK3Bfg2E%2BvAq3AO3bTdMNcn4r4HgrrJBuWMo5VcRFdqgs3W6umG7S4%2Fs9I2Hahjmaiiay%2BDC%2Fs0s6jlfe6vcN%2FcQ2NwU5BEHnx1wmLze6%2FAdlnbEybbdzMSlHf%2Bo1Iv9x7PxmGFuCBemQCIC2ZXcYVd0A6yVqgIHWv%2FVBJNTqIgiUnFYicleiIImM25cn3xPYFMilT4WrqrWwxcJdArnCeAKU8LgGoP5CtoV9vQbjUJX5VvxyA2hIKKpPOs3t3bsnRa7AzIjrALGiV3YFy8fZjhIcg3hThMUP0PfH69YS8vrNtn%2BgmXUCGdzT3RfWBzsNDQB5EfvkGVdmqA7CBnXPK9okcFGXd7MugQrs6huBCcMD9pYbcjU9xC2HBHV%2BMYtV8QaDJT8TWnr0UC781a6ni%2BSTY6tG%2FRUkHqQS8%2Fpt34gwvZOH4MMVDDOAoyfYYtGne1kA8kI13%2FeGIlJ3Z7vj79o3Qf40EzDw9nB%2BngIooHvEjUh%2Ff3ZmemyQNU3vJkGMX6C2hV9tDXPEP0shG%2BtdDbkAGbpiNghy17tIkfdotcx5dcxNVdij0BGPrGO5HqoducoeIC76SMPDTUEv0ponWgZyg8Hy80aJEWvUhcS%2FCM7Ki1vw4XHMop5wy5EsfXUDBbsaGzLjzCSuYHBBjqkAbjpmZyyhNijq4ERohYowsbn6Sr5Q5bIwUGOZZWnPkmmUHIgoyOM0U3ZQvRZTkhgZgitAD%2BusPBLFewAn2prj2ktqCBAPR1dtugVVCwrhRRyH6Wm9qGFrypYGWozfE7aaIWj6G%2FMsOjHtoQoHj7f%2BFosiDc11bry2Tlzo85LIIMDyZVlrJ4oU1z%2F3ldTD7dtLqqA9FN5QWfCOqgGZfTCad46N9W1&X-Amz-Signature=2a4677e304de5542b0d72fd0d9991c832974a8f009aa547b72d56ba95b504d43&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH2VFGL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVMRbQd3XSdS%2FAqvx5DWMulo5koYY3HHNjQvfPuypA2QIhAMqUXoNwU7jQi%2BWDS8EF9ECyVHyWbAGR3jUuIepHL%2FdrKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuRB%2BhgK3Bfg2E%2BvAq3AO3bTdMNcn4r4HgrrJBuWMo5VcRFdqgs3W6umG7S4%2Fs9I2Hahjmaiiay%2BDC%2Fs0s6jlfe6vcN%2FcQ2NwU5BEHnx1wmLze6%2FAdlnbEybbdzMSlHf%2Bo1Iv9x7PxmGFuCBemQCIC2ZXcYVd0A6yVqgIHWv%2FVBJNTqIgiUnFYicleiIImM25cn3xPYFMilT4WrqrWwxcJdArnCeAKU8LgGoP5CtoV9vQbjUJX5VvxyA2hIKKpPOs3t3bsnRa7AzIjrALGiV3YFy8fZjhIcg3hThMUP0PfH69YS8vrNtn%2BgmXUCGdzT3RfWBzsNDQB5EfvkGVdmqA7CBnXPK9okcFGXd7MugQrs6huBCcMD9pYbcjU9xC2HBHV%2BMYtV8QaDJT8TWnr0UC781a6ni%2BSTY6tG%2FRUkHqQS8%2Fpt34gwvZOH4MMVDDOAoyfYYtGne1kA8kI13%2FeGIlJ3Z7vj79o3Qf40EzDw9nB%2BngIooHvEjUh%2Ff3ZmemyQNU3vJkGMX6C2hV9tDXPEP0shG%2BtdDbkAGbpiNghy17tIkfdotcx5dcxNVdij0BGPrGO5HqoducoeIC76SMPDTUEv0ponWgZyg8Hy80aJEWvUhcS%2FCM7Ki1vw4XHMop5wy5EsfXUDBbsaGzLjzCSuYHBBjqkAbjpmZyyhNijq4ERohYowsbn6Sr5Q5bIwUGOZZWnPkmmUHIgoyOM0U3ZQvRZTkhgZgitAD%2BusPBLFewAn2prj2ktqCBAPR1dtugVVCwrhRRyH6Wm9qGFrypYGWozfE7aaIWj6G%2FMsOjHtoQoHj7f%2BFosiDc11bry2Tlzo85LIIMDyZVlrJ4oU1z%2F3ldTD7dtLqqA9FN5QWfCOqgGZfTCad46N9W1&X-Amz-Signature=e532d05cba0812fe90fe6f1d18294c0e43ff5b35e33da6b32093449cb06c1fb8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH2VFGL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVMRbQd3XSdS%2FAqvx5DWMulo5koYY3HHNjQvfPuypA2QIhAMqUXoNwU7jQi%2BWDS8EF9ECyVHyWbAGR3jUuIepHL%2FdrKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuRB%2BhgK3Bfg2E%2BvAq3AO3bTdMNcn4r4HgrrJBuWMo5VcRFdqgs3W6umG7S4%2Fs9I2Hahjmaiiay%2BDC%2Fs0s6jlfe6vcN%2FcQ2NwU5BEHnx1wmLze6%2FAdlnbEybbdzMSlHf%2Bo1Iv9x7PxmGFuCBemQCIC2ZXcYVd0A6yVqgIHWv%2FVBJNTqIgiUnFYicleiIImM25cn3xPYFMilT4WrqrWwxcJdArnCeAKU8LgGoP5CtoV9vQbjUJX5VvxyA2hIKKpPOs3t3bsnRa7AzIjrALGiV3YFy8fZjhIcg3hThMUP0PfH69YS8vrNtn%2BgmXUCGdzT3RfWBzsNDQB5EfvkGVdmqA7CBnXPK9okcFGXd7MugQrs6huBCcMD9pYbcjU9xC2HBHV%2BMYtV8QaDJT8TWnr0UC781a6ni%2BSTY6tG%2FRUkHqQS8%2Fpt34gwvZOH4MMVDDOAoyfYYtGne1kA8kI13%2FeGIlJ3Z7vj79o3Qf40EzDw9nB%2BngIooHvEjUh%2Ff3ZmemyQNU3vJkGMX6C2hV9tDXPEP0shG%2BtdDbkAGbpiNghy17tIkfdotcx5dcxNVdij0BGPrGO5HqoducoeIC76SMPDTUEv0ponWgZyg8Hy80aJEWvUhcS%2FCM7Ki1vw4XHMop5wy5EsfXUDBbsaGzLjzCSuYHBBjqkAbjpmZyyhNijq4ERohYowsbn6Sr5Q5bIwUGOZZWnPkmmUHIgoyOM0U3ZQvRZTkhgZgitAD%2BusPBLFewAn2prj2ktqCBAPR1dtugVVCwrhRRyH6Wm9qGFrypYGWozfE7aaIWj6G%2FMsOjHtoQoHj7f%2BFosiDc11bry2Tlzo85LIIMDyZVlrJ4oU1z%2F3ldTD7dtLqqA9FN5QWfCOqgGZfTCad46N9W1&X-Amz-Signature=d9e0a3b110185aff9c087ddefe3eacf8558ff496259cf74975cdfcfa9d9caeca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH2VFGL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVMRbQd3XSdS%2FAqvx5DWMulo5koYY3HHNjQvfPuypA2QIhAMqUXoNwU7jQi%2BWDS8EF9ECyVHyWbAGR3jUuIepHL%2FdrKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuRB%2BhgK3Bfg2E%2BvAq3AO3bTdMNcn4r4HgrrJBuWMo5VcRFdqgs3W6umG7S4%2Fs9I2Hahjmaiiay%2BDC%2Fs0s6jlfe6vcN%2FcQ2NwU5BEHnx1wmLze6%2FAdlnbEybbdzMSlHf%2Bo1Iv9x7PxmGFuCBemQCIC2ZXcYVd0A6yVqgIHWv%2FVBJNTqIgiUnFYicleiIImM25cn3xPYFMilT4WrqrWwxcJdArnCeAKU8LgGoP5CtoV9vQbjUJX5VvxyA2hIKKpPOs3t3bsnRa7AzIjrALGiV3YFy8fZjhIcg3hThMUP0PfH69YS8vrNtn%2BgmXUCGdzT3RfWBzsNDQB5EfvkGVdmqA7CBnXPK9okcFGXd7MugQrs6huBCcMD9pYbcjU9xC2HBHV%2BMYtV8QaDJT8TWnr0UC781a6ni%2BSTY6tG%2FRUkHqQS8%2Fpt34gwvZOH4MMVDDOAoyfYYtGne1kA8kI13%2FeGIlJ3Z7vj79o3Qf40EzDw9nB%2BngIooHvEjUh%2Ff3ZmemyQNU3vJkGMX6C2hV9tDXPEP0shG%2BtdDbkAGbpiNghy17tIkfdotcx5dcxNVdij0BGPrGO5HqoducoeIC76SMPDTUEv0ponWgZyg8Hy80aJEWvUhcS%2FCM7Ki1vw4XHMop5wy5EsfXUDBbsaGzLjzCSuYHBBjqkAbjpmZyyhNijq4ERohYowsbn6Sr5Q5bIwUGOZZWnPkmmUHIgoyOM0U3ZQvRZTkhgZgitAD%2BusPBLFewAn2prj2ktqCBAPR1dtugVVCwrhRRyH6Wm9qGFrypYGWozfE7aaIWj6G%2FMsOjHtoQoHj7f%2BFosiDc11bry2Tlzo85LIIMDyZVlrJ4oU1z%2F3ldTD7dtLqqA9FN5QWfCOqgGZfTCad46N9W1&X-Amz-Signature=751cb8386bf9f31d5101c8936bbbd21680b24fa371fba6fe3b72fe8d76ac18d1&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH2VFGL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVMRbQd3XSdS%2FAqvx5DWMulo5koYY3HHNjQvfPuypA2QIhAMqUXoNwU7jQi%2BWDS8EF9ECyVHyWbAGR3jUuIepHL%2FdrKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuRB%2BhgK3Bfg2E%2BvAq3AO3bTdMNcn4r4HgrrJBuWMo5VcRFdqgs3W6umG7S4%2Fs9I2Hahjmaiiay%2BDC%2Fs0s6jlfe6vcN%2FcQ2NwU5BEHnx1wmLze6%2FAdlnbEybbdzMSlHf%2Bo1Iv9x7PxmGFuCBemQCIC2ZXcYVd0A6yVqgIHWv%2FVBJNTqIgiUnFYicleiIImM25cn3xPYFMilT4WrqrWwxcJdArnCeAKU8LgGoP5CtoV9vQbjUJX5VvxyA2hIKKpPOs3t3bsnRa7AzIjrALGiV3YFy8fZjhIcg3hThMUP0PfH69YS8vrNtn%2BgmXUCGdzT3RfWBzsNDQB5EfvkGVdmqA7CBnXPK9okcFGXd7MugQrs6huBCcMD9pYbcjU9xC2HBHV%2BMYtV8QaDJT8TWnr0UC781a6ni%2BSTY6tG%2FRUkHqQS8%2Fpt34gwvZOH4MMVDDOAoyfYYtGne1kA8kI13%2FeGIlJ3Z7vj79o3Qf40EzDw9nB%2BngIooHvEjUh%2Ff3ZmemyQNU3vJkGMX6C2hV9tDXPEP0shG%2BtdDbkAGbpiNghy17tIkfdotcx5dcxNVdij0BGPrGO5HqoducoeIC76SMPDTUEv0ponWgZyg8Hy80aJEWvUhcS%2FCM7Ki1vw4XHMop5wy5EsfXUDBbsaGzLjzCSuYHBBjqkAbjpmZyyhNijq4ERohYowsbn6Sr5Q5bIwUGOZZWnPkmmUHIgoyOM0U3ZQvRZTkhgZgitAD%2BusPBLFewAn2prj2ktqCBAPR1dtugVVCwrhRRyH6Wm9qGFrypYGWozfE7aaIWj6G%2FMsOjHtoQoHj7f%2BFosiDc11bry2Tlzo85LIIMDyZVlrJ4oU1z%2F3ldTD7dtLqqA9FN5QWfCOqgGZfTCad46N9W1&X-Amz-Signature=112d3e1d28096f05b3bc4ddfa16e10207530ad7ea7606ba11e423c8aeab5dfb8&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH2VFGL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVMRbQd3XSdS%2FAqvx5DWMulo5koYY3HHNjQvfPuypA2QIhAMqUXoNwU7jQi%2BWDS8EF9ECyVHyWbAGR3jUuIepHL%2FdrKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuRB%2BhgK3Bfg2E%2BvAq3AO3bTdMNcn4r4HgrrJBuWMo5VcRFdqgs3W6umG7S4%2Fs9I2Hahjmaiiay%2BDC%2Fs0s6jlfe6vcN%2FcQ2NwU5BEHnx1wmLze6%2FAdlnbEybbdzMSlHf%2Bo1Iv9x7PxmGFuCBemQCIC2ZXcYVd0A6yVqgIHWv%2FVBJNTqIgiUnFYicleiIImM25cn3xPYFMilT4WrqrWwxcJdArnCeAKU8LgGoP5CtoV9vQbjUJX5VvxyA2hIKKpPOs3t3bsnRa7AzIjrALGiV3YFy8fZjhIcg3hThMUP0PfH69YS8vrNtn%2BgmXUCGdzT3RfWBzsNDQB5EfvkGVdmqA7CBnXPK9okcFGXd7MugQrs6huBCcMD9pYbcjU9xC2HBHV%2BMYtV8QaDJT8TWnr0UC781a6ni%2BSTY6tG%2FRUkHqQS8%2Fpt34gwvZOH4MMVDDOAoyfYYtGne1kA8kI13%2FeGIlJ3Z7vj79o3Qf40EzDw9nB%2BngIooHvEjUh%2Ff3ZmemyQNU3vJkGMX6C2hV9tDXPEP0shG%2BtdDbkAGbpiNghy17tIkfdotcx5dcxNVdij0BGPrGO5HqoducoeIC76SMPDTUEv0ponWgZyg8Hy80aJEWvUhcS%2FCM7Ki1vw4XHMop5wy5EsfXUDBbsaGzLjzCSuYHBBjqkAbjpmZyyhNijq4ERohYowsbn6Sr5Q5bIwUGOZZWnPkmmUHIgoyOM0U3ZQvRZTkhgZgitAD%2BusPBLFewAn2prj2ktqCBAPR1dtugVVCwrhRRyH6Wm9qGFrypYGWozfE7aaIWj6G%2FMsOjHtoQoHj7f%2BFosiDc11bry2Tlzo85LIIMDyZVlrJ4oU1z%2F3ldTD7dtLqqA9FN5QWfCOqgGZfTCad46N9W1&X-Amz-Signature=b4c8cfe2c3a35b1d19eeebc6a552d1c42a7c163f306a40467315de0ce6bbb0f1&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMH2VFGL%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T090827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCVMRbQd3XSdS%2FAqvx5DWMulo5koYY3HHNjQvfPuypA2QIhAMqUXoNwU7jQi%2BWDS8EF9ECyVHyWbAGR3jUuIepHL%2FdrKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyuRB%2BhgK3Bfg2E%2BvAq3AO3bTdMNcn4r4HgrrJBuWMo5VcRFdqgs3W6umG7S4%2Fs9I2Hahjmaiiay%2BDC%2Fs0s6jlfe6vcN%2FcQ2NwU5BEHnx1wmLze6%2FAdlnbEybbdzMSlHf%2Bo1Iv9x7PxmGFuCBemQCIC2ZXcYVd0A6yVqgIHWv%2FVBJNTqIgiUnFYicleiIImM25cn3xPYFMilT4WrqrWwxcJdArnCeAKU8LgGoP5CtoV9vQbjUJX5VvxyA2hIKKpPOs3t3bsnRa7AzIjrALGiV3YFy8fZjhIcg3hThMUP0PfH69YS8vrNtn%2BgmXUCGdzT3RfWBzsNDQB5EfvkGVdmqA7CBnXPK9okcFGXd7MugQrs6huBCcMD9pYbcjU9xC2HBHV%2BMYtV8QaDJT8TWnr0UC781a6ni%2BSTY6tG%2FRUkHqQS8%2Fpt34gwvZOH4MMVDDOAoyfYYtGne1kA8kI13%2FeGIlJ3Z7vj79o3Qf40EzDw9nB%2BngIooHvEjUh%2Ff3ZmemyQNU3vJkGMX6C2hV9tDXPEP0shG%2BtdDbkAGbpiNghy17tIkfdotcx5dcxNVdij0BGPrGO5HqoducoeIC76SMPDTUEv0ponWgZyg8Hy80aJEWvUhcS%2FCM7Ki1vw4XHMop5wy5EsfXUDBbsaGzLjzCSuYHBBjqkAbjpmZyyhNijq4ERohYowsbn6Sr5Q5bIwUGOZZWnPkmmUHIgoyOM0U3ZQvRZTkhgZgitAD%2BusPBLFewAn2prj2ktqCBAPR1dtugVVCwrhRRyH6Wm9qGFrypYGWozfE7aaIWj6G%2FMsOjHtoQoHj7f%2BFosiDc11bry2Tlzo85LIIMDyZVlrJ4oU1z%2F3ldTD7dtLqqA9FN5QWfCOqgGZfTCad46N9W1&X-Amz-Signature=87d6263e8cb70940e76d3ab579f7783a857673a897937e212b6ab0d5104eff22&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
