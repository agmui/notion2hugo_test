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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFZJZDS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30HcfP%2B3ajRwvURN%2F6U84Be9tHoCHClDG2BeLHzAbkwIgAQ0Ryly41z6dj3GzMyA3Y2M8jZF9qOnFKDweenABfDkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMwfWPwYM0qi9b0IZyrcAwZfUHk82RmhiLuU7xcxSNfpy78e50q3OfTDp342xnEykof3Lm5O9GA7mkEyEgbiy92lrSvNAkUH3q0G%2BrSTKhbgG2gfiL7ld6TDEqB4X92g7zxyFi5dsn6cdOjrHUbMjdQSYYawmTZjarRgzLt5oBsqF1pIAuBCZWmY7j8wHVNOUAQT2x8NMxM1z%2Bek%2F4odJFdUzPLO1%2Bc3YkJuVgQNGpRbE%2FSxIReV64ztbYS31ToBBMFuVjKBLJWk4qTkzNdUhZ9UZCwjFA4j4fBJBSq4vhNc7csR5spXKxRvEwiPRoaWYYXqpyYTC5nwZmryOeqL6A9c0HzoelVmmBuWybCbk2F6JlkAQA1pydODg2wnBXT%2Flw3XXfh0FdsyonVEUNlHouqCjpSFYbQ3hKKHsF9giWHB0%2B61wj6BnaYiLSUYKNvrlNsGcsrsFUedb8yuFbVZn2D9NbowvPyJBfyrkcPuiWrL8Fs%2FupgmAZKew2MTM%2BY1RXz1DlcoFdhjubAgJO9qQksMDBMZqD79D91nogifCr3YHGJ5s%2BVMzXcmwk5yCq2Sa%2B%2BHTJqCMwdNfF%2BLxkjznZFf6nIiHLv7Zm6Fki4UXsTyR1azdzqQXgf5ucN1brPG%2BpejYItVFnyQysTwMO6Gqr4GOqUBnydwo3y%2BIN%2BcXHrK334ayLUvVRDTbcMMt2m1sm0ODexBQyot36V506R7%2BtbFJVXou3rouXGOkSoV9%2FiJN71tvME4Jr4D0rMPZ1juaeUJ%2FwCHzxugE18B34RhYX1x8p80WjB%2BlsZ77bMMcRlBuLVQFWGS8D4bOu4%2FF%2FnllWpMb7WNv33pmDHZKNCih0j3TtGs%2Fmu%2BPE27YiL8wfKdd%2BhwS2rCbPoa&X-Amz-Signature=502f27651cbd42eacbf67230e427495bd7bf561ae1b602aed59b4b55938d3378&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFZJZDS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30HcfP%2B3ajRwvURN%2F6U84Be9tHoCHClDG2BeLHzAbkwIgAQ0Ryly41z6dj3GzMyA3Y2M8jZF9qOnFKDweenABfDkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMwfWPwYM0qi9b0IZyrcAwZfUHk82RmhiLuU7xcxSNfpy78e50q3OfTDp342xnEykof3Lm5O9GA7mkEyEgbiy92lrSvNAkUH3q0G%2BrSTKhbgG2gfiL7ld6TDEqB4X92g7zxyFi5dsn6cdOjrHUbMjdQSYYawmTZjarRgzLt5oBsqF1pIAuBCZWmY7j8wHVNOUAQT2x8NMxM1z%2Bek%2F4odJFdUzPLO1%2Bc3YkJuVgQNGpRbE%2FSxIReV64ztbYS31ToBBMFuVjKBLJWk4qTkzNdUhZ9UZCwjFA4j4fBJBSq4vhNc7csR5spXKxRvEwiPRoaWYYXqpyYTC5nwZmryOeqL6A9c0HzoelVmmBuWybCbk2F6JlkAQA1pydODg2wnBXT%2Flw3XXfh0FdsyonVEUNlHouqCjpSFYbQ3hKKHsF9giWHB0%2B61wj6BnaYiLSUYKNvrlNsGcsrsFUedb8yuFbVZn2D9NbowvPyJBfyrkcPuiWrL8Fs%2FupgmAZKew2MTM%2BY1RXz1DlcoFdhjubAgJO9qQksMDBMZqD79D91nogifCr3YHGJ5s%2BVMzXcmwk5yCq2Sa%2B%2BHTJqCMwdNfF%2BLxkjznZFf6nIiHLv7Zm6Fki4UXsTyR1azdzqQXgf5ucN1brPG%2BpejYItVFnyQysTwMO6Gqr4GOqUBnydwo3y%2BIN%2BcXHrK334ayLUvVRDTbcMMt2m1sm0ODexBQyot36V506R7%2BtbFJVXou3rouXGOkSoV9%2FiJN71tvME4Jr4D0rMPZ1juaeUJ%2FwCHzxugE18B34RhYX1x8p80WjB%2BlsZ77bMMcRlBuLVQFWGS8D4bOu4%2FF%2FnllWpMb7WNv33pmDHZKNCih0j3TtGs%2Fmu%2BPE27YiL8wfKdd%2BhwS2rCbPoa&X-Amz-Signature=9704fca19e54a0b857448b202643ca267cbdbaeb49f03eed154d801349676ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFZJZDS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30HcfP%2B3ajRwvURN%2F6U84Be9tHoCHClDG2BeLHzAbkwIgAQ0Ryly41z6dj3GzMyA3Y2M8jZF9qOnFKDweenABfDkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMwfWPwYM0qi9b0IZyrcAwZfUHk82RmhiLuU7xcxSNfpy78e50q3OfTDp342xnEykof3Lm5O9GA7mkEyEgbiy92lrSvNAkUH3q0G%2BrSTKhbgG2gfiL7ld6TDEqB4X92g7zxyFi5dsn6cdOjrHUbMjdQSYYawmTZjarRgzLt5oBsqF1pIAuBCZWmY7j8wHVNOUAQT2x8NMxM1z%2Bek%2F4odJFdUzPLO1%2Bc3YkJuVgQNGpRbE%2FSxIReV64ztbYS31ToBBMFuVjKBLJWk4qTkzNdUhZ9UZCwjFA4j4fBJBSq4vhNc7csR5spXKxRvEwiPRoaWYYXqpyYTC5nwZmryOeqL6A9c0HzoelVmmBuWybCbk2F6JlkAQA1pydODg2wnBXT%2Flw3XXfh0FdsyonVEUNlHouqCjpSFYbQ3hKKHsF9giWHB0%2B61wj6BnaYiLSUYKNvrlNsGcsrsFUedb8yuFbVZn2D9NbowvPyJBfyrkcPuiWrL8Fs%2FupgmAZKew2MTM%2BY1RXz1DlcoFdhjubAgJO9qQksMDBMZqD79D91nogifCr3YHGJ5s%2BVMzXcmwk5yCq2Sa%2B%2BHTJqCMwdNfF%2BLxkjznZFf6nIiHLv7Zm6Fki4UXsTyR1azdzqQXgf5ucN1brPG%2BpejYItVFnyQysTwMO6Gqr4GOqUBnydwo3y%2BIN%2BcXHrK334ayLUvVRDTbcMMt2m1sm0ODexBQyot36V506R7%2BtbFJVXou3rouXGOkSoV9%2FiJN71tvME4Jr4D0rMPZ1juaeUJ%2FwCHzxugE18B34RhYX1x8p80WjB%2BlsZ77bMMcRlBuLVQFWGS8D4bOu4%2FF%2FnllWpMb7WNv33pmDHZKNCih0j3TtGs%2Fmu%2BPE27YiL8wfKdd%2BhwS2rCbPoa&X-Amz-Signature=318a06a8aee95eac6ec98b566daa848c049d472d81e48434eed6cfc66f6f1191&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFZJZDS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30HcfP%2B3ajRwvURN%2F6U84Be9tHoCHClDG2BeLHzAbkwIgAQ0Ryly41z6dj3GzMyA3Y2M8jZF9qOnFKDweenABfDkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMwfWPwYM0qi9b0IZyrcAwZfUHk82RmhiLuU7xcxSNfpy78e50q3OfTDp342xnEykof3Lm5O9GA7mkEyEgbiy92lrSvNAkUH3q0G%2BrSTKhbgG2gfiL7ld6TDEqB4X92g7zxyFi5dsn6cdOjrHUbMjdQSYYawmTZjarRgzLt5oBsqF1pIAuBCZWmY7j8wHVNOUAQT2x8NMxM1z%2Bek%2F4odJFdUzPLO1%2Bc3YkJuVgQNGpRbE%2FSxIReV64ztbYS31ToBBMFuVjKBLJWk4qTkzNdUhZ9UZCwjFA4j4fBJBSq4vhNc7csR5spXKxRvEwiPRoaWYYXqpyYTC5nwZmryOeqL6A9c0HzoelVmmBuWybCbk2F6JlkAQA1pydODg2wnBXT%2Flw3XXfh0FdsyonVEUNlHouqCjpSFYbQ3hKKHsF9giWHB0%2B61wj6BnaYiLSUYKNvrlNsGcsrsFUedb8yuFbVZn2D9NbowvPyJBfyrkcPuiWrL8Fs%2FupgmAZKew2MTM%2BY1RXz1DlcoFdhjubAgJO9qQksMDBMZqD79D91nogifCr3YHGJ5s%2BVMzXcmwk5yCq2Sa%2B%2BHTJqCMwdNfF%2BLxkjznZFf6nIiHLv7Zm6Fki4UXsTyR1azdzqQXgf5ucN1brPG%2BpejYItVFnyQysTwMO6Gqr4GOqUBnydwo3y%2BIN%2BcXHrK334ayLUvVRDTbcMMt2m1sm0ODexBQyot36V506R7%2BtbFJVXou3rouXGOkSoV9%2FiJN71tvME4Jr4D0rMPZ1juaeUJ%2FwCHzxugE18B34RhYX1x8p80WjB%2BlsZ77bMMcRlBuLVQFWGS8D4bOu4%2FF%2FnllWpMb7WNv33pmDHZKNCih0j3TtGs%2Fmu%2BPE27YiL8wfKdd%2BhwS2rCbPoa&X-Amz-Signature=f6c5a4dd4bb9db78fb22a9d23cfb71b4f7523041ed847ddc05ca23f3f3772bd2&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFZJZDS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30HcfP%2B3ajRwvURN%2F6U84Be9tHoCHClDG2BeLHzAbkwIgAQ0Ryly41z6dj3GzMyA3Y2M8jZF9qOnFKDweenABfDkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMwfWPwYM0qi9b0IZyrcAwZfUHk82RmhiLuU7xcxSNfpy78e50q3OfTDp342xnEykof3Lm5O9GA7mkEyEgbiy92lrSvNAkUH3q0G%2BrSTKhbgG2gfiL7ld6TDEqB4X92g7zxyFi5dsn6cdOjrHUbMjdQSYYawmTZjarRgzLt5oBsqF1pIAuBCZWmY7j8wHVNOUAQT2x8NMxM1z%2Bek%2F4odJFdUzPLO1%2Bc3YkJuVgQNGpRbE%2FSxIReV64ztbYS31ToBBMFuVjKBLJWk4qTkzNdUhZ9UZCwjFA4j4fBJBSq4vhNc7csR5spXKxRvEwiPRoaWYYXqpyYTC5nwZmryOeqL6A9c0HzoelVmmBuWybCbk2F6JlkAQA1pydODg2wnBXT%2Flw3XXfh0FdsyonVEUNlHouqCjpSFYbQ3hKKHsF9giWHB0%2B61wj6BnaYiLSUYKNvrlNsGcsrsFUedb8yuFbVZn2D9NbowvPyJBfyrkcPuiWrL8Fs%2FupgmAZKew2MTM%2BY1RXz1DlcoFdhjubAgJO9qQksMDBMZqD79D91nogifCr3YHGJ5s%2BVMzXcmwk5yCq2Sa%2B%2BHTJqCMwdNfF%2BLxkjznZFf6nIiHLv7Zm6Fki4UXsTyR1azdzqQXgf5ucN1brPG%2BpejYItVFnyQysTwMO6Gqr4GOqUBnydwo3y%2BIN%2BcXHrK334ayLUvVRDTbcMMt2m1sm0ODexBQyot36V506R7%2BtbFJVXou3rouXGOkSoV9%2FiJN71tvME4Jr4D0rMPZ1juaeUJ%2FwCHzxugE18B34RhYX1x8p80WjB%2BlsZ77bMMcRlBuLVQFWGS8D4bOu4%2FF%2FnllWpMb7WNv33pmDHZKNCih0j3TtGs%2Fmu%2BPE27YiL8wfKdd%2BhwS2rCbPoa&X-Amz-Signature=8e2cf8dd211f58eb0fe266ed93a358a914f38c5ddf10b3b5a4ae931ca4b2b647&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFZJZDS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30HcfP%2B3ajRwvURN%2F6U84Be9tHoCHClDG2BeLHzAbkwIgAQ0Ryly41z6dj3GzMyA3Y2M8jZF9qOnFKDweenABfDkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMwfWPwYM0qi9b0IZyrcAwZfUHk82RmhiLuU7xcxSNfpy78e50q3OfTDp342xnEykof3Lm5O9GA7mkEyEgbiy92lrSvNAkUH3q0G%2BrSTKhbgG2gfiL7ld6TDEqB4X92g7zxyFi5dsn6cdOjrHUbMjdQSYYawmTZjarRgzLt5oBsqF1pIAuBCZWmY7j8wHVNOUAQT2x8NMxM1z%2Bek%2F4odJFdUzPLO1%2Bc3YkJuVgQNGpRbE%2FSxIReV64ztbYS31ToBBMFuVjKBLJWk4qTkzNdUhZ9UZCwjFA4j4fBJBSq4vhNc7csR5spXKxRvEwiPRoaWYYXqpyYTC5nwZmryOeqL6A9c0HzoelVmmBuWybCbk2F6JlkAQA1pydODg2wnBXT%2Flw3XXfh0FdsyonVEUNlHouqCjpSFYbQ3hKKHsF9giWHB0%2B61wj6BnaYiLSUYKNvrlNsGcsrsFUedb8yuFbVZn2D9NbowvPyJBfyrkcPuiWrL8Fs%2FupgmAZKew2MTM%2BY1RXz1DlcoFdhjubAgJO9qQksMDBMZqD79D91nogifCr3YHGJ5s%2BVMzXcmwk5yCq2Sa%2B%2BHTJqCMwdNfF%2BLxkjznZFf6nIiHLv7Zm6Fki4UXsTyR1azdzqQXgf5ucN1brPG%2BpejYItVFnyQysTwMO6Gqr4GOqUBnydwo3y%2BIN%2BcXHrK334ayLUvVRDTbcMMt2m1sm0ODexBQyot36V506R7%2BtbFJVXou3rouXGOkSoV9%2FiJN71tvME4Jr4D0rMPZ1juaeUJ%2FwCHzxugE18B34RhYX1x8p80WjB%2BlsZ77bMMcRlBuLVQFWGS8D4bOu4%2FF%2FnllWpMb7WNv33pmDHZKNCih0j3TtGs%2Fmu%2BPE27YiL8wfKdd%2BhwS2rCbPoa&X-Amz-Signature=80b0f73753c866ef6468addd938cb456b63fff01e51d9da3547ec0341d1d14ad&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRFZJZDS%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T061141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD30HcfP%2B3ajRwvURN%2F6U84Be9tHoCHClDG2BeLHzAbkwIgAQ0Ryly41z6dj3GzMyA3Y2M8jZF9qOnFKDweenABfDkq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDMwfWPwYM0qi9b0IZyrcAwZfUHk82RmhiLuU7xcxSNfpy78e50q3OfTDp342xnEykof3Lm5O9GA7mkEyEgbiy92lrSvNAkUH3q0G%2BrSTKhbgG2gfiL7ld6TDEqB4X92g7zxyFi5dsn6cdOjrHUbMjdQSYYawmTZjarRgzLt5oBsqF1pIAuBCZWmY7j8wHVNOUAQT2x8NMxM1z%2Bek%2F4odJFdUzPLO1%2Bc3YkJuVgQNGpRbE%2FSxIReV64ztbYS31ToBBMFuVjKBLJWk4qTkzNdUhZ9UZCwjFA4j4fBJBSq4vhNc7csR5spXKxRvEwiPRoaWYYXqpyYTC5nwZmryOeqL6A9c0HzoelVmmBuWybCbk2F6JlkAQA1pydODg2wnBXT%2Flw3XXfh0FdsyonVEUNlHouqCjpSFYbQ3hKKHsF9giWHB0%2B61wj6BnaYiLSUYKNvrlNsGcsrsFUedb8yuFbVZn2D9NbowvPyJBfyrkcPuiWrL8Fs%2FupgmAZKew2MTM%2BY1RXz1DlcoFdhjubAgJO9qQksMDBMZqD79D91nogifCr3YHGJ5s%2BVMzXcmwk5yCq2Sa%2B%2BHTJqCMwdNfF%2BLxkjznZFf6nIiHLv7Zm6Fki4UXsTyR1azdzqQXgf5ucN1brPG%2BpejYItVFnyQysTwMO6Gqr4GOqUBnydwo3y%2BIN%2BcXHrK334ayLUvVRDTbcMMt2m1sm0ODexBQyot36V506R7%2BtbFJVXou3rouXGOkSoV9%2FiJN71tvME4Jr4D0rMPZ1juaeUJ%2FwCHzxugE18B34RhYX1x8p80WjB%2BlsZ77bMMcRlBuLVQFWGS8D4bOu4%2FF%2FnllWpMb7WNv33pmDHZKNCih0j3TtGs%2Fmu%2BPE27YiL8wfKdd%2BhwS2rCbPoa&X-Amz-Signature=53bf363b2a3c7d2e7172ca7d4f71ebecf1a705f2bd52dbdceb9c9e25359d67fe&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
