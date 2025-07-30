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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQVRZXD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXw5d5LOBPP8be3S4%2BJ%2B9%2F9EZbd694bwvL69eBXZ1YwIgRJeC3OC%2F%2B0G9Xovywbh5ScmEEBkW61keExcQar4p9I8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LpQ9nsFPA5QVfXCrcA9CMdc0bdv%2FBClXkTGxz3DU%2Bbt6tVM9jMBVN38swefSy%2F0sjJTIaWX67JQYzRSGKusgGh08MK%2Fi7XGTkhzBR7qvt36tTM7J5%2FVw%2FRWdfgrwflebephicom3py7F9HrOZZNTz8qRY0j4dDhvPAyxT8JnXev3eezJIjWzBqv46I28f2im6NWSOPv9MwFl2FFYN8%2FO94gusftjf5KvNJyRAT35ZrXru6EegAhV0KAsZeQwH5EeFDMSnhnqs3ySItYu3Ta5gbft07NO0oyilqrKBI00XluJ3wrm4oD2pmIqNHh0gTAgDglq2CecWaojfr8TTNOriXAB8doQeWodlJdoYJQQr%2F2mnuwE%2FXJTB4rx4zecg0DEPAXHJF3RFzatEziBwuAmwysPsxekTf%2B7avJ8woTpA5X7ea7QUYbzWL%2FhEjrlGLwdEdMJ8O%2BpcG%2F1fWBVBm7m4ZVOstQsnEYovVkRXRDM4%2BeDdONJxEMXvyzYtN5q6TuhadXltuFAlR3h34LnxN%2BQpkE%2BnRzqzQzq%2BTLyKPTjYeAyHOSNJ2NO8JGzNysLrS1HBUH0F2crUZdkx6c4jSsxkgNE09HeB0SgL0lMXaBfgrOO%2FmQJYa7TRp%2BzIaGkxuBQFC2GxKjUIk%2F3pMOSHqcQGOqUBeFldZhwwW1f6pntCgOdmbsvBj4uoTKuCeT9pq5JU6vYYHkq13MLd037lkcWNR0j9Zhthxa4x1eNYQXhzVRDby6ID%2BGsZFWMZts7Zvci4lL%2Fum%2BxL%2B9k51wHnqYpP2a1nyAE0O8kyk7I%2BdhEvnpPDPp0jp4hlFoA9xMSe9undDsUinVJRfWBR5sJYAPcNqaA8oaTtFvQARfxQBmiTGpEEQBxZDhOj&X-Amz-Signature=a7f521c91085cb952371b6c630c1c16a46a5cdb42eb130358131b8b98c4cd4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQVRZXD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXw5d5LOBPP8be3S4%2BJ%2B9%2F9EZbd694bwvL69eBXZ1YwIgRJeC3OC%2F%2B0G9Xovywbh5ScmEEBkW61keExcQar4p9I8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LpQ9nsFPA5QVfXCrcA9CMdc0bdv%2FBClXkTGxz3DU%2Bbt6tVM9jMBVN38swefSy%2F0sjJTIaWX67JQYzRSGKusgGh08MK%2Fi7XGTkhzBR7qvt36tTM7J5%2FVw%2FRWdfgrwflebephicom3py7F9HrOZZNTz8qRY0j4dDhvPAyxT8JnXev3eezJIjWzBqv46I28f2im6NWSOPv9MwFl2FFYN8%2FO94gusftjf5KvNJyRAT35ZrXru6EegAhV0KAsZeQwH5EeFDMSnhnqs3ySItYu3Ta5gbft07NO0oyilqrKBI00XluJ3wrm4oD2pmIqNHh0gTAgDglq2CecWaojfr8TTNOriXAB8doQeWodlJdoYJQQr%2F2mnuwE%2FXJTB4rx4zecg0DEPAXHJF3RFzatEziBwuAmwysPsxekTf%2B7avJ8woTpA5X7ea7QUYbzWL%2FhEjrlGLwdEdMJ8O%2BpcG%2F1fWBVBm7m4ZVOstQsnEYovVkRXRDM4%2BeDdONJxEMXvyzYtN5q6TuhadXltuFAlR3h34LnxN%2BQpkE%2BnRzqzQzq%2BTLyKPTjYeAyHOSNJ2NO8JGzNysLrS1HBUH0F2crUZdkx6c4jSsxkgNE09HeB0SgL0lMXaBfgrOO%2FmQJYa7TRp%2BzIaGkxuBQFC2GxKjUIk%2F3pMOSHqcQGOqUBeFldZhwwW1f6pntCgOdmbsvBj4uoTKuCeT9pq5JU6vYYHkq13MLd037lkcWNR0j9Zhthxa4x1eNYQXhzVRDby6ID%2BGsZFWMZts7Zvci4lL%2Fum%2BxL%2B9k51wHnqYpP2a1nyAE0O8kyk7I%2BdhEvnpPDPp0jp4hlFoA9xMSe9undDsUinVJRfWBR5sJYAPcNqaA8oaTtFvQARfxQBmiTGpEEQBxZDhOj&X-Amz-Signature=bd7b3bb1e9e866dc958015d48778e89247dbe8fc7da7a60dd0f8757d5c5dd91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQVRZXD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXw5d5LOBPP8be3S4%2BJ%2B9%2F9EZbd694bwvL69eBXZ1YwIgRJeC3OC%2F%2B0G9Xovywbh5ScmEEBkW61keExcQar4p9I8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LpQ9nsFPA5QVfXCrcA9CMdc0bdv%2FBClXkTGxz3DU%2Bbt6tVM9jMBVN38swefSy%2F0sjJTIaWX67JQYzRSGKusgGh08MK%2Fi7XGTkhzBR7qvt36tTM7J5%2FVw%2FRWdfgrwflebephicom3py7F9HrOZZNTz8qRY0j4dDhvPAyxT8JnXev3eezJIjWzBqv46I28f2im6NWSOPv9MwFl2FFYN8%2FO94gusftjf5KvNJyRAT35ZrXru6EegAhV0KAsZeQwH5EeFDMSnhnqs3ySItYu3Ta5gbft07NO0oyilqrKBI00XluJ3wrm4oD2pmIqNHh0gTAgDglq2CecWaojfr8TTNOriXAB8doQeWodlJdoYJQQr%2F2mnuwE%2FXJTB4rx4zecg0DEPAXHJF3RFzatEziBwuAmwysPsxekTf%2B7avJ8woTpA5X7ea7QUYbzWL%2FhEjrlGLwdEdMJ8O%2BpcG%2F1fWBVBm7m4ZVOstQsnEYovVkRXRDM4%2BeDdONJxEMXvyzYtN5q6TuhadXltuFAlR3h34LnxN%2BQpkE%2BnRzqzQzq%2BTLyKPTjYeAyHOSNJ2NO8JGzNysLrS1HBUH0F2crUZdkx6c4jSsxkgNE09HeB0SgL0lMXaBfgrOO%2FmQJYa7TRp%2BzIaGkxuBQFC2GxKjUIk%2F3pMOSHqcQGOqUBeFldZhwwW1f6pntCgOdmbsvBj4uoTKuCeT9pq5JU6vYYHkq13MLd037lkcWNR0j9Zhthxa4x1eNYQXhzVRDby6ID%2BGsZFWMZts7Zvci4lL%2Fum%2BxL%2B9k51wHnqYpP2a1nyAE0O8kyk7I%2BdhEvnpPDPp0jp4hlFoA9xMSe9undDsUinVJRfWBR5sJYAPcNqaA8oaTtFvQARfxQBmiTGpEEQBxZDhOj&X-Amz-Signature=a9e51530a13c5b994130cefe7cffd251d33517c72c22ed518c8458dc3b747371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQVRZXD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXw5d5LOBPP8be3S4%2BJ%2B9%2F9EZbd694bwvL69eBXZ1YwIgRJeC3OC%2F%2B0G9Xovywbh5ScmEEBkW61keExcQar4p9I8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LpQ9nsFPA5QVfXCrcA9CMdc0bdv%2FBClXkTGxz3DU%2Bbt6tVM9jMBVN38swefSy%2F0sjJTIaWX67JQYzRSGKusgGh08MK%2Fi7XGTkhzBR7qvt36tTM7J5%2FVw%2FRWdfgrwflebephicom3py7F9HrOZZNTz8qRY0j4dDhvPAyxT8JnXev3eezJIjWzBqv46I28f2im6NWSOPv9MwFl2FFYN8%2FO94gusftjf5KvNJyRAT35ZrXru6EegAhV0KAsZeQwH5EeFDMSnhnqs3ySItYu3Ta5gbft07NO0oyilqrKBI00XluJ3wrm4oD2pmIqNHh0gTAgDglq2CecWaojfr8TTNOriXAB8doQeWodlJdoYJQQr%2F2mnuwE%2FXJTB4rx4zecg0DEPAXHJF3RFzatEziBwuAmwysPsxekTf%2B7avJ8woTpA5X7ea7QUYbzWL%2FhEjrlGLwdEdMJ8O%2BpcG%2F1fWBVBm7m4ZVOstQsnEYovVkRXRDM4%2BeDdONJxEMXvyzYtN5q6TuhadXltuFAlR3h34LnxN%2BQpkE%2BnRzqzQzq%2BTLyKPTjYeAyHOSNJ2NO8JGzNysLrS1HBUH0F2crUZdkx6c4jSsxkgNE09HeB0SgL0lMXaBfgrOO%2FmQJYa7TRp%2BzIaGkxuBQFC2GxKjUIk%2F3pMOSHqcQGOqUBeFldZhwwW1f6pntCgOdmbsvBj4uoTKuCeT9pq5JU6vYYHkq13MLd037lkcWNR0j9Zhthxa4x1eNYQXhzVRDby6ID%2BGsZFWMZts7Zvci4lL%2Fum%2BxL%2B9k51wHnqYpP2a1nyAE0O8kyk7I%2BdhEvnpPDPp0jp4hlFoA9xMSe9undDsUinVJRfWBR5sJYAPcNqaA8oaTtFvQARfxQBmiTGpEEQBxZDhOj&X-Amz-Signature=7155ceb3209f474fde16fefa2239387f4fa92357fa08fce5ba4c6d26f017c651&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQVRZXD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXw5d5LOBPP8be3S4%2BJ%2B9%2F9EZbd694bwvL69eBXZ1YwIgRJeC3OC%2F%2B0G9Xovywbh5ScmEEBkW61keExcQar4p9I8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LpQ9nsFPA5QVfXCrcA9CMdc0bdv%2FBClXkTGxz3DU%2Bbt6tVM9jMBVN38swefSy%2F0sjJTIaWX67JQYzRSGKusgGh08MK%2Fi7XGTkhzBR7qvt36tTM7J5%2FVw%2FRWdfgrwflebephicom3py7F9HrOZZNTz8qRY0j4dDhvPAyxT8JnXev3eezJIjWzBqv46I28f2im6NWSOPv9MwFl2FFYN8%2FO94gusftjf5KvNJyRAT35ZrXru6EegAhV0KAsZeQwH5EeFDMSnhnqs3ySItYu3Ta5gbft07NO0oyilqrKBI00XluJ3wrm4oD2pmIqNHh0gTAgDglq2CecWaojfr8TTNOriXAB8doQeWodlJdoYJQQr%2F2mnuwE%2FXJTB4rx4zecg0DEPAXHJF3RFzatEziBwuAmwysPsxekTf%2B7avJ8woTpA5X7ea7QUYbzWL%2FhEjrlGLwdEdMJ8O%2BpcG%2F1fWBVBm7m4ZVOstQsnEYovVkRXRDM4%2BeDdONJxEMXvyzYtN5q6TuhadXltuFAlR3h34LnxN%2BQpkE%2BnRzqzQzq%2BTLyKPTjYeAyHOSNJ2NO8JGzNysLrS1HBUH0F2crUZdkx6c4jSsxkgNE09HeB0SgL0lMXaBfgrOO%2FmQJYa7TRp%2BzIaGkxuBQFC2GxKjUIk%2F3pMOSHqcQGOqUBeFldZhwwW1f6pntCgOdmbsvBj4uoTKuCeT9pq5JU6vYYHkq13MLd037lkcWNR0j9Zhthxa4x1eNYQXhzVRDby6ID%2BGsZFWMZts7Zvci4lL%2Fum%2BxL%2B9k51wHnqYpP2a1nyAE0O8kyk7I%2BdhEvnpPDPp0jp4hlFoA9xMSe9undDsUinVJRfWBR5sJYAPcNqaA8oaTtFvQARfxQBmiTGpEEQBxZDhOj&X-Amz-Signature=08c5963dac777d4dfeb2dc7dcdd1da9d15d75d0029e25ea2660b2e2eda40202c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQVRZXD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXw5d5LOBPP8be3S4%2BJ%2B9%2F9EZbd694bwvL69eBXZ1YwIgRJeC3OC%2F%2B0G9Xovywbh5ScmEEBkW61keExcQar4p9I8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LpQ9nsFPA5QVfXCrcA9CMdc0bdv%2FBClXkTGxz3DU%2Bbt6tVM9jMBVN38swefSy%2F0sjJTIaWX67JQYzRSGKusgGh08MK%2Fi7XGTkhzBR7qvt36tTM7J5%2FVw%2FRWdfgrwflebephicom3py7F9HrOZZNTz8qRY0j4dDhvPAyxT8JnXev3eezJIjWzBqv46I28f2im6NWSOPv9MwFl2FFYN8%2FO94gusftjf5KvNJyRAT35ZrXru6EegAhV0KAsZeQwH5EeFDMSnhnqs3ySItYu3Ta5gbft07NO0oyilqrKBI00XluJ3wrm4oD2pmIqNHh0gTAgDglq2CecWaojfr8TTNOriXAB8doQeWodlJdoYJQQr%2F2mnuwE%2FXJTB4rx4zecg0DEPAXHJF3RFzatEziBwuAmwysPsxekTf%2B7avJ8woTpA5X7ea7QUYbzWL%2FhEjrlGLwdEdMJ8O%2BpcG%2F1fWBVBm7m4ZVOstQsnEYovVkRXRDM4%2BeDdONJxEMXvyzYtN5q6TuhadXltuFAlR3h34LnxN%2BQpkE%2BnRzqzQzq%2BTLyKPTjYeAyHOSNJ2NO8JGzNysLrS1HBUH0F2crUZdkx6c4jSsxkgNE09HeB0SgL0lMXaBfgrOO%2FmQJYa7TRp%2BzIaGkxuBQFC2GxKjUIk%2F3pMOSHqcQGOqUBeFldZhwwW1f6pntCgOdmbsvBj4uoTKuCeT9pq5JU6vYYHkq13MLd037lkcWNR0j9Zhthxa4x1eNYQXhzVRDby6ID%2BGsZFWMZts7Zvci4lL%2Fum%2BxL%2B9k51wHnqYpP2a1nyAE0O8kyk7I%2BdhEvnpPDPp0jp4hlFoA9xMSe9undDsUinVJRfWBR5sJYAPcNqaA8oaTtFvQARfxQBmiTGpEEQBxZDhOj&X-Amz-Signature=49941c2c1703811b7bab9ae06460eeeae8accf64ef7d02f6002f3bac6d9fc4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GQVRZXD%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkXw5d5LOBPP8be3S4%2BJ%2B9%2F9EZbd694bwvL69eBXZ1YwIgRJeC3OC%2F%2B0G9Xovywbh5ScmEEBkW61keExcQar4p9I8qiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2LpQ9nsFPA5QVfXCrcA9CMdc0bdv%2FBClXkTGxz3DU%2Bbt6tVM9jMBVN38swefSy%2F0sjJTIaWX67JQYzRSGKusgGh08MK%2Fi7XGTkhzBR7qvt36tTM7J5%2FVw%2FRWdfgrwflebephicom3py7F9HrOZZNTz8qRY0j4dDhvPAyxT8JnXev3eezJIjWzBqv46I28f2im6NWSOPv9MwFl2FFYN8%2FO94gusftjf5KvNJyRAT35ZrXru6EegAhV0KAsZeQwH5EeFDMSnhnqs3ySItYu3Ta5gbft07NO0oyilqrKBI00XluJ3wrm4oD2pmIqNHh0gTAgDglq2CecWaojfr8TTNOriXAB8doQeWodlJdoYJQQr%2F2mnuwE%2FXJTB4rx4zecg0DEPAXHJF3RFzatEziBwuAmwysPsxekTf%2B7avJ8woTpA5X7ea7QUYbzWL%2FhEjrlGLwdEdMJ8O%2BpcG%2F1fWBVBm7m4ZVOstQsnEYovVkRXRDM4%2BeDdONJxEMXvyzYtN5q6TuhadXltuFAlR3h34LnxN%2BQpkE%2BnRzqzQzq%2BTLyKPTjYeAyHOSNJ2NO8JGzNysLrS1HBUH0F2crUZdkx6c4jSsxkgNE09HeB0SgL0lMXaBfgrOO%2FmQJYa7TRp%2BzIaGkxuBQFC2GxKjUIk%2F3pMOSHqcQGOqUBeFldZhwwW1f6pntCgOdmbsvBj4uoTKuCeT9pq5JU6vYYHkq13MLd037lkcWNR0j9Zhthxa4x1eNYQXhzVRDby6ID%2BGsZFWMZts7Zvci4lL%2Fum%2BxL%2B9k51wHnqYpP2a1nyAE0O8kyk7I%2BdhEvnpPDPp0jp4hlFoA9xMSe9undDsUinVJRfWBR5sJYAPcNqaA8oaTtFvQARfxQBmiTGpEEQBxZDhOj&X-Amz-Signature=622313209d150ad7804986d910e61eaab0e59f0bc1d493ab907a6e35d9bc1ee9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
