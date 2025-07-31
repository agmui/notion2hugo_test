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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKIAIV2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH736AOjUBUokpd%2FSexZzWnXQRYKxoHLYYOtm5GWNgi7AiAsf3HDt5stRQ7GaC66jreF4GeTwlyNUVLf73SCJC3A%2FiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvS8V4ZUmgMS1f8KtwDjKHjorrUC0b9p%2BTTO4LVInQjdNrONrxQEKo8wSCBT8jzmDsokgM04hZCH%2BPjkYfiGj%2F979At%2F0OQR5nQABg5QYZJVrrcaW78AzCk2I1STpevRg9igzSit%2BcjvUo4WkfVDEfHxF3MZED0SplGzlejOgdR40P%2Bg2U%2FiI2YEZ7ePDjJzHncZcVcMvbAgw47ML5iF4gKVgSV%2BEiDdJyrrYp1kZuPoL2dMUhjW5Ae%2FSju6w3zKaIG0GFQheKlsa7UIgS8mIaaxGtAy8xOAWH7ZgvaE3j6OLmASWeucufjr8we1u4%2BjIzXyH%2FWzknr7dFkz8n4GMHbc9GThsRXtNjHXODreVhDEc1rGKX07ntYZ440x7nTh2i6DOUIAV2yNMUQ8xvIEQAea0hiYCSNx7zyMvfpN0FoaRcTliqfOUBNCikSA8lwsGh1ZhxV6xMDZkWLmaQRKMH5CAR2%2BXcyRamXIqPbEoD1k%2BYe62vhCtdHLycaiZ%2B%2BfE%2BrTunoBBGN3Jw7WeaLIiV22XXY0jAsGTxmXUXPKLYQMeWodBHAbn%2BO5x51yx8n88JeCRHZ4J3Bohkq4DVcI0jCgWMrj4a96tU5lximUrsN8gREyc2LdUurN21hq2zH%2Fn74mE%2FfyCpRWsEwkoGvxAY6pgGI1ZTQzEPvIqrjBUtwhIWDiaeP0iNfXtDB95V5fHGbOPacnDkgiNqXM1J9A4VBFFCBNl06rQIt%2FRv6WXBv%2FT7ytpdY7IVDWUuaOqCVHPemBoqMmrXIAqkG8h1kXoYKGIS6GC%2F6rGxG5ho%2FyRqbXxs6beFucWDC%2ByYR4rSVAE16cnSXUF8wylrR8R0ri7utkM7jMeKQJfckS%2Bqm0PhOlmXF5nz%2BnA5h&X-Amz-Signature=19fa2dad9d93741238c01ca5c5080450e92571e3c14fcf4690dfb6eb256b3bb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKIAIV2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201046Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH736AOjUBUokpd%2FSexZzWnXQRYKxoHLYYOtm5GWNgi7AiAsf3HDt5stRQ7GaC66jreF4GeTwlyNUVLf73SCJC3A%2FiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvS8V4ZUmgMS1f8KtwDjKHjorrUC0b9p%2BTTO4LVInQjdNrONrxQEKo8wSCBT8jzmDsokgM04hZCH%2BPjkYfiGj%2F979At%2F0OQR5nQABg5QYZJVrrcaW78AzCk2I1STpevRg9igzSit%2BcjvUo4WkfVDEfHxF3MZED0SplGzlejOgdR40P%2Bg2U%2FiI2YEZ7ePDjJzHncZcVcMvbAgw47ML5iF4gKVgSV%2BEiDdJyrrYp1kZuPoL2dMUhjW5Ae%2FSju6w3zKaIG0GFQheKlsa7UIgS8mIaaxGtAy8xOAWH7ZgvaE3j6OLmASWeucufjr8we1u4%2BjIzXyH%2FWzknr7dFkz8n4GMHbc9GThsRXtNjHXODreVhDEc1rGKX07ntYZ440x7nTh2i6DOUIAV2yNMUQ8xvIEQAea0hiYCSNx7zyMvfpN0FoaRcTliqfOUBNCikSA8lwsGh1ZhxV6xMDZkWLmaQRKMH5CAR2%2BXcyRamXIqPbEoD1k%2BYe62vhCtdHLycaiZ%2B%2BfE%2BrTunoBBGN3Jw7WeaLIiV22XXY0jAsGTxmXUXPKLYQMeWodBHAbn%2BO5x51yx8n88JeCRHZ4J3Bohkq4DVcI0jCgWMrj4a96tU5lximUrsN8gREyc2LdUurN21hq2zH%2Fn74mE%2FfyCpRWsEwkoGvxAY6pgGI1ZTQzEPvIqrjBUtwhIWDiaeP0iNfXtDB95V5fHGbOPacnDkgiNqXM1J9A4VBFFCBNl06rQIt%2FRv6WXBv%2FT7ytpdY7IVDWUuaOqCVHPemBoqMmrXIAqkG8h1kXoYKGIS6GC%2F6rGxG5ho%2FyRqbXxs6beFucWDC%2ByYR4rSVAE16cnSXUF8wylrR8R0ri7utkM7jMeKQJfckS%2Bqm0PhOlmXF5nz%2BnA5h&X-Amz-Signature=379abbb43387baaadeee4de32de7852eeb805b3562cad3c77a09924242bd03e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKIAIV2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH736AOjUBUokpd%2FSexZzWnXQRYKxoHLYYOtm5GWNgi7AiAsf3HDt5stRQ7GaC66jreF4GeTwlyNUVLf73SCJC3A%2FiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvS8V4ZUmgMS1f8KtwDjKHjorrUC0b9p%2BTTO4LVInQjdNrONrxQEKo8wSCBT8jzmDsokgM04hZCH%2BPjkYfiGj%2F979At%2F0OQR5nQABg5QYZJVrrcaW78AzCk2I1STpevRg9igzSit%2BcjvUo4WkfVDEfHxF3MZED0SplGzlejOgdR40P%2Bg2U%2FiI2YEZ7ePDjJzHncZcVcMvbAgw47ML5iF4gKVgSV%2BEiDdJyrrYp1kZuPoL2dMUhjW5Ae%2FSju6w3zKaIG0GFQheKlsa7UIgS8mIaaxGtAy8xOAWH7ZgvaE3j6OLmASWeucufjr8we1u4%2BjIzXyH%2FWzknr7dFkz8n4GMHbc9GThsRXtNjHXODreVhDEc1rGKX07ntYZ440x7nTh2i6DOUIAV2yNMUQ8xvIEQAea0hiYCSNx7zyMvfpN0FoaRcTliqfOUBNCikSA8lwsGh1ZhxV6xMDZkWLmaQRKMH5CAR2%2BXcyRamXIqPbEoD1k%2BYe62vhCtdHLycaiZ%2B%2BfE%2BrTunoBBGN3Jw7WeaLIiV22XXY0jAsGTxmXUXPKLYQMeWodBHAbn%2BO5x51yx8n88JeCRHZ4J3Bohkq4DVcI0jCgWMrj4a96tU5lximUrsN8gREyc2LdUurN21hq2zH%2Fn74mE%2FfyCpRWsEwkoGvxAY6pgGI1ZTQzEPvIqrjBUtwhIWDiaeP0iNfXtDB95V5fHGbOPacnDkgiNqXM1J9A4VBFFCBNl06rQIt%2FRv6WXBv%2FT7ytpdY7IVDWUuaOqCVHPemBoqMmrXIAqkG8h1kXoYKGIS6GC%2F6rGxG5ho%2FyRqbXxs6beFucWDC%2ByYR4rSVAE16cnSXUF8wylrR8R0ri7utkM7jMeKQJfckS%2Bqm0PhOlmXF5nz%2BnA5h&X-Amz-Signature=474dd59240cbcc6ecc61dac8c313a29c867d86ed5b4d299d76a03f35b115b4f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKIAIV2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH736AOjUBUokpd%2FSexZzWnXQRYKxoHLYYOtm5GWNgi7AiAsf3HDt5stRQ7GaC66jreF4GeTwlyNUVLf73SCJC3A%2FiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvS8V4ZUmgMS1f8KtwDjKHjorrUC0b9p%2BTTO4LVInQjdNrONrxQEKo8wSCBT8jzmDsokgM04hZCH%2BPjkYfiGj%2F979At%2F0OQR5nQABg5QYZJVrrcaW78AzCk2I1STpevRg9igzSit%2BcjvUo4WkfVDEfHxF3MZED0SplGzlejOgdR40P%2Bg2U%2FiI2YEZ7ePDjJzHncZcVcMvbAgw47ML5iF4gKVgSV%2BEiDdJyrrYp1kZuPoL2dMUhjW5Ae%2FSju6w3zKaIG0GFQheKlsa7UIgS8mIaaxGtAy8xOAWH7ZgvaE3j6OLmASWeucufjr8we1u4%2BjIzXyH%2FWzknr7dFkz8n4GMHbc9GThsRXtNjHXODreVhDEc1rGKX07ntYZ440x7nTh2i6DOUIAV2yNMUQ8xvIEQAea0hiYCSNx7zyMvfpN0FoaRcTliqfOUBNCikSA8lwsGh1ZhxV6xMDZkWLmaQRKMH5CAR2%2BXcyRamXIqPbEoD1k%2BYe62vhCtdHLycaiZ%2B%2BfE%2BrTunoBBGN3Jw7WeaLIiV22XXY0jAsGTxmXUXPKLYQMeWodBHAbn%2BO5x51yx8n88JeCRHZ4J3Bohkq4DVcI0jCgWMrj4a96tU5lximUrsN8gREyc2LdUurN21hq2zH%2Fn74mE%2FfyCpRWsEwkoGvxAY6pgGI1ZTQzEPvIqrjBUtwhIWDiaeP0iNfXtDB95V5fHGbOPacnDkgiNqXM1J9A4VBFFCBNl06rQIt%2FRv6WXBv%2FT7ytpdY7IVDWUuaOqCVHPemBoqMmrXIAqkG8h1kXoYKGIS6GC%2F6rGxG5ho%2FyRqbXxs6beFucWDC%2ByYR4rSVAE16cnSXUF8wylrR8R0ri7utkM7jMeKQJfckS%2Bqm0PhOlmXF5nz%2BnA5h&X-Amz-Signature=446586bb1318c6123275c6a196ec98c179104dde134b20843c00ebb616f5f4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKIAIV2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH736AOjUBUokpd%2FSexZzWnXQRYKxoHLYYOtm5GWNgi7AiAsf3HDt5stRQ7GaC66jreF4GeTwlyNUVLf73SCJC3A%2FiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvS8V4ZUmgMS1f8KtwDjKHjorrUC0b9p%2BTTO4LVInQjdNrONrxQEKo8wSCBT8jzmDsokgM04hZCH%2BPjkYfiGj%2F979At%2F0OQR5nQABg5QYZJVrrcaW78AzCk2I1STpevRg9igzSit%2BcjvUo4WkfVDEfHxF3MZED0SplGzlejOgdR40P%2Bg2U%2FiI2YEZ7ePDjJzHncZcVcMvbAgw47ML5iF4gKVgSV%2BEiDdJyrrYp1kZuPoL2dMUhjW5Ae%2FSju6w3zKaIG0GFQheKlsa7UIgS8mIaaxGtAy8xOAWH7ZgvaE3j6OLmASWeucufjr8we1u4%2BjIzXyH%2FWzknr7dFkz8n4GMHbc9GThsRXtNjHXODreVhDEc1rGKX07ntYZ440x7nTh2i6DOUIAV2yNMUQ8xvIEQAea0hiYCSNx7zyMvfpN0FoaRcTliqfOUBNCikSA8lwsGh1ZhxV6xMDZkWLmaQRKMH5CAR2%2BXcyRamXIqPbEoD1k%2BYe62vhCtdHLycaiZ%2B%2BfE%2BrTunoBBGN3Jw7WeaLIiV22XXY0jAsGTxmXUXPKLYQMeWodBHAbn%2BO5x51yx8n88JeCRHZ4J3Bohkq4DVcI0jCgWMrj4a96tU5lximUrsN8gREyc2LdUurN21hq2zH%2Fn74mE%2FfyCpRWsEwkoGvxAY6pgGI1ZTQzEPvIqrjBUtwhIWDiaeP0iNfXtDB95V5fHGbOPacnDkgiNqXM1J9A4VBFFCBNl06rQIt%2FRv6WXBv%2FT7ytpdY7IVDWUuaOqCVHPemBoqMmrXIAqkG8h1kXoYKGIS6GC%2F6rGxG5ho%2FyRqbXxs6beFucWDC%2ByYR4rSVAE16cnSXUF8wylrR8R0ri7utkM7jMeKQJfckS%2Bqm0PhOlmXF5nz%2BnA5h&X-Amz-Signature=5af83d3a6239dad6c34e62fa6e17a8f237b6b1a0d4cf22d9573b9c38e9549c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKIAIV2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH736AOjUBUokpd%2FSexZzWnXQRYKxoHLYYOtm5GWNgi7AiAsf3HDt5stRQ7GaC66jreF4GeTwlyNUVLf73SCJC3A%2FiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvS8V4ZUmgMS1f8KtwDjKHjorrUC0b9p%2BTTO4LVInQjdNrONrxQEKo8wSCBT8jzmDsokgM04hZCH%2BPjkYfiGj%2F979At%2F0OQR5nQABg5QYZJVrrcaW78AzCk2I1STpevRg9igzSit%2BcjvUo4WkfVDEfHxF3MZED0SplGzlejOgdR40P%2Bg2U%2FiI2YEZ7ePDjJzHncZcVcMvbAgw47ML5iF4gKVgSV%2BEiDdJyrrYp1kZuPoL2dMUhjW5Ae%2FSju6w3zKaIG0GFQheKlsa7UIgS8mIaaxGtAy8xOAWH7ZgvaE3j6OLmASWeucufjr8we1u4%2BjIzXyH%2FWzknr7dFkz8n4GMHbc9GThsRXtNjHXODreVhDEc1rGKX07ntYZ440x7nTh2i6DOUIAV2yNMUQ8xvIEQAea0hiYCSNx7zyMvfpN0FoaRcTliqfOUBNCikSA8lwsGh1ZhxV6xMDZkWLmaQRKMH5CAR2%2BXcyRamXIqPbEoD1k%2BYe62vhCtdHLycaiZ%2B%2BfE%2BrTunoBBGN3Jw7WeaLIiV22XXY0jAsGTxmXUXPKLYQMeWodBHAbn%2BO5x51yx8n88JeCRHZ4J3Bohkq4DVcI0jCgWMrj4a96tU5lximUrsN8gREyc2LdUurN21hq2zH%2Fn74mE%2FfyCpRWsEwkoGvxAY6pgGI1ZTQzEPvIqrjBUtwhIWDiaeP0iNfXtDB95V5fHGbOPacnDkgiNqXM1J9A4VBFFCBNl06rQIt%2FRv6WXBv%2FT7ytpdY7IVDWUuaOqCVHPemBoqMmrXIAqkG8h1kXoYKGIS6GC%2F6rGxG5ho%2FyRqbXxs6beFucWDC%2ByYR4rSVAE16cnSXUF8wylrR8R0ri7utkM7jMeKQJfckS%2Bqm0PhOlmXF5nz%2BnA5h&X-Amz-Signature=9c89d25fbddd48e8d4b97fdfdf30cc0477e689060759e9cfee03b239991f02cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTKIAIV2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T201050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH736AOjUBUokpd%2FSexZzWnXQRYKxoHLYYOtm5GWNgi7AiAsf3HDt5stRQ7GaC66jreF4GeTwlyNUVLf73SCJC3A%2FiqIBAjc%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqQvS8V4ZUmgMS1f8KtwDjKHjorrUC0b9p%2BTTO4LVInQjdNrONrxQEKo8wSCBT8jzmDsokgM04hZCH%2BPjkYfiGj%2F979At%2F0OQR5nQABg5QYZJVrrcaW78AzCk2I1STpevRg9igzSit%2BcjvUo4WkfVDEfHxF3MZED0SplGzlejOgdR40P%2Bg2U%2FiI2YEZ7ePDjJzHncZcVcMvbAgw47ML5iF4gKVgSV%2BEiDdJyrrYp1kZuPoL2dMUhjW5Ae%2FSju6w3zKaIG0GFQheKlsa7UIgS8mIaaxGtAy8xOAWH7ZgvaE3j6OLmASWeucufjr8we1u4%2BjIzXyH%2FWzknr7dFkz8n4GMHbc9GThsRXtNjHXODreVhDEc1rGKX07ntYZ440x7nTh2i6DOUIAV2yNMUQ8xvIEQAea0hiYCSNx7zyMvfpN0FoaRcTliqfOUBNCikSA8lwsGh1ZhxV6xMDZkWLmaQRKMH5CAR2%2BXcyRamXIqPbEoD1k%2BYe62vhCtdHLycaiZ%2B%2BfE%2BrTunoBBGN3Jw7WeaLIiV22XXY0jAsGTxmXUXPKLYQMeWodBHAbn%2BO5x51yx8n88JeCRHZ4J3Bohkq4DVcI0jCgWMrj4a96tU5lximUrsN8gREyc2LdUurN21hq2zH%2Fn74mE%2FfyCpRWsEwkoGvxAY6pgGI1ZTQzEPvIqrjBUtwhIWDiaeP0iNfXtDB95V5fHGbOPacnDkgiNqXM1J9A4VBFFCBNl06rQIt%2FRv6WXBv%2FT7ytpdY7IVDWUuaOqCVHPemBoqMmrXIAqkG8h1kXoYKGIS6GC%2F6rGxG5ho%2FyRqbXxs6beFucWDC%2ByYR4rSVAE16cnSXUF8wylrR8R0ri7utkM7jMeKQJfckS%2Bqm0PhOlmXF5nz%2BnA5h&X-Amz-Signature=d665545cdf10800997b31ca0d471095fb9d801054fb0885c489c13e88b65b6bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
