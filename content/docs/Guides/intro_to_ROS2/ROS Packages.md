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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=109be73d5ab6728e7074ecda6ea42e11d5f3eb7111524fc496457a488461d9a5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=893a2784271771040345387922b4d9d4fdf9310331df55a52199543b0b956c97&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=8fa8794008a066bf192789b02817501c06b0326e9e01ada7f80d21eea0b10f34&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=5b048e9d1fa14891efa0ef180d96e897ecad7bede63d91b96e1831aa11aa70ce&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=f1fd2860b476667e54d10243907a4c0b6f72f358adf82c0c4dcbb7849f3a6b6f&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=32e6b7298174fe1c48c86b77f83805fad46f1d173a3fdf023150f81b35bf377d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ICU4OIG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6hGVmtynxjNbYC3EpVh18PLX3%2F8TMIwdzTC3%2FdPBKNgIgfUd%2BbNSIbTG8ns0qBEzhE1KUGKrH9N19FB6VyQnMxE4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDItyYpLp%2FXvAmrOBzSrcA4X8Mt2GZnHUA3w4ALaWBhtn40TYY6oUZ1CQ7oiLLalg8Fi1kBY0JqSX8Pe2KjowakAbnWXh2gtZ2RKnKmj67AeMvjEH7pqsn4YI88ulFXg91KtqMYK9RV5lmvk6B%2FNTEKtvHBqBiepmJUcv7BsJasjmhBJJjI3kyou3Bcm9SRJSAS6lq1tWW8nTCMo4AE%2Fem18JaxBfm6soaibPYnMkIRunIgzYDUtNNCHpnF2618oWBOyZ4aYD%2FjHAOPICaZMR2w8vIreoWTOdFv%2F%2FOGMEn%2Ft9OevCs1CIiw4nvNAaXuPmoKHL9GDLOPfmsCoH6fY5%2BVAo0XfLAiz0UU%2FFCGAbMyGQcIRqfDdb7iDtrqkwLzKSKfbpJa%2Bqj%2Bw79DKlddugbF2vjhp%2FaT%2BLd5zeTGGIuzSi%2FjiIfOvN0EDvqbjt3PTGa2YwPEQTHOtIs%2B2Pl8rUmBRgWjkVZ7SHM1SjrF5n%2FKR3nn4m1XxI%2BvDOjw%2B5JneJW%2BvKcgwJ%2FRrCCJxyRjwcML%2BkPgLW8Nn3p19n8e%2BSEpBixjhZ2lQf3J7EUgEpq%2BUtXbvqRWav2dVXL7wA3ToE1mjMtS3xBgjrnK3vpJR8z6LzSYQIazZVCGdrfH2Fp2LHeu84N6D%2BgPu29pQtMNjGgMAGOqUBRj0RGcwmqdUj48CVbmE70x4SgaLMkwXLbibhbfbn%2FmWderHGc7vFmlLLeHgZ7Tp8Gip58S9LKNt2p2SLz2gX73RXnTgHYjq6v14RXWUMbXh8t8CfGknfkOiFjMWT%2FFjU0yPbtPkxAHYEZumBN86gpAHiaCxgBCTl%2BWh4lgGe2H5RSxIUwsiSzvpata8lPl4d8E%2B5eNSsCLnhf8aD3%2FngcRBVSA7l&X-Amz-Signature=23b962e9396eff6a6431b43b5f0e89eb225a18da4ce9633274bf51ed44b9408a&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
