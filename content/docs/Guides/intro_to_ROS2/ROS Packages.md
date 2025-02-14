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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN462TCD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQConzn4pKA8hieS1aCja2pwCiIGHFjsHlf0BgZC%2BH5GMAIgO3maxeusmakTEkYMLK6kwkvjKTX%2B3V4llaHZ19f87SMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKHknfYwFf19qKzqsircA3puFOYMfl69Y7Nw03iCmzAQRdmyPctUCiUaEcU3EtIyygtAfRA0EoQBhJ5txvQkzfOgeZzLugOU1c%2BV%2FIWsvWO%2BHgEzXi63GnWco18XbDgp9MNGai0lAaTHzF4rwCEEIyj4C4ojOYxlNMiK%2BjYhS0ePz2eXGMmn0rxzvMS7iXDHgcuXOPem0eR%2FduQTw0NmLVvcUcqD8Ofn3oA%2B0VQ%2B4qJyN3HsSAeVUmEqYUdQoTv0fPG3QJ4fAQti140YHpMo%2BsZ%2F4EjFRnVCJfOLyMKpPJNnvAudT6ld0RBuWa6IOekl2pNlaSi085ucNV4mcef%2FlKr1ATvJvC%2FXH6H1qeWx0UVp9%2BoMxl8AV765PlJsK2R1QEcnxfNCRQ8wCLsf0k99Jz1inlMX8coYgfe0RV3gd0STh%2FTPTVb8AHJZ3KLwPNMih1KEOxID%2FbNq2O40nO8%2BsxDUSt0Wsqcx7dNtfyigfWpYV2%2Fkn8ghAZiUVZsRqk2zxVRPljtuH%2Fa%2BtKCyo2GaSq8R50mp9NutfLLHuNnDnBF%2F1ok74kRBtSl5Osdk%2FBCDr7L0%2BZbP571jQlob8ciS3EvjuppVxvhR%2BszQnAd0FsrMXDs8eS%2F04RsvbrPPOHDBeDLlRCij1%2Bwk5YtYMNvqvL0GOqUBVDkkJLkTNYYuVf7WlxLlyhmvyRh9whpaf%2Bis2aTaUkPqP3d2BGEsTQrbG9BtAfq9BJ0XMescZ4teoQ9VF%2BQEx9mebKlGJzlvHwtGRj3%2FyJenVtedfXG%2B1%2BeLoEesTXF7LQU0VhKP5%2BG4BpK%2Bb8wZzgwjQ9Ns00dQbSh2mJSAAL%2FgJpPHMvPj0wbJxlYQx77yT3hhLLDFqXwqKca9OARra%2F1COAN3&X-Amz-Signature=5fd31de926c3f154564f7f8c73cf4b3271133328718847c22864d033186206dc&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN462TCD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQConzn4pKA8hieS1aCja2pwCiIGHFjsHlf0BgZC%2BH5GMAIgO3maxeusmakTEkYMLK6kwkvjKTX%2B3V4llaHZ19f87SMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKHknfYwFf19qKzqsircA3puFOYMfl69Y7Nw03iCmzAQRdmyPctUCiUaEcU3EtIyygtAfRA0EoQBhJ5txvQkzfOgeZzLugOU1c%2BV%2FIWsvWO%2BHgEzXi63GnWco18XbDgp9MNGai0lAaTHzF4rwCEEIyj4C4ojOYxlNMiK%2BjYhS0ePz2eXGMmn0rxzvMS7iXDHgcuXOPem0eR%2FduQTw0NmLVvcUcqD8Ofn3oA%2B0VQ%2B4qJyN3HsSAeVUmEqYUdQoTv0fPG3QJ4fAQti140YHpMo%2BsZ%2F4EjFRnVCJfOLyMKpPJNnvAudT6ld0RBuWa6IOekl2pNlaSi085ucNV4mcef%2FlKr1ATvJvC%2FXH6H1qeWx0UVp9%2BoMxl8AV765PlJsK2R1QEcnxfNCRQ8wCLsf0k99Jz1inlMX8coYgfe0RV3gd0STh%2FTPTVb8AHJZ3KLwPNMih1KEOxID%2FbNq2O40nO8%2BsxDUSt0Wsqcx7dNtfyigfWpYV2%2Fkn8ghAZiUVZsRqk2zxVRPljtuH%2Fa%2BtKCyo2GaSq8R50mp9NutfLLHuNnDnBF%2F1ok74kRBtSl5Osdk%2FBCDr7L0%2BZbP571jQlob8ciS3EvjuppVxvhR%2BszQnAd0FsrMXDs8eS%2F04RsvbrPPOHDBeDLlRCij1%2Bwk5YtYMNvqvL0GOqUBVDkkJLkTNYYuVf7WlxLlyhmvyRh9whpaf%2Bis2aTaUkPqP3d2BGEsTQrbG9BtAfq9BJ0XMescZ4teoQ9VF%2BQEx9mebKlGJzlvHwtGRj3%2FyJenVtedfXG%2B1%2BeLoEesTXF7LQU0VhKP5%2BG4BpK%2Bb8wZzgwjQ9Ns00dQbSh2mJSAAL%2FgJpPHMvPj0wbJxlYQx77yT3hhLLDFqXwqKca9OARra%2F1COAN3&X-Amz-Signature=b0341c07713b37ee10e77624fc5a6dbce7eee3378891cc11abb4e7955f7caf69&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN462TCD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQConzn4pKA8hieS1aCja2pwCiIGHFjsHlf0BgZC%2BH5GMAIgO3maxeusmakTEkYMLK6kwkvjKTX%2B3V4llaHZ19f87SMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKHknfYwFf19qKzqsircA3puFOYMfl69Y7Nw03iCmzAQRdmyPctUCiUaEcU3EtIyygtAfRA0EoQBhJ5txvQkzfOgeZzLugOU1c%2BV%2FIWsvWO%2BHgEzXi63GnWco18XbDgp9MNGai0lAaTHzF4rwCEEIyj4C4ojOYxlNMiK%2BjYhS0ePz2eXGMmn0rxzvMS7iXDHgcuXOPem0eR%2FduQTw0NmLVvcUcqD8Ofn3oA%2B0VQ%2B4qJyN3HsSAeVUmEqYUdQoTv0fPG3QJ4fAQti140YHpMo%2BsZ%2F4EjFRnVCJfOLyMKpPJNnvAudT6ld0RBuWa6IOekl2pNlaSi085ucNV4mcef%2FlKr1ATvJvC%2FXH6H1qeWx0UVp9%2BoMxl8AV765PlJsK2R1QEcnxfNCRQ8wCLsf0k99Jz1inlMX8coYgfe0RV3gd0STh%2FTPTVb8AHJZ3KLwPNMih1KEOxID%2FbNq2O40nO8%2BsxDUSt0Wsqcx7dNtfyigfWpYV2%2Fkn8ghAZiUVZsRqk2zxVRPljtuH%2Fa%2BtKCyo2GaSq8R50mp9NutfLLHuNnDnBF%2F1ok74kRBtSl5Osdk%2FBCDr7L0%2BZbP571jQlob8ciS3EvjuppVxvhR%2BszQnAd0FsrMXDs8eS%2F04RsvbrPPOHDBeDLlRCij1%2Bwk5YtYMNvqvL0GOqUBVDkkJLkTNYYuVf7WlxLlyhmvyRh9whpaf%2Bis2aTaUkPqP3d2BGEsTQrbG9BtAfq9BJ0XMescZ4teoQ9VF%2BQEx9mebKlGJzlvHwtGRj3%2FyJenVtedfXG%2B1%2BeLoEesTXF7LQU0VhKP5%2BG4BpK%2Bb8wZzgwjQ9Ns00dQbSh2mJSAAL%2FgJpPHMvPj0wbJxlYQx77yT3hhLLDFqXwqKca9OARra%2F1COAN3&X-Amz-Signature=e8d945f905e1a41f8090cf2f4940d25053f5ae2c1e925658b1520c3a36d84392&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN462TCD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQConzn4pKA8hieS1aCja2pwCiIGHFjsHlf0BgZC%2BH5GMAIgO3maxeusmakTEkYMLK6kwkvjKTX%2B3V4llaHZ19f87SMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKHknfYwFf19qKzqsircA3puFOYMfl69Y7Nw03iCmzAQRdmyPctUCiUaEcU3EtIyygtAfRA0EoQBhJ5txvQkzfOgeZzLugOU1c%2BV%2FIWsvWO%2BHgEzXi63GnWco18XbDgp9MNGai0lAaTHzF4rwCEEIyj4C4ojOYxlNMiK%2BjYhS0ePz2eXGMmn0rxzvMS7iXDHgcuXOPem0eR%2FduQTw0NmLVvcUcqD8Ofn3oA%2B0VQ%2B4qJyN3HsSAeVUmEqYUdQoTv0fPG3QJ4fAQti140YHpMo%2BsZ%2F4EjFRnVCJfOLyMKpPJNnvAudT6ld0RBuWa6IOekl2pNlaSi085ucNV4mcef%2FlKr1ATvJvC%2FXH6H1qeWx0UVp9%2BoMxl8AV765PlJsK2R1QEcnxfNCRQ8wCLsf0k99Jz1inlMX8coYgfe0RV3gd0STh%2FTPTVb8AHJZ3KLwPNMih1KEOxID%2FbNq2O40nO8%2BsxDUSt0Wsqcx7dNtfyigfWpYV2%2Fkn8ghAZiUVZsRqk2zxVRPljtuH%2Fa%2BtKCyo2GaSq8R50mp9NutfLLHuNnDnBF%2F1ok74kRBtSl5Osdk%2FBCDr7L0%2BZbP571jQlob8ciS3EvjuppVxvhR%2BszQnAd0FsrMXDs8eS%2F04RsvbrPPOHDBeDLlRCij1%2Bwk5YtYMNvqvL0GOqUBVDkkJLkTNYYuVf7WlxLlyhmvyRh9whpaf%2Bis2aTaUkPqP3d2BGEsTQrbG9BtAfq9BJ0XMescZ4teoQ9VF%2BQEx9mebKlGJzlvHwtGRj3%2FyJenVtedfXG%2B1%2BeLoEesTXF7LQU0VhKP5%2BG4BpK%2Bb8wZzgwjQ9Ns00dQbSh2mJSAAL%2FgJpPHMvPj0wbJxlYQx77yT3hhLLDFqXwqKca9OARra%2F1COAN3&X-Amz-Signature=0ec2c5b7c16e82ee6dfb1de0416ab5a72dec52d8c4fef277ee94a5206b6ac7d5&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN462TCD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQConzn4pKA8hieS1aCja2pwCiIGHFjsHlf0BgZC%2BH5GMAIgO3maxeusmakTEkYMLK6kwkvjKTX%2B3V4llaHZ19f87SMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKHknfYwFf19qKzqsircA3puFOYMfl69Y7Nw03iCmzAQRdmyPctUCiUaEcU3EtIyygtAfRA0EoQBhJ5txvQkzfOgeZzLugOU1c%2BV%2FIWsvWO%2BHgEzXi63GnWco18XbDgp9MNGai0lAaTHzF4rwCEEIyj4C4ojOYxlNMiK%2BjYhS0ePz2eXGMmn0rxzvMS7iXDHgcuXOPem0eR%2FduQTw0NmLVvcUcqD8Ofn3oA%2B0VQ%2B4qJyN3HsSAeVUmEqYUdQoTv0fPG3QJ4fAQti140YHpMo%2BsZ%2F4EjFRnVCJfOLyMKpPJNnvAudT6ld0RBuWa6IOekl2pNlaSi085ucNV4mcef%2FlKr1ATvJvC%2FXH6H1qeWx0UVp9%2BoMxl8AV765PlJsK2R1QEcnxfNCRQ8wCLsf0k99Jz1inlMX8coYgfe0RV3gd0STh%2FTPTVb8AHJZ3KLwPNMih1KEOxID%2FbNq2O40nO8%2BsxDUSt0Wsqcx7dNtfyigfWpYV2%2Fkn8ghAZiUVZsRqk2zxVRPljtuH%2Fa%2BtKCyo2GaSq8R50mp9NutfLLHuNnDnBF%2F1ok74kRBtSl5Osdk%2FBCDr7L0%2BZbP571jQlob8ciS3EvjuppVxvhR%2BszQnAd0FsrMXDs8eS%2F04RsvbrPPOHDBeDLlRCij1%2Bwk5YtYMNvqvL0GOqUBVDkkJLkTNYYuVf7WlxLlyhmvyRh9whpaf%2Bis2aTaUkPqP3d2BGEsTQrbG9BtAfq9BJ0XMescZ4teoQ9VF%2BQEx9mebKlGJzlvHwtGRj3%2FyJenVtedfXG%2B1%2BeLoEesTXF7LQU0VhKP5%2BG4BpK%2Bb8wZzgwjQ9Ns00dQbSh2mJSAAL%2FgJpPHMvPj0wbJxlYQx77yT3hhLLDFqXwqKca9OARra%2F1COAN3&X-Amz-Signature=895b2580738b0ea110d0d1e89a308a215ec90e01c7a1661654972f5e6ddb4ee0&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN462TCD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQConzn4pKA8hieS1aCja2pwCiIGHFjsHlf0BgZC%2BH5GMAIgO3maxeusmakTEkYMLK6kwkvjKTX%2B3V4llaHZ19f87SMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKHknfYwFf19qKzqsircA3puFOYMfl69Y7Nw03iCmzAQRdmyPctUCiUaEcU3EtIyygtAfRA0EoQBhJ5txvQkzfOgeZzLugOU1c%2BV%2FIWsvWO%2BHgEzXi63GnWco18XbDgp9MNGai0lAaTHzF4rwCEEIyj4C4ojOYxlNMiK%2BjYhS0ePz2eXGMmn0rxzvMS7iXDHgcuXOPem0eR%2FduQTw0NmLVvcUcqD8Ofn3oA%2B0VQ%2B4qJyN3HsSAeVUmEqYUdQoTv0fPG3QJ4fAQti140YHpMo%2BsZ%2F4EjFRnVCJfOLyMKpPJNnvAudT6ld0RBuWa6IOekl2pNlaSi085ucNV4mcef%2FlKr1ATvJvC%2FXH6H1qeWx0UVp9%2BoMxl8AV765PlJsK2R1QEcnxfNCRQ8wCLsf0k99Jz1inlMX8coYgfe0RV3gd0STh%2FTPTVb8AHJZ3KLwPNMih1KEOxID%2FbNq2O40nO8%2BsxDUSt0Wsqcx7dNtfyigfWpYV2%2Fkn8ghAZiUVZsRqk2zxVRPljtuH%2Fa%2BtKCyo2GaSq8R50mp9NutfLLHuNnDnBF%2F1ok74kRBtSl5Osdk%2FBCDr7L0%2BZbP571jQlob8ciS3EvjuppVxvhR%2BszQnAd0FsrMXDs8eS%2F04RsvbrPPOHDBeDLlRCij1%2Bwk5YtYMNvqvL0GOqUBVDkkJLkTNYYuVf7WlxLlyhmvyRh9whpaf%2Bis2aTaUkPqP3d2BGEsTQrbG9BtAfq9BJ0XMescZ4teoQ9VF%2BQEx9mebKlGJzlvHwtGRj3%2FyJenVtedfXG%2B1%2BeLoEesTXF7LQU0VhKP5%2BG4BpK%2Bb8wZzgwjQ9Ns00dQbSh2mJSAAL%2FgJpPHMvPj0wbJxlYQx77yT3hhLLDFqXwqKca9OARra%2F1COAN3&X-Amz-Signature=0525d3d504da9fa646ddf67f62b0a1b920117e96880c4d5188f2f4b960203b35&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN462TCD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T160855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQConzn4pKA8hieS1aCja2pwCiIGHFjsHlf0BgZC%2BH5GMAIgO3maxeusmakTEkYMLK6kwkvjKTX%2B3V4llaHZ19f87SMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKHknfYwFf19qKzqsircA3puFOYMfl69Y7Nw03iCmzAQRdmyPctUCiUaEcU3EtIyygtAfRA0EoQBhJ5txvQkzfOgeZzLugOU1c%2BV%2FIWsvWO%2BHgEzXi63GnWco18XbDgp9MNGai0lAaTHzF4rwCEEIyj4C4ojOYxlNMiK%2BjYhS0ePz2eXGMmn0rxzvMS7iXDHgcuXOPem0eR%2FduQTw0NmLVvcUcqD8Ofn3oA%2B0VQ%2B4qJyN3HsSAeVUmEqYUdQoTv0fPG3QJ4fAQti140YHpMo%2BsZ%2F4EjFRnVCJfOLyMKpPJNnvAudT6ld0RBuWa6IOekl2pNlaSi085ucNV4mcef%2FlKr1ATvJvC%2FXH6H1qeWx0UVp9%2BoMxl8AV765PlJsK2R1QEcnxfNCRQ8wCLsf0k99Jz1inlMX8coYgfe0RV3gd0STh%2FTPTVb8AHJZ3KLwPNMih1KEOxID%2FbNq2O40nO8%2BsxDUSt0Wsqcx7dNtfyigfWpYV2%2Fkn8ghAZiUVZsRqk2zxVRPljtuH%2Fa%2BtKCyo2GaSq8R50mp9NutfLLHuNnDnBF%2F1ok74kRBtSl5Osdk%2FBCDr7L0%2BZbP571jQlob8ciS3EvjuppVxvhR%2BszQnAd0FsrMXDs8eS%2F04RsvbrPPOHDBeDLlRCij1%2Bwk5YtYMNvqvL0GOqUBVDkkJLkTNYYuVf7WlxLlyhmvyRh9whpaf%2Bis2aTaUkPqP3d2BGEsTQrbG9BtAfq9BJ0XMescZ4teoQ9VF%2BQEx9mebKlGJzlvHwtGRj3%2FyJenVtedfXG%2B1%2BeLoEesTXF7LQU0VhKP5%2BG4BpK%2Bb8wZzgwjQ9Ns00dQbSh2mJSAAL%2FgJpPHMvPj0wbJxlYQx77yT3hhLLDFqXwqKca9OARra%2F1COAN3&X-Amz-Signature=286822a299f184d380c4c29c2b75e7055157d0bf6a2194af2bd9ad17650f3d3b&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
