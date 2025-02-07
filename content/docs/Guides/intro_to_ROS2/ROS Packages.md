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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGVAV5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDOvp80pxn1qsDRjQaRlJEZiODhijd1MAkY7SGy7PpJBAiA2948Fm%2BnJLXspkMD66wqjlLUE9bKUhC5Jo0e9WogG7Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMI16a8WQCawuAaXTXKtwDx2KgzxSSPm3%2B4pJ1weksL9xPTJsuUs9NiBSWQQZAEEGp%2FnhfdfxCtHquRgWgHgIw1kz8y5s0YceUSLlyOBT%2BZQW7FXtBo3ehdinTA4Yi%2BuQYjaa%2BIDsb09ELqvKkqC%2FHKM6636CKPb%2BEpYErtnjC%2B8ks6feit3xDmIYjEp%2BhrZzzAGoa0CPD0%2FlPe2Mu4TOcNwI5qUQlSmM5RESrATXnTPAR4N4QtEMrGUOh4JcVJYrz6%2F59d%2Fyi2ahO4CUj3IwtrjhsA224OZ7oxNFy7A2IVFXVcq%2FS8XeQZlvHfzlFXRaeaTvwDJAxJJRAA7j%2BSE7bp4LMWvs5bRKFEabFIM%2B%2FVvEi01BYGk%2BiTVtpxqeqOPEm9q1XcfjGeYBjpcgQtNyf2EolXrDy3h6382IORMPXyd0%2BaVIyhvEghjexa3TPDyGvq8ynBMitCfJyf0Qf5g4v6DGZpp1VQy4ZqK5KT0pP3B1FZMiz7xoHNCZdAjT3VzbjAwQKT8wcNAVaEf%2Bhs3O2EA2KMsF1lIduURLkl8m7sH8HIDlBQ2miDhiub3u%2FUiLEuctpUguA5gpPDaFVYvPJCHD3JTfO297dEUMiES%2FF16vHPMGrhBcmRjZZ3ex8nPkdsxOiWfPmOaQuqIAwzYyYvQY6pgFiJ5LZJY8uaIk8vGmc2VWllgNMMGqEU%2BxKkqQpr8ALIL6RpXhTUaRax0npUnAG24fi6CnOWhif8jtu%2BGjBEAyC4LJ%2F5TUrxQEZVH7nrUv8vj83rnfMwGsbFxim6m23%2F%2FXgXitvT%2BWkde4Y3sWjQLcYZFTWxJoW%2BVJSCbwFry%2B1p6raewVDuzozyD9aFLu%2BsnvX3cILtYALYIQ5GTCN2lT0MZEIYWv1&X-Amz-Signature=fa483fb1e91e059e3d38f3ac3d5a76550b1f05079708fb75f447a4fd52db9590&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGVAV5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDOvp80pxn1qsDRjQaRlJEZiODhijd1MAkY7SGy7PpJBAiA2948Fm%2BnJLXspkMD66wqjlLUE9bKUhC5Jo0e9WogG7Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMI16a8WQCawuAaXTXKtwDx2KgzxSSPm3%2B4pJ1weksL9xPTJsuUs9NiBSWQQZAEEGp%2FnhfdfxCtHquRgWgHgIw1kz8y5s0YceUSLlyOBT%2BZQW7FXtBo3ehdinTA4Yi%2BuQYjaa%2BIDsb09ELqvKkqC%2FHKM6636CKPb%2BEpYErtnjC%2B8ks6feit3xDmIYjEp%2BhrZzzAGoa0CPD0%2FlPe2Mu4TOcNwI5qUQlSmM5RESrATXnTPAR4N4QtEMrGUOh4JcVJYrz6%2F59d%2Fyi2ahO4CUj3IwtrjhsA224OZ7oxNFy7A2IVFXVcq%2FS8XeQZlvHfzlFXRaeaTvwDJAxJJRAA7j%2BSE7bp4LMWvs5bRKFEabFIM%2B%2FVvEi01BYGk%2BiTVtpxqeqOPEm9q1XcfjGeYBjpcgQtNyf2EolXrDy3h6382IORMPXyd0%2BaVIyhvEghjexa3TPDyGvq8ynBMitCfJyf0Qf5g4v6DGZpp1VQy4ZqK5KT0pP3B1FZMiz7xoHNCZdAjT3VzbjAwQKT8wcNAVaEf%2Bhs3O2EA2KMsF1lIduURLkl8m7sH8HIDlBQ2miDhiub3u%2FUiLEuctpUguA5gpPDaFVYvPJCHD3JTfO297dEUMiES%2FF16vHPMGrhBcmRjZZ3ex8nPkdsxOiWfPmOaQuqIAwzYyYvQY6pgFiJ5LZJY8uaIk8vGmc2VWllgNMMGqEU%2BxKkqQpr8ALIL6RpXhTUaRax0npUnAG24fi6CnOWhif8jtu%2BGjBEAyC4LJ%2F5TUrxQEZVH7nrUv8vj83rnfMwGsbFxim6m23%2F%2FXgXitvT%2BWkde4Y3sWjQLcYZFTWxJoW%2BVJSCbwFry%2B1p6raewVDuzozyD9aFLu%2BsnvX3cILtYALYIQ5GTCN2lT0MZEIYWv1&X-Amz-Signature=3f22349be468eef4ea1c129609ecc527589349f95121bd14be35cb5fc8222544&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGVAV5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDOvp80pxn1qsDRjQaRlJEZiODhijd1MAkY7SGy7PpJBAiA2948Fm%2BnJLXspkMD66wqjlLUE9bKUhC5Jo0e9WogG7Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMI16a8WQCawuAaXTXKtwDx2KgzxSSPm3%2B4pJ1weksL9xPTJsuUs9NiBSWQQZAEEGp%2FnhfdfxCtHquRgWgHgIw1kz8y5s0YceUSLlyOBT%2BZQW7FXtBo3ehdinTA4Yi%2BuQYjaa%2BIDsb09ELqvKkqC%2FHKM6636CKPb%2BEpYErtnjC%2B8ks6feit3xDmIYjEp%2BhrZzzAGoa0CPD0%2FlPe2Mu4TOcNwI5qUQlSmM5RESrATXnTPAR4N4QtEMrGUOh4JcVJYrz6%2F59d%2Fyi2ahO4CUj3IwtrjhsA224OZ7oxNFy7A2IVFXVcq%2FS8XeQZlvHfzlFXRaeaTvwDJAxJJRAA7j%2BSE7bp4LMWvs5bRKFEabFIM%2B%2FVvEi01BYGk%2BiTVtpxqeqOPEm9q1XcfjGeYBjpcgQtNyf2EolXrDy3h6382IORMPXyd0%2BaVIyhvEghjexa3TPDyGvq8ynBMitCfJyf0Qf5g4v6DGZpp1VQy4ZqK5KT0pP3B1FZMiz7xoHNCZdAjT3VzbjAwQKT8wcNAVaEf%2Bhs3O2EA2KMsF1lIduURLkl8m7sH8HIDlBQ2miDhiub3u%2FUiLEuctpUguA5gpPDaFVYvPJCHD3JTfO297dEUMiES%2FF16vHPMGrhBcmRjZZ3ex8nPkdsxOiWfPmOaQuqIAwzYyYvQY6pgFiJ5LZJY8uaIk8vGmc2VWllgNMMGqEU%2BxKkqQpr8ALIL6RpXhTUaRax0npUnAG24fi6CnOWhif8jtu%2BGjBEAyC4LJ%2F5TUrxQEZVH7nrUv8vj83rnfMwGsbFxim6m23%2F%2FXgXitvT%2BWkde4Y3sWjQLcYZFTWxJoW%2BVJSCbwFry%2B1p6raewVDuzozyD9aFLu%2BsnvX3cILtYALYIQ5GTCN2lT0MZEIYWv1&X-Amz-Signature=99fe4494711e1265699e120a378416d257a2a2080f0e265f436765ec6b896443&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGVAV5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDOvp80pxn1qsDRjQaRlJEZiODhijd1MAkY7SGy7PpJBAiA2948Fm%2BnJLXspkMD66wqjlLUE9bKUhC5Jo0e9WogG7Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMI16a8WQCawuAaXTXKtwDx2KgzxSSPm3%2B4pJ1weksL9xPTJsuUs9NiBSWQQZAEEGp%2FnhfdfxCtHquRgWgHgIw1kz8y5s0YceUSLlyOBT%2BZQW7FXtBo3ehdinTA4Yi%2BuQYjaa%2BIDsb09ELqvKkqC%2FHKM6636CKPb%2BEpYErtnjC%2B8ks6feit3xDmIYjEp%2BhrZzzAGoa0CPD0%2FlPe2Mu4TOcNwI5qUQlSmM5RESrATXnTPAR4N4QtEMrGUOh4JcVJYrz6%2F59d%2Fyi2ahO4CUj3IwtrjhsA224OZ7oxNFy7A2IVFXVcq%2FS8XeQZlvHfzlFXRaeaTvwDJAxJJRAA7j%2BSE7bp4LMWvs5bRKFEabFIM%2B%2FVvEi01BYGk%2BiTVtpxqeqOPEm9q1XcfjGeYBjpcgQtNyf2EolXrDy3h6382IORMPXyd0%2BaVIyhvEghjexa3TPDyGvq8ynBMitCfJyf0Qf5g4v6DGZpp1VQy4ZqK5KT0pP3B1FZMiz7xoHNCZdAjT3VzbjAwQKT8wcNAVaEf%2Bhs3O2EA2KMsF1lIduURLkl8m7sH8HIDlBQ2miDhiub3u%2FUiLEuctpUguA5gpPDaFVYvPJCHD3JTfO297dEUMiES%2FF16vHPMGrhBcmRjZZ3ex8nPkdsxOiWfPmOaQuqIAwzYyYvQY6pgFiJ5LZJY8uaIk8vGmc2VWllgNMMGqEU%2BxKkqQpr8ALIL6RpXhTUaRax0npUnAG24fi6CnOWhif8jtu%2BGjBEAyC4LJ%2F5TUrxQEZVH7nrUv8vj83rnfMwGsbFxim6m23%2F%2FXgXitvT%2BWkde4Y3sWjQLcYZFTWxJoW%2BVJSCbwFry%2B1p6raewVDuzozyD9aFLu%2BsnvX3cILtYALYIQ5GTCN2lT0MZEIYWv1&X-Amz-Signature=8468373e12ba0c31b46ff30bd8b506fb80ed888ab50c3b8829deeacb394179a3&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGVAV5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDOvp80pxn1qsDRjQaRlJEZiODhijd1MAkY7SGy7PpJBAiA2948Fm%2BnJLXspkMD66wqjlLUE9bKUhC5Jo0e9WogG7Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMI16a8WQCawuAaXTXKtwDx2KgzxSSPm3%2B4pJ1weksL9xPTJsuUs9NiBSWQQZAEEGp%2FnhfdfxCtHquRgWgHgIw1kz8y5s0YceUSLlyOBT%2BZQW7FXtBo3ehdinTA4Yi%2BuQYjaa%2BIDsb09ELqvKkqC%2FHKM6636CKPb%2BEpYErtnjC%2B8ks6feit3xDmIYjEp%2BhrZzzAGoa0CPD0%2FlPe2Mu4TOcNwI5qUQlSmM5RESrATXnTPAR4N4QtEMrGUOh4JcVJYrz6%2F59d%2Fyi2ahO4CUj3IwtrjhsA224OZ7oxNFy7A2IVFXVcq%2FS8XeQZlvHfzlFXRaeaTvwDJAxJJRAA7j%2BSE7bp4LMWvs5bRKFEabFIM%2B%2FVvEi01BYGk%2BiTVtpxqeqOPEm9q1XcfjGeYBjpcgQtNyf2EolXrDy3h6382IORMPXyd0%2BaVIyhvEghjexa3TPDyGvq8ynBMitCfJyf0Qf5g4v6DGZpp1VQy4ZqK5KT0pP3B1FZMiz7xoHNCZdAjT3VzbjAwQKT8wcNAVaEf%2Bhs3O2EA2KMsF1lIduURLkl8m7sH8HIDlBQ2miDhiub3u%2FUiLEuctpUguA5gpPDaFVYvPJCHD3JTfO297dEUMiES%2FF16vHPMGrhBcmRjZZ3ex8nPkdsxOiWfPmOaQuqIAwzYyYvQY6pgFiJ5LZJY8uaIk8vGmc2VWllgNMMGqEU%2BxKkqQpr8ALIL6RpXhTUaRax0npUnAG24fi6CnOWhif8jtu%2BGjBEAyC4LJ%2F5TUrxQEZVH7nrUv8vj83rnfMwGsbFxim6m23%2F%2FXgXitvT%2BWkde4Y3sWjQLcYZFTWxJoW%2BVJSCbwFry%2B1p6raewVDuzozyD9aFLu%2BsnvX3cILtYALYIQ5GTCN2lT0MZEIYWv1&X-Amz-Signature=3224b5a7616898cc7445e3011072321b072363a49fd624958615dc97e186c528&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGVAV5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDOvp80pxn1qsDRjQaRlJEZiODhijd1MAkY7SGy7PpJBAiA2948Fm%2BnJLXspkMD66wqjlLUE9bKUhC5Jo0e9WogG7Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMI16a8WQCawuAaXTXKtwDx2KgzxSSPm3%2B4pJ1weksL9xPTJsuUs9NiBSWQQZAEEGp%2FnhfdfxCtHquRgWgHgIw1kz8y5s0YceUSLlyOBT%2BZQW7FXtBo3ehdinTA4Yi%2BuQYjaa%2BIDsb09ELqvKkqC%2FHKM6636CKPb%2BEpYErtnjC%2B8ks6feit3xDmIYjEp%2BhrZzzAGoa0CPD0%2FlPe2Mu4TOcNwI5qUQlSmM5RESrATXnTPAR4N4QtEMrGUOh4JcVJYrz6%2F59d%2Fyi2ahO4CUj3IwtrjhsA224OZ7oxNFy7A2IVFXVcq%2FS8XeQZlvHfzlFXRaeaTvwDJAxJJRAA7j%2BSE7bp4LMWvs5bRKFEabFIM%2B%2FVvEi01BYGk%2BiTVtpxqeqOPEm9q1XcfjGeYBjpcgQtNyf2EolXrDy3h6382IORMPXyd0%2BaVIyhvEghjexa3TPDyGvq8ynBMitCfJyf0Qf5g4v6DGZpp1VQy4ZqK5KT0pP3B1FZMiz7xoHNCZdAjT3VzbjAwQKT8wcNAVaEf%2Bhs3O2EA2KMsF1lIduURLkl8m7sH8HIDlBQ2miDhiub3u%2FUiLEuctpUguA5gpPDaFVYvPJCHD3JTfO297dEUMiES%2FF16vHPMGrhBcmRjZZ3ex8nPkdsxOiWfPmOaQuqIAwzYyYvQY6pgFiJ5LZJY8uaIk8vGmc2VWllgNMMGqEU%2BxKkqQpr8ALIL6RpXhTUaRax0npUnAG24fi6CnOWhif8jtu%2BGjBEAyC4LJ%2F5TUrxQEZVH7nrUv8vj83rnfMwGsbFxim6m23%2F%2FXgXitvT%2BWkde4Y3sWjQLcYZFTWxJoW%2BVJSCbwFry%2B1p6raewVDuzozyD9aFLu%2BsnvX3cILtYALYIQ5GTCN2lT0MZEIYWv1&X-Amz-Signature=3354f33a81bb45ebca1aaff64f8822560ed254be0fa575ddb53c87804ef58e96&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIGVAV5O%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T131447Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIDOvp80pxn1qsDRjQaRlJEZiODhijd1MAkY7SGy7PpJBAiA2948Fm%2BnJLXspkMD66wqjlLUE9bKUhC5Jo0e9WogG7Cr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMI16a8WQCawuAaXTXKtwDx2KgzxSSPm3%2B4pJ1weksL9xPTJsuUs9NiBSWQQZAEEGp%2FnhfdfxCtHquRgWgHgIw1kz8y5s0YceUSLlyOBT%2BZQW7FXtBo3ehdinTA4Yi%2BuQYjaa%2BIDsb09ELqvKkqC%2FHKM6636CKPb%2BEpYErtnjC%2B8ks6feit3xDmIYjEp%2BhrZzzAGoa0CPD0%2FlPe2Mu4TOcNwI5qUQlSmM5RESrATXnTPAR4N4QtEMrGUOh4JcVJYrz6%2F59d%2Fyi2ahO4CUj3IwtrjhsA224OZ7oxNFy7A2IVFXVcq%2FS8XeQZlvHfzlFXRaeaTvwDJAxJJRAA7j%2BSE7bp4LMWvs5bRKFEabFIM%2B%2FVvEi01BYGk%2BiTVtpxqeqOPEm9q1XcfjGeYBjpcgQtNyf2EolXrDy3h6382IORMPXyd0%2BaVIyhvEghjexa3TPDyGvq8ynBMitCfJyf0Qf5g4v6DGZpp1VQy4ZqK5KT0pP3B1FZMiz7xoHNCZdAjT3VzbjAwQKT8wcNAVaEf%2Bhs3O2EA2KMsF1lIduURLkl8m7sH8HIDlBQ2miDhiub3u%2FUiLEuctpUguA5gpPDaFVYvPJCHD3JTfO297dEUMiES%2FF16vHPMGrhBcmRjZZ3ex8nPkdsxOiWfPmOaQuqIAwzYyYvQY6pgFiJ5LZJY8uaIk8vGmc2VWllgNMMGqEU%2BxKkqQpr8ALIL6RpXhTUaRax0npUnAG24fi6CnOWhif8jtu%2BGjBEAyC4LJ%2F5TUrxQEZVH7nrUv8vj83rnfMwGsbFxim6m23%2F%2FXgXitvT%2BWkde4Y3sWjQLcYZFTWxJoW%2BVJSCbwFry%2B1p6raewVDuzozyD9aFLu%2BsnvX3cILtYALYIQ5GTCN2lT0MZEIYWv1&X-Amz-Signature=146e11701e42c94a4fdca48d0d096a85bd58dcf3dc95d41a035f752e3d93faf7&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
