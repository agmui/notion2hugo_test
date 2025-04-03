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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEZYHNZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA3MQ9qsRMOH3VHRCgDmI3y7Sd9VsXjtm%2F%2BQy2T%2FRi7AAiEA154xce7pG%2FImyaTniR5yzlAha8ZNSFNSWC2M6N1u3mUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzhyXULnuK6PsBxRCrcA%2FytmhFY%2Fvu8lVUG7eEIchcxZTiArVa0MZPbaAcEvuvShNqz5ucdXrBzKzDZ8YinxeAH297335NLXrqzuJvV2kGz2xwH1QZs7TEoUdluz4JpYShRnYP3QSxH9hH8LciUm3S%2FgrptXloiUkkmEzCIpA6d2ZeFC17OnJTgZjh9T3Z0abQrBZ8uymtBRcJGej8qvLI6%2BgXflo8JkzC9uJ0K2cz7EV%2BSIt%2F5wTbJzWRLkmW7s6JBvnbTVydvTu4Cd6hDr5WJ%2FDleT0qOac1tOk74%2FtmnpUR3g9r5EVgAWzpUZe7sjF%2F%2F88C4hbtyOpS6K1Furc7gcjlGbEUL1LC3k7PNvenu484b4pagt%2BLiaSPaI9vX44i8tOhUcMRNd83UdihB6zDecakn%2FqqU2Cp8rwEx9u%2BoBpTa601AMiJqB4MBTfs5eseOi0CGjpn8qro%2BOZHAlBnk%2FDr1DcmVwJ6VFohCnniJKGu75mX0JNljodkPoaANxlXkKiCLKSIQTVlFe0K9tKrcchye%2BAizo2WcHrk3n13fKOo3KoRWP%2FWPal%2BJVTHxstsDSOGJXlmLpuOwuru1M2mrxHgmoSNN6awZLZozJoO1chuzrHYIp2eTJq5xehFoEMG5IWR0JjT6pEYgMLP7t78GOqUBx%2F4XHlMEs%2Fmmd9LHlnjmsgctkq%2BwIC7WqdeMzgrcZJgO5%2FkXkF3EL2F2QS86dQ9%2Bj1PH42WVxaFj59NcPHBy2%2FkgGRHUdZo9KiwYqFXH0AXAJjSCtBwsNGw5j3oZOtvxNkdzcubAcQqCZS29ky8VieZYCtqGd7CsRaWWNDGqOeP0sQZdRzXd%2BQMwE3A%2BkyJHYjg1V%2Bqy8%2FLMZLcmUhnXfszQqV0j&X-Amz-Signature=1be6989fc06883757cf0cbfdfe378681ecc455f5f5108b8c39ccae3150a9c092&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEZYHNZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA3MQ9qsRMOH3VHRCgDmI3y7Sd9VsXjtm%2F%2BQy2T%2FRi7AAiEA154xce7pG%2FImyaTniR5yzlAha8ZNSFNSWC2M6N1u3mUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzhyXULnuK6PsBxRCrcA%2FytmhFY%2Fvu8lVUG7eEIchcxZTiArVa0MZPbaAcEvuvShNqz5ucdXrBzKzDZ8YinxeAH297335NLXrqzuJvV2kGz2xwH1QZs7TEoUdluz4JpYShRnYP3QSxH9hH8LciUm3S%2FgrptXloiUkkmEzCIpA6d2ZeFC17OnJTgZjh9T3Z0abQrBZ8uymtBRcJGej8qvLI6%2BgXflo8JkzC9uJ0K2cz7EV%2BSIt%2F5wTbJzWRLkmW7s6JBvnbTVydvTu4Cd6hDr5WJ%2FDleT0qOac1tOk74%2FtmnpUR3g9r5EVgAWzpUZe7sjF%2F%2F88C4hbtyOpS6K1Furc7gcjlGbEUL1LC3k7PNvenu484b4pagt%2BLiaSPaI9vX44i8tOhUcMRNd83UdihB6zDecakn%2FqqU2Cp8rwEx9u%2BoBpTa601AMiJqB4MBTfs5eseOi0CGjpn8qro%2BOZHAlBnk%2FDr1DcmVwJ6VFohCnniJKGu75mX0JNljodkPoaANxlXkKiCLKSIQTVlFe0K9tKrcchye%2BAizo2WcHrk3n13fKOo3KoRWP%2FWPal%2BJVTHxstsDSOGJXlmLpuOwuru1M2mrxHgmoSNN6awZLZozJoO1chuzrHYIp2eTJq5xehFoEMG5IWR0JjT6pEYgMLP7t78GOqUBx%2F4XHlMEs%2Fmmd9LHlnjmsgctkq%2BwIC7WqdeMzgrcZJgO5%2FkXkF3EL2F2QS86dQ9%2Bj1PH42WVxaFj59NcPHBy2%2FkgGRHUdZo9KiwYqFXH0AXAJjSCtBwsNGw5j3oZOtvxNkdzcubAcQqCZS29ky8VieZYCtqGd7CsRaWWNDGqOeP0sQZdRzXd%2BQMwE3A%2BkyJHYjg1V%2Bqy8%2FLMZLcmUhnXfszQqV0j&X-Amz-Signature=7b65cbc97b762b83e1b7b9cd4a5dad59a42da33b8dd32ac62a43611e2d9a52a8&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEZYHNZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA3MQ9qsRMOH3VHRCgDmI3y7Sd9VsXjtm%2F%2BQy2T%2FRi7AAiEA154xce7pG%2FImyaTniR5yzlAha8ZNSFNSWC2M6N1u3mUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzhyXULnuK6PsBxRCrcA%2FytmhFY%2Fvu8lVUG7eEIchcxZTiArVa0MZPbaAcEvuvShNqz5ucdXrBzKzDZ8YinxeAH297335NLXrqzuJvV2kGz2xwH1QZs7TEoUdluz4JpYShRnYP3QSxH9hH8LciUm3S%2FgrptXloiUkkmEzCIpA6d2ZeFC17OnJTgZjh9T3Z0abQrBZ8uymtBRcJGej8qvLI6%2BgXflo8JkzC9uJ0K2cz7EV%2BSIt%2F5wTbJzWRLkmW7s6JBvnbTVydvTu4Cd6hDr5WJ%2FDleT0qOac1tOk74%2FtmnpUR3g9r5EVgAWzpUZe7sjF%2F%2F88C4hbtyOpS6K1Furc7gcjlGbEUL1LC3k7PNvenu484b4pagt%2BLiaSPaI9vX44i8tOhUcMRNd83UdihB6zDecakn%2FqqU2Cp8rwEx9u%2BoBpTa601AMiJqB4MBTfs5eseOi0CGjpn8qro%2BOZHAlBnk%2FDr1DcmVwJ6VFohCnniJKGu75mX0JNljodkPoaANxlXkKiCLKSIQTVlFe0K9tKrcchye%2BAizo2WcHrk3n13fKOo3KoRWP%2FWPal%2BJVTHxstsDSOGJXlmLpuOwuru1M2mrxHgmoSNN6awZLZozJoO1chuzrHYIp2eTJq5xehFoEMG5IWR0JjT6pEYgMLP7t78GOqUBx%2F4XHlMEs%2Fmmd9LHlnjmsgctkq%2BwIC7WqdeMzgrcZJgO5%2FkXkF3EL2F2QS86dQ9%2Bj1PH42WVxaFj59NcPHBy2%2FkgGRHUdZo9KiwYqFXH0AXAJjSCtBwsNGw5j3oZOtvxNkdzcubAcQqCZS29ky8VieZYCtqGd7CsRaWWNDGqOeP0sQZdRzXd%2BQMwE3A%2BkyJHYjg1V%2Bqy8%2FLMZLcmUhnXfszQqV0j&X-Amz-Signature=2d0f3bc529a38296c672f3624e5c6ec5f64a17030de469efa7b00062b4bb73eb&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEZYHNZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA3MQ9qsRMOH3VHRCgDmI3y7Sd9VsXjtm%2F%2BQy2T%2FRi7AAiEA154xce7pG%2FImyaTniR5yzlAha8ZNSFNSWC2M6N1u3mUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzhyXULnuK6PsBxRCrcA%2FytmhFY%2Fvu8lVUG7eEIchcxZTiArVa0MZPbaAcEvuvShNqz5ucdXrBzKzDZ8YinxeAH297335NLXrqzuJvV2kGz2xwH1QZs7TEoUdluz4JpYShRnYP3QSxH9hH8LciUm3S%2FgrptXloiUkkmEzCIpA6d2ZeFC17OnJTgZjh9T3Z0abQrBZ8uymtBRcJGej8qvLI6%2BgXflo8JkzC9uJ0K2cz7EV%2BSIt%2F5wTbJzWRLkmW7s6JBvnbTVydvTu4Cd6hDr5WJ%2FDleT0qOac1tOk74%2FtmnpUR3g9r5EVgAWzpUZe7sjF%2F%2F88C4hbtyOpS6K1Furc7gcjlGbEUL1LC3k7PNvenu484b4pagt%2BLiaSPaI9vX44i8tOhUcMRNd83UdihB6zDecakn%2FqqU2Cp8rwEx9u%2BoBpTa601AMiJqB4MBTfs5eseOi0CGjpn8qro%2BOZHAlBnk%2FDr1DcmVwJ6VFohCnniJKGu75mX0JNljodkPoaANxlXkKiCLKSIQTVlFe0K9tKrcchye%2BAizo2WcHrk3n13fKOo3KoRWP%2FWPal%2BJVTHxstsDSOGJXlmLpuOwuru1M2mrxHgmoSNN6awZLZozJoO1chuzrHYIp2eTJq5xehFoEMG5IWR0JjT6pEYgMLP7t78GOqUBx%2F4XHlMEs%2Fmmd9LHlnjmsgctkq%2BwIC7WqdeMzgrcZJgO5%2FkXkF3EL2F2QS86dQ9%2Bj1PH42WVxaFj59NcPHBy2%2FkgGRHUdZo9KiwYqFXH0AXAJjSCtBwsNGw5j3oZOtvxNkdzcubAcQqCZS29ky8VieZYCtqGd7CsRaWWNDGqOeP0sQZdRzXd%2BQMwE3A%2BkyJHYjg1V%2Bqy8%2FLMZLcmUhnXfszQqV0j&X-Amz-Signature=77dfa4eb5aa6789f701cd6368e1c88d3f89a92b24fb316c43806189a4b55c7fb&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEZYHNZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA3MQ9qsRMOH3VHRCgDmI3y7Sd9VsXjtm%2F%2BQy2T%2FRi7AAiEA154xce7pG%2FImyaTniR5yzlAha8ZNSFNSWC2M6N1u3mUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzhyXULnuK6PsBxRCrcA%2FytmhFY%2Fvu8lVUG7eEIchcxZTiArVa0MZPbaAcEvuvShNqz5ucdXrBzKzDZ8YinxeAH297335NLXrqzuJvV2kGz2xwH1QZs7TEoUdluz4JpYShRnYP3QSxH9hH8LciUm3S%2FgrptXloiUkkmEzCIpA6d2ZeFC17OnJTgZjh9T3Z0abQrBZ8uymtBRcJGej8qvLI6%2BgXflo8JkzC9uJ0K2cz7EV%2BSIt%2F5wTbJzWRLkmW7s6JBvnbTVydvTu4Cd6hDr5WJ%2FDleT0qOac1tOk74%2FtmnpUR3g9r5EVgAWzpUZe7sjF%2F%2F88C4hbtyOpS6K1Furc7gcjlGbEUL1LC3k7PNvenu484b4pagt%2BLiaSPaI9vX44i8tOhUcMRNd83UdihB6zDecakn%2FqqU2Cp8rwEx9u%2BoBpTa601AMiJqB4MBTfs5eseOi0CGjpn8qro%2BOZHAlBnk%2FDr1DcmVwJ6VFohCnniJKGu75mX0JNljodkPoaANxlXkKiCLKSIQTVlFe0K9tKrcchye%2BAizo2WcHrk3n13fKOo3KoRWP%2FWPal%2BJVTHxstsDSOGJXlmLpuOwuru1M2mrxHgmoSNN6awZLZozJoO1chuzrHYIp2eTJq5xehFoEMG5IWR0JjT6pEYgMLP7t78GOqUBx%2F4XHlMEs%2Fmmd9LHlnjmsgctkq%2BwIC7WqdeMzgrcZJgO5%2FkXkF3EL2F2QS86dQ9%2Bj1PH42WVxaFj59NcPHBy2%2FkgGRHUdZo9KiwYqFXH0AXAJjSCtBwsNGw5j3oZOtvxNkdzcubAcQqCZS29ky8VieZYCtqGd7CsRaWWNDGqOeP0sQZdRzXd%2BQMwE3A%2BkyJHYjg1V%2Bqy8%2FLMZLcmUhnXfszQqV0j&X-Amz-Signature=a381db57a0edb7f849dc93d3658edea651f294d56088c1501881e7baa1aaf23d&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEZYHNZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA3MQ9qsRMOH3VHRCgDmI3y7Sd9VsXjtm%2F%2BQy2T%2FRi7AAiEA154xce7pG%2FImyaTniR5yzlAha8ZNSFNSWC2M6N1u3mUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzhyXULnuK6PsBxRCrcA%2FytmhFY%2Fvu8lVUG7eEIchcxZTiArVa0MZPbaAcEvuvShNqz5ucdXrBzKzDZ8YinxeAH297335NLXrqzuJvV2kGz2xwH1QZs7TEoUdluz4JpYShRnYP3QSxH9hH8LciUm3S%2FgrptXloiUkkmEzCIpA6d2ZeFC17OnJTgZjh9T3Z0abQrBZ8uymtBRcJGej8qvLI6%2BgXflo8JkzC9uJ0K2cz7EV%2BSIt%2F5wTbJzWRLkmW7s6JBvnbTVydvTu4Cd6hDr5WJ%2FDleT0qOac1tOk74%2FtmnpUR3g9r5EVgAWzpUZe7sjF%2F%2F88C4hbtyOpS6K1Furc7gcjlGbEUL1LC3k7PNvenu484b4pagt%2BLiaSPaI9vX44i8tOhUcMRNd83UdihB6zDecakn%2FqqU2Cp8rwEx9u%2BoBpTa601AMiJqB4MBTfs5eseOi0CGjpn8qro%2BOZHAlBnk%2FDr1DcmVwJ6VFohCnniJKGu75mX0JNljodkPoaANxlXkKiCLKSIQTVlFe0K9tKrcchye%2BAizo2WcHrk3n13fKOo3KoRWP%2FWPal%2BJVTHxstsDSOGJXlmLpuOwuru1M2mrxHgmoSNN6awZLZozJoO1chuzrHYIp2eTJq5xehFoEMG5IWR0JjT6pEYgMLP7t78GOqUBx%2F4XHlMEs%2Fmmd9LHlnjmsgctkq%2BwIC7WqdeMzgrcZJgO5%2FkXkF3EL2F2QS86dQ9%2Bj1PH42WVxaFj59NcPHBy2%2FkgGRHUdZo9KiwYqFXH0AXAJjSCtBwsNGw5j3oZOtvxNkdzcubAcQqCZS29ky8VieZYCtqGd7CsRaWWNDGqOeP0sQZdRzXd%2BQMwE3A%2BkyJHYjg1V%2Bqy8%2FLMZLcmUhnXfszQqV0j&X-Amz-Signature=f4abb79c9c2e0f70b6b5d107228fcb311c4ca9256597866cd4085939b5aa8f08&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEZYHNZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIA3MQ9qsRMOH3VHRCgDmI3y7Sd9VsXjtm%2F%2BQy2T%2FRi7AAiEA154xce7pG%2FImyaTniR5yzlAha8ZNSFNSWC2M6N1u3mUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBzhyXULnuK6PsBxRCrcA%2FytmhFY%2Fvu8lVUG7eEIchcxZTiArVa0MZPbaAcEvuvShNqz5ucdXrBzKzDZ8YinxeAH297335NLXrqzuJvV2kGz2xwH1QZs7TEoUdluz4JpYShRnYP3QSxH9hH8LciUm3S%2FgrptXloiUkkmEzCIpA6d2ZeFC17OnJTgZjh9T3Z0abQrBZ8uymtBRcJGej8qvLI6%2BgXflo8JkzC9uJ0K2cz7EV%2BSIt%2F5wTbJzWRLkmW7s6JBvnbTVydvTu4Cd6hDr5WJ%2FDleT0qOac1tOk74%2FtmnpUR3g9r5EVgAWzpUZe7sjF%2F%2F88C4hbtyOpS6K1Furc7gcjlGbEUL1LC3k7PNvenu484b4pagt%2BLiaSPaI9vX44i8tOhUcMRNd83UdihB6zDecakn%2FqqU2Cp8rwEx9u%2BoBpTa601AMiJqB4MBTfs5eseOi0CGjpn8qro%2BOZHAlBnk%2FDr1DcmVwJ6VFohCnniJKGu75mX0JNljodkPoaANxlXkKiCLKSIQTVlFe0K9tKrcchye%2BAizo2WcHrk3n13fKOo3KoRWP%2FWPal%2BJVTHxstsDSOGJXlmLpuOwuru1M2mrxHgmoSNN6awZLZozJoO1chuzrHYIp2eTJq5xehFoEMG5IWR0JjT6pEYgMLP7t78GOqUBx%2F4XHlMEs%2Fmmd9LHlnjmsgctkq%2BwIC7WqdeMzgrcZJgO5%2FkXkF3EL2F2QS86dQ9%2Bj1PH42WVxaFj59NcPHBy2%2FkgGRHUdZo9KiwYqFXH0AXAJjSCtBwsNGw5j3oZOtvxNkdzcubAcQqCZS29ky8VieZYCtqGd7CsRaWWNDGqOeP0sQZdRzXd%2BQMwE3A%2BkyJHYjg1V%2Bqy8%2FLMZLcmUhnXfszQqV0j&X-Amz-Signature=b303b06afbedcc138dc1ded275eba7c2be62d5d44ea032fa24e97007b7fcfca1&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
