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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=4ad0d935d9337207aa6d974e134055572f364a913fb69b79135d230a377cd97e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=bfa3972993b7fc1fc0da5e2d7a3a4123f5ecda3a19e92cb671fdfa47db1cb7a4&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=0c826c0dc8af2cdef7048488a481feff2e98edeb93bc482f04f5add2ecc5c1d4&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=85b1e34cea9c9ff1cd348b4a3293a601930450975ab47a42dad9c7c406af3f62&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=8a6e543082b617a34e7f4c03d6cf0f3d30f150341349814210c75f74f138d16c&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=be7205140cb69ad9bc4b36ce9401eb509b39204d732946fd883a295026f198c9&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7FY5TZ6%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T150136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQDeaHB3vQ9NZAYOMXcSYWfrosoaJctcKprWeGoOYrBUFgIgOQ867UwPgAK8laZahTC85dQ2V0hM58BpcbzpKCwLLdUqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFU9lpOB6N4%2Fd8zIBSrcA2PmWz4TitqMsP5%2FDptfOQDBcgZnz6Yu9N39yGGxFCblLfh71C%2FawUx54WLnAzU%2FMfSCiDNwad4eKvwfzYqi5EzcFcT84DiysC7kGJmDq5EKXePVpp4nXEvY58mtKYEVWhkdpZhb0CVbHhpP7d269Ibh%2F5pTStLGCHDpkGygoHZBK3nED84gPXp8JRQPwlvD1o1oYBL226TQzsC8FapL9x3huVh8CTRnJftL49hSuJrJpBQ1tqdJ%2B%2BpZ6oLvQHHQnTyz8BjjZaXbAd6OAWwzPV7sbNV3xM33Py4a%2BsDf9Etc60WdbTPKFZALkAkzsrTjkUtkqaliMJ2Z9cFYpPmdFoGvH6mSPFgpw1BsH9mDkaM6e5HUNg62Hmj82L8wH84d1eWxGUkqsQ7PSF%2BEznAo5b06iuOmLFUh5gJ%2Bp0JmV8QFJ%2Bu44v5zXjQ8ZX2ittHgee4OGKr0GNyuf5WFRoeapLbieDG%2BG%2BIdzgINW2Jk9p6BtrvR7Hkx8v4junrEfegSV8bHrWES9Wti3K2kTMZkEg%2Fk3ERnQl4KF6LjS3CrqC1WC3x89I5EyDmdpv7FgXYyQLQgXtxOwAqsUWcBofSi%2B3g63uLrqoZd4LpAWTH2OEmEKJjauIZv9A84IFsrML%2BVjL4GOqUBklbc7X0av2PbAy0Z%2BGeRb5eS%2FmaL%2FDWY%2BpESHO6IMYj8OctX2X%2FcG%2BPnDYvZjeCdetZ8cOiuffBx17WnsxFeP5Nbc5hEp0ah2%2BkKgbZLVWrJLS3i8uIdfGsu7Jc0uyjh1BNcp%2Bp0by%2Baj85HQ8FMbV9WpMkNznWlNPj1xTlpx%2FGrKSwdYxyWetfsAQhw%2FIWjTAw6TuXbwUMvhpQjZR8Ve2um0gUi&X-Amz-Signature=55b49e50c29407b6a43f47191e483db3b84340fdbe32c0a8c522bf7336966c6b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
