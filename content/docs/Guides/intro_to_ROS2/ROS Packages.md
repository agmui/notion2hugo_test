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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US75WQV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA8NEsAIwTBJ2csvsov3xXuwCPsSLAVqqqE8WsZEA12AAiEA5l9xEFshzkzHtuWGBvL%2FA%2Fdkzf0qTJoB%2BMmpBRXyfBQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3m6OKEq97XEZkRxircAziwDHeXTJ5f%2Fplq2N7iP%2FNinXCxm9nmoekXVnFaJRue5o2fqO49pl4QX2yAqNRHd%2FrQ2yMRvdsezpWM5mOSSXoEumwH8IYM9FHsBdLzDO6mZAMUBmODNop%2F7WRkWAC6s7ug3gk7WHuA%2BTlD4u%2FfHtzmcVM5rIGg%2Fyhf7ALYpqa8wLh%2BzKa%2BeYEZC8WmKo2RGZSG1B0PSSTNMqw9CGn7xKiZao0oqGlfXmabU4ovFiFrhUoQ%2FqD%2BujuRWdhq3masM%2B6I8GwV%2BK1B2XeCDku7w2STLUVhs4jCSO1AuurRzcvTudDGLtrLk%2BDutoTLE%2FJKK%2FPbevixYj0iE5Mfd26mc4O9s%2FeGn8ACAIzMDM4gK%2FjlTq4kAEnVBaTyLl7NlKWwX5S4hdVnqo4f26cmy34L%2BlBzIoMmErr12toXwe47Oy0VY6JkLeNsZ4g0oww6Z77pIC2tmMkH9jZbz74JCvHj3r7pAI7NtVNsUGji4T5KZy1lTXlG4r5C3IAx3qVV%2BRHpKhn%2BSZVvgm%2FdWi%2FeUZzQ7f2X4tvxpCkW72eSbOua2e436xMJdqRo92SJOiXPiR1F5oM%2F%2BW9qOkJxRF6c9aCdpeDKsCjWmQEA0TVeht0y9IWBae4eLl8Q3ZWfbLqmMIqx678GOqUBiaDOLt3Z2e2D%2B2hy5mJvlAPr0DU3hn6PrCDJ7oV4W3tkgGQpLAH3MbXUpBBIPUCIWhEsal52cJfgiKq15kMXI2n37zhwgBwCOZMF4YnmrXzBncnT03OXHKDWN2CXpy4i%2FWB5s%2BOZpQV3X6SYul00RkezkkRRU2kymjvbZROgZVjWisUjDMsDwu3A98RHcbgHnOjntU%2FOaJ7gvULcYe1nZtbOT32i&X-Amz-Signature=3e0e1c5abce4b0fb70054515fe0cf3b504b63784de6ab9203722d5adbece9126&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US75WQV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA8NEsAIwTBJ2csvsov3xXuwCPsSLAVqqqE8WsZEA12AAiEA5l9xEFshzkzHtuWGBvL%2FA%2Fdkzf0qTJoB%2BMmpBRXyfBQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3m6OKEq97XEZkRxircAziwDHeXTJ5f%2Fplq2N7iP%2FNinXCxm9nmoekXVnFaJRue5o2fqO49pl4QX2yAqNRHd%2FrQ2yMRvdsezpWM5mOSSXoEumwH8IYM9FHsBdLzDO6mZAMUBmODNop%2F7WRkWAC6s7ug3gk7WHuA%2BTlD4u%2FfHtzmcVM5rIGg%2Fyhf7ALYpqa8wLh%2BzKa%2BeYEZC8WmKo2RGZSG1B0PSSTNMqw9CGn7xKiZao0oqGlfXmabU4ovFiFrhUoQ%2FqD%2BujuRWdhq3masM%2B6I8GwV%2BK1B2XeCDku7w2STLUVhs4jCSO1AuurRzcvTudDGLtrLk%2BDutoTLE%2FJKK%2FPbevixYj0iE5Mfd26mc4O9s%2FeGn8ACAIzMDM4gK%2FjlTq4kAEnVBaTyLl7NlKWwX5S4hdVnqo4f26cmy34L%2BlBzIoMmErr12toXwe47Oy0VY6JkLeNsZ4g0oww6Z77pIC2tmMkH9jZbz74JCvHj3r7pAI7NtVNsUGji4T5KZy1lTXlG4r5C3IAx3qVV%2BRHpKhn%2BSZVvgm%2FdWi%2FeUZzQ7f2X4tvxpCkW72eSbOua2e436xMJdqRo92SJOiXPiR1F5oM%2F%2BW9qOkJxRF6c9aCdpeDKsCjWmQEA0TVeht0y9IWBae4eLl8Q3ZWfbLqmMIqx678GOqUBiaDOLt3Z2e2D%2B2hy5mJvlAPr0DU3hn6PrCDJ7oV4W3tkgGQpLAH3MbXUpBBIPUCIWhEsal52cJfgiKq15kMXI2n37zhwgBwCOZMF4YnmrXzBncnT03OXHKDWN2CXpy4i%2FWB5s%2BOZpQV3X6SYul00RkezkkRRU2kymjvbZROgZVjWisUjDMsDwu3A98RHcbgHnOjntU%2FOaJ7gvULcYe1nZtbOT32i&X-Amz-Signature=efc13e945ee324295fc31866b9fe5b3767f7e085d7bced1a48308cfd56572b96&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US75WQV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA8NEsAIwTBJ2csvsov3xXuwCPsSLAVqqqE8WsZEA12AAiEA5l9xEFshzkzHtuWGBvL%2FA%2Fdkzf0qTJoB%2BMmpBRXyfBQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3m6OKEq97XEZkRxircAziwDHeXTJ5f%2Fplq2N7iP%2FNinXCxm9nmoekXVnFaJRue5o2fqO49pl4QX2yAqNRHd%2FrQ2yMRvdsezpWM5mOSSXoEumwH8IYM9FHsBdLzDO6mZAMUBmODNop%2F7WRkWAC6s7ug3gk7WHuA%2BTlD4u%2FfHtzmcVM5rIGg%2Fyhf7ALYpqa8wLh%2BzKa%2BeYEZC8WmKo2RGZSG1B0PSSTNMqw9CGn7xKiZao0oqGlfXmabU4ovFiFrhUoQ%2FqD%2BujuRWdhq3masM%2B6I8GwV%2BK1B2XeCDku7w2STLUVhs4jCSO1AuurRzcvTudDGLtrLk%2BDutoTLE%2FJKK%2FPbevixYj0iE5Mfd26mc4O9s%2FeGn8ACAIzMDM4gK%2FjlTq4kAEnVBaTyLl7NlKWwX5S4hdVnqo4f26cmy34L%2BlBzIoMmErr12toXwe47Oy0VY6JkLeNsZ4g0oww6Z77pIC2tmMkH9jZbz74JCvHj3r7pAI7NtVNsUGji4T5KZy1lTXlG4r5C3IAx3qVV%2BRHpKhn%2BSZVvgm%2FdWi%2FeUZzQ7f2X4tvxpCkW72eSbOua2e436xMJdqRo92SJOiXPiR1F5oM%2F%2BW9qOkJxRF6c9aCdpeDKsCjWmQEA0TVeht0y9IWBae4eLl8Q3ZWfbLqmMIqx678GOqUBiaDOLt3Z2e2D%2B2hy5mJvlAPr0DU3hn6PrCDJ7oV4W3tkgGQpLAH3MbXUpBBIPUCIWhEsal52cJfgiKq15kMXI2n37zhwgBwCOZMF4YnmrXzBncnT03OXHKDWN2CXpy4i%2FWB5s%2BOZpQV3X6SYul00RkezkkRRU2kymjvbZROgZVjWisUjDMsDwu3A98RHcbgHnOjntU%2FOaJ7gvULcYe1nZtbOT32i&X-Amz-Signature=35d347da50af1aae158aee0d3f79bfd217d29b16cd73978436f344310efc6adf&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US75WQV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA8NEsAIwTBJ2csvsov3xXuwCPsSLAVqqqE8WsZEA12AAiEA5l9xEFshzkzHtuWGBvL%2FA%2Fdkzf0qTJoB%2BMmpBRXyfBQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3m6OKEq97XEZkRxircAziwDHeXTJ5f%2Fplq2N7iP%2FNinXCxm9nmoekXVnFaJRue5o2fqO49pl4QX2yAqNRHd%2FrQ2yMRvdsezpWM5mOSSXoEumwH8IYM9FHsBdLzDO6mZAMUBmODNop%2F7WRkWAC6s7ug3gk7WHuA%2BTlD4u%2FfHtzmcVM5rIGg%2Fyhf7ALYpqa8wLh%2BzKa%2BeYEZC8WmKo2RGZSG1B0PSSTNMqw9CGn7xKiZao0oqGlfXmabU4ovFiFrhUoQ%2FqD%2BujuRWdhq3masM%2B6I8GwV%2BK1B2XeCDku7w2STLUVhs4jCSO1AuurRzcvTudDGLtrLk%2BDutoTLE%2FJKK%2FPbevixYj0iE5Mfd26mc4O9s%2FeGn8ACAIzMDM4gK%2FjlTq4kAEnVBaTyLl7NlKWwX5S4hdVnqo4f26cmy34L%2BlBzIoMmErr12toXwe47Oy0VY6JkLeNsZ4g0oww6Z77pIC2tmMkH9jZbz74JCvHj3r7pAI7NtVNsUGji4T5KZy1lTXlG4r5C3IAx3qVV%2BRHpKhn%2BSZVvgm%2FdWi%2FeUZzQ7f2X4tvxpCkW72eSbOua2e436xMJdqRo92SJOiXPiR1F5oM%2F%2BW9qOkJxRF6c9aCdpeDKsCjWmQEA0TVeht0y9IWBae4eLl8Q3ZWfbLqmMIqx678GOqUBiaDOLt3Z2e2D%2B2hy5mJvlAPr0DU3hn6PrCDJ7oV4W3tkgGQpLAH3MbXUpBBIPUCIWhEsal52cJfgiKq15kMXI2n37zhwgBwCOZMF4YnmrXzBncnT03OXHKDWN2CXpy4i%2FWB5s%2BOZpQV3X6SYul00RkezkkRRU2kymjvbZROgZVjWisUjDMsDwu3A98RHcbgHnOjntU%2FOaJ7gvULcYe1nZtbOT32i&X-Amz-Signature=4b1c284592eb35198d4b41c783a6e3ee832389d79a15336f0e2adb75eb5dd223&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US75WQV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA8NEsAIwTBJ2csvsov3xXuwCPsSLAVqqqE8WsZEA12AAiEA5l9xEFshzkzHtuWGBvL%2FA%2Fdkzf0qTJoB%2BMmpBRXyfBQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3m6OKEq97XEZkRxircAziwDHeXTJ5f%2Fplq2N7iP%2FNinXCxm9nmoekXVnFaJRue5o2fqO49pl4QX2yAqNRHd%2FrQ2yMRvdsezpWM5mOSSXoEumwH8IYM9FHsBdLzDO6mZAMUBmODNop%2F7WRkWAC6s7ug3gk7WHuA%2BTlD4u%2FfHtzmcVM5rIGg%2Fyhf7ALYpqa8wLh%2BzKa%2BeYEZC8WmKo2RGZSG1B0PSSTNMqw9CGn7xKiZao0oqGlfXmabU4ovFiFrhUoQ%2FqD%2BujuRWdhq3masM%2B6I8GwV%2BK1B2XeCDku7w2STLUVhs4jCSO1AuurRzcvTudDGLtrLk%2BDutoTLE%2FJKK%2FPbevixYj0iE5Mfd26mc4O9s%2FeGn8ACAIzMDM4gK%2FjlTq4kAEnVBaTyLl7NlKWwX5S4hdVnqo4f26cmy34L%2BlBzIoMmErr12toXwe47Oy0VY6JkLeNsZ4g0oww6Z77pIC2tmMkH9jZbz74JCvHj3r7pAI7NtVNsUGji4T5KZy1lTXlG4r5C3IAx3qVV%2BRHpKhn%2BSZVvgm%2FdWi%2FeUZzQ7f2X4tvxpCkW72eSbOua2e436xMJdqRo92SJOiXPiR1F5oM%2F%2BW9qOkJxRF6c9aCdpeDKsCjWmQEA0TVeht0y9IWBae4eLl8Q3ZWfbLqmMIqx678GOqUBiaDOLt3Z2e2D%2B2hy5mJvlAPr0DU3hn6PrCDJ7oV4W3tkgGQpLAH3MbXUpBBIPUCIWhEsal52cJfgiKq15kMXI2n37zhwgBwCOZMF4YnmrXzBncnT03OXHKDWN2CXpy4i%2FWB5s%2BOZpQV3X6SYul00RkezkkRRU2kymjvbZROgZVjWisUjDMsDwu3A98RHcbgHnOjntU%2FOaJ7gvULcYe1nZtbOT32i&X-Amz-Signature=947b9c59ccada143fe9639caa9645b6eba0f62f34d097f7ccfcd5b9a86fbc32a&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US75WQV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA8NEsAIwTBJ2csvsov3xXuwCPsSLAVqqqE8WsZEA12AAiEA5l9xEFshzkzHtuWGBvL%2FA%2Fdkzf0qTJoB%2BMmpBRXyfBQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3m6OKEq97XEZkRxircAziwDHeXTJ5f%2Fplq2N7iP%2FNinXCxm9nmoekXVnFaJRue5o2fqO49pl4QX2yAqNRHd%2FrQ2yMRvdsezpWM5mOSSXoEumwH8IYM9FHsBdLzDO6mZAMUBmODNop%2F7WRkWAC6s7ug3gk7WHuA%2BTlD4u%2FfHtzmcVM5rIGg%2Fyhf7ALYpqa8wLh%2BzKa%2BeYEZC8WmKo2RGZSG1B0PSSTNMqw9CGn7xKiZao0oqGlfXmabU4ovFiFrhUoQ%2FqD%2BujuRWdhq3masM%2B6I8GwV%2BK1B2XeCDku7w2STLUVhs4jCSO1AuurRzcvTudDGLtrLk%2BDutoTLE%2FJKK%2FPbevixYj0iE5Mfd26mc4O9s%2FeGn8ACAIzMDM4gK%2FjlTq4kAEnVBaTyLl7NlKWwX5S4hdVnqo4f26cmy34L%2BlBzIoMmErr12toXwe47Oy0VY6JkLeNsZ4g0oww6Z77pIC2tmMkH9jZbz74JCvHj3r7pAI7NtVNsUGji4T5KZy1lTXlG4r5C3IAx3qVV%2BRHpKhn%2BSZVvgm%2FdWi%2FeUZzQ7f2X4tvxpCkW72eSbOua2e436xMJdqRo92SJOiXPiR1F5oM%2F%2BW9qOkJxRF6c9aCdpeDKsCjWmQEA0TVeht0y9IWBae4eLl8Q3ZWfbLqmMIqx678GOqUBiaDOLt3Z2e2D%2B2hy5mJvlAPr0DU3hn6PrCDJ7oV4W3tkgGQpLAH3MbXUpBBIPUCIWhEsal52cJfgiKq15kMXI2n37zhwgBwCOZMF4YnmrXzBncnT03OXHKDWN2CXpy4i%2FWB5s%2BOZpQV3X6SYul00RkezkkRRU2kymjvbZROgZVjWisUjDMsDwu3A98RHcbgHnOjntU%2FOaJ7gvULcYe1nZtbOT32i&X-Amz-Signature=bed2899915829b45ac18e97f5af0a9fff4a806386d5ccb4c513a29b7d7d65a07&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US75WQV4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T220538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIA8NEsAIwTBJ2csvsov3xXuwCPsSLAVqqqE8WsZEA12AAiEA5l9xEFshzkzHtuWGBvL%2FA%2Fdkzf0qTJoB%2BMmpBRXyfBQqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ3m6OKEq97XEZkRxircAziwDHeXTJ5f%2Fplq2N7iP%2FNinXCxm9nmoekXVnFaJRue5o2fqO49pl4QX2yAqNRHd%2FrQ2yMRvdsezpWM5mOSSXoEumwH8IYM9FHsBdLzDO6mZAMUBmODNop%2F7WRkWAC6s7ug3gk7WHuA%2BTlD4u%2FfHtzmcVM5rIGg%2Fyhf7ALYpqa8wLh%2BzKa%2BeYEZC8WmKo2RGZSG1B0PSSTNMqw9CGn7xKiZao0oqGlfXmabU4ovFiFrhUoQ%2FqD%2BujuRWdhq3masM%2B6I8GwV%2BK1B2XeCDku7w2STLUVhs4jCSO1AuurRzcvTudDGLtrLk%2BDutoTLE%2FJKK%2FPbevixYj0iE5Mfd26mc4O9s%2FeGn8ACAIzMDM4gK%2FjlTq4kAEnVBaTyLl7NlKWwX5S4hdVnqo4f26cmy34L%2BlBzIoMmErr12toXwe47Oy0VY6JkLeNsZ4g0oww6Z77pIC2tmMkH9jZbz74JCvHj3r7pAI7NtVNsUGji4T5KZy1lTXlG4r5C3IAx3qVV%2BRHpKhn%2BSZVvgm%2FdWi%2FeUZzQ7f2X4tvxpCkW72eSbOua2e436xMJdqRo92SJOiXPiR1F5oM%2F%2BW9qOkJxRF6c9aCdpeDKsCjWmQEA0TVeht0y9IWBae4eLl8Q3ZWfbLqmMIqx678GOqUBiaDOLt3Z2e2D%2B2hy5mJvlAPr0DU3hn6PrCDJ7oV4W3tkgGQpLAH3MbXUpBBIPUCIWhEsal52cJfgiKq15kMXI2n37zhwgBwCOZMF4YnmrXzBncnT03OXHKDWN2CXpy4i%2FWB5s%2BOZpQV3X6SYul00RkezkkRRU2kymjvbZROgZVjWisUjDMsDwu3A98RHcbgHnOjntU%2FOaJ7gvULcYe1nZtbOT32i&X-Amz-Signature=c6bfc82bff15984a52a2c75e819982b6e5281e5a27d18ec4c94e885273b570c1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
