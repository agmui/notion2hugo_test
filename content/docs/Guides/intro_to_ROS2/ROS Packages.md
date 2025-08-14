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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY2HWZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bwP9A1HGqW9u7V90xAXqwMa4hYi2oA0oMVuekSbHzwIgH66EXiGEwS3fim4SUMOBoa8h5n7TlSTEtNiMNHFunK0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJvq0rPwkw%2BrKEehhircA%2FtPPMRyKe6VHziZj7B15C14wpIYYwrWgZ6WrFY5E5LfhuniqPCxRTlpBB4Av5yJXBxKCvGlUN4%2BDqnellbSFySYt7xi%2FetU%2Fny8lZu808B6TJoXw7ed0cFH9ltmPhVFTKtRTZrRyswJOuimVruRS%2FVmZxPa9G4LKHODJezt4YkqU%2B%2B3f%2BkCdq4cb6aNr8TvyWWZxy1vXl%2F5o9HIIxlv7ZyCAwfT4mnkh6w7sQImdv%2BY0xj9Qs%2FruCZfHDGjYOU8C6GJm%2BTUu10UxwCrvHbzaQ5NGpqRtFXVjOiGHRRmu4PtlDIJwEstvOJsUcBUcjS%2B0uNrFDgORDevp80FGmIOdDTr7e7bwTy68W27A64E4TvA%2BRO4V0yEemKRmJJ3SfBGvXtGXtmSJaH13i6dm8iCa3wn2%2FaT01LA2%2BLmq05oXQBbYUc%2F0azSlB6h5xSCqYQgvfFmgHIhWqaO6R4IbPItw63wCAA%2FeM2hWUCpqvLHJUWO%2BADsWR5hlQNHdmNQprt8E6u7W9G9ftlabge2gZPzr5Qrhp3hMdfqP6FAnKABqpBrp9uCrUy3sbm3mvqcqOQFd9HJ6Y4dyfzs9vkFhFTwIK2tsWvANNfZOUccgfzvMWPvp6wRVCz356NixwyzMJ%2BM9cQGOqUBIzPInRbrvhz2CunabrRGuqJQSLROHyMHAUioy8xrmCRSFB3kZnbqv0VXIVGxvQc7IVT48pu2HD%2FKTn%2BySZon0Kd2wOhzRTFn9lF4DKL42sQ%2FPLSacJE8l4JE9l1fJVPaIW3rBxvFoDA%2B5QPhwiuaAGTVQ6NZYO29byewqWNkNBm5QKoZfgHwugsb2Qz2nLRBFqekgGzWKg0IJMHiXYC63fcxyqx7&X-Amz-Signature=514725a4759d8aabee907705dd6d88b74fa3118eb04ac502b777caaa3e3830cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY2HWZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bwP9A1HGqW9u7V90xAXqwMa4hYi2oA0oMVuekSbHzwIgH66EXiGEwS3fim4SUMOBoa8h5n7TlSTEtNiMNHFunK0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJvq0rPwkw%2BrKEehhircA%2FtPPMRyKe6VHziZj7B15C14wpIYYwrWgZ6WrFY5E5LfhuniqPCxRTlpBB4Av5yJXBxKCvGlUN4%2BDqnellbSFySYt7xi%2FetU%2Fny8lZu808B6TJoXw7ed0cFH9ltmPhVFTKtRTZrRyswJOuimVruRS%2FVmZxPa9G4LKHODJezt4YkqU%2B%2B3f%2BkCdq4cb6aNr8TvyWWZxy1vXl%2F5o9HIIxlv7ZyCAwfT4mnkh6w7sQImdv%2BY0xj9Qs%2FruCZfHDGjYOU8C6GJm%2BTUu10UxwCrvHbzaQ5NGpqRtFXVjOiGHRRmu4PtlDIJwEstvOJsUcBUcjS%2B0uNrFDgORDevp80FGmIOdDTr7e7bwTy68W27A64E4TvA%2BRO4V0yEemKRmJJ3SfBGvXtGXtmSJaH13i6dm8iCa3wn2%2FaT01LA2%2BLmq05oXQBbYUc%2F0azSlB6h5xSCqYQgvfFmgHIhWqaO6R4IbPItw63wCAA%2FeM2hWUCpqvLHJUWO%2BADsWR5hlQNHdmNQprt8E6u7W9G9ftlabge2gZPzr5Qrhp3hMdfqP6FAnKABqpBrp9uCrUy3sbm3mvqcqOQFd9HJ6Y4dyfzs9vkFhFTwIK2tsWvANNfZOUccgfzvMWPvp6wRVCz356NixwyzMJ%2BM9cQGOqUBIzPInRbrvhz2CunabrRGuqJQSLROHyMHAUioy8xrmCRSFB3kZnbqv0VXIVGxvQc7IVT48pu2HD%2FKTn%2BySZon0Kd2wOhzRTFn9lF4DKL42sQ%2FPLSacJE8l4JE9l1fJVPaIW3rBxvFoDA%2B5QPhwiuaAGTVQ6NZYO29byewqWNkNBm5QKoZfgHwugsb2Qz2nLRBFqekgGzWKg0IJMHiXYC63fcxyqx7&X-Amz-Signature=e30dd4d42f6b886f5e0ebfaf688108232c4bdb46f25c27b46db10287435ec2f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY2HWZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bwP9A1HGqW9u7V90xAXqwMa4hYi2oA0oMVuekSbHzwIgH66EXiGEwS3fim4SUMOBoa8h5n7TlSTEtNiMNHFunK0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJvq0rPwkw%2BrKEehhircA%2FtPPMRyKe6VHziZj7B15C14wpIYYwrWgZ6WrFY5E5LfhuniqPCxRTlpBB4Av5yJXBxKCvGlUN4%2BDqnellbSFySYt7xi%2FetU%2Fny8lZu808B6TJoXw7ed0cFH9ltmPhVFTKtRTZrRyswJOuimVruRS%2FVmZxPa9G4LKHODJezt4YkqU%2B%2B3f%2BkCdq4cb6aNr8TvyWWZxy1vXl%2F5o9HIIxlv7ZyCAwfT4mnkh6w7sQImdv%2BY0xj9Qs%2FruCZfHDGjYOU8C6GJm%2BTUu10UxwCrvHbzaQ5NGpqRtFXVjOiGHRRmu4PtlDIJwEstvOJsUcBUcjS%2B0uNrFDgORDevp80FGmIOdDTr7e7bwTy68W27A64E4TvA%2BRO4V0yEemKRmJJ3SfBGvXtGXtmSJaH13i6dm8iCa3wn2%2FaT01LA2%2BLmq05oXQBbYUc%2F0azSlB6h5xSCqYQgvfFmgHIhWqaO6R4IbPItw63wCAA%2FeM2hWUCpqvLHJUWO%2BADsWR5hlQNHdmNQprt8E6u7W9G9ftlabge2gZPzr5Qrhp3hMdfqP6FAnKABqpBrp9uCrUy3sbm3mvqcqOQFd9HJ6Y4dyfzs9vkFhFTwIK2tsWvANNfZOUccgfzvMWPvp6wRVCz356NixwyzMJ%2BM9cQGOqUBIzPInRbrvhz2CunabrRGuqJQSLROHyMHAUioy8xrmCRSFB3kZnbqv0VXIVGxvQc7IVT48pu2HD%2FKTn%2BySZon0Kd2wOhzRTFn9lF4DKL42sQ%2FPLSacJE8l4JE9l1fJVPaIW3rBxvFoDA%2B5QPhwiuaAGTVQ6NZYO29byewqWNkNBm5QKoZfgHwugsb2Qz2nLRBFqekgGzWKg0IJMHiXYC63fcxyqx7&X-Amz-Signature=d7d2e17bd30c6f9786bbe01c45f047f2b94d2b0ef5615e61df08a6d8e26ae6ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY2HWZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bwP9A1HGqW9u7V90xAXqwMa4hYi2oA0oMVuekSbHzwIgH66EXiGEwS3fim4SUMOBoa8h5n7TlSTEtNiMNHFunK0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJvq0rPwkw%2BrKEehhircA%2FtPPMRyKe6VHziZj7B15C14wpIYYwrWgZ6WrFY5E5LfhuniqPCxRTlpBB4Av5yJXBxKCvGlUN4%2BDqnellbSFySYt7xi%2FetU%2Fny8lZu808B6TJoXw7ed0cFH9ltmPhVFTKtRTZrRyswJOuimVruRS%2FVmZxPa9G4LKHODJezt4YkqU%2B%2B3f%2BkCdq4cb6aNr8TvyWWZxy1vXl%2F5o9HIIxlv7ZyCAwfT4mnkh6w7sQImdv%2BY0xj9Qs%2FruCZfHDGjYOU8C6GJm%2BTUu10UxwCrvHbzaQ5NGpqRtFXVjOiGHRRmu4PtlDIJwEstvOJsUcBUcjS%2B0uNrFDgORDevp80FGmIOdDTr7e7bwTy68W27A64E4TvA%2BRO4V0yEemKRmJJ3SfBGvXtGXtmSJaH13i6dm8iCa3wn2%2FaT01LA2%2BLmq05oXQBbYUc%2F0azSlB6h5xSCqYQgvfFmgHIhWqaO6R4IbPItw63wCAA%2FeM2hWUCpqvLHJUWO%2BADsWR5hlQNHdmNQprt8E6u7W9G9ftlabge2gZPzr5Qrhp3hMdfqP6FAnKABqpBrp9uCrUy3sbm3mvqcqOQFd9HJ6Y4dyfzs9vkFhFTwIK2tsWvANNfZOUccgfzvMWPvp6wRVCz356NixwyzMJ%2BM9cQGOqUBIzPInRbrvhz2CunabrRGuqJQSLROHyMHAUioy8xrmCRSFB3kZnbqv0VXIVGxvQc7IVT48pu2HD%2FKTn%2BySZon0Kd2wOhzRTFn9lF4DKL42sQ%2FPLSacJE8l4JE9l1fJVPaIW3rBxvFoDA%2B5QPhwiuaAGTVQ6NZYO29byewqWNkNBm5QKoZfgHwugsb2Qz2nLRBFqekgGzWKg0IJMHiXYC63fcxyqx7&X-Amz-Signature=e89cfe4010c8382eb3677f5e6c865918eea09d75cdb8109e0650490cd4cad5a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY2HWZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bwP9A1HGqW9u7V90xAXqwMa4hYi2oA0oMVuekSbHzwIgH66EXiGEwS3fim4SUMOBoa8h5n7TlSTEtNiMNHFunK0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJvq0rPwkw%2BrKEehhircA%2FtPPMRyKe6VHziZj7B15C14wpIYYwrWgZ6WrFY5E5LfhuniqPCxRTlpBB4Av5yJXBxKCvGlUN4%2BDqnellbSFySYt7xi%2FetU%2Fny8lZu808B6TJoXw7ed0cFH9ltmPhVFTKtRTZrRyswJOuimVruRS%2FVmZxPa9G4LKHODJezt4YkqU%2B%2B3f%2BkCdq4cb6aNr8TvyWWZxy1vXl%2F5o9HIIxlv7ZyCAwfT4mnkh6w7sQImdv%2BY0xj9Qs%2FruCZfHDGjYOU8C6GJm%2BTUu10UxwCrvHbzaQ5NGpqRtFXVjOiGHRRmu4PtlDIJwEstvOJsUcBUcjS%2B0uNrFDgORDevp80FGmIOdDTr7e7bwTy68W27A64E4TvA%2BRO4V0yEemKRmJJ3SfBGvXtGXtmSJaH13i6dm8iCa3wn2%2FaT01LA2%2BLmq05oXQBbYUc%2F0azSlB6h5xSCqYQgvfFmgHIhWqaO6R4IbPItw63wCAA%2FeM2hWUCpqvLHJUWO%2BADsWR5hlQNHdmNQprt8E6u7W9G9ftlabge2gZPzr5Qrhp3hMdfqP6FAnKABqpBrp9uCrUy3sbm3mvqcqOQFd9HJ6Y4dyfzs9vkFhFTwIK2tsWvANNfZOUccgfzvMWPvp6wRVCz356NixwyzMJ%2BM9cQGOqUBIzPInRbrvhz2CunabrRGuqJQSLROHyMHAUioy8xrmCRSFB3kZnbqv0VXIVGxvQc7IVT48pu2HD%2FKTn%2BySZon0Kd2wOhzRTFn9lF4DKL42sQ%2FPLSacJE8l4JE9l1fJVPaIW3rBxvFoDA%2B5QPhwiuaAGTVQ6NZYO29byewqWNkNBm5QKoZfgHwugsb2Qz2nLRBFqekgGzWKg0IJMHiXYC63fcxyqx7&X-Amz-Signature=8508bbd0f741353e22b5cbad659fd884c975c584df7cae745492fd3094cbd953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY2HWZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bwP9A1HGqW9u7V90xAXqwMa4hYi2oA0oMVuekSbHzwIgH66EXiGEwS3fim4SUMOBoa8h5n7TlSTEtNiMNHFunK0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJvq0rPwkw%2BrKEehhircA%2FtPPMRyKe6VHziZj7B15C14wpIYYwrWgZ6WrFY5E5LfhuniqPCxRTlpBB4Av5yJXBxKCvGlUN4%2BDqnellbSFySYt7xi%2FetU%2Fny8lZu808B6TJoXw7ed0cFH9ltmPhVFTKtRTZrRyswJOuimVruRS%2FVmZxPa9G4LKHODJezt4YkqU%2B%2B3f%2BkCdq4cb6aNr8TvyWWZxy1vXl%2F5o9HIIxlv7ZyCAwfT4mnkh6w7sQImdv%2BY0xj9Qs%2FruCZfHDGjYOU8C6GJm%2BTUu10UxwCrvHbzaQ5NGpqRtFXVjOiGHRRmu4PtlDIJwEstvOJsUcBUcjS%2B0uNrFDgORDevp80FGmIOdDTr7e7bwTy68W27A64E4TvA%2BRO4V0yEemKRmJJ3SfBGvXtGXtmSJaH13i6dm8iCa3wn2%2FaT01LA2%2BLmq05oXQBbYUc%2F0azSlB6h5xSCqYQgvfFmgHIhWqaO6R4IbPItw63wCAA%2FeM2hWUCpqvLHJUWO%2BADsWR5hlQNHdmNQprt8E6u7W9G9ftlabge2gZPzr5Qrhp3hMdfqP6FAnKABqpBrp9uCrUy3sbm3mvqcqOQFd9HJ6Y4dyfzs9vkFhFTwIK2tsWvANNfZOUccgfzvMWPvp6wRVCz356NixwyzMJ%2BM9cQGOqUBIzPInRbrvhz2CunabrRGuqJQSLROHyMHAUioy8xrmCRSFB3kZnbqv0VXIVGxvQc7IVT48pu2HD%2FKTn%2BySZon0Kd2wOhzRTFn9lF4DKL42sQ%2FPLSacJE8l4JE9l1fJVPaIW3rBxvFoDA%2B5QPhwiuaAGTVQ6NZYO29byewqWNkNBm5QKoZfgHwugsb2Qz2nLRBFqekgGzWKg0IJMHiXYC63fcxyqx7&X-Amz-Signature=be8faad7c1048f823fd5938a886a8123a6b692998557a62dc0b0a90ce3eee5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRY2HWZ5%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T034457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4bwP9A1HGqW9u7V90xAXqwMa4hYi2oA0oMVuekSbHzwIgH66EXiGEwS3fim4SUMOBoa8h5n7TlSTEtNiMNHFunK0q%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDJvq0rPwkw%2BrKEehhircA%2FtPPMRyKe6VHziZj7B15C14wpIYYwrWgZ6WrFY5E5LfhuniqPCxRTlpBB4Av5yJXBxKCvGlUN4%2BDqnellbSFySYt7xi%2FetU%2Fny8lZu808B6TJoXw7ed0cFH9ltmPhVFTKtRTZrRyswJOuimVruRS%2FVmZxPa9G4LKHODJezt4YkqU%2B%2B3f%2BkCdq4cb6aNr8TvyWWZxy1vXl%2F5o9HIIxlv7ZyCAwfT4mnkh6w7sQImdv%2BY0xj9Qs%2FruCZfHDGjYOU8C6GJm%2BTUu10UxwCrvHbzaQ5NGpqRtFXVjOiGHRRmu4PtlDIJwEstvOJsUcBUcjS%2B0uNrFDgORDevp80FGmIOdDTr7e7bwTy68W27A64E4TvA%2BRO4V0yEemKRmJJ3SfBGvXtGXtmSJaH13i6dm8iCa3wn2%2FaT01LA2%2BLmq05oXQBbYUc%2F0azSlB6h5xSCqYQgvfFmgHIhWqaO6R4IbPItw63wCAA%2FeM2hWUCpqvLHJUWO%2BADsWR5hlQNHdmNQprt8E6u7W9G9ftlabge2gZPzr5Qrhp3hMdfqP6FAnKABqpBrp9uCrUy3sbm3mvqcqOQFd9HJ6Y4dyfzs9vkFhFTwIK2tsWvANNfZOUccgfzvMWPvp6wRVCz356NixwyzMJ%2BM9cQGOqUBIzPInRbrvhz2CunabrRGuqJQSLROHyMHAUioy8xrmCRSFB3kZnbqv0VXIVGxvQc7IVT48pu2HD%2FKTn%2BySZon0Kd2wOhzRTFn9lF4DKL42sQ%2FPLSacJE8l4JE9l1fJVPaIW3rBxvFoDA%2B5QPhwiuaAGTVQ6NZYO29byewqWNkNBm5QKoZfgHwugsb2Qz2nLRBFqekgGzWKg0IJMHiXYC63fcxyqx7&X-Amz-Signature=f299ef4cc3d070aee4432331568bf75efbb89e38d777bd5df1bc0fb91d398bef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
