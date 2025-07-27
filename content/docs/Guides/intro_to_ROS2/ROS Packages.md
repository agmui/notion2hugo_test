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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDP2LTCA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDU3FURGlVb6zGJduFm4VLzgI07cairpiPq5QIOFXYYGAiEAkBcWz%2FOyrWkJd3uw5QIk9QDOHFK0y1cL1M3vL4bcwsMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNNpKLF%2B7pDzchCegCrcA4p0PHKWWRVdqVTG2%2Frazo2lGUwmRwX51K0rlTcoRfWceXZvsXPyMKmBvQ0nZluA58y%2F%2FIB2%2FdnguIBlGDVKOw1BkjaYEP21fdwvydIK2i8EEMA7Sbac9Gpk0fNg6DLeDeKHtHrlzab7lpQDJDgsl%2BnkYr0kUfQjAIrX2XhtDP2FNMydhVuQfTKxlUZZ2uNOEM2WETte3RxeISiG5cg3CiehgCnqOXSR6TdU%2BFSSTL2ASw%2BX4D0c9esj0u6xiA9EvBdXaKGgfqaXalrU9RDKGWZ9fAVH4G1keO6Tmv5iRkKk3%2FzPN4tnrEhGblE8uGsf5C6Zrj1yAqXoRaKKPVFaoRMUKjb0f6O53Hr%2B2nxRbeMG7ZHpY0kvh1qh7AezWOXsjh7rRxPPjGOY2SVuQpH5%2B%2FQRY2JeYaKNN%2FUcL%2FsQR0I5YfJAnSda%2FtacmuPWvLGq4WFFIwvyNxNc5QhPyQPjESwIyJZ%2FOsujXNVoI5%2FnVu8QvuI0BGKrzxFcx8qt4PgWNK1BGty5UIvw%2B4HqfgPg3nFQXBNaQNqcS4dBvqF1pp%2FY3Y3aktCvCpEEuEe%2B7rZRg8U0Dai8HCWllZo7Jmo8gbh6TJJMundhDplbQJujup8fBlEZG1llwGM9BRKDMOzgl8QGOqUBoeUYQdCAi1hOwN%2FUXjc3BFi3xYHZa5dx5TZmBY7TcCnziVuFjFhBBBfnwegL6u3%2BQpA60BqX%2FM9VcRSupjXT%2BcfaXVbB%2Bi9W85oCVrRd5lPf%2FyzbMDEz3tP0lXboTRRwW86ch5hoiivoRsniwNuiKMQr4h5AvqcAlIl4uoj1lnrKAhFAq%2BoNZcSYDzi7i%2ByS%2F%2FwhIu6IPyZ%2FeERxWiO%2BSK4ENGfN&X-Amz-Signature=6eb81a7ae64fc01bb84f4e85582f872ab018a4e3cf61de6b360486ec28d22d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDP2LTCA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDU3FURGlVb6zGJduFm4VLzgI07cairpiPq5QIOFXYYGAiEAkBcWz%2FOyrWkJd3uw5QIk9QDOHFK0y1cL1M3vL4bcwsMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNNpKLF%2B7pDzchCegCrcA4p0PHKWWRVdqVTG2%2Frazo2lGUwmRwX51K0rlTcoRfWceXZvsXPyMKmBvQ0nZluA58y%2F%2FIB2%2FdnguIBlGDVKOw1BkjaYEP21fdwvydIK2i8EEMA7Sbac9Gpk0fNg6DLeDeKHtHrlzab7lpQDJDgsl%2BnkYr0kUfQjAIrX2XhtDP2FNMydhVuQfTKxlUZZ2uNOEM2WETte3RxeISiG5cg3CiehgCnqOXSR6TdU%2BFSSTL2ASw%2BX4D0c9esj0u6xiA9EvBdXaKGgfqaXalrU9RDKGWZ9fAVH4G1keO6Tmv5iRkKk3%2FzPN4tnrEhGblE8uGsf5C6Zrj1yAqXoRaKKPVFaoRMUKjb0f6O53Hr%2B2nxRbeMG7ZHpY0kvh1qh7AezWOXsjh7rRxPPjGOY2SVuQpH5%2B%2FQRY2JeYaKNN%2FUcL%2FsQR0I5YfJAnSda%2FtacmuPWvLGq4WFFIwvyNxNc5QhPyQPjESwIyJZ%2FOsujXNVoI5%2FnVu8QvuI0BGKrzxFcx8qt4PgWNK1BGty5UIvw%2B4HqfgPg3nFQXBNaQNqcS4dBvqF1pp%2FY3Y3aktCvCpEEuEe%2B7rZRg8U0Dai8HCWllZo7Jmo8gbh6TJJMundhDplbQJujup8fBlEZG1llwGM9BRKDMOzgl8QGOqUBoeUYQdCAi1hOwN%2FUXjc3BFi3xYHZa5dx5TZmBY7TcCnziVuFjFhBBBfnwegL6u3%2BQpA60BqX%2FM9VcRSupjXT%2BcfaXVbB%2Bi9W85oCVrRd5lPf%2FyzbMDEz3tP0lXboTRRwW86ch5hoiivoRsniwNuiKMQr4h5AvqcAlIl4uoj1lnrKAhFAq%2BoNZcSYDzi7i%2ByS%2F%2FwhIu6IPyZ%2FeERxWiO%2BSK4ENGfN&X-Amz-Signature=e70e9b1780924bf14ff627f48f86910e6454096397abf263b9db28c530e78240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDP2LTCA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDU3FURGlVb6zGJduFm4VLzgI07cairpiPq5QIOFXYYGAiEAkBcWz%2FOyrWkJd3uw5QIk9QDOHFK0y1cL1M3vL4bcwsMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNNpKLF%2B7pDzchCegCrcA4p0PHKWWRVdqVTG2%2Frazo2lGUwmRwX51K0rlTcoRfWceXZvsXPyMKmBvQ0nZluA58y%2F%2FIB2%2FdnguIBlGDVKOw1BkjaYEP21fdwvydIK2i8EEMA7Sbac9Gpk0fNg6DLeDeKHtHrlzab7lpQDJDgsl%2BnkYr0kUfQjAIrX2XhtDP2FNMydhVuQfTKxlUZZ2uNOEM2WETte3RxeISiG5cg3CiehgCnqOXSR6TdU%2BFSSTL2ASw%2BX4D0c9esj0u6xiA9EvBdXaKGgfqaXalrU9RDKGWZ9fAVH4G1keO6Tmv5iRkKk3%2FzPN4tnrEhGblE8uGsf5C6Zrj1yAqXoRaKKPVFaoRMUKjb0f6O53Hr%2B2nxRbeMG7ZHpY0kvh1qh7AezWOXsjh7rRxPPjGOY2SVuQpH5%2B%2FQRY2JeYaKNN%2FUcL%2FsQR0I5YfJAnSda%2FtacmuPWvLGq4WFFIwvyNxNc5QhPyQPjESwIyJZ%2FOsujXNVoI5%2FnVu8QvuI0BGKrzxFcx8qt4PgWNK1BGty5UIvw%2B4HqfgPg3nFQXBNaQNqcS4dBvqF1pp%2FY3Y3aktCvCpEEuEe%2B7rZRg8U0Dai8HCWllZo7Jmo8gbh6TJJMundhDplbQJujup8fBlEZG1llwGM9BRKDMOzgl8QGOqUBoeUYQdCAi1hOwN%2FUXjc3BFi3xYHZa5dx5TZmBY7TcCnziVuFjFhBBBfnwegL6u3%2BQpA60BqX%2FM9VcRSupjXT%2BcfaXVbB%2Bi9W85oCVrRd5lPf%2FyzbMDEz3tP0lXboTRRwW86ch5hoiivoRsniwNuiKMQr4h5AvqcAlIl4uoj1lnrKAhFAq%2BoNZcSYDzi7i%2ByS%2F%2FwhIu6IPyZ%2FeERxWiO%2BSK4ENGfN&X-Amz-Signature=ed64f382346dbfa0bd2409476a9c66d6efa6205115679284ce8ed6acbfb7750b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDP2LTCA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDU3FURGlVb6zGJduFm4VLzgI07cairpiPq5QIOFXYYGAiEAkBcWz%2FOyrWkJd3uw5QIk9QDOHFK0y1cL1M3vL4bcwsMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNNpKLF%2B7pDzchCegCrcA4p0PHKWWRVdqVTG2%2Frazo2lGUwmRwX51K0rlTcoRfWceXZvsXPyMKmBvQ0nZluA58y%2F%2FIB2%2FdnguIBlGDVKOw1BkjaYEP21fdwvydIK2i8EEMA7Sbac9Gpk0fNg6DLeDeKHtHrlzab7lpQDJDgsl%2BnkYr0kUfQjAIrX2XhtDP2FNMydhVuQfTKxlUZZ2uNOEM2WETte3RxeISiG5cg3CiehgCnqOXSR6TdU%2BFSSTL2ASw%2BX4D0c9esj0u6xiA9EvBdXaKGgfqaXalrU9RDKGWZ9fAVH4G1keO6Tmv5iRkKk3%2FzPN4tnrEhGblE8uGsf5C6Zrj1yAqXoRaKKPVFaoRMUKjb0f6O53Hr%2B2nxRbeMG7ZHpY0kvh1qh7AezWOXsjh7rRxPPjGOY2SVuQpH5%2B%2FQRY2JeYaKNN%2FUcL%2FsQR0I5YfJAnSda%2FtacmuPWvLGq4WFFIwvyNxNc5QhPyQPjESwIyJZ%2FOsujXNVoI5%2FnVu8QvuI0BGKrzxFcx8qt4PgWNK1BGty5UIvw%2B4HqfgPg3nFQXBNaQNqcS4dBvqF1pp%2FY3Y3aktCvCpEEuEe%2B7rZRg8U0Dai8HCWllZo7Jmo8gbh6TJJMundhDplbQJujup8fBlEZG1llwGM9BRKDMOzgl8QGOqUBoeUYQdCAi1hOwN%2FUXjc3BFi3xYHZa5dx5TZmBY7TcCnziVuFjFhBBBfnwegL6u3%2BQpA60BqX%2FM9VcRSupjXT%2BcfaXVbB%2Bi9W85oCVrRd5lPf%2FyzbMDEz3tP0lXboTRRwW86ch5hoiivoRsniwNuiKMQr4h5AvqcAlIl4uoj1lnrKAhFAq%2BoNZcSYDzi7i%2ByS%2F%2FwhIu6IPyZ%2FeERxWiO%2BSK4ENGfN&X-Amz-Signature=00afc97ad4f9a01ef30dea5980f6bde073189a968e152d863c1114774975b148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDP2LTCA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDU3FURGlVb6zGJduFm4VLzgI07cairpiPq5QIOFXYYGAiEAkBcWz%2FOyrWkJd3uw5QIk9QDOHFK0y1cL1M3vL4bcwsMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNNpKLF%2B7pDzchCegCrcA4p0PHKWWRVdqVTG2%2Frazo2lGUwmRwX51K0rlTcoRfWceXZvsXPyMKmBvQ0nZluA58y%2F%2FIB2%2FdnguIBlGDVKOw1BkjaYEP21fdwvydIK2i8EEMA7Sbac9Gpk0fNg6DLeDeKHtHrlzab7lpQDJDgsl%2BnkYr0kUfQjAIrX2XhtDP2FNMydhVuQfTKxlUZZ2uNOEM2WETte3RxeISiG5cg3CiehgCnqOXSR6TdU%2BFSSTL2ASw%2BX4D0c9esj0u6xiA9EvBdXaKGgfqaXalrU9RDKGWZ9fAVH4G1keO6Tmv5iRkKk3%2FzPN4tnrEhGblE8uGsf5C6Zrj1yAqXoRaKKPVFaoRMUKjb0f6O53Hr%2B2nxRbeMG7ZHpY0kvh1qh7AezWOXsjh7rRxPPjGOY2SVuQpH5%2B%2FQRY2JeYaKNN%2FUcL%2FsQR0I5YfJAnSda%2FtacmuPWvLGq4WFFIwvyNxNc5QhPyQPjESwIyJZ%2FOsujXNVoI5%2FnVu8QvuI0BGKrzxFcx8qt4PgWNK1BGty5UIvw%2B4HqfgPg3nFQXBNaQNqcS4dBvqF1pp%2FY3Y3aktCvCpEEuEe%2B7rZRg8U0Dai8HCWllZo7Jmo8gbh6TJJMundhDplbQJujup8fBlEZG1llwGM9BRKDMOzgl8QGOqUBoeUYQdCAi1hOwN%2FUXjc3BFi3xYHZa5dx5TZmBY7TcCnziVuFjFhBBBfnwegL6u3%2BQpA60BqX%2FM9VcRSupjXT%2BcfaXVbB%2Bi9W85oCVrRd5lPf%2FyzbMDEz3tP0lXboTRRwW86ch5hoiivoRsniwNuiKMQr4h5AvqcAlIl4uoj1lnrKAhFAq%2BoNZcSYDzi7i%2ByS%2F%2FwhIu6IPyZ%2FeERxWiO%2BSK4ENGfN&X-Amz-Signature=7d403a593da1d7d58a358fc53c7fc72803a3bf732ba3944847089dc1208f292e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDP2LTCA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132346Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDU3FURGlVb6zGJduFm4VLzgI07cairpiPq5QIOFXYYGAiEAkBcWz%2FOyrWkJd3uw5QIk9QDOHFK0y1cL1M3vL4bcwsMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNNpKLF%2B7pDzchCegCrcA4p0PHKWWRVdqVTG2%2Frazo2lGUwmRwX51K0rlTcoRfWceXZvsXPyMKmBvQ0nZluA58y%2F%2FIB2%2FdnguIBlGDVKOw1BkjaYEP21fdwvydIK2i8EEMA7Sbac9Gpk0fNg6DLeDeKHtHrlzab7lpQDJDgsl%2BnkYr0kUfQjAIrX2XhtDP2FNMydhVuQfTKxlUZZ2uNOEM2WETte3RxeISiG5cg3CiehgCnqOXSR6TdU%2BFSSTL2ASw%2BX4D0c9esj0u6xiA9EvBdXaKGgfqaXalrU9RDKGWZ9fAVH4G1keO6Tmv5iRkKk3%2FzPN4tnrEhGblE8uGsf5C6Zrj1yAqXoRaKKPVFaoRMUKjb0f6O53Hr%2B2nxRbeMG7ZHpY0kvh1qh7AezWOXsjh7rRxPPjGOY2SVuQpH5%2B%2FQRY2JeYaKNN%2FUcL%2FsQR0I5YfJAnSda%2FtacmuPWvLGq4WFFIwvyNxNc5QhPyQPjESwIyJZ%2FOsujXNVoI5%2FnVu8QvuI0BGKrzxFcx8qt4PgWNK1BGty5UIvw%2B4HqfgPg3nFQXBNaQNqcS4dBvqF1pp%2FY3Y3aktCvCpEEuEe%2B7rZRg8U0Dai8HCWllZo7Jmo8gbh6TJJMundhDplbQJujup8fBlEZG1llwGM9BRKDMOzgl8QGOqUBoeUYQdCAi1hOwN%2FUXjc3BFi3xYHZa5dx5TZmBY7TcCnziVuFjFhBBBfnwegL6u3%2BQpA60BqX%2FM9VcRSupjXT%2BcfaXVbB%2Bi9W85oCVrRd5lPf%2FyzbMDEz3tP0lXboTRRwW86ch5hoiivoRsniwNuiKMQr4h5AvqcAlIl4uoj1lnrKAhFAq%2BoNZcSYDzi7i%2ByS%2F%2FwhIu6IPyZ%2FeERxWiO%2BSK4ENGfN&X-Amz-Signature=e4c6900ec87359b7865b3c041f2ec5cc0fc90a678e37113bf5cf0349de124fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDP2LTCA%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIDU3FURGlVb6zGJduFm4VLzgI07cairpiPq5QIOFXYYGAiEAkBcWz%2FOyrWkJd3uw5QIk9QDOHFK0y1cL1M3vL4bcwsMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDNNpKLF%2B7pDzchCegCrcA4p0PHKWWRVdqVTG2%2Frazo2lGUwmRwX51K0rlTcoRfWceXZvsXPyMKmBvQ0nZluA58y%2F%2FIB2%2FdnguIBlGDVKOw1BkjaYEP21fdwvydIK2i8EEMA7Sbac9Gpk0fNg6DLeDeKHtHrlzab7lpQDJDgsl%2BnkYr0kUfQjAIrX2XhtDP2FNMydhVuQfTKxlUZZ2uNOEM2WETte3RxeISiG5cg3CiehgCnqOXSR6TdU%2BFSSTL2ASw%2BX4D0c9esj0u6xiA9EvBdXaKGgfqaXalrU9RDKGWZ9fAVH4G1keO6Tmv5iRkKk3%2FzPN4tnrEhGblE8uGsf5C6Zrj1yAqXoRaKKPVFaoRMUKjb0f6O53Hr%2B2nxRbeMG7ZHpY0kvh1qh7AezWOXsjh7rRxPPjGOY2SVuQpH5%2B%2FQRY2JeYaKNN%2FUcL%2FsQR0I5YfJAnSda%2FtacmuPWvLGq4WFFIwvyNxNc5QhPyQPjESwIyJZ%2FOsujXNVoI5%2FnVu8QvuI0BGKrzxFcx8qt4PgWNK1BGty5UIvw%2B4HqfgPg3nFQXBNaQNqcS4dBvqF1pp%2FY3Y3aktCvCpEEuEe%2B7rZRg8U0Dai8HCWllZo7Jmo8gbh6TJJMundhDplbQJujup8fBlEZG1llwGM9BRKDMOzgl8QGOqUBoeUYQdCAi1hOwN%2FUXjc3BFi3xYHZa5dx5TZmBY7TcCnziVuFjFhBBBfnwegL6u3%2BQpA60BqX%2FM9VcRSupjXT%2BcfaXVbB%2Bi9W85oCVrRd5lPf%2FyzbMDEz3tP0lXboTRRwW86ch5hoiivoRsniwNuiKMQr4h5AvqcAlIl4uoj1lnrKAhFAq%2BoNZcSYDzi7i%2ByS%2F%2FwhIu6IPyZ%2FeERxWiO%2BSK4ENGfN&X-Amz-Signature=6e2f753ec6f8ccff606da6019ca14daf497dc2a7719fd2b4513656b3a77da169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
