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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLHRMFQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD6iERGYe9CwsWTp0k1g8bXtqxAgna%2F2AqBNNPpmhDNdAIhAP4AoNnvgOjZiteCcixs7AxbOyr1mwt7Ks%2F7vUyDKxp6Kv8DCFIQABoMNjM3NDIzMTgzODA1Igwp9Q1JCT1NwC34rG8q3ANhjWiYYEu5iqZ%2FbH06S7kEw4Xulk78VwPP%2BzdUU4AoBG0SMxMZK4I4fxGR5Ssi19WIhnYuPhxAdsQFeLYNtEDr54S01SUVmmmfc3a69wq%2Bf1Vh45DdnfChPczq%2Bmbeyr%2FQxm2nRYlIByLsD1EkvgpkEnQpH4HcgBoL9FMcEaMpE37B6YSMrM0CJRf0rIMW8VwxE4wEYonJm1hmH%2FILeWeC9MfD%2FSoCkkEONHsRMseI7iAhHi572h19VJtweyBSnTHMrnhYWnkGsqOYD2VkNxKMnXLjshVg7wy%2BW7Dz5u1iVvJkNn5%2BQPi%2FZvl8rPqrUtBefbhuO6foJc2%2BglNnaxgy%2FAdEJ0Hcw7UbuzWAlRKq1KqhzCZdh7OQaxd4MuqziBDDb9VNIx2FR76KJEolUWo7gM5E%2FeK%2Bd2aCWRne0aEmtK9XddLXBx3Qk1Ei%2FPXUuMN%2Ftr83SiQM%2Fey1Mx5nK%2BZwQLOoGzG3FbAqfAgKzWLtDb5GI59LhpUIGlqbW14o379wbpBGbuHqCIt0qUt2Gshwhc8qjIbnGG6SAuEQCSopE6plo5%2FjB3EnkRj4DuzdLEIhimD1El3wYRwkzg4wrGD%2Fwx7yIaLhhsv33znw%2BZRg4Ohsbqg2ycrHh9Ie4DDo5cS9BjqkAWdZbmK1%2BBxdwe1dBHseiWV8HURqNuSW5StDkbXkTLJTPO59o210CoYZvCjliMkHRDi8HBeOUq7Nz%2B7dqQXlzMG3zc7IP%2BV6YoTa25WlqFhMWAbHRBPcNUuDyAV1yNp7CPk%2BP%2Fbnzm6IpCP7G3ngycdORgpScd%2F9jiTFXgUN369xqji143nVjEkNCJA2os1bXOq%2FFj4tG3UnEbJm3rU%2B9OAtLhd6&X-Amz-Signature=f6da0f982d241ea8fe9bf9dcadf7451a14da202b8836eb4d73ac7472b7f8c4ce&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLHRMFQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD6iERGYe9CwsWTp0k1g8bXtqxAgna%2F2AqBNNPpmhDNdAIhAP4AoNnvgOjZiteCcixs7AxbOyr1mwt7Ks%2F7vUyDKxp6Kv8DCFIQABoMNjM3NDIzMTgzODA1Igwp9Q1JCT1NwC34rG8q3ANhjWiYYEu5iqZ%2FbH06S7kEw4Xulk78VwPP%2BzdUU4AoBG0SMxMZK4I4fxGR5Ssi19WIhnYuPhxAdsQFeLYNtEDr54S01SUVmmmfc3a69wq%2Bf1Vh45DdnfChPczq%2Bmbeyr%2FQxm2nRYlIByLsD1EkvgpkEnQpH4HcgBoL9FMcEaMpE37B6YSMrM0CJRf0rIMW8VwxE4wEYonJm1hmH%2FILeWeC9MfD%2FSoCkkEONHsRMseI7iAhHi572h19VJtweyBSnTHMrnhYWnkGsqOYD2VkNxKMnXLjshVg7wy%2BW7Dz5u1iVvJkNn5%2BQPi%2FZvl8rPqrUtBefbhuO6foJc2%2BglNnaxgy%2FAdEJ0Hcw7UbuzWAlRKq1KqhzCZdh7OQaxd4MuqziBDDb9VNIx2FR76KJEolUWo7gM5E%2FeK%2Bd2aCWRne0aEmtK9XddLXBx3Qk1Ei%2FPXUuMN%2Ftr83SiQM%2Fey1Mx5nK%2BZwQLOoGzG3FbAqfAgKzWLtDb5GI59LhpUIGlqbW14o379wbpBGbuHqCIt0qUt2Gshwhc8qjIbnGG6SAuEQCSopE6plo5%2FjB3EnkRj4DuzdLEIhimD1El3wYRwkzg4wrGD%2Fwx7yIaLhhsv33znw%2BZRg4Ohsbqg2ycrHh9Ie4DDo5cS9BjqkAWdZbmK1%2BBxdwe1dBHseiWV8HURqNuSW5StDkbXkTLJTPO59o210CoYZvCjliMkHRDi8HBeOUq7Nz%2B7dqQXlzMG3zc7IP%2BV6YoTa25WlqFhMWAbHRBPcNUuDyAV1yNp7CPk%2BP%2Fbnzm6IpCP7G3ngycdORgpScd%2F9jiTFXgUN369xqji143nVjEkNCJA2os1bXOq%2FFj4tG3UnEbJm3rU%2B9OAtLhd6&X-Amz-Signature=af02593b84b2b4ab3c16f08db3ad578ec6c20ea2d89a920dba06346d53d9c872&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLHRMFQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD6iERGYe9CwsWTp0k1g8bXtqxAgna%2F2AqBNNPpmhDNdAIhAP4AoNnvgOjZiteCcixs7AxbOyr1mwt7Ks%2F7vUyDKxp6Kv8DCFIQABoMNjM3NDIzMTgzODA1Igwp9Q1JCT1NwC34rG8q3ANhjWiYYEu5iqZ%2FbH06S7kEw4Xulk78VwPP%2BzdUU4AoBG0SMxMZK4I4fxGR5Ssi19WIhnYuPhxAdsQFeLYNtEDr54S01SUVmmmfc3a69wq%2Bf1Vh45DdnfChPczq%2Bmbeyr%2FQxm2nRYlIByLsD1EkvgpkEnQpH4HcgBoL9FMcEaMpE37B6YSMrM0CJRf0rIMW8VwxE4wEYonJm1hmH%2FILeWeC9MfD%2FSoCkkEONHsRMseI7iAhHi572h19VJtweyBSnTHMrnhYWnkGsqOYD2VkNxKMnXLjshVg7wy%2BW7Dz5u1iVvJkNn5%2BQPi%2FZvl8rPqrUtBefbhuO6foJc2%2BglNnaxgy%2FAdEJ0Hcw7UbuzWAlRKq1KqhzCZdh7OQaxd4MuqziBDDb9VNIx2FR76KJEolUWo7gM5E%2FeK%2Bd2aCWRne0aEmtK9XddLXBx3Qk1Ei%2FPXUuMN%2Ftr83SiQM%2Fey1Mx5nK%2BZwQLOoGzG3FbAqfAgKzWLtDb5GI59LhpUIGlqbW14o379wbpBGbuHqCIt0qUt2Gshwhc8qjIbnGG6SAuEQCSopE6plo5%2FjB3EnkRj4DuzdLEIhimD1El3wYRwkzg4wrGD%2Fwx7yIaLhhsv33znw%2BZRg4Ohsbqg2ycrHh9Ie4DDo5cS9BjqkAWdZbmK1%2BBxdwe1dBHseiWV8HURqNuSW5StDkbXkTLJTPO59o210CoYZvCjliMkHRDi8HBeOUq7Nz%2B7dqQXlzMG3zc7IP%2BV6YoTa25WlqFhMWAbHRBPcNUuDyAV1yNp7CPk%2BP%2Fbnzm6IpCP7G3ngycdORgpScd%2F9jiTFXgUN369xqji143nVjEkNCJA2os1bXOq%2FFj4tG3UnEbJm3rU%2B9OAtLhd6&X-Amz-Signature=a9f7b3f167448c3a45a158705755867073472c1bbb7d3e1e1f23aa1f62644239&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLHRMFQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD6iERGYe9CwsWTp0k1g8bXtqxAgna%2F2AqBNNPpmhDNdAIhAP4AoNnvgOjZiteCcixs7AxbOyr1mwt7Ks%2F7vUyDKxp6Kv8DCFIQABoMNjM3NDIzMTgzODA1Igwp9Q1JCT1NwC34rG8q3ANhjWiYYEu5iqZ%2FbH06S7kEw4Xulk78VwPP%2BzdUU4AoBG0SMxMZK4I4fxGR5Ssi19WIhnYuPhxAdsQFeLYNtEDr54S01SUVmmmfc3a69wq%2Bf1Vh45DdnfChPczq%2Bmbeyr%2FQxm2nRYlIByLsD1EkvgpkEnQpH4HcgBoL9FMcEaMpE37B6YSMrM0CJRf0rIMW8VwxE4wEYonJm1hmH%2FILeWeC9MfD%2FSoCkkEONHsRMseI7iAhHi572h19VJtweyBSnTHMrnhYWnkGsqOYD2VkNxKMnXLjshVg7wy%2BW7Dz5u1iVvJkNn5%2BQPi%2FZvl8rPqrUtBefbhuO6foJc2%2BglNnaxgy%2FAdEJ0Hcw7UbuzWAlRKq1KqhzCZdh7OQaxd4MuqziBDDb9VNIx2FR76KJEolUWo7gM5E%2FeK%2Bd2aCWRne0aEmtK9XddLXBx3Qk1Ei%2FPXUuMN%2Ftr83SiQM%2Fey1Mx5nK%2BZwQLOoGzG3FbAqfAgKzWLtDb5GI59LhpUIGlqbW14o379wbpBGbuHqCIt0qUt2Gshwhc8qjIbnGG6SAuEQCSopE6plo5%2FjB3EnkRj4DuzdLEIhimD1El3wYRwkzg4wrGD%2Fwx7yIaLhhsv33znw%2BZRg4Ohsbqg2ycrHh9Ie4DDo5cS9BjqkAWdZbmK1%2BBxdwe1dBHseiWV8HURqNuSW5StDkbXkTLJTPO59o210CoYZvCjliMkHRDi8HBeOUq7Nz%2B7dqQXlzMG3zc7IP%2BV6YoTa25WlqFhMWAbHRBPcNUuDyAV1yNp7CPk%2BP%2Fbnzm6IpCP7G3ngycdORgpScd%2F9jiTFXgUN369xqji143nVjEkNCJA2os1bXOq%2FFj4tG3UnEbJm3rU%2B9OAtLhd6&X-Amz-Signature=3fb0e0f3e0c3e3a7a400858836708e642c3956d5c1ecf8d819bdee295650e919&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLHRMFQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD6iERGYe9CwsWTp0k1g8bXtqxAgna%2F2AqBNNPpmhDNdAIhAP4AoNnvgOjZiteCcixs7AxbOyr1mwt7Ks%2F7vUyDKxp6Kv8DCFIQABoMNjM3NDIzMTgzODA1Igwp9Q1JCT1NwC34rG8q3ANhjWiYYEu5iqZ%2FbH06S7kEw4Xulk78VwPP%2BzdUU4AoBG0SMxMZK4I4fxGR5Ssi19WIhnYuPhxAdsQFeLYNtEDr54S01SUVmmmfc3a69wq%2Bf1Vh45DdnfChPczq%2Bmbeyr%2FQxm2nRYlIByLsD1EkvgpkEnQpH4HcgBoL9FMcEaMpE37B6YSMrM0CJRf0rIMW8VwxE4wEYonJm1hmH%2FILeWeC9MfD%2FSoCkkEONHsRMseI7iAhHi572h19VJtweyBSnTHMrnhYWnkGsqOYD2VkNxKMnXLjshVg7wy%2BW7Dz5u1iVvJkNn5%2BQPi%2FZvl8rPqrUtBefbhuO6foJc2%2BglNnaxgy%2FAdEJ0Hcw7UbuzWAlRKq1KqhzCZdh7OQaxd4MuqziBDDb9VNIx2FR76KJEolUWo7gM5E%2FeK%2Bd2aCWRne0aEmtK9XddLXBx3Qk1Ei%2FPXUuMN%2Ftr83SiQM%2Fey1Mx5nK%2BZwQLOoGzG3FbAqfAgKzWLtDb5GI59LhpUIGlqbW14o379wbpBGbuHqCIt0qUt2Gshwhc8qjIbnGG6SAuEQCSopE6plo5%2FjB3EnkRj4DuzdLEIhimD1El3wYRwkzg4wrGD%2Fwx7yIaLhhsv33znw%2BZRg4Ohsbqg2ycrHh9Ie4DDo5cS9BjqkAWdZbmK1%2BBxdwe1dBHseiWV8HURqNuSW5StDkbXkTLJTPO59o210CoYZvCjliMkHRDi8HBeOUq7Nz%2B7dqQXlzMG3zc7IP%2BV6YoTa25WlqFhMWAbHRBPcNUuDyAV1yNp7CPk%2BP%2Fbnzm6IpCP7G3ngycdORgpScd%2F9jiTFXgUN369xqji143nVjEkNCJA2os1bXOq%2FFj4tG3UnEbJm3rU%2B9OAtLhd6&X-Amz-Signature=951682e8f7484d6f704a241a07cdc3ea8ff6757ecf5a62ddbfa12305523dda57&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLHRMFQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD6iERGYe9CwsWTp0k1g8bXtqxAgna%2F2AqBNNPpmhDNdAIhAP4AoNnvgOjZiteCcixs7AxbOyr1mwt7Ks%2F7vUyDKxp6Kv8DCFIQABoMNjM3NDIzMTgzODA1Igwp9Q1JCT1NwC34rG8q3ANhjWiYYEu5iqZ%2FbH06S7kEw4Xulk78VwPP%2BzdUU4AoBG0SMxMZK4I4fxGR5Ssi19WIhnYuPhxAdsQFeLYNtEDr54S01SUVmmmfc3a69wq%2Bf1Vh45DdnfChPczq%2Bmbeyr%2FQxm2nRYlIByLsD1EkvgpkEnQpH4HcgBoL9FMcEaMpE37B6YSMrM0CJRf0rIMW8VwxE4wEYonJm1hmH%2FILeWeC9MfD%2FSoCkkEONHsRMseI7iAhHi572h19VJtweyBSnTHMrnhYWnkGsqOYD2VkNxKMnXLjshVg7wy%2BW7Dz5u1iVvJkNn5%2BQPi%2FZvl8rPqrUtBefbhuO6foJc2%2BglNnaxgy%2FAdEJ0Hcw7UbuzWAlRKq1KqhzCZdh7OQaxd4MuqziBDDb9VNIx2FR76KJEolUWo7gM5E%2FeK%2Bd2aCWRne0aEmtK9XddLXBx3Qk1Ei%2FPXUuMN%2Ftr83SiQM%2Fey1Mx5nK%2BZwQLOoGzG3FbAqfAgKzWLtDb5GI59LhpUIGlqbW14o379wbpBGbuHqCIt0qUt2Gshwhc8qjIbnGG6SAuEQCSopE6plo5%2FjB3EnkRj4DuzdLEIhimD1El3wYRwkzg4wrGD%2Fwx7yIaLhhsv33znw%2BZRg4Ohsbqg2ycrHh9Ie4DDo5cS9BjqkAWdZbmK1%2BBxdwe1dBHseiWV8HURqNuSW5StDkbXkTLJTPO59o210CoYZvCjliMkHRDi8HBeOUq7Nz%2B7dqQXlzMG3zc7IP%2BV6YoTa25WlqFhMWAbHRBPcNUuDyAV1yNp7CPk%2BP%2Fbnzm6IpCP7G3ngycdORgpScd%2F9jiTFXgUN369xqji143nVjEkNCJA2os1bXOq%2FFj4tG3UnEbJm3rU%2B9OAtLhd6&X-Amz-Signature=25fbe1d75553482722d3644ab505c822dcbd81f518534b65b48c0237be50a6a5&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGLHRMFQ%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T003932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQD6iERGYe9CwsWTp0k1g8bXtqxAgna%2F2AqBNNPpmhDNdAIhAP4AoNnvgOjZiteCcixs7AxbOyr1mwt7Ks%2F7vUyDKxp6Kv8DCFIQABoMNjM3NDIzMTgzODA1Igwp9Q1JCT1NwC34rG8q3ANhjWiYYEu5iqZ%2FbH06S7kEw4Xulk78VwPP%2BzdUU4AoBG0SMxMZK4I4fxGR5Ssi19WIhnYuPhxAdsQFeLYNtEDr54S01SUVmmmfc3a69wq%2Bf1Vh45DdnfChPczq%2Bmbeyr%2FQxm2nRYlIByLsD1EkvgpkEnQpH4HcgBoL9FMcEaMpE37B6YSMrM0CJRf0rIMW8VwxE4wEYonJm1hmH%2FILeWeC9MfD%2FSoCkkEONHsRMseI7iAhHi572h19VJtweyBSnTHMrnhYWnkGsqOYD2VkNxKMnXLjshVg7wy%2BW7Dz5u1iVvJkNn5%2BQPi%2FZvl8rPqrUtBefbhuO6foJc2%2BglNnaxgy%2FAdEJ0Hcw7UbuzWAlRKq1KqhzCZdh7OQaxd4MuqziBDDb9VNIx2FR76KJEolUWo7gM5E%2FeK%2Bd2aCWRne0aEmtK9XddLXBx3Qk1Ei%2FPXUuMN%2Ftr83SiQM%2Fey1Mx5nK%2BZwQLOoGzG3FbAqfAgKzWLtDb5GI59LhpUIGlqbW14o379wbpBGbuHqCIt0qUt2Gshwhc8qjIbnGG6SAuEQCSopE6plo5%2FjB3EnkRj4DuzdLEIhimD1El3wYRwkzg4wrGD%2Fwx7yIaLhhsv33znw%2BZRg4Ohsbqg2ycrHh9Ie4DDo5cS9BjqkAWdZbmK1%2BBxdwe1dBHseiWV8HURqNuSW5StDkbXkTLJTPO59o210CoYZvCjliMkHRDi8HBeOUq7Nz%2B7dqQXlzMG3zc7IP%2BV6YoTa25WlqFhMWAbHRBPcNUuDyAV1yNp7CPk%2BP%2Fbnzm6IpCP7G3ngycdORgpScd%2F9jiTFXgUN369xqji143nVjEkNCJA2os1bXOq%2FFj4tG3UnEbJm3rU%2B9OAtLhd6&X-Amz-Signature=83dd0151ceecaea307a2558a679fe27c8ff29469878e5e5c36e8a32ebc30d3db&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
