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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZTDAG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LhHdWiAASIkqIk12xZDvNUZlkp56eq3YmPofYfJo7gIgEe5HZ2FnlWcoMDvxhHGMvBhIXAGSnKbEgwJKyCRVWO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKqDEP5PDTojpfPHIircA9HTK%2FgVcp1lxSmVIbvegLBIUo0257J8%2BczEbxuUf6ezk6%2FxNpleU4w9eCKb82uISTHeaxG8uMokcdZwTIHr5%2FFRo5xveT8CKxr0Rn%2FWGLqxabKEaml%2BZiCmOm0nMYvlLnvb1esEEysrmkM55HA7JhTTmy8qaqJh9W7m28jA6YzLyDDOzpZVMLCfUAwwDXtptRnIA3h2WwiX88JVJNCew655vgdu9xZdTQh4yBvOI950fW8YqE2eMKFD%2FqruW9O6zhygvgShpAiEpucw9of6p0e4GdHDl6bgfd4uy4ZnhlJbNZ9EdF0kHKyf%2FDAuQFowq2JcaFkYZAjhf%2F%2FPhSM2LnXU4ylFnQbvXsOQvchuaMQoDzS%2FjFXwAraYMUP17pN%2BuqxrwDOpKEmkq9ufvnX8eeY9xP8fgWVzsc%2F%2F8rM9%2Fyfi8I1Ik8sNp7%2FHdw8Fe%2FQIREDTEmbn35GRowKUMiw4lsrDqLdrYw4JXZMBe1BGhgOM5VGYL%2BzcAq05JTSb%2FgbokOsu0QTxgLDD8J9PQhju5uKkd2udTjka80FYkoGgw7gzv9g8yYSHkovidaoyEkWJ4GpJV3ilXxUbMUDxAwKOJm69dL1eq0p31tg9nNQ6hRvxeb%2FOU82OzJBI6LAhMJuD7sAGOqUB%2B8IRId0ECP9RAWuljHhnaEOaR%2Fykmfpy8D%2BeB624WZLeQ6nF1JDZ1ei6SqIiEKvmosc5DGG36YlqzUTox5WbdcYq2fV8JJLD2Fs%2BCHgZiYsYgBhgL6HJZdo4vviEOehabItkVDzRqgjhWnWq5EOqPu4l3eO0oK0eTQM9Yk%2FJC6wTI4mCKBdmmegc2GW35HfHMvOLRNXCT0BoGmhSFoYVOHVtQkYN&X-Amz-Signature=0162858008cf617663a89de14409dfd44fc11443035e59f8ae441d82bae6fc9a&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZTDAG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LhHdWiAASIkqIk12xZDvNUZlkp56eq3YmPofYfJo7gIgEe5HZ2FnlWcoMDvxhHGMvBhIXAGSnKbEgwJKyCRVWO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKqDEP5PDTojpfPHIircA9HTK%2FgVcp1lxSmVIbvegLBIUo0257J8%2BczEbxuUf6ezk6%2FxNpleU4w9eCKb82uISTHeaxG8uMokcdZwTIHr5%2FFRo5xveT8CKxr0Rn%2FWGLqxabKEaml%2BZiCmOm0nMYvlLnvb1esEEysrmkM55HA7JhTTmy8qaqJh9W7m28jA6YzLyDDOzpZVMLCfUAwwDXtptRnIA3h2WwiX88JVJNCew655vgdu9xZdTQh4yBvOI950fW8YqE2eMKFD%2FqruW9O6zhygvgShpAiEpucw9of6p0e4GdHDl6bgfd4uy4ZnhlJbNZ9EdF0kHKyf%2FDAuQFowq2JcaFkYZAjhf%2F%2FPhSM2LnXU4ylFnQbvXsOQvchuaMQoDzS%2FjFXwAraYMUP17pN%2BuqxrwDOpKEmkq9ufvnX8eeY9xP8fgWVzsc%2F%2F8rM9%2Fyfi8I1Ik8sNp7%2FHdw8Fe%2FQIREDTEmbn35GRowKUMiw4lsrDqLdrYw4JXZMBe1BGhgOM5VGYL%2BzcAq05JTSb%2FgbokOsu0QTxgLDD8J9PQhju5uKkd2udTjka80FYkoGgw7gzv9g8yYSHkovidaoyEkWJ4GpJV3ilXxUbMUDxAwKOJm69dL1eq0p31tg9nNQ6hRvxeb%2FOU82OzJBI6LAhMJuD7sAGOqUB%2B8IRId0ECP9RAWuljHhnaEOaR%2Fykmfpy8D%2BeB624WZLeQ6nF1JDZ1ei6SqIiEKvmosc5DGG36YlqzUTox5WbdcYq2fV8JJLD2Fs%2BCHgZiYsYgBhgL6HJZdo4vviEOehabItkVDzRqgjhWnWq5EOqPu4l3eO0oK0eTQM9Yk%2FJC6wTI4mCKBdmmegc2GW35HfHMvOLRNXCT0BoGmhSFoYVOHVtQkYN&X-Amz-Signature=e8f15908e19b941470513ad0a221392fbdbc32ceb4af2c9a9e470ae354353083&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZTDAG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LhHdWiAASIkqIk12xZDvNUZlkp56eq3YmPofYfJo7gIgEe5HZ2FnlWcoMDvxhHGMvBhIXAGSnKbEgwJKyCRVWO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKqDEP5PDTojpfPHIircA9HTK%2FgVcp1lxSmVIbvegLBIUo0257J8%2BczEbxuUf6ezk6%2FxNpleU4w9eCKb82uISTHeaxG8uMokcdZwTIHr5%2FFRo5xveT8CKxr0Rn%2FWGLqxabKEaml%2BZiCmOm0nMYvlLnvb1esEEysrmkM55HA7JhTTmy8qaqJh9W7m28jA6YzLyDDOzpZVMLCfUAwwDXtptRnIA3h2WwiX88JVJNCew655vgdu9xZdTQh4yBvOI950fW8YqE2eMKFD%2FqruW9O6zhygvgShpAiEpucw9of6p0e4GdHDl6bgfd4uy4ZnhlJbNZ9EdF0kHKyf%2FDAuQFowq2JcaFkYZAjhf%2F%2FPhSM2LnXU4ylFnQbvXsOQvchuaMQoDzS%2FjFXwAraYMUP17pN%2BuqxrwDOpKEmkq9ufvnX8eeY9xP8fgWVzsc%2F%2F8rM9%2Fyfi8I1Ik8sNp7%2FHdw8Fe%2FQIREDTEmbn35GRowKUMiw4lsrDqLdrYw4JXZMBe1BGhgOM5VGYL%2BzcAq05JTSb%2FgbokOsu0QTxgLDD8J9PQhju5uKkd2udTjka80FYkoGgw7gzv9g8yYSHkovidaoyEkWJ4GpJV3ilXxUbMUDxAwKOJm69dL1eq0p31tg9nNQ6hRvxeb%2FOU82OzJBI6LAhMJuD7sAGOqUB%2B8IRId0ECP9RAWuljHhnaEOaR%2Fykmfpy8D%2BeB624WZLeQ6nF1JDZ1ei6SqIiEKvmosc5DGG36YlqzUTox5WbdcYq2fV8JJLD2Fs%2BCHgZiYsYgBhgL6HJZdo4vviEOehabItkVDzRqgjhWnWq5EOqPu4l3eO0oK0eTQM9Yk%2FJC6wTI4mCKBdmmegc2GW35HfHMvOLRNXCT0BoGmhSFoYVOHVtQkYN&X-Amz-Signature=0f214b35c7531296cfd5ed84cb024c052cf37ff8e8a62be12912fd59ac914e13&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZTDAG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LhHdWiAASIkqIk12xZDvNUZlkp56eq3YmPofYfJo7gIgEe5HZ2FnlWcoMDvxhHGMvBhIXAGSnKbEgwJKyCRVWO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKqDEP5PDTojpfPHIircA9HTK%2FgVcp1lxSmVIbvegLBIUo0257J8%2BczEbxuUf6ezk6%2FxNpleU4w9eCKb82uISTHeaxG8uMokcdZwTIHr5%2FFRo5xveT8CKxr0Rn%2FWGLqxabKEaml%2BZiCmOm0nMYvlLnvb1esEEysrmkM55HA7JhTTmy8qaqJh9W7m28jA6YzLyDDOzpZVMLCfUAwwDXtptRnIA3h2WwiX88JVJNCew655vgdu9xZdTQh4yBvOI950fW8YqE2eMKFD%2FqruW9O6zhygvgShpAiEpucw9of6p0e4GdHDl6bgfd4uy4ZnhlJbNZ9EdF0kHKyf%2FDAuQFowq2JcaFkYZAjhf%2F%2FPhSM2LnXU4ylFnQbvXsOQvchuaMQoDzS%2FjFXwAraYMUP17pN%2BuqxrwDOpKEmkq9ufvnX8eeY9xP8fgWVzsc%2F%2F8rM9%2Fyfi8I1Ik8sNp7%2FHdw8Fe%2FQIREDTEmbn35GRowKUMiw4lsrDqLdrYw4JXZMBe1BGhgOM5VGYL%2BzcAq05JTSb%2FgbokOsu0QTxgLDD8J9PQhju5uKkd2udTjka80FYkoGgw7gzv9g8yYSHkovidaoyEkWJ4GpJV3ilXxUbMUDxAwKOJm69dL1eq0p31tg9nNQ6hRvxeb%2FOU82OzJBI6LAhMJuD7sAGOqUB%2B8IRId0ECP9RAWuljHhnaEOaR%2Fykmfpy8D%2BeB624WZLeQ6nF1JDZ1ei6SqIiEKvmosc5DGG36YlqzUTox5WbdcYq2fV8JJLD2Fs%2BCHgZiYsYgBhgL6HJZdo4vviEOehabItkVDzRqgjhWnWq5EOqPu4l3eO0oK0eTQM9Yk%2FJC6wTI4mCKBdmmegc2GW35HfHMvOLRNXCT0BoGmhSFoYVOHVtQkYN&X-Amz-Signature=7fa5d0d813592250dc2a7ccf42d6b22b2946811ea2e105d6e2c8e561b573e840&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZTDAG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LhHdWiAASIkqIk12xZDvNUZlkp56eq3YmPofYfJo7gIgEe5HZ2FnlWcoMDvxhHGMvBhIXAGSnKbEgwJKyCRVWO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKqDEP5PDTojpfPHIircA9HTK%2FgVcp1lxSmVIbvegLBIUo0257J8%2BczEbxuUf6ezk6%2FxNpleU4w9eCKb82uISTHeaxG8uMokcdZwTIHr5%2FFRo5xveT8CKxr0Rn%2FWGLqxabKEaml%2BZiCmOm0nMYvlLnvb1esEEysrmkM55HA7JhTTmy8qaqJh9W7m28jA6YzLyDDOzpZVMLCfUAwwDXtptRnIA3h2WwiX88JVJNCew655vgdu9xZdTQh4yBvOI950fW8YqE2eMKFD%2FqruW9O6zhygvgShpAiEpucw9of6p0e4GdHDl6bgfd4uy4ZnhlJbNZ9EdF0kHKyf%2FDAuQFowq2JcaFkYZAjhf%2F%2FPhSM2LnXU4ylFnQbvXsOQvchuaMQoDzS%2FjFXwAraYMUP17pN%2BuqxrwDOpKEmkq9ufvnX8eeY9xP8fgWVzsc%2F%2F8rM9%2Fyfi8I1Ik8sNp7%2FHdw8Fe%2FQIREDTEmbn35GRowKUMiw4lsrDqLdrYw4JXZMBe1BGhgOM5VGYL%2BzcAq05JTSb%2FgbokOsu0QTxgLDD8J9PQhju5uKkd2udTjka80FYkoGgw7gzv9g8yYSHkovidaoyEkWJ4GpJV3ilXxUbMUDxAwKOJm69dL1eq0p31tg9nNQ6hRvxeb%2FOU82OzJBI6LAhMJuD7sAGOqUB%2B8IRId0ECP9RAWuljHhnaEOaR%2Fykmfpy8D%2BeB624WZLeQ6nF1JDZ1ei6SqIiEKvmosc5DGG36YlqzUTox5WbdcYq2fV8JJLD2Fs%2BCHgZiYsYgBhgL6HJZdo4vviEOehabItkVDzRqgjhWnWq5EOqPu4l3eO0oK0eTQM9Yk%2FJC6wTI4mCKBdmmegc2GW35HfHMvOLRNXCT0BoGmhSFoYVOHVtQkYN&X-Amz-Signature=3129c1f73738b11da2b7ac4f2d3f28f8b5811869b514b78c7eaad0e18498beee&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZTDAG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LhHdWiAASIkqIk12xZDvNUZlkp56eq3YmPofYfJo7gIgEe5HZ2FnlWcoMDvxhHGMvBhIXAGSnKbEgwJKyCRVWO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKqDEP5PDTojpfPHIircA9HTK%2FgVcp1lxSmVIbvegLBIUo0257J8%2BczEbxuUf6ezk6%2FxNpleU4w9eCKb82uISTHeaxG8uMokcdZwTIHr5%2FFRo5xveT8CKxr0Rn%2FWGLqxabKEaml%2BZiCmOm0nMYvlLnvb1esEEysrmkM55HA7JhTTmy8qaqJh9W7m28jA6YzLyDDOzpZVMLCfUAwwDXtptRnIA3h2WwiX88JVJNCew655vgdu9xZdTQh4yBvOI950fW8YqE2eMKFD%2FqruW9O6zhygvgShpAiEpucw9of6p0e4GdHDl6bgfd4uy4ZnhlJbNZ9EdF0kHKyf%2FDAuQFowq2JcaFkYZAjhf%2F%2FPhSM2LnXU4ylFnQbvXsOQvchuaMQoDzS%2FjFXwAraYMUP17pN%2BuqxrwDOpKEmkq9ufvnX8eeY9xP8fgWVzsc%2F%2F8rM9%2Fyfi8I1Ik8sNp7%2FHdw8Fe%2FQIREDTEmbn35GRowKUMiw4lsrDqLdrYw4JXZMBe1BGhgOM5VGYL%2BzcAq05JTSb%2FgbokOsu0QTxgLDD8J9PQhju5uKkd2udTjka80FYkoGgw7gzv9g8yYSHkovidaoyEkWJ4GpJV3ilXxUbMUDxAwKOJm69dL1eq0p31tg9nNQ6hRvxeb%2FOU82OzJBI6LAhMJuD7sAGOqUB%2B8IRId0ECP9RAWuljHhnaEOaR%2Fykmfpy8D%2BeB624WZLeQ6nF1JDZ1ei6SqIiEKvmosc5DGG36YlqzUTox5WbdcYq2fV8JJLD2Fs%2BCHgZiYsYgBhgL6HJZdo4vviEOehabItkVDzRqgjhWnWq5EOqPu4l3eO0oK0eTQM9Yk%2FJC6wTI4mCKBdmmegc2GW35HfHMvOLRNXCT0BoGmhSFoYVOHVtQkYN&X-Amz-Signature=be12938da4de3a70d7ea0bb132f4cee5ad23a673d25c7be59c730417bd6d1eb6&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3ZTDAG6%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T161055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2LhHdWiAASIkqIk12xZDvNUZlkp56eq3YmPofYfJo7gIgEe5HZ2FnlWcoMDvxhHGMvBhIXAGSnKbEgwJKyCRVWO0q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDKqDEP5PDTojpfPHIircA9HTK%2FgVcp1lxSmVIbvegLBIUo0257J8%2BczEbxuUf6ezk6%2FxNpleU4w9eCKb82uISTHeaxG8uMokcdZwTIHr5%2FFRo5xveT8CKxr0Rn%2FWGLqxabKEaml%2BZiCmOm0nMYvlLnvb1esEEysrmkM55HA7JhTTmy8qaqJh9W7m28jA6YzLyDDOzpZVMLCfUAwwDXtptRnIA3h2WwiX88JVJNCew655vgdu9xZdTQh4yBvOI950fW8YqE2eMKFD%2FqruW9O6zhygvgShpAiEpucw9of6p0e4GdHDl6bgfd4uy4ZnhlJbNZ9EdF0kHKyf%2FDAuQFowq2JcaFkYZAjhf%2F%2FPhSM2LnXU4ylFnQbvXsOQvchuaMQoDzS%2FjFXwAraYMUP17pN%2BuqxrwDOpKEmkq9ufvnX8eeY9xP8fgWVzsc%2F%2F8rM9%2Fyfi8I1Ik8sNp7%2FHdw8Fe%2FQIREDTEmbn35GRowKUMiw4lsrDqLdrYw4JXZMBe1BGhgOM5VGYL%2BzcAq05JTSb%2FgbokOsu0QTxgLDD8J9PQhju5uKkd2udTjka80FYkoGgw7gzv9g8yYSHkovidaoyEkWJ4GpJV3ilXxUbMUDxAwKOJm69dL1eq0p31tg9nNQ6hRvxeb%2FOU82OzJBI6LAhMJuD7sAGOqUB%2B8IRId0ECP9RAWuljHhnaEOaR%2Fykmfpy8D%2BeB624WZLeQ6nF1JDZ1ei6SqIiEKvmosc5DGG36YlqzUTox5WbdcYq2fV8JJLD2Fs%2BCHgZiYsYgBhgL6HJZdo4vviEOehabItkVDzRqgjhWnWq5EOqPu4l3eO0oK0eTQM9Yk%2FJC6wTI4mCKBdmmegc2GW35HfHMvOLRNXCT0BoGmhSFoYVOHVtQkYN&X-Amz-Signature=17d61594382e904ff30c05152618560dac74e7afce2411d2e71bbbbf204ce2da&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
