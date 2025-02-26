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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLW2RKI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDISlgg7CthKrVC%2B%2FYnqReympGYqwo%2BEQKGx1r9KukPTQIgBbXBkrH6ogo%2FcNSbtBWdwmzxu7Zrm0fSzwVlMjXyufsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDstE6pZbAZLIN8jiircAyoKCGLJbNb3CEnRCudnm8LKHV%2F%2Bu3%2BVUN1Q7x3npEYsbAO85vqhLgBiQ3BmfGJKeGVJ%2F4HTbu0BjVpBvSZuu3eu%2FOVaxoanGy6pf3wMwvZsTaOb07vlIE5zeXv4UnBlWXHF3MDGBp0GP9B9iBBIv6PyYHHE3YYf%2B%2BBhGB5VQuV97JFEO7BOtIPKxBrrrMy4MppA6jlouUwNEUzVJAnpRl0I92MYha7o%2FiEc3mUkk1XvT%2FppxZvR4wjHQEW%2B1H95UC8nzSTUqw%2BthAV5gyvlzEKUZW9AFBakYqoIWaKaKoskNPvK8TXPdQOWeBod63%2B9UcF%2FXrYRLwb25HRhWmWTT10uMSEpX8fw%2B9TI%2FvT3b9j8Q69ZAG3Z%2BynsUt%2BlDHK5ieGsytc1s1qsSe4FCr%2FSpvB1MOX0uWTDijS%2BM2vTmgfkIlkoE7gDsKknB8pT1%2FVR10yurck1gj%2BOZ%2F7AvDfpWVNuk%2F2620FXUOOFbpCpR7SjoAsf%2FwUWcipON7mKiWmBpr%2BIftu%2FHgmKNsVYm6bhsIkPeg6va2tWqvmOzk%2Bv0P4RdH%2BJsVAD99GLLJMrkn8iZn8nWPbgYqUZ4TilT1l5JZE%2Be08Xxttt0I2xh049F%2FkVYfWkN3f28vRTSqmFMM37%2Bb0GOqUBGZrBLBtHYFpdtzWJ9baif1BZjNaNrtyzhcw6jgYUSNSi8XskKFpfSebc5YvxWI%2FMlIbn7l724PqKXNBsr0OqoZEA6MB%2FlMJOo9t%2Fk2lH6prNaTf1D4MerqCMuNtZ48x7CFqaUAo4H0EXxwA6VZdyXqS%2FaSC8GjOW%2F2%2Fsi2robK3WmRe7EhFHkRgJjfllUzivvm7ULi1wY3rw2yYbMF7a79CCoqpn&X-Amz-Signature=b0e0dc5ce453bca64bc172242bb3c58b0d16f5bcbf6733f87199a464904e465e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLW2RKI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDISlgg7CthKrVC%2B%2FYnqReympGYqwo%2BEQKGx1r9KukPTQIgBbXBkrH6ogo%2FcNSbtBWdwmzxu7Zrm0fSzwVlMjXyufsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDstE6pZbAZLIN8jiircAyoKCGLJbNb3CEnRCudnm8LKHV%2F%2Bu3%2BVUN1Q7x3npEYsbAO85vqhLgBiQ3BmfGJKeGVJ%2F4HTbu0BjVpBvSZuu3eu%2FOVaxoanGy6pf3wMwvZsTaOb07vlIE5zeXv4UnBlWXHF3MDGBp0GP9B9iBBIv6PyYHHE3YYf%2B%2BBhGB5VQuV97JFEO7BOtIPKxBrrrMy4MppA6jlouUwNEUzVJAnpRl0I92MYha7o%2FiEc3mUkk1XvT%2FppxZvR4wjHQEW%2B1H95UC8nzSTUqw%2BthAV5gyvlzEKUZW9AFBakYqoIWaKaKoskNPvK8TXPdQOWeBod63%2B9UcF%2FXrYRLwb25HRhWmWTT10uMSEpX8fw%2B9TI%2FvT3b9j8Q69ZAG3Z%2BynsUt%2BlDHK5ieGsytc1s1qsSe4FCr%2FSpvB1MOX0uWTDijS%2BM2vTmgfkIlkoE7gDsKknB8pT1%2FVR10yurck1gj%2BOZ%2F7AvDfpWVNuk%2F2620FXUOOFbpCpR7SjoAsf%2FwUWcipON7mKiWmBpr%2BIftu%2FHgmKNsVYm6bhsIkPeg6va2tWqvmOzk%2Bv0P4RdH%2BJsVAD99GLLJMrkn8iZn8nWPbgYqUZ4TilT1l5JZE%2Be08Xxttt0I2xh049F%2FkVYfWkN3f28vRTSqmFMM37%2Bb0GOqUBGZrBLBtHYFpdtzWJ9baif1BZjNaNrtyzhcw6jgYUSNSi8XskKFpfSebc5YvxWI%2FMlIbn7l724PqKXNBsr0OqoZEA6MB%2FlMJOo9t%2Fk2lH6prNaTf1D4MerqCMuNtZ48x7CFqaUAo4H0EXxwA6VZdyXqS%2FaSC8GjOW%2F2%2Fsi2robK3WmRe7EhFHkRgJjfllUzivvm7ULi1wY3rw2yYbMF7a79CCoqpn&X-Amz-Signature=f6b828863080429662895c3ea5ae7d5aadfdd360518d7eb6c05a1d25a61b4482&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLW2RKI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDISlgg7CthKrVC%2B%2FYnqReympGYqwo%2BEQKGx1r9KukPTQIgBbXBkrH6ogo%2FcNSbtBWdwmzxu7Zrm0fSzwVlMjXyufsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDstE6pZbAZLIN8jiircAyoKCGLJbNb3CEnRCudnm8LKHV%2F%2Bu3%2BVUN1Q7x3npEYsbAO85vqhLgBiQ3BmfGJKeGVJ%2F4HTbu0BjVpBvSZuu3eu%2FOVaxoanGy6pf3wMwvZsTaOb07vlIE5zeXv4UnBlWXHF3MDGBp0GP9B9iBBIv6PyYHHE3YYf%2B%2BBhGB5VQuV97JFEO7BOtIPKxBrrrMy4MppA6jlouUwNEUzVJAnpRl0I92MYha7o%2FiEc3mUkk1XvT%2FppxZvR4wjHQEW%2B1H95UC8nzSTUqw%2BthAV5gyvlzEKUZW9AFBakYqoIWaKaKoskNPvK8TXPdQOWeBod63%2B9UcF%2FXrYRLwb25HRhWmWTT10uMSEpX8fw%2B9TI%2FvT3b9j8Q69ZAG3Z%2BynsUt%2BlDHK5ieGsytc1s1qsSe4FCr%2FSpvB1MOX0uWTDijS%2BM2vTmgfkIlkoE7gDsKknB8pT1%2FVR10yurck1gj%2BOZ%2F7AvDfpWVNuk%2F2620FXUOOFbpCpR7SjoAsf%2FwUWcipON7mKiWmBpr%2BIftu%2FHgmKNsVYm6bhsIkPeg6va2tWqvmOzk%2Bv0P4RdH%2BJsVAD99GLLJMrkn8iZn8nWPbgYqUZ4TilT1l5JZE%2Be08Xxttt0I2xh049F%2FkVYfWkN3f28vRTSqmFMM37%2Bb0GOqUBGZrBLBtHYFpdtzWJ9baif1BZjNaNrtyzhcw6jgYUSNSi8XskKFpfSebc5YvxWI%2FMlIbn7l724PqKXNBsr0OqoZEA6MB%2FlMJOo9t%2Fk2lH6prNaTf1D4MerqCMuNtZ48x7CFqaUAo4H0EXxwA6VZdyXqS%2FaSC8GjOW%2F2%2Fsi2robK3WmRe7EhFHkRgJjfllUzivvm7ULi1wY3rw2yYbMF7a79CCoqpn&X-Amz-Signature=3344ce2f7c62316cc0934c7b14868bbe24c29310919c4c2bd3221805b1bae7ca&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLW2RKI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDISlgg7CthKrVC%2B%2FYnqReympGYqwo%2BEQKGx1r9KukPTQIgBbXBkrH6ogo%2FcNSbtBWdwmzxu7Zrm0fSzwVlMjXyufsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDstE6pZbAZLIN8jiircAyoKCGLJbNb3CEnRCudnm8LKHV%2F%2Bu3%2BVUN1Q7x3npEYsbAO85vqhLgBiQ3BmfGJKeGVJ%2F4HTbu0BjVpBvSZuu3eu%2FOVaxoanGy6pf3wMwvZsTaOb07vlIE5zeXv4UnBlWXHF3MDGBp0GP9B9iBBIv6PyYHHE3YYf%2B%2BBhGB5VQuV97JFEO7BOtIPKxBrrrMy4MppA6jlouUwNEUzVJAnpRl0I92MYha7o%2FiEc3mUkk1XvT%2FppxZvR4wjHQEW%2B1H95UC8nzSTUqw%2BthAV5gyvlzEKUZW9AFBakYqoIWaKaKoskNPvK8TXPdQOWeBod63%2B9UcF%2FXrYRLwb25HRhWmWTT10uMSEpX8fw%2B9TI%2FvT3b9j8Q69ZAG3Z%2BynsUt%2BlDHK5ieGsytc1s1qsSe4FCr%2FSpvB1MOX0uWTDijS%2BM2vTmgfkIlkoE7gDsKknB8pT1%2FVR10yurck1gj%2BOZ%2F7AvDfpWVNuk%2F2620FXUOOFbpCpR7SjoAsf%2FwUWcipON7mKiWmBpr%2BIftu%2FHgmKNsVYm6bhsIkPeg6va2tWqvmOzk%2Bv0P4RdH%2BJsVAD99GLLJMrkn8iZn8nWPbgYqUZ4TilT1l5JZE%2Be08Xxttt0I2xh049F%2FkVYfWkN3f28vRTSqmFMM37%2Bb0GOqUBGZrBLBtHYFpdtzWJ9baif1BZjNaNrtyzhcw6jgYUSNSi8XskKFpfSebc5YvxWI%2FMlIbn7l724PqKXNBsr0OqoZEA6MB%2FlMJOo9t%2Fk2lH6prNaTf1D4MerqCMuNtZ48x7CFqaUAo4H0EXxwA6VZdyXqS%2FaSC8GjOW%2F2%2Fsi2robK3WmRe7EhFHkRgJjfllUzivvm7ULi1wY3rw2yYbMF7a79CCoqpn&X-Amz-Signature=fc4bf05092278ec689bda219554299c27800d3c40b80038fcdf517272a984cb5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLW2RKI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDISlgg7CthKrVC%2B%2FYnqReympGYqwo%2BEQKGx1r9KukPTQIgBbXBkrH6ogo%2FcNSbtBWdwmzxu7Zrm0fSzwVlMjXyufsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDstE6pZbAZLIN8jiircAyoKCGLJbNb3CEnRCudnm8LKHV%2F%2Bu3%2BVUN1Q7x3npEYsbAO85vqhLgBiQ3BmfGJKeGVJ%2F4HTbu0BjVpBvSZuu3eu%2FOVaxoanGy6pf3wMwvZsTaOb07vlIE5zeXv4UnBlWXHF3MDGBp0GP9B9iBBIv6PyYHHE3YYf%2B%2BBhGB5VQuV97JFEO7BOtIPKxBrrrMy4MppA6jlouUwNEUzVJAnpRl0I92MYha7o%2FiEc3mUkk1XvT%2FppxZvR4wjHQEW%2B1H95UC8nzSTUqw%2BthAV5gyvlzEKUZW9AFBakYqoIWaKaKoskNPvK8TXPdQOWeBod63%2B9UcF%2FXrYRLwb25HRhWmWTT10uMSEpX8fw%2B9TI%2FvT3b9j8Q69ZAG3Z%2BynsUt%2BlDHK5ieGsytc1s1qsSe4FCr%2FSpvB1MOX0uWTDijS%2BM2vTmgfkIlkoE7gDsKknB8pT1%2FVR10yurck1gj%2BOZ%2F7AvDfpWVNuk%2F2620FXUOOFbpCpR7SjoAsf%2FwUWcipON7mKiWmBpr%2BIftu%2FHgmKNsVYm6bhsIkPeg6va2tWqvmOzk%2Bv0P4RdH%2BJsVAD99GLLJMrkn8iZn8nWPbgYqUZ4TilT1l5JZE%2Be08Xxttt0I2xh049F%2FkVYfWkN3f28vRTSqmFMM37%2Bb0GOqUBGZrBLBtHYFpdtzWJ9baif1BZjNaNrtyzhcw6jgYUSNSi8XskKFpfSebc5YvxWI%2FMlIbn7l724PqKXNBsr0OqoZEA6MB%2FlMJOo9t%2Fk2lH6prNaTf1D4MerqCMuNtZ48x7CFqaUAo4H0EXxwA6VZdyXqS%2FaSC8GjOW%2F2%2Fsi2robK3WmRe7EhFHkRgJjfllUzivvm7ULi1wY3rw2yYbMF7a79CCoqpn&X-Amz-Signature=6602d57050f28fadc0f29363642381f38713c492fdbeb469af9a9396b2c67ad5&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLW2RKI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDISlgg7CthKrVC%2B%2FYnqReympGYqwo%2BEQKGx1r9KukPTQIgBbXBkrH6ogo%2FcNSbtBWdwmzxu7Zrm0fSzwVlMjXyufsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDstE6pZbAZLIN8jiircAyoKCGLJbNb3CEnRCudnm8LKHV%2F%2Bu3%2BVUN1Q7x3npEYsbAO85vqhLgBiQ3BmfGJKeGVJ%2F4HTbu0BjVpBvSZuu3eu%2FOVaxoanGy6pf3wMwvZsTaOb07vlIE5zeXv4UnBlWXHF3MDGBp0GP9B9iBBIv6PyYHHE3YYf%2B%2BBhGB5VQuV97JFEO7BOtIPKxBrrrMy4MppA6jlouUwNEUzVJAnpRl0I92MYha7o%2FiEc3mUkk1XvT%2FppxZvR4wjHQEW%2B1H95UC8nzSTUqw%2BthAV5gyvlzEKUZW9AFBakYqoIWaKaKoskNPvK8TXPdQOWeBod63%2B9UcF%2FXrYRLwb25HRhWmWTT10uMSEpX8fw%2B9TI%2FvT3b9j8Q69ZAG3Z%2BynsUt%2BlDHK5ieGsytc1s1qsSe4FCr%2FSpvB1MOX0uWTDijS%2BM2vTmgfkIlkoE7gDsKknB8pT1%2FVR10yurck1gj%2BOZ%2F7AvDfpWVNuk%2F2620FXUOOFbpCpR7SjoAsf%2FwUWcipON7mKiWmBpr%2BIftu%2FHgmKNsVYm6bhsIkPeg6va2tWqvmOzk%2Bv0P4RdH%2BJsVAD99GLLJMrkn8iZn8nWPbgYqUZ4TilT1l5JZE%2Be08Xxttt0I2xh049F%2FkVYfWkN3f28vRTSqmFMM37%2Bb0GOqUBGZrBLBtHYFpdtzWJ9baif1BZjNaNrtyzhcw6jgYUSNSi8XskKFpfSebc5YvxWI%2FMlIbn7l724PqKXNBsr0OqoZEA6MB%2FlMJOo9t%2Fk2lH6prNaTf1D4MerqCMuNtZ48x7CFqaUAo4H0EXxwA6VZdyXqS%2FaSC8GjOW%2F2%2Fsi2robK3WmRe7EhFHkRgJjfllUzivvm7ULi1wY3rw2yYbMF7a79CCoqpn&X-Amz-Signature=bf0ed07377166fb9581f527e22d646162a34a8dcad0a8fe300c68f5fb942da92&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCLW2RKI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQDISlgg7CthKrVC%2B%2FYnqReympGYqwo%2BEQKGx1r9KukPTQIgBbXBkrH6ogo%2FcNSbtBWdwmzxu7Zrm0fSzwVlMjXyufsq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDDstE6pZbAZLIN8jiircAyoKCGLJbNb3CEnRCudnm8LKHV%2F%2Bu3%2BVUN1Q7x3npEYsbAO85vqhLgBiQ3BmfGJKeGVJ%2F4HTbu0BjVpBvSZuu3eu%2FOVaxoanGy6pf3wMwvZsTaOb07vlIE5zeXv4UnBlWXHF3MDGBp0GP9B9iBBIv6PyYHHE3YYf%2B%2BBhGB5VQuV97JFEO7BOtIPKxBrrrMy4MppA6jlouUwNEUzVJAnpRl0I92MYha7o%2FiEc3mUkk1XvT%2FppxZvR4wjHQEW%2B1H95UC8nzSTUqw%2BthAV5gyvlzEKUZW9AFBakYqoIWaKaKoskNPvK8TXPdQOWeBod63%2B9UcF%2FXrYRLwb25HRhWmWTT10uMSEpX8fw%2B9TI%2FvT3b9j8Q69ZAG3Z%2BynsUt%2BlDHK5ieGsytc1s1qsSe4FCr%2FSpvB1MOX0uWTDijS%2BM2vTmgfkIlkoE7gDsKknB8pT1%2FVR10yurck1gj%2BOZ%2F7AvDfpWVNuk%2F2620FXUOOFbpCpR7SjoAsf%2FwUWcipON7mKiWmBpr%2BIftu%2FHgmKNsVYm6bhsIkPeg6va2tWqvmOzk%2Bv0P4RdH%2BJsVAD99GLLJMrkn8iZn8nWPbgYqUZ4TilT1l5JZE%2Be08Xxttt0I2xh049F%2FkVYfWkN3f28vRTSqmFMM37%2Bb0GOqUBGZrBLBtHYFpdtzWJ9baif1BZjNaNrtyzhcw6jgYUSNSi8XskKFpfSebc5YvxWI%2FMlIbn7l724PqKXNBsr0OqoZEA6MB%2FlMJOo9t%2Fk2lH6prNaTf1D4MerqCMuNtZ48x7CFqaUAo4H0EXxwA6VZdyXqS%2FaSC8GjOW%2F2%2Fsi2robK3WmRe7EhFHkRgJjfllUzivvm7ULi1wY3rw2yYbMF7a79CCoqpn&X-Amz-Signature=61c5e6418f65f5d2a5acc0faa1cfd5ca4c3052919ea5eddb5d414eae6bc15019&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
