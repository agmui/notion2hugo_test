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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/70706947-fd18-4537-a67b-e12946812d31/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3ERZTH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBBFt4OnHAGDeX%2BXVixSaVmfFD3nODxn3ahOmMOuKhiuAiEAyLWse9YOPiWJFdNv6esxudTBCJ6IoonK2Cus9atoq9Aq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNpMGO79ePzHhTjlnSrcA8ewiOWIqCdxGr8m%2F%2B54U7uJ4aMkNSQ71QWq70Tsr4onkxOCjao7GSz2GpJymLSApeal4VbhPDMQbEI6cQky0y2FMifp8j2JjY7czYcy9nmYbTSJeth34rMfkarOQrpHozAs8GdQ0AqU6gJ%2FIRNkdj9bxJ4YkhmQrVhjKMJ5UsrEFKWLbOEBFvLHSz1dMXIAVmlYcT1yvycFVos3NoTpYZAOraFzhUxQyXIurbUVfdDZUwgx9%2FyUDWxPf3%2F03enWwcbb1t8OJZVQSkS81KTyrR7Jw2WBkVPQiyNl3vQ4G0Pj1X8AA1j%2FdBEHpKwazb%2F38ZsDKcRwyOZu0lVEWFahxto8ejVtiEsOruAqpYOjfuma9ZzmcmpUIIRuHWpM%2FgvqCMz3JG3fbkCXsKbJCiiDHsJJL43swuqVTusQUsVmkZv7IVr3u070GxJBODg8TQ8EnZFuwN96ZEd6%2BQRHD6tha5n%2BVoQO96zrqC6z%2BSjLsHN1h%2BlWCafdD9Rl2lTn1RkW%2FkX%2B9ASeBIkQqVKwAruSO%2FKRGxFkgJK8CGnlJ22SGBvO4sbIPPtnaTVkAnAROm6oWYpSKoW%2BCuFcjZdH%2F8YuzlE5sE2955icYLHzq%2BDgsQ5snFBb%2FYO4oMOeR20PMNCblb0GOqUBXB0z1wUxAZqI8xTotUHe1YElx7sT8Vs2NqMnRL%2FxNsy2HQfF%2FbGi4YNikrPPGUtifdTDcEYSdeX0mh30zJwRsLbWawGuq5V1kO03h7buYl6SuCGIXj%2BRvwPxaO0zFO7ihNqPI76eHjRAELZ0ApGAlm6oj3Np541Oiz6rcTmJYoxd1iOsqZhy0oK8oi2f4ai5jzPBiYX1qoZre27xdg5aRfxUlzYz&X-Amz-Signature=e328293eb8b5c02d0449d022d5e6937303b40eb4dc9cad68642326d247adf1f4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e6cf1e3f-8512-4a3e-b131-079f800bf3e8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3ERZTH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBBFt4OnHAGDeX%2BXVixSaVmfFD3nODxn3ahOmMOuKhiuAiEAyLWse9YOPiWJFdNv6esxudTBCJ6IoonK2Cus9atoq9Aq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNpMGO79ePzHhTjlnSrcA8ewiOWIqCdxGr8m%2F%2B54U7uJ4aMkNSQ71QWq70Tsr4onkxOCjao7GSz2GpJymLSApeal4VbhPDMQbEI6cQky0y2FMifp8j2JjY7czYcy9nmYbTSJeth34rMfkarOQrpHozAs8GdQ0AqU6gJ%2FIRNkdj9bxJ4YkhmQrVhjKMJ5UsrEFKWLbOEBFvLHSz1dMXIAVmlYcT1yvycFVos3NoTpYZAOraFzhUxQyXIurbUVfdDZUwgx9%2FyUDWxPf3%2F03enWwcbb1t8OJZVQSkS81KTyrR7Jw2WBkVPQiyNl3vQ4G0Pj1X8AA1j%2FdBEHpKwazb%2F38ZsDKcRwyOZu0lVEWFahxto8ejVtiEsOruAqpYOjfuma9ZzmcmpUIIRuHWpM%2FgvqCMz3JG3fbkCXsKbJCiiDHsJJL43swuqVTusQUsVmkZv7IVr3u070GxJBODg8TQ8EnZFuwN96ZEd6%2BQRHD6tha5n%2BVoQO96zrqC6z%2BSjLsHN1h%2BlWCafdD9Rl2lTn1RkW%2FkX%2B9ASeBIkQqVKwAruSO%2FKRGxFkgJK8CGnlJ22SGBvO4sbIPPtnaTVkAnAROm6oWYpSKoW%2BCuFcjZdH%2F8YuzlE5sE2955icYLHzq%2BDgsQ5snFBb%2FYO4oMOeR20PMNCblb0GOqUBXB0z1wUxAZqI8xTotUHe1YElx7sT8Vs2NqMnRL%2FxNsy2HQfF%2FbGi4YNikrPPGUtifdTDcEYSdeX0mh30zJwRsLbWawGuq5V1kO03h7buYl6SuCGIXj%2BRvwPxaO0zFO7ihNqPI76eHjRAELZ0ApGAlm6oj3Np541Oiz6rcTmJYoxd1iOsqZhy0oK8oi2f4ai5jzPBiYX1qoZre27xdg5aRfxUlzYz&X-Amz-Signature=87d9d65332c2622e54865d4d7932c79be6b1ce936bb6677a6c1d86ca3deefcd3&X-Amz-SignedHeaders=host&x-id=GetObject)

# What’s inside a python package

- `package.xml` file containing meta-information about the package
- `resource/<package_name>` marker file for the package
- `setup.cfg` is required when a package has executables, so `ros2 run` can find them
- `setup.py` containing instructions for how to install the package
- `my_package` - a folder with the same name as your package, used by ROS 2 tools to find your package, contains `__init__.py`
- `my_node.py` an example node file (how nice of them)

Let's move all of our code into the `my_package/my_package` folder (this is next to the `my_node.py` file)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9ce58f11-0da9-4d3e-b86d-506a9685d378/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3ERZTH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBBFt4OnHAGDeX%2BXVixSaVmfFD3nODxn3ahOmMOuKhiuAiEAyLWse9YOPiWJFdNv6esxudTBCJ6IoonK2Cus9atoq9Aq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNpMGO79ePzHhTjlnSrcA8ewiOWIqCdxGr8m%2F%2B54U7uJ4aMkNSQ71QWq70Tsr4onkxOCjao7GSz2GpJymLSApeal4VbhPDMQbEI6cQky0y2FMifp8j2JjY7czYcy9nmYbTSJeth34rMfkarOQrpHozAs8GdQ0AqU6gJ%2FIRNkdj9bxJ4YkhmQrVhjKMJ5UsrEFKWLbOEBFvLHSz1dMXIAVmlYcT1yvycFVos3NoTpYZAOraFzhUxQyXIurbUVfdDZUwgx9%2FyUDWxPf3%2F03enWwcbb1t8OJZVQSkS81KTyrR7Jw2WBkVPQiyNl3vQ4G0Pj1X8AA1j%2FdBEHpKwazb%2F38ZsDKcRwyOZu0lVEWFahxto8ejVtiEsOruAqpYOjfuma9ZzmcmpUIIRuHWpM%2FgvqCMz3JG3fbkCXsKbJCiiDHsJJL43swuqVTusQUsVmkZv7IVr3u070GxJBODg8TQ8EnZFuwN96ZEd6%2BQRHD6tha5n%2BVoQO96zrqC6z%2BSjLsHN1h%2BlWCafdD9Rl2lTn1RkW%2FkX%2B9ASeBIkQqVKwAruSO%2FKRGxFkgJK8CGnlJ22SGBvO4sbIPPtnaTVkAnAROm6oWYpSKoW%2BCuFcjZdH%2F8YuzlE5sE2955icYLHzq%2BDgsQ5snFBb%2FYO4oMOeR20PMNCblb0GOqUBXB0z1wUxAZqI8xTotUHe1YElx7sT8Vs2NqMnRL%2FxNsy2HQfF%2FbGi4YNikrPPGUtifdTDcEYSdeX0mh30zJwRsLbWawGuq5V1kO03h7buYl6SuCGIXj%2BRvwPxaO0zFO7ihNqPI76eHjRAELZ0ApGAlm6oj3Np541Oiz6rcTmJYoxd1iOsqZhy0oK8oi2f4ai5jzPBiYX1qoZre27xdg5aRfxUlzYz&X-Amz-Signature=31c20905d25e013b1f8e4cb76a89de4958b109dc618366d819ac3db981e78bff&X-Amz-SignedHeaders=host&x-id=GetObject)

To register all the new files we added open `setup.py` and put in the following:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1cd7c262-4cae-4496-9d75-c178537d24a2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3ERZTH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBBFt4OnHAGDeX%2BXVixSaVmfFD3nODxn3ahOmMOuKhiuAiEAyLWse9YOPiWJFdNv6esxudTBCJ6IoonK2Cus9atoq9Aq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNpMGO79ePzHhTjlnSrcA8ewiOWIqCdxGr8m%2F%2B54U7uJ4aMkNSQ71QWq70Tsr4onkxOCjao7GSz2GpJymLSApeal4VbhPDMQbEI6cQky0y2FMifp8j2JjY7czYcy9nmYbTSJeth34rMfkarOQrpHozAs8GdQ0AqU6gJ%2FIRNkdj9bxJ4YkhmQrVhjKMJ5UsrEFKWLbOEBFvLHSz1dMXIAVmlYcT1yvycFVos3NoTpYZAOraFzhUxQyXIurbUVfdDZUwgx9%2FyUDWxPf3%2F03enWwcbb1t8OJZVQSkS81KTyrR7Jw2WBkVPQiyNl3vQ4G0Pj1X8AA1j%2FdBEHpKwazb%2F38ZsDKcRwyOZu0lVEWFahxto8ejVtiEsOruAqpYOjfuma9ZzmcmpUIIRuHWpM%2FgvqCMz3JG3fbkCXsKbJCiiDHsJJL43swuqVTusQUsVmkZv7IVr3u070GxJBODg8TQ8EnZFuwN96ZEd6%2BQRHD6tha5n%2BVoQO96zrqC6z%2BSjLsHN1h%2BlWCafdD9Rl2lTn1RkW%2FkX%2B9ASeBIkQqVKwAruSO%2FKRGxFkgJK8CGnlJ22SGBvO4sbIPPtnaTVkAnAROm6oWYpSKoW%2BCuFcjZdH%2F8YuzlE5sE2955icYLHzq%2BDgsQ5snFBb%2FYO4oMOeR20PMNCblb0GOqUBXB0z1wUxAZqI8xTotUHe1YElx7sT8Vs2NqMnRL%2FxNsy2HQfF%2FbGi4YNikrPPGUtifdTDcEYSdeX0mh30zJwRsLbWawGuq5V1kO03h7buYl6SuCGIXj%2BRvwPxaO0zFO7ihNqPI76eHjRAELZ0ApGAlm6oj3Np541Oiz6rcTmJYoxd1iOsqZhy0oK8oi2f4ai5jzPBiYX1qoZre27xdg5aRfxUlzYz&X-Amz-Signature=91410484d0eaf294a51b11d5e8eb70aacacae52fac72312f2e970b5f751ed4af&X-Amz-SignedHeaders=host&x-id=GetObject)

Now back in the command line **make sure you are in the** **`ros_ws`** **folder!!!**

let's build our package with `colcon build --symlink-install`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2f2a0d27-b173-48fd-b189-5f5c0ce65619/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3ERZTH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBBFt4OnHAGDeX%2BXVixSaVmfFD3nODxn3ahOmMOuKhiuAiEAyLWse9YOPiWJFdNv6esxudTBCJ6IoonK2Cus9atoq9Aq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNpMGO79ePzHhTjlnSrcA8ewiOWIqCdxGr8m%2F%2B54U7uJ4aMkNSQ71QWq70Tsr4onkxOCjao7GSz2GpJymLSApeal4VbhPDMQbEI6cQky0y2FMifp8j2JjY7czYcy9nmYbTSJeth34rMfkarOQrpHozAs8GdQ0AqU6gJ%2FIRNkdj9bxJ4YkhmQrVhjKMJ5UsrEFKWLbOEBFvLHSz1dMXIAVmlYcT1yvycFVos3NoTpYZAOraFzhUxQyXIurbUVfdDZUwgx9%2FyUDWxPf3%2F03enWwcbb1t8OJZVQSkS81KTyrR7Jw2WBkVPQiyNl3vQ4G0Pj1X8AA1j%2FdBEHpKwazb%2F38ZsDKcRwyOZu0lVEWFahxto8ejVtiEsOruAqpYOjfuma9ZzmcmpUIIRuHWpM%2FgvqCMz3JG3fbkCXsKbJCiiDHsJJL43swuqVTusQUsVmkZv7IVr3u070GxJBODg8TQ8EnZFuwN96ZEd6%2BQRHD6tha5n%2BVoQO96zrqC6z%2BSjLsHN1h%2BlWCafdD9Rl2lTn1RkW%2FkX%2B9ASeBIkQqVKwAruSO%2FKRGxFkgJK8CGnlJ22SGBvO4sbIPPtnaTVkAnAROm6oWYpSKoW%2BCuFcjZdH%2F8YuzlE5sE2955icYLHzq%2BDgsQ5snFBb%2FYO4oMOeR20PMNCblb0GOqUBXB0z1wUxAZqI8xTotUHe1YElx7sT8Vs2NqMnRL%2FxNsy2HQfF%2FbGi4YNikrPPGUtifdTDcEYSdeX0mh30zJwRsLbWawGuq5V1kO03h7buYl6SuCGIXj%2BRvwPxaO0zFO7ihNqPI76eHjRAELZ0ApGAlm6oj3Np541Oiz6rcTmJYoxd1iOsqZhy0oK8oi2f4ai5jzPBiYX1qoZre27xdg5aRfxUlzYz&X-Amz-Signature=b10ed96361a21df3e2f268aae98c6dc30118eb4beaace42a812bf1912a4e82db&X-Amz-SignedHeaders=host&x-id=GetObject)

<details>

<summary>what is building?</summary>

if you are a CS major at Rose-Hulman you will learn the answer to this in CSSE132

but TLDR; is it combines all the code files into one program that can be run easily 

</details>

Then in a new terminal go into the `ros_ws` folder with `cd ros_ws` and run `source install/setup.sh`. 

From now on whenever you open a new terminal you must run `source install/setup.sh` in the workspace folder. This lets you run the `ROS` command

Then to run say our `publisher.py` file we do `ros2 run <package name> <file_name>`

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4f4b1219-3a44-4632-aa0a-ce3471699f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3ERZTH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBBFt4OnHAGDeX%2BXVixSaVmfFD3nODxn3ahOmMOuKhiuAiEAyLWse9YOPiWJFdNv6esxudTBCJ6IoonK2Cus9atoq9Aq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNpMGO79ePzHhTjlnSrcA8ewiOWIqCdxGr8m%2F%2B54U7uJ4aMkNSQ71QWq70Tsr4onkxOCjao7GSz2GpJymLSApeal4VbhPDMQbEI6cQky0y2FMifp8j2JjY7czYcy9nmYbTSJeth34rMfkarOQrpHozAs8GdQ0AqU6gJ%2FIRNkdj9bxJ4YkhmQrVhjKMJ5UsrEFKWLbOEBFvLHSz1dMXIAVmlYcT1yvycFVos3NoTpYZAOraFzhUxQyXIurbUVfdDZUwgx9%2FyUDWxPf3%2F03enWwcbb1t8OJZVQSkS81KTyrR7Jw2WBkVPQiyNl3vQ4G0Pj1X8AA1j%2FdBEHpKwazb%2F38ZsDKcRwyOZu0lVEWFahxto8ejVtiEsOruAqpYOjfuma9ZzmcmpUIIRuHWpM%2FgvqCMz3JG3fbkCXsKbJCiiDHsJJL43swuqVTusQUsVmkZv7IVr3u070GxJBODg8TQ8EnZFuwN96ZEd6%2BQRHD6tha5n%2BVoQO96zrqC6z%2BSjLsHN1h%2BlWCafdD9Rl2lTn1RkW%2FkX%2B9ASeBIkQqVKwAruSO%2FKRGxFkgJK8CGnlJ22SGBvO4sbIPPtnaTVkAnAROm6oWYpSKoW%2BCuFcjZdH%2F8YuzlE5sE2955icYLHzq%2BDgsQ5snFBb%2FYO4oMOeR20PMNCblb0GOqUBXB0z1wUxAZqI8xTotUHe1YElx7sT8Vs2NqMnRL%2FxNsy2HQfF%2FbGi4YNikrPPGUtifdTDcEYSdeX0mh30zJwRsLbWawGuq5V1kO03h7buYl6SuCGIXj%2BRvwPxaO0zFO7ihNqPI76eHjRAELZ0ApGAlm6oj3Np541Oiz6rcTmJYoxd1iOsqZhy0oK8oi2f4ai5jzPBiYX1qoZre27xdg5aRfxUlzYz&X-Amz-Signature=497327e37fd379df318d1a188056037a6b363ee9614fa67ee60d05652d4c200c&X-Amz-SignedHeaders=host&x-id=GetObject)

**remember to run** **`source install/setup.sh`** **for the subscriber!!!**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/02121119-dad4-49ec-8356-c956108b4243/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VI3ERZTH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T020915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIBBFt4OnHAGDeX%2BXVixSaVmfFD3nODxn3ahOmMOuKhiuAiEAyLWse9YOPiWJFdNv6esxudTBCJ6IoonK2Cus9atoq9Aq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDNpMGO79ePzHhTjlnSrcA8ewiOWIqCdxGr8m%2F%2B54U7uJ4aMkNSQ71QWq70Tsr4onkxOCjao7GSz2GpJymLSApeal4VbhPDMQbEI6cQky0y2FMifp8j2JjY7czYcy9nmYbTSJeth34rMfkarOQrpHozAs8GdQ0AqU6gJ%2FIRNkdj9bxJ4YkhmQrVhjKMJ5UsrEFKWLbOEBFvLHSz1dMXIAVmlYcT1yvycFVos3NoTpYZAOraFzhUxQyXIurbUVfdDZUwgx9%2FyUDWxPf3%2F03enWwcbb1t8OJZVQSkS81KTyrR7Jw2WBkVPQiyNl3vQ4G0Pj1X8AA1j%2FdBEHpKwazb%2F38ZsDKcRwyOZu0lVEWFahxto8ejVtiEsOruAqpYOjfuma9ZzmcmpUIIRuHWpM%2FgvqCMz3JG3fbkCXsKbJCiiDHsJJL43swuqVTusQUsVmkZv7IVr3u070GxJBODg8TQ8EnZFuwN96ZEd6%2BQRHD6tha5n%2BVoQO96zrqC6z%2BSjLsHN1h%2BlWCafdD9Rl2lTn1RkW%2FkX%2B9ASeBIkQqVKwAruSO%2FKRGxFkgJK8CGnlJ22SGBvO4sbIPPtnaTVkAnAROm6oWYpSKoW%2BCuFcjZdH%2F8YuzlE5sE2955icYLHzq%2BDgsQ5snFBb%2FYO4oMOeR20PMNCblb0GOqUBXB0z1wUxAZqI8xTotUHe1YElx7sT8Vs2NqMnRL%2FxNsy2HQfF%2FbGi4YNikrPPGUtifdTDcEYSdeX0mh30zJwRsLbWawGuq5V1kO03h7buYl6SuCGIXj%2BRvwPxaO0zFO7ihNqPI76eHjRAELZ0ApGAlm6oj3Np541Oiz6rcTmJYoxd1iOsqZhy0oK8oi2f4ai5jzPBiYX1qoZre27xdg5aRfxUlzYz&X-Amz-Signature=b50cb55e5c357a670e0cc32cd4ae553607f69da1bf7b67f337ed9f1df65ef8cf&X-Amz-SignedHeaders=host&x-id=GetObject)

and congrats you have successfully setup your own `ROS` package.

### Sidenote:

running `colcon build --symlink-install` has created other folder `build`, `install`, and `log`

for the most part, these can be ignored.

# Exercise!!!! ( ik u love them )

- try running the server and client setup but with in the enviroment
- Create a new package called `server_client_pkg` and copy the `server.py` and `client.py` files in there. Then build and run the two files.
