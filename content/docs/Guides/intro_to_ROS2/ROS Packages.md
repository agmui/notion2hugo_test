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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZJXAX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9Byp0NxgOZHfacHUH8qJbkksUe%2BRnOYjNGSHPwBkrQIhAKAkkF7JuiXsXlvplaZUWrkkoRoa8%2FhJcgzy5RM3YzIsKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuOSlGFtfP3c%2FX%2FNcq3AMboJs%2BIZBeLd6DF%2BP5mP%2FTVA4wCdqxMQccOUHfotqKe3c6o7eYF9bl70ouc1WrLT%2F5OAFVjqvqnimr4g3mkh4pBC1UQpFlUg6AiBLEDJTn07NrtTH3TOqM66QJjOVU5YNvL1sd6l%2BC2%2Br%2BtmW1htojPOxO3FSl9lMm1GOGQjlHfihMMxkr1ClFuWmxMCsu0I418WvJdx%2Fc8Zxf4urtCPHHcP257X8XV1z7Edv5tpuvUh%2F1OmZvol%2BVehny1LtVCNQyC2iDKh8CYIHvETtNBN%2F%2Bvrzbn%2BIzsXDroGSqsXT5OFkRZNFin%2FPqF41StDwScZ%2BZXyAjHdft2gm%2BiKK25IdV1RObxR2QEaPnR2DtnfJKTtHstEkJWka71JYeTSk9OpM1LHmXPRXKSEiDziEiSYc7%2FsNlnC3pqOozedCPl8fvi%2BbDgO0iUAEzPb5x7ym2MiYzoDX5cRZjSsPvgTMEfwTZoQCmRWcT2UDpq3b3qO4A7pY10NBOCLnhUDvTx8iCymPnIuAyjHfZES74v%2FYYAaUU4j5GkB8iMM2lzU8uvZy08jPbWNw1ktAA7AfEIfHaqk%2BREkH54Eirjpwh9kN9BIux%2FaMePUCokIE4DNhqZ%2FxEmdb7EGVYwUP9BDOXBzD52bO9BjqkAevsuBVrK9AlmFp5EuYjqnZmIc2lugJnrZ3nKIDPQidg1XlDaIyzWkuqlIeXnnvb6IB3BHDJ9Ebn1FeujYhv43AXCZttmQsPtD8Y8PfzzHVTSUMbpZxSA862jyBc8WsTn%2BLyc1ZA3rm21e%2B1rBFMQHHMFz8COWaDzdKqb%2Fa0%2FKdKFiCRWkN7CWsmu7qMIZ6i9%2FmcsTRMHZFrvc1irfXsQKypUhLk&X-Amz-Signature=7a28bca150c0d58b177467d973b8adaf757d43a32c17d29176bc54b29c297d34&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZJXAX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9Byp0NxgOZHfacHUH8qJbkksUe%2BRnOYjNGSHPwBkrQIhAKAkkF7JuiXsXlvplaZUWrkkoRoa8%2FhJcgzy5RM3YzIsKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuOSlGFtfP3c%2FX%2FNcq3AMboJs%2BIZBeLd6DF%2BP5mP%2FTVA4wCdqxMQccOUHfotqKe3c6o7eYF9bl70ouc1WrLT%2F5OAFVjqvqnimr4g3mkh4pBC1UQpFlUg6AiBLEDJTn07NrtTH3TOqM66QJjOVU5YNvL1sd6l%2BC2%2Br%2BtmW1htojPOxO3FSl9lMm1GOGQjlHfihMMxkr1ClFuWmxMCsu0I418WvJdx%2Fc8Zxf4urtCPHHcP257X8XV1z7Edv5tpuvUh%2F1OmZvol%2BVehny1LtVCNQyC2iDKh8CYIHvETtNBN%2F%2Bvrzbn%2BIzsXDroGSqsXT5OFkRZNFin%2FPqF41StDwScZ%2BZXyAjHdft2gm%2BiKK25IdV1RObxR2QEaPnR2DtnfJKTtHstEkJWka71JYeTSk9OpM1LHmXPRXKSEiDziEiSYc7%2FsNlnC3pqOozedCPl8fvi%2BbDgO0iUAEzPb5x7ym2MiYzoDX5cRZjSsPvgTMEfwTZoQCmRWcT2UDpq3b3qO4A7pY10NBOCLnhUDvTx8iCymPnIuAyjHfZES74v%2FYYAaUU4j5GkB8iMM2lzU8uvZy08jPbWNw1ktAA7AfEIfHaqk%2BREkH54Eirjpwh9kN9BIux%2FaMePUCokIE4DNhqZ%2FxEmdb7EGVYwUP9BDOXBzD52bO9BjqkAevsuBVrK9AlmFp5EuYjqnZmIc2lugJnrZ3nKIDPQidg1XlDaIyzWkuqlIeXnnvb6IB3BHDJ9Ebn1FeujYhv43AXCZttmQsPtD8Y8PfzzHVTSUMbpZxSA862jyBc8WsTn%2BLyc1ZA3rm21e%2B1rBFMQHHMFz8COWaDzdKqb%2Fa0%2FKdKFiCRWkN7CWsmu7qMIZ6i9%2FmcsTRMHZFrvc1irfXsQKypUhLk&X-Amz-Signature=675ffaf3403587f2a9c238b932b1920400a85eafb3bbf4aecc950170feccd9db&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZJXAX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9Byp0NxgOZHfacHUH8qJbkksUe%2BRnOYjNGSHPwBkrQIhAKAkkF7JuiXsXlvplaZUWrkkoRoa8%2FhJcgzy5RM3YzIsKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuOSlGFtfP3c%2FX%2FNcq3AMboJs%2BIZBeLd6DF%2BP5mP%2FTVA4wCdqxMQccOUHfotqKe3c6o7eYF9bl70ouc1WrLT%2F5OAFVjqvqnimr4g3mkh4pBC1UQpFlUg6AiBLEDJTn07NrtTH3TOqM66QJjOVU5YNvL1sd6l%2BC2%2Br%2BtmW1htojPOxO3FSl9lMm1GOGQjlHfihMMxkr1ClFuWmxMCsu0I418WvJdx%2Fc8Zxf4urtCPHHcP257X8XV1z7Edv5tpuvUh%2F1OmZvol%2BVehny1LtVCNQyC2iDKh8CYIHvETtNBN%2F%2Bvrzbn%2BIzsXDroGSqsXT5OFkRZNFin%2FPqF41StDwScZ%2BZXyAjHdft2gm%2BiKK25IdV1RObxR2QEaPnR2DtnfJKTtHstEkJWka71JYeTSk9OpM1LHmXPRXKSEiDziEiSYc7%2FsNlnC3pqOozedCPl8fvi%2BbDgO0iUAEzPb5x7ym2MiYzoDX5cRZjSsPvgTMEfwTZoQCmRWcT2UDpq3b3qO4A7pY10NBOCLnhUDvTx8iCymPnIuAyjHfZES74v%2FYYAaUU4j5GkB8iMM2lzU8uvZy08jPbWNw1ktAA7AfEIfHaqk%2BREkH54Eirjpwh9kN9BIux%2FaMePUCokIE4DNhqZ%2FxEmdb7EGVYwUP9BDOXBzD52bO9BjqkAevsuBVrK9AlmFp5EuYjqnZmIc2lugJnrZ3nKIDPQidg1XlDaIyzWkuqlIeXnnvb6IB3BHDJ9Ebn1FeujYhv43AXCZttmQsPtD8Y8PfzzHVTSUMbpZxSA862jyBc8WsTn%2BLyc1ZA3rm21e%2B1rBFMQHHMFz8COWaDzdKqb%2Fa0%2FKdKFiCRWkN7CWsmu7qMIZ6i9%2FmcsTRMHZFrvc1irfXsQKypUhLk&X-Amz-Signature=95981e938e8cd58f00c93c182186cbe9a2b0f9d881a3372a052fa9e8ae585393&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZJXAX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9Byp0NxgOZHfacHUH8qJbkksUe%2BRnOYjNGSHPwBkrQIhAKAkkF7JuiXsXlvplaZUWrkkoRoa8%2FhJcgzy5RM3YzIsKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuOSlGFtfP3c%2FX%2FNcq3AMboJs%2BIZBeLd6DF%2BP5mP%2FTVA4wCdqxMQccOUHfotqKe3c6o7eYF9bl70ouc1WrLT%2F5OAFVjqvqnimr4g3mkh4pBC1UQpFlUg6AiBLEDJTn07NrtTH3TOqM66QJjOVU5YNvL1sd6l%2BC2%2Br%2BtmW1htojPOxO3FSl9lMm1GOGQjlHfihMMxkr1ClFuWmxMCsu0I418WvJdx%2Fc8Zxf4urtCPHHcP257X8XV1z7Edv5tpuvUh%2F1OmZvol%2BVehny1LtVCNQyC2iDKh8CYIHvETtNBN%2F%2Bvrzbn%2BIzsXDroGSqsXT5OFkRZNFin%2FPqF41StDwScZ%2BZXyAjHdft2gm%2BiKK25IdV1RObxR2QEaPnR2DtnfJKTtHstEkJWka71JYeTSk9OpM1LHmXPRXKSEiDziEiSYc7%2FsNlnC3pqOozedCPl8fvi%2BbDgO0iUAEzPb5x7ym2MiYzoDX5cRZjSsPvgTMEfwTZoQCmRWcT2UDpq3b3qO4A7pY10NBOCLnhUDvTx8iCymPnIuAyjHfZES74v%2FYYAaUU4j5GkB8iMM2lzU8uvZy08jPbWNw1ktAA7AfEIfHaqk%2BREkH54Eirjpwh9kN9BIux%2FaMePUCokIE4DNhqZ%2FxEmdb7EGVYwUP9BDOXBzD52bO9BjqkAevsuBVrK9AlmFp5EuYjqnZmIc2lugJnrZ3nKIDPQidg1XlDaIyzWkuqlIeXnnvb6IB3BHDJ9Ebn1FeujYhv43AXCZttmQsPtD8Y8PfzzHVTSUMbpZxSA862jyBc8WsTn%2BLyc1ZA3rm21e%2B1rBFMQHHMFz8COWaDzdKqb%2Fa0%2FKdKFiCRWkN7CWsmu7qMIZ6i9%2FmcsTRMHZFrvc1irfXsQKypUhLk&X-Amz-Signature=029cc2dbf15a42dbff96f96fed6eec9d8a06cca2ea44c3c166efd9f535859c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZJXAX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9Byp0NxgOZHfacHUH8qJbkksUe%2BRnOYjNGSHPwBkrQIhAKAkkF7JuiXsXlvplaZUWrkkoRoa8%2FhJcgzy5RM3YzIsKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuOSlGFtfP3c%2FX%2FNcq3AMboJs%2BIZBeLd6DF%2BP5mP%2FTVA4wCdqxMQccOUHfotqKe3c6o7eYF9bl70ouc1WrLT%2F5OAFVjqvqnimr4g3mkh4pBC1UQpFlUg6AiBLEDJTn07NrtTH3TOqM66QJjOVU5YNvL1sd6l%2BC2%2Br%2BtmW1htojPOxO3FSl9lMm1GOGQjlHfihMMxkr1ClFuWmxMCsu0I418WvJdx%2Fc8Zxf4urtCPHHcP257X8XV1z7Edv5tpuvUh%2F1OmZvol%2BVehny1LtVCNQyC2iDKh8CYIHvETtNBN%2F%2Bvrzbn%2BIzsXDroGSqsXT5OFkRZNFin%2FPqF41StDwScZ%2BZXyAjHdft2gm%2BiKK25IdV1RObxR2QEaPnR2DtnfJKTtHstEkJWka71JYeTSk9OpM1LHmXPRXKSEiDziEiSYc7%2FsNlnC3pqOozedCPl8fvi%2BbDgO0iUAEzPb5x7ym2MiYzoDX5cRZjSsPvgTMEfwTZoQCmRWcT2UDpq3b3qO4A7pY10NBOCLnhUDvTx8iCymPnIuAyjHfZES74v%2FYYAaUU4j5GkB8iMM2lzU8uvZy08jPbWNw1ktAA7AfEIfHaqk%2BREkH54Eirjpwh9kN9BIux%2FaMePUCokIE4DNhqZ%2FxEmdb7EGVYwUP9BDOXBzD52bO9BjqkAevsuBVrK9AlmFp5EuYjqnZmIc2lugJnrZ3nKIDPQidg1XlDaIyzWkuqlIeXnnvb6IB3BHDJ9Ebn1FeujYhv43AXCZttmQsPtD8Y8PfzzHVTSUMbpZxSA862jyBc8WsTn%2BLyc1ZA3rm21e%2B1rBFMQHHMFz8COWaDzdKqb%2Fa0%2FKdKFiCRWkN7CWsmu7qMIZ6i9%2FmcsTRMHZFrvc1irfXsQKypUhLk&X-Amz-Signature=98f276bc4c904533eb0a3b465013aafa8bea379021ac37a79e0b6df77eae4879&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZJXAX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9Byp0NxgOZHfacHUH8qJbkksUe%2BRnOYjNGSHPwBkrQIhAKAkkF7JuiXsXlvplaZUWrkkoRoa8%2FhJcgzy5RM3YzIsKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuOSlGFtfP3c%2FX%2FNcq3AMboJs%2BIZBeLd6DF%2BP5mP%2FTVA4wCdqxMQccOUHfotqKe3c6o7eYF9bl70ouc1WrLT%2F5OAFVjqvqnimr4g3mkh4pBC1UQpFlUg6AiBLEDJTn07NrtTH3TOqM66QJjOVU5YNvL1sd6l%2BC2%2Br%2BtmW1htojPOxO3FSl9lMm1GOGQjlHfihMMxkr1ClFuWmxMCsu0I418WvJdx%2Fc8Zxf4urtCPHHcP257X8XV1z7Edv5tpuvUh%2F1OmZvol%2BVehny1LtVCNQyC2iDKh8CYIHvETtNBN%2F%2Bvrzbn%2BIzsXDroGSqsXT5OFkRZNFin%2FPqF41StDwScZ%2BZXyAjHdft2gm%2BiKK25IdV1RObxR2QEaPnR2DtnfJKTtHstEkJWka71JYeTSk9OpM1LHmXPRXKSEiDziEiSYc7%2FsNlnC3pqOozedCPl8fvi%2BbDgO0iUAEzPb5x7ym2MiYzoDX5cRZjSsPvgTMEfwTZoQCmRWcT2UDpq3b3qO4A7pY10NBOCLnhUDvTx8iCymPnIuAyjHfZES74v%2FYYAaUU4j5GkB8iMM2lzU8uvZy08jPbWNw1ktAA7AfEIfHaqk%2BREkH54Eirjpwh9kN9BIux%2FaMePUCokIE4DNhqZ%2FxEmdb7EGVYwUP9BDOXBzD52bO9BjqkAevsuBVrK9AlmFp5EuYjqnZmIc2lugJnrZ3nKIDPQidg1XlDaIyzWkuqlIeXnnvb6IB3BHDJ9Ebn1FeujYhv43AXCZttmQsPtD8Y8PfzzHVTSUMbpZxSA862jyBc8WsTn%2BLyc1ZA3rm21e%2B1rBFMQHHMFz8COWaDzdKqb%2Fa0%2FKdKFiCRWkN7CWsmu7qMIZ6i9%2FmcsTRMHZFrvc1irfXsQKypUhLk&X-Amz-Signature=f01aeb1e668faef8d242faad7e90094ffa57966c4247da83eea3f4cae658b658&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAZJXAX4%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T190143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCq9Byp0NxgOZHfacHUH8qJbkksUe%2BRnOYjNGSHPwBkrQIhAKAkkF7JuiXsXlvplaZUWrkkoRoa8%2FhJcgzy5RM3YzIsKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuOSlGFtfP3c%2FX%2FNcq3AMboJs%2BIZBeLd6DF%2BP5mP%2FTVA4wCdqxMQccOUHfotqKe3c6o7eYF9bl70ouc1WrLT%2F5OAFVjqvqnimr4g3mkh4pBC1UQpFlUg6AiBLEDJTn07NrtTH3TOqM66QJjOVU5YNvL1sd6l%2BC2%2Br%2BtmW1htojPOxO3FSl9lMm1GOGQjlHfihMMxkr1ClFuWmxMCsu0I418WvJdx%2Fc8Zxf4urtCPHHcP257X8XV1z7Edv5tpuvUh%2F1OmZvol%2BVehny1LtVCNQyC2iDKh8CYIHvETtNBN%2F%2Bvrzbn%2BIzsXDroGSqsXT5OFkRZNFin%2FPqF41StDwScZ%2BZXyAjHdft2gm%2BiKK25IdV1RObxR2QEaPnR2DtnfJKTtHstEkJWka71JYeTSk9OpM1LHmXPRXKSEiDziEiSYc7%2FsNlnC3pqOozedCPl8fvi%2BbDgO0iUAEzPb5x7ym2MiYzoDX5cRZjSsPvgTMEfwTZoQCmRWcT2UDpq3b3qO4A7pY10NBOCLnhUDvTx8iCymPnIuAyjHfZES74v%2FYYAaUU4j5GkB8iMM2lzU8uvZy08jPbWNw1ktAA7AfEIfHaqk%2BREkH54Eirjpwh9kN9BIux%2FaMePUCokIE4DNhqZ%2FxEmdb7EGVYwUP9BDOXBzD52bO9BjqkAevsuBVrK9AlmFp5EuYjqnZmIc2lugJnrZ3nKIDPQidg1XlDaIyzWkuqlIeXnnvb6IB3BHDJ9Ebn1FeujYhv43AXCZttmQsPtD8Y8PfzzHVTSUMbpZxSA862jyBc8WsTn%2BLyc1ZA3rm21e%2B1rBFMQHHMFz8COWaDzdKqb%2Fa0%2FKdKFiCRWkN7CWsmu7qMIZ6i9%2FmcsTRMHZFrvc1irfXsQKypUhLk&X-Amz-Signature=5e489995bbcb50c86253a32dae05019bd3562e6c4f5587145672639fdf37ecea&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
