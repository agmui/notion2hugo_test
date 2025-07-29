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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPM6PFP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXWo2Wo1eDhirTATOAz2I5oYimWqkwNsT9JZIUKtPJLAiB4Inod8TK4c8ItIaUVr5BzhFnr4JvmbJko2%2BuzoCoPeyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx60wjFEuyi%2BGaoknKtwDQapI5Xe6t5F9IcvQTDWkNgtm45UN9mJwxO4tV9NvhCUnOYquz18xRJnHsExgPz6%2FF5vfI11J71R%2B2BqqAmlKoZS95MELkd54g6nc8aT3r5%2B2YS7brPfOjqjUByv6R1K3yiwHCDjULpeUBiy8gOuvywQj7NAbRMsTKmGBwjEzizGEgOcEdyw2IIoU8MoQFv%2BSzMKIENv%2FVNHaS%2FOski9oFUavF79WlT7X1CP5iQQaCYDIqIttUe%2Fp78HRi0KrLn3F4wVO2dkWA1M1KOBaKcHtjlhh4tbga00IcOWelHOP%2FdH3qPj%2FFM8on0vwGmAH3Ur2A%2FdlNB2NnFkcEPu1wKVun44ztOs09RtH4KOpzR242sAXUonEYGXqY5qt9BEKUpiEdbKFeT9Et0AEKk24K5Z6C0m8JuyUm0esj4Qssf66WNKGhm8iWbXvaOIzCU4z%2Bn0mfK0g21tr2i1EpHfnOoCk14ZNhU0pRFezzi4j%2F5obNraRPvgVjefezsIydnqOi4DFSwDv4H7Zuy5xjEFQBfpwiETuTMzScbRsmWUu4aWe8ln8MBEORnnJ3hrJBcEQM79SZ3uoaF76HTyQVTA%2F4j8%2FdlH8rA84zDZ%2BrcfRfV0kVZK4WOUHoEflLW%2BP7GUw5f6jxAY6pgHyQ9FTzg8k9EjgiVkgLzQ42zKvNRMsIyAUUQl9sm1fc7TAtniAK2LNibSEB5UAet%2F7tnFZ8QaLfzyG2NlYAPReVJZdmpaxpeECtJRf%2BeqalvLg6xBSTP6zZh%2FEMRC6oORl6ZovpNAnTKwlNwC9tRFbS2ujNgSqUXhO%2FuW4DpWiUJ5mdWx5Ih6oZp1NkLCe%2FDPqaLhDoTfvmuZqvMS1O5scsZho0%2B%2Fc&X-Amz-Signature=4f85dc3b1e9bc804c566cdec1b50062d4d1b4f12879adb0f8089f6a38b2ee2be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPM6PFP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXWo2Wo1eDhirTATOAz2I5oYimWqkwNsT9JZIUKtPJLAiB4Inod8TK4c8ItIaUVr5BzhFnr4JvmbJko2%2BuzoCoPeyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx60wjFEuyi%2BGaoknKtwDQapI5Xe6t5F9IcvQTDWkNgtm45UN9mJwxO4tV9NvhCUnOYquz18xRJnHsExgPz6%2FF5vfI11J71R%2B2BqqAmlKoZS95MELkd54g6nc8aT3r5%2B2YS7brPfOjqjUByv6R1K3yiwHCDjULpeUBiy8gOuvywQj7NAbRMsTKmGBwjEzizGEgOcEdyw2IIoU8MoQFv%2BSzMKIENv%2FVNHaS%2FOski9oFUavF79WlT7X1CP5iQQaCYDIqIttUe%2Fp78HRi0KrLn3F4wVO2dkWA1M1KOBaKcHtjlhh4tbga00IcOWelHOP%2FdH3qPj%2FFM8on0vwGmAH3Ur2A%2FdlNB2NnFkcEPu1wKVun44ztOs09RtH4KOpzR242sAXUonEYGXqY5qt9BEKUpiEdbKFeT9Et0AEKk24K5Z6C0m8JuyUm0esj4Qssf66WNKGhm8iWbXvaOIzCU4z%2Bn0mfK0g21tr2i1EpHfnOoCk14ZNhU0pRFezzi4j%2F5obNraRPvgVjefezsIydnqOi4DFSwDv4H7Zuy5xjEFQBfpwiETuTMzScbRsmWUu4aWe8ln8MBEORnnJ3hrJBcEQM79SZ3uoaF76HTyQVTA%2F4j8%2FdlH8rA84zDZ%2BrcfRfV0kVZK4WOUHoEflLW%2BP7GUw5f6jxAY6pgHyQ9FTzg8k9EjgiVkgLzQ42zKvNRMsIyAUUQl9sm1fc7TAtniAK2LNibSEB5UAet%2F7tnFZ8QaLfzyG2NlYAPReVJZdmpaxpeECtJRf%2BeqalvLg6xBSTP6zZh%2FEMRC6oORl6ZovpNAnTKwlNwC9tRFbS2ujNgSqUXhO%2FuW4DpWiUJ5mdWx5Ih6oZp1NkLCe%2FDPqaLhDoTfvmuZqvMS1O5scsZho0%2B%2Fc&X-Amz-Signature=1e6dc038cd14fa4d779be217f901683728c656f2aafd473552b270c5c55f2a95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPM6PFP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXWo2Wo1eDhirTATOAz2I5oYimWqkwNsT9JZIUKtPJLAiB4Inod8TK4c8ItIaUVr5BzhFnr4JvmbJko2%2BuzoCoPeyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx60wjFEuyi%2BGaoknKtwDQapI5Xe6t5F9IcvQTDWkNgtm45UN9mJwxO4tV9NvhCUnOYquz18xRJnHsExgPz6%2FF5vfI11J71R%2B2BqqAmlKoZS95MELkd54g6nc8aT3r5%2B2YS7brPfOjqjUByv6R1K3yiwHCDjULpeUBiy8gOuvywQj7NAbRMsTKmGBwjEzizGEgOcEdyw2IIoU8MoQFv%2BSzMKIENv%2FVNHaS%2FOski9oFUavF79WlT7X1CP5iQQaCYDIqIttUe%2Fp78HRi0KrLn3F4wVO2dkWA1M1KOBaKcHtjlhh4tbga00IcOWelHOP%2FdH3qPj%2FFM8on0vwGmAH3Ur2A%2FdlNB2NnFkcEPu1wKVun44ztOs09RtH4KOpzR242sAXUonEYGXqY5qt9BEKUpiEdbKFeT9Et0AEKk24K5Z6C0m8JuyUm0esj4Qssf66WNKGhm8iWbXvaOIzCU4z%2Bn0mfK0g21tr2i1EpHfnOoCk14ZNhU0pRFezzi4j%2F5obNraRPvgVjefezsIydnqOi4DFSwDv4H7Zuy5xjEFQBfpwiETuTMzScbRsmWUu4aWe8ln8MBEORnnJ3hrJBcEQM79SZ3uoaF76HTyQVTA%2F4j8%2FdlH8rA84zDZ%2BrcfRfV0kVZK4WOUHoEflLW%2BP7GUw5f6jxAY6pgHyQ9FTzg8k9EjgiVkgLzQ42zKvNRMsIyAUUQl9sm1fc7TAtniAK2LNibSEB5UAet%2F7tnFZ8QaLfzyG2NlYAPReVJZdmpaxpeECtJRf%2BeqalvLg6xBSTP6zZh%2FEMRC6oORl6ZovpNAnTKwlNwC9tRFbS2ujNgSqUXhO%2FuW4DpWiUJ5mdWx5Ih6oZp1NkLCe%2FDPqaLhDoTfvmuZqvMS1O5scsZho0%2B%2Fc&X-Amz-Signature=96cb384b99fde4fb11bb6e221d9062898104896def8f7f32b1d2be5badf1e9e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPM6PFP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXWo2Wo1eDhirTATOAz2I5oYimWqkwNsT9JZIUKtPJLAiB4Inod8TK4c8ItIaUVr5BzhFnr4JvmbJko2%2BuzoCoPeyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx60wjFEuyi%2BGaoknKtwDQapI5Xe6t5F9IcvQTDWkNgtm45UN9mJwxO4tV9NvhCUnOYquz18xRJnHsExgPz6%2FF5vfI11J71R%2B2BqqAmlKoZS95MELkd54g6nc8aT3r5%2B2YS7brPfOjqjUByv6R1K3yiwHCDjULpeUBiy8gOuvywQj7NAbRMsTKmGBwjEzizGEgOcEdyw2IIoU8MoQFv%2BSzMKIENv%2FVNHaS%2FOski9oFUavF79WlT7X1CP5iQQaCYDIqIttUe%2Fp78HRi0KrLn3F4wVO2dkWA1M1KOBaKcHtjlhh4tbga00IcOWelHOP%2FdH3qPj%2FFM8on0vwGmAH3Ur2A%2FdlNB2NnFkcEPu1wKVun44ztOs09RtH4KOpzR242sAXUonEYGXqY5qt9BEKUpiEdbKFeT9Et0AEKk24K5Z6C0m8JuyUm0esj4Qssf66WNKGhm8iWbXvaOIzCU4z%2Bn0mfK0g21tr2i1EpHfnOoCk14ZNhU0pRFezzi4j%2F5obNraRPvgVjefezsIydnqOi4DFSwDv4H7Zuy5xjEFQBfpwiETuTMzScbRsmWUu4aWe8ln8MBEORnnJ3hrJBcEQM79SZ3uoaF76HTyQVTA%2F4j8%2FdlH8rA84zDZ%2BrcfRfV0kVZK4WOUHoEflLW%2BP7GUw5f6jxAY6pgHyQ9FTzg8k9EjgiVkgLzQ42zKvNRMsIyAUUQl9sm1fc7TAtniAK2LNibSEB5UAet%2F7tnFZ8QaLfzyG2NlYAPReVJZdmpaxpeECtJRf%2BeqalvLg6xBSTP6zZh%2FEMRC6oORl6ZovpNAnTKwlNwC9tRFbS2ujNgSqUXhO%2FuW4DpWiUJ5mdWx5Ih6oZp1NkLCe%2FDPqaLhDoTfvmuZqvMS1O5scsZho0%2B%2Fc&X-Amz-Signature=fc58bd0da53fc0033e87df3435c24b27aca8928d035dc97bbe0ba59a1583fca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPM6PFP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXWo2Wo1eDhirTATOAz2I5oYimWqkwNsT9JZIUKtPJLAiB4Inod8TK4c8ItIaUVr5BzhFnr4JvmbJko2%2BuzoCoPeyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx60wjFEuyi%2BGaoknKtwDQapI5Xe6t5F9IcvQTDWkNgtm45UN9mJwxO4tV9NvhCUnOYquz18xRJnHsExgPz6%2FF5vfI11J71R%2B2BqqAmlKoZS95MELkd54g6nc8aT3r5%2B2YS7brPfOjqjUByv6R1K3yiwHCDjULpeUBiy8gOuvywQj7NAbRMsTKmGBwjEzizGEgOcEdyw2IIoU8MoQFv%2BSzMKIENv%2FVNHaS%2FOski9oFUavF79WlT7X1CP5iQQaCYDIqIttUe%2Fp78HRi0KrLn3F4wVO2dkWA1M1KOBaKcHtjlhh4tbga00IcOWelHOP%2FdH3qPj%2FFM8on0vwGmAH3Ur2A%2FdlNB2NnFkcEPu1wKVun44ztOs09RtH4KOpzR242sAXUonEYGXqY5qt9BEKUpiEdbKFeT9Et0AEKk24K5Z6C0m8JuyUm0esj4Qssf66WNKGhm8iWbXvaOIzCU4z%2Bn0mfK0g21tr2i1EpHfnOoCk14ZNhU0pRFezzi4j%2F5obNraRPvgVjefezsIydnqOi4DFSwDv4H7Zuy5xjEFQBfpwiETuTMzScbRsmWUu4aWe8ln8MBEORnnJ3hrJBcEQM79SZ3uoaF76HTyQVTA%2F4j8%2FdlH8rA84zDZ%2BrcfRfV0kVZK4WOUHoEflLW%2BP7GUw5f6jxAY6pgHyQ9FTzg8k9EjgiVkgLzQ42zKvNRMsIyAUUQl9sm1fc7TAtniAK2LNibSEB5UAet%2F7tnFZ8QaLfzyG2NlYAPReVJZdmpaxpeECtJRf%2BeqalvLg6xBSTP6zZh%2FEMRC6oORl6ZovpNAnTKwlNwC9tRFbS2ujNgSqUXhO%2FuW4DpWiUJ5mdWx5Ih6oZp1NkLCe%2FDPqaLhDoTfvmuZqvMS1O5scsZho0%2B%2Fc&X-Amz-Signature=a7ac583f543655143a92cc286cfd82f5faf29643d7c11bb1ebfb13e3eb536e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPM6PFP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXWo2Wo1eDhirTATOAz2I5oYimWqkwNsT9JZIUKtPJLAiB4Inod8TK4c8ItIaUVr5BzhFnr4JvmbJko2%2BuzoCoPeyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx60wjFEuyi%2BGaoknKtwDQapI5Xe6t5F9IcvQTDWkNgtm45UN9mJwxO4tV9NvhCUnOYquz18xRJnHsExgPz6%2FF5vfI11J71R%2B2BqqAmlKoZS95MELkd54g6nc8aT3r5%2B2YS7brPfOjqjUByv6R1K3yiwHCDjULpeUBiy8gOuvywQj7NAbRMsTKmGBwjEzizGEgOcEdyw2IIoU8MoQFv%2BSzMKIENv%2FVNHaS%2FOski9oFUavF79WlT7X1CP5iQQaCYDIqIttUe%2Fp78HRi0KrLn3F4wVO2dkWA1M1KOBaKcHtjlhh4tbga00IcOWelHOP%2FdH3qPj%2FFM8on0vwGmAH3Ur2A%2FdlNB2NnFkcEPu1wKVun44ztOs09RtH4KOpzR242sAXUonEYGXqY5qt9BEKUpiEdbKFeT9Et0AEKk24K5Z6C0m8JuyUm0esj4Qssf66WNKGhm8iWbXvaOIzCU4z%2Bn0mfK0g21tr2i1EpHfnOoCk14ZNhU0pRFezzi4j%2F5obNraRPvgVjefezsIydnqOi4DFSwDv4H7Zuy5xjEFQBfpwiETuTMzScbRsmWUu4aWe8ln8MBEORnnJ3hrJBcEQM79SZ3uoaF76HTyQVTA%2F4j8%2FdlH8rA84zDZ%2BrcfRfV0kVZK4WOUHoEflLW%2BP7GUw5f6jxAY6pgHyQ9FTzg8k9EjgiVkgLzQ42zKvNRMsIyAUUQl9sm1fc7TAtniAK2LNibSEB5UAet%2F7tnFZ8QaLfzyG2NlYAPReVJZdmpaxpeECtJRf%2BeqalvLg6xBSTP6zZh%2FEMRC6oORl6ZovpNAnTKwlNwC9tRFbS2ujNgSqUXhO%2FuW4DpWiUJ5mdWx5Ih6oZp1NkLCe%2FDPqaLhDoTfvmuZqvMS1O5scsZho0%2B%2Fc&X-Amz-Signature=b2e68abd37aeba9e0545422c40dea43b52d71d2bdb4791c9591e52b579c94c83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRPM6PFP%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEXWo2Wo1eDhirTATOAz2I5oYimWqkwNsT9JZIUKtPJLAiB4Inod8TK4c8ItIaUVr5BzhFnr4JvmbJko2%2BuzoCoPeyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMx60wjFEuyi%2BGaoknKtwDQapI5Xe6t5F9IcvQTDWkNgtm45UN9mJwxO4tV9NvhCUnOYquz18xRJnHsExgPz6%2FF5vfI11J71R%2B2BqqAmlKoZS95MELkd54g6nc8aT3r5%2B2YS7brPfOjqjUByv6R1K3yiwHCDjULpeUBiy8gOuvywQj7NAbRMsTKmGBwjEzizGEgOcEdyw2IIoU8MoQFv%2BSzMKIENv%2FVNHaS%2FOski9oFUavF79WlT7X1CP5iQQaCYDIqIttUe%2Fp78HRi0KrLn3F4wVO2dkWA1M1KOBaKcHtjlhh4tbga00IcOWelHOP%2FdH3qPj%2FFM8on0vwGmAH3Ur2A%2FdlNB2NnFkcEPu1wKVun44ztOs09RtH4KOpzR242sAXUonEYGXqY5qt9BEKUpiEdbKFeT9Et0AEKk24K5Z6C0m8JuyUm0esj4Qssf66WNKGhm8iWbXvaOIzCU4z%2Bn0mfK0g21tr2i1EpHfnOoCk14ZNhU0pRFezzi4j%2F5obNraRPvgVjefezsIydnqOi4DFSwDv4H7Zuy5xjEFQBfpwiETuTMzScbRsmWUu4aWe8ln8MBEORnnJ3hrJBcEQM79SZ3uoaF76HTyQVTA%2F4j8%2FdlH8rA84zDZ%2BrcfRfV0kVZK4WOUHoEflLW%2BP7GUw5f6jxAY6pgHyQ9FTzg8k9EjgiVkgLzQ42zKvNRMsIyAUUQl9sm1fc7TAtniAK2LNibSEB5UAet%2F7tnFZ8QaLfzyG2NlYAPReVJZdmpaxpeECtJRf%2BeqalvLg6xBSTP6zZh%2FEMRC6oORl6ZovpNAnTKwlNwC9tRFbS2ujNgSqUXhO%2FuW4DpWiUJ5mdWx5Ih6oZp1NkLCe%2FDPqaLhDoTfvmuZqvMS1O5scsZho0%2B%2Fc&X-Amz-Signature=fa3c34ca474e03fe5ca47fd4a20ea1323834a259a8bb055469df85d87fc9f6e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
