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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD7KHU2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTuXSwTHorF6%2FrznHHwWvv%2F4bwglNVeEFyaOBIc9KPQIgBh%2BvOhN%2BuuarezSJMQic%2F7%2BGZyeUu%2FSyx9MrdGsJb5Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC4vDliEa%2F7wib22tyrcA0Zq1X1UfdonSJnVerooSecvCErRMoH4XPgmwZFdMYZH9UTJDiVgdZ3nbEn8yxZ2cR%2BmjHoMW7uHjOpeWlrtk0Hhy6M%2F0WLG4yJALs3A3rhVbFQ5PYfZqJh0Jwxo6BHFFlXMF9dvaQ68ecd4hUMGPvRom3ZGF3poDpWy7uVzPwTjdwGdoXEWNy4FW3IO0E1SSYEbIE25zR79HJYRzZIJNedkRqg5VAvPbhjc0VhLbMI%2FzR5DrqcfQgBKkIjJ3KRV4rzkmoxWuWoaYRHB6Ys8xd9RJMvLFzhNasyYzBcVexZbqKsA8CtnIdV5eIOrr%2FMVmmJEylpvrhq2Vr%2BkNGHWbfBdNLFZVHvwo%2Ff4rVKhjpzMVpQtuIST78dicm4KJsdF9fnnBVr1RFK3q9QxadcQ5OEleouOLAXJ%2B%2BUFnS9zYEWTNkXafkC0ttukJMHvORKLH%2Bfp%2FcNRqWbMUJHXAe1ZNrhwGe5y5gOzgXyXUJJWyBBNVa8oRIUivB6%2B5sZCvkZGDDhkgdducKfHtxnfKn9CGJBOu4QnoDm2aFurIw044nnvla7JP3mLLj%2Fn1sVyBVNnX7L99Q3QPqH%2BdsjjmKMOhNHc9KCQWYB2hQfPYuq0ApCG%2B%2BxAM%2B5shxXz58lNMJH5icAGOqUBzJZFo5wrXbncrW01DwprQRec6b4N8sptriVmo3l6plihxV8JgIl3DoxHZJ13kCjTUsNX0cpfNBhvowuwz%2BjsHFH8%2B6OLy5L%2B71IO7iViZPenfXWVE3j93v%2Bvye4gawOvyaBf6B8WAzHqyjLpwS%2FFzp6ZIicX2TxBSI7S3CnEX9L%2BYpLqQpX6DnnBRMNKaUzPVX%2BEPc2w758HtbWZQfd4UwLaUU%2FF&X-Amz-Signature=44e14b2a9004d2c0ce568f34eb93756cae6a283f51427f5f15c30ecd66979d00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD7KHU2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTuXSwTHorF6%2FrznHHwWvv%2F4bwglNVeEFyaOBIc9KPQIgBh%2BvOhN%2BuuarezSJMQic%2F7%2BGZyeUu%2FSyx9MrdGsJb5Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC4vDliEa%2F7wib22tyrcA0Zq1X1UfdonSJnVerooSecvCErRMoH4XPgmwZFdMYZH9UTJDiVgdZ3nbEn8yxZ2cR%2BmjHoMW7uHjOpeWlrtk0Hhy6M%2F0WLG4yJALs3A3rhVbFQ5PYfZqJh0Jwxo6BHFFlXMF9dvaQ68ecd4hUMGPvRom3ZGF3poDpWy7uVzPwTjdwGdoXEWNy4FW3IO0E1SSYEbIE25zR79HJYRzZIJNedkRqg5VAvPbhjc0VhLbMI%2FzR5DrqcfQgBKkIjJ3KRV4rzkmoxWuWoaYRHB6Ys8xd9RJMvLFzhNasyYzBcVexZbqKsA8CtnIdV5eIOrr%2FMVmmJEylpvrhq2Vr%2BkNGHWbfBdNLFZVHvwo%2Ff4rVKhjpzMVpQtuIST78dicm4KJsdF9fnnBVr1RFK3q9QxadcQ5OEleouOLAXJ%2B%2BUFnS9zYEWTNkXafkC0ttukJMHvORKLH%2Bfp%2FcNRqWbMUJHXAe1ZNrhwGe5y5gOzgXyXUJJWyBBNVa8oRIUivB6%2B5sZCvkZGDDhkgdducKfHtxnfKn9CGJBOu4QnoDm2aFurIw044nnvla7JP3mLLj%2Fn1sVyBVNnX7L99Q3QPqH%2BdsjjmKMOhNHc9KCQWYB2hQfPYuq0ApCG%2B%2BxAM%2B5shxXz58lNMJH5icAGOqUBzJZFo5wrXbncrW01DwprQRec6b4N8sptriVmo3l6plihxV8JgIl3DoxHZJ13kCjTUsNX0cpfNBhvowuwz%2BjsHFH8%2B6OLy5L%2B71IO7iViZPenfXWVE3j93v%2Bvye4gawOvyaBf6B8WAzHqyjLpwS%2FFzp6ZIicX2TxBSI7S3CnEX9L%2BYpLqQpX6DnnBRMNKaUzPVX%2BEPc2w758HtbWZQfd4UwLaUU%2FF&X-Amz-Signature=f5f930e1d86c3a3f419403f30ddea0810e9b6f0c4832b5f0b71fa416aabb1b34&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD7KHU2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTuXSwTHorF6%2FrznHHwWvv%2F4bwglNVeEFyaOBIc9KPQIgBh%2BvOhN%2BuuarezSJMQic%2F7%2BGZyeUu%2FSyx9MrdGsJb5Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC4vDliEa%2F7wib22tyrcA0Zq1X1UfdonSJnVerooSecvCErRMoH4XPgmwZFdMYZH9UTJDiVgdZ3nbEn8yxZ2cR%2BmjHoMW7uHjOpeWlrtk0Hhy6M%2F0WLG4yJALs3A3rhVbFQ5PYfZqJh0Jwxo6BHFFlXMF9dvaQ68ecd4hUMGPvRom3ZGF3poDpWy7uVzPwTjdwGdoXEWNy4FW3IO0E1SSYEbIE25zR79HJYRzZIJNedkRqg5VAvPbhjc0VhLbMI%2FzR5DrqcfQgBKkIjJ3KRV4rzkmoxWuWoaYRHB6Ys8xd9RJMvLFzhNasyYzBcVexZbqKsA8CtnIdV5eIOrr%2FMVmmJEylpvrhq2Vr%2BkNGHWbfBdNLFZVHvwo%2Ff4rVKhjpzMVpQtuIST78dicm4KJsdF9fnnBVr1RFK3q9QxadcQ5OEleouOLAXJ%2B%2BUFnS9zYEWTNkXafkC0ttukJMHvORKLH%2Bfp%2FcNRqWbMUJHXAe1ZNrhwGe5y5gOzgXyXUJJWyBBNVa8oRIUivB6%2B5sZCvkZGDDhkgdducKfHtxnfKn9CGJBOu4QnoDm2aFurIw044nnvla7JP3mLLj%2Fn1sVyBVNnX7L99Q3QPqH%2BdsjjmKMOhNHc9KCQWYB2hQfPYuq0ApCG%2B%2BxAM%2B5shxXz58lNMJH5icAGOqUBzJZFo5wrXbncrW01DwprQRec6b4N8sptriVmo3l6plihxV8JgIl3DoxHZJ13kCjTUsNX0cpfNBhvowuwz%2BjsHFH8%2B6OLy5L%2B71IO7iViZPenfXWVE3j93v%2Bvye4gawOvyaBf6B8WAzHqyjLpwS%2FFzp6ZIicX2TxBSI7S3CnEX9L%2BYpLqQpX6DnnBRMNKaUzPVX%2BEPc2w758HtbWZQfd4UwLaUU%2FF&X-Amz-Signature=f685787961d324bfd591b1beb4c9625600e23492d133e59a32b107f34cdbdae8&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD7KHU2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTuXSwTHorF6%2FrznHHwWvv%2F4bwglNVeEFyaOBIc9KPQIgBh%2BvOhN%2BuuarezSJMQic%2F7%2BGZyeUu%2FSyx9MrdGsJb5Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC4vDliEa%2F7wib22tyrcA0Zq1X1UfdonSJnVerooSecvCErRMoH4XPgmwZFdMYZH9UTJDiVgdZ3nbEn8yxZ2cR%2BmjHoMW7uHjOpeWlrtk0Hhy6M%2F0WLG4yJALs3A3rhVbFQ5PYfZqJh0Jwxo6BHFFlXMF9dvaQ68ecd4hUMGPvRom3ZGF3poDpWy7uVzPwTjdwGdoXEWNy4FW3IO0E1SSYEbIE25zR79HJYRzZIJNedkRqg5VAvPbhjc0VhLbMI%2FzR5DrqcfQgBKkIjJ3KRV4rzkmoxWuWoaYRHB6Ys8xd9RJMvLFzhNasyYzBcVexZbqKsA8CtnIdV5eIOrr%2FMVmmJEylpvrhq2Vr%2BkNGHWbfBdNLFZVHvwo%2Ff4rVKhjpzMVpQtuIST78dicm4KJsdF9fnnBVr1RFK3q9QxadcQ5OEleouOLAXJ%2B%2BUFnS9zYEWTNkXafkC0ttukJMHvORKLH%2Bfp%2FcNRqWbMUJHXAe1ZNrhwGe5y5gOzgXyXUJJWyBBNVa8oRIUivB6%2B5sZCvkZGDDhkgdducKfHtxnfKn9CGJBOu4QnoDm2aFurIw044nnvla7JP3mLLj%2Fn1sVyBVNnX7L99Q3QPqH%2BdsjjmKMOhNHc9KCQWYB2hQfPYuq0ApCG%2B%2BxAM%2B5shxXz58lNMJH5icAGOqUBzJZFo5wrXbncrW01DwprQRec6b4N8sptriVmo3l6plihxV8JgIl3DoxHZJ13kCjTUsNX0cpfNBhvowuwz%2BjsHFH8%2B6OLy5L%2B71IO7iViZPenfXWVE3j93v%2Bvye4gawOvyaBf6B8WAzHqyjLpwS%2FFzp6ZIicX2TxBSI7S3CnEX9L%2BYpLqQpX6DnnBRMNKaUzPVX%2BEPc2w758HtbWZQfd4UwLaUU%2FF&X-Amz-Signature=8f37996fb157684ed0e8534cf5e8cd5231c1755bb3f666be5043c299d47ce6eb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD7KHU2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTuXSwTHorF6%2FrznHHwWvv%2F4bwglNVeEFyaOBIc9KPQIgBh%2BvOhN%2BuuarezSJMQic%2F7%2BGZyeUu%2FSyx9MrdGsJb5Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC4vDliEa%2F7wib22tyrcA0Zq1X1UfdonSJnVerooSecvCErRMoH4XPgmwZFdMYZH9UTJDiVgdZ3nbEn8yxZ2cR%2BmjHoMW7uHjOpeWlrtk0Hhy6M%2F0WLG4yJALs3A3rhVbFQ5PYfZqJh0Jwxo6BHFFlXMF9dvaQ68ecd4hUMGPvRom3ZGF3poDpWy7uVzPwTjdwGdoXEWNy4FW3IO0E1SSYEbIE25zR79HJYRzZIJNedkRqg5VAvPbhjc0VhLbMI%2FzR5DrqcfQgBKkIjJ3KRV4rzkmoxWuWoaYRHB6Ys8xd9RJMvLFzhNasyYzBcVexZbqKsA8CtnIdV5eIOrr%2FMVmmJEylpvrhq2Vr%2BkNGHWbfBdNLFZVHvwo%2Ff4rVKhjpzMVpQtuIST78dicm4KJsdF9fnnBVr1RFK3q9QxadcQ5OEleouOLAXJ%2B%2BUFnS9zYEWTNkXafkC0ttukJMHvORKLH%2Bfp%2FcNRqWbMUJHXAe1ZNrhwGe5y5gOzgXyXUJJWyBBNVa8oRIUivB6%2B5sZCvkZGDDhkgdducKfHtxnfKn9CGJBOu4QnoDm2aFurIw044nnvla7JP3mLLj%2Fn1sVyBVNnX7L99Q3QPqH%2BdsjjmKMOhNHc9KCQWYB2hQfPYuq0ApCG%2B%2BxAM%2B5shxXz58lNMJH5icAGOqUBzJZFo5wrXbncrW01DwprQRec6b4N8sptriVmo3l6plihxV8JgIl3DoxHZJ13kCjTUsNX0cpfNBhvowuwz%2BjsHFH8%2B6OLy5L%2B71IO7iViZPenfXWVE3j93v%2Bvye4gawOvyaBf6B8WAzHqyjLpwS%2FFzp6ZIicX2TxBSI7S3CnEX9L%2BYpLqQpX6DnnBRMNKaUzPVX%2BEPc2w758HtbWZQfd4UwLaUU%2FF&X-Amz-Signature=18952ace075dd4b50af23302a1c4a1455d96d00b028530099e5515de1ac53c5b&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD7KHU2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTuXSwTHorF6%2FrznHHwWvv%2F4bwglNVeEFyaOBIc9KPQIgBh%2BvOhN%2BuuarezSJMQic%2F7%2BGZyeUu%2FSyx9MrdGsJb5Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC4vDliEa%2F7wib22tyrcA0Zq1X1UfdonSJnVerooSecvCErRMoH4XPgmwZFdMYZH9UTJDiVgdZ3nbEn8yxZ2cR%2BmjHoMW7uHjOpeWlrtk0Hhy6M%2F0WLG4yJALs3A3rhVbFQ5PYfZqJh0Jwxo6BHFFlXMF9dvaQ68ecd4hUMGPvRom3ZGF3poDpWy7uVzPwTjdwGdoXEWNy4FW3IO0E1SSYEbIE25zR79HJYRzZIJNedkRqg5VAvPbhjc0VhLbMI%2FzR5DrqcfQgBKkIjJ3KRV4rzkmoxWuWoaYRHB6Ys8xd9RJMvLFzhNasyYzBcVexZbqKsA8CtnIdV5eIOrr%2FMVmmJEylpvrhq2Vr%2BkNGHWbfBdNLFZVHvwo%2Ff4rVKhjpzMVpQtuIST78dicm4KJsdF9fnnBVr1RFK3q9QxadcQ5OEleouOLAXJ%2B%2BUFnS9zYEWTNkXafkC0ttukJMHvORKLH%2Bfp%2FcNRqWbMUJHXAe1ZNrhwGe5y5gOzgXyXUJJWyBBNVa8oRIUivB6%2B5sZCvkZGDDhkgdducKfHtxnfKn9CGJBOu4QnoDm2aFurIw044nnvla7JP3mLLj%2Fn1sVyBVNnX7L99Q3QPqH%2BdsjjmKMOhNHc9KCQWYB2hQfPYuq0ApCG%2B%2BxAM%2B5shxXz58lNMJH5icAGOqUBzJZFo5wrXbncrW01DwprQRec6b4N8sptriVmo3l6plihxV8JgIl3DoxHZJ13kCjTUsNX0cpfNBhvowuwz%2BjsHFH8%2B6OLy5L%2B71IO7iViZPenfXWVE3j93v%2Bvye4gawOvyaBf6B8WAzHqyjLpwS%2FFzp6ZIicX2TxBSI7S3CnEX9L%2BYpLqQpX6DnnBRMNKaUzPVX%2BEPc2w758HtbWZQfd4UwLaUU%2FF&X-Amz-Signature=ac4a75649f34919963f4b5ac2a4ead10bd1d8c3ab32f73c55db76a4a4af5f356&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JD7KHU2%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T170750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDOTuXSwTHorF6%2FrznHHwWvv%2F4bwglNVeEFyaOBIc9KPQIgBh%2BvOhN%2BuuarezSJMQic%2F7%2BGZyeUu%2FSyx9MrdGsJb5Eq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDC4vDliEa%2F7wib22tyrcA0Zq1X1UfdonSJnVerooSecvCErRMoH4XPgmwZFdMYZH9UTJDiVgdZ3nbEn8yxZ2cR%2BmjHoMW7uHjOpeWlrtk0Hhy6M%2F0WLG4yJALs3A3rhVbFQ5PYfZqJh0Jwxo6BHFFlXMF9dvaQ68ecd4hUMGPvRom3ZGF3poDpWy7uVzPwTjdwGdoXEWNy4FW3IO0E1SSYEbIE25zR79HJYRzZIJNedkRqg5VAvPbhjc0VhLbMI%2FzR5DrqcfQgBKkIjJ3KRV4rzkmoxWuWoaYRHB6Ys8xd9RJMvLFzhNasyYzBcVexZbqKsA8CtnIdV5eIOrr%2FMVmmJEylpvrhq2Vr%2BkNGHWbfBdNLFZVHvwo%2Ff4rVKhjpzMVpQtuIST78dicm4KJsdF9fnnBVr1RFK3q9QxadcQ5OEleouOLAXJ%2B%2BUFnS9zYEWTNkXafkC0ttukJMHvORKLH%2Bfp%2FcNRqWbMUJHXAe1ZNrhwGe5y5gOzgXyXUJJWyBBNVa8oRIUivB6%2B5sZCvkZGDDhkgdducKfHtxnfKn9CGJBOu4QnoDm2aFurIw044nnvla7JP3mLLj%2Fn1sVyBVNnX7L99Q3QPqH%2BdsjjmKMOhNHc9KCQWYB2hQfPYuq0ApCG%2B%2BxAM%2B5shxXz58lNMJH5icAGOqUBzJZFo5wrXbncrW01DwprQRec6b4N8sptriVmo3l6plihxV8JgIl3DoxHZJ13kCjTUsNX0cpfNBhvowuwz%2BjsHFH8%2B6OLy5L%2B71IO7iViZPenfXWVE3j93v%2Bvye4gawOvyaBf6B8WAzHqyjLpwS%2FFzp6ZIicX2TxBSI7S3CnEX9L%2BYpLqQpX6DnnBRMNKaUzPVX%2BEPc2w758HtbWZQfd4UwLaUU%2FF&X-Amz-Signature=7cc4df83ac96a25879e7ac53e91f49583b5e46a674516129c9963a1eafe0bb39&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
