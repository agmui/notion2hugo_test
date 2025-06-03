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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AZXHB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBilJdfS5i%2FEVm%2BnNUBJp2WJR%2BGFKWs0syMkBrKH5kZ9AiB3GdVkPGfavkLBICnXjPy5ZEuE%2BllvYZI2f8uf%2FLj9xCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqYe4gcY1x2mhV%2B2qKtwDrVKTUiZnSexBYSJlyMbJj5G%2FBZJF%2FO5MjWIcM%2BVbRumA6QbDGMzDbEzcDL3c%2FtOTWejgRFqrc5FzjWlmdcwLYYKp3eSX2ulevUWfKbk8y1NbUcWdRHri4NZmx6tpEhXUTbFr7DahrLENpPzoS7LznJc67znsvkDNitsPejZL0maM0bKMhTEw0VKlD2E2ckofBkHDFmBCDi0g7ehNy4aaSjIYMJKY9ptKiBZR%2Ba8ydx23rC%2FJ5zIydcdWiYBaKipGYkD%2Fb2T1NdVNIzyZkuApIwSQYxLuecF3RVXy9za%2BsLiS2yj0h5ERvyoZABKQ1s3WCFXEvV%2FVwWrry2YhsQYG9iC5dY9qR1HIpWjD8ogQOQq5Y%2BWSj%2Fzubuj3OAibZTq4rtx8AAL6zEyeCrfKd8a7zkYtDclBJMKkgBtgvjJAohaVaHILyB2PhHJ6Fd1PvcnNgZSdKzApMRPXM%2BxCDpZZUF3KcjNiIEO1fzYWMT2GouJ48WdviSUQJgRfNWdKLBXwy7wQ5ju%2FzT7JFNt3sU6KHJMoL4QiHxOiaDQajUDOrCu8seZ18QC3bYR7JWdcGD5WI%2FOkrheVIkMRR5H%2BHevgsNs04RBlm9%2B3VcClq1ja2aGvCyP0wdnh0qCbBFow74X9wQY6pgHm3oPKCyXCwTNx0FAEjP4u04yEtNgLObxKOHwdS9NFLGpJZgMfyXUce2ct4M%2FgqQOJauK8aKOFgAYY2uci2DRqG%2BfUMYJQ0PTuFbv5uBUrzGboYUk01eynHAyWoaIWNfcCXiyv1him3IVtVffOgMrW9%2FlID2A5S0Qd6jU8YMItYQFuYsIWuaHFWITD7pWt58XZZqDXpiKtO7jPRggX6zzHsJbDjz6E&X-Amz-Signature=72ab58961bb356f15cb0cd75b7c2aba434ace6eaff949adfd7dff0fee2d49064&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AZXHB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBilJdfS5i%2FEVm%2BnNUBJp2WJR%2BGFKWs0syMkBrKH5kZ9AiB3GdVkPGfavkLBICnXjPy5ZEuE%2BllvYZI2f8uf%2FLj9xCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqYe4gcY1x2mhV%2B2qKtwDrVKTUiZnSexBYSJlyMbJj5G%2FBZJF%2FO5MjWIcM%2BVbRumA6QbDGMzDbEzcDL3c%2FtOTWejgRFqrc5FzjWlmdcwLYYKp3eSX2ulevUWfKbk8y1NbUcWdRHri4NZmx6tpEhXUTbFr7DahrLENpPzoS7LznJc67znsvkDNitsPejZL0maM0bKMhTEw0VKlD2E2ckofBkHDFmBCDi0g7ehNy4aaSjIYMJKY9ptKiBZR%2Ba8ydx23rC%2FJ5zIydcdWiYBaKipGYkD%2Fb2T1NdVNIzyZkuApIwSQYxLuecF3RVXy9za%2BsLiS2yj0h5ERvyoZABKQ1s3WCFXEvV%2FVwWrry2YhsQYG9iC5dY9qR1HIpWjD8ogQOQq5Y%2BWSj%2Fzubuj3OAibZTq4rtx8AAL6zEyeCrfKd8a7zkYtDclBJMKkgBtgvjJAohaVaHILyB2PhHJ6Fd1PvcnNgZSdKzApMRPXM%2BxCDpZZUF3KcjNiIEO1fzYWMT2GouJ48WdviSUQJgRfNWdKLBXwy7wQ5ju%2FzT7JFNt3sU6KHJMoL4QiHxOiaDQajUDOrCu8seZ18QC3bYR7JWdcGD5WI%2FOkrheVIkMRR5H%2BHevgsNs04RBlm9%2B3VcClq1ja2aGvCyP0wdnh0qCbBFow74X9wQY6pgHm3oPKCyXCwTNx0FAEjP4u04yEtNgLObxKOHwdS9NFLGpJZgMfyXUce2ct4M%2FgqQOJauK8aKOFgAYY2uci2DRqG%2BfUMYJQ0PTuFbv5uBUrzGboYUk01eynHAyWoaIWNfcCXiyv1him3IVtVffOgMrW9%2FlID2A5S0Qd6jU8YMItYQFuYsIWuaHFWITD7pWt58XZZqDXpiKtO7jPRggX6zzHsJbDjz6E&X-Amz-Signature=a7ef319659ceb9565360e5324de8b4079c49355dedbc07d6f7ae218a038b7060&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AZXHB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBilJdfS5i%2FEVm%2BnNUBJp2WJR%2BGFKWs0syMkBrKH5kZ9AiB3GdVkPGfavkLBICnXjPy5ZEuE%2BllvYZI2f8uf%2FLj9xCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqYe4gcY1x2mhV%2B2qKtwDrVKTUiZnSexBYSJlyMbJj5G%2FBZJF%2FO5MjWIcM%2BVbRumA6QbDGMzDbEzcDL3c%2FtOTWejgRFqrc5FzjWlmdcwLYYKp3eSX2ulevUWfKbk8y1NbUcWdRHri4NZmx6tpEhXUTbFr7DahrLENpPzoS7LznJc67znsvkDNitsPejZL0maM0bKMhTEw0VKlD2E2ckofBkHDFmBCDi0g7ehNy4aaSjIYMJKY9ptKiBZR%2Ba8ydx23rC%2FJ5zIydcdWiYBaKipGYkD%2Fb2T1NdVNIzyZkuApIwSQYxLuecF3RVXy9za%2BsLiS2yj0h5ERvyoZABKQ1s3WCFXEvV%2FVwWrry2YhsQYG9iC5dY9qR1HIpWjD8ogQOQq5Y%2BWSj%2Fzubuj3OAibZTq4rtx8AAL6zEyeCrfKd8a7zkYtDclBJMKkgBtgvjJAohaVaHILyB2PhHJ6Fd1PvcnNgZSdKzApMRPXM%2BxCDpZZUF3KcjNiIEO1fzYWMT2GouJ48WdviSUQJgRfNWdKLBXwy7wQ5ju%2FzT7JFNt3sU6KHJMoL4QiHxOiaDQajUDOrCu8seZ18QC3bYR7JWdcGD5WI%2FOkrheVIkMRR5H%2BHevgsNs04RBlm9%2B3VcClq1ja2aGvCyP0wdnh0qCbBFow74X9wQY6pgHm3oPKCyXCwTNx0FAEjP4u04yEtNgLObxKOHwdS9NFLGpJZgMfyXUce2ct4M%2FgqQOJauK8aKOFgAYY2uci2DRqG%2BfUMYJQ0PTuFbv5uBUrzGboYUk01eynHAyWoaIWNfcCXiyv1him3IVtVffOgMrW9%2FlID2A5S0Qd6jU8YMItYQFuYsIWuaHFWITD7pWt58XZZqDXpiKtO7jPRggX6zzHsJbDjz6E&X-Amz-Signature=3f2df28df04717f4b01e39f116489420d4a8610a7fc1d2caf188a41833238e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AZXHB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBilJdfS5i%2FEVm%2BnNUBJp2WJR%2BGFKWs0syMkBrKH5kZ9AiB3GdVkPGfavkLBICnXjPy5ZEuE%2BllvYZI2f8uf%2FLj9xCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqYe4gcY1x2mhV%2B2qKtwDrVKTUiZnSexBYSJlyMbJj5G%2FBZJF%2FO5MjWIcM%2BVbRumA6QbDGMzDbEzcDL3c%2FtOTWejgRFqrc5FzjWlmdcwLYYKp3eSX2ulevUWfKbk8y1NbUcWdRHri4NZmx6tpEhXUTbFr7DahrLENpPzoS7LznJc67znsvkDNitsPejZL0maM0bKMhTEw0VKlD2E2ckofBkHDFmBCDi0g7ehNy4aaSjIYMJKY9ptKiBZR%2Ba8ydx23rC%2FJ5zIydcdWiYBaKipGYkD%2Fb2T1NdVNIzyZkuApIwSQYxLuecF3RVXy9za%2BsLiS2yj0h5ERvyoZABKQ1s3WCFXEvV%2FVwWrry2YhsQYG9iC5dY9qR1HIpWjD8ogQOQq5Y%2BWSj%2Fzubuj3OAibZTq4rtx8AAL6zEyeCrfKd8a7zkYtDclBJMKkgBtgvjJAohaVaHILyB2PhHJ6Fd1PvcnNgZSdKzApMRPXM%2BxCDpZZUF3KcjNiIEO1fzYWMT2GouJ48WdviSUQJgRfNWdKLBXwy7wQ5ju%2FzT7JFNt3sU6KHJMoL4QiHxOiaDQajUDOrCu8seZ18QC3bYR7JWdcGD5WI%2FOkrheVIkMRR5H%2BHevgsNs04RBlm9%2B3VcClq1ja2aGvCyP0wdnh0qCbBFow74X9wQY6pgHm3oPKCyXCwTNx0FAEjP4u04yEtNgLObxKOHwdS9NFLGpJZgMfyXUce2ct4M%2FgqQOJauK8aKOFgAYY2uci2DRqG%2BfUMYJQ0PTuFbv5uBUrzGboYUk01eynHAyWoaIWNfcCXiyv1him3IVtVffOgMrW9%2FlID2A5S0Qd6jU8YMItYQFuYsIWuaHFWITD7pWt58XZZqDXpiKtO7jPRggX6zzHsJbDjz6E&X-Amz-Signature=7a8413b3596b9bcb5f5fe676c756960adea62d42b39ca729933d4ca4043e0674&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AZXHB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBilJdfS5i%2FEVm%2BnNUBJp2WJR%2BGFKWs0syMkBrKH5kZ9AiB3GdVkPGfavkLBICnXjPy5ZEuE%2BllvYZI2f8uf%2FLj9xCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqYe4gcY1x2mhV%2B2qKtwDrVKTUiZnSexBYSJlyMbJj5G%2FBZJF%2FO5MjWIcM%2BVbRumA6QbDGMzDbEzcDL3c%2FtOTWejgRFqrc5FzjWlmdcwLYYKp3eSX2ulevUWfKbk8y1NbUcWdRHri4NZmx6tpEhXUTbFr7DahrLENpPzoS7LznJc67znsvkDNitsPejZL0maM0bKMhTEw0VKlD2E2ckofBkHDFmBCDi0g7ehNy4aaSjIYMJKY9ptKiBZR%2Ba8ydx23rC%2FJ5zIydcdWiYBaKipGYkD%2Fb2T1NdVNIzyZkuApIwSQYxLuecF3RVXy9za%2BsLiS2yj0h5ERvyoZABKQ1s3WCFXEvV%2FVwWrry2YhsQYG9iC5dY9qR1HIpWjD8ogQOQq5Y%2BWSj%2Fzubuj3OAibZTq4rtx8AAL6zEyeCrfKd8a7zkYtDclBJMKkgBtgvjJAohaVaHILyB2PhHJ6Fd1PvcnNgZSdKzApMRPXM%2BxCDpZZUF3KcjNiIEO1fzYWMT2GouJ48WdviSUQJgRfNWdKLBXwy7wQ5ju%2FzT7JFNt3sU6KHJMoL4QiHxOiaDQajUDOrCu8seZ18QC3bYR7JWdcGD5WI%2FOkrheVIkMRR5H%2BHevgsNs04RBlm9%2B3VcClq1ja2aGvCyP0wdnh0qCbBFow74X9wQY6pgHm3oPKCyXCwTNx0FAEjP4u04yEtNgLObxKOHwdS9NFLGpJZgMfyXUce2ct4M%2FgqQOJauK8aKOFgAYY2uci2DRqG%2BfUMYJQ0PTuFbv5uBUrzGboYUk01eynHAyWoaIWNfcCXiyv1him3IVtVffOgMrW9%2FlID2A5S0Qd6jU8YMItYQFuYsIWuaHFWITD7pWt58XZZqDXpiKtO7jPRggX6zzHsJbDjz6E&X-Amz-Signature=4595f88ef864752128584f49ae07db762b9fa6a78f52f53d0a778d9e8696d6a0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AZXHB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBilJdfS5i%2FEVm%2BnNUBJp2WJR%2BGFKWs0syMkBrKH5kZ9AiB3GdVkPGfavkLBICnXjPy5ZEuE%2BllvYZI2f8uf%2FLj9xCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqYe4gcY1x2mhV%2B2qKtwDrVKTUiZnSexBYSJlyMbJj5G%2FBZJF%2FO5MjWIcM%2BVbRumA6QbDGMzDbEzcDL3c%2FtOTWejgRFqrc5FzjWlmdcwLYYKp3eSX2ulevUWfKbk8y1NbUcWdRHri4NZmx6tpEhXUTbFr7DahrLENpPzoS7LznJc67znsvkDNitsPejZL0maM0bKMhTEw0VKlD2E2ckofBkHDFmBCDi0g7ehNy4aaSjIYMJKY9ptKiBZR%2Ba8ydx23rC%2FJ5zIydcdWiYBaKipGYkD%2Fb2T1NdVNIzyZkuApIwSQYxLuecF3RVXy9za%2BsLiS2yj0h5ERvyoZABKQ1s3WCFXEvV%2FVwWrry2YhsQYG9iC5dY9qR1HIpWjD8ogQOQq5Y%2BWSj%2Fzubuj3OAibZTq4rtx8AAL6zEyeCrfKd8a7zkYtDclBJMKkgBtgvjJAohaVaHILyB2PhHJ6Fd1PvcnNgZSdKzApMRPXM%2BxCDpZZUF3KcjNiIEO1fzYWMT2GouJ48WdviSUQJgRfNWdKLBXwy7wQ5ju%2FzT7JFNt3sU6KHJMoL4QiHxOiaDQajUDOrCu8seZ18QC3bYR7JWdcGD5WI%2FOkrheVIkMRR5H%2BHevgsNs04RBlm9%2B3VcClq1ja2aGvCyP0wdnh0qCbBFow74X9wQY6pgHm3oPKCyXCwTNx0FAEjP4u04yEtNgLObxKOHwdS9NFLGpJZgMfyXUce2ct4M%2FgqQOJauK8aKOFgAYY2uci2DRqG%2BfUMYJQ0PTuFbv5uBUrzGboYUk01eynHAyWoaIWNfcCXiyv1him3IVtVffOgMrW9%2FlID2A5S0Qd6jU8YMItYQFuYsIWuaHFWITD7pWt58XZZqDXpiKtO7jPRggX6zzHsJbDjz6E&X-Amz-Signature=6d545af39cd303349943c242366b30639270ac626e0ccc7f5f437bf0c260c385&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZH7AZXHB%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T190723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIBilJdfS5i%2FEVm%2BnNUBJp2WJR%2BGFKWs0syMkBrKH5kZ9AiB3GdVkPGfavkLBICnXjPy5ZEuE%2BllvYZI2f8uf%2FLj9xCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMqYe4gcY1x2mhV%2B2qKtwDrVKTUiZnSexBYSJlyMbJj5G%2FBZJF%2FO5MjWIcM%2BVbRumA6QbDGMzDbEzcDL3c%2FtOTWejgRFqrc5FzjWlmdcwLYYKp3eSX2ulevUWfKbk8y1NbUcWdRHri4NZmx6tpEhXUTbFr7DahrLENpPzoS7LznJc67znsvkDNitsPejZL0maM0bKMhTEw0VKlD2E2ckofBkHDFmBCDi0g7ehNy4aaSjIYMJKY9ptKiBZR%2Ba8ydx23rC%2FJ5zIydcdWiYBaKipGYkD%2Fb2T1NdVNIzyZkuApIwSQYxLuecF3RVXy9za%2BsLiS2yj0h5ERvyoZABKQ1s3WCFXEvV%2FVwWrry2YhsQYG9iC5dY9qR1HIpWjD8ogQOQq5Y%2BWSj%2Fzubuj3OAibZTq4rtx8AAL6zEyeCrfKd8a7zkYtDclBJMKkgBtgvjJAohaVaHILyB2PhHJ6Fd1PvcnNgZSdKzApMRPXM%2BxCDpZZUF3KcjNiIEO1fzYWMT2GouJ48WdviSUQJgRfNWdKLBXwy7wQ5ju%2FzT7JFNt3sU6KHJMoL4QiHxOiaDQajUDOrCu8seZ18QC3bYR7JWdcGD5WI%2FOkrheVIkMRR5H%2BHevgsNs04RBlm9%2B3VcClq1ja2aGvCyP0wdnh0qCbBFow74X9wQY6pgHm3oPKCyXCwTNx0FAEjP4u04yEtNgLObxKOHwdS9NFLGpJZgMfyXUce2ct4M%2FgqQOJauK8aKOFgAYY2uci2DRqG%2BfUMYJQ0PTuFbv5uBUrzGboYUk01eynHAyWoaIWNfcCXiyv1him3IVtVffOgMrW9%2FlID2A5S0Qd6jU8YMItYQFuYsIWuaHFWITD7pWt58XZZqDXpiKtO7jPRggX6zzHsJbDjz6E&X-Amz-Signature=d7f381d541da604fe1ef633bd1bb53da293aa0f59172ef9c26836beed10b7caf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
