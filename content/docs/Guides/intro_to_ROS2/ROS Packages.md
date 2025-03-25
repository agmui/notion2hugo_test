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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRSBWXM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwprYP1UwWaOia7K0iWPdRxM6SnCrh5u9f7ofrOV6ZYAiEAxtFrOmdDydRU5NOxeS7yWuUtZH7vKqQQne0VMGlNQA0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKLuw508unVeyPuPCSrcA41U7BXHd3e6I4BbhPR%2F9%2FXP%2Bcvlkd2zFNpayjEntX4Te3ljBQy%2BmzlA9GV54slLCLOYUAqLisTZ%2B4U3xEzSknUps2s8%2FCbIyKDfYmP%2FpkghtPXQSlyxBWU35oULtC7cEdQH3H%2BH%2BA1NwTyQswDYgUuIiwHMNM8m56TKRSzkPKPlYk1V%2Fc%2FZvX30%2B6PBES7kpne%2B1GdU9Th3SpRMgwMX4eZ7lxvGlv9YVCIF7fRutKx0%2BNu28t7u4LUfEooK36n%2B1y2VrOdQRqQtgGTJrWo%2BU414%2Fnk1vE2ZxV9rwZtFKjPpCkg2lXIvjtc37GHMaDNoYXf8QJzchf2oQwW%2FIvyF9K5VDieMyxaOdOjWj9mCXbRI9JWIOY4KWnw8E4QyW%2Ft6DZ8AkByPR6uQmSq5MKcDp7EYFHghB8tfrwhkG1BzCX7nvVHBAWy4DMZ3YKioxVAm100i5miiOgBQIA8xN9NCPieI2xetF%2BqpcYgSBxWgMjQfUzEklohPgRBfAn%2Fx5rWZxMehrXN6jkNPZFStD6QCrq%2FdSoeJbGIxqMyXSmRZ66TGuSRGkayWbkfVaCkat0IlqJDDzWpl5KowBPFTNF2eg8JzeRULr9WJGmdw3mf1IvCEBmxGZ4kJre2r8nENMIjNib8GOqUB9G%2Bka0H9LgjrxOiBmz5x3vtaeykqCrKk0vpOheKo0L9YeOP5e1Znr77tcVm%2BrFFZNVYbbIjwIHAJrXBmMFf%2Ft7czB6mykaPgizD5b%2BEm%2FqqAmaJ146RbG%2F8F6mwu2HXlc1H5aTcaG%2BzRIquxFQXqejJftgqSmIBI1sTTSHjjyagZ%2B5wEUNlVaYpLREA5gqGdNv6OunoUrlV5Q8%2BeC9lAZ%2Fl%2BKpvZ&X-Amz-Signature=923b7187977dda10e3896db7836ebbe4fdb2e2975b85253da1f6ab681ab6fb8f&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRSBWXM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwprYP1UwWaOia7K0iWPdRxM6SnCrh5u9f7ofrOV6ZYAiEAxtFrOmdDydRU5NOxeS7yWuUtZH7vKqQQne0VMGlNQA0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKLuw508unVeyPuPCSrcA41U7BXHd3e6I4BbhPR%2F9%2FXP%2Bcvlkd2zFNpayjEntX4Te3ljBQy%2BmzlA9GV54slLCLOYUAqLisTZ%2B4U3xEzSknUps2s8%2FCbIyKDfYmP%2FpkghtPXQSlyxBWU35oULtC7cEdQH3H%2BH%2BA1NwTyQswDYgUuIiwHMNM8m56TKRSzkPKPlYk1V%2Fc%2FZvX30%2B6PBES7kpne%2B1GdU9Th3SpRMgwMX4eZ7lxvGlv9YVCIF7fRutKx0%2BNu28t7u4LUfEooK36n%2B1y2VrOdQRqQtgGTJrWo%2BU414%2Fnk1vE2ZxV9rwZtFKjPpCkg2lXIvjtc37GHMaDNoYXf8QJzchf2oQwW%2FIvyF9K5VDieMyxaOdOjWj9mCXbRI9JWIOY4KWnw8E4QyW%2Ft6DZ8AkByPR6uQmSq5MKcDp7EYFHghB8tfrwhkG1BzCX7nvVHBAWy4DMZ3YKioxVAm100i5miiOgBQIA8xN9NCPieI2xetF%2BqpcYgSBxWgMjQfUzEklohPgRBfAn%2Fx5rWZxMehrXN6jkNPZFStD6QCrq%2FdSoeJbGIxqMyXSmRZ66TGuSRGkayWbkfVaCkat0IlqJDDzWpl5KowBPFTNF2eg8JzeRULr9WJGmdw3mf1IvCEBmxGZ4kJre2r8nENMIjNib8GOqUB9G%2Bka0H9LgjrxOiBmz5x3vtaeykqCrKk0vpOheKo0L9YeOP5e1Znr77tcVm%2BrFFZNVYbbIjwIHAJrXBmMFf%2Ft7czB6mykaPgizD5b%2BEm%2FqqAmaJ146RbG%2F8F6mwu2HXlc1H5aTcaG%2BzRIquxFQXqejJftgqSmIBI1sTTSHjjyagZ%2B5wEUNlVaYpLREA5gqGdNv6OunoUrlV5Q8%2BeC9lAZ%2Fl%2BKpvZ&X-Amz-Signature=acb5b1b783b0ea50084116b5c72a55df76bb82091b9902dab0d843d0b36d9922&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRSBWXM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwprYP1UwWaOia7K0iWPdRxM6SnCrh5u9f7ofrOV6ZYAiEAxtFrOmdDydRU5NOxeS7yWuUtZH7vKqQQne0VMGlNQA0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKLuw508unVeyPuPCSrcA41U7BXHd3e6I4BbhPR%2F9%2FXP%2Bcvlkd2zFNpayjEntX4Te3ljBQy%2BmzlA9GV54slLCLOYUAqLisTZ%2B4U3xEzSknUps2s8%2FCbIyKDfYmP%2FpkghtPXQSlyxBWU35oULtC7cEdQH3H%2BH%2BA1NwTyQswDYgUuIiwHMNM8m56TKRSzkPKPlYk1V%2Fc%2FZvX30%2B6PBES7kpne%2B1GdU9Th3SpRMgwMX4eZ7lxvGlv9YVCIF7fRutKx0%2BNu28t7u4LUfEooK36n%2B1y2VrOdQRqQtgGTJrWo%2BU414%2Fnk1vE2ZxV9rwZtFKjPpCkg2lXIvjtc37GHMaDNoYXf8QJzchf2oQwW%2FIvyF9K5VDieMyxaOdOjWj9mCXbRI9JWIOY4KWnw8E4QyW%2Ft6DZ8AkByPR6uQmSq5MKcDp7EYFHghB8tfrwhkG1BzCX7nvVHBAWy4DMZ3YKioxVAm100i5miiOgBQIA8xN9NCPieI2xetF%2BqpcYgSBxWgMjQfUzEklohPgRBfAn%2Fx5rWZxMehrXN6jkNPZFStD6QCrq%2FdSoeJbGIxqMyXSmRZ66TGuSRGkayWbkfVaCkat0IlqJDDzWpl5KowBPFTNF2eg8JzeRULr9WJGmdw3mf1IvCEBmxGZ4kJre2r8nENMIjNib8GOqUB9G%2Bka0H9LgjrxOiBmz5x3vtaeykqCrKk0vpOheKo0L9YeOP5e1Znr77tcVm%2BrFFZNVYbbIjwIHAJrXBmMFf%2Ft7czB6mykaPgizD5b%2BEm%2FqqAmaJ146RbG%2F8F6mwu2HXlc1H5aTcaG%2BzRIquxFQXqejJftgqSmIBI1sTTSHjjyagZ%2B5wEUNlVaYpLREA5gqGdNv6OunoUrlV5Q8%2BeC9lAZ%2Fl%2BKpvZ&X-Amz-Signature=7cd0df82a169fd655e805c3831b3e9478ee25c9435cbf3c1e2e89a75b3262655&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRSBWXM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwprYP1UwWaOia7K0iWPdRxM6SnCrh5u9f7ofrOV6ZYAiEAxtFrOmdDydRU5NOxeS7yWuUtZH7vKqQQne0VMGlNQA0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKLuw508unVeyPuPCSrcA41U7BXHd3e6I4BbhPR%2F9%2FXP%2Bcvlkd2zFNpayjEntX4Te3ljBQy%2BmzlA9GV54slLCLOYUAqLisTZ%2B4U3xEzSknUps2s8%2FCbIyKDfYmP%2FpkghtPXQSlyxBWU35oULtC7cEdQH3H%2BH%2BA1NwTyQswDYgUuIiwHMNM8m56TKRSzkPKPlYk1V%2Fc%2FZvX30%2B6PBES7kpne%2B1GdU9Th3SpRMgwMX4eZ7lxvGlv9YVCIF7fRutKx0%2BNu28t7u4LUfEooK36n%2B1y2VrOdQRqQtgGTJrWo%2BU414%2Fnk1vE2ZxV9rwZtFKjPpCkg2lXIvjtc37GHMaDNoYXf8QJzchf2oQwW%2FIvyF9K5VDieMyxaOdOjWj9mCXbRI9JWIOY4KWnw8E4QyW%2Ft6DZ8AkByPR6uQmSq5MKcDp7EYFHghB8tfrwhkG1BzCX7nvVHBAWy4DMZ3YKioxVAm100i5miiOgBQIA8xN9NCPieI2xetF%2BqpcYgSBxWgMjQfUzEklohPgRBfAn%2Fx5rWZxMehrXN6jkNPZFStD6QCrq%2FdSoeJbGIxqMyXSmRZ66TGuSRGkayWbkfVaCkat0IlqJDDzWpl5KowBPFTNF2eg8JzeRULr9WJGmdw3mf1IvCEBmxGZ4kJre2r8nENMIjNib8GOqUB9G%2Bka0H9LgjrxOiBmz5x3vtaeykqCrKk0vpOheKo0L9YeOP5e1Znr77tcVm%2BrFFZNVYbbIjwIHAJrXBmMFf%2Ft7czB6mykaPgizD5b%2BEm%2FqqAmaJ146RbG%2F8F6mwu2HXlc1H5aTcaG%2BzRIquxFQXqejJftgqSmIBI1sTTSHjjyagZ%2B5wEUNlVaYpLREA5gqGdNv6OunoUrlV5Q8%2BeC9lAZ%2Fl%2BKpvZ&X-Amz-Signature=28bff26371e7c7694fd5691731e9ac78e55152b51986ba7f3fc91437ca522270&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRSBWXM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwprYP1UwWaOia7K0iWPdRxM6SnCrh5u9f7ofrOV6ZYAiEAxtFrOmdDydRU5NOxeS7yWuUtZH7vKqQQne0VMGlNQA0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKLuw508unVeyPuPCSrcA41U7BXHd3e6I4BbhPR%2F9%2FXP%2Bcvlkd2zFNpayjEntX4Te3ljBQy%2BmzlA9GV54slLCLOYUAqLisTZ%2B4U3xEzSknUps2s8%2FCbIyKDfYmP%2FpkghtPXQSlyxBWU35oULtC7cEdQH3H%2BH%2BA1NwTyQswDYgUuIiwHMNM8m56TKRSzkPKPlYk1V%2Fc%2FZvX30%2B6PBES7kpne%2B1GdU9Th3SpRMgwMX4eZ7lxvGlv9YVCIF7fRutKx0%2BNu28t7u4LUfEooK36n%2B1y2VrOdQRqQtgGTJrWo%2BU414%2Fnk1vE2ZxV9rwZtFKjPpCkg2lXIvjtc37GHMaDNoYXf8QJzchf2oQwW%2FIvyF9K5VDieMyxaOdOjWj9mCXbRI9JWIOY4KWnw8E4QyW%2Ft6DZ8AkByPR6uQmSq5MKcDp7EYFHghB8tfrwhkG1BzCX7nvVHBAWy4DMZ3YKioxVAm100i5miiOgBQIA8xN9NCPieI2xetF%2BqpcYgSBxWgMjQfUzEklohPgRBfAn%2Fx5rWZxMehrXN6jkNPZFStD6QCrq%2FdSoeJbGIxqMyXSmRZ66TGuSRGkayWbkfVaCkat0IlqJDDzWpl5KowBPFTNF2eg8JzeRULr9WJGmdw3mf1IvCEBmxGZ4kJre2r8nENMIjNib8GOqUB9G%2Bka0H9LgjrxOiBmz5x3vtaeykqCrKk0vpOheKo0L9YeOP5e1Znr77tcVm%2BrFFZNVYbbIjwIHAJrXBmMFf%2Ft7czB6mykaPgizD5b%2BEm%2FqqAmaJ146RbG%2F8F6mwu2HXlc1H5aTcaG%2BzRIquxFQXqejJftgqSmIBI1sTTSHjjyagZ%2B5wEUNlVaYpLREA5gqGdNv6OunoUrlV5Q8%2BeC9lAZ%2Fl%2BKpvZ&X-Amz-Signature=96f819b5f2e3c83ed0e3a4eb3500c12e5b97c41e03ea6d96ae2809b14cfbc9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRSBWXM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwprYP1UwWaOia7K0iWPdRxM6SnCrh5u9f7ofrOV6ZYAiEAxtFrOmdDydRU5NOxeS7yWuUtZH7vKqQQne0VMGlNQA0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKLuw508unVeyPuPCSrcA41U7BXHd3e6I4BbhPR%2F9%2FXP%2Bcvlkd2zFNpayjEntX4Te3ljBQy%2BmzlA9GV54slLCLOYUAqLisTZ%2B4U3xEzSknUps2s8%2FCbIyKDfYmP%2FpkghtPXQSlyxBWU35oULtC7cEdQH3H%2BH%2BA1NwTyQswDYgUuIiwHMNM8m56TKRSzkPKPlYk1V%2Fc%2FZvX30%2B6PBES7kpne%2B1GdU9Th3SpRMgwMX4eZ7lxvGlv9YVCIF7fRutKx0%2BNu28t7u4LUfEooK36n%2B1y2VrOdQRqQtgGTJrWo%2BU414%2Fnk1vE2ZxV9rwZtFKjPpCkg2lXIvjtc37GHMaDNoYXf8QJzchf2oQwW%2FIvyF9K5VDieMyxaOdOjWj9mCXbRI9JWIOY4KWnw8E4QyW%2Ft6DZ8AkByPR6uQmSq5MKcDp7EYFHghB8tfrwhkG1BzCX7nvVHBAWy4DMZ3YKioxVAm100i5miiOgBQIA8xN9NCPieI2xetF%2BqpcYgSBxWgMjQfUzEklohPgRBfAn%2Fx5rWZxMehrXN6jkNPZFStD6QCrq%2FdSoeJbGIxqMyXSmRZ66TGuSRGkayWbkfVaCkat0IlqJDDzWpl5KowBPFTNF2eg8JzeRULr9WJGmdw3mf1IvCEBmxGZ4kJre2r8nENMIjNib8GOqUB9G%2Bka0H9LgjrxOiBmz5x3vtaeykqCrKk0vpOheKo0L9YeOP5e1Znr77tcVm%2BrFFZNVYbbIjwIHAJrXBmMFf%2Ft7czB6mykaPgizD5b%2BEm%2FqqAmaJ146RbG%2F8F6mwu2HXlc1H5aTcaG%2BzRIquxFQXqejJftgqSmIBI1sTTSHjjyagZ%2B5wEUNlVaYpLREA5gqGdNv6OunoUrlV5Q8%2BeC9lAZ%2Fl%2BKpvZ&X-Amz-Signature=50fd43c4004fc4abc006b3b14d34fae5ebbf66e5debc4f59de23fc5cbb1bf42f&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRSBWXM%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T090859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwprYP1UwWaOia7K0iWPdRxM6SnCrh5u9f7ofrOV6ZYAiEAxtFrOmdDydRU5NOxeS7yWuUtZH7vKqQQne0VMGlNQA0q%2FwMIERAAGgw2Mzc0MjMxODM4MDUiDKLuw508unVeyPuPCSrcA41U7BXHd3e6I4BbhPR%2F9%2FXP%2Bcvlkd2zFNpayjEntX4Te3ljBQy%2BmzlA9GV54slLCLOYUAqLisTZ%2B4U3xEzSknUps2s8%2FCbIyKDfYmP%2FpkghtPXQSlyxBWU35oULtC7cEdQH3H%2BH%2BA1NwTyQswDYgUuIiwHMNM8m56TKRSzkPKPlYk1V%2Fc%2FZvX30%2B6PBES7kpne%2B1GdU9Th3SpRMgwMX4eZ7lxvGlv9YVCIF7fRutKx0%2BNu28t7u4LUfEooK36n%2B1y2VrOdQRqQtgGTJrWo%2BU414%2Fnk1vE2ZxV9rwZtFKjPpCkg2lXIvjtc37GHMaDNoYXf8QJzchf2oQwW%2FIvyF9K5VDieMyxaOdOjWj9mCXbRI9JWIOY4KWnw8E4QyW%2Ft6DZ8AkByPR6uQmSq5MKcDp7EYFHghB8tfrwhkG1BzCX7nvVHBAWy4DMZ3YKioxVAm100i5miiOgBQIA8xN9NCPieI2xetF%2BqpcYgSBxWgMjQfUzEklohPgRBfAn%2Fx5rWZxMehrXN6jkNPZFStD6QCrq%2FdSoeJbGIxqMyXSmRZ66TGuSRGkayWbkfVaCkat0IlqJDDzWpl5KowBPFTNF2eg8JzeRULr9WJGmdw3mf1IvCEBmxGZ4kJre2r8nENMIjNib8GOqUB9G%2Bka0H9LgjrxOiBmz5x3vtaeykqCrKk0vpOheKo0L9YeOP5e1Znr77tcVm%2BrFFZNVYbbIjwIHAJrXBmMFf%2Ft7czB6mykaPgizD5b%2BEm%2FqqAmaJ146RbG%2F8F6mwu2HXlc1H5aTcaG%2BzRIquxFQXqejJftgqSmIBI1sTTSHjjyagZ%2B5wEUNlVaYpLREA5gqGdNv6OunoUrlV5Q8%2BeC9lAZ%2Fl%2BKpvZ&X-Amz-Signature=fc0301265a38dafff6dbaa0069333646527c46e56962dabcf20de3560323b4ae&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
