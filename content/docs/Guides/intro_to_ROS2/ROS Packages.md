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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGPTHYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnS1Zs3eCKBctvqHxU7c3v8ptl1T9KxzR4n4frlmLQGAiAfExBf30YLKM5uOUakl98NDbN7yFx2uwgkZkkFX5KYWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMH%2FrYV3D%2FF%2Fkzfe9oKtwDHtlaGePEq0Vg5RbkNxtT0Eu%2B1jlXkxvlxP%2BLc80IzvmDrCcSuKmgfJTw%2Bp8I2MAQdj4NX4MDgjhKr8jqJkzLIIJDAphWiA2CChCiX0cqwL4L7qReGIiEwNZ3Yb4wmOUrU8Pab%2BYTz414BtfvOmvmfkSBgkqqr0KuveeHMBMoaJcHj28BkQZaaVnYLwiEC5t6%2FGG77eX7Wd%2FCwvz5n9WZL1C5Nuq6OWXqyqCZzlZPIz%2B09iRiycnuu8VBEoQiNg0ogtTvkP4mzK4%2FRPHtZmL5NJl2A1GVU8wEfc0hwjQr%2B%2BXArg3pOyrCFKw2jKnpM8KU%2Fgk0j2pwcGzPOEAL2EW8BgV%2B4YzGlJ%2FXV02rGQEVWaBVIKUGUBTzfMzvbF3xDBJNsW1Bi9RKN8KcPPg5Z%2Fo4q7BjN%2BhmRk6y%2BKCYGAr9kTkgAhcmMtjMGp77nqeWKdQJsM0yNQ9GaC97TWavkWfnDyW%2FzzrcBk3ajNm5ec5t4JC%2FzJyeBW4RSn0yug4fEWnDtwSYot1Fk71AFlfsERca4j32cWDdc4ZXAdz%2Fen6YXdIueDxRW0MSMum6cWcFAolAyGmKot6BEi1LuiZ5KpyVYTjtcOcsRkXlT%2BbLeR%2BkeXzXAqpgRfG9tm%2Bpm4Qw4ZeMvwY6pgEm%2FutbORkh%2B65f4hal8nYl06jG%2BDB9aIeVRqoZlZNQv5md0uNfJr5kRVDBD77Ie0LbQWk3rS9v2SCZgWF651mzSDcQb8ye2ZLKi0JbVdoyT64lOPkZQfLNmTw5aJ1vY%2BLonuFdAQG4%2FzJcJ5gfrBDgo36l%2F%2Fi5nZG418kjVTHH%2FNpPQCFLdCat%2Bu595pyEPMcQx7NWG2uiGqIvDH%2BEaFqjUQOcaXn5&X-Amz-Signature=825dee6fb9cd507f06eb827371f4a8556b5176c92f52a594c194d7e7765aa316&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGPTHYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnS1Zs3eCKBctvqHxU7c3v8ptl1T9KxzR4n4frlmLQGAiAfExBf30YLKM5uOUakl98NDbN7yFx2uwgkZkkFX5KYWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMH%2FrYV3D%2FF%2Fkzfe9oKtwDHtlaGePEq0Vg5RbkNxtT0Eu%2B1jlXkxvlxP%2BLc80IzvmDrCcSuKmgfJTw%2Bp8I2MAQdj4NX4MDgjhKr8jqJkzLIIJDAphWiA2CChCiX0cqwL4L7qReGIiEwNZ3Yb4wmOUrU8Pab%2BYTz414BtfvOmvmfkSBgkqqr0KuveeHMBMoaJcHj28BkQZaaVnYLwiEC5t6%2FGG77eX7Wd%2FCwvz5n9WZL1C5Nuq6OWXqyqCZzlZPIz%2B09iRiycnuu8VBEoQiNg0ogtTvkP4mzK4%2FRPHtZmL5NJl2A1GVU8wEfc0hwjQr%2B%2BXArg3pOyrCFKw2jKnpM8KU%2Fgk0j2pwcGzPOEAL2EW8BgV%2B4YzGlJ%2FXV02rGQEVWaBVIKUGUBTzfMzvbF3xDBJNsW1Bi9RKN8KcPPg5Z%2Fo4q7BjN%2BhmRk6y%2BKCYGAr9kTkgAhcmMtjMGp77nqeWKdQJsM0yNQ9GaC97TWavkWfnDyW%2FzzrcBk3ajNm5ec5t4JC%2FzJyeBW4RSn0yug4fEWnDtwSYot1Fk71AFlfsERca4j32cWDdc4ZXAdz%2Fen6YXdIueDxRW0MSMum6cWcFAolAyGmKot6BEi1LuiZ5KpyVYTjtcOcsRkXlT%2BbLeR%2BkeXzXAqpgRfG9tm%2Bpm4Qw4ZeMvwY6pgEm%2FutbORkh%2B65f4hal8nYl06jG%2BDB9aIeVRqoZlZNQv5md0uNfJr5kRVDBD77Ie0LbQWk3rS9v2SCZgWF651mzSDcQb8ye2ZLKi0JbVdoyT64lOPkZQfLNmTw5aJ1vY%2BLonuFdAQG4%2FzJcJ5gfrBDgo36l%2F%2Fi5nZG418kjVTHH%2FNpPQCFLdCat%2Bu595pyEPMcQx7NWG2uiGqIvDH%2BEaFqjUQOcaXn5&X-Amz-Signature=380f41fb618374ef58568a9076bf51bb65ad5f55aac8113ca824c4c65baf9c11&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGPTHYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnS1Zs3eCKBctvqHxU7c3v8ptl1T9KxzR4n4frlmLQGAiAfExBf30YLKM5uOUakl98NDbN7yFx2uwgkZkkFX5KYWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMH%2FrYV3D%2FF%2Fkzfe9oKtwDHtlaGePEq0Vg5RbkNxtT0Eu%2B1jlXkxvlxP%2BLc80IzvmDrCcSuKmgfJTw%2Bp8I2MAQdj4NX4MDgjhKr8jqJkzLIIJDAphWiA2CChCiX0cqwL4L7qReGIiEwNZ3Yb4wmOUrU8Pab%2BYTz414BtfvOmvmfkSBgkqqr0KuveeHMBMoaJcHj28BkQZaaVnYLwiEC5t6%2FGG77eX7Wd%2FCwvz5n9WZL1C5Nuq6OWXqyqCZzlZPIz%2B09iRiycnuu8VBEoQiNg0ogtTvkP4mzK4%2FRPHtZmL5NJl2A1GVU8wEfc0hwjQr%2B%2BXArg3pOyrCFKw2jKnpM8KU%2Fgk0j2pwcGzPOEAL2EW8BgV%2B4YzGlJ%2FXV02rGQEVWaBVIKUGUBTzfMzvbF3xDBJNsW1Bi9RKN8KcPPg5Z%2Fo4q7BjN%2BhmRk6y%2BKCYGAr9kTkgAhcmMtjMGp77nqeWKdQJsM0yNQ9GaC97TWavkWfnDyW%2FzzrcBk3ajNm5ec5t4JC%2FzJyeBW4RSn0yug4fEWnDtwSYot1Fk71AFlfsERca4j32cWDdc4ZXAdz%2Fen6YXdIueDxRW0MSMum6cWcFAolAyGmKot6BEi1LuiZ5KpyVYTjtcOcsRkXlT%2BbLeR%2BkeXzXAqpgRfG9tm%2Bpm4Qw4ZeMvwY6pgEm%2FutbORkh%2B65f4hal8nYl06jG%2BDB9aIeVRqoZlZNQv5md0uNfJr5kRVDBD77Ie0LbQWk3rS9v2SCZgWF651mzSDcQb8ye2ZLKi0JbVdoyT64lOPkZQfLNmTw5aJ1vY%2BLonuFdAQG4%2FzJcJ5gfrBDgo36l%2F%2Fi5nZG418kjVTHH%2FNpPQCFLdCat%2Bu595pyEPMcQx7NWG2uiGqIvDH%2BEaFqjUQOcaXn5&X-Amz-Signature=117ed409b31b98a9acc20b63dec72664d4dc03fa027eff2f2f49369d124f2cb0&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGPTHYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnS1Zs3eCKBctvqHxU7c3v8ptl1T9KxzR4n4frlmLQGAiAfExBf30YLKM5uOUakl98NDbN7yFx2uwgkZkkFX5KYWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMH%2FrYV3D%2FF%2Fkzfe9oKtwDHtlaGePEq0Vg5RbkNxtT0Eu%2B1jlXkxvlxP%2BLc80IzvmDrCcSuKmgfJTw%2Bp8I2MAQdj4NX4MDgjhKr8jqJkzLIIJDAphWiA2CChCiX0cqwL4L7qReGIiEwNZ3Yb4wmOUrU8Pab%2BYTz414BtfvOmvmfkSBgkqqr0KuveeHMBMoaJcHj28BkQZaaVnYLwiEC5t6%2FGG77eX7Wd%2FCwvz5n9WZL1C5Nuq6OWXqyqCZzlZPIz%2B09iRiycnuu8VBEoQiNg0ogtTvkP4mzK4%2FRPHtZmL5NJl2A1GVU8wEfc0hwjQr%2B%2BXArg3pOyrCFKw2jKnpM8KU%2Fgk0j2pwcGzPOEAL2EW8BgV%2B4YzGlJ%2FXV02rGQEVWaBVIKUGUBTzfMzvbF3xDBJNsW1Bi9RKN8KcPPg5Z%2Fo4q7BjN%2BhmRk6y%2BKCYGAr9kTkgAhcmMtjMGp77nqeWKdQJsM0yNQ9GaC97TWavkWfnDyW%2FzzrcBk3ajNm5ec5t4JC%2FzJyeBW4RSn0yug4fEWnDtwSYot1Fk71AFlfsERca4j32cWDdc4ZXAdz%2Fen6YXdIueDxRW0MSMum6cWcFAolAyGmKot6BEi1LuiZ5KpyVYTjtcOcsRkXlT%2BbLeR%2BkeXzXAqpgRfG9tm%2Bpm4Qw4ZeMvwY6pgEm%2FutbORkh%2B65f4hal8nYl06jG%2BDB9aIeVRqoZlZNQv5md0uNfJr5kRVDBD77Ie0LbQWk3rS9v2SCZgWF651mzSDcQb8ye2ZLKi0JbVdoyT64lOPkZQfLNmTw5aJ1vY%2BLonuFdAQG4%2FzJcJ5gfrBDgo36l%2F%2Fi5nZG418kjVTHH%2FNpPQCFLdCat%2Bu595pyEPMcQx7NWG2uiGqIvDH%2BEaFqjUQOcaXn5&X-Amz-Signature=263bd2f239fabcc1970f44f1cf7737d44f0973ce91b643b2e2c7b31dc44199b0&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGPTHYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnS1Zs3eCKBctvqHxU7c3v8ptl1T9KxzR4n4frlmLQGAiAfExBf30YLKM5uOUakl98NDbN7yFx2uwgkZkkFX5KYWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMH%2FrYV3D%2FF%2Fkzfe9oKtwDHtlaGePEq0Vg5RbkNxtT0Eu%2B1jlXkxvlxP%2BLc80IzvmDrCcSuKmgfJTw%2Bp8I2MAQdj4NX4MDgjhKr8jqJkzLIIJDAphWiA2CChCiX0cqwL4L7qReGIiEwNZ3Yb4wmOUrU8Pab%2BYTz414BtfvOmvmfkSBgkqqr0KuveeHMBMoaJcHj28BkQZaaVnYLwiEC5t6%2FGG77eX7Wd%2FCwvz5n9WZL1C5Nuq6OWXqyqCZzlZPIz%2B09iRiycnuu8VBEoQiNg0ogtTvkP4mzK4%2FRPHtZmL5NJl2A1GVU8wEfc0hwjQr%2B%2BXArg3pOyrCFKw2jKnpM8KU%2Fgk0j2pwcGzPOEAL2EW8BgV%2B4YzGlJ%2FXV02rGQEVWaBVIKUGUBTzfMzvbF3xDBJNsW1Bi9RKN8KcPPg5Z%2Fo4q7BjN%2BhmRk6y%2BKCYGAr9kTkgAhcmMtjMGp77nqeWKdQJsM0yNQ9GaC97TWavkWfnDyW%2FzzrcBk3ajNm5ec5t4JC%2FzJyeBW4RSn0yug4fEWnDtwSYot1Fk71AFlfsERca4j32cWDdc4ZXAdz%2Fen6YXdIueDxRW0MSMum6cWcFAolAyGmKot6BEi1LuiZ5KpyVYTjtcOcsRkXlT%2BbLeR%2BkeXzXAqpgRfG9tm%2Bpm4Qw4ZeMvwY6pgEm%2FutbORkh%2B65f4hal8nYl06jG%2BDB9aIeVRqoZlZNQv5md0uNfJr5kRVDBD77Ie0LbQWk3rS9v2SCZgWF651mzSDcQb8ye2ZLKi0JbVdoyT64lOPkZQfLNmTw5aJ1vY%2BLonuFdAQG4%2FzJcJ5gfrBDgo36l%2F%2Fi5nZG418kjVTHH%2FNpPQCFLdCat%2Bu595pyEPMcQx7NWG2uiGqIvDH%2BEaFqjUQOcaXn5&X-Amz-Signature=a54e76af25d5ed474536455e01b998d9ff73e267f6f1c68132c2646a4e164926&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGPTHYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnS1Zs3eCKBctvqHxU7c3v8ptl1T9KxzR4n4frlmLQGAiAfExBf30YLKM5uOUakl98NDbN7yFx2uwgkZkkFX5KYWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMH%2FrYV3D%2FF%2Fkzfe9oKtwDHtlaGePEq0Vg5RbkNxtT0Eu%2B1jlXkxvlxP%2BLc80IzvmDrCcSuKmgfJTw%2Bp8I2MAQdj4NX4MDgjhKr8jqJkzLIIJDAphWiA2CChCiX0cqwL4L7qReGIiEwNZ3Yb4wmOUrU8Pab%2BYTz414BtfvOmvmfkSBgkqqr0KuveeHMBMoaJcHj28BkQZaaVnYLwiEC5t6%2FGG77eX7Wd%2FCwvz5n9WZL1C5Nuq6OWXqyqCZzlZPIz%2B09iRiycnuu8VBEoQiNg0ogtTvkP4mzK4%2FRPHtZmL5NJl2A1GVU8wEfc0hwjQr%2B%2BXArg3pOyrCFKw2jKnpM8KU%2Fgk0j2pwcGzPOEAL2EW8BgV%2B4YzGlJ%2FXV02rGQEVWaBVIKUGUBTzfMzvbF3xDBJNsW1Bi9RKN8KcPPg5Z%2Fo4q7BjN%2BhmRk6y%2BKCYGAr9kTkgAhcmMtjMGp77nqeWKdQJsM0yNQ9GaC97TWavkWfnDyW%2FzzrcBk3ajNm5ec5t4JC%2FzJyeBW4RSn0yug4fEWnDtwSYot1Fk71AFlfsERca4j32cWDdc4ZXAdz%2Fen6YXdIueDxRW0MSMum6cWcFAolAyGmKot6BEi1LuiZ5KpyVYTjtcOcsRkXlT%2BbLeR%2BkeXzXAqpgRfG9tm%2Bpm4Qw4ZeMvwY6pgEm%2FutbORkh%2B65f4hal8nYl06jG%2BDB9aIeVRqoZlZNQv5md0uNfJr5kRVDBD77Ie0LbQWk3rS9v2SCZgWF651mzSDcQb8ye2ZLKi0JbVdoyT64lOPkZQfLNmTw5aJ1vY%2BLonuFdAQG4%2FzJcJ5gfrBDgo36l%2F%2Fi5nZG418kjVTHH%2FNpPQCFLdCat%2Bu595pyEPMcQx7NWG2uiGqIvDH%2BEaFqjUQOcaXn5&X-Amz-Signature=f753386ecb886152c795be5e67c034ad1a7ae9880a304b723ff3de43c0a6f90d&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMGPTHYG%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T200909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHnS1Zs3eCKBctvqHxU7c3v8ptl1T9KxzR4n4frlmLQGAiAfExBf30YLKM5uOUakl98NDbN7yFx2uwgkZkkFX5KYWSr%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMH%2FrYV3D%2FF%2Fkzfe9oKtwDHtlaGePEq0Vg5RbkNxtT0Eu%2B1jlXkxvlxP%2BLc80IzvmDrCcSuKmgfJTw%2Bp8I2MAQdj4NX4MDgjhKr8jqJkzLIIJDAphWiA2CChCiX0cqwL4L7qReGIiEwNZ3Yb4wmOUrU8Pab%2BYTz414BtfvOmvmfkSBgkqqr0KuveeHMBMoaJcHj28BkQZaaVnYLwiEC5t6%2FGG77eX7Wd%2FCwvz5n9WZL1C5Nuq6OWXqyqCZzlZPIz%2B09iRiycnuu8VBEoQiNg0ogtTvkP4mzK4%2FRPHtZmL5NJl2A1GVU8wEfc0hwjQr%2B%2BXArg3pOyrCFKw2jKnpM8KU%2Fgk0j2pwcGzPOEAL2EW8BgV%2B4YzGlJ%2FXV02rGQEVWaBVIKUGUBTzfMzvbF3xDBJNsW1Bi9RKN8KcPPg5Z%2Fo4q7BjN%2BhmRk6y%2BKCYGAr9kTkgAhcmMtjMGp77nqeWKdQJsM0yNQ9GaC97TWavkWfnDyW%2FzzrcBk3ajNm5ec5t4JC%2FzJyeBW4RSn0yug4fEWnDtwSYot1Fk71AFlfsERca4j32cWDdc4ZXAdz%2Fen6YXdIueDxRW0MSMum6cWcFAolAyGmKot6BEi1LuiZ5KpyVYTjtcOcsRkXlT%2BbLeR%2BkeXzXAqpgRfG9tm%2Bpm4Qw4ZeMvwY6pgEm%2FutbORkh%2B65f4hal8nYl06jG%2BDB9aIeVRqoZlZNQv5md0uNfJr5kRVDBD77Ie0LbQWk3rS9v2SCZgWF651mzSDcQb8ye2ZLKi0JbVdoyT64lOPkZQfLNmTw5aJ1vY%2BLonuFdAQG4%2FzJcJ5gfrBDgo36l%2F%2Fi5nZG418kjVTHH%2FNpPQCFLdCat%2Bu595pyEPMcQx7NWG2uiGqIvDH%2BEaFqjUQOcaXn5&X-Amz-Signature=89a60ad78428eeb0e8ba5edd9a395be7f5a99e6abdfae9da59af0c01c4a9c1ca&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
